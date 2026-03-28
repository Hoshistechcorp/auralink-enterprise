import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🔗",
    title: "One Link, Everything",
    desc: "Your entire brand — menu, reviews, loyalty, events, gift cards — in a single scannable link. No app downloads.",
    border: "border-l-[#E8604C]",
  },
  {
    emoji: "🤖",
    title: "AI Concierge",
    desc: "A 24/7 virtual assistant trained on your venue. Answers questions, recommends dishes, handles reservations — in any language.",
    border: "border-l-[#1B9AAA]",
  },
  {
    emoji: "🎮",
    title: "Gamified Growth",
    desc: "Spin-to-win, scratch cards, loyalty tiers, and referral rewards that turn casual visitors into repeat guests.",
    border: "border-l-[#D4A853]",
  },
  {
    emoji: "📊",
    title: "Real-Time Analytics",
    desc: "Know exactly which cards drive visits, which promos convert, and which locations outperform — all in one dashboard.",
    border: "border-l-[#A855F7]",
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
        <span className="text-xs font-semibold tracking-widest uppercase text-[#E8604C]">Why AuraLink</span>
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
            className={`p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] border-l-4 ${c.border}`}
          >
            <div className="w-14 h-14 rounded-xl bg-white/[0.04] flex items-center justify-center text-3xl mb-4">
              {c.emoji}
            </div>
            <h3 className="text-white font-semibold text-lg">{c.title}</h3>
            <p className="mt-2 text-white/50 text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseWhyCards;
