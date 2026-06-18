import { Gift, CalendarCheck, Sparkles, Award, BarChart3, QrCode } from "lucide-react";

const tiles = [
  { icon: Gift, t: "Gift cards", d: "Sell digital, redeem instant.", bg: "#FF7A59", ink: "#FFF7ED" },
  { icon: CalendarCheck, t: "Reservations", d: "Direct, 0% commission.", bg: "#C6F432", ink: "#111" },
  { icon: Sparkles, t: "AI Concierge", d: "24/7 in 40+ languages.", bg: "#C8A2FF", ink: "#111" },
  { icon: Award, t: "Loyalty", d: "Points, tiers, retention.", bg: "#F39A1F", ink: "#111" },
  { icon: BarChart3, t: "Analytics", d: "See what guests do.", bg: "#7CC7FF", ink: "#111" },
  { icon: QrCode, t: "QR microsite", d: "15 cards, one tap away.", bg: "#1F2BD6", ink: "#FFF7ED" },
];

const FeatureTiles = () => (
  <section className="px-5 py-20 bg-[#FFF7ED] border-y-2 border-[#111]">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#1F2BD6] font-bold">What you get</span>
        <h2 className="font-grotesk mt-2 text-[32px] sm:text-[40px] font-extrabold text-[#111] tracking-tight">
          Everything in one tap.
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {tiles.map(({ icon: I, t, d, bg, ink }, i) => (
          <div
            key={t}
            className="rounded-3xl border-2 border-[#111] p-4 shadow-[0_5px_0_0_#111] transition-transform hover:-translate-y-1 hover:rotate-[-1deg]"
            style={{ background: bg, color: ink, transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
          >
            <div className="h-10 w-10 rounded-xl bg-[#FFF7ED] border-2 border-[#111] flex items-center justify-center mb-3 text-[#111]">
              <I className="w-5 h-5" strokeWidth={2.4} />
            </div>
            <p className="font-grotesk font-extrabold text-[15px]">{t}</p>
            <p className="text-[12.5px] mt-0.5 leading-snug opacity-85">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureTiles;
