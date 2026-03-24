import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { getOnboardingProgress, type OnboardingProgress } from "@/lib/onboardingProgress";

const OnboardingProgressCard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<OnboardingProgress>(getOnboardingProgress);

  useEffect(() => {
    setProgress(getOnboardingProgress());
  }, []);

  // Don't show if all complete
  if (progress.percentage === 100) return null;

  const nextStep = progress.steps.find((s) => !s.completed);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-5 rounded-2xl bg-card border"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Rocket className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm">Setup Progress</h3>
            <p className="text-[11px] text-muted-foreground">
              {progress.completedCount}/{progress.totalCount} steps · {progress.percentage}% complete
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 rounded-full bg-muted/50 overflow-hidden mb-3">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress.percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Step dots */}
      <div className="flex gap-1.5 mb-4">
        {progress.steps.map((s) => (
          <div key={s.id} className="flex-1 flex justify-center">
            {s.completed ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Circle className="w-3.5 h-3.5 text-muted-foreground/30" />
            )}
          </div>
        ))}
      </div>

      {/* Next step CTA */}
      {nextStep && (
        <button
          onClick={() => navigate(nextStep.link)}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors group"
        >
          <div className="text-left">
            <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Next Step</p>
            <p className="text-sm font-semibold">{nextStep.title}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </motion.div>
  );
};

export default OnboardingProgressCard;
