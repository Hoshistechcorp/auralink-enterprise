import { motion } from "framer-motion";

const categories = [
  {
    title: "Fun Things To Do",
    color: "#FF6B35",
    items: ["Attractions", "Arts & Culture", "Outdoors", "History & Heritage", "Shopping", "Nightlife", "Sports", "Weekend Picks", "Free & Cheap"],
  },
  {
    title: "Events",
    color: "#FFD700",
    items: ["Festivals", "Seasonal & Holidays", "Family & Kids", "Free Events", "Submit Your Event", "Concerts", "Sports Events"],
  },
  {
    title: "Food & Drink",
    color: "#E74C3C",
    items: ["Famous Restaurants", "Culinary Experiences", "Farmers Markets", "Michelin Restaurants", "Rooftop Bars", "Food Tours", "Lunch Spots"],
  },
  {
    title: "Where To Stay",
    color: "#9B59B6",
    items: ["All Hotels", "Resorts", "Luxury Hotels", "Downtown Hotels", "Airport Hotels", "Boutique Stays", "Vacation Rentals"],
  },
  {
    title: "Plan Your Visit",
    color: "#00CED1",
    items: ["Getting Around", "Take a Tour", "Neighborhoods", "Itineraries", "Deals", "Visitor Guide", "Local Guides", "LGBTQ", "Directions & Parking"],
  },
];

const TourismCategoryGrid = () => {
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
          <p className="text-[#00CED1] font-bold text-xs tracking-[0.3em] uppercase mb-3">Content Depth</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            Everything visitors <span className="text-[#FF6B35]">search for</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Your destination hub covers every category a traveler could need — organized, searchable, trackable.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 rounded-full" style={{ background: cat.color }} />
                <h3 className="text-sm font-bold text-white uppercase tracking-wide">{cat.title}</h3>
              </div>
              {cat.items.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 py-1.5 px-3 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer group"
                >
                  <div
                    className="w-1 h-1 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                    style={{ background: cat.color }}
                  />
                  <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismCategoryGrid;
