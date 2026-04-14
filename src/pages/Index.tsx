import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";
import EnterpriseHero from "@/components/enterprise/EnterpriseHero";
import EnterpriseTrustBar from "@/components/enterprise/EnterpriseTrustBar";
import EnterpriseWhyCards from "@/components/enterprise/EnterpriseWhyCards";
import EnterpriseMicrositePreview from "@/components/enterprise/EnterpriseMicrositePreview";
import EnterpriseEcosystem from "@/components/enterprise/EnterpriseEcosystem";
import EnterpriseGiftCards from "@/components/enterprise/EnterpriseGiftCards";
import EnterpriseGrowthShowcase from "@/components/enterprise/EnterpriseGrowthShowcase";
import EnterpriseVideoDemo from "@/components/enterprise/EnterpriseVideoDemo";
import EnterpriseVenueTypes from "@/components/enterprise/EnterpriseVenueTypes";
import EnterpriseCTA from "@/components/enterprise/EnterpriseCTA";
import EnterpriseFooter from "@/components/enterprise/EnterpriseFooter";

const Index = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-[#0D1117] text-white font-body antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0D1117]/80 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-7 w-auto rounded-lg" />
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="font-semibold text-sm text-white hidden sm:inline">AuraLink</span>
            <span className="px-2 py-0.5 rounded-md bg-[#E8604C]/10 text-[#E8604C] text-[10px] font-bold tracking-wider uppercase hidden sm:inline">
              Enterprise
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleDark} className="p-2 rounded-xl hover:bg-white/[0.04] transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4 text-white/50" /> : <Moon className="w-4 h-4 text-white/50" />}
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-1.5 rounded-xl border border-white/10 text-[13px] font-semibold text-white/70 hover:bg-white/[0.04] transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-1.5 rounded-xl bg-[#E8604C] text-white text-[13px] font-semibold hover:bg-[#d4533f] transition-colors"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Segment Nav */}
      <LandingSegmentNav />

      {/* Sections */}
      <EnterpriseHero />
      <EnterpriseTrustBar />
      <EnterpriseWhyCards />
      <EnterpriseMicrositePreview />

      {/* Full-width hospitality image break */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
          alt="Fine dining experience"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-[#0D1117]/60" />
      </section>
      <EnterpriseEcosystem />
      <EnterpriseGiftCards />
      <EnterpriseGrowthShowcase />
      <EnterpriseVideoDemo />
      <EnterpriseVenueTypes />
      <EnterpriseCTA />
      <EnterpriseFooter />
    </div>
  );
};

export default Index;
