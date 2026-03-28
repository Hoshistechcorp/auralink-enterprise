import { motion } from "framer-motion";

const stats = [
  { value: "$1.9T", label: "Global Hospitality Market", sub: "And growing 8% YoY" },
  { value: "73%", label: "Guests Prefer Mobile-First", sub: "Up from 41% in 2021" },
  { value: "$4.2B", label: "Lost to Tool Fragmentation", sub: "Annually across chains" },
];

const EnterpriseRevenueStrip = () => (
  <section className="py-16 sm:py-20 relative overflow-hidden">
    {/* Cross-hatch texture */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 50%)`,
      backgroundSize: "20px 20px",
    }} />

    <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4A853]">
          The Opportunity
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
          The numbers don't lie.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
          >
            <span className="block font-display text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#D4A853] to-[#E8604C] bg-clip-text text-transparent">
              {s.value}
            </span>
            <span className="block mt-3 text-white font-semibold text-sm">{s.label}</span>
            <span className="block mt-1 text-white/30 text-xs">{s.sub}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseRevenueStrip;
