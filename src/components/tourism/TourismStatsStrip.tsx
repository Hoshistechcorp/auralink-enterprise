import { motion } from "framer-motion";

const stats = [
  { value: "$1.9T", label: "Global tourism market" },
  { value: "73%", label: "Travelers plan on mobile" },
  { value: "15", label: "Cards covering everything" },
  { value: "48hr", label: "From signup to live" },
];

const TourismStatsStrip = () => {
  return (
    <section className="bg-[#0D1117] py-14 sm:py-16">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-display text-[42px] font-bold text-[#D4A853] mb-1.5">
                {stat.value}
              </h3>
              <p className="text-sm text-white/40 font-normal tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismStatsStrip;
