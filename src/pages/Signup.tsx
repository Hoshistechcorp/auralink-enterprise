import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, UserPlus, ArrowRight, Check, Building2, Globe2, X } from "lucide-react";
import { requestSignUpOtp } from "@/lib/auth";
import { toast } from "sonner";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import { LegalDialog } from "@/components/legal/LegalDialog";
import { termsSections, privacySections, TERMS_META, PRIVACY_META } from "@/lib/legalContent";

const features = [
  "Smart QR codes & digital menus",
  "Loyalty, referrals & gamification",
  "Reviews & reputation management",
  "Analytics & multi-location support",
];

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [accountType, setAccountType] = useState<"enterprise" | "tourism" | null>(null);
  const [showTypeModal, setShowTypeModal] = useState(true);




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (!agreed) {
      setError("Please accept the Terms of Service and Privacy Policy to continue");
      return;
    }


    setLoading(true);
    try {
      requestSignUpOtp(name, email, password);
      toast.success("Verification code sent to your email");
      navigate(`/verify-otp?mode=signup&email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left — branding panel */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-primary items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center space-y-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={ibloovLogo} alt="iBloov" className="h-12 w-auto rounded-xl" />
            <span className="text-2xl font-display font-bold text-primary-foreground">AuraLink</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-primary-foreground leading-tight">
            Everything your<br />business needs.
          </h1>
          <ul className="space-y-3 text-left max-w-xs mx-auto">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                {f}
              </li>
            ))}
          </ul>
          <p className="text-primary-foreground/50 text-xs">
            Free 3-week trial · No credit card required
          </p>
        </motion.div>
      </div>

      {/* Right — signup form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm space-y-8"
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 justify-center mb-4">
            <img src={ibloovLogo} alt="iBloov" className="h-8 w-auto rounded-lg" />
            <span className="font-display font-bold text-lg">AuraLink</span>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-display font-bold">Create your account</h2>
            <p className="text-sm text-muted-foreground mt-1">Start your free 3-week trial</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-medium text-center">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 characters"
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/30 cursor-pointer"
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" target="_blank" className="text-primary font-semibold hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" target="_blank" className="text-primary font-semibold hover:underline">
                  Privacy Policy
                </Link>.
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || !agreed}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  Create Account
                </>
              )}
            </button>

          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in <ArrowRight className="w-3 h-3 inline" />
            </Link>
          </p>
        </motion.div>
      </div>

      <LegalDialog
        open={termsOpen}
        onOpenChange={setTermsOpen}
        variant="terms"
        title="Terms of Service"
        effective={TERMS_META.effective}
        version={TERMS_META.version}
        sections={termsSections}
      />
      <LegalDialog
        open={privacyOpen}
        onOpenChange={setPrivacyOpen}
        variant="privacy"
        title="Privacy Policy"
        effective={PRIVACY_META.effective}
        version={PRIVACY_META.version}
        sections={privacySections}
      />

      {/* Account Type Selector Modal */}
      <AnimatePresence>
        {showTypeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowTypeModal(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="w-full max-w-lg mx-4"
            >
              <div className="bg-background border border-border rounded-3xl shadow-2xl p-8 relative">
                <button
                  onClick={() => setShowTypeModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="text-center mb-8">
                  <h3 className="text-xl font-display font-bold">I'm joining as</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Select the account type that fits your needs
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Enterprise Card */}
                  <button
                    onClick={() => {
                      setAccountType("enterprise");
                      setShowTypeModal(false);
                    }}
                    className={`relative flex flex-col items-start gap-3 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                      accountType === "enterprise"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30 hover:bg-muted/50"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Enterprise</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Business & Hospitality</p>
                    </div>
                    {accountType === "enterprise" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </motion.div>
                    )}
                  </button>

                  {/* Tourism Card */}
                  <button
                    onClick={() => {
                      setAccountType("tourism");
                      setShowTypeModal(false);
                    }}
                    className={`relative flex flex-col items-start gap-3 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                      accountType === "tourism"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30 hover:bg-muted/50"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Globe2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Tourism Board</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Destination Marketing</p>
                    </div>
                    {accountType === "tourism" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </motion.div>
                    )}
                  </button>
                </div>

                {accountType && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs text-muted-foreground mt-6"
                  >
                    You can change this later in your account settings
                  </motion.p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default Signup;
