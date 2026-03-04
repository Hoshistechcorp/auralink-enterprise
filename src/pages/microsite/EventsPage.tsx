import { useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  { title: "Wine & Dine Tasting Night", date: "Mar 15, 2026", time: "7:00 PM", location: "The Cellar", desc: "Explore 12 premium Italian wines paired with chef-curated bites.", tag: "Sold Out" },
  { title: "Jazz & Supper Club", date: "Mar 22, 2026", time: "8:00 PM", location: "Grand Terrace", desc: "Live jazz trio with a 4-course prix fixe dinner.", tag: "Few Spots Left" },
  { title: "Truffle Season Launch", date: "Apr 1, 2026", time: "6:30 PM", location: "Main Dining", desc: "Celebrate the arrival of white truffles with an exclusive tasting menu.", tag: "New" },
  { title: "Easter Brunch", date: "Apr 5, 2026", time: "10:30 AM", location: "Grand Terrace", desc: "Family-style brunch with live entertainment and egg hunt for kids.", tag: "Family" },
  { title: "Pasta Masterclass", date: "Apr 12, 2026", time: "2:00 PM", location: "Kitchen Studio", desc: "Hands-on class with Chef Marco — learn to make fresh tagliatelle.", tag: "Interactive" },
];

const tagColors: Record<string, string> = {
  "Sold Out": "aura-badge-danger",
  "Few Spots Left": "aura-badge-warning",
  "New": "aura-badge-success",
  "Family": "aura-badge-info",
  "Interactive": "aura-badge-gold",
};

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Events</h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {events.map((event, i) => (
          <motion.div key={event.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="p-4 rounded-2xl bg-card border space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-sm">{event.title}</h3>
              <span className={`aura-badge ${tagColors[event.tag] || "aura-badge-info"} text-[10px] shrink-0`}>{event.tag}</span>
            </div>
            <p className="text-xs text-muted-foreground">{event.desc}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{event.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{event.time}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
            </div>
            {event.tag !== "Sold Out" && (
              <button className="w-full mt-1 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">
                Reserve Spot
              </button>
            )}
          </motion.div>
        ))}
      </div>
      <div className="h-8" />
    </div>
  );
};

export default EventsPage;
