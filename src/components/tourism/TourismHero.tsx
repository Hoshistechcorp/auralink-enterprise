import { motion } from "framer-motion";
import { ArrowDown, Play, TrendingUp, Clock, BarChart3 } from "lucide-react";

interface TourismHeroProps {
  heroImage: string;
}

const valuePills = [
  { icon: TrendingUp, label: "Drive More Visitors" },
  { icon: Clock, label: "Keep Them Longer" },
  { icon: BarChart3, label: "Measure Everything" },
];

const TourismHero = ({ heroImage }: TourismHeroProps) => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Destination panorama"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-5 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
            <span className="text-[#FF6B35] font-bold text-xs tracking-[0.25em] uppercase">Tourism Board Platform</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-display font-bold leading-[0.9] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="block"
            >
              ONE LINK.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="block mt-2"
            >
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FFD700] to-[#00CED1] bg-clip-text text-transparent">ENTIRE</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="block mt-2"
            >
              DESTINATION.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Replace fragmented websites, PDF brochures, and apps nobody downloads with 
            one mobile-first destination hub — <span className="text-white font-semibold">15 modular cards</span> covering 
            everything a visitor needs.
          </motion.p>

          {/* Value Props Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            {valuePills.map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <pill.icon className="w-3.5 h-3.5 text-[#FFD700]" />
                <span className="text-xs font-semibold text-white/80">{pill.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
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
              href="#cards"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-semibold text-[15px] hover:bg-white/10 transition-all"
            >
              <Play className="w-4 h-4" />
              See the 15 Cards
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
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
