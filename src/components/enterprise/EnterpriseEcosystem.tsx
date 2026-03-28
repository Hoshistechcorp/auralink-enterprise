import { motion } from "framer-motion";

const products = [
  {
    emoji: "🎵",
    name: "VibeGigs",
    sub: "Live Entertainment Hub",
    desc: "Discover and book local artists, DJs, and performers. Integrated event calendar with ticket sales and promo tools.",
    tags: ["Artist Marketplace", "Event Ticketing", "Promo Engine"],
    color: "#E8604C",
  },
  {
    emoji: "💪",
    name: "Flex-it",
    sub: "Fitness & Wellness",
    desc: "Class bookings, trainer profiles, membership tiers, and progress tracking — all from your AuraLink page.",
    tags: ["Class Booking", "Membership Tiers", "Progress Tracking"],
    color: "#1B9AAA",
  },
  {
    emoji: "🎁",
    name: "Gift Cards",
    sub: "Digital Commerce",
    desc: "Sell, deliver, and track branded digital gift cards directly from your microsite. No third-party fees.",
    tags: ["Custom Designs", "Instant Delivery", "Revenue Tracking"],
    color: "#D4A853",
  },
  {
    emoji: "🏆",
    name: "TribeMint",
    sub: "Community & Loyalty",
    desc: "Build a loyal tribe with points, tiers, exclusive perks, and member-only content that keeps guests coming back.",
    tags: ["Points System", "VIP Tiers", "Exclusive Perks"],
    color: "#A855F7",
  },
  {
    emoji: "📸",
    name: "PicPop",
    sub: "Visual Storytelling",
    desc: "Photo booths, branded frames, and shareable moments that turn guests into your marketing team.",
    tags: ["Photo Booth", "Branded Frames", "Social Sharing"],
    color: "#EC4899",
  },
  {
    emoji: "🤖",
    name: "AI Concierge",
    sub: "Smart Guest Assistant",
    desc: "Answers questions, takes orders, recommends experiences, and speaks every language — 24/7.",
    tags: ["Multilingual", "Menu Recs", "Auto-Responses"],
    color: "#06B6D4",
  },
];

const EnterpriseEcosystem = () => (
  <section className="py-16 sm:py-24 border-t border-white/[0.04]">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-[#D4A853]">The iBloov Ecosystem</span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
          Six products. <span className="italic text-white/40">One platform.</span>
        </h2>
        <p className="mt-3 text-white/40 text-sm max-w-lg mx-auto">
          Each product plugs into your AuraLink — activate what you need, when you need it.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-opacity-20 transition-all group"
            style={{ borderTopColor: p.color, borderTopWidth: 2 }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4"
              style={{ backgroundColor: `${p.color}10` }}
            >
              {p.emoji}
            </div>
            <h3 className="text-white font-semibold text-lg">{p.name}</h3>
            <p className="text-white/30 text-xs font-medium mb-2">{p.sub}</p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-[10px] font-medium"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseEcosystem;
