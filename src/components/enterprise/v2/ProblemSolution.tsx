import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const oldWay = [
  "Paying 20–30% fees to delivery & booking apps",
  "Fragmented stack: OpenTable, Linktree, Instagram, Mailchimp",
  "Zero ownership of your guest data",
  "Manual ops eating staff hours every shift",
];

const newWay = [
  "0% commission digital gift cards — funds direct to your bank",
  "Direct bookings & reservations on your own link",
  "24/7 AI concierge replies in 40+ languages",
  "100% guest data ownership with live analytics",
];

const ProblemSolution = () => (
  <section className="relative py-24 sm:py-32">
    <div className="absolute inset-0 bg-grid-neon opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

    <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#A78BFA]">The shift</span>
        <h2 className="font-jakarta mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Escape the <span className="text-aura-gradient">Ghost Economy.</span>
        </h2>
        <p className="mt-4 text-white/50 max-w-xl mx-auto">
          Six apps draining your margins, your data, and your team. One link replaces all of it.
        </p>
      </motion.div>

      <div className="relative grid md:grid-cols-2 gap-5">
        {/* Center VS */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[#08080B] border border-white/10">
          <span className="font-jakarta text-[11px] font-bold text-white/60 tracking-wider">VS</span>
        </div>

        {/* Old way */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-red-500/15 bg-red-500/[0.03] backdrop-blur-xl p-7"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-red-300/80">The Old Way</span>
          </div>
          <h3 className="font-jakarta text-xl font-bold text-white/80 mb-5">Six tools. Six bills. Zero leverage.</h3>
          <ul className="space-y-3.5">
            {oldWay.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 h-5 w-5 rounded-md bg-red-500/15 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-red-300" />
                </span>
                <span className="text-[14px] text-white/55 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* New way */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#3B82F6]/[0.08] to-[#8B5CF6]/[0.08] backdrop-blur-xl p-7 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A78BFA]">The AuraLink Way</span>
            </div>
            <h3 className="font-jakarta text-xl font-bold text-white mb-5">One link. Total ownership.</h3>
            <ul className="space-y-3.5">
              {newWay.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-md bg-aura-gradient flex items-center justify-center shrink-0 glow-blue">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] text-white/85 leading-relaxed font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;
