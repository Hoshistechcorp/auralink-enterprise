import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

interface TourismHeroProps {
  heroImage: string;
}

const TourismHero = ({ heroImage }: TourismHeroProps) => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Destination panorama"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-5 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#FF6B35] font-bold text-xs sm:text-sm tracking-[0.35em] uppercase mb-5"
          >
            Tourism Board Platform
          </motion.p>

          <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-display font-bold leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="block"
            >
              SHOWCASE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="block bg-gradient-to-r from-[#FF6B35] via-[#FFD700] to-[#00CED1] bg-clip-text text-transparent"
            >
              YOUR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="block"
            >
              DESTINATION
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            The all-in-one platform for cities, countries, and states to promote tourism,
            connect visitors with local venues, and measure economic impact — all from one powerful dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a
              href="#contact"
              className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF6B35] text-white font-bold text-[15px] hover:bg-[#FF8555] transition-all shadow-2xl shadow-[#FF6B35]/30 overflow-hidden"
            >
              <span className="relative z-10">Request a Demo</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF8555] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#capabilities"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold text-[15px] hover:bg-white/10 transition-all"
            >
              <Play className="w-4 h-4" />
              Watch Overview
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismHero;
