import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  { name: "Atlanta Jazz Festival", date: "May 24–26, 2026", location: "Piedmont Park", attendees: "250K+", desc: "One of the largest free jazz festivals in the country." },
  { name: "Dragon Con", date: "Sep 4–7, 2026", location: "Downtown Hotels", attendees: "85K+", desc: "Multi-genre convention celebrating sci-fi, fantasy, and pop culture." },
  { name: "Music Midtown", date: "Sep 19–20, 2026", location: "Piedmont Park", attendees: "100K+", desc: "Major music festival featuring top artists across genres." },
  { name: "Atlanta Food & Wine Festival", date: "Jun 5–8, 2026", location: "Midtown", attendees: "20K+", desc: "Celebrating Southern food, drink, and culinary traditions." },
  { name: "Peachtree Road Race", date: "Jul 4, 2026", location: "Peachtree Road", attendees: "60K runners", desc: "World's largest 10K road race, a July 4th tradition since 1970." },
];

const EventsFestivalsPage = () => (
  <DestinationSubPage title="Events & Festivals">
    <p className="text-sm text-muted-foreground mb-5">Festivals, concerts, sports, and cultural celebrations happening in Atlanta.</p>
    <div className="space-y-3">
      {events.map((e) => (
        <div key={e.name} className="p-4 rounded-2xl bg-card border shadow-sm">
          <h3 className="font-display font-semibold">{e.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{e.date}</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{e.location}</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" />{e.attendees}</span>
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default EventsFestivalsPage;
