import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  QrCode, Heart, Share2, Star, Sparkles, ArrowRight, Smartphone, ChevronRight,
  Play, Gift, Gamepad2, Trophy, Ticket, MapPin, CreditCard, Bell,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sun, Moon } from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import { toast } from "sonner";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";

const userBenefits = [
  { icon: Heart, title: "Loyalty Rewards", desc: "Earn points every visit and unlock exclusive perks at your favorite spots" },
  { icon: Gamepad2, title: "Fun Games", desc: "Spin-to-win, scratch cards, and instant prizes every time you dine" },
  { icon: Gift, title: "Gift Cards", desc: "Send digital gift cards to friends and family for any occasion" },
  { icon: Share2, title: "Refer & Earn", desc: "Share your favorite venues and earn rewards when friends visit" },
  { icon: Star, title: "Reviews", desc: "Share your experience and help others discover great places" },
  { icon: Trophy, title: "Achievements", desc: "Unlock badges and climb leaderboards as you explore" },
  { icon: Ticket, title: "Exclusive Events", desc: "Get early access to private dining, tastings, and special nights" },
  { icon: Bell, title: "Smart Alerts", desc: "Never miss a deal, event, or reward expiration" },
];

const howItWorks = [
  { step: "1", title: "Scan", desc: "Point your camera at any AuraLink QR code at a venue" },
  { step: "2", title: "Explore", desc: "Browse menus, events, reviews, and exclusive offers" },
  { step: "3", title: "Earn", desc: "Collect points, play games, and unlock rewards automatically" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const UserLanding = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const [waitlistEmail, setWaitlistEmail] = useState("");

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;
    toast.success("You're on the list! We'll notify you when we launch.");
    setWaitlistEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-7 w-auto rounded-lg" />
            <span className="text-foreground/30 hidden sm:inline">|</span>
            <span className="font-semibold text-sm hidden sm:inline">AuraLink</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggleDark} className="p-2 rounded-xl hover:bg-muted transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => navigate("/login")} className="px-4 py-1.5 rounded-xl border border-border text-[13px] font-semibold hover:bg-muted transition-colors">
              Sign In
            </button>
            <button onClick={() => navigate("/signup")} className="px-4 py-1.5 rounded-xl bg-primary text-primary-foreground text-[13px] font-semibold hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Segment Nav */}
      <LandingSegmentNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/4 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
              Your favorite spots,
              <br />
              <span className="text-primary">rewarded.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Scan, explore, and earn rewards at restaurants, hotels, and cafés. No app download needed — just point your camera and go.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <button onClick={() => navigate("/microsite")} className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                <Smartphone className="w-4 h-4" />
                Try a Demo
              </button>
              <a href="#how-it-works" className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl border border-border bg-card font-semibold text-[15px] hover:bg-muted transition-colors">
                How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">How it works</h2>
            <p className="mt-3 text-muted-foreground text-sm">Three steps to start earning rewards everywhere you go.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div key={item.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">{item.step}</div>
                <h3 className="font-semibold mt-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-muted/20 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Everything you get</h2>
            <p className="mt-3 text-muted-foreground text-sm">One scan unlocks a world of perks and experiences.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {userBenefits.map((f, i) => (
              <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} variants={fade} className="p-4 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-200">
                <f.icon className="w-4 h-4 text-primary mb-2" />
                <h3 className="text-[13px] font-semibold">{f.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
            <div className="relative max-w-lg mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-bold">Start earning rewards today.</h2>
              <p className="mt-2 text-primary-foreground/70 text-sm">Join thousands of guests already enjoying exclusive perks at their favorite venues.</p>
              <form onSubmit={handleWaitlist} className="mt-6 flex flex-col sm:flex-row gap-2">
                <input type="email" required placeholder="your@email.com" value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} className="flex-1 px-4 py-2.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30" />
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">Get Early Access</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-5 w-auto rounded-md" />
            <span className="text-xs text-muted-foreground">AuraLink</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <button onClick={() => navigate("/enterprise")} className="hover:text-foreground transition-colors">For Business</button>
            <button onClick={() => navigate("/tourism")} className="hover:text-foreground transition-colors">Tourism Boards</button>
            <button onClick={() => navigate("/login")} className="hover:text-foreground transition-colors">Sign In</button>
          </div>
          <p className="text-[11px] text-muted-foreground">© 2026 iBloov Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default UserLanding;
