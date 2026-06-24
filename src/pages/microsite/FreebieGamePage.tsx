import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Gamepad2, Gift, RotateCcw, Trophy, Sparkles, Mail, Check, Copy, Clock, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { createClaim, type FreebieClaim } from "@/lib/freebieClaims";


const prizes = [
  { label: "10% Off", color: "hsl(var(--primary))", icon: Gift },
  { label: "Free Dessert", color: "hsl(var(--aura-success))", icon: Sparkles },
  { label: "Try Again", color: "hsl(var(--muted-foreground))", icon: RotateCcw },
  { label: "Free Drink", color: "hsl(var(--aura-info))", icon: Gift },
  { label: "20% Off", color: "hsl(var(--aura-warning))", icon: Trophy },
  { label: "Try Again", color: "hsl(var(--muted-foreground))", icon: RotateCcw },
  { label: "Free Appetizer", color: "hsl(var(--secondary))", icon: Gift },
  { label: "VIP Table", color: "hsl(var(--primary))", icon: Trophy },
];

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);
const nameSchema = z.string().trim().min(2, "Please enter your name").max(80);

const FreebieGamePage = () => {
  const navigate = useNavigate();
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [spinsLeft, setSpinsLeft] = useState(1);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [claim, setClaim] = useState<FreebieClaim | null>(null);

  const spin = () => {
    if (spinning || spinsLeft <= 0) return;
    setSpinning(true);
    setResult(null);
    setClaim(null);
    setName("");
    setNameError("");
    setEmail("");
    setEmailError("");
    setSpinsLeft((s) => s - 1);
    setTimeout(() => {
      const winner = Math.floor(Math.random() * prizes.length);
      setResult(winner);
      setSpinning(false);
    }, 2500);
  };

  const handleClaim = () => {
    const nameParsed = nameSchema.safeParse(name);
    const emailParsed = emailSchema.safeParse(email);
    if (!nameParsed.success) setNameError(nameParsed.error.errors[0].message);
    else setNameError("");
    if (!emailParsed.success) setEmailError(emailParsed.error.errors[0].message);
    else setEmailError("");
    if (!nameParsed.success || !emailParsed.success || !prize) return;
    const created = createClaim({
      name: nameParsed.data,
      email: emailParsed.data,
      prizeLabel: prize.label,
      businessName: "Bella Vista",
      claimWindowDays: 7,
    });
    setClaim(created);
    toast({
      title: "🎉 Gift unlocked!",
      description: `We emailed your claim code to ${emailParsed.data}. Show it at the venue within 7 days.`,
    });
  };

  const copyCode = async () => {
    if (!claim) return;
    try {
      await navigator.clipboard.writeText(claim.code);
      toast({ title: "Code copied", description: claim.code });
    } catch {
      toast({ title: "Copy failed", description: "Please copy manually.", variant: "destructive" });
    }
  };


  const prize = result !== null ? prizes[result] : null;
  const isWinner = prize && prize.label !== "Try Again";

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="flex items-center gap-3 p-4 border-b">
        <button onClick={() => navigate("/microsite")} className="p-2 rounded-xl hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-display font-semibold text-lg">Gamification</h1>
          <p className="text-xs text-muted-foreground">Spin, play & win a freebie!</p>
        </div>
        <Gamepad2 className="w-5 h-5 text-primary ml-auto" />
      </div>

      <div className="p-6 flex flex-col items-center gap-6">
        {/* Wheel */}
        <div className="relative w-64 h-64">
          <motion.div
            className="w-full h-full rounded-full border-4 border-primary/20 grid grid-cols-2 grid-rows-4 overflow-hidden"
            animate={spinning ? { rotate: 360 * 5 + (result ?? 0) * 45 } : {}}
            transition={{ duration: 2.5, ease: [0.2, 0.8, 0.3, 1] }}
          >
            {prizes.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="flex flex-col items-center justify-center gap-1 border border-border/30" style={{ backgroundColor: `${p.color}10` }}>
                  <Icon className="w-4 h-4" style={{ color: p.color }} />
                  <span className="text-[10px] font-medium text-center leading-tight">{p.label}</span>
                </div>
              );
            })}
          </motion.div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary rotate-45 rounded-sm" />
        </div>

        {/* Result + Email CTA */}
        <AnimatePresence mode="wait">
          {prize && !isWinner && (
            <motion.div key="lose" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center p-6 rounded-2xl bg-muted/30 border w-full">
              <RotateCcw className="w-10 h-10 mx-auto mb-2 text-muted-foreground" />
              <h2 className="font-display font-bold text-xl">No luck this time!</h2>
              <p className="text-sm text-muted-foreground mt-1">Come back tomorrow for another spin</p>
            </motion.div>
          )}

          {isWinner && !claim && (
            <motion.div key="win" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-full space-y-4">
              <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <prize.icon className="w-10 h-10 mx-auto mb-2" style={{ color: prize.color }} />
                <h2 className="font-display font-bold text-xl">You won: {prize.label}!</h2>
                <p className="text-sm text-muted-foreground mt-1">Enter your email — we'll send your claim code & instructions.</p>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    placeholder="your@email.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-card border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    maxLength={255}
                    onKeyDown={(e) => e.key === "Enter" && handleClaim()}
                  />
                </div>
                {emailError && <p className="text-xs text-destructive px-1">{emailError}</p>}
                <button onClick={handleClaim} className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg">
                  🎁 Email me my claim code
                </button>
                <p className="text-[10px] text-muted-foreground text-center">
                  Show the code at the venue to redeem. No spam, ever.
                </p>
              </div>
            </motion.div>
          )}

          {claim && (
            <motion.div key="claimed" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="w-full space-y-3">
              <div className="text-center p-6 rounded-2xl bg-aura-success/10 border border-aura-success/20">
                <div className="w-14 h-14 rounded-full bg-aura-success/20 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-7 h-7 text-aura-success" />
                </div>
                <h2 className="font-display font-bold text-xl">Check your inbox!</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  We sent your <strong>{claim.prizeLabel}</strong> claim details to <strong>{claim.email}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-card border space-y-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Your claim code</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 font-mono text-2xl font-bold tracking-[0.25em] px-4 py-3 rounded-xl bg-muted/50 text-center">
                      {claim.code}
                    </div>
                    <button onClick={copyCode} className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors" aria-label="Copy code">
                      <Copy className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>
                    Claim by <strong className="text-foreground">
                      {new Date(claim.expiresAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                    </strong>
                  </span>
                </div>
                <div className="text-xs text-muted-foreground border-t pt-3">
                  <strong className="text-foreground">How to redeem:</strong> Visit {claim.businessName} and show this code (or
                  your email) to a staff member. You'll get a confirmation email once it's redeemed.
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {!result && (
          <button
            onClick={spin}
            disabled={spinning || spinsLeft <= 0}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg disabled:opacity-50 transition-opacity"
          >
            {spinning ? "Spinning..." : spinsLeft > 0 ? "🎰 Spin the Wheel" : "Come back tomorrow!"}
          </button>
        )}

        <p className="text-xs text-muted-foreground text-center">
          {spinsLeft} spin{spinsLeft !== 1 ? "s" : ""} remaining today · Resets daily at midnight
        </p>
      </div>
    </div>
  );
};

export default FreebieGamePage;
