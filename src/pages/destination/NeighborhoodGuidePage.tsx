import DestinationSubPage from "@/components/aura/DestinationSubPage";

const neighborhoods = [
  { name: "Midtown", vibe: "Arts & Culture", desc: "Atlanta's cultural heart — home to the High Museum, Piedmont Park, and a thriving dining scene.", color: "hsl(var(--primary))" },
  { name: "Buckhead", vibe: "Upscale & Shopping", desc: "Luxury shopping, fine dining, and nightlife in Atlanta's most affluent district.", color: "hsl(var(--aura-gold))" },
  { name: "Old Fourth Ward", vibe: "Historic & Hip", desc: "Birthplace of MLK Jr. with the BeltLine, Ponce City Market, and street art.", color: "hsl(var(--aura-info))" },
  { name: "Little Five Points", vibe: "Eclectic & Indie", desc: "Bohemian neighborhood with vintage shops, dive bars, and counter-culture vibes.", color: "hsl(var(--aura-warning))" },
  { name: "West Midtown / Westside", vibe: "Foodie & Creative", desc: "Converted warehouses housing top restaurants, breweries, and galleries.", color: "hsl(var(--aura-success))" },
  { name: "Decatur", vibe: "Charming & Walkable", desc: "Independent bookshops, craft cocktail bars, and a vibrant town square.", color: "hsl(var(--secondary))" },
];

const NeighborhoodGuidePage = () => (
  <DestinationSubPage title="Neighborhood Guide">
    <p className="text-sm text-muted-foreground mb-5">Explore Atlanta's diverse districts and neighborhoods.</p>
    <div className="space-y-3">
      {neighborhoods.map((n) => (
        <div key={n.name} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: n.color }} />
            <h3 className="font-display font-semibold">{n.name}</h3>
          </div>
          <span className="text-xs font-medium text-primary">{n.vibe}</span>
          <p className="text-sm text-muted-foreground mt-1">{n.desc}</p>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default NeighborhoodGuidePage;
