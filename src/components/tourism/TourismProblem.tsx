import { motion } from "framer-motion";
import { Smartphone, BarChart3, Zap } from "lucide-react";

const painCards = [
  {
    icon: Smartphone,
    title: "Fragmented Marketing",
    description:
      "A website, a Facebook page, a tourism app nobody downloads, a PDF brochure from 2019. Visitors bounce between five platforms to plan one trip.",
  },
  {
    icon: BarChart3,
    title: "Zero Visibility",
    description:
      "You spend millions on campaigns but can't track which attractions visitors actually engage with, which events drive return visits, or where the money goes.",
  },
  {
    icon: Zap,
    title: "Expensive & Slow",
    description:
      "Custom tourism platforms take 12–18 months and $500K+ to build. By the time they launch, the market has moved on.",
  },
];

const TourismProblem = () => {
  return (
    <section className="bg-[#FAFAF8] py-20 sm:py-28">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-[#1B9AAA] tracking-[2px] uppercase mb-4">
            The Problem
          </p>
          <h2 className="font-display text-[clamp(30px,3.5vw,44px)] font-bold text-[#0D1117] leading-[1.2] mb-10">
            Your destination's digital presence is scattered across a dozen platforms.{" "}
            <span className="text-[#8B95A5]">Visitors can't find what they need.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {painCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-black/[0.06] rounded-2xl p-7 hover:-translate-y-1 transition-transform"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F5F0E8] flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-[#E8604C]" />
              </div>
              <h4 className="text-base font-bold text-[#0D1117] mb-2">{card.title}</h4>
              <p className="text-sm text-[#4A5568] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismProblem;
