import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Store, Star, ExternalLink } from "lucide-react";

const businesses = [
  { name: "Citizen Supply", type: "Artisan Market", area: "Ponce City Market", rating: 4.6, auralink: true },
  { name: "Paris on Ponce", type: "Vintage & Art", area: "Poncey-Highland", rating: 4.5, auralink: false },
  { name: "A Cappella Books", type: "Bookstore", area: "Little Five Points", rating: 4.8, auralink: false },
  { name: "Junkman's Daughter", type: "Novelty Shop", area: "Little Five Points", rating: 4.4, auralink: false },
  { name: "Sweet Auburn Curb Market", type: "Public Market", area: "Downtown", rating: 4.6, auralink: true },
  { name: "Westside Provisions District", type: "Shopping Complex", area: "West Midtown", rating: 4.5, auralink: true },
];

const LocalBusinessesPage = () => (
  <DestinationSubPage title="Local Businesses">
    <p className="text-sm text-muted-foreground mb-2">Discover local shops, markets, and craft districts.</p>
    <p className="text-xs text-primary mb-5">🔗 Businesses on AuraLink are highlighted</p>
    <div className="space-y-3">
      {businesses.map((b) => (
        <div key={b.name} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-semibold flex items-center gap-1.5">
                {b.name}
                {b.auralink && <ExternalLink className="w-3 h-3 text-primary" />}
              </h3>
              <span className="text-xs text-muted-foreground">{b.type} · {b.area}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-3.5 h-3.5 fill-aura-warning text-aura-warning" />
              <span className="font-medium">{b.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default LocalBusinessesPage;
