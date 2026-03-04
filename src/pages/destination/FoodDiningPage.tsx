import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Star, DollarSign, ExternalLink } from "lucide-react";

const restaurants = [
  { name: "Staplehouse", cuisine: "New American", rating: 4.9, price: "$$$$", desc: "James Beard-winning restaurant with seasonal tasting menus." },
  { name: "Fox Bros. Bar-B-Q", cuisine: "BBQ", rating: 4.7, price: "$$", desc: "Atlanta's beloved spot for Texas-style barbecue." },
  { name: "Busy Bee Cafe", cuisine: "Soul Food", rating: 4.6, price: "$$", desc: "Iconic soul food restaurant since 1947." },
  { name: "Gunshow", cuisine: "Asian Fusion", rating: 4.8, price: "$$$", desc: "Unique dim sum-style service with rotating dishes." },
  { name: "Ponce City Market Food Hall", cuisine: "Various", rating: 4.5, price: "$$", desc: "Curated food hall with 20+ vendors in a historic building." },
  { name: "Buford Highway Corridor", cuisine: "International", rating: 4.7, price: "$", desc: "Miles of authentic global cuisine from 40+ countries." },
];

const FoodDiningPage = () => (
  <DestinationSubPage title="Food & Dining">
    <p className="text-sm text-muted-foreground mb-2">Discover Atlanta's world-class dining scene.</p>
    <p className="text-xs text-primary mb-5">🔗 Restaurants using AuraLink are highlighted</p>
    <div className="space-y-3">
      {restaurants.map((r) => (
        <div key={r.name} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-semibold flex items-center gap-1.5">{r.name}
                {r.name === "Staplehouse" && <ExternalLink className="w-3 h-3 text-primary" />}
              </h3>
              <span className="text-xs text-muted-foreground">{r.cuisine} · {r.price}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-3.5 h-3.5 fill-aura-warning text-aura-warning" />
              <span className="font-medium">{r.rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default FoodDiningPage;
