import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flame, Leaf, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Appetizers",
    items: [
      { name: "Burrata Caprese", desc: "Heirloom tomatoes, basil oil, aged balsamic", price: 18, badges: ["Popular"], tried: true },
      { name: "Tuna Tartare", desc: "Avocado, sesame, wonton crisps", price: 22, badges: ["Chef's Pick"], tried: false },
      { name: "Truffle Arancini", desc: "Black truffle, fontina, marinara", price: 16, badges: [], tried: true },
    ],
  },
  {
    title: "Steaks & Mains",
    items: [
      { name: "Wagyu Ribeye", desc: "12oz A5 Japanese wagyu, bone marrow butter", price: 89, badges: ["Signature"], tried: true },
      { name: "Branzino", desc: "Pan-seared, lemon caper butter, haricots verts", price: 42, badges: ["Healthy"], tried: false },
      { name: "Osso Buco", desc: "Braised veal shank, gremolata, saffron risotto", price: 48, badges: ["Award Winner"], tried: true },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Tiramisu", desc: "Classic espresso-soaked, mascarpone cream", price: 14, badges: ["Popular"], tried: false },
      { name: "Panna Cotta", desc: "Vanilla bean, seasonal berry compote", price: 12, badges: [], tried: false },
    ],
  },
];

const totalSignature = 12;
const triedCount = 4;

const getBadgeIcon = (badge: string) => {
  switch (badge) {
    case "Popular": return <Flame className="w-3 h-3" />;
    case "Healthy": return <Leaf className="w-3 h-3" />;
    case "Award Winner": case "Chef's Pick": case "Signature": return <Award className="w-3 h-3" />;
    default: return null;
  }
};

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Menu</h1>
      </div>

      {/* Gamification */}
      <div className="mx-4 mt-4 p-3 rounded-2xl bg-primary/5 border border-primary/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">🍽️ Dish Explorer</span>
          <span className="text-xs text-muted-foreground">{triedCount}/{totalSignature} signature dishes</span>
        </div>
        <Progress value={(triedCount / totalSignature) * 100} className="h-2" />
      </div>

      {/* Menu Sections */}
      {menuSections.map((section, si) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: si * 0.1 }}
          className="px-4 mt-6"
        >
          <h2 className="aura-section-title mb-3">{section.title}</h2>
          <div className="space-y-3">
            {section.items.map((item) => (
              <div key={item.name} className="flex gap-3 p-3 rounded-2xl bg-card shadow-sm border">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{item.name}</span>
                    {item.tried && <span className="text-xs text-aura-success">✓ Tried</span>}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.desc}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    {item.badges.map((badge) => (
                      <span key={badge} className="aura-badge aura-badge-gold flex items-center gap-1">
                        {getBadgeIcon(badge)}
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm font-semibold text-primary">${item.price}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      <div className="h-8" />
    </div>
  );
};

export default MenuPage;
