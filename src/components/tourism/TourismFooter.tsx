import { useNavigate } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const TourismFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a] py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={ibloovLogo} alt="iBloov" className="h-6 w-auto rounded-md" />
          <span className="text-xs text-white/30 font-semibold tracking-wide">AuraLink</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-white/40">
          <button onClick={() => navigate("/")} className="hover:text-white transition-colors">For Users</button>
          <button onClick={() => navigate("/enterprise")} className="hover:text-white transition-colors">For Business</button>
          <button onClick={() => navigate("/login")} className="hover:text-white transition-colors">Sign In</button>
        </div>
        <p className="text-[11px] text-white/25">© 2026 iBloov Inc.</p>
      </div>
    </footer>
  );
};

export default TourismFooter;
