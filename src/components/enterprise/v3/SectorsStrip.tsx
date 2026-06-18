import { motion } from "framer-motion";

const sectors = [
  { e: "🍽️", t: "Restaurants", bg: "#C6F432" },
  { e: "🏨", t: "Hotels", bg: "#7CC7FF" },
  { e: "🎧", t: "Lounges & Nightclubs", bg: "#C8A2FF" },
  { e: "🛍️", t: "Retail brands", bg: "#FF7A59", ink: "#FFF7ED" },
  { e: "💆", t: "Spas & Wellness", bg: "#C6F432" },
  { e: "🗺️", t: "Tour operators", bg: "#7CC7FF" },
  { e: "☕", t: "Coffee shops", bg: "#F39A1F" },
  { e: "🎪", t: "Event venues", bg: "#C8A2FF" },
  { e: "🏖️", t: "Beach clubs", bg: "#C6F432" },
  { e: "🛳️", t: "Cruise & Yacht", bg: "#7CC7FF" },
  { e: "🌍", t: "Tourism boards", bg: "#1F2BD6", ink: "#FFF7ED" },
  { e: "🏛️", t: "Cultural sites", bg: "#FF7A59", ink: "#FFF7ED" },
];

const SectorsStrip = () => (
  <section className="px-5 py-16 sm:py-20 bg-[#7CC7FF] border-y-2 border-[#111]">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-9"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] text-[#7CC7FF] text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#111] shadow-[0_3px_0_0_#111]">
          Built for every leisure sector
        </span>
        <h2 className="font-grotesk mt-4 text-[32px] sm:text-[44px] leading-[1.02] font-extrabold tracking-tight text-[#111]">
          One hub.{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Twelve sectors.</span>
            <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-[#C6F432] rounded-full -z-0" />
          </span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {sectors.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#111] shadow-[0_4px_0_0_#111] hover:-translate-y-1 transition-transform"
            style={{ background: s.bg, color: s.ink || "#111", transform: `rotate(${i % 3 === 0 ? -1.5 : i % 3 === 1 ? 0 : 1.5}deg)` }}
          >
            <span className="text-base">{s.e}</span>
            <span className="font-grotesk font-extrabold text-[13px]">{s.t}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsStrip;
