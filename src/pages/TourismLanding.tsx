import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Globe, MapPin, BarChart3, ArrowRight, ChevronRight, Users2, Megaphone,
  TrendingUp, Compass, Camera, CalendarDays, Landmark, Building2, PieChart,
  Play, Sparkles, ArrowDown,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sun, Moon } from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import tourismHero from "@/assets/tourism-hero.jpg";
import tourismLandmark from "@/assets/tourism-landmark.jpg";
import tourismNightlife from "@/assets/tourism-nightlife.jpg";
import tourismNature from "@/assets/tourism-nature.jpg";
import tourismCoastal from "@/assets/tourism-coastal.jpg";
import tourismCity from "@/assets/tourism-city.jpg";
import { toast } from "sonner";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import TourismHero from "@/components/tourism/TourismHero";
import TourismImageGrid from "@/components/tourism/TourismImageGrid";
import TourismUseCases from "@/components/tourism/TourismUseCases";
import TourismCapabilities from "@/components/tourism/TourismCapabilities";
import TourismCTA from "@/components/tourism/TourismCTA";
import TourismFooter from "@/components/tourism/TourismFooter";
import TourismLandmarkMosaic from "@/components/tourism/TourismLandmarkMosaic";

const TourismLanding = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-body antialiased overflow-x-hidden">
      {/* Nav — transparent over hero */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ibloovLogo} alt="iBloov" className="h-8 w-auto rounded-lg" />
            <span className="text-white/30">|</span>
            <span className="font-semibold text-sm text-white tracking-wide">AuraLink</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleDark} className="p-2 rounded-xl hover:bg-white/10 transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-white" />}
            </button>
            <button onClick={() => navigate("/login")} className="px-5 py-2 rounded-full border border-white/20 text-[13px] font-semibold hover:bg-white/10 transition-all text-white">
              Sign In
            </button>
            <button onClick={() => navigate("/signup")} className="px-5 py-2 rounded-full bg-[#FF6B35] text-white text-[13px] font-bold hover:bg-[#FF8555] transition-all shadow-lg shadow-[#FF6B35]/30">
              Contact Sales
            </button>
          </div>
        </div>
      </nav>

      {/* Segment Nav */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <LandingSegmentNav />
      </div>

      {/* Hero */}
      <TourismHero heroImage={tourismHero} />

      {/* Destination Gallery */}
      <TourismImageGrid
        images={{ landmark: tourismLandmark, nightlife: tourismNightlife, nature: tourismNature, coastal: tourismCoastal }}
      />

      {/* Use Cases */}
      <TourismUseCases />

      {/* Parallax City Band */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={tourismCity} alt="City skyline" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-[#0a0a0a]/80" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-5"
          >
            <p className="text-[#FF6B35] font-bold text-sm tracking-[0.3em] uppercase mb-3">From Cities to Coastlines</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
              Every destination has<br />
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FFD700] to-[#00CED1] bg-clip-text text-transparent">a story to tell.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <TourismCapabilities />

      {/* Landmark Mosaic */}
      <TourismLandmarkMosaic />

      {/* CTA */}
      <TourismCTA />

      {/* Footer */}
      <TourismFooter />
    </div>
  );
};

export default TourismLanding;
