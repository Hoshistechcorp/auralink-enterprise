import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const proofPoints = [
  "Live in under 48 hours",
  "No developers needed",
  "Works on every device",
];

const TourismHero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FAFAF8] pt-40 pb-20 sm:pt-44 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F5F0E8] mb-8"
        >
          <span className="text-[13px] font-semibold text-[#E8604C] tracking-[1px] uppercase">
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(42px,5.5vw,72px)] font-bold text-[#0D1117] leading-[1.08] mb-6"
        >
          Turn Your City Into
          <br />a <em className="italic text-[#E8604C]">Digital Destination</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(17px,2vw,20px)] text-[#4A5568] max-w-[640px] mx-auto mb-12 leading-relaxed font-light"
        >
          One page. Fifteen cards. Every attraction, restaurant, hotel, and event your
          visitors need — powered by real-time analytics that show you exactly what's working.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={() => navigate("/signup")}
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-[#E8604C] text-white font-semibold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,96,76,0.3)] transition-all"
          >
            Launch Your Destination Page
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-9 py-4 rounded-xl border-2 border-black/10 text-[#0D1117] font-semibold text-base hover:border-[#0D1117] transition-all"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#8B95A5]"
        >
          {proofPoints.map((point) => (
            <span key={point} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#1B9AAA]" />
              {point}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TourismHero;
