import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does AuraLink replace my current POS?",
    a: "No — AuraLink sits alongside your POS, not on top of it. We integrate with Square, Toast, Lightspeed and most major systems via API. Think of AuraLink as your guest-facing layer: bookings, gift cards, AI concierge and loyalty all live here, while your POS keeps handling in-venue transactions.",
  },
  {
    q: "I don't have an IT team. How long does setup take?",
    a: "Most venues are live in under 3 minutes. Sign up, drop in your logo and menu link, and you have a public AuraLink ready to share. No code, no onboarding calls required — though our team is one click away if you want help.",
  },
  {
    q: "How does the Zero-Fee Commerce work?",
    a: "We don't take a percentage of your gift card or booking revenue. You connect your own payment processor (Stripe, Square, etc.) and 100% of the transaction lands in your bank account, minus standard processor fees. AuraLink charges a flat monthly subscription — never a cut of your revenue.",
  },
];

const FaqAccordion = () => (
  <section id="faq" className="relative py-24 sm:py-32 border-t border-white/[0.04]">
    <div className="max-w-3xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#A78BFA]">FAQ</span>
        <h2 className="font-jakarta mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Frequently asked questions
        </h2>
      </motion.div>

      <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-2 sm:p-4">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-white/[0.06] last:border-0 px-3 sm:px-4"
            >
              <AccordionTrigger className="text-left font-jakarta text-[15px] sm:text-[16px] font-semibold text-white hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/55 text-[14px] leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqAccordion;
