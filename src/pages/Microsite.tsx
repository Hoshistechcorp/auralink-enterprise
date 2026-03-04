import { useNavigate } from "react-router-dom";
import {
  Phone, MessageCircle, Navigation, Share2, Bookmark,
  Camera, UtensilsCrossed, Star, Info, Wine, Flame,
  Bot, Award, Users, HelpCircle, CalendarDays, Globe,
  Gamepad2, Link2, Handshake,
  // Destination icons
  Landmark, Compass, Hotel, TreePine, Map, Train,
  HelpingHand, Store, Tag, Megaphone, Palette,
  MapPin, Calendar,
} from "lucide-react";
import MicrositeHeader from "@/components/aura/MicrositeHeader";
import DestinationHeader from "@/components/aura/DestinationHeader";
import ActionButton from "@/components/aura/ActionButton";
import AuraCard from "@/components/aura/AuraCard";
import BottomBrandBar from "@/components/aura/BottomBrandBar";
import AuraSupermenu from "@/components/aura/AuraSupermenu";
import { useAccountType } from "@/contexts/AccountTypeContext";

/* ── Restaurant config ─────────────────────────── */
const restaurantActions = [
  { icon: Phone, label: "Call" },
  { icon: MessageCircle, label: "Message" },
  { icon: Navigation, label: "Directions" },
  { icon: Share2, label: "Share" },
  { icon: Bookmark, label: "Save" },
];

const restaurantCards = [
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
  { icon: Gamepad2, title: "Freebie Game", subtitle: "Spin & win" },
  { icon: Link2, title: "Refer a Friend", subtitle: "Earn rewards" },
  { icon: Handshake, title: "Affiliate", subtitle: "Partner up" },
];

const restaurantRoutes: Record<string, string> = {
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
  "Freebie Game": "/microsite/freebie-game",
  "Refer a Friend": "/microsite/referral",
  "Affiliate": "/microsite/affiliate",
};

/* ── Destination config ────────────────────────── */
const destinationActions = [
  { icon: Compass, label: "Plan Trip" },
  { icon: Map, label: "Map" },
  { icon: CalendarDays, label: "Events" },
  { icon: Share2, label: "Share" },
  { icon: Bookmark, label: "Save" },
];

const destinationCards = [
  { icon: Landmark, title: "Attractions", subtitle: "Museums & sites" },
  { icon: Compass, title: "Things To Do", subtitle: "Tours & more" },
  { icon: Calendar, title: "Events & Festivals", subtitle: "What's on" },
  { icon: UtensilsCrossed, title: "Food & Dining", subtitle: "Local eats" },
  { icon: Hotel, title: "Hotels & Stays", subtitle: "Book now" },
  { icon: Palette, title: "Cultural Experiences", subtitle: "Arts & culture" },
  { icon: TreePine, title: "Nature & Parks", subtitle: "Outdoors" },
  { icon: MapPin, title: "Neighborhood Guide", subtitle: "Districts" },
  { icon: Train, title: "Transportation", subtitle: "Getting around" },
  { icon: HelpingHand, title: "Visitor Services", subtitle: "Help & info" },
  { icon: Store, title: "Local Businesses", subtitle: "Shop local" },
  { icon: Camera, title: "Photo Memories", subtitle: "PicPop" },
  { icon: Tag, title: "Upcoming Deals", subtitle: "Promotions" },
  { icon: Megaphone, title: "Local Creators", subtitle: "Influencers" },
  { icon: Compass, title: "Plan Your Trip", subtitle: "Itineraries" },
];

const destinationRoutes: Record<string, string> = {
  "Attractions": "/destination/attractions",
  "Things To Do": "/destination/things-to-do",
  "Events & Festivals": "/destination/events-festivals",
  "Food & Dining": "/destination/food-dining",
  "Hotels & Stays": "/destination/hotels",
  "Cultural Experiences": "/destination/culture",
  "Nature & Parks": "/destination/nature",
  "Neighborhood Guide": "/destination/neighborhoods",
  "Transportation": "/destination/transportation",
  "Visitor Services": "/destination/visitor-services",
  "Local Businesses": "/destination/local-businesses",
  "Photo Memories": "/destination/photos",
  "Upcoming Deals": "/destination/deals",
  "Local Creators": "/destination/creators",
  "Plan Your Trip": "/destination/plan-trip",
};

const Microsite = () => {
  const navigate = useNavigate();
  const { accountType } = useAccountType();

  const isDestination = accountType === "destination";
  const actions = isDestination ? destinationActions : restaurantActions;
  const cards = isDestination ? destinationCards : restaurantCards;
  const routes = isDestination ? destinationRoutes : restaurantRoutes;

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      {isDestination ? <DestinationHeader /> : <MicrositeHeader />}

      <div className="flex gap-2 overflow-x-auto px-4 py-4 no-scrollbar">
        {actions.map((btn) => (
          <ActionButton key={btn.label} icon={btn.icon} label={btn.label} />
        ))}
      </div>

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
                const route = routes[card.title];
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
