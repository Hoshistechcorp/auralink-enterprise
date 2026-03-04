import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Star, MapPin, Wifi } from "lucide-react";

const stays = [
  { name: "The Ritz-Carlton, Atlanta", type: "Luxury Hotel", rating: 4.8, area: "Downtown", price: "From $350/night" },
  { name: "Hotel Clermont", type: "Boutique Hotel", rating: 4.6, area: "Poncey-Highland", price: "From $180/night" },
  { name: "The Burgess Hotel", type: "Modern Hotel", rating: 4.7, area: "Buckhead", price: "From $220/night" },
  { name: "Bellyard Hotel", type: "Urban Resort", rating: 4.5, area: "West Midtown", price: "From $200/night" },
  { name: "Reynolds Lake Oconee", type: "Lake Resort", rating: 4.9, area: "Lake Oconee (1.5hr)", price: "From $450/night" },
  { name: "Airbnb Collection — Midtown", type: "Vacation Rental", rating: 4.4, area: "Midtown", price: "From $120/night" },
];

const HotelsStaysPage = () => (
  <DestinationSubPage title="Hotels & Stays">
    <p className="text-sm text-muted-foreground mb-5">Hotels, boutique stays, resorts, and vacation rentals in Atlanta.</p>
    <div className="space-y-3">
      {stays.map((s) => (
        <div key={s.name} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-semibold">{s.name}</h3>
              <span className="text-xs text-muted-foreground">{s.type}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-3.5 h-3.5 fill-aura-warning text-aura-warning" />
              <span className="font-medium">{s.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{s.area}</span>
            <span className="font-medium text-primary">{s.price}</span>
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default HotelsStaysPage;
