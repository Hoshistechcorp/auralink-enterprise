import { motion } from "framer-motion";
import { Layers, EyeOff, Hourglass } from "lucide-react";

const painCards = [
  {
    icon: Layers,
    title: "Fragmented Marketing",
    description:
      "A website, a tourism app nobody downloads, outdated brochures, disconnected event listings, and scattered social channels make trip planning harder than it should be.",
  },
  {
    icon: EyeOff,
    title: "Zero Visibility",
    description:
      "Tourism offices spend on campaigns without knowing which attractions, neighborhoods, or events actually drive engagement and economic activity.",
  },
  {
    icon: Hourglass,
    title: "Slow & Expensive Platforms",
    description:
      "Custom destination platforms take months or years to launch and are often outdated before they go live.",
  },
];

const TourismProblem = () => {
  return (
    <section className="relative bg-tourism-midnight py-20 sm:py-28 border-t border-tourism-divider">
      <div className="absolute inset-0 bg-grid-transit opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-[11px] font-bold text-tourism-teal tracking-[0.3em] uppercase mb-4">
            The Problem
          </p>
          <h2 className="font-fraunces text-[clamp(30px,3.6vw,46px)] font-bold text-tourism-ivory leading-[1.15]">
            Your digital tourism presence is{" "}
            <span className="italic text-tourism-brass">scattered, outdated, and invisible</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0F1626] border border-tourism-divider rounded-2xl p-7 hover:border-[#C9A35B]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C9A35B]/10 border border-[#C9A35B]/20 flex items-center justify-center mb-5">
                <card.icon className="w-5 h-5 text-tourism-brass" />
              </div>
              <h4 className="font-fraunces text-[20px] font-bold text-tourism-ivory mb-2">{card.title}</h4>
              <p className="text-sm text-tourism-slate leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismProblem;
