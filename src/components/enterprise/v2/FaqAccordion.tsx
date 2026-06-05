import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is AuraLink?",
    a: "AuraLink is a web-native, QR-powered operating system by iBloov that replaces fragmented venue websites, apps, and menus with a single digital interface.",
  },
  {
    q: "Do guests need to download an app?",
    a: "No, it is completely zero-install. Guests simply scan a QR code to instantly launch the mobile-first microsite in their browser.",
  },
  {
    q: "Who is AuraLink built for?",
    a: "It features two specialized use cases: Hospitality (restaurants, hotels, lounges) to drive direct revenue, and Tourism Boards (cities, destination marketing organizations) to boost visitor engagement.",
  },
  {
    q: "What features does the microsite include?",
    a: "It uses a modular layout of up to 15 swappable cards including Menus, Reviews, Digital Gift Cards, Event RSVP, Loyalty rewards, and an AI Concierge.",
  },
  {
    q: "How does the AI Concierge work?",
    a: "It is an automated conversational agent trained directly on the specific venue or destination's content to answer guest questions instantly.",
  },
  {
    q: "Can I manage multiple locations from one account?",
    a: "Yes. The Enterprise dashboard allows multi-location groups to push global updates to branding, menus, and hours simultaneously while keeping an audit trail.",
  },
  {
    q: "How much does AuraLink cost?",
    a: "Hospitality plans range from $29 to $199/month (with a 21-day free trial). Tourism plans are tier-based annual contracts starting at $36k/year.",
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
