import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Handshake, Copy, Check, DollarSign, BarChart3, Users, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const AffiliatePage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const affiliateCode = "AFF-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const affiliateLink = `https://auralink.io/bellavista?aff=${affiliateCode}`;

  const copyLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    toast({ title: "Affiliate link copied!" });
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPromo = () => {
    if (!promoCode.trim()) return;
    setPromoApplied(true);
    toast({ title: "Promo code applied! 🎉", description: `Code "${promoCode}" activated — discount will apply at checkout.` });
  };

  const tiers = [
    { name: "Bronze", commission: "5%", requirement: "0–10 referrals", active: true },
    { name: "Silver", commission: "10%", requirement: "11–50 referrals", active: false },
    { name: "Gold", commission: "15%", requirement: "51+ referrals", active: false },
  ];

  const campaigns = [
    { name: "Summer Dining Special", discount: "20% off dining experiences", code: "SUMMER20" },
    { name: "Holiday Gift Card Push", discount: "10% off gift cards", code: "HOLIDAY10" },
  ];

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="flex items-center gap-3 p-4 border-b">
        <button onClick={() => navigate("/microsite")} className="p-2 rounded-xl hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="font-display font-semibold text-lg">Affiliate Program</h1>
          <p className="text-xs text-muted-foreground">Partner with us & earn</p>
        </div>
        <Handshake className="w-5 h-5 text-primary ml-auto" />
      </div>

      <div className="p-6 space-y-6">
        <div className="text-center p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
          <DollarSign className="w-12 h-12 text-secondary mx-auto mb-3" />
          <h2 className="font-display font-bold text-xl mb-1">Earn Commission</h2>
          <p className="text-sm text-muted-foreground">Promote Bella Vista and earn up to 15% on every booking</p>
        </div>

        {/* Promo Code Input */}
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1"><Tag className="w-3 h-3" /> Have a promo code?</label>
          {!promoApplied ? (
            <div className="flex gap-2">
              <input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                placeholder="Enter code (e.g. SUMMER20)"
                className="flex-1 px-4 py-3 rounded-xl bg-muted/50 border text-sm font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-primary/20"
                maxLength={20}
              />
              <button onClick={applyPromo} className="px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium shrink-0 text-sm">
                Apply
              </button>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl bg-chart-2/10 border border-chart-2/20">
              <Check className="w-5 h-5 text-chart-2 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-chart-2">Code applied: {promoCode}</p>
                <p className="text-[10px] text-muted-foreground">Discount will apply at checkout</p>
              </div>
              <button onClick={() => { setPromoApplied(false); setPromoCode(""); }} className="text-xs text-muted-foreground hover:text-foreground">Change</button>
            </motion.div>
          )}
        </div>

        {/* Active Campaigns */}
        <div>
          <h3 className="font-display font-semibold mb-3">Active Campaigns</h3>
          <div className="space-y-2">
            {campaigns.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl bg-card border">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-medium">{c.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.discount}</p>
                  </div>
                  <button onClick={() => { setPromoCode(c.code); setPromoApplied(false); }}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-[11px] font-semibold flex items-center gap-1 hover:bg-primary/20 transition-colors">
                    <Tag className="w-3 h-3" /> {c.code}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Affiliate link */}
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-2 block">Your affiliate link</label>
          <div className="flex gap-2">
            <div className="flex-1 px-4 py-3 rounded-xl bg-muted/50 border text-sm font-mono truncate">{affiliateLink}</div>
            <button onClick={copyLink} className="px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium shrink-0">
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Users, label: "Referrals", value: "0" },
            { icon: BarChart3, label: "Conversions", value: "0" },
            { icon: DollarSign, label: "Earned", value: "$0" },
          ].map((s) => (
            <div key={s.label} className="p-4 rounded-2xl bg-card border text-center">
              <s.icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="font-display font-bold text-lg">{s.value}</div>
              <div className="text-[10px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div>
          <h3 className="font-display font-semibold mb-3">Commission Tiers</h3>
          <div className="space-y-2">
            {tiers.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                className={`flex items-center justify-between p-4 rounded-xl border ${t.active ? "bg-primary/5 border-primary/30" : "bg-muted/30"}`}>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.requirement}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg">{t.commission}</span>
                  {t.active && <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-medium">Active</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How to join */}
        <div>
          <h3 className="font-display font-semibold mb-3">How to Join</h3>
          <div className="space-y-2">
            {[
              { step: "1", text: "Sign up with your affiliate link above" },
              { step: "2", text: "Share your link or use promo codes" },
              { step: "3", text: "Earn commission on every booking" },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">{s.step}</div>
                <span className="text-sm">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePage;
