import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone, MessageCircle, Navigation, CalendarCheck, Info,
  Camera, UtensilsCrossed, Star, Wine, Flame, Gift,
  Bot, Award, Users, HelpCircle, CalendarDays, Globe,
  Gamepad2, Link2, Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import MicrositeHeader from "@/components/aura/MicrositeHeader";
import ActionButton from "@/components/aura/ActionButton";
import AuraCard from "@/components/aura/AuraCard";
import BottomBrandBar from "@/components/aura/BottomBrandBar";
import AuraSupermenu from "@/components/aura/AuraSupermenu";
import { getSubscription, getEffectivePlan, isCardAccessible } from "@/lib/subscription";
import { toast } from "@/hooks/use-toast";

const actions = [
  { icon: Phone, label: "Call" },
  { icon: MessageCircle, label: "Message" },
  { icon: Navigation, label: "Directions" },
  { icon: Info, label: "Details" },
  { icon: CalendarCheck, label: "Reservations" },
];

const cards = [
  { icon: Gift, title: "Gift Cards", subtitle: "Give & enjoy" },
  { icon: UtensilsCrossed, title: "Menu", subtitle: "Full menu" },
  { icon: Globe, title: "Social Links", subtitle: "Follow us" },
  { icon: Star, title: "Reviews", subtitle: "4.8 avg" },
  { icon: HelpCircle, title: "FAQs", subtitle: "24 answers" },
  { icon: Gamepad2, title: "Freebie Game", subtitle: "Spin & win" },
  { icon: Users, title: "Staff", subtitle: "Meet team" },
  { icon: Award, title: "Awards", subtitle: "8 awards" },
  { icon: CalendarDays, title: "Events", subtitle: "Upcoming" },
  { icon: Flame, title: "Popular Dishes", subtitle: "Top 12" },
  { icon: Bot, title: "AI Concierge", subtitle: "Ask anything" },
  { icon: Wine, title: "Private Dining", subtitle: "Book now" },
  { icon: Camera, title: "Photo Gallery", subtitle: "248 photos" },
  { icon: Link2, title: "Refer a Friend", subtitle: "Earn rewards" },
  { icon: Handshake, title: "Affiliate", subtitle: "Partner up" },
];

const routes: Record<string, string> = {
  "Menu": "/microsite/menu",
  "Photo Gallery": "/microsite/gallery",
  "Reviews": "/microsite/reviews",
  "AI Concierge": "/microsite/concierge",
  "Staff": "/microsite/staff",
  "Gift Cards": "/microsite/gift-cards",
  "Private Dining": "/microsite/private-dining",
  "Popular Dishes": "/microsite/popular-dishes",
  "Awards": "/microsite/awards",
  "FAQs": "/microsite/faqs",
  "Events": "/microsite/events",
  "Social Links": "/microsite/social-links",
  "Freebie Game": "/microsite/freebie-game",
  "Refer a Friend": "/microsite/referral",
  "Affiliate": "/microsite/affiliate",
};

const Microsite = () => {
  const navigate = useNavigate();
  const [sub, setSub] = useState(getSubscription());
  const effectivePlan = getEffectivePlan(sub);

  useEffect(() => {
    setSub(getSubscription());
  }, []);

  const handleReservation = () => {
    const s = getSubscription();
    if (s.reservationUrl) {
      window.open(s.reservationUrl, "_blank", "noopener,noreferrer");
    } else {
      toast({ title: "Reservations", description: "Set up your reservation link in Dashboard → Settings." });
    }
  };

  const handleCardClick = (title: string) => {
    const route = routes[title];
    if (route) navigate(route);
  };

  const handleAction = (label: string) => {
    if (label === "Reservations") {
      handleReservation();
    } else if (label === "Details") {
      navigate("/microsite/details");
    }
  };

  // Only show cards the current plan has access to
  const accessibleCards = cards.filter((card) => isCardAccessible(card.title, effectivePlan));

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <MicrositeHeader />

      <div className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
        {actions.map((btn) => (
          <ActionButton key={btn.label} icon={btn.icon} label={btn.label} onClick={() => handleAction(btn.label)} />
        ))}
      </div>

      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {accessibleCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              <AuraCard
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                delay={i}
                onClick={() => handleCardClick(card.title)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomBrandBar />
      <AuraSupermenu />
    </div>
  );
};

export default Microsite;
