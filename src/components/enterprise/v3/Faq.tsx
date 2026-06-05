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
