import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const oldWay = [
  "Six tools, six logins",
  "Six monthly subscriptions",
  "Third-party booking & delivery fees",
  "Scattered guest data across apps",
  "Manual replies to repetitive guest questions",
  "Disconnected promotions and loyalty",
];

const newWay = [
  "One operating system",
  "Direct revenue, no middlemen",
  "Owned customer data with live analytics",
  "AI concierge in 40+ languages",
  "One guest-facing mobile hub",
  "Built-in referral & affiliate growth",
];

const ProblemSolution = () => (
  <section className="relative py-24 sm:py-32 bg-[#0B0907]">
    <div className="absolute inset-0 bg-grid-warm opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

    <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">The shift</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          Escape the <span className="italic text-brass-gradient">ghost economy.</span>
        </h2>
        <p className="mt-4 text-stone-warm max-w-xl mx-auto text-[15px]">
          Six apps draining your margins, your data, and your team. One operating system replaces all of it.
        </p>
      </motion.div>

      <div className="relative grid md:grid-cols-2 gap-5">
        {/* Center VS */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[#0B0907] border border-brass-soft">
          <span className="font-fraunces italic text-[12px] font-bold text-brass-gradient tracking-wider">vs</span>
        </div>

        {/* Old way */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#3A2A23] bg-[#1A100C]/60 backdrop-blur p-7"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#B85847]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C68573]">The Old Way</span>
          </div>
          <h3 className="font-fraunces text-xl font-bold text-ivory/80 mb-5">Six tools. Six bills. Zero leverage.</h3>
          <ul className="space-y-3.5">
            {oldWay.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 h-5 w-5 rounded-md bg-[#B85847]/15 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-[#C68573]" />
                </span>
                <span className="text-[14px] text-stone-warm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* New way */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-brass-soft bg-gradient-to-br from-[#1A1410] to-[#141110] p-7 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#C9A35B]/15 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#7E9B6A] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brass-gradient">The AuraLink Way</span>
            </div>
            <h3 className="font-fraunces text-xl font-bold text-ivory mb-5">One link. Total ownership.</h3>
            <ul className="space-y-3.5">
              {newWay.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-md bg-brass-gradient flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#1B1310]" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] text-ivory/85 leading-relaxed font-medium">{t}</span>
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
