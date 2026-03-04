import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  { title: "Michelin Star", year: "2024", org: "Michelin Guide", icon: Star, desc: "Recognized for exceptional cuisine and consistency" },
  { title: "Best Italian Restaurant", year: "2024", org: "James Beard Foundation", icon: Trophy, desc: "Northeast regional winner" },
  { title: "Wine Spectator Award", year: "2023", org: "Wine Spectator", icon: Award, desc: "Grand Award for outstanding wine program" },
  { title: "OpenTable Diners' Choice", year: "2024", org: "OpenTable", icon: Star, desc: "Top 50 restaurants in New York City" },
  { title: "AAA Four Diamond", year: "2023", org: "AAA", icon: Award, desc: "Distinguished fine dining establishment" },
  { title: "Zagat Top Rated", year: "2024", org: "Zagat", icon: Trophy, desc: "29/30 food rating" },
  { title: "Best Chef: Northeast", year: "2022", org: "James Beard Foundation", icon: Award, desc: "Chef Marco Bellini" },
  { title: "Forbes Travel Guide", year: "2024", org: "Forbes", icon: Star, desc: "Four-Star restaurant rating" },
];

const AwardsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Awards & Recognition</h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {awards.map((award, i) => (
          <motion.div key={award.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="p-4 rounded-2xl bg-card border flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <award.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-sm">{award.title}</h3>
              <p className="text-xs text-muted-foreground">{award.org} · {award.year}</p>
              <p className="text-xs text-muted-foreground mt-1">{award.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-8" />
    </div>
  );
};

export default AwardsPage;
