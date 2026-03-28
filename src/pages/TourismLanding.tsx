import { useNavigate } from "react-router-dom";
import { useDarkMode } from "@/hooks/use-dark-mode";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import tourismLandmark from "@/assets/tourism-landmark.jpg";
import tourismNightlife from "@/assets/tourism-nightlife.jpg";
import tourismNature from "@/assets/tourism-nature.jpg";
import tourismCoastal from "@/assets/tourism-coastal.jpg";
import tourismCity from "@/assets/tourism-city.jpg";
import { motion } from "framer-motion";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import TourismHero from "@/components/tourism/TourismHero";
import TourismStatsStrip from "@/components/tourism/TourismStatsStrip";
import TourismProblem from "@/components/tourism/TourismProblem";
import TourismPhoneMockup from "@/components/tourism/TourismPhoneMockup";
import TourismHowItWorks from "@/components/tourism/TourismHowItWorks";
import TourismCardShowcase from "@/components/tourism/TourismCardShowcase";
import TourismCategoryGrid from "@/components/tourism/TourismCategoryGrid";
import TourismDashboard from "@/components/tourism/TourismDashboard";
import TourismBuyerTiers from "@/components/tourism/TourismBuyerTiers";
import TourismImageGrid from "@/components/tourism/TourismImageGrid";
import TourismCapabilities from "@/components/tourism/TourismCapabilities";
import TourismCTA from "@/components/tourism/TourismCTA";
import TourismFooter from "@/components/tourism/TourismFooter";
import TourismLandmarkMosaic from "@/components/tourism/TourismLandmarkMosaic";

const TourismLanding = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen font-body antialiased overflow-x-hidden">
      {/* Nav — warm light */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/92 backdrop-blur-xl border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-8 w-auto rounded-lg" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#E8604C]" />
            <span className="font-display text-[22px] text-[#0D1117]">{"\n"}AuraLink </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#how-it-works" className="hidden sm:inline text-sm font-medium text-[#4A5568] hover:text-[#0D1117] transition-colors">
              How It Works
            </a>
            <a href="#cards" className="hidden sm:inline text-sm font-medium text-[#4A5568] hover:text-[#0D1117] transition-colors ml-5">
              Features
            </a>
            <button
              onClick={() => navigate("/login")}
              className="hidden sm:inline text-sm font-medium text-[#4A5568] hover:text-[#0D1117] transition-colors ml-5"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="ml-4 px-6 py-2.5 rounded-lg bg-[#E8604C] text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(232,96,76,0.3)] transition-all"
            >
              Get Your Destination Live →
            </button>
          </div>
        </div>
      </nav>

      {/* Segment Nav */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-[#FAFAF8]/80 backdrop-blur-xl border-b border-black/[0.04]">
        <LandingSegmentNav />
      </div>

      {/* 1. Hero */}
      <TourismHero />

      {/* 2. Stats Strip */}
      <TourismStatsStrip />

      {/* 3. Problem */}
      <TourismProblem />

      {/* 4. Solution + Phone Mockup */}
      <TourismPhoneMockup />

      {/* 5. How It Works */}
      <div id="how-it-works">
        <TourismHowItWorks />
      </div>

      {/* 6. 15-Card Showcase (dark) */}
      <TourismCardShowcase />

      {/* 7. Category Deep-Dive (dark) */}
      <TourismCategoryGrid />

      {/* 8. Dashboard Preview */}
      <TourismDashboard />

      {/* 9. Buyer Tiers */}
      <TourismBuyerTiers />

      {/* 10. Destination Gallery */}
      <TourismImageGrid
        images={{ landmark: tourismLandmark, nightlife: tourismNightlife, nature: tourismNature, coastal: tourismCoastal }}
      />

      {/* 11. Parallax City Band */}
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
            <p className="text-[#FF6B35] font-bold text-sm tracking-[0.3em] uppercase mb-3">Infinite Scale</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
              From a $500K city bureau to<br />
              <span className="bg-gradient-to-r from-[#FF6B35] via-[#FFD700] to-[#00CED1] bg-clip-text text-transparent">a $500M national authority.</span>
            </h2>
            <p className="mt-4 text-white/50 text-lg">Same platform. Infinite scale.</p>
          </motion.div>
        </div>
      </section>

      {/* 12. Capabilities (dark) */}
      <TourismCapabilities />

      {/* 13. Landmark Mosaic */}
      <TourismLandmarkMosaic />

      {/* 14. CTA */}
      <TourismCTA />

      {/* 15. Footer */}
      <TourismFooter />
    </div>
  );
};

export default TourismLanding;
