import { useNavigate } from "react-router-dom";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#faq" },
  { label: "Use Cases", href: "#testimonials" },
];

const NavBar = () => {
  const navigate = useNavigate();
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080B]/70 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => navigate("/enterprise")} className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-aura-gradient glow-blue" />
          <span className="font-jakarta font-bold text-white text-[15px] tracking-tight">
            AuraLink <span className="text-white/40 font-medium">Enterprise</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="px-4 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors"
          >
            Log In
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/login")}
            className="md:hidden px-3 py-1.5 text-[13px] font-medium text-white/70"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 rounded-xl bg-aura-gradient text-white text-[13px] font-semibold glow-blue hover:opacity-95 transition-opacity"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
