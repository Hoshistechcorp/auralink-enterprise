import { motion } from "framer-motion";

const products = [
  {
    emoji: "🎟️", name: "iBloov Event", bg: "#FF7A59", ink: "#FFF7ED",
    one: "High-volume booking, ticketing & social rituals engine.",
    sync: 'Syncs "Active Tickets" + "Past Rituals" to your AuraLink.',
  },
  {
    emoji: "⚡", name: "SPARK", bg: "#C6F432", ink: "#111",
    one: "Micro-learning that turns Sparks into certified Mavericks.",
    sync: "Pushes verified skill badges to your profile & ❤️ Score.",
  },
  {
    emoji: "🎵", name: "VibesGigs", bg: "#C8A2FF", ink: "#111",
    one: 'The "Uber for Hospitality" — instant verified-talent shifts.',
    sync: "Uses AuraLink as your digital resume. One-tap hire.",
  },
  {
    emoji: "🌀", name: "TribeMint", bg: "#7CC7FF", ink: "#111",
    one: "Affiliate engine — every guest becomes a micro-influencer.",
    sync: "Hosts a Partner Card on your hub. Real-time commissions.",
  },
  {
    emoji: "📸", name: "PicPop", bg: "#F39A1F", ink: "#111",
    one: "Collaborative event memory cloud & live memory walls.",
    sync: "Embeds a Live Memory Wall on your AuraLink microsite.",
  },
  {
    emoji: "💸", name: "Flex-it", bg: "#C6F432", ink: "#111",
    one: "Social fintech for tipping, splitting & digital spraying.",
    sync: "Powers the Universal Wallet inside your AuraLink hub.",
  },
  {
    emoji: "💌", name: "LoveLetter", bg: "#FF7A59", ink: "#FFF7ED",
    one: "Global reviews & Wall of Love for venues you love.",
    sync: "Streams new Love Letters into your reputation card.",
  },
  {
    emoji: "🏛️", name: "Municipal Nebula", bg: "#1F2BD6", ink: "#FFF7ED",
    one: "City-data intelligence for tourism boards & governments.",
    sync: "Aggregates AuraLink venues into city-wide dashboards.",
  },
];

const EcosystemShowcase = () => (
  <section id="ecosystem" className="px-5 py-20 sm:py-28 bg-[#FFF7ED] border-y-2 border-[#111]">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] text-[#C6F432] text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#111] shadow-[0_3px_0_0_#111]">
          The iBloov ecosystem
        </span>
        <h2 className="font-grotesk mt-5 text-[36px] sm:text-[52px] leading-[1.02] font-extrabold tracking-tight text-[#111]">
          Eight products.{" "}
          <span className="relative inline-block">
            <span className="relative z-10">One platform.</span>
            <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-[#FF7A59] rounded-full -z-0" />
          </span>
        </h2>
        <p className="mt-4 text-[15px] sm:text-[17px] text-[#111]/70">
          Every product plugs into AuraLink — your single hub for reputation, revenue and reach.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-3xl border-2 border-[#111] p-5 shadow-[0_6px_0_0_#111] hover:-translate-y-1.5 hover:rotate-[-1deg] transition-transform"
            style={{ background: p.bg, color: p.ink, transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}
          >
            <div className="h-12 w-12 rounded-2xl bg-[#FFF7ED] border-2 border-[#111] flex items-center justify-center text-2xl mb-3">
              {p.emoji}
            </div>
            <p className="font-grotesk font-extrabold text-[18px] tracking-tight">{p.name}</p>
            <p className="text-[13px] mt-1.5 leading-snug opacity-90">{p.one}</p>
            <div className="mt-4 pt-3 border-t-2 border-[#111]/30">
              <p className="text-[10px] font-extrabold uppercase tracking-wider opacity-80 mb-1">AuraLink Sync</p>
              <p className="text-[12px] leading-snug opacity-90">{p.sync}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemShowcase;
