import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { canResetPassword, resetPassword } from "@/lib/auth";
import { toast } from "sonner";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const verified = email && canResetPassword(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      resetPassword(email, password);
      toast.success("Password reset successfully");
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!verified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-[var(--radius)] border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="text-2xl font-display font-bold">Verification required</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Verify the code sent to your email before resetting your password.
          </p>
          <Link to="/forgot-password" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">
            Request a new code
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
            <LockKeyhole className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-display font-bold">Create a new password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose a secure password for <span className="font-medium text-foreground">{email}</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-center text-xs font-medium text-destructive">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground">New password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 characters"
                className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 pr-11 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground">Confirm password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 pr-11 text-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Updating password..." : "Save new password"}
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

export default ResetPassword;