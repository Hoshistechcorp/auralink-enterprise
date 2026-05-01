import { motion } from "framer-motion";
import { BarChart3, Trophy, Thermometer, Users, QrCode, Globe } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Visitor Analytics", desc: "Page views, unique visitors, engagement time — updated live." },
  { icon: Trophy, title: "Top Performers", desc: "Which attractions, restaurants, and events get the most engagement." },
  { icon: QrCode, title: "Campaign QR Scans", desc: "Track every QR touchpoint across the airport, city, and venues." },
  { icon: Thermometer, title: "Seasonal Trends", desc: "Understand when visitors come, where they go, and what they spend." },
  { icon: Globe, title: "Traveler Origin", desc: "International and domestic markets driving demand by season." },
  { icon: Users, title: "Demographics", desc: "Age, language, interest categories — built for board-ready reporting." },
];

const metrics = [
  { label: "Page Views", value: "847K", change: "+24%" },
  { label: "Unique Visitors", value: "312K", change: "+18%" },
  { label: "Avg. Engagement", value: "4:32", change: "+12%" },
  { label: "QR Scans / mo", value: "186K", change: "+41%" },
];

const barHeights = [45, 62, 38, 75, 55, 82, 68, 90, 72, 58, 85, 65];

const TourismDashboard = () => {
  return (
    <section id="analytics" className="relative bg-tourism-graphite py-20 sm:py-28 border-t border-tourism-divider">
      <div className="absolute inset-0 bg-grid-transit opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
              Tourism Analytics
            </p>
            <h2 className="font-fraunces text-[clamp(28px,3.2vw,42px)] font-bold text-tourism-ivory leading-[1.15] mb-5">
              Know exactly what{" "}
              <span className="italic text-tourism-brass">drives your visitors</span>.
            </h2>
            <p className="text-base text-tourism-slate leading-relaxed mb-6">
              Real-time analytics built for tourism directors and ministries — not data scientists.
              Justify spend, improve campaigns, and guide infrastructure planning.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3 p-3.5 bg-[#0F1626] border border-tourism-divider rounded-xl"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#3FA7A0]/12 border border-[#3FA7A0]/20 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-tourism-teal" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-tourism-ivory mb-0.5">{f.title}</h5>
                    <p className="text-[11.5px] text-tourism-slate leading-snug">{f.desc}</p>
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
            className="bg-[#0A0F1C] border border-tourism-divider rounded-[20px] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-tourism-slate font-bold">Tourism Dashboard</p>
                <p className="font-fraunces text-tourism-ivory text-[15px] font-bold mt-0.5">City of Atlanta · Live</p>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] text-tourism-teal font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-tourism-teal animate-pulse" />
                LIVE
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {metrics.map((m) => (
                <div key={m.label} className="bg-[#0F1626] border border-tourism-divider rounded-xl p-4">
                  <p className="text-[10px] text-tourism-slate uppercase tracking-wider mb-1.5">{m.label}</p>
                  <p className="font-fraunces text-[24px] font-bold text-tourism-ivory leading-none">{m.value}</p>
                  <p className="text-[11px] font-bold text-[#8FA888] mt-1.5">{m.change}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#0F1626] border border-tourism-divider rounded-xl p-4 mb-3">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] text-tourism-slate font-semibold">Monthly QR engagement</p>
                <p className="text-[10px] text-tourism-brass font-bold">+41% YoY</p>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#3FA7A0]/30 to-[#3FA7A0]"
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#0F1626] border border-tourism-divider rounded-xl p-4">
              <p className="text-[11px] text-tourism-slate font-semibold mb-3">Top attractions this week</p>
              {[
                { name: "Georgia Aquarium", val: "21.4K", pct: 92 },
                { name: "Centennial Park", val: "16.8K", pct: 72 },
                { name: "MLK Historic District", val: "12.1K", pct: 52 },
              ].map((row) => (
                <div key={row.name} className="flex items-center gap-3 py-1.5">
                  <span className="text-[12px] text-tourism-ivory w-44 truncate">{row.name}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-[#1F2638] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-tourism-brass"
                    />
                  </div>
                  <span className="text-[11px] text-tourism-slate font-mono w-12 text-right">{row.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TourismDashboard;
