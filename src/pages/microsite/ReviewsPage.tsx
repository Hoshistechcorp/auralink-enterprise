import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
import { motion } from "framer-motion";

const distribution = [
  { stars: 5, pct: 72 },
  { stars: 4, pct: 18 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 1 },
];

const reviews = [
  { name: "Sarah M.", rating: 5, date: "2 days ago", text: "Absolutely incredible experience! The wagyu was perfectly cooked and the service was impeccable.", avatar: "SM" },
  { name: "James L.", rating: 4, date: "1 week ago", text: "Great food, beautiful ambiance. Wait time was a bit long but worth it.", avatar: "JL" },
  { name: "Maria G.", rating: 5, date: "2 weeks ago", text: "Best Italian restaurant in the city. The truffle arancini is a must-try!", avatar: "MG" },
];

const ReviewsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Reviews</h1>
      </div>

      {/* Summary */}
      <div className="px-4 mt-4 flex gap-6">
        <div className="text-center">
          <div className="text-4xl font-display font-bold">4.8</div>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className={`w-3.5 h-3.5 ${s <= 4 ? "fill-aura-warning text-aura-warning" : "text-aura-warning"}`} />
            ))}
          </div>
          <div className="text-xs text-muted-foreground mt-1">2,847 reviews</div>
        </div>
        <div className="flex-1 space-y-1.5">
          {distribution.map((d) => (
            <div key={d.stars} className="flex items-center gap-2 text-xs">
              <span className="w-3">{d.stars}</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-aura-warning rounded-full" style={{ width: `${d.pct}%` }} />
              </div>
              <span className="w-8 text-right text-muted-foreground">{d.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 px-4 mt-4 overflow-x-auto no-scrollbar">
        {["Most Recent", "Highest", "Lowest", "With Photos"].map((f, i) => (
          <button
            key={f}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
              i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Reviews */}
      <div className="px-4 mt-4 space-y-3">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 rounded-2xl bg-card border"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">{review.avatar}</div>
              <div className="flex-1">
                <div className="text-sm font-medium">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.date}</div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-3 h-3 ${s <= review.rating ? "fill-aura-warning text-aura-warning" : "text-muted"}`} />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{review.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="h-8" />
    </div>
  );
};

export default ReviewsPage;
