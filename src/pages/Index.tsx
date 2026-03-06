import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smartphone, LayoutDashboard, Sparkles, QrCode, BarChart3, Gamepad2,
  Heart, Shield, Share2, MapPin, CreditCard, Star, Users2, Megaphone,
  ArrowRight, CheckCircle2, LogIn, UserPlus, ChevronRight,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sun, Moon } from "lucide-react";

const features = [
  { icon: QrCode, title: "Smart QR Codes", desc: "Dynamic QR codes with analytics, A/B testing & branded designs" },
  { icon: Gamepad2, title: "Gamification", desc: "Spin wheels, scratch cards & freebie games to boost engagement" },
  { icon: Heart, title: "Loyalty Programs", desc: "Points, tiers & rewards that keep customers coming back" },
  { icon: Share2, title: "Referral Engine", desc: "Viral referral links with automated reward distribution" },
  { icon: BarChart3, title: "Deep Analytics", desc: "Real-time insights on traffic, engagement & conversions" },
  { icon: Shield, title: "Reputation Guard", desc: "Monitor & manage reviews across Google, Yelp & more" },
  { icon: Users2, title: "Affiliate Network", desc: "Built-in affiliate tracking with commission management" },
  { icon: Megaphone, title: "Influencer Hub", desc: "Discover, manage & track influencer partnerships" },
  { icon: MapPin, title: "Multi-Location", desc: "Manage all locations from a single unified dashboard" },
  { icon: CreditCard, title: "Card Studio", desc: "Design digital business cards with NFC & QR integration" },
  { icon: Star, title: "Awards & Badges", desc: "Showcase achievements, certifications & press mentions" },
  { icon: Sparkles, title: "15-Card Microsite", desc: "Modular public pages with menu, gallery, events & more" },
];

const tiers = [
  { name: "Spark", price: "Free", cards: "5 cards", features: ["QR Codes", "Basic Analytics", "1 Location", "Community Support"] },
  { name: "Maverick", price: "$49/mo", cards: "10 cards", features: ["Everything in Spark", "Gamification", "Loyalty", "Referrals", "5 Locations"], highlighted: true },
  { name: "Supernova", price: "$149/mo", cards: "All 15 cards", features: ["Everything in Maverick", "Affiliates", "Influencers", "Reputation", "Unlimited Locations", "Priority Support"] },
];

const stats = [
  { value: "10K+", label: "Active Businesses" },
  { value: "2.4M", label: "QR Scans / Month" },
  { value: "98%", label: "Customer Retention" },
  { value: "4.9★", label: "Average Rating" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }),
};

const Index = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-bold text-primary">AuraLink</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={toggleDark} className="p-2 rounded-xl hover:bg-muted transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Get Started Free</span>
              <span className="sm:hidden">Sign Up</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise Microsite Platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              Turn Every Customer Into a{" "}
              <span className="text-primary">Loyal Ambassador</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Gamified microsites with QR codes, loyalty rewards, referrals & analytics —
              built for restaurants, hotels, nightclubs & retail brands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
              <button
                onClick={() => navigate("/microsite")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Smartphone className="w-5 h-5" />
                View Live Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-border bg-card font-medium hover:bg-muted transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                Open Dashboard
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-2xl bg-card border border-border">
                <div className="text-2xl sm:text-3xl font-display font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Everything You Need to Grow</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A complete suite of tools to attract, engage, and retain customers at scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Launch in 3 Steps</h2>
            <p className="mt-3 text-muted-foreground">From sign-up to live in under 5 minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Create Your Page", desc: "Pick your business type, customize your 15-card microsite, and add your branding." },
              { step: "02", title: "Activate Engagement", desc: "Turn on loyalty, gamification, referrals & QR codes to drive repeat visits." },
              { step: "03", title: "Grow & Analyze", desc: "Track performance, manage reputation, and scale across multiple locations." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto text-lg font-display font-bold">
                  {s.step}
                </div>
                <h3 className="font-display font-semibold text-lg mt-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Simple, Transparent Pricing</h2>
            <p className="mt-3 text-muted-foreground">Start free. Upgrade as you grow. 14-day Big Bang trial on all plans.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative p-6 rounded-2xl border transition-all ${
                  t.highlighted
                    ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.02]"
                    : "bg-card border-border"
                }`}
              >
                {t.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="text-sm font-medium opacity-80">{t.name}</div>
                <div className="text-3xl font-display font-bold mt-1">{t.price}</div>
                <div className="text-xs opacity-70 mt-1">{t.cards}</div>
                <ul className="mt-5 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlighted ? "text-primary-foreground/80" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/dashboard")}
                  className={`w-full mt-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    t.highlighted
                      ? "bg-primary-foreground text-primary hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
            <div className="relative">
              <Sparkles className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold">See It in Action</h2>
              <p className="mt-3 text-primary-foreground/80 max-w-lg mx-auto">
                Explore our live demo microsite — a fully functional restaurant page with all 15 cards, 
                gamification, loyalty rewards, and more.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                <button
                  onClick={() => navigate("/microsite")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-primary-foreground text-primary font-medium hover:opacity-90 transition-opacity"
                >
                  <Smartphone className="w-5 h-5" />
                  View Public Page
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-primary-foreground/30 font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Business Dashboard
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-display font-bold text-primary">AuraLink</span>
              <span className="text-xs text-muted-foreground">Enterprise Platform</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
              <button onClick={() => navigate("/microsite")} className="hover:text-foreground transition-colors">Demo</button>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 AuraLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
