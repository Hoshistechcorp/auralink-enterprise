import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { TreePine, Mountain, Waves, Footprints } from "lucide-react";

const spots = [
  { icon: Mountain, name: "Stone Mountain Park", type: "State Park", desc: "World's largest exposed granite monolith with hiking, laser shows, and scenic railway." },
  { icon: TreePine, name: "Piedmont Park", type: "Urban Park", desc: "185-acre green oasis in the heart of Midtown with trails, lake, and sports facilities." },
  { icon: Footprints, name: "Atlanta BeltLine", type: "Trail", desc: "22-mile multi-use trail connecting neighborhoods with art, parks, and transit." },
  { icon: Waves, name: "Chattahoochee River NRA", type: "National Recreation Area", desc: "48 miles of river corridor for tubing, kayaking, fishing, and hiking." },
  { icon: TreePine, name: "Sweetwater Creek State Park", type: "State Park", desc: "Ruins of a Civil War-era mill along a scenic creek with red bluff trails." },
  { icon: Mountain, name: "Kennesaw Mountain National Battlefield", type: "National Park", desc: "Historic battlefield with 20+ miles of hiking trails and panoramic views." },
];

const NatureParksPage = () => (
  <DestinationSubPage title="Nature & Parks">
    <p className="text-sm text-muted-foreground mb-5">National parks, trails, waterways, and outdoor recreation.</p>
    <div className="space-y-3">
      {spots.map((s) => (
        <div key={s.name} className="p-4 rounded-2xl bg-card border shadow-sm flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-aura-success/10 flex items-center justify-center shrink-0">
            <s.icon className="w-5 h-5 text-aura-success" />
          </div>
          <div>
            <h3 className="font-display font-semibold">{s.name}</h3>
            <span className="text-xs text-muted-foreground">{s.type}</span>
            <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default NatureParksPage;
