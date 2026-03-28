import { motion } from "framer-motion";
import { BarChart3, Trophy, Thermometer, Users } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Visitor Analytics", desc: "Page views, unique visitors, engagement time — updated live." },
  { icon: Trophy, title: "Top Performers", desc: "See which attractions, restaurants, and events get the most engagement." },
  { icon: Thermometer, title: "Seasonal Trends", desc: "Understand when tourists come, where they go, and what they spend." },
  { icon: Users, title: "Demographics", desc: "Age, origin, interests — build campaigns that actually convert." },
];

const metrics = [
  { label: "Page Views", value: "847K", change: "↑ 24%" },
  { label: "Unique Visitors", value: "312K", change: "↑ 18%" },
  { label: "Avg. Time", value: "4:32", change: "↑ 12%" },
  { label: "Top Attraction", value: "Georgia Aquarium", change: "↑ 31%" },
];

const barHeights = [45, 62, 38, 75, 55, 82, 68, 90, 72, 58, 85, 65];

const TourismDashboard = () => {
  return (
    <section className="bg-[#FAFAF8] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-[#1B9AAA] tracking-[2px] uppercase mb-4">
              Tourism Dashboard
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,40px)] font-bold text-[#0D1117] leading-[1.2] mb-5">
              Know exactly what drives your visitors.
            </h2>
            <p className="text-base text-[#4A5568] leading-relaxed mb-6">
              Real-time analytics built for tourism directors, not data scientists.
              See what attractions draw people in, which events drive return visits,
              and where to invest next.
            </p>
            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3.5 p-4 bg-[#F5F0E8] rounded-xl"
                >
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-[18px] h-[18px] text-[#1B9AAA]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#0D1117] mb-0.5">{f.title}</h5>
                    <p className="text-[13px] text-[#4A5568]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0D1117] rounded-[20px] p-7 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          >
            <p className="text-sm font-semibold text-white/50 mb-5">
              TOURISM DASHBOARD — City of Atlanta
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white/5 rounded-xl p-4">
                  <p className="text-[11px] text-white/40 mb-1">{m.label}</p>
                  <p className="font-display text-[26px] font-bold">{m.value}</p>
                  <p className="text-[11px] font-semibold text-[#4ADE80]">{m.change}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4">
              <p className="text-[11px] text-white/40 mb-3">Monthly Visitor Engagement</p>
              <div className="flex items-end gap-1.5 h-20">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#1B9AAA]/30 to-[#1B9AAA]"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TourismDashboard;
