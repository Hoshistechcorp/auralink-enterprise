import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  QrCode, Gamepad2, Heart, Share2, BarChart3, Shield, Users2, Megaphone,
  MapPin, CreditCard, Star, Sparkles, ArrowRight,
  Smartphone, ChevronRight, Play,
  UtensilsCrossed, Hotel, Wine, Coffee, Store, Salad,
  Globe, MessageSquare, ImageIcon, Utensils, UserPlus,
  Link, Trophy, CalendarDays, ChefHat, Handshake,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sun, Moon } from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import { toast } from "sonner";

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Hotel, label: "Hotels" },
  { icon: Wine, label: "Bars & Lounges" },
  { icon: Coffee, label: "Cafés" },
  { icon: Salad, label: "Fast Casual" },
  { icon: Store, label: "Retail" },
];

const capabilities = [
  { icon: Link, title: "Microsite", desc: "Your entire brand in one beautiful link" },
  { icon: QrCode, title: "Smart QR", desc: "One scan opens your entire world" },
  { icon: ChefHat, title: "Digital Menu", desc: "Always up-to-date, always stunning" },
  { icon: Gamepad2, title: "Gamification", desc: "Spin-to-win, scratch cards, instant rewards" },
  { icon: Heart, title: "Loyalty", desc: "Points & tiers that drive repeat visits" },
  { icon: Share2, title: "Referrals", desc: "Turn happy guests into growth engines" },
  { icon: Star, title: "Reviews", desc: "Collect & showcase real guest feedback" },
  { icon: Shield, title: "Reputation", desc: "Own your reviews across every platform" },
  { icon: BarChart3, title: "Analytics", desc: "Know exactly what's working" },
  { icon: Handshake, title: "Affiliates", desc: "Let partners earn while you grow" },
  { icon: Megaphone, title: "Influencers", desc: "Find, manage, measure creator ROI" },
  { icon: MapPin, title: "Multi-Location", desc: "Every venue, one dashboard" },
  { icon: CreditCard, title: "Card Studio", desc: "Digital cards with NFC & QR" },
  { icon: ImageIcon, title: "Gallery", desc: "Showcase your space beautifully" },
  { icon: MessageSquare, title: "AI Concierge", desc: "Smart guest assistance, 24/7" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Index = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;
    toast.success("You're on the list! We'll be in touch soon.");
    setWaitlistEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* ─── Nav ─── */}
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
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-1.5 rounded-xl border border-border text-[13px] font-semibold hover:bg-muted transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/onboarding")}
              className="px-4 py-1.5 rounded-xl bg-primary text-primary-foreground text-[13px] font-semibold hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/4 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
              Growth infrastructure
              <br />
              <span className="text-primary">for hospitality.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              One link gives your restaurant, hotel, or café a microsite with loyalty, 
              gamification, referrals, and real-time analytics — ready in minutes.
            </p>

            {/* Industry tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {industries.map((ind) => (
                <span key={ind.label} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  <ind.icon className="w-3 h-3" />
                  {ind.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="#waitlist"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => navigate("/microsite")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl border border-border bg-card font-semibold text-[15px] hover:bg-muted transition-colors"
              >
                <Smartphone className="w-4 h-4" />
                View Public Page
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Who it's for ─── */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Built for the places people love.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Whether you run a single café or a hotel chain — AuraLink turns every guest interaction into measurable growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "Restaurants & Cafés",
                desc: "Turn first-time diners into regulars. Loyalty points, spin-to-win games, and referral rewards — all from one QR scan at the table.",
                icon: UtensilsCrossed,
              },
              {
                title: "Hotels & Resorts",
                desc: "A digital concierge that drives direct bookings. Guests discover your amenities, leave reviews, and share with friends — no app download needed.",
                icon: Hotel,
              },
              {
                title: "Bars, Lounges & Nightlife",
                desc: "Fill seats on slow nights with targeted gamification. Track what promos actually work with real-time analytics across every location.",
                icon: Wine,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="p-5 rounded-2xl bg-card border border-border"
              >
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-16 sm:py-20 bg-muted/20 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              15 modules. One link.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Every tool you need between the scan and the sale.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {capabilities.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fade}
                className="p-4 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-200"
              >
                <f.icon className="w-4 h-4 text-primary mb-2" />
                <h3 className="text-[13px] font-semibold">{f.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Video Demo ─── */}
      <section id="demo-video" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">See it in action.</h2>
            <p className="mt-2 text-muted-foreground text-sm">Watch how AuraLink works for a real restaurant.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            {showVideo ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="AuraLink Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">Click to play demo</p>
              </div>
            )}
          </motion.div>
          <p className="text-center text-[11px] text-muted-foreground mt-3">
            Replace this with your YouTube video URL in the code when ready.
          </p>
        </div>
      </section>

      {/* ─── Waitlist + Book a Demo ─── */}
      <section id="waitlist" className="py-16 sm:py-20 bg-muted/20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
            <div className="relative max-w-lg mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Be first in line.
              </h2>
              <p className="mt-2 text-primary-foreground/70 text-sm">
                We're onboarding restaurants, hotels, and cafés for early access. Get in before everyone else.
              </p>

              <form onSubmit={handleWaitlist} className="mt-6 flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="text-primary-foreground/50 text-xs">or</span>
                <a
                  href="mailto:hello@ibloov.com?subject=AuraLink Demo Request"
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl border border-primary-foreground/20 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Book a Demo
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-5 w-auto rounded-md" />
            <span className="text-xs text-muted-foreground">AuraLink</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <button onClick={() => navigate("/microsite")} className="hover:text-foreground transition-colors">Demo</button>
            <button onClick={() => navigate("/dashboard")} className="hover:text-foreground transition-colors">Sign In</button>
          </div>
          <p className="text-[11px] text-muted-foreground">© 2026 iBloov Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
