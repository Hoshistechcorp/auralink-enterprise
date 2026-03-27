import { motion } from "framer-motion";
import {
  Globe, MapPin, BarChart3, Users2, Megaphone,
  TrendingUp, Compass, Camera, CalendarDays, Landmark, Building2, PieChart,
} from "lucide-react";

const tourismCapabilities = [
  { icon: Globe, title: "Destination Portal", desc: "A single link showcasing every venue, attraction, and experience in your destination", color: "#FF6B35" },
  { icon: MapPin, title: "Interactive Maps", desc: "Let visitors discover restaurants, hotels, and attractions with smart mapping", color: "#00CED1" },
  { icon: BarChart3, title: "Visitor Analytics", desc: "Track visitor behavior, popular spots, and tourism trends in real-time", color: "#FFD700" },
  { icon: Users2, title: "Venue Network", desc: "Onboard and manage all hospitality venues in your destination from one dashboard", color: "#9B59B6" },
  { icon: TrendingUp, title: "Economic Impact", desc: "Measure tourism revenue, spending patterns, and growth metrics", color: "#2ECC71" },
  { icon: Megaphone, title: "Campaign Manager", desc: "Run destination marketing campaigns with trackable QR codes and links", color: "#E74C3C" },
  { icon: CalendarDays, title: "Event Calendar", desc: "Centralized events across all venues — festivals, markets, concerts", color: "#FF6B35" },
  { icon: Camera, title: "Visual Storytelling", desc: "Curate galleries and visitor stories that showcase your destination", color: "#00CED1" },
  { icon: PieChart, title: "Reporting Suite", desc: "Generate board-ready reports on tourism KPIs and performance", color: "#FFD700" },
  { icon: Compass, title: "Itinerary Builder", desc: "Help visitors plan multi-day trips with curated venue recommendations", color: "#9B59B6" },
  { icon: Landmark, title: "Heritage & Culture", desc: "Spotlight cultural landmarks, local cuisine, and authentic experiences", color: "#2ECC71" },
  { icon: Building2, title: "Stakeholder Portal", desc: "Give government bodies and sponsors visibility into tourism metrics", color: "#E74C3C" },
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
          <p className="text-[#00CED1] font-bold text-xs tracking-[0.3em] uppercase mb-3">Platform Features</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            Destination-grade <span className="text-[#FF6B35]">tools</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Everything a tourism board needs to digitize, measure, and market their destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {tourismCapabilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Colored top-line accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: f.color }} />
              
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${f.color}15` }}>
                <f.icon className="w-4 h-4" style={{ color: f.color }} />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{f.title}</h3>
              <p className="text-[12px] text-white/40 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismCapabilities;
