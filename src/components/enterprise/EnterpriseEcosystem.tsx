import { motion } from "framer-motion";

const products = [
  {
    name: "VibeGigs",
    sub: "Live Entertainment",
    desc: "Book artists, DJs & performers instantly.",
    tags: ["Artist Marketplace", "Event Ticketing"],
    color: "#E8604C",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=70",
  },
  {
    name: "Flex-it",
    sub: "Fitness & Wellness",
    desc: "Class bookings, memberships & progress tracking.",
    tags: ["Class Booking", "Membership Tiers"],
    color: "#1B9AAA",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=70",
  },
  {
    name: "Gift Cards",
    sub: "Digital Commerce",
    desc: "Sell branded digital gift cards. No fees.",
    tags: ["Instant Delivery", "Revenue Tracking"],
    color: "#D4A853",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=70",
  },
  {
    name: "TribeMint",
    sub: "Community & Loyalty",
    desc: "Points, tiers, and exclusive perks.",
    tags: ["Points System", "VIP Tiers"],
    color: "#A855F7",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=70",
  },
  {
    name: "PicPop",
    sub: "Visual Storytelling",
    desc: "Photo booths & branded shareable moments.",
    tags: ["Photo Booth", "Social Sharing"],
    color: "#EC4899",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=70",
  },
  {
    name: "AI Concierge",
    sub: "Smart Guest Assistant",
    desc: "Answers, recommends & speaks every language.",
    tags: ["Multilingual", "Auto-Responses"],
    color: "#06B6D4",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=70",
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
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-opacity-20 transition-all group min-h-[260px] flex flex-col justify-end"
            style={{ borderTopColor: p.color, borderTopWidth: 2 }}
          >
            <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-[#0D1117]/20" />
            <div className="relative p-5">
              <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              <p className="text-white/30 text-xs font-medium">{p.sub}</p>
              <p className="text-white/50 text-sm mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/40 backdrop-blur-sm"
                    style={{ color: p.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseEcosystem;
