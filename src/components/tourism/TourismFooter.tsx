import { useNavigate } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const TourismFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0D1117] py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={ibloovLogo} alt="iBloov" className="h-6 w-auto rounded-md" />
          <span className="text-sm font-semibold text-white/60 tracking-wide">AuraLink Tourism</span>
        </div>
        <p className="text-[13px] text-white/30 mb-6">
          The digital infrastructure for modern tourism. Atlanta, GA.
        </p>
        <div className="flex items-center justify-center gap-6 text-xs text-white/40">
          <button onClick={() => navigate("/")} className="hover:text-white transition-colors">For Users</button>
          <button onClick={() => navigate("/enterprise")} className="hover:text-white transition-colors">For Business</button>
          <button onClick={() => navigate("/login")} className="hover:text-white transition-colors">Sign In</button>
        </div>
        <p className="text-[11px] text-white/20 mt-6">© 2026 iBloov Global Inc.</p>
      </div>
    </footer>
  );
};

export default TourismFooter;
