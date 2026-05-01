import { motion } from "framer-motion";
import { Star } from "lucide-react";

const kpis = [
  { value: "312%", label: "More engagement" },
  { value: "80%", label: "Tasks automated" },
  { value: "3 min", label: "Time to value" },
  { value: "0%", label: "Gift card commission" },
  { value: "Multi", label: "Location-ready" },
];

const items = [
  {
    quote: "We replaced six subscriptions with AuraLink. Direct bookings are up, and our team finally focuses on guests instead of dashboards.",
    name: "Marcus Chen",
    role: "Executive Chef · Akira Tokyo",
    initials: "MC",
  },
  {
    quote: "The AI concierge handles guest questions in eight languages overnight. It's like adding a tireless front-desk team.",
    name: "Sofia Marquez",
    role: "General Manager · The Halcyon Hotel",
    initials: "SM",
  },
  {
    quote: "One link, one operating system. Gift cards, events, and loyalty all run from the same hub — and the data finally belongs to us.",
    name: "Davian Rhodes",
    role: "Owner · Velvet Lounge ATL",
    initials: "DR",
  },
];

const Testimonials = () => (
  <section className="relative py-24 sm:py-32 bg-[#0B0907] border-t border-[#2A2320]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">Proof</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          Growth you can <span className="italic text-brass-gradient">measure.</span>
        </h2>
      </motion.div>

      {/* KPI strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-16">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-2xl border border-[#2A2320] bg-[#141110] p-5 text-center hover:border-brass-soft transition-colors"
          >
            <p className="font-fraunces font-bold text-3xl text-brass-gradient">{k.value}</p>
            <p className="text-[11px] text-stone-warm mt-1.5 uppercase tracking-wider font-semibold">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-3xl border border-[#2A2320] bg-[#141110]/80 backdrop-blur p-7 hover:border-brass-soft transition-colors"
          >
            <div className="absolute top-0 left-7 right-7 h-px bg-brass-gradient opacity-60" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-3.5 h-3.5 fill-[#E8C886] text-[#E8C886]" />
              ))}
            </div>
            <p className="font-fraunces text-[16px] leading-relaxed text-ivory/90 italic">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[#2A2320]">
              <div className="h-10 w-10 rounded-full bg-brass-gradient flex items-center justify-center text-[#1B1310] font-fraunces font-bold text-[13px]">
                {t.initials}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-ivory">{t.name}</p>
                <p className="text-[11px] text-stone-warm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
