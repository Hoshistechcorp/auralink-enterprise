import { useNavigate } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import TourismHero from "@/components/tourism/TourismHero";
import TourismStatsStrip from "@/components/tourism/TourismStatsStrip";
import TourismProblem from "@/components/tourism/TourismProblem";
import TourismPhoneMockup from "@/components/tourism/TourismPhoneMockup";
import TourismHowItWorks from "@/components/tourism/TourismHowItWorks";
import TourismCardShowcase from "@/components/tourism/TourismCardShowcase";
import TourismWhyQR from "@/components/tourism/TourismWhyQR";
import TourismContentDepth from "@/components/tourism/TourismContentDepth";
import TourismDashboard from "@/components/tourism/TourismDashboard";
import TourismBuyerTiers from "@/components/tourism/TourismBuyerTiers";
import TourismCapabilities from "@/components/tourism/TourismCapabilities";
import TourismCTA from "@/components/tourism/TourismCTA";
import TourismFooter from "@/components/tourism/TourismFooter";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Cards", href: "#cards" },
  { label: "Analytics", href: "#analytics" },
  { label: "Use Cases", href: "#use-cases" },
];

const TourismLanding = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-tourism-midnight font-jakarta antialiased text-tourism-ivory selection:bg-[#C9A35B]/40 selection:text-tourism-ivory overflow-x-hidden">
      {/* Top nav — dark institutional */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/85 backdrop-blur-xl border-b border-tourism-divider">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <button onClick={() => navigate("/tourism")} className="flex items-center gap-2.5">
            <img src={ibloovLogo} alt="iBloov" className="h-7 w-auto rounded-md" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-fraunces text-tourism-ivory text-[20px] font-bold leading-none">AuraLink</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-tourism-slate hidden sm:inline">by iBloov</span>
            </div>
          </button>
          <div className="flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="hidden md:inline-flex px-3 py-2 text-[13px] font-medium text-tourism-slate hover:text-tourism-ivory transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => navigate("/login")}
              className="hidden lg:inline-flex px-3 py-2 text-[13px] font-medium text-tourism-slate hover:text-tourism-ivory transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="ml-2 px-5 py-2.5 rounded-full bg-tourism-brass text-[#1B1310] text-[13px] font-semibold hover:opacity-95 transition-all"
            >
              Book a Tourism Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Floating segment switcher */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40">
        <LandingSegmentNav />
      </div>

      <TourismHero />
      <TourismStatsStrip />
      <TourismProblem />
      <TourismPhoneMockup />
      <TourismHowItWorks />
      <TourismCardShowcase />
      <TourismWhyQR />
      <TourismContentDepth />
      <TourismDashboard />
      <TourismBuyerTiers />
      <TourismCapabilities />
      <TourismCTA />
      <TourismFooter />
    </div>
  );
};

export default TourismLanding;
