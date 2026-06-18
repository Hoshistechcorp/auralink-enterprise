import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PLANS, annualPrice, TRIAL_DAYS } from "@/lib/plans";

const tierStyles: Record<string, { bg: string; ink: string }> = {
  spark: { bg: "#C6F432", ink: "#111" },
  maverick: { bg: "#FF7A59", ink: "#FFF7ED" },
  supernova: { bg: "#C8A2FF", ink: "#111" },
};

const Pricing = () => {
  const navigate = useNavigate();
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="px-5 py-20 bg-[#FFF7ED] border-y-2 border-[#111]"
      aria-labelledby="pricing-h"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#1F2BD6] font-bold">Pricing</span>
          <h2
            id="pricing-h"
            className="font-grotesk mt-2 text-[32px] sm:text-[40px] font-extrabold text-[#111] tracking-tight"
          >
            Simple, fair pricing.
          </h2>
          <p className="text-[14px] text-[#111]/70 mt-2">
            All plans include a {TRIAL_DAYS}-day Supernova trial.
          </p>

          <div className="mt-6 inline-flex items-center gap-1 p-1 rounded-full border-2 border-[#111] bg-[#FFF7ED] shadow-[0_3px_0_0_#111]">
            {(["monthly", "annual"] as const).map((m) => {
              const active = (m === "annual") === annual;
              return (
                <button
                  key={m}
                  onClick={() => setAnnual(m === "annual")}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                    active ? "bg-[#111] text-[#C6F432]" : "text-[#111]/60 hover:text-[#111]"
                  }`}
                >
                  {m === "monthly" ? "Monthly" : "Annual −20%"}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 max-w-md mx-auto sm:max-w-4xl sm:grid-cols-3">
          {PLANS.map((p, i) => {
            const price = p.price === 0 ? 0 : annual ? annualPrice(p.price) : p.price;
            const style = tierStyles[p.id] || { bg: "#FFF7ED", ink: "#111" };
            return (
              <div
                key={p.id}
                className="relative rounded-3xl border-2 border-[#111] p-6 flex flex-col shadow-[0_6px_0_0_#111] transition-transform hover:-translate-y-1"
                style={{
                  background: style.bg,
                  color: style.ink,
                  transform: `rotate(${i === 1 ? 0 : i === 0 ? -1 : 1}deg)`,
                }}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#111] text-[#C6F432] text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 border-2 border-[#111]">
                    <Sparkles className="w-3 h-3" /> Most popular
                  </span>
                )}
                <p className="font-grotesk font-extrabold text-[20px]">{p.name}</p>
                <p className="text-[12.5px] opacity-75 mt-0.5">{p.tagline}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-grotesk text-[42px] font-extrabold">
                    {price === 0 ? "Free" : `$${price}`}
                  </span>
                  {price > 0 && <span className="text-[12px] opacity-75">/mo</span>}
                </div>

                <span className="mt-1 inline-flex w-fit px-2.5 py-0.5 rounded-full bg-[#FFF7ED] border-2 border-[#111] text-[10px] font-extrabold text-[#111] uppercase tracking-wider">
                  {p.cardCount}
                </span>

                <ul className="mt-4 space-y-2 flex-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-[13px]">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/signup")}
                  className="mt-5 h-12 rounded-full text-[13px] font-bold bg-[#111] text-[#FFF7ED] border-2 border-[#111] hover:bg-[#1F2BD6] transition-colors"
                >
                  {p.price === 0 ? "Start free" : `Start ${p.name}`}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
