import { motion } from "framer-motion";
import { Globe, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    emoji: "🌊",
    title: "The Trust Cascade",
    body: "Move your guests effortlessly through a pipeline designed to turn absolute strangers into real-world teammates, loyal regulars, and verified co-investors.",
    bg: "#C6F432",
    ink: "#111",
  },
  {
    emoji: "🎮",
    title: "Phygital Commerce & Game World",
    body: "Seamlessly mirror your physical venue into our live-streamed metaverse universe. A global audience experiences your culture, buys your merchandise, and books your tables — from anywhere.",
    bg: "#FF7A59",
    ink: "#FFF7ED",
  },
  {
    emoji: "☮️",
    title: "Solving for X",
    body: "Align your brand with a higher calling. We build infrastructure that eliminates human division — proving every game is a rehearsal for understanding, and every transaction is a tiny peace treaty.",
    bg: "#C8A2FF",
    ink: "#111",
  },
];

const stats = [
  { n: "25+", l: "Global platforms" },
  { n: "∞", l: "Human connections" },
  { n: "1", l: "Operating System" },
];

const IBloovMovementSection = () => (
  <section id="movement" className="relative overflow-hidden bg-[#111] border-y-2 border-[#111]">
    {/* Floating orbit stickers */}
    <motion.div
      animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 left-[8%] text-[40px] select-none"
    >
      🌍
    </motion.div>
    <motion.div
      animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      className="absolute top-20 right-[10%] text-[32px] select-none"
    >
      🚀
    </motion.div>
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      className="absolute bottom-24 left-[5%] text-[36px] select-none"
    >
      ✨
    </motion.div>
    <motion.div
      animate={{ y: [0, 14, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
      className="absolute bottom-10 right-[8%] text-[28px] select-none"
    >
      🔗
    </motion.div>

    {/* Background accent blobs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-[#C6F432]/10 blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-[280px] h-[280px] rounded-full bg-[#FF7A59]/10 blur-[80px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#C8A2FF]/8 blur-[100px]" />
    </div>

    <div className="relative max-w-6xl mx-auto px-5 py-20 sm:py-28">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF7ED] text-[#111] text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#FFF7ED] shadow-[0_3px_0_0_#C6F432]">
          <Globe className="w-3.5 h-3.5" />
          iBloov Ecosystem
        </span>
      </motion.div>

      {/* Massive headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mt-7 max-w-4xl mx-auto"
      >
        <h2 className="font-grotesk text-[38px] sm:text-[56px] lg:text-[68px] leading-[1.02] font-extrabold tracking-tight text-[#FFF7ED]">
          More Than Software.
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">A Global Movement.</span>
            <span aria-hidden className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-3 sm:h-5 bg-[#C6F432] rounded-full -z-0" />
          </span>
        </h2>
      </motion.div>

      {/* Sub / manifesto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-7 max-w-2xl mx-auto"
      >
        <p className="text-[16px] sm:text-[19px] leading-relaxed text-[#FFF7ED]/80">
          The world is not just short on technology — it is leaking human connection. iBloov is the world&apos;s first <span className="text-[#C6F432] font-bold">Life and Leisure Operating System</span>, built to systematically turn everyday lifestyle transactions into shared global prosperity.
        </p>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10"
      >
        {stats.map((s) => (
          <div
            key={s.l}
            className="text-center px-5 py-3 rounded-2xl border-2 border-[#FFF7ED]/20 bg-[#FFF7ED]/5"
          >
            <p className="font-grotesk text-[28px] sm:text-[36px] font-extrabold text-[#C6F432] leading-none">{s.n}</p>
            <p className="mt-1 text-[11px] sm:text-[13px] font-semibold text-[#FFF7ED]/60 uppercase tracking-wider">{s.l}</p>
          </div>
        ))}
      </motion.div>

      {/* Manifesto block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-12 max-w-3xl mx-auto text-center rounded-3xl border-2 border-[#C6F432] p-6 sm:p-8 bg-[#FFF7ED]/[0.03] shadow-[0_6px_0_0_#C6F432]"
      >
        <p className="text-[15px] sm:text-[17px] leading-relaxed text-[#FFF7ED]/85">
          When you bring your venue onto AuraLink, you are not just dropping a clunky software subscription. You are <span className="text-[#FF7A59] font-bold">plugging your business into a global ecosystem</span> engineered to turn customers into community, and community into co-owners.
        </p>
      </motion.div>

      {/* Three pillars */}
      <div className="mt-14 grid sm:grid-cols-3 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="rounded-3xl border-2 border-[#111] p-6 sm:p-7 shadow-[0_6px_0_0_#111] hover:-translate-y-1.5 hover:rotate-[-1deg] transition-transform"
            style={{ background: p.bg, color: p.ink }}
          >
            <div className="text-[36px] mb-3">{p.emoji}</div>
            <h3 className="font-grotesk text-[18px] sm:text-[20px] font-extrabold tracking-tight leading-tight">
              {p.title}
            </h3>
            <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed opacity-90">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-14 text-center"
      >
        <a
          href="https://www.ibloov.com/aura"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C6F432] text-[#111] text-[15px] font-extrabold border-2 border-[#111] shadow-[0_6px_0_0_#111] hover:translate-y-[-2px] hover:shadow-[0_8px_0_0_#111] active:translate-y-[1px] active:shadow-[0_3px_0_0_#111] transition-all"
        >
          Step Into the Future of Leisure-Tech
          <ArrowUpRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-[12px] text-[#FFF7ED]/40 font-medium">Explore the Full Orbit at ibloov.com/aura</p>
      </motion.div>
    </div>
  </section>
);

export default IBloovMovementSection;
