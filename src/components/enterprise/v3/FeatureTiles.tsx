import { Gift, CalendarCheck, Sparkles, Award, BarChart3, QrCode } from "lucide-react";

const tiles = [
  { icon: Gift, t: "Gift cards", d: "Sell digital, redeem instant." },
  { icon: CalendarCheck, t: "Reservations", d: "Direct, 0% commission." },
  { icon: Sparkles, t: "AI Concierge", d: "24/7 in 40+ languages." },
  { icon: Award, t: "Loyalty", d: "Points, tiers, retention." },
  { icon: BarChart3, t: "Analytics", d: "See what guests do." },
  { icon: QrCode, t: "QR microsite", d: "15 cards, one tap away." },
];

const FeatureTiles = () => (
  <section className="px-5 py-16 bg-[#0E0B09] border-y border-[#1F1A17]">
    <div className="text-center mb-8">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A35B]">What you get</span>
      <h2 className="font-grotesk mt-2 text-[28px] font-bold text-[#F5F0E8] tracking-tight">Everything in one tap.</h2>
    </div>
    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
      {tiles.map(({ icon: I, t, d }) => (
        <div key={t} className="rounded-2xl border border-[#1F1A17] bg-[#141110] p-4 hover:border-[#C9A35B]/40 transition-colors">
          <div className="h-9 w-9 rounded-xl bg-[#1B1714] border border-[#2A2320] flex items-center justify-center mb-3">
            <I className="w-4 h-4 text-[#E8C886]" />
          </div>
          <p className="font-grotesk font-semibold text-[14px] text-[#F5F0E8]">{t}</p>
          <p className="text-[12px] text-[#7A6F62] mt-0.5 leading-snug">{d}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureTiles;
