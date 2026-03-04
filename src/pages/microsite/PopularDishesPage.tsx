import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const dishes = [
  { name: "Wagyu Ribeye", orders: 1842, rating: 4.9, price: 89, tag: "Most Ordered" },
  { name: "Burrata Caprese", orders: 1567, rating: 4.8, price: 18, tag: "Fan Favorite" },
  { name: "Osso Buco", orders: 1234, rating: 4.9, price: 48, tag: "Award Winner" },
  { name: "Truffle Arancini", orders: 1198, rating: 4.7, price: 16, tag: "Trending" },
  { name: "Tiramisu", orders: 1087, rating: 4.8, price: 14, tag: "Top Dessert" },
  { name: "Tuna Tartare", orders: 956, rating: 4.7, price: 22, tag: "Chef's Pick" },
  { name: "Branzino", orders: 891, rating: 4.6, price: 42, tag: "Healthy Choice" },
  { name: "Panna Cotta", orders: 845, rating: 4.5, price: 12, tag: "Classic" },
  { name: "Lobster Ravioli", orders: 812, rating: 4.8, price: 36, tag: "Signature" },
  { name: "Carpaccio di Manzo", orders: 756, rating: 4.6, price: 20, tag: "Starter Star" },
  { name: "Risotto al Funghi", orders: 723, rating: 4.7, price: 28, tag: "Seasonal" },
  { name: "Affogato", orders: 698, rating: 4.5, price: 10, tag: "Sweet Finish" },
];

const PopularDishesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Popular Dishes</h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {dishes.map((dish, i) => (
          <motion.div key={dish.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="flex items-center gap-3 p-3 rounded-2xl bg-card border">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{dish.name}</span>
                <span className="aura-badge aura-badge-gold text-[10px] flex items-center gap-0.5">
                  <Flame className="w-2.5 h-2.5" />{dish.tag}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground">
                <span><ThumbsUp className="w-3 h-3 inline mr-0.5" />{dish.orders.toLocaleString()} orders</span>
                <span>⭐ {dish.rating}</span>
              </div>
            </div>
            <span className="text-sm font-semibold text-primary">${dish.price}</span>
          </motion.div>
        ))}
      </div>
      <div className="h-8" />
    </div>
  );
};

export default PopularDishesPage;
