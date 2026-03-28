import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  { before: "5 separate tools, 5 logins, 5 invoices", after: "One unified platform — one link" },
  { before: "Zero guest data or behavioral insights", after: "Real-time analytics dashboard per location" },
  { before: "Generic link-in-bio with no brand identity", after: "Branded microsite with 15+ smart modules" },
  { before: "No loyalty program or repeat-visit strategy", after: "Gamified rewards, tiers & referral engine" },
  { before: "Manual gift cards with no tracking", after: "Digital gift card commerce with analytics" },
  { before: "No AI — guests wait for human replies", after: "24/7 multilingual AI concierge" },
];

const EnterpriseBeforeAfter = () => (
  <section className="py-16 sm:py-24 border-t border-white/[0.04]">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E8604C]">
          The Reality Check
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
          Sound familiar? <span className="italic text-white/40">We fixed it.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Before column */}
        <div className="space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-red-400/60 mb-4 text-center">
            Without AuraLink
          </div>
          {comparisons.map((c, i) => (
            <motion.div
              key={`b-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-red-500/[0.04] border border-red-500/[0.08]"
            >
              <X className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" />
              <span className="text-sm text-white/50">{c.before}</span>
            </motion.div>
          ))}
        </div>

        {/* After column */}
        <div className="space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-400/60 mb-4 text-center">
            With AuraLink
          </div>
          {comparisons.map((c, i) => (
            <motion.div
              key={`a-${i}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/[0.08]"
            >
              <Check className="w-4 h-4 text-emerald-400/60 mt-0.5 shrink-0" />
              <span className="text-sm text-white/70 font-medium">{c.after}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EnterpriseBeforeAfter;
