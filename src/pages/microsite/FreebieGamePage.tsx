import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Gamepad2, Gift, RotateCcw, Trophy, Sparkles } from "lucide-react";

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

const FreebieGamePage = () => {
  const navigate = useNavigate();
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [spinsLeft, setSpinsLeft] = useState(1);

  const spin = () => {
    if (spinning || spinsLeft <= 0) return;
    setSpinning(true);
    setResult(null);
    setSpinsLeft((s) => s - 1);
    setTimeout(() => {
      const winner = Math.floor(Math.random() * prizes.length);
      setResult(winner);
      setSpinning(false);
    }, 2500);
  };

  const prize = result !== null ? prizes[result] : null;

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="flex items-center gap-3 p-4 border-b">
        <button onClick={() => navigate("/microsite")} className="p-2 rounded-xl hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-display font-semibold text-lg">Spin & Win</h1>
          <p className="text-xs text-muted-foreground">Try your luck for a freebie!</p>
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

        {/* Result */}
        <AnimatePresence>
          {prize && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20 w-full">
              <prize.icon className="w-10 h-10 mx-auto mb-2" style={{ color: prize.color }} />
              <h2 className="font-display font-bold text-xl">{prize.label === "Try Again" ? "No luck this time!" : `You won: ${prize.label}!`}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {prize.label === "Try Again" ? "Come back tomorrow for another spin" : "Show this screen to your server to redeem"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={spin}
          disabled={spinning || spinsLeft <= 0}
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg disabled:opacity-50 transition-opacity"
        >
          {spinning ? "Spinning..." : spinsLeft > 0 ? "🎰 Spin the Wheel" : "Come back tomorrow!"}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          {spinsLeft} spin{spinsLeft !== 1 ? "s" : ""} remaining today · Resets daily at midnight
        </p>
      </div>
    </div>
  );
};

export default FreebieGamePage;
