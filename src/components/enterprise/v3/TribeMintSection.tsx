import { motion } from "framer-motion";
import { Link2, Share2, Coins, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  { Icon: Link2, t: "Mint a link", d: "Every guest, staff member, or creator mints a personal affiliate link in one tap.", bg: "#C6F432" },
  { Icon: Share2, t: "Share the vibe", d: "Drop it on WhatsApp, IG, TikTok. Built for leisure & experience drops.", bg: "#FF7A59", ink: "#FFF7ED" },
  { Icon: Coins, t: "Earn on every booking", d: "Real-time commissions, transparent wallet, instant payouts.", bg: "#7CC7FF" },
];

const stats = [
  { v: "0%", l: "Setup fee" },
  { v: "Real-time", l: "Commissions" },
  { v: "Cross-venue", l: "Tribe network" },
];

const TribeMintSection = () => {
  const navigate = useNavigate();
  return (
    <section id="tribemint" className="relative px-5 py-20 sm:py-28 bg-[#C8A2FF] border-y-2 border-[#111] overflow-hidden">
      {/* Background blobs */}
      <div aria-hidden className="absolute inset-0 -z-0">
        <div className="absolute -top-20 right-10 w-[360px] h-[360px] rounded-full bg-[#7CC7FF] blur-[100px] opacity-60" />
        <div className="absolute bottom-0 -left-20 w-[320px] h-[320px] rounded-full bg-[#C6F432] blur-[90px] opacity-55" />
      </div>

      {/* Floating stickers */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="hidden md:flex absolute top-12 left-[8%] h-12 px-3 rounded-full border-2 border-[#111] bg-[#FFF7ED] shadow-[0_5px_0_0_#111] items-center gap-1.5 rotate-[-8deg]">
          <Sparkles className="w-4 h-4 text-[#1F2BD6]" strokeWidth={2.6} />
          <span className="font-grotesk text-[12px] font-extrabold text-[#111]">Affiliate engine</span>
        </div>
        <div className="hidden md:block absolute top-20 right-[10%] h-14 w-14 rounded-2xl border-2 border-[#111] bg-[#FF7A59] shadow-[0_5px_0_0_#111] flex items-center justify-center rotate-[12deg]">
          <Coins className="w-7 h-7 text-[#FFF7ED]" strokeWidth={2.4} />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] text-[#C8A2FF] text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#111] shadow-[0_3px_0_0_#111]">
            🌀 TribeMint · An iBloov product
          </span>
          <h2 className="font-grotesk mt-5 text-[40px] sm:text-[56px] leading-[1.02] font-extrabold tracking-tight text-[#111]">
            Turn every fan into a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">tribe.</span>
              <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-[#FFF7ED] rounded-full -z-0" />
            </span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-[#111]/80">
            The affiliate & influencer engine for leisure, hospitality and experience brands. Every customer earns when they share — every share becomes traceable revenue.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {steps.map(({ Icon, t, d, bg, ink }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-3xl border-2 border-[#111] p-5 shadow-[0_6px_0_0_#111] hover:-translate-y-1 hover:rotate-[-1deg] transition-transform"
              style={{ background: bg, color: ink || "#111" }}
            >
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-[#111] text-[#FFF7ED] font-grotesk font-extrabold text-[13px] flex items-center justify-center border-2 border-[#111]">
                {i + 1}
              </div>
              <div className="h-11 w-11 rounded-xl bg-[#FFF7ED] border-2 border-[#111] flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-[#111]" strokeWidth={2.5} />
              </div>
              <p className="font-grotesk font-extrabold text-[17px]">{t}</p>
              <p className="text-[13px] mt-1.5 leading-snug opacity-90">{d}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {stats.map((s) => (
            <div
              key={s.l}
              className="flex items-center gap-2 rounded-full px-4 py-2 border-2 border-[#111] bg-[#FFF7ED] shadow-[0_3px_0_0_#111]"
            >
              <span className="font-grotesk font-extrabold text-[15px] text-[#111]">{s.v}</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#111]/70">{s.l}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate("/signup")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] text-[#C6F432] font-grotesk font-extrabold text-[14px] border-2 border-[#111] shadow-[0_4px_0_0_#FFF7ED] hover:translate-y-[-2px] transition-transform"
          >
            Activate TribeMint
          </button>
          <span className="text-[12px] font-bold text-[#111]/70">Included in Maverick & Supernova</span>
        </div>
      </div>
    </section>
  );
};

export default TribeMintSection;
