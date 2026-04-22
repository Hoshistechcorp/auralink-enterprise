import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MailCheck, RefreshCw } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { getOtpSession, resendOtp, verifyOtp } from "@/lib/auth";
import { toast } from "sonner";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") === "reset" ? "reset" : "signup";
  const email = searchParams.get("email") || "";
  const session = useMemo(() => (email ? getOtpSession(mode, email) : null), [email, mode]);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = () => {
    setError("");
    setLoading(true);

    try {
      verifyOtp(mode, email, otp);
      toast.success(mode === "signup" ? "Email verified successfully" : "Code verified successfully");
      navigate(mode === "signup" ? "/onboarding" : `/reset-password?email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = () => {
    setError("");
    setResending(true);

    try {
      const code = resendOtp(mode, email);
      toast.success(`New verification code sent: ${code}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setResending(false);
    }
  };

  if (!email || !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-[var(--radius)] border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="text-2xl font-display font-bold">Verification expired</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Request a new code to continue.
          </p>
          <Link to={mode === "reset" ? "/forgot-password" : "/signup"} className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md rounded-[var(--radius)] border border-border bg-card p-8 shadow-sm"
      >
        <div className="mb-8 flex items-center justify-center gap-3">
          <img src={ibloovLogo} alt="iBloov" className="h-10 w-auto rounded-lg" />
          <span className="text-xl font-display font-bold">AuraLink</span>
        </div>

        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MailCheck className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-display font-bold">Enter verification code</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We sent a 6-digit code to <span className="font-medium text-foreground">{email}</span>.
          </p>
        </div>

        <div className="space-y-4">
          {error && (
            <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-center text-xs font-medium text-destructive">
              {error}
            </div>
          )}

          <div className="flex justify-center">
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} className="h-12 w-12 rounded-xl border border-border bg-background text-base" />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          <button
            type="button"
            onClick={handleVerify}
            disabled={otp.length !== 6 || loading}
            className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify code"}
          </button>

          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${resending ? "animate-spin" : ""}`} />
            {resending ? "Sending..." : "Resend code"}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <Link to={mode === "reset" ? "/forgot-password" : "/signup"} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyOtp;