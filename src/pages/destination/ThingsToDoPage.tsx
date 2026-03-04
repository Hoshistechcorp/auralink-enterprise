import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Bike, Sunset, ShoppingBag, Music } from "lucide-react";

const categories = [
  { icon: Bike, title: "Outdoor Adventures", items: ["BeltLine Trail Walk", "Stone Mountain Hike", "Chattahoochee River Kayak"] },
  { icon: Sunset, title: "Tours & Experiences", items: ["Atlanta Food Tour", "Street Art Walking Tour", "Historic Civil Rights Tour"] },
  { icon: ShoppingBag, title: "Shopping", items: ["Ponce City Market", "Lenox Square", "Little Five Points Vintage Shops"] },
  { icon: Music, title: "Nightlife", items: ["Live Jazz at Blind Willie's", "Rooftop Bars in Midtown", "Comedy Shows at Laughing Skull"] },
];

const ThingsToDoPage = () => (
  <DestinationSubPage title="Things To Do">
    <p className="text-sm text-muted-foreground mb-5">Tours, adventures, nightlife, and shopping — all in one place.</p>
    <div className="space-y-4">
      {categories.map((cat) => (
        <div key={cat.title} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <cat.icon className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-display font-semibold">{cat.title}</h3>
          </div>
          <ul className="space-y-1.5">
            {cat.items.map((item) => (
              <li key={item} className="text-sm text-muted-foreground pl-3 border-l-2 border-primary/20">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default ThingsToDoPage;
