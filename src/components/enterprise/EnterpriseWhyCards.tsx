import { motion } from "framer-motion";

const cards = [
  {
    title: "One Link, Everything",
    desc: "Menu, reviews, loyalty, events, gift cards — one QR scan.",
    metric: "Save $2,400/mo",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    border: "border-l-[#E8604C]",
    glow: "hover:shadow-[#E8604C]/10",
  },
  {
    title: "AI Concierge",
    desc: "24/7 guest assistant in 40+ languages. No staff needed.",
    metric: "80% auto-handled",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    border: "border-l-[#1B9AAA]",
    glow: "hover:shadow-[#1B9AAA]/10",
  },
  {
    title: "Gamified Growth",
    desc: "Spin-to-win, loyalty tiers, referral rewards.",
    metric: "3.2x repeat visits",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80",
    border: "border-l-[#D4A853]",
    glow: "hover:shadow-[#D4A853]/10",
  },
  {
    title: "Real-Time Analytics",
    desc: "Track every card, promo, and location — live.",
    metric: "ROI per dollar",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    border: "border-l-[#A855F7]",
    glow: "hover:shadow-[#A855F7]/10",
  },
];

const EnterpriseWhyCards = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E8604C]">Why AuraLink</span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
          Everything your venue needs. <span className="italic text-white/40">Nothing it doesn't.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`relative rounded-2xl overflow-hidden border border-white/[0.06] border-l-4 ${c.border} hover:shadow-2xl ${c.glow} transition-all duration-300 min-h-[220px] flex flex-col justify-end`}
          >
            <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-[#0D1117]/30" />
            <div className="relative p-6">
              <h3 className="text-white font-semibold text-lg">{c.title}</h3>
              <p className="mt-1 text-white/50 text-sm">{c.desc}</p>
              <span className="mt-3 inline-block text-xs font-bold bg-gradient-to-r from-[#D4A853] to-[#E8604C] bg-clip-text text-transparent">
                {c.metric}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseWhyCards;
