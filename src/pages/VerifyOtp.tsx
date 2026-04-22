import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MailCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { getOtpSession, resendOtp, verifyOtp } from "@/lib/auth";
import { toast } from "sonner";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const RESEND_COOLDOWN = 30;

const verificationHighlights = [
  "Protected account confirmation",
  "Fast onboarding continuation",
  "One-time 6-digit verification",
];

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
  const [countdown, setCountdown] = useState(RESEND_COOLDOWN);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = window.setInterval(() => {
      setCountdown((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [countdown]);

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
    if (countdown > 0) return;

    setError("");
    setResending(true);

    try {
      resendOtp(mode, email);
      toast.success("A new verification code has been sent");
      setCountdown(RESEND_COOLDOWN);
      setOtp("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setResending(false);
    }
  };

  if (!email || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-md rounded-[var(--radius)] border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="text-2xl font-display font-bold">Verification expired</h1>
          <p className="mt-2 text-sm text-muted-foreground">Request a new code to continue.</p>
          <Link to={mode === "reset" ? "/forgot-password" : "/signup"} className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="relative hidden overflow-hidden border-r border-border bg-primary lg:flex lg:min-h-screen lg:flex-col lg:justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/70" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--primary-foreground)) 0, transparent 30%), radial-gradient(circle at 80% 70%, hsl(var(--primary-foreground)) 0, transparent 28%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 flex h-full flex-col justify-between p-12 text-primary-foreground"
        >
          <div className="flex items-center gap-3">
            <img src={ibloovLogo} alt="iBloov" className="h-11 w-auto rounded-xl border border-primary-foreground/20" />
            <div>
              <p className="text-sm text-primary-foreground/70">AuraLink access</p>
              <h2 className="text-2xl font-display font-bold">Secure verification</h2>
            </div>
          </div>

          <div className="max-w-lg space-y-6">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-display font-bold leading-tight">
                {mode === "signup" ? "Complete your registration" : "Confirm your password reset"}
              </h1>
              <p className="max-w-md text-sm leading-6 text-primary-foreground/75">
                Enter the one-time code sent to your email to continue with a secure, uninterrupted account flow.
              </p>
            </div>

            <div className="space-y-3">
              {verificationHighlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                  <span className="h-2 w-2 rounded-full bg-primary-foreground/80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-xl rounded-[var(--radius)] border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur-sm">
            <p className="text-3xl leading-none text-secondary">“</p>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/85">
              Verification keeps the experience fast while making sure each account action stays intentional and secure.
            </p>
            <p className="mt-5 text-sm font-semibold">AuraLink onboarding flow</p>
          </div>
        </motion.div>
      </div>

      <div className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-xl"
        >
          <div className="mb-8 flex items-center justify-between gap-4 lg:hidden">
            <div className="flex items-center gap-3">
              <img src={ibloovLogo} alt="iBloov" className="h-10 w-auto rounded-lg" />
              <div>
                <p className="text-sm text-muted-foreground">AuraLink access</p>
                <p className="font-display text-lg font-bold">Secure verification</p>
              </div>
            </div>
          </div>

          <div className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-8">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  {mode === "signup" ? "Registration verification" : "Password reset verification"}
                </p>
                <h1 className="text-3xl font-display font-bold leading-tight">
                  {mode === "signup" ? "Complete your registration" : "Verify your email"}
                </h1>
                <p className="max-w-lg text-sm leading-6 text-muted-foreground">
                  We sent a 6-digit code to <span className="font-semibold text-foreground">{email}</span>. Enter it below to continue.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {error && (
                <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-center text-xs font-medium text-destructive">
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <p className="text-center text-sm font-medium text-muted-foreground">Enter 6-digit code</p>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup className="gap-2 sm:gap-3">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="h-14 w-12 rounded-2xl border border-border bg-background text-base shadow-none transition-colors focus-visible:border-primary sm:w-14"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <button
                type="button"
                onClick={handleVerify}
                disabled={otp.length !== 6 || loading}
                className="w-full rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Verifying..." : mode === "signup" ? "Continue registration" : "Continue"}
              </button>

              <div className="space-y-3 text-center">
                <p className="text-sm text-muted-foreground">
                  Didn&apos;t get a code?{" "}
                  {countdown > 0 ? (
                    <span className="font-semibold text-foreground">Resending in 0:{String(countdown).padStart(2, "0")}</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={resending}
                      className="inline-flex items-center gap-2 font-semibold text-primary hover:underline disabled:opacity-50"
                    >
                      <RefreshCw className={`h-4 w-4 ${resending ? "animate-spin" : ""}`} />
                      {resending ? "Sending..." : "Resend code"}
                    </button>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">Check your inbox and spam folder before requesting another code.</p>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
              <Link to={mode === "reset" ? "/forgot-password" : "/signup"} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyOtp;