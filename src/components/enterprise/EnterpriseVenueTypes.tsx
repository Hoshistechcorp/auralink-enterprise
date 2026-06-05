import { motion } from "framer-motion";

const venues = [
  {
    name: "Restaurants & Cafés",
    desc: "Loyalty, gamification, digital menus — one QR scan.",
    color: "#E8604C",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=70",
  },
  {
    name: "Hotels & Resorts",
    desc: "Digital concierge driving direct bookings.",
    color: "#D4A853",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=70",
  },
  {
    name: "Bars & Lounges",
    desc: "Fill seats with targeted gamification & promos.",
    color: "#1B9AAA",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=70",
  },
  {
    name: "Clubs & Nightlife",
    desc: "VIP lists, tickets, and live revenue tracking.",
    color: "#EC4899",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=70",
  },
  {
    name: "Event Venues",
    desc: "Showcase, book, sell, and collect reviews.",
    color: "#06B6D4",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=70",
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {venues.map((v, i) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.06] min-h-[200px] flex flex-col justify-end group"
            style={{ borderTopColor: v.color, borderTopWidth: 2 }}
          >
            <img src={v.image} alt={v.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/70 to-transparent" />
            <div className="relative p-5">
              <h3 className="text-white font-semibold text-lg">{v.name}</h3>
              <p className="mt-1 text-white/50 text-sm">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EnterpriseVenueTypes;
