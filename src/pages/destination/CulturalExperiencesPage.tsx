import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Palette, Music, Theater, Brush } from "lucide-react";

const experiences = [
  { icon: Palette, name: "High Museum of Art", desc: "18,000+ works spanning antiquity to contemporary, including a renowned photography collection." },
  { icon: Theater, name: "Fox Theatre", desc: "Historic 1929 movie palace hosting Broadway shows, concerts, and cultural events." },
  { icon: Music, name: "National Center for Civil and Human Rights", desc: "Immersive museum connecting the American Civil Rights Movement to today's global human rights movements." },
  { icon: Brush, name: "Krog Street Tunnel", desc: "Ever-changing street art gallery that represents Atlanta's vibrant creative underground." },
  { icon: Palette, name: "Atlanta Contemporary", desc: "Free contemporary art center featuring rotating exhibitions and artist studios." },
  { icon: Music, name: "Trap Music Museum", desc: "Interactive hip-hop museum celebrating Atlanta's influence on modern music culture." },
];

const CulturalExperiencesPage = () => (
  <DestinationSubPage title="Cultural Experiences">
    <p className="text-sm text-muted-foreground mb-5">Museums, galleries, performing arts, and cultural tours.</p>
    <div className="space-y-3">
      {experiences.map((e) => (
        <div key={e.name} className="p-4 rounded-2xl bg-card border shadow-sm flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <e.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold">{e.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default CulturalExperiencesPage;
