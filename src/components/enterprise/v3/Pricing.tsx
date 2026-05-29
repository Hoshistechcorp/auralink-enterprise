import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PLANS, annualPrice, TRIAL_DAYS } from "@/lib/plans";

const Pricing = () => {
  const navigate = useNavigate();
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="px-5 py-16 bg-[#0E0B09] border-y border-[#1F1A17]" aria-labelledby="pricing-h">
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A35B]">Pricing</span>
        <h2 id="pricing-h" className="font-grotesk mt-2 text-[28px] font-bold text-[#F5F0E8] tracking-tight">
          Simple, fair pricing.
        </h2>
        <p className="text-[13px] text-[#A89B8B] mt-1.5">All plans include a {TRIAL_DAYS}-day Supernova trial.</p>

        <div className="mt-6 inline-flex items-center gap-1 p-1 rounded-full border border-[#2A2320] bg-[#141110]">
          {(["monthly", "annual"] as const).map((m) => {
            const active = (m === "annual") === annual;
            return (
              <button
                key={m}
                onClick={() => setAnnual(m === "annual")}
                className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  active ? "bg-gradient-to-r from-[#E8C886] to-[#C9A35B] text-[#1B1310]" : "text-[#A89B8B]"
                }`}
              >
                {m === "monthly" ? "Monthly" : "Annual −20%"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 max-w-md mx-auto sm:max-w-3xl sm:grid-cols-3">
        {PLANS.map((p) => {
          const price = p.price === 0 ? 0 : annual ? annualPrice(p.price) : p.price;
          return (
            <div
              key={p.id}
              className={`relative rounded-2xl border p-5 flex flex-col ${
                p.featured
                  ? "border-[#C9A35B]/40 bg-gradient-to-b from-[#1A1410] to-[#0F0D0B] shadow-lg shadow-[#C9A35B]/10"
                  : "border-[#1F1A17] bg-[#0F0D0B]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#E8C886] to-[#C9A35B] text-[#1B1310] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most popular
                </span>
              )}
              <p className="font-grotesk font-bold text-[18px] text-[#F5F0E8]">{p.name}</p>
              <p className="text-[12px] text-[#7A6F62] mt-0.5">{p.tagline}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-grotesk text-[36px] font-extrabold text-[#F5F0E8]">
                  {price === 0 ? "Free" : `$${price}`}
                </span>
                {price > 0 && <span className="text-[12px] text-[#7A6F62]">/mo</span>}
              </div>

              <span className="mt-1 inline-flex w-fit px-2 py-0.5 rounded-full bg-[#1B1714] border border-[#2A2320] text-[10px] font-semibold text-[#C9A35B] uppercase tracking-wider">
                {p.cardCount}
              </span>

              <ul className="mt-4 space-y-2 flex-1">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-[12.5px] text-[#A89B8B]">
                    <Check className="w-3.5 h-3.5 text-[#C9A35B] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/signup")}
                className={`mt-5 h-11 rounded-full text-[13px] font-semibold transition ${
                  p.featured
                    ? "bg-gradient-to-r from-[#E8C886] to-[#C9A35B] text-[#1B1310]"
                    : "border border-[#2A2320] text-[#F5F0E8] hover:bg-[#141110]"
                }`}
              >
                {p.price === 0 ? "Start free" : `Start ${p.name}`}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
