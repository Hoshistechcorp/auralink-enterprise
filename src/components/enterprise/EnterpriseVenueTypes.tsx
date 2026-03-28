import { motion } from "framer-motion";

const venues = [
  {
    emoji: "🍽️",
    name: "Restaurants & Cafés",
    desc: "Turn first-time diners into regulars. Loyalty points, spin-to-win games, digital menus, and referral rewards — all from one QR scan at the table.",
    color: "#E8604C",
  },
  {
    emoji: "🏨",
    name: "Hotels & Resorts",
    desc: "A digital concierge that drives direct bookings. Guests discover amenities, leave reviews, book spa treatments, and share with friends — no app needed.",
    color: "#D4A853",
  },
  {
    emoji: "🍸",
    name: "Bars & Lounges",
    desc: "Fill seats on slow nights with targeted gamification. Happy hour promos, event calendars, and real-time analytics across every location.",
    color: "#1B9AAA",
  },
  {
    emoji: "🎵",
    name: "Clubs & Nightlife",
    desc: "VIP lists, bottle service menus, event tickets, and influencer partnerships — all managed from one dashboard with live revenue tracking.",
    color: "#EC4899",
  },
  {
    emoji: "🎪",
    name: "Event Venues",
    desc: "Showcase your space, manage bookings, sell packages, and collect reviews. One link for corporate clients, wedding planners, and walk-ins.",
    color: "#06B6D4",
  },
];

const EnterpriseVenueTypes = () => (
  <section className="py-16 sm:py-24 border-t border-white/[0.04]">
    <div className="max-w-5xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-[#1B9AAA]">Built For Every Venue</span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
          Your venue type. <span className="italic text-white/40">Your AuraLink.</span>
        </h2>
      </motion.div>

      <div className="space-y-3">
        {venues.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            style={{ borderLeftColor: v.color, borderLeftWidth: 3 }}
          >
            <div
              className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${v.color}10` }}
            >
              {v.emoji}
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{v.name}</h3>
              <p className="mt-1.5 text-white/50 text-sm leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseVenueTypes;
