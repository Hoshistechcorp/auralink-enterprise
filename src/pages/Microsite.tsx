import { useNavigate } from "react-router-dom";
import {
  Phone, MessageCircle, Navigation, Share2, Bookmark,
  Camera, UtensilsCrossed, Star, Info, Wine, Flame,
  Bot, Award, Users, HelpCircle, CalendarDays, Globe
} from "lucide-react";
import MicrositeHeader from "@/components/aura/MicrositeHeader";
import ActionButton from "@/components/aura/ActionButton";
import AuraCard from "@/components/aura/AuraCard";
import BottomBrandBar from "@/components/aura/BottomBrandBar";
import AuraSupermenu from "@/components/aura/AuraSupermenu";
const actionButtons = [
  { icon: Phone, label: "Call" },
  { icon: MessageCircle, label: "Message" },
  { icon: Navigation, label: "Directions" },
  { icon: Share2, label: "Share" },
  { icon: Bookmark, label: "Save" },
];

const cards = [
  { icon: Camera, title: "Photo Gallery", subtitle: "248 photos" },
  { icon: UtensilsCrossed, title: "Menu", subtitle: "Full menu" },
  { icon: Star, title: "Reviews", subtitle: "4.8 avg" },
  { icon: Info, title: "Details", subtitle: "Hours & info" },
  { icon: Wine, title: "Private Dining", subtitle: "Book now" },
  { icon: Flame, title: "Popular Dishes", subtitle: "Top 12" },
  { icon: Bot, title: "AI Concierge", subtitle: "Ask anything" },
  { icon: Award, title: "Awards", subtitle: "8 awards" },
  { icon: Users, title: "Staff", subtitle: "Meet team" },
  { icon: HelpCircle, title: "FAQs", subtitle: "24 answers" },
  { icon: CalendarDays, title: "Events", subtitle: "Upcoming" },
  { icon: Globe, title: "Social Links", subtitle: "Follow us" },
];

const cardRoutes: Record<string, string> = {
  "Menu": "/microsite/menu",
  "Photo Gallery": "/microsite/gallery",
  "Reviews": "/microsite/reviews",
  "AI Concierge": "/microsite/concierge",
  "Staff": "/microsite/staff",
  "Details": "/microsite/details",
  "Private Dining": "/microsite/private-dining",
  "Popular Dishes": "/microsite/popular-dishes",
  "Awards": "/microsite/awards",
  "FAQs": "/microsite/faqs",
  "Events": "/microsite/events",
  "Social Links": "/microsite/social-links",
};

const Microsite = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <MicrositeHeader />

      {/* Action Buttons */}
      <div className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
        {actionButtons.map((btn) => (
          <ActionButton key={btn.label} icon={btn.icon} label={btn.label} />
        ))}
      </div>

      {/* Card Grid */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {cards.map((card, i) => (
            <AuraCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              delay={i}
              onClick={() => {
                const route = cardRoutes[card.title];
                if (route) navigate(route);
              }}
            />
          ))}
        </div>
      </div>

      <BottomBrandBar />
      <AuraSupermenu />
    </div>
  );
};

export default Microsite;
