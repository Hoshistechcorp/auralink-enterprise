import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import { requestPasswordResetOtp } from "@/lib/auth";
import { toast } from "sonner";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      requestPasswordResetOtp(email);
      toast.success("Verification code sent to your email");
      navigate(`/verify-otp?mode=reset&email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-display font-bold">Reset your password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We’ll send a one-time code to your email so you can verify it before choosing a new password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-center text-xs font-medium text-destructive">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground">Email</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-border bg-muted/50 py-3 pl-11 pr-4 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending code..." : "Send verification code"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/login" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;