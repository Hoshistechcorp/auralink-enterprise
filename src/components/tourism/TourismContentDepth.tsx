import { motion } from "framer-motion";

const clusters = [
  { title: "Attractions", items: ["Top sights", "Hidden gems", "Photo spots"] },
  { title: "Events", items: ["This weekend", "Festivals", "Sports"] },
  { title: "Food & Drink", items: ["Best restaurants", "Local cuisine", "Coffee + bars"] },
  { title: "Hotels", items: ["Boutique", "Family-friendly", "Luxury"] },
  { title: "Neighborhoods", items: ["District guides", "Walking maps", "Local culture"] },
  { title: "Itineraries", items: ["1-day", "Weekend", "Week-long"] },
  { title: "Directions & Parking", items: ["Transit", "Garages", "Bike share"] },
  { title: "Family Activities", items: ["Kids", "Teens", "Multi-gen"] },
  { title: "Free Events", items: ["Outdoor", "Museums", "Community"] },
  { title: "Local Guides", items: ["Insider tips", "Creators", "Locals' picks"] },
  { title: "LGBTQ Travel", items: ["Welcoming venues", "Pride events", "Resources"] },
  { title: "Seasonal Campaigns", items: ["Summer", "Holidays", "Off-season"] },
];

const TourismContentDepth = () => {
  return (
    <section className="relative bg-tourism-midnight py-20 sm:py-28 border-t border-tourism-divider">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            Content Depth
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15]">
            Everything visitors search for,{" "}
            <span className="italic text-tourism-brass">already organized</span>.
          </h2>
          <p className="mt-5 text-tourism-slate text-base leading-relaxed">
            AuraLink captures the full destination journey — not just brochure content.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clusters.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group rounded-2xl border border-tourism-divider bg-[#0F1626] p-5 hover:border-[#8FA888]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1 h-4 rounded-full bg-tourism-brass" />
                <h4 className="font-fraunces text-[15px] font-bold text-tourism-ivory">{c.title}</h4>
              </div>
              <ul className="space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="text-[12px] text-tourism-slate flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#8FA888]/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismContentDepth;
