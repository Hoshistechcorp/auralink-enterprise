import { motion } from "framer-motion";
import {
  Globe, MapPin, BarChart3, Users2, Megaphone,
  TrendingUp, Compass, Camera, CalendarDays, Landmark, Building2, PieChart,
} from "lucide-react";

const pillars = [
  {
    title: "Drive Visitors",
    color: "#C9A35B",
    features: [
      { icon: Globe, title: "Destination Portal", desc: "One link showcasing every venue and experience" },
      { icon: Megaphone, title: "Campaign Manager", desc: "Trackable QR-powered destination campaigns" },
      { icon: Camera, title: "Visual Storytelling", desc: "Curated galleries that sell the destination" },
      { icon: CalendarDays, title: "Event Calendar", desc: "Centralized festivals, markets, and concerts" },
    ],
  },
  {
    title: "Extend Stays",
    color: "#8FA888",
    features: [
      { icon: MapPin, title: "Interactive Maps", desc: "Smart discovery of restaurants and attractions" },
      { icon: Compass, title: "Itinerary Builder", desc: "Multi-day trip planning with recommendations" },
      { icon: Landmark, title: "Heritage & Culture", desc: "Cultural landmarks and authentic experiences" },
      { icon: Users2, title: "Venue Network", desc: "Onboard all hospitality venues from one hub" },
    ],
  },
  {
    title: "Measure Impact",
    color: "#3FA7A0",
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
    <section id="capabilities" className="relative py-20 sm:py-28 bg-tourism-midnight border-t border-tourism-divider">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            Three Pillars
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15]">
            The government sell-in,{" "}
            <span className="italic text-tourism-brass">in three outcomes</span>.
          </h2>
          <p className="mt-4 text-tourism-slate max-w-lg mx-auto">
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
              className="space-y-3"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-8 rounded-full" style={{ background: pillar.color }} />
                <h3 className="font-fraunces text-[22px] font-bold text-tourism-ivory">{pillar.title}</h3>
              </div>

              {pillar.features.map((f, fi) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: pi * 0.1 + fi * 0.05 }}
                  className="group p-4 rounded-xl bg-[#0F1626] border border-tourism-divider hover:border-[#C9A35B]/25 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${pillar.color}14`, border: `1px solid ${pillar.color}30` }}
                    >
                      <f.icon className="w-4 h-4" style={{ color: pillar.color }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-tourism-ivory mb-0.5">{f.title}</h4>
                      <p className="text-[11.5px] text-tourism-slate leading-relaxed">{f.desc}</p>
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
