import { motion } from "framer-motion";
import { Play } from "lucide-react";

const products = [
  {
    name: "iBloov Event",
    emoji: "🎟️",
    oneLiner: "The high-volume engine for booking, ticketing, and managing physical gatherings and social rituals.",
    sync: 'Syncs "Active Tickets" to your dashboard and displays "Past Rituals" on your public profile.',
    color: "#E8604C",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=70",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "SPARK",
    emoji: "⚡",
    oneLiner: 'The micro-learning platform that transforms "Sparks" into certified "Mavericks" for the global hospitality economy.',
    sync: 'Pushes "Verified Skill Badges" to your profile, boosting employability and your global ❤️ Score.',
    color: "#D4A853",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=70",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "VibesGigs",
    emoji: "🎵",
    oneLiner: 'The "Uber for Hospitality" that matches verified talent with instant, high-paying shifts at World Cup-ready venues.',
    sync: 'Uses AuraLink as your "Digital Resume" — Enterprises hire you with one tap based on your verified reputation.',
    color: "#A855F7",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=70",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "TribeMint",
    emoji: "🌀",
    oneLiner: "The viral engine that turns every customer into a micro-influencer by rewarding them for driving traffic.",
    sync: 'Hosts a "Partner Card" on your hub to track affiliate earnings and "Connection Impact."',
    color: "#1B9AAA",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=70",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "PicPop",
    emoji: "📸",
    oneLiner: "The collaborative cloud for event memories, turning every guest into a contributor to a venue's visual soul.",
    sync: 'Embeds a "Live Memory Wall" on your AuraLink — real-time social proof you were there.',
    color: "#EC4899",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=70",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    name: "Flex-it",
    emoji: "💸",
    oneLiner: 'The social fintech rail for frictionless tipping, splitting bills, and "Digital Spraying" love to service staff.',
    sync: 'Powers the "Universal Wallet" inside your hub — pay, tip, and manage Nebula Credits seamlessly.',
    color: "#06B6D4",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=70",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
        <p className="mt-3 text-white/40 text-sm max-w-lg mx-auto">Every product syncs through AuraLink — your single hub for reputation, revenue, and reach.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-500 group min-h-[320px] flex flex-col justify-end cursor-pointer"
            style={{ borderTopColor: p.color, borderTopWidth: 2 }}
            whileHover={{ borderColor: `${p.color}66`, boxShadow: `0 0 20px ${p.color}22, 0 0 40px ${p.color}11` }}
          >
            <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/85 to-[#0D1117]/30" />

            {/* YouTube play button */}
            <a
              href={p.video}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: `${p.color}CC` }}
              title={`Watch ${p.name} video`}
            >
              <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
            </a>

            <div className="relative p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{p.emoji}</span>
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
              </div>
              <p className="text-white/60 text-[13px] leading-relaxed mt-1">{p.oneLiner}</p>
              <div className="mt-3 pt-3 border-t border-white/[0.06]">
                <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: p.color }}>AuraLink Sync</p>
                <p className="text-white/40 text-[12px] leading-relaxed">{p.sync}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseEcosystem;
