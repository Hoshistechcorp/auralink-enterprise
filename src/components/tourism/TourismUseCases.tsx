import { motion } from "framer-motion";
import { Building2, Compass, TrendingUp, Globe, Map, Sparkles, X, Check } from "lucide-react";

const problems = [
  "A website nobody updates",
  "Social pages with no analytics",
  "PDF guides that die on download",
  "Random apps nobody installs",
  "No way to measure ROI",
];

const solutions = [
  "One AuraLink hub — always current",
  "Real-time visitor analytics built in",
  "Mobile-first, zero download required",
  "15 smart cards, infinite content",
  "Board-ready ROI dashboards",
];

const useCases = [
  { title: "City & Regional Tourism Boards", desc: "Unite every restaurant, hotel, and attraction under one digital destination. Track visitor engagement and demonstrate ROI to stakeholders.", icon: Building2, gradient: "from-[#FF6B35] to-[#FF8555]" },
  { title: "Convention & Visitors Bureaus", desc: "Equip convention attendees with a scannable guide to local dining, nightlife, and experiences — driving spending to member businesses.", icon: Compass, gradient: "from-[#00CED1] to-[#00E5FF]" },
  { title: "Destination Marketing Orgs", desc: "Run measurable campaigns with QR-powered landing pages. See exactly how many visitors discovered venues through your promotions.", icon: TrendingUp, gradient: "from-[#FFD700] to-[#FFA500]" },
  { title: "National Tourism Agencies", desc: "Manage tourism across entire countries. Roll up analytics from every state, city, and venue into powerful national dashboards.", icon: Globe, gradient: "from-[#9B59B6] to-[#8E44AD]" },
  { title: "State & Provincial Bodies", desc: "Promote regions within your state. Spotlight hidden gems, seasonal destinations, and local cuisine trails.", icon: Map, gradient: "from-[#2ECC71] to-[#27AE60]" },
  { title: "Festival & Event Destinations", desc: "Transform your city into a festival hub. Centralized event discovery, vendor maps, and real-time attendee analytics.", icon: Sparkles, gradient: "from-[#E74C3C] to-[#C0392B]" },
];

const TourismUseCases = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Problem / Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#E74C3C] font-bold text-xs tracking-[0.3em] uppercase mb-3">The Problem</p>
          <h2 className="text-2xl sm:text-4xl font-display font-bold max-w-3xl mx-auto">
            Your destination runs on <span className="text-[#E74C3C]">47 disconnected tools</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#E74C3C]/5 border border-[#E74C3C]/10"
          >
            <p className="text-xs font-bold text-[#E74C3C] uppercase tracking-wider mb-4">Today's Reality</p>
            <div className="space-y-3">
              {problems.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <X className="w-3.5 h-3.5 text-[#E74C3C] shrink-0" />
                  <span className="text-sm text-white/60">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-[#2ECC71]/5 border border-[#2ECC71]/10"
          >
            <p className="text-xs font-bold text-[#2ECC71] uppercase tracking-wider mb-4">With AuraLink</p>
            <div className="space-y-3">
              {solutions.map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <Check className="w-3.5 h-3.5 text-[#2ECC71] shrink-0" />
                  <span className="text-sm text-white/60">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#FFD700] font-bold text-xs tracking-[0.3em] uppercase mb-3">Who It's For</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            Built for <span className="text-[#FF6B35]">tourism leadership</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:bg-white/[0.05]"
            >
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 blur-xl`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismUseCases;
