import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

const staff = [
  { name: "Marco Rossi", role: "Executive Chef", bio: "Trained in Florence, 20+ years of culinary mastery.", rating: 4.9, initials: "MR" },
  { name: "Sophia Chen", role: "Head Sommelier", bio: "Award-winning wine expert with an encyclopedic palate.", rating: 4.8, initials: "SC" },
  { name: "James Wright", role: "General Manager", bio: "Ensuring every guest feels like family since 2005.", rating: 4.7, initials: "JW" },
  { name: "Elena Volkov", role: "Pastry Chef", bio: "Creates edible art that delights every sense.", rating: 4.9, initials: "EV" },
];

const StaffPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Our Team</h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {staff.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-3 p-4 rounded-2xl bg-card border"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-lg font-display font-bold text-primary shrink-0">
              {member.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">{member.name}</div>
              <div className="text-xs text-secondary font-medium">{member.role}</div>
              <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-aura-warning text-aura-warning" />
                  <span className="text-xs font-medium">{member.rating}</span>
                </div>
                <button className="flex items-center gap-1 text-xs text-primary font-medium">
                  <Heart className="w-3 h-3" />
                  Tip
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-8" />
    </div>
  );
};

export default StaffPage;
