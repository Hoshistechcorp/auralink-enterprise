import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, X, Sparkles, Zap, Crown, Building2, ArrowRight,
} from "lucide-react";
import DashboardLayout from "@/components/aura/DashboardLayout";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "/mo",
    icon: Zap,
    desc: "Get started with the basics",
    popular: false,
    cta: "Current Plan",
    disabled: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    period: "/mo",
    icon: Sparkles,
    desc: "For growing businesses",
    popular: true,
    cta: "Upgrade to Pro",
    disabled: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 79,
    period: "/mo",
    icon: Crown,
    desc: "Advanced tools & insights",
    popular: false,
    cta: "Upgrade to Premium",
    disabled: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    period: "",
    icon: Building2,
    desc: "Multi-location & custom",
    popular: false,
    cta: "Contact Sales",
    disabled: false,
  },
];

const features = [
  { name: "AuraLink Page", free: true, pro: true, premium: true, enterprise: true },
  { name: "Card Slots", free: "6", pro: "12", premium: "Unlimited", enterprise: "Unlimited" },
  { name: "Staff Profiles", free: "2", pro: "10", premium: "Unlimited", enterprise: "Unlimited" },
  { name: "Photo Gallery", free: "20 photos", pro: "200 photos", premium: "Unlimited", enterprise: "Unlimited" },
  { name: "Locations", free: "1", pro: "1", premium: "Up to 5", enterprise: "Unlimited" },
  { name: "Team Members", free: "1 (owner)", pro: "3", premium: "10", enterprise: "Unlimited" },
  { name: "Per-Location Links", free: false, pro: false, premium: true, enterprise: true },
  { name: "QR Codes", free: "1", pro: "5", premium: "Unlimited", enterprise: "Unlimited" },
  { name: "Analytics", free: false, pro: true, premium: true, enterprise: true },
  { name: "AI Concierge", free: false, pro: true, premium: true, enterprise: true },
  { name: "Gamification", free: false, pro: false, premium: true, enterprise: true },
  { name: "Affiliate Marketing", free: false, pro: false, premium: true, enterprise: true },
  { name: "Influencer Tools", free: false, pro: false, premium: true, enterprise: true },
  { name: "Loyalty Program", free: false, pro: false, premium: true, enterprise: true },
  { name: "Reputation Mgmt", free: false, pro: false, premium: true, enterprise: true },
  { name: "SEO Dashboard", free: false, pro: "Basic", premium: true, enterprise: true },
  { name: "Multi-Location Analytics", free: false, pro: false, premium: false, enterprise: true },
  { name: "Role-Based Access", free: false, pro: false, premium: true, enterprise: true },
  { name: "Custom Branding", free: false, pro: false, premium: true, enterprise: true },
  { name: "Priority Support", free: false, pro: false, premium: true, enterprise: true },
  { name: "Dedicated Manager", free: false, pro: false, premium: false, enterprise: true },
  { name: "API Access", free: false, pro: false, premium: false, enterprise: true },
];

const renderCell = (val: boolean | string) => {
  if (val === true) return <Check className="w-4 h-4 text-aura-success mx-auto" />;
  if (val === false) return <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />;
  return <span className="text-xs font-medium">{val}</span>;
};

const SubscriptionPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [annual, setAnnual] = useState(false);

  const handleUpgrade = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  return (
    <DashboardLayout title="Subscription" subtitle="Choose the right plan for your business">
      {/* Billing Toggle */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-primary" : "bg-muted"}`}
        >
          <div className={`absolute top-1 w-4 h-4 rounded-full bg-card shadow transition-transform ${annual ? "left-7" : "left-1"}`} />
        </button>
        <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
          Annual <span className="aura-badge aura-badge-success text-[10px] ml-1">Save 20%</span>
        </span>
      </div>

      {/* Plan Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className={`relative p-5 rounded-2xl border transition-all ${
              plan.popular
                ? "bg-primary/5 border-primary/30 shadow-md"
                : "bg-card hover:border-primary/20"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
                Most Popular
              </span>
            )}
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <plan.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold">{plan.name}</h3>
            <p className="text-xs text-muted-foreground mb-3">{plan.desc}</p>
            <div className="mb-4">
              {plan.price !== null ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">${annual ? Math.round(plan.price * 0.8) : plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              ) : (
                <span className="text-xl font-bold">Custom</span>
              )}
            </div>
            <button
              onClick={() => !plan.disabled && handleUpgrade(plan)}
              className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${
                plan.disabled
                  ? "bg-muted text-muted-foreground cursor-default"
                  : plan.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-muted hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="rounded-2xl bg-card border overflow-hidden">
        <div className="p-5 border-b">
          <h3 className="font-display font-semibold">Feature Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left px-5 py-3 font-medium text-muted-foreground">Feature</th>
                {plans.map((p) => (
                  <th key={p.id} className="px-4 py-3 text-center font-medium min-w-[100px]">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr key={feat.name} className={`border-b last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                  <td className="px-5 py-3 text-sm">{feat.name}</td>
                  <td className="px-4 py-3 text-center">{renderCell(feat.free)}</td>
                  <td className="px-4 py-3 text-center">{renderCell(feat.pro)}</td>
                  <td className="px-4 py-3 text-center">{renderCell(feat.premium)}</td>
                  <td className="px-4 py-3 text-center">{renderCell(feat.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upgrade Modal */}
      <AnimatePresence>
        {showModal && selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md p-6 rounded-2xl bg-card border shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <selectedPlan.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">Upgrade to {selectedPlan.name}</h3>
                  <p className="text-xs text-muted-foreground">{selectedPlan.desc}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/50 mb-5">
                <h4 className="text-sm font-medium mb-3">✨ Features you'll unlock:</h4>
                <div className="space-y-2">
                  {features
                    .filter((f) => {
                      const planVal = f[selectedPlan.id as keyof typeof f];
                      const freeVal = f.free;
                      return planVal && !freeVal;
                    })
                    .slice(0, 6)
                    .map((f) => (
                      <div key={f.name} className="flex items-center gap-2 text-sm">
                        <Check className="w-3.5 h-3.5 text-aura-success shrink-0" />
                        <span>{f.name}</span>
                        {typeof f[selectedPlan.id as keyof typeof f] === "string" && (
                          <span className="text-xs text-muted-foreground ml-auto">
                            {f[selectedPlan.id as keyof typeof f] as string}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              {selectedPlan.price !== null && (
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-bold">
                    ${annual ? Math.round(selectedPlan.price * 0.8) : selectedPlan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                  {annual && (
                    <span className="aura-badge aura-badge-success text-[10px] ml-2">20% off</span>
                  )}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-muted text-sm font-medium hover:bg-muted/80 transition-colors"
                >
                  Maybe Later
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  {selectedPlan.price !== null ? "Subscribe Now" : "Contact Sales"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default SubscriptionPage;
