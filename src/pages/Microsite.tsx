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
import TrialBanner from "@/components/aura/TrialBanner";
import AuraCard from "@/components/aura/AuraCard";
import BottomBrandBar from "@/components/aura/BottomBrandBar";
import AuraSupermenu from "@/components/aura/AuraSupermenu";
import { getSubscription, getEffectivePlan, isCardAccessible } from "@/lib/subscription";
import { getBusinessContact } from "@/lib/businessContact";
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

  const handleCall = () => {
    const contact = getBusinessContact();
    const digits = contact.phone.replace(/\D/g, "");
    if (digits) {
      window.open(`tel:${digits}`, "_self");
    } else {
      toast({ title: "Call", description: "Phone number not configured yet." });
    }
  };

  const handleMessage = () => {
    const contact = getBusinessContact();
    const digits = contact.smsNumber.replace(/\D/g, "");
    if (digits) {
      window.open(`sms:${digits}`, "_self");
    } else {
      toast({ title: "Message", description: "SMS number not configured yet." });
    }
  };

  const handleDirections = () => {
    const contact = getBusinessContact();
    if (contact.mapsUrl) {
      window.open(contact.mapsUrl, "_blank", "noopener,noreferrer");
    } else if (contact.address) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`, "_blank", "noopener,noreferrer");
    } else {
      toast({ title: "Directions", description: "Address not configured yet." });
    }
  };

  const handleCardClick = (title: string) => {
    const route = routes[title];
    if (route) navigate(route);
  };

  const handleAction = (label: string) => {
    switch (label) {
      case "Call": return handleCall();
      case "Message": return handleMessage();
      case "Directions": return handleDirections();
      case "Reservations": return handleReservation();
      case "Details": return navigate("/microsite/details");
    }
  };

  const accessibleCards = cards.filter((card) => isCardAccessible(card.title, effectivePlan));
  const lockedCards = cards.filter((card) => !isCardAccessible(card.title, effectivePlan));
  const isExpired = !sub.trialActive && effectivePlan !== "supernova";

  return (
    <div className="relative min-h-screen">
      {/* Warm hospitality backdrop — restaurant, hotel, lounge */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Warm classy restaurant, hotel and lounge ambience"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative bg-background max-w-[430px] mx-auto shadow-2xl min-h-screen">
        <MicrositeHeader />
        <TrialBanner variant="microsite" />

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

          {/* Locked cards shown as dimmed with lock overlay */}
          {isExpired && lockedCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: (accessibleCards.length + i) * 0.04, duration: 0.35 }}
              className="relative"
            >
              <div className="pointer-events-none grayscale">
                <AuraCard
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                  delay={accessibleCards.length + i}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-background/60 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-1">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-medium text-muted-foreground">Upgrade</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upgrade prompt after expired trial */}
        {isExpired && lockedCards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-2xl bg-primary/10 border border-primary/20 p-4 text-center"
          >
            <p className="text-sm font-medium text-foreground mb-1">
              Unlock {lockedCards.length} more feature{lockedCards.length !== 1 ? "s" : ""}
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Upgrade to access all cards and premium features
            </p>
          </motion.div>
        )}
      </div>

      <BottomBrandBar />
      <AuraSupermenu />
      </div>
    </div>
  );
};

export default Microsite;
