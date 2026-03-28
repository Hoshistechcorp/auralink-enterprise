import { motion } from "framer-motion";

const brands = [
  "Nobu", "Soho House", "Zuma", "Tao Group", "W Hotels", "Mandarin Oriental",
  "Nobu", "Soho House", "Zuma", "Tao Group", "W Hotels", "Mandarin Oriental",
];

const EnterpriseTrustBar = () => (
  <section className="py-8 border-y border-white/[0.04] overflow-hidden">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 text-center mb-6">
        Built for brands like
      </p>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D1117] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D1117] to-transparent z-10" />
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {brands.map((b, i) => (
          <span key={i} className="text-lg font-semibold tracking-wide text-[#D4A853]/40 select-none">
            {b}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default EnterpriseTrustBar;
