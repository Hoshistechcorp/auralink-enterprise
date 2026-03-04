import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Calendar, Wine, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  { name: "The Cellar", capacity: "8–12 guests", desc: "Intimate wine cellar setting with curated tasting menus", icon: Wine },
  { name: "Grand Terrace", capacity: "20–50 guests", desc: "Open-air rooftop with panoramic city views", icon: Sparkles },
  { name: "Salon Privé", capacity: "12–24 guests", desc: "Elegant private room with custom AV setup", icon: Users },
];

const PrivateDiningPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Private Dining</h1>
      </div>

      <div className="px-4 mt-4 space-y-4">
        <p className="text-sm text-muted-foreground">Host your next celebration in one of our exclusive private dining spaces.</p>
        {rooms.map((room, i) => (
          <motion.div key={room.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-4 rounded-2xl bg-card border space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                <room.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm">{room.name}</h3>
                <span className="text-xs text-muted-foreground">{room.capacity}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{room.desc}</p>
            <button className="w-full mt-2 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">
              <Calendar className="w-3.5 h-3.5 inline mr-1.5" />Inquire Now
            </button>
          </motion.div>
        ))}
      </div>
      <div className="h-8" />
    </div>
  );
};

export default PrivateDiningPage;
