import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How fast can we launch?", a: "Most venues are live in under 3 minutes — no developers, no IT." },
  { q: "What does AuraLink cost?", a: "Spark is free. Maverick is $79/mo. Supernova is $149/mo. Save 20% annually." },
  { q: "Do you take booking commission?", a: "No. AuraLink charges 0% on every direct reservation." },
  { q: "Is the AI Concierge multilingual?", a: "Yes — 40+ languages, 24/7, trained on your venue's content." },
  { q: "Can I cancel anytime?", a: "Yes. Month-to-month, cancel anytime from your dashboard." },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-5 py-16" aria-labelledby="faq-h">
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A35B]">FAQ</span>
        <h2 id="faq-h" className="font-grotesk mt-2 text-[28px] font-bold text-[#F5F0E8] tracking-tight">
          Common questions.
        </h2>
      </div>
      <div className="max-w-lg mx-auto space-y-2">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={f.q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left rounded-2xl border border-[#1F1A17] bg-[#0F0D0B] px-5 py-4 hover:border-[#C9A35B]/30 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-grotesk font-semibold text-[14px] text-[#F5F0E8]">{f.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C9A35B] transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
              </div>
              {isOpen && <p className="mt-2 text-[13px] text-[#A89B8B] leading-relaxed">{f.a}</p>}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
