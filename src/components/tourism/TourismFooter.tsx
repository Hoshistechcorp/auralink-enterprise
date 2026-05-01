import { useNavigate } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const TourismFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-tourism-midnight border-t border-tourism-divider py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={ibloovLogo} alt="iBloov" className="h-7 w-auto rounded-md opacity-90" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-fraunces text-tourism-ivory text-lg font-bold">AuraLink</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-tourism-slate">by iBloov</span>
          </div>
        </div>
        <p className="text-[13px] text-tourism-slate mb-6 max-w-md mx-auto">
          The digital infrastructure layer for modern destinations.
        </p>
        <div className="flex items-center justify-center gap-6 text-xs text-tourism-slate flex-wrap">
          <button onClick={() => navigate("/")} className="hover:text-tourism-ivory transition-colors">For Users</button>
          <button onClick={() => navigate("/enterprise")} className="hover:text-tourism-ivory transition-colors">For Hospitality</button>
          <button onClick={() => navigate("/login")} className="hover:text-tourism-ivory transition-colors">Sign In</button>
          <button onClick={() => navigate("/signup")} className="hover:text-tourism-ivory transition-colors">Book a Demo</button>
        </div>
        <p className="text-[11px] text-tourism-slate/60 mt-6">© 2026 iBloov Global Inc.</p>
      </div>
    </footer>
  );
};

export default TourismFooter;
