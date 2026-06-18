import { motion } from "framer-motion";
import { Heart, Globe2, Trophy, Inbox, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeartLetter from "@/components/icons/HeartLetter";

const bullets = [
  { Icon: Globe2, t: "Find any venue worldwide", d: "Search a city, paste an address — leave love anywhere." },
  { Icon: Trophy, t: "Wall of Love & Top 10", d: "Trending venues across cities, ranked by real love." },
  { Icon: Inbox, t: "Unread letters waiting", d: "Owners claim their venue and read every Love Letter." },
];

const sampleLetters = [
  { name: "Sunset Lounge", city: "Lagos", text: "Best mojito of my life. The DJ knew every song.", emoji: "🌅" },
  { name: "Casa Verde", city: "Lisbon", text: "Felt like home. Will be back next month.", emoji: "🌿" },
  { name: "Tokyo Bites", city: "Shibuya", text: "Tiny spot, huge soul. 10/10.", emoji: "🍣" },
];

const LoveLetterSection = () => {
  const navigate = useNavigate();
  return (
    <section id="loveletter" className="relative px-5 py-20 sm:py-28 bg-[#FF7A59] border-y-2 border-[#111] overflow-hidden">
      {/* Floating stickers */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[6%] h-12 w-12 rounded-2xl border-2 border-[#111] bg-[#FFF7ED] shadow-[0_5px_0_0_#111] flex items-center justify-center rotate-[-10deg] animate-[float_7s_ease-in-out_infinite]">
          <Heart className="w-6 h-6 text-[#FF7A59]" fill="#FF7A59" />
        </div>
        <div className="hidden md:flex absolute top-24 right-[8%] h-12 px-3 rounded-full border-2 border-[#111] bg-[#C6F432] shadow-[0_5px_0_0_#111] items-center gap-1.5 rotate-[6deg]">
          <Trophy className="w-4 h-4 text-[#111]" strokeWidth={2.6} />
          <span className="font-grotesk text-[12px] font-extrabold text-[#111]">Top 10</span>
        </div>
        <div className="hidden md:block absolute bottom-12 left-[10%] h-14 w-14 rounded-2xl border-2 border-[#111] bg-[#C8A2FF] shadow-[0_5px_0_0_#111] flex items-center justify-center rotate-[8deg]">
          <HeartLetter size={26} strokeWidth={2.2} />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111] text-[#FF7A59] text-[11px] font-bold uppercase tracking-[0.2em] border-2 border-[#111] shadow-[0_3px_0_0_#111]">
            💌 LoveLetter · An iBloov product
          </span>
          <h2 className="font-grotesk mt-5 text-[40px] sm:text-[56px] leading-[1.02] font-extrabold tracking-tight text-[#FFF7ED]">
            Leave a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#111]">Love Letter.</span>
              <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 sm:h-4 bg-[#C6F432] rounded-full -z-0" />
            </span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-[#FFF7ED]/90 max-w-lg">
            The new, global way to review the places you love — and the venues that love you back. Replace cold star ratings with real letters from real humans.
          </p>

          <ul className="mt-7 space-y-3 max-w-md">
            {bullets.map(({ Icon, t, d }) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl border-2 border-[#111] bg-[#FFF7ED] p-3.5 shadow-[0_4px_0_0_#111]">
                <div className="shrink-0 h-9 w-9 rounded-xl bg-[#C6F432] border-2 border-[#111] flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-[#111]" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="font-grotesk font-extrabold text-[14px] text-[#111]">{t}</p>
                  <p className="text-[12.5px] text-[#111]/70 mt-0.5">{d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://loveletter.ibloov.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#111] text-[#FFF7ED] font-grotesk font-extrabold text-[14px] border-2 border-[#111] shadow-[0_4px_0_0_#FFF7ED] hover:translate-y-[-2px] transition-transform"
            >
              <Heart className="w-4 h-4" fill="#FF7A59" /> Send a Love Letter
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <button
              onClick={() => navigate("/signup")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C6F432] text-[#111] font-grotesk font-extrabold text-[14px] border-2 border-[#111] shadow-[0_4px_0_0_#111] hover:translate-y-[-2px] transition-transform"
            >
              Claim your venue
            </button>
          </div>
        </motion.div>

        {/* Right: mocked phone card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mx-auto w-full max-w-[360px]"
        >
          <div className="rounded-[36px] border-2 border-[#111] bg-[#FFF7ED] p-5 shadow-[8px_8px_0_0_#111]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-[#FF7A59] border-2 border-[#111] flex items-center justify-center">
                  <HeartLetter size={20} strokeWidth={2.3} />
                </div>
                <div>
                  <p className="font-grotesk font-extrabold text-[13px] text-[#111]">loveletter.ibloov.com</p>
                  <p className="text-[10.5px] text-[#111]/60">Wall of Love · Trending</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#C6F432] border-2 border-[#111] text-[10px] font-extrabold text-[#111]">LIVE</span>
            </div>

            <div className="space-y-2.5">
              {sampleLetters.map((l, i) => (
                <div
                  key={l.name}
                  className="rounded-2xl border-2 border-[#111] p-3 shadow-[0_3px_0_0_#111]"
                  style={{ background: ["#C6F432", "#7CC7FF", "#C8A2FF"][i] }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-grotesk font-extrabold text-[12.5px] text-[#111]">
                      {l.emoji} {l.name}
                    </p>
                    <span className="text-[10px] font-bold text-[#111]/70">{l.city}</span>
                  </div>
                  <p className="text-[12px] text-[#111]/85 leading-snug">"{l.text}"</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between px-1">
              <div className="flex -space-x-1.5">
                {["#FF7A59", "#C6F432", "#7CC7FF", "#C8A2FF"].map((c) => (
                  <div key={c} className="h-6 w-6 rounded-full border-2 border-[#111]" style={{ background: c }} />
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#111]/70">+2.4k letters this week</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
