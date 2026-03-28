import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    label: "VibeGigs",
    title: "Live entertainment, booked in minutes.",
    desc: "Browse local artists, DJs, and performers. Book directly through your AuraLink. Fill your venue with energy — without the back-and-forth.",
    stat: "62%",
    statLabel: "faster entertainment staffing",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    color: "#A855F7",
  },
  {
    label: "Flex-it",
    title: "Tipping & payments, modernized.",
    desc: "QR-based tipping for staff, split bills, and digital receipts. Guests love the convenience. Staff love the transparency. You love the data.",
    stat: "$127K",
    statLabel: "avg annual gift card revenue per venue",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    color: "#D4A853",
  },
  {
    label: "AI Concierge",
    title: "Your 24/7 multilingual guest assistant.",
    desc: "Trained on your menu, policies, and brand voice. Handles reservations, answers questions, recommends dishes — in 40+ languages, around the clock.",
    stat: "80%",
    statLabel: "of guest inquiries handled automatically",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    color: "#1B9AAA",
  },
];

const EnterpriseFeatureRows = () => (
  <section className="py-16 sm:py-24 border-t border-white/[0.04]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4A853]">
          The Ecosystem
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
          Three engines. <span className="italic text-white/40">Infinite growth.</span>
        </h2>
      </motion.div>

      <div className="space-y-12">
        {features.map((f, i) => {
          const reversed = i % 2 !== 0;
          return (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${reversed ? "lg:direction-rtl" : ""}`}
            >
              {/* Image */}
              <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${reversed ? "lg:order-2" : ""}`}>
                <img src={f.image} alt={f.label} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white" style={{ backgroundColor: f.color }}>
                    {f.label}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className={`${reversed ? "lg:order-1 lg:text-right" : ""}`}>
                <div className="mb-4">
                  <span className="font-display text-5xl font-bold bg-gradient-to-r from-[#D4A853] to-[#E8604C] bg-clip-text text-transparent">
                    {f.stat}
                  </span>
                  <span className="block text-xs text-white/30 mt-1">{f.statLabel}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-white/40 text-sm leading-relaxed max-w-md">
                  {f.desc}
                </p>
                <button className="mt-5 flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white" style={{ color: f.color }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default EnterpriseFeatureRows;
