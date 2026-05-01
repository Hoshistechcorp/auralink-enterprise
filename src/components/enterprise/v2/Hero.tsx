import { motion } from "framer-motion";
import { ArrowRight, Eye, ShieldCheck, Zap, Globe2, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cardLabels = [
  "Gift Cards", "Menu", "Reviews", "FAQs", "Social",
  "Gallery", "Staff", "Awards", "Events", "Dishes",
  "AI Concierge", "Private Dining", "Freebie", "Refer", "Affiliate",
];

const PhoneMockup = () => (
  <div className="relative w-full max-w-[360px] mx-auto">
    {/* Brass radial glow */}
    <div className="absolute -inset-12 bg-[radial-gradient(circle_at_center,rgba(201,163,91,0.35),transparent_65%)] blur-2xl" />

    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative rounded-[44px] border border-[#2A2320] bg-[#141110] p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
    >
      {/* Inner screen */}
      <div className="rounded-[36px] bg-[#0B0907] overflow-hidden border border-[#1B1714]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2 text-[10px] text-stone-warm font-mono">
          <span>9:41</span>
          <span className="h-1 w-12 rounded-full bg-[#2A2320]" />
          <span>100%</span>
        </div>

        {/* Header */}
        <div className="px-4 pb-3 border-b border-[#1B1714]">
          <p className="font-fraunces text-ivory text-[15px] font-bold">Bella Vista</p>
          <p className="text-[10px] text-stone-warm">auralink.app/bellavista</p>
        </div>

        {/* 15-card grid */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {cardLabels.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }}
              className="aspect-square rounded-xl border border-[#2A2320] bg-gradient-to-br from-[#1B1714] to-[#141110] p-1.5 flex flex-col items-center justify-center gap-1"
            >
              <div className="h-5 w-5 rounded-md bg-brass-gradient/80 opacity-70" />
              <span className="text-[8px] text-stone-warm text-center leading-tight font-medium">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Floating KPI chip top-right */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="absolute -top-3 -right-4 sm:-right-10 rounded-2xl border border-brass-soft bg-[#141110]/95 backdrop-blur px-3 py-2 shadow-xl"
    >
      <p className="text-[9px] text-stone-warm uppercase tracking-wider font-semibold">Engagement</p>
      <p className="font-fraunces text-ivory font-bold text-[16px] leading-none mt-0.5">
        <span className="text-brass-gradient">312%</span> ↑
      </p>
    </motion.div>

    {/* Floating KPI chip bottom-left */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="absolute -bottom-2 -left-3 sm:-left-10 rounded-2xl border border-brass-soft bg-[#141110]/95 backdrop-blur px-3 py-2 shadow-xl"
    >
      <p className="text-[9px] text-stone-warm uppercase tracking-wider font-semibold">AI Auto-replied</p>
      <p className="font-fraunces text-ivory font-bold text-[16px] leading-none mt-0.5">
        80% <span className="text-[#7E9B6A] text-[11px]">live</span>
      </p>
    </motion.div>
  </div>
);

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
      {/* Warm hospitality backdrop */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Warm classy restaurant, hotel and lounge ambience"
          className="w-full h-full object-cover opacity-[0.14]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0907]/85 via-[#0B0907]/95 to-[#0B0907]" />
      </div>

      {/* Subtle warm grid + brass glows */}
      <div className="absolute inset-0 bg-grid-warm opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#C9A35B]/12 blur-[160px]" />
      <div className="absolute top-20 right-0 h-[480px] w-[480px] rounded-full bg-[#B8893E]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.32em] uppercase text-brass-gradient">
            <span className="h-px w-8 bg-[#C9A35B]/60" />
            BY IBLOOV
          </span>

          <h1 className="font-fraunces mt-5 text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-tight font-bold text-ivory">
            AuraLink is the hospitality{" "}
            <span className="italic text-brass-gradient">operating system</span>{" "}
            for modern venues.
          </h1>

          <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-stone-warm max-w-[560px]">
            Replace six disconnected guest tools with one mobile-first hub for direct bookings,
            gift cards, multilingual AI concierge, loyalty, analytics, and affiliate growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brass-gradient text-[#1B1310] font-semibold text-[15px] glow-brass hover:opacity-95 transition-all"
            >
              Book Enterprise Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/microsite")}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#3A302A] bg-[#141110]/60 text-ivory font-semibold text-[15px] hover:bg-[#1B1714] hover:border-brass-soft transition-colors"
            >
              <Eye className="w-4 h-4" />
              See Live Demo
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-stone-warm">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#C9A35B]" /> SOC 2 Compliant</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#C9A35B]" /> 99.9% Uptime</span>
            <span className="inline-flex items-center gap-1.5"><Globe2 className="w-3.5 h-3.5 text-[#C9A35B]" /> GDPR Ready</span>
            <span className="inline-flex items-center gap-1.5"><Rocket className="w-3.5 h-3.5 text-[#C9A35B]" /> Live in Under 3 Minutes</span>
          </div>
        </motion.div>

        {/* Right phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="pt-4"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
