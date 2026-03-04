import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { MapPin, Star, Clock } from "lucide-react";

const attractions = [
  { name: "Georgia Aquarium", type: "Aquarium", rating: 4.8, hours: "10am–9pm", desc: "World's largest aquarium with over 100,000 marine animals." },
  { name: "Martin Luther King Jr. National Historic Park", type: "Historic Site", rating: 4.9, hours: "9am–5pm", desc: "Birthplace and final resting place of Dr. Martin Luther King Jr." },
  { name: "World of Coca-Cola", type: "Museum", rating: 4.5, hours: "10am–5pm", desc: "Interactive museum dedicated to the history of Coca-Cola." },
  { name: "Atlanta Botanical Garden", type: "Park", rating: 4.7, hours: "9am–7pm", desc: "30-acre garden featuring themed gardens and a canopy walk." },
  { name: "Centennial Olympic Park", type: "Park", rating: 4.6, hours: "Open 24hrs", desc: "21-acre park built for the 1996 Summer Olympics." },
  { name: "High Museum of Art", type: "Museum", rating: 4.7, hours: "10am–5pm", desc: "Leading art museum with over 18,000 works." },
];

const AttractionsPage = () => (
  <DestinationSubPage title="Attractions">
    <p className="text-sm text-muted-foreground mb-5">Discover Atlanta's iconic museums, parks, and historic sites.</p>
    <div className="space-y-3">
      {attractions.map((a) => (
        <div key={a.name} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-semibold">{a.name}</h3>
              <span className="text-xs text-muted-foreground">{a.type}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-3.5 h-3.5 fill-aura-warning text-aura-warning" />
              <span className="font-medium">{a.rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" /> {a.hours}
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default AttractionsPage;
