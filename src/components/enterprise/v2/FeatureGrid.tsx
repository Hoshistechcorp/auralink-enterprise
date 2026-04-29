import { motion } from "framer-motion";
import { Gift, Sparkles, CalendarCheck, Megaphone } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Branded Digital Gift Cards",
    desc: "Launch custom digital gift cards in seconds — fully branded to your venue.",
    glow: "from-[#3B82F6] to-[#60A5FA]",
  },
  {
    icon: Sparkles,
    title: "Multilingual AI Concierge",
    desc: "Automate 80% of guest inquiries in 40+ languages. Secure reservations while you sleep.",
    glow: "from-[#8B5CF6] to-[#A78BFA]",
  },
  {
    icon: CalendarCheck,
    title: "Private Dining & Events",
    desc: "Manage ticket sales, deposits, and VIP lists directly from your hub.",
    glow: "from-[#F472B6] to-[#EC4899]",
  },
  {
    icon: Megaphone,
    title: "TribeMint Affiliate Engine",
    desc: "Turn loyal guests into your marketing team with automated micro-commissions for referrals.",
    glow: "from-[#10B981] to-[#34D399]",
  },
];

const FeatureGrid = () => (
  <section id="features" className="relative py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#60A5FA]">Core platform</span>
        <h2 className="font-jakarta mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Everything your venue needs.
          <br />
          <span className="text-white/40">Nothing it doesn't.</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-7 hover:bg-white/[0.04] hover:border-white/[0.15] transition-all overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${f.glow} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              <div className="relative">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.glow} shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-jakarta mt-5 text-xl font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-[14px] text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeatureGrid;
