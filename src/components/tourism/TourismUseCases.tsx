import { motion } from "framer-motion";
import { Building2, Compass, TrendingUp, Globe, Map, Sparkles } from "lucide-react";

const useCases = [
  {
    title: "City & Regional Tourism Boards",
    desc: "Unite every restaurant, hotel, and attraction under one digital destination. Track visitor engagement and demonstrate ROI to stakeholders and government bodies.",
    icon: Building2,
    gradient: "from-[#FF6B35] to-[#FF8555]",
  },
  {
    title: "Convention & Visitors Bureaus",
    desc: "Equip convention attendees with a scannable guide to local dining, nightlife, and experiences — driving spending directly to your member businesses.",
    icon: Compass,
    gradient: "from-[#00CED1] to-[#00E5FF]",
  },
  {
    title: "Destination Marketing Orgs",
    desc: "Run measurable campaigns with QR-powered landing pages. See exactly how many visitors discovered venues through your promotions.",
    icon: TrendingUp,
    gradient: "from-[#FFD700] to-[#FFA500]",
  },
  {
    title: "National Tourism Agencies",
    desc: "Manage tourism across entire countries. Roll up analytics from every state, city, and venue into powerful national dashboards.",
    icon: Globe,
    gradient: "from-[#9B59B6] to-[#8E44AD]",
  },
  {
    title: "State & Provincial Bodies",
    desc: "Promote regions within your state. Spotlight hidden gems, seasonal destinations, and local cuisine trails that drive repeat visits.",
    icon: Map,
    gradient: "from-[#2ECC71] to-[#27AE60]",
  },
  {
    title: "Festival & Event Destinations",
    desc: "Transform your city into a festival hub. Centralized event discovery, vendor maps, and real-time attendee analytics all in one place.",
    icon: Sparkles,
    gradient: "from-[#E74C3C] to-[#C0392B]",
  },
];

const TourismUseCases = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#FFD700] font-bold text-xs tracking-[0.3em] uppercase mb-3">Who It's For</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            Built for <span className="text-[#FF6B35]">tourism leadership</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            From city boards to national tourism organizations — AuraLink scales with your destination.
          </p>
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
              {/* Glow on hover */}
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
