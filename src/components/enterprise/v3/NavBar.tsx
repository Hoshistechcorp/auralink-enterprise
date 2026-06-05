import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0B0907]/85 backdrop-blur-xl border-b border-[#1F1A17]">
      <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-gradient-to-br from-[#E8C886] to-[#C9A35B]" />
          <span className="font-grotesk font-bold text-[#F5F0E8] text-[16px] tracking-tight">IBloov</span>
        </button>
        <div className="flex items-center gap-1">
          <button
            onClick={() => scrollTo("#pricing")}
            className="px-3 py-2 text-[13px] font-medium text-[#A89B8B] hover:text-[#F5F0E8] transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:inline-flex px-3 py-2 text-[13px] font-medium text-[#A89B8B] hover:text-[#F5F0E8] transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="ml-1 px-4 py-2 rounded-full bg-gradient-to-r from-[#E8C886] to-[#C9A35B] text-[#1B1310] text-[12.5px] font-semibold hover:opacity-95 transition"
          >
            Start free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
