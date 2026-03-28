import { motion } from "framer-motion";
import {
  Globe, MapPin, BarChart3, Users2, Megaphone,
  TrendingUp, Compass, Camera, CalendarDays, Landmark, Building2, PieChart,
} from "lucide-react";

const pillars = [
  {
    title: "Drive Visitors",
    color: "#FF6B35",
    features: [
      { icon: Globe, title: "Destination Portal", desc: "One link showcasing every venue and experience" },
      { icon: Megaphone, title: "Campaign Manager", desc: "Trackable QR-powered destination campaigns" },
      { icon: Camera, title: "Visual Storytelling", desc: "Curated galleries that sell the destination" },
      { icon: CalendarDays, title: "Event Calendar", desc: "Centralized festivals, markets, and concerts" },
    ],
  },
  {
    title: "Extend Stays",
    color: "#FFD700",
    features: [
      { icon: MapPin, title: "Interactive Maps", desc: "Smart discovery of restaurants and attractions" },
      { icon: Compass, title: "Itinerary Builder", desc: "Multi-day trip planning with recommendations" },
      { icon: Landmark, title: "Heritage & Culture", desc: "Cultural landmarks and authentic experiences" },
      { icon: Users2, title: "Venue Network", desc: "Onboard all hospitality venues from one hub" },
    ],
  },
  {
    title: "Measure Impact",
    color: "#00CED1",
    features: [
      { icon: BarChart3, title: "Visitor Analytics", desc: "Real-time behavior, trends, and popular spots" },
      { icon: TrendingUp, title: "Economic Impact", desc: "Revenue, spending patterns, and growth metrics" },
      { icon: PieChart, title: "Reporting Suite", desc: "Board-ready KPI reports and dashboards" },
      { icon: Building2, title: "Stakeholder Portal", desc: "Government and sponsor visibility into data" },
    ],
  },
];

const TourismCapabilities = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#00CED1] font-bold text-xs tracking-[0.3em] uppercase mb-3">Three Pillars</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            The <span className="text-[#FF6B35]">government sell</span> in three words
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Drive more visitors. Keep them longer. Measure everything.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, pi) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pi * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 rounded-full" style={{ background: pillar.color }} />
                <h3 className="text-xl font-display font-bold text-white">{pillar.title}</h3>
              </div>

              {pillar.features.map((f, fi) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: pi * 0.1 + fi * 0.05 }}
                  className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${pillar.color}15` }}
                    >
                      <f.icon className="w-4 h-4" style={{ color: pillar.color }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">{f.title}</h4>
                      <p className="text-[11px] text-white/40 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismCapabilities;
