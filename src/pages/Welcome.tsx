import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, ClipboardEdit, Layers, Settings, QrCode,
  ArrowRight, Lightbulb, CheckCircle2 } from
"lucide-react";

const setupSteps = [
{
  icon: ClipboardEdit,
  title: "Set up your Admin Panel",
  desc: "Add your business hours, menu, gallery, and staff info.",
  link: "/dashboard/admin"
},
{
  icon: Layers,
  title: "Customize your Card Studio",
  desc: "Drag, reorder, and toggle the 15 cards guests see on your microsite.",
  link: "/dashboard/cards"
},
{
  icon: QrCode,
  title: "Generate your first QR code",
  desc: "Print it, stick it on tables, and watch scans roll in.",
  link: "/dashboard/qr"
},
{
  icon: Settings,
  title: "Complete your Settings",
  desc: "Profile, notifications, appearance, and reservation link.",
  link: "/dashboard/settings"
}];


const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl text-center">
        
        {/* Celebration */}
        







        

        <h1 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
          Welcome to <span className="text-primary">AuraLink</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
          Your dashboard is ready. Here's a quick guide to get the most out of your platform.
        </p>

        {/* Setup guide */}
        <div className="mt-8 space-y-3 text-left">
          {setupSteps.map((s, i) =>
          <motion.button
            key={s.title}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            onClick={() => navigate(s.link)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all group">
            
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.button>
          )}
        </div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-muted/50 border text-left">
          
          <Lightbulb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Tip:</strong> You can always update everything from{" "}
            <button onClick={() => navigate("/dashboard/settings")} className="text-primary font-medium hover:underline">
              Settings
            </button>{" "}
            — including the onboarding details you skipped.
          </p>
        </motion.div>

        {/* Go to dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8">
          
          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            
            Go to Dashboard
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </div>);

};

export default Welcome;