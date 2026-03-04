import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Megaphone, Users, Instagram, Youtube } from "lucide-react";

const creators = [
  { name: "@ATLFoodie", platform: "Instagram", followers: "285K", niche: "Food & Restaurants", desc: "Atlanta's go-to food critic covering hidden gems and new openings." },
  { name: "@ExploreATL", platform: "YouTube", followers: "120K", niche: "Travel & Lifestyle", desc: "Cinematic travel vlogs showcasing Atlanta's culture, food, and nightlife." },
  { name: "@PeachStateAdventures", platform: "Instagram", followers: "95K", niche: "Outdoor & Nature", desc: "Hiking, kayaking, and outdoor adventures in and around Atlanta." },
  { name: "@ATLNightOwl", platform: "TikTok", followers: "450K", niche: "Nightlife & Events", desc: "What's happening this weekend in Atlanta — clubs, events, and pop-ups." },
  { name: "@SouthernCultureGuide", platform: "Blog", followers: "60K", niche: "Culture & History", desc: "Deep dives into Atlanta's civil rights history and cultural landmarks." },
];

const LocalCreatorsPage = () => (
  <DestinationSubPage title="Local Creators">
    <p className="text-sm text-muted-foreground mb-2">Influencers and creators promoting Atlanta.</p>
    <p className="text-xs text-primary mb-5">Connected to TribeMint affiliate system</p>
    <div className="space-y-3">
      {creators.map((c) => (
        <div key={c.name} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold">{c.name}</h3>
            <span className="text-xs text-muted-foreground">{c.followers} followers</span>
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{c.platform}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{c.niche}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default LocalCreatorsPage;
