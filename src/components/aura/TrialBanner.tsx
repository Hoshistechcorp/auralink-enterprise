import { useNavigate } from "react-router-dom";
import { Clock, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { getSubscription, getTrialDaysLeft, getEffectivePlan } from "@/lib/subscription";
import { motion, AnimatePresence } from "framer-motion";

interface TrialBannerProps {
  variant?: "microsite" | "dashboard";
}

const TrialBanner = ({ variant = "dashboard" }: TrialBannerProps) => {
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();
  const sub = getSubscription();
  const daysLeft = getTrialDaysLeft(sub);
  const effectivePlan = getEffectivePlan(sub);

  // Don't show if dismissed, or if user is on a paid plan (not on trial)
  if (dismissed) return null;
  if (!sub.trialActive && sub.plan !== "spark") return null;

  const isExpired = !sub.trialActive || daysLeft <= 0;
  const isUrgent = !isExpired && daysLeft <= 5;

  if (variant === "microsite") {
    if (!sub.trialActive && sub.plan !== "spark") return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={`mx-4 mt-3 rounded-2xl px-4 py-3 text-sm ${
            isExpired
              ? "bg-destructive/10 border border-destructive/20"
              : isUrgent
              ? "bg-aura-warning/10 border border-aura-warning/20"
              : "bg-primary/10 border border-primary/20"
          }`}
        >
          <div className="flex items-center gap-2">
            {isExpired ? (
              <Sparkles className="w-4 h-4 text-destructive shrink-0" />
            ) : (
              <Clock className="w-4 h-4 text-primary shrink-0" />
            )}
            <span className="flex-1 text-foreground">
              {isExpired
                ? "Your free trial has ended. Upgrade to unlock all features!"
                : `${daysLeft} day${daysLeft !== 1 ? "s" : ""} left in your free trial`}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Dashboard variant
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className={`rounded-2xl px-4 py-3 mb-4 flex items-center gap-3 ${
          isExpired
            ? "bg-destructive/10 border border-destructive/20"
            : isUrgent
            ? "bg-aura-warning/10 border border-aura-warning/20"
            : "bg-primary/10 border border-primary/20"
        }`}
      >
        {isExpired ? (
          <Sparkles className="w-5 h-5 text-destructive shrink-0" />
        ) : (
          <Clock className="w-5 h-5 text-primary shrink-0" />
        )}
        <span className="flex-1 text-sm text-foreground">
          {isExpired
            ? "Your free trial has ended. Upgrade to keep all 15 cards and premium features."
            : `${daysLeft} day${daysLeft !== 1 ? "s" : ""} left in your free 3-week trial — all 15 cards unlocked!`}
        </span>
        <button
          onClick={() => navigate("/dashboard/subscription")}
          className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            isExpired
              ? "bg-destructive text-destructive-foreground hover:opacity-90"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >
          {isExpired ? "Upgrade Now" : "View Plans"}
        </button>
        {!isExpired && (
          <button onClick={() => setDismissed(true)} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TrialBanner;
