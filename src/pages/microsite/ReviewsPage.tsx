import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Plus, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

const distribution = [
  { stars: 5, pct: 72 },
  { stars: 4, pct: 18 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 1 },
];

const defaultReviews: Review[] = [
  { name: "Sarah M.", rating: 5, date: "2 days ago", text: "Absolutely incredible experience! The wagyu was perfectly cooked and the service was impeccable.", avatar: "SM" },
  { name: "James L.", rating: 4, date: "1 week ago", text: "Great food, beautiful ambiance. Wait time was a bit long but worth it.", avatar: "JL" },
  { name: "Maria G.", rating: 5, date: "2 weeks ago", text: "Best Italian restaurant in the city. The truffle arancini is a must-try!", avatar: "MG" },
];

const ReviewsPage = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [newText, setNewText] = useState("");

  const handleSubmit = () => {
    const trimmedName = newName.trim();
    const trimmedText = newText.trim();
    if (!trimmedName || !trimmedText || newRating === 0) {
      toast({ title: "Missing fields", description: "Please fill in your name, rating, and review." });
      return;
    }
    if (trimmedName.length > 50) {
      toast({ title: "Name too long", description: "Name must be under 50 characters." });
      return;
    }
    if (trimmedText.length > 500) {
      toast({ title: "Review too long", description: "Review must be under 500 characters." });
      return;
    }
    const initials = trimmedName.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    const review: Review = {
      name: trimmedName,
      rating: newRating,
      date: "Just now",
      text: trimmedText,
      avatar: initials,
    };
    setReviews([review, ...reviews]);
    setShowModal(false);
    setNewName("");
    setNewRating(0);
    setNewText("");
    toast({ title: "Thank you! ⭐", description: "Your review has been submitted." });
  };

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold flex-1">Reviews</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
        >
          <Plus className="w-3.5 h-3.5" />
          Write Review
        </button>
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
        <AnimatePresence>
          {reviews.map((review, i) => (
            <motion.div
              key={`${review.name}-${review.date}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
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
        </AnimatePresence>
      </div>
      <div className="h-8" />

      {/* Write Review Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-[390px] rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display">Write a Review</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            {/* Star Rating */}
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Your Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setNewRating(s)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 transition-colors ${
                        s <= (hoverRating || newRating)
                          ? "fill-aura-warning text-aura-warning"
                          : "text-muted"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Name</label>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. John D."
                maxLength={50}
                className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Review Text */}
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Your Review</label>
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Tell us about your experience..."
                maxLength={500}
                rows={4}
                className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              />
              <p className="text-[10px] text-muted-foreground text-right mt-1">{newText.length}/500</p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold"
            >
              <Send className="w-4 h-4" />
              Submit Review
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReviewsPage;
