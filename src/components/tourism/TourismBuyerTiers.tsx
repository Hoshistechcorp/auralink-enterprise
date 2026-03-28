import { motion } from "framer-motion";

const tiers = [
  {
    icon: "🏙️",
    title: "City Tourism Boards",
    desc: "Unified digital hub for city attractions, dining, events, and visitor services.",
    budget: "",
  },
  {
    icon: "🏔️",
    title: "State & Provincial",
    desc: "Regional hubs that connect multiple cities into a cohesive tourism strategy.",
    budget: "\n",
  },
  {
    icon: "🌍",
    title: "National Tourism",
    desc: "Country-level destination pages that attract international visitors at scale.",
    budget: "",
  },
  {
    icon: "🏛️",
    title: "Economic Development",
    desc: "Showcase business opportunities, investment zones, and convention facilities.",
    budget: "\n",
  },
];

const TourismBuyerTiers = () => {
  return (
    <section className="bg-[#F5F0E8] py-20 sm:py-28">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-[#1B9AAA] tracking-[2px] uppercase mb-4">
            Built For
          </p>
          <h2 className="font-display text-[clamp(30px,3.5vw,44px)] font-bold text-[#0D1117] mb-14">
            From cities to countries.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform text-center"
            >
              <div className="text-4xl mb-4">{tier.icon}</div>
              <h4 className="text-[15px] font-bold text-[#0D1117] mb-1.5">{tier.title}</h4>
              <p className="text-[13px] text-[#4A5568] leading-relaxed">{tier.desc}</p>
              <p className="text-xs text-[#E8604C] font-bold mt-3">{tier.budget}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismBuyerTiers;
