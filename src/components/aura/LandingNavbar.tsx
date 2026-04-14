import { useNavigate, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";

const LandingNavbar = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0D1117]/80 backdrop-blur-2xl border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-7 w-auto rounded-lg" />
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="font-semibold text-sm text-white hidden sm:inline">AuraLink</span>
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
      <LandingSegmentNav />
    </>
  );
};

export default LandingNavbar;
