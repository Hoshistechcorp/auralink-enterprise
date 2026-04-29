import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    quote: "We replaced 6 subscriptions and saved $2,400/month. Bookings up 38% in the first quarter.",
    name: "Marcus Chen",
    role: "Executive Chef · Akira Tokyo",
    initials: "MC",
    grad: "from-[#3B82F6] to-[#8B5CF6]",
  },
  {
    quote: "The AI concierge handles 80% of guest questions overnight. My team finally sleeps.",
    name: "Sofia Marquez",
    role: "GM · The Halcyon Hotel",
    initials: "SM",
    grad: "from-[#8B5CF6] to-[#F472B6]",
  },
  {
    quote: "Gift card sales went from $400 to $11K/month. Zero fees. Direct deposit. It just works.",
    name: "Davian Rhodes",
    role: "Owner · Velvet Lounge ATL",
    initials: "DR",
    grad: "from-[#F472B6] to-[#3B82F6]",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="relative py-24 sm:py-32 border-t border-white/[0.04]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F472B6]">Proof</span>
        <h2 className="font-jakarta mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Join 500+ venues plugging the
          <br />
          <span className="text-aura-gradient">revenue leak.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 md:overflow-visible overflow-x-auto md:pb-0 pb-2 snap-x snap-mandatory">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="snap-center min-w-[85%] md:min-w-0 rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl p-7 hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-3.5 h-3.5 fill-[#F472B6] text-[#F472B6]" />
              ))}
            </div>
            <p className="text-[15px] leading-relaxed text-white/85 font-medium">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-white font-jakarta font-bold text-[12px]`}>
                {t.initials}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">{t.name}</p>
                <p className="text-[11px] text-white/40">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
