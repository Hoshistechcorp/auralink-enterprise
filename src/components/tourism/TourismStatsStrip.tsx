import { motion } from "framer-motion";

const logos = [
  "City Tourism", "State Office", "Visitor Bureau", "Convention Authority",
  "Airport Authority", "National Ministry",
];

const TourismStatsStrip = () => {
  return (
    <section className="relative bg-tourism-graphite py-12 border-y border-tourism-divider">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-center text-[11px] font-bold text-tourism-slate tracking-[0.3em] uppercase mb-6">
          Built for public-sector destination teams
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center text-[12px] font-fraunces text-tourism-ivory/70 tracking-wide py-2 border-x border-tourism-divider/50"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismStatsStrip;
