import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is AuraLink?", a: "AuraLink is a web-native, QR-powered operating system by iBloov that replaces fragmented venue websites, apps, and menus with a single digital interface." },
  { q: "Do guests need to download an app?", a: "No, it is completely zero-install. Guests simply scan a QR code to instantly launch the mobile-first microsite in their browser." },
  { q: "Who is AuraLink built for?", a: "It features two specialized use cases: Hospitality (restaurants, hotels, lounges) to drive direct revenue, and Tourism Boards (cities, destination marketing organizations) to boost visitor engagement." },
  { q: "What features does the microsite include?", a: "It uses a modular layout of up to 15 swappable cards including Menus, Reviews, Digital Gift Cards, Event RSVP, Loyalty rewards, and an AI Concierge." },
  { q: "How does the AI Concierge work?", a: "It is an automated conversational agent trained directly on the specific venue or destination's content to answer guest questions instantly." },
  { q: "Can I manage multiple locations from one account?", a: "Yes. The Enterprise dashboard allows multi-location groups to push global updates to branding, menus, and hours simultaneously while keeping an audit trail." },
  { q: "How much does AuraLink cost?", a: "Hospitality plans range from $29 to $199/month (with a 21-day free trial). Tourism plans are tier-based annual contracts starting at $36k/year." },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-5 py-20 bg-[#7CC7FF]" aria-labelledby="faq-h">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#1F2BD6] font-bold">FAQ</span>
          <h2
            id="faq-h"
            className="font-grotesk mt-2 text-[32px] sm:text-[40px] font-extrabold text-[#111] tracking-tight"
          >
            Common questions.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left rounded-2xl border-2 border-[#111] bg-[#FFF7ED] px-5 py-4 shadow-[0_4px_0_0_#111] hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-grotesk font-extrabold text-[15px] text-[#111]">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#111] transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2.5}
                  />
                </div>
                {isOpen && (
                  <p className="mt-2.5 text-[13.5px] text-[#111]/75 leading-relaxed">{f.a}</p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
