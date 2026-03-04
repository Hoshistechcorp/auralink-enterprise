import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Compass, Sun, Umbrella, Snowflake, Leaf } from "lucide-react";

const itineraries = [
  { title: "3-Day Atlanta Essentials", desc: "Georgia Aquarium → MLK Historic Site → Ponce City Market → BeltLine → Fox Theatre → Midtown dining." },
  { title: "Foodie Weekend", desc: "Buford Highway crawl → Sweet Auburn Market → Fox Bros. BBQ → Staplehouse dinner → Krog Street Market brunch." },
  { title: "Family Fun Week", desc: "Zoo Atlanta → Children's Museum → Aquarium → Stone Mountain → Legoland Discovery Center." },
  { title: "Arts & Culture Trail", desc: "High Museum → Krog Street Tunnel → Atlanta Contemporary → Fox Theatre → Trap Music Museum." },
];

const tips = [
  { icon: Sun, title: "Best Time to Visit", desc: "Spring (Mar–May) and Fall (Sep–Nov) offer mild weather and outdoor festivals." },
  { icon: Umbrella, title: "Weather Tip", desc: "Summers are hot and humid (90°F+). Carry water and sunscreen for outdoor activities." },
  { icon: Leaf, title: "Getting Around", desc: "MARTA connects airport to downtown. Rideshare and BeltLine bikes cover most neighborhoods." },
  { icon: Compass, title: "Local Tip", desc: "Many attractions offer free admission on certain days. Check Atlanta CityPASS for bundles." },
];

const PlanYourTripPage = () => (
  <DestinationSubPage title="Plan Your Trip">
    <p className="text-sm text-muted-foreground mb-5">Suggested itineraries, day plans, and travel tips for Atlanta.</p>

    <h3 className="font-display font-semibold mb-3">Suggested Itineraries</h3>
    <div className="space-y-3 mb-8">
      {itineraries.map((it) => (
        <div key={it.title} className="p-4 rounded-2xl bg-card border shadow-sm">
          <h4 className="font-semibold text-sm">{it.title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
        </div>
      ))}
    </div>

    <h3 className="font-display font-semibold mb-3">Travel Tips</h3>
    <div className="space-y-3">
      {tips.map((t) => (
        <div key={t.title} className="p-4 rounded-2xl bg-card border shadow-sm flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-aura-info/10 flex items-center justify-center shrink-0">
            <t.icon className="w-5 h-5 text-aura-info" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">{t.title}</h4>
            <p className="text-sm text-muted-foreground mt-0.5">{t.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default PlanYourTripPage;
