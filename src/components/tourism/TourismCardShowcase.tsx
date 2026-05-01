import { motion } from "framer-motion";
import {
  Landmark, Compass, CalendarDays, UtensilsCrossed, Hotel,
  Theater, TreePine, Map, Train, Info, Store, Camera,
  Tag, Megaphone, Route,
} from "lucide-react";

// Three-tone institutional accents: brass / teal / sage
const TONES = ["#C9A35B", "#3FA7A0", "#8FA888"];

const cards = [
  { icon: Landmark, title: "Attractions", desc: "Museums, parks, historic sites with photo previews" },
  { icon: Compass, title: "Things To Do", desc: "Tours, outdoor activities, nightlife, shopping" },
  { icon: CalendarDays, title: "Events & Festivals", desc: "Festivals, concerts, sports events, celebrations" },
  { icon: UtensilsCrossed, title: "Food & Dining", desc: "Top restaurants, food tours, culinary experiences" },
  { icon: Hotel, title: "Hotels & Stays", desc: "Hotels, boutiques, resorts, vacation rentals" },
  { icon: Theater, title: "Cultural Experiences", desc: "Museums, galleries, performing arts, cultural tours" },
  { icon: TreePine, title: "Nature & Parks", desc: "National parks, beaches, trails, outdoor recreation" },
  { icon: Map, title: "Neighborhood Guide", desc: "Downtown, Arts District, Historic Quarter maps" },
  { icon: Train, title: "Transportation", desc: "Airports, transit systems, ride-share, bike rentals" },
  { icon: Info, title: "Visitor Services", desc: "Visitor centers, travel assistance, emergency info" },
  { icon: Store, title: "Local Businesses", desc: "Shops, markets, craft districts, business directory" },
  { icon: Camera, title: "Photo Memories", desc: "Visitor photo feeds, city albums, viral moments" },
  { icon: Tag, title: "Deals", desc: "Hotel discounts, travel packages, seasonal offers" },
  { icon: Megaphone, title: "Local Creators", desc: "Influencers and creators promoting the destination" },
  { icon: Route, title: "Plan Your Trip", desc: "Itineraries, day plans, travel tips, booking tools" },
];

const TourismCardShowcase = () => {
  return (
    <section id="cards" className="relative py-20 sm:py-28 bg-tourism-graphite border-t border-tourism-divider">
      <div className="absolute inset-0 bg-grid-transit opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            The Product
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15]">
            15 cards. One destination.{" "}
            <span className="italic text-tourism-brass">Zero friction.</span>
          </h2>
          <p className="mt-4 text-tourism-slate max-w-xl mx-auto">
            Each card is a self-contained visitor experience module — activate what you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {cards.map((card, i) => {
            const tone = TONES[i % 3];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group relative p-4 sm:p-5 rounded-2xl bg-[#0F1626] border border-tourism-divider hover:border-[#C9A35B]/30 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: tone }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${tone}14`, border: `1px solid ${tone}30` }}
                >
                  <card.icon className="w-5 h-5" style={{ color: tone }} />
                </div>
                <h3 className="text-sm font-bold text-tourism-ivory mb-1">{card.title}</h3>
                <p className="text-[11px] text-tourism-slate leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourismCardShowcase;
