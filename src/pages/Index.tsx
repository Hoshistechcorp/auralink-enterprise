import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Smartphone, LayoutDashboard, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-display font-bold text-primary">AuraLink</h1>
        </div>
        <p className="text-lg text-muted-foreground mb-2 font-display">Enterprise Microsite Platform</p>
        <p className="text-sm text-muted-foreground mb-10">
          Gamified business pages for restaurants, hotels, nightclubs & more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/microsite")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Smartphone className="w-4 h-4" />
            View Public Page
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-card border font-medium text-sm hover:bg-muted transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            Business Dashboard
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
