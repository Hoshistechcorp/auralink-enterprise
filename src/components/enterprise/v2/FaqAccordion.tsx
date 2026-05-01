import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does AuraLink replace our POS?",
    a: "No — AuraLink sits alongside your POS as the guest-facing layer. It integrates with most major systems and handles bookings, gift cards, AI concierge, loyalty, and analytics, while your POS continues to manage in-venue transactions.",
  },
  {
    q: "How quickly can we go live?",
    a: "Most venues launch in under 3 minutes. Sign up, drop in your logo and content, and a polished public AuraLink is ready to share. Enterprise rollouts with multi-location templates and custom branding typically launch within a week.",
  },
  {
    q: "Can AuraLink support multiple venues or locations?",
    a: "Yes. Hotel groups, restaurant chains, and tourism boards run multiple AuraLinks under one parent account, with shared branding, role-based access, centralized analytics, and per-location overrides.",
  },
  {
    q: "What makes AuraLink different from link-in-bio or booking tools?",
    a: "Link-in-bio tools route traffic away from you. Booking tools take a cut of every reservation. AuraLink is a full hospitality operating system: you own the hub, the guest data, and the revenue, with built-in AI, commerce, loyalty, and growth.",
  },
  {
    q: "How does the AI concierge work?",
    a: "The concierge is trained on your venue's menu, FAQs, hours, and policies. It answers in 40+ languages, secures bookings, and escalates complex requests to your team. You review and refine its knowledge base from the dashboard at any time.",
  },
  {
    q: "What enterprise support is available?",
    a: "Enterprise plans include a dedicated success manager, priority SLA, custom onboarding, security and procurement reviews, and direct access to the engineering team for integrations and roadmap input.",
  },
];

const FaqAccordion = () => (
  <section id="faq" className="relative py-24 sm:py-32 bg-[#0B0907] border-t border-[#2A2320]">
    <div className="max-w-3xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">FAQ</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          Frequently asked <span className="italic text-brass-gradient">questions.</span>
        </h2>
      </motion.div>

      <div className="rounded-3xl border border-[#2A2320] bg-[#141110]/70 backdrop-blur p-2 sm:p-4">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-[#2A2320] last:border-0 px-3 sm:px-4"
            >
              <AccordionTrigger className="text-left font-fraunces text-[16px] sm:text-[17px] font-bold text-ivory hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-stone-warm text-[14px] leading-relaxed pb-5">
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
