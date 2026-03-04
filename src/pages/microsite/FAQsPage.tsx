import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you take reservations?", a: "Yes! We accept reservations through OpenTable, by phone, or through our AI Concierge. We recommend booking at least 48 hours in advance for weekend dining." },
  { q: "Is there a dress code?", a: "We maintain a smart casual dress code. Jackets are appreciated but not required. No athletic wear or flip-flops please." },
  { q: "Do you accommodate dietary restrictions?", a: "Absolutely. Our kitchen can accommodate gluten-free, vegan, vegetarian, and most allergy requirements. Please inform your server or note it when making your reservation." },
  { q: "Is valet parking available?", a: "Yes, complimentary valet parking is available Thursday through Sunday evenings. Street parking and nearby garage parking are available all other times." },
  { q: "Do you have a private dining room?", a: "We have three private dining spaces: The Cellar (8-12 guests), Grand Terrace (20-50 guests), and Salon Privé (12-24 guests). Contact us for availability." },
  { q: "What's your cancellation policy?", a: "We ask for 24-hour notice for cancellations. Parties of 6 or more require 48-hour notice. A credit card is required to hold large party reservations." },
  { q: "Do you offer gift cards?", a: "Yes, physical and digital gift cards are available in any denomination. Purchase in-restaurant or through our website." },
  { q: "Is the restaurant wheelchair accessible?", a: "Yes, our restaurant is fully ADA accessible including restrooms. Please let us know if you need any accommodations when booking." },
  { q: "Do you have outdoor seating?", a: "Yes! Our Grand Terrace offers beautiful outdoor dining from May through October, weather permitting." },
  { q: "Can I host a corporate event?", a: "Absolutely. We offer customized corporate dining packages with AV equipment, dedicated service staff, and tailored menus. Contact our events team for details." },
  { q: "What wines do you carry?", a: "Our award-winning wine list features over 400 selections with a focus on Italian and French varietals. Our sommelier is happy to assist with pairings." },
  { q: "Do you have a kids' menu?", a: "Yes, we offer a children's menu for guests 12 and under with kid-friendly versions of our popular dishes." },
];

const FAQsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">FAQs</h1>
      </div>

      <div className="px-4 mt-4">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl bg-card border px-4">
              <AccordionTrigger className="text-sm font-medium text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="h-8" />
    </div>
  );
};

export default FAQsPage;
