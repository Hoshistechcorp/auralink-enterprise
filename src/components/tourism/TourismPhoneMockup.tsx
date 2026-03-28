import { motion } from "framer-motion";

const cards = [
  { icon: "🏛️", name: "Attractions", sub: "42 spots" },
  { icon: "🧭", name: "Things To Do", sub: "86 activities" },
  { icon: "📅", name: "Events", sub: "12 upcoming" },
  { icon: "🍽️", name: "Food & Dining", sub: "210 places" },
  { icon: "🏨", name: "Hotels", sub: "156 stays" },
  { icon: "🎭", name: "Culture", sub: "38 venues" },
  { icon: "🌳", name: "Nature", sub: "24 parks" },
  { icon: "🗺️", name: "Neighborhoods", sub: "9 districts" },
  { icon: "🚆", name: "Transport", sub: "All options" },
  { icon: "ℹ️", name: "Services", sub: "Visitor help" },
  { icon: "🏪", name: "Local Biz", sub: "340+ shops" },
  { icon: "📸", name: "Photo Wall", sub: "Memories" },
  { icon: "🏷️", name: "Deals", sub: "18 offers" },
  { icon: "📢", name: "Creators", sub: "Local voices" },
  { icon: "🧭", name: "Plan Trip", sub: "AI assisted" },
];

const TourismPhoneMockup = () => {
  return (
    <section className="bg-[#F5F0E8] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-[#1B9AAA] tracking-[2px] uppercase mb-4">
            The Solution
          </p>
          <h2 className="font-display text-[clamp(30px,3.5vw,44px)] font-bold text-[#0D1117] leading-[1.2] mb-3">
            One destination hub.
            <br />
            Everything a visitor needs.
          </h2>
          <p className="text-lg text-[#4A5568] max-w-[600px] mx-auto mb-14 leading-relaxed font-light">
            AuraLink gives your city, state, or country a beautiful, mobile-first
            destination page — built from 15 modular cards that cover every aspect
            of the visitor experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[420px] mx-auto bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-[#1B9AAA] to-[#0D7B88] px-6 pt-8 pb-8 text-white text-center relative">
            <div className="w-12 h-12 rounded-full bg-white/20 mx-auto mb-3 flex items-center justify-center text-2xl">
              🏙️
            </div>
            <h3 className="font-display text-[22px] font-bold">Visit Atlanta</h3>
            <p className="text-xs opacity-75">Explore Georgia · USA</p>
            <div className="flex justify-center gap-6 mt-3 text-[11px] opacity-80">
              <span>⭐ 4.8 Rating</span>
              <span>🏛️ 12M Visitors/yr</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-5 bg-white rounded-t-[20px]" />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-center px-6 pt-2 pb-3 flex-wrap">
            <span className="px-4 py-2 rounded-lg bg-[#E8604C] text-white text-xs font-semibold">Plan Trip</span>
            <span className="px-4 py-2 rounded-lg border border-black/10 text-[#4A5568] text-xs font-semibold">📍 Map</span>
            <span className="px-4 py-2 rounded-lg border border-black/10 text-[#4A5568] text-xs font-semibold">📅 Events</span>
            <span className="px-4 py-2 rounded-lg border border-black/10 text-[#4A5568] text-xs font-semibold">↗ Share</span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-2.5 px-5 pb-6">
            {cards.map((card) => (
              <div
                key={card.name}
                className="bg-[#FAFAF8] rounded-xl py-3.5 px-2 text-center border border-black/[0.03] hover:scale-[1.04] transition-transform"
              >
                <div className="text-[22px] mb-1">{card.icon}</div>
                <div className="text-[10px] font-bold text-[#0D1117]">{card.name}</div>
                <div className="text-[9px] text-[#8B95A5] mt-0.5">{card.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismPhoneMockup;
