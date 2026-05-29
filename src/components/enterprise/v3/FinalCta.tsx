import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCta = () => {
  const navigate = useNavigate();
  return (
    <section className="px-5 py-20 bg-gradient-to-b from-[#0E0B09] to-[#1A1410] border-t border-[#1F1A17]">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-grotesk text-[32px] font-bold text-[#F5F0E8] tracking-tight leading-tight">
          Your venue's <span className="bg-gradient-to-r from-[#E8C886] to-[#C9A35B] bg-clip-text text-transparent">new front door.</span>
        </h2>
        <p className="text-[14px] text-[#A89B8B] mt-3">21 days free. No credit card. Live in 3 minutes.</p>
        <button
          onClick={() => navigate("/signup")}
          className="mt-6 inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-gradient-to-r from-[#E8C886] to-[#C9A35B] text-[#1B1310] font-semibold text-[14px] shadow-lg shadow-[#C9A35B]/20"
        >
          Start free trial <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default FinalCta;
