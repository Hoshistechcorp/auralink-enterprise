import { useNavigate } from "react-router-dom";

const links = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

const NavBar = () => {
  const navigate = useNavigate();
  const scrollTo = (sel: string) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0907]/80 border-b border-[#2A2320]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/enterprise")} className="flex items-center gap-2.5">
          <span className="h-7 w-7 rounded-md bg-brass-gradient" />
          <span className="font-fraunces font-bold text-ivory text-[18px] tracking-tight leading-none">
            AuraLink{" "}
            <span className="font-jakarta italic font-medium text-stone-warm text-[12px] tracking-normal">
              by iBloov
            </span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="px-3.5 py-2 text-[13px] font-medium text-stone-warm hover:text-ivory transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:inline-flex px-3.5 py-2 text-[13px] font-medium text-stone-warm hover:text-ivory transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2.5 rounded-full bg-brass-gradient text-[#1B1310] text-[13px] font-semibold glow-brass hover:opacity-95 transition-opacity"
          >
            Book Enterprise Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
