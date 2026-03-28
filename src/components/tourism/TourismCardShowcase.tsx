import { motion } from "framer-motion";
import {
  Landmark, Compass, CalendarDays, UtensilsCrossed, Hotel,
  Theater, TreePine, Map, Train, Info, Store, Camera,
  Tag, Megaphone, Route,
} from "lucide-react";

const cards = [
  { icon: Landmark, title: "Attractions", desc: "Museums, parks, historic sites with photo previews", integration: "Place API", color: "#FF6B35" },
  { icon: Compass, title: "Things To Do", desc: "Tours, outdoor activities, nightlife, shopping", integration: "Experience API", color: "#00CED1" },
  { icon: CalendarDays, title: "Events & Festivals", desc: "Festivals, concerts, sports events, celebrations", integration: "Event Ticketing", color: "#FFD700" },
  { icon: UtensilsCrossed, title: "Food & Dining", desc: "Top restaurants, food tours, culinary experiences", integration: "Place + Reviews", color: "#E74C3C" },
  { icon: Hotel, title: "Hotels & Stays", desc: "Hotels, boutiques, resorts, vacation rentals", integration: "Place Bookings", color: "#9B59B6" },
  { icon: Theater, title: "Cultural Experiences", desc: "Museums, galleries, performing arts, cultural tours", integration: "ACHIEVE Learning", color: "#2ECC71" },
  { icon: TreePine, title: "Nature & Parks", desc: "National parks, beaches, trails, outdoor recreation", integration: "Sportmate", color: "#27AE60" },
  { icon: Map, title: "Neighborhood Guide", desc: "Downtown, Arts District, Historic Quarter maps", integration: "Maps API", color: "#3498DB" },
  { icon: Train, title: "Transportation", desc: "Airports, transit systems, ride-share, bike rentals", integration: "Kia Travel", color: "#F39C12" },
  { icon: Info, title: "Visitor Services", desc: "Visitor centers, travel assistance, emergency info", integration: "Hub Services", color: "#1ABC9C" },
  { icon: Store, title: "Local Businesses", desc: "Shops, markets, craft districts, business directory", integration: "Commerce", color: "#E67E22" },
  { icon: Camera, title: "Photo Memories", desc: "Visitor photo feeds, city albums, viral moments", integration: "Picture Share", color: "#00CED1" },
  { icon: Tag, title: "Upcoming Deals", desc: "Hotel discounts, travel packages, seasonal offers", integration: "Flex-it", color: "#FFD700" },
  { icon: Megaphone, title: "Local Creators", desc: "Influencers, content creators promoting the city", integration: "TribeMint", color: "#FF6B35" },
  { icon: Route, title: "Plan Your Trip", desc: "Itineraries, day plans, travel tips, booking tools", integration: "Trip Engine", color: "#9B59B6" },
];

const TourismCardShowcase = () => {
  return (
    <section id="cards" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#FFD700] font-bold text-xs tracking-[0.3em] uppercase mb-3">The Product</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            15 Cards. One Destination. <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">Zero Friction.</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Each card is a self-contained module — visitors tap what they need, you track what works.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: card.color }}
              />

              {/* Glow */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(circle, ${card.color}, transparent)` }}
              />

              <div className="relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${card.color}18` }}
                >
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{card.title}</h3>
                <p className="text-[11px] text-white/40 leading-relaxed mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {card.desc}
                </p>
                <div
                  className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wide uppercase opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `${card.color}15`, color: card.color }}
                >
                  {card.integration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismCardShowcase;
