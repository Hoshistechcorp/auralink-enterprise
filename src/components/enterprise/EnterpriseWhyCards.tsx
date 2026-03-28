import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🔗",
    title: "One Link, Everything",
    desc: "Your entire brand — menu, reviews, loyalty, events, gift cards — in a single scannable link. No app downloads.",
    metric: "Replace 5 tools, save $2,400/mo",
    border: "border-l-[#E8604C]",
    glow: "hover:shadow-[#E8604C]/10",
  },
  {
    emoji: "🤖",
    title: "AI Concierge",
    desc: "A 24/7 virtual assistant trained on your venue. Answers questions, recommends dishes, handles reservations — in any language.",
    metric: "Handle 80% of guest inquiries automatically",
    border: "border-l-[#1B9AAA]",
    glow: "hover:shadow-[#1B9AAA]/10",
  },
  {
    emoji: "🎮",
    title: "Gamified Growth",
    desc: "Spin-to-win, scratch cards, loyalty tiers, and referral rewards that turn casual visitors into repeat guests.",
    metric: "3.2x repeat visit rate",
    border: "border-l-[#D4A853]",
    glow: "hover:shadow-[#D4A853]/10",
  },
  {
    emoji: "📊",
    title: "Real-Time Analytics",
    desc: "Know exactly which cards drive visits, which promos convert, and which locations outperform — all in one dashboard.",
    metric: "Know your ROI per dollar in real-time",
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
            className={`p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] border-l-4 ${c.border} hover:shadow-2xl ${c.glow} transition-all duration-300`}
          >
            <div className="w-14 h-14 rounded-xl bg-white/[0.04] flex items-center justify-center text-3xl mb-4">
              {c.emoji}
            </div>
            <h3 className="text-white font-semibold text-lg">{c.title}</h3>
            <p className="mt-2 text-white/50 text-sm leading-relaxed">{c.desc}</p>
            <div className="mt-4 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] inline-block">
              <span className="text-xs font-semibold bg-gradient-to-r from-[#D4A853] to-[#E8604C] bg-clip-text text-transparent">
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
