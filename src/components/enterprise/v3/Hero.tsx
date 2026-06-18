import { motion } from "framer-motion";
import { QrCode, Star, Heart, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ClaimLinkBar from "./ClaimLinkBar";

const stickers = [
  { Icon: Star, bg: "#C6F432", ink: "#111", rot: -8, x: "-12%", y: "8%" },
  { Icon: Heart, bg: "#FF7A59", ink: "#FFF7ED", rot: 12, x: "108%", y: "12%" },
  { Icon: Gift, bg: "#7CC7FF", ink: "#111", rot: -14, x: "104%", y: "70%" },
  { Icon: QrCode, bg: "#C8A2FF", ink: "#111", rot: 8, x: "-10%", y: "62%" },
];

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative px-5 pt-12 pb-20 sm:pt-16 sm:pb-24 overflow-hidden">
      {/* Bright animated backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#C6F432] blur-[90px] opacity-70 animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute top-10 -right-32 w-[380px] h-[380px] rounded-full bg-[#FF7A59] blur-[100px] opacity-60 animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[#7CC7FF] blur-[100px] opacity-55 animate-[float_9s_ease-in-out_infinite]" />
        <div className="absolute -bottom-24 right-10 w-[300px] h-[300px] rounded-full bg-[#C8A2FF] blur-[90px] opacity-55" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Floating stickers — desktop only */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {stickers.map(({ Icon, bg, ink, rot, x, y }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6, rotate: rot }}
              animate={{ opacity: 1, scale: 1, rotate: rot }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 180, damping: 14 }}
              style={{ left: x, top: y }}
              className="absolute"
            >
              <div
                className="h-14 w-14 rounded-2xl border-2 border-[#111] shadow-[0_5px_0_0_#111] flex items-center justify-center animate-[float_7s_ease-in-out_infinite]"
                style={{ background: bg, color: ink }}
              >
                <Icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] text-[#C6F432] text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#111] shadow-[0_3px_0_0_#111]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6F432] animate-pulse" />
            Live in 3 minutes
          </span>

          <h1 className="font-grotesk mt-5 text-[42px] sm:text-[64px] leading-[1.02] font-extrabold tracking-tight text-[#111]">
            One QR.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Every guest moment.</span>
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-3 sm:h-4 -z-0 bg-[#C6F432] rounded-full"
              />
            </span>
          </h1>

          <p className="mt-5 text-[15px] sm:text-[17px] leading-relaxed text-[#111]/70 max-w-md mx-auto">
            Bookings, gift cards, loyalty, AI concierge — one mobile hub. Live in 3 minutes.
          </p>

          {/* Claim link bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <ClaimLinkBar />
          </div>

          <button
            onClick={() => navigate("/microsite")}
            className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#111]/70 hover:text-[#1F2BD6] transition-colors underline underline-offset-4 decoration-2 decoration-[#111]/20 hover:decoration-[#1F2BD6]"
          >
            <QrCode className="w-4 h-4" /> See a live demo
          </button>

          {/* Stat chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {[
              { v: "312%", l: "Engagement", bg: "#C6F432" },
              { v: "0%", l: "Commission", bg: "#FF7A59", ink: "#FFF7ED" },
              { v: "3 min", l: "To live", bg: "#7CC7FF" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex items-center gap-2 rounded-full px-4 py-2 border-2 border-[#111] shadow-[0_3px_0_0_#111]"
                style={{ background: s.bg, color: s.ink || "#111" }}
              >
                <span className="font-grotesk font-extrabold text-[15px]">{s.v}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
