import tourismLandmark from "@/assets/tourism-landmark.jpg";
import tourismNightlife from "@/assets/tourism-nightlife.jpg";
import tourismNature from "@/assets/tourism-nature.jpg";
import tourismCoastal from "@/assets/tourism-coastal.jpg";
import tourismCity from "@/assets/tourism-city.jpg";
import { motion } from "framer-motion";
import LandingNavbar from "@/components/aura/LandingNavbar";
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
  return (
    <div className="min-h-screen bg-[#0D1117] text-white font-body antialiased overflow-x-hidden">
      <LandingNavbar />

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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-black/40 to-[#0D1117]/80" />
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
