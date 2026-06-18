import { useNavigate } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const NavBar = () => {
  const navigate = useNavigate();
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF7ED]/85 backdrop-blur-xl border-b-2 border-[#111]">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="flex items-center gap-2.5">
          <img src={ibloovLogo} alt="iBloov" className="h-7 w-auto rounded-md" />
          <span className="font-grotesk font-extrabold text-[#111] text-[18px] tracking-tight">
            AuraLink
          </span>
        </button>
        <div className="flex items-center gap-1">
          <button
            onClick={() => scrollTo("#ecosystem")}
            className="hidden md:inline-flex px-3 py-2 text-[13px] font-semibold text-[#111]/70 hover:text-[#111] transition-colors"
          >
            Ecosystem
          </button>
          <button
            onClick={() => scrollTo("#loveletter")}
            className="hidden md:inline-flex px-3 py-2 text-[13px] font-semibold text-[#111]/70 hover:text-[#FF7A59] transition-colors"
          >
            LoveLetter
          </button>
          <button
            onClick={() => scrollTo("#tribemint")}
            className="hidden md:inline-flex px-3 py-2 text-[13px] font-semibold text-[#111]/70 hover:text-[#C8A2FF] transition-colors"
          >
            TribeMint
          </button>
          <button
            onClick={() => scrollTo("#pricing")}
            className="hidden sm:inline-flex px-3 py-2 text-[13px] font-semibold text-[#111]/70 hover:text-[#111] transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:inline-flex px-3 py-2 text-[13px] font-semibold text-[#111]/70 hover:text-[#111] transition-colors"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="ml-1 px-4 py-2 rounded-full bg-[#111] text-[#FFF7ED] text-[12.5px] font-bold hover:bg-[#1F2BD6] transition-colors border-2 border-[#111] shadow-[0_3px_0_0_#111]"
          >
            Sign up free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
