import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Rocket, Sparkles, TrendingUp, MessageSquare, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardMockup = () => (
  <div className="relative w-full max-w-[520px] mx-auto">
    {/* Glow */}
    <div className="absolute -inset-10 bg-aura-gradient opacity-30 blur-3xl rounded-full animate-glow-pulse" />

    {/* Main panel */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-5 shadow-2xl"
    >
      {/* Top bar */}
      <div className="flex items-center gap-1.5 mb-5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 text-[10px] font-mono text-white/30">auralink.app/nobu</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Bookings</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="font-jakarta text-2xl font-bold text-white mt-1">142</p>
          <p className="text-[10px] text-emerald-400/80 mt-0.5">+24% today</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Gift Cards</span>
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          </div>
          <p className="font-jakarta text-2xl font-bold text-white mt-1">$4,210</p>
          <p className="text-[10px] text-[#8B5CF6]/90 mt-0.5">0% fees</p>
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Weekly revenue</span>
          <span className="text-[10px] text-white/30">last 7d</span>
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {[40, 65, 50, 80, 55, 90, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: "easeOut" }}
              className="flex-1 rounded-t-md bg-aura-gradient opacity-80"
            />
          ))}
        </div>
      </div>

      {/* AI chat bubble */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 flex items-start gap-2.5">
        <div className="h-7 w-7 rounded-lg bg-aura-gradient flex items-center justify-center shrink-0">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] text-white/40 font-semibold">AI Concierge · auto-replied</p>
          <p className="text-[12px] text-white/80 mt-0.5 leading-snug">
            "Booked your table for 4 at 8pm. Anniversary noted ✨"
          </p>
        </div>
      </div>
    </motion.div>

    {/* Floating mini card */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute -left-6 -bottom-4 hidden sm:block rounded-2xl border border-white/[0.08] bg-[#0B0B12]/90 backdrop-blur-xl p-3 shadow-2xl"
    >
      <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider">Live</p>
      <p className="text-[12px] text-white font-semibold mt-0.5">312% engagement ↑</p>
    </motion.div>
  </div>
);

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden">
      {/* Background grid + glows */}
      <div className="absolute inset-0 bg-grid-neon opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[#3B82F6]/20 blur-[140px]" />
      <div className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur text-[11px] font-semibold tracking-wider text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            HOSPITALITY OS · v2026
          </span>

          <h1 className="font-jakarta mt-5 text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-tight font-extrabold text-white">
            The All-in-One
            <br />
            Digital Hub for
            <br />
            <span className="text-aura-gradient">Modern Hospitality.</span>
          </h1>

          <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-white/55 max-w-[540px]">
            Stop forcing your guests to use six different apps. Consolidate your bookings, menus,
            gift cards, and AI concierge into one scannable AuraLink. No coding required.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-aura-gradient text-white font-semibold text-[15px] glow-blue hover:opacity-95 transition-all"
            >
              Claim Your Venue's AuraLink
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#video"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/15 bg-white/[0.02] text-white/80 font-semibold text-[15px] hover:bg-white/[0.06] transition-colors"
            >
              <PlayCircle className="w-4 h-4" />
              See It In Action (1-Min Video)
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/40">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" /> SOC 2 Compliant</span>
            <span className="inline-flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#A78BFA]" /> 99.9% Uptime</span>
            <span className="inline-flex items-center gap-1.5"><Rocket className="w-3.5 h-3.5 text-[#F472B6]" /> Live in 3 Minutes</span>
          </div>
        </motion.div>

        {/* Right mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>

      <div id="video" />
    </section>
  );
};

export default Hero;
