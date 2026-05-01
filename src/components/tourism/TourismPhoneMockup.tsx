import { motion } from "framer-motion";
import {
  Landmark, Compass, CalendarDays, UtensilsCrossed, Hotel,
  Theater, TreePine, Map as MapIcon, Train, Info, Store, Camera,
  Tag, Megaphone, Route,
} from "lucide-react";

const cards = [
  { icon: Landmark, name: "Attractions" },
  { icon: Compass, name: "Things To Do" },
  { icon: CalendarDays, name: "Events" },
  { icon: UtensilsCrossed, name: "Food" },
  { icon: Hotel, name: "Hotels" },
  { icon: Theater, name: "Culture" },
  { icon: TreePine, name: "Nature" },
  { icon: MapIcon, name: "Districts" },
  { icon: Train, name: "Transit" },
  { icon: Info, name: "Services" },
  { icon: Store, name: "Local Biz" },
  { icon: Camera, name: "Photos" },
  { icon: Tag, name: "Deals" },
  { icon: Megaphone, name: "Creators" },
  { icon: Route, name: "Plan Trip" },
];

const TourismPhoneMockup = () => {
  return (
    <section className="relative bg-tourism-graphite py-20 sm:py-28 border-t border-tourism-divider overflow-hidden">
      <div className="absolute inset-0 bg-grid-transit opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#C9A35B]/8 blur-[140px]" />

      <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            The Solution
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15] mb-4">
            One destination hub.{" "}
            <span className="italic text-tourism-brass">Everything a visitor needs.</span>
          </h2>
          <p className="text-base text-tourism-slate max-w-[620px] mx-auto mb-14 leading-relaxed">
            AuraLink gives your city, state, or country a beautiful, mobile-first destination
            page — built from 15 modular cards covering every aspect of the visitor experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[420px] mx-auto bg-[#0A0F1C] rounded-[28px] border border-tourism-divider shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Header band */}
          <div className="bg-gradient-to-br from-[#C9A35B] to-[#B8893E] px-6 pt-7 pb-9 text-[#1B1310] text-center relative">
            <div className="w-12 h-12 rounded-full bg-[#0A0F1C]/15 mx-auto mb-2 flex items-center justify-center">
              <Landmark className="w-6 h-6 text-[#1B1310]" />
            </div>
            <h3 className="font-fraunces text-[22px] font-bold">Visit Atlanta</h3>
            <p className="text-xs opacity-70 font-semibold">Explore Georgia · USA</p>
            <div className="flex justify-center gap-5 mt-3 text-[11px] opacity-80 font-semibold">
              <span>★ 4.8 Rating</span>
              <span>12M Visitors / yr</span>
            </div>
            <div className="absolute -bottom-px left-0 right-0 h-5 bg-[#0A0F1C] rounded-t-[20px]" />
          </div>

          {/* Action chips */}
          <div className="flex gap-2 justify-center px-5 pt-3 pb-3 flex-wrap">
            <span className="px-3.5 py-1.5 rounded-lg bg-tourism-brass text-[#1B1310] text-[11px] font-bold">Plan Trip</span>
            <span className="px-3.5 py-1.5 rounded-lg border border-tourism-divider text-tourism-slate text-[11px] font-semibold">Map</span>
            <span className="px-3.5 py-1.5 rounded-lg border border-tourism-divider text-tourism-slate text-[11px] font-semibold">Events</span>
            <span className="px-3.5 py-1.5 rounded-lg border border-tourism-divider text-tourism-slate text-[11px] font-semibold">Share</span>
          </div>

          {/* 15 cards */}
          <div className="grid grid-cols-3 gap-2.5 px-5 pb-6">
            {cards.map((c) => (
              <div
                key={c.name}
                className="bg-[#0F1626] border border-tourism-divider rounded-xl py-3.5 px-2 text-center hover:border-[#C9A35B]/40 transition-colors"
              >
                <c.icon className="w-5 h-5 text-tourism-brass mx-auto mb-1.5" />
                <div className="text-[10px] font-bold text-tourism-ivory">{c.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismPhoneMockup;
