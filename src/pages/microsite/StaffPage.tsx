import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, DollarSign, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import marcoImg from "@/assets/staff-marco.jpg";
import sophiaImg from "@/assets/staff-sophia.jpg";
import jamesImg from "@/assets/staff-james.jpg";
import elenaImg from "@/assets/staff-elena.jpg";
import { toast } from "@/hooks/use-toast";

const staff = [
  { name: "Marco Rossi", role: "Executive Chef", bio: "Trained in Florence, 20+ years of culinary mastery.", rating: 4.9, image: marcoImg, tipLink: "https://flex-it.com/marco-rossi" },
  { name: "Sophia Chen", role: "Head Sommelier", bio: "Award-winning wine expert with an encyclopedic palate.", rating: 4.8, image: sophiaImg, tipLink: "https://flex-it.com/sophia-chen" },
  { name: "James Wright", role: "General Manager", bio: "Ensuring every guest feels like family since 2005.", rating: 4.7, image: jamesImg, tipLink: "https://flex-it.com/james-wright" },
  { name: "Elena Volkov", role: "Pastry Chef", bio: "Creates edible art that delights every sense.", rating: 4.9, image: elenaImg, tipLink: "https://flex-it.com/elena-volkov" },
];

const presetAmounts = [5, 10, 20, 50];

const StaffPage = () => {
  const navigate = useNavigate();
  const [tipFor, setTipFor] = useState<typeof staff[number] | null>(null);
  const [amount, setAmount] = useState<string>("");

  const openTip = (member: typeof staff[number]) => {
    setAmount("");
    setTipFor(member);
  };

  const closeTip = () => setTipFor(null);

  const confirmTip = () => {
    if (!tipFor) return;
    const value = parseFloat(amount);
    if (!value || value <= 0) {
      toast({ title: "Enter a valid amount", description: "Please enter a tip amount greater than $0." });
      return;
    }
    if (value > 1000) {
      toast({ title: "Amount too large", description: "Maximum tip amount is $1,000." });
      return;
    }
    const url = `${tipFor.tipLink}?amount=${value.toFixed(2)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast({ title: "Redirecting to payment", description: `Tipping ${tipFor.name} $${value.toFixed(2)}` });
    closeTip();
  };

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Our Team</h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {staff.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-3 p-4 rounded-2xl bg-card border"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-14 h-14 rounded-2xl object-cover shrink-0"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">{member.name}</div>
              <div className="text-xs text-secondary font-medium">{member.role}</div>
              <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-aura-warning text-aura-warning" />
                  <span className="text-xs font-medium">{member.rating}</span>
                </div>
                {member.tipLink && (
                  <button
                    onClick={() => openTip(member)}
                    className="flex items-center gap-1 text-xs text-primary font-medium hover:underline"
                  >
                    <DollarSign className="w-3 h-3" />
                    Tip
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-8" />

      <AnimatePresence>
        {tipFor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={closeTip}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl bg-card border shadow-2xl p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={tipFor.image} alt={tipFor.name} className="w-12 h-12 rounded-2xl object-cover" />
                  <div>
                    <div className="font-display font-semibold text-base">Tip {tipFor.name}</div>
                    <div className="text-xs text-muted-foreground">{tipFor.role}</div>
                  </div>
                </div>
                <button onClick={closeTip} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <label className="text-xs font-medium text-muted-foreground mb-2 block">Choose an amount</label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {presetAmounts.map((p) => (
                  <button
                    key={p}
                    onClick={() => setAmount(String(p))}
                    className={`py-2 rounded-xl border text-sm font-medium transition-colors ${
                      amount === String(p)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/40 hover:bg-muted"
                    }`}
                  >
                    ${p}
                  </button>
                ))}
              </div>

              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Or enter a custom amount</label>
              <div className="relative mb-5">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="number"
                  inputMode="decimal"
                  min="1"
                  max="1000"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  autoFocus
                />
              </div>

              <button
                onClick={confirmTip}
                disabled={!amount || parseFloat(amount) <= 0}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to payment
              </button>
              <p className="text-[10px] text-muted-foreground text-center mt-2">
                You'll be redirected to a secure payment page
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaffPage;
