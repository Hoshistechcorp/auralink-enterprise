import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StickyMobileCta = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-[#0B0907] to-transparent transition-transform ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={() => navigate("/signup")}
        className="w-full flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-to-r from-[#E8C886] to-[#C9A35B] text-[#1B1310] font-semibold text-[14px] shadow-xl shadow-[#C9A35B]/30"
      >
        Start free trial <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default StickyMobileCta;
