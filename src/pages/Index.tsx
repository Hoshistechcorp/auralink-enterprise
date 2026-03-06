import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  QrCode, Gamepad2, Heart, Share2, BarChart3, Shield, Users2, Megaphone,
  MapPin, CreditCard, Star, Sparkles, ArrowRight, Check, LogIn,
  GraduationCap, Music2, Wallet, Camera, Trophy, Building,
  Smartphone, LayoutDashboard, ChevronRight,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sun, Moon } from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const ecosystemProducts = [
  { icon: Sparkles, name: "AuraLink", desc: "Microsites & engagement", color: "352 43% 32%" },
  { icon: GraduationCap, name: "iBloov Learning", desc: "Staff training", color: "210 70% 50%" },
  { icon: Music2, name: "VibesGigs", desc: "Talent marketplace", color: "280 60% 55%" },
  { icon: Wallet, name: "Flex-it", desc: "Smart payments", color: "152 60% 40%" },
  { icon: CreditCard, name: "SHPR", desc: "Flexible financing", color: "38 90% 55%" },
  { icon: Camera, name: "PicPop", desc: "Photo memories", color: "340 70% 55%" },
  { icon: Trophy, name: "Sportmate", desc: "Sports & fans", color: "120 50% 40%" },
  { icon: Users2, name: "TribeMint", desc: "Affiliate network", color: "25 85% 55%" },
  { icon: Building, name: "Municipal Nebula", desc: "City intelligence", color: "220 50% 45%" },
];

const capabilities = [
  { icon: QrCode, label: "Smart QR" },
  { icon: Gamepad2, label: "Gamification" },
  { icon: Heart, label: "Loyalty" },
  { icon: Share2, label: "Referrals" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Shield, label: "Reputation" },
  { icon: Users2, label: "Affiliates" },
  { icon: Megaphone, label: "Influencers" },
  { icon: MapPin, label: "Multi-Location" },
  { icon: CreditCard, label: "Card Studio" },
  { icon: Star, label: "Awards" },
  { icon: Sparkles, label: "15 Cards" },
];

const plans = [
  {
    name: "Spark",
    price: "Free",
    period: "",
    cards: "5 cards",
    features: ["QR codes", "Basic analytics", "1 location", "Community support"],
  },
  {
    name: "Maverick",
    price: "$49",
    period: "/mo",
    cards: "10 cards",
    features: ["Everything in Spark", "Gamification & loyalty", "Referral engine", "5 locations"],
    popular: true,
  },
  {
    name: "Supernova",
    price: "$149",
    period: "/mo",
    cards: "All 15 cards",
    features: ["Everything in Maverick", "Affiliates & influencers", "Reputation management", "Unlimited locations", "Priority support"],
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Index = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* ─── Nav ─── */}
      <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={ibloovLogo} alt="iBloov" className="h-8 w-auto rounded-lg" />
            <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
              <span className="text-foreground/30">|</span>
              <span className="font-medium text-foreground">AuraLink</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-muted-foreground">
            <a href="#capabilities" className="hover:text-foreground transition-colors">What it does</a>
            <a href="#ecosystem" className="hover:text-foreground transition-colors">Ecosystem</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleDark} className="p-2 rounded-xl hover:bg-muted transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <LogIn className="w-3.5 h-3.5" />
              Sign in
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-[13px] font-semibold hover:opacity-90 transition-opacity"
            >
              Start free
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-5">
              by iBloov
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight">
              Your customers
              <br />
              <span className="text-primary">keep coming back.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              One link. Fifteen cards. Loyalty, gamification, referrals, and analytics — 
              all wrapped in a beautiful microsite your brand deserves.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
              <button
                onClick={() => navigate("/microsite")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                <Smartphone className="w-5 h-5" />
                See it live
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl border border-border bg-card font-semibold text-[15px] hover:bg-muted transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                Open dashboard
              </button>
            </div>
          </motion.div>

          {/* Floating capability pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto"
          >
            {capabilities.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground"
              >
                <c.icon className="w-3 h-3 text-primary" />
                {c.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Social proof strip ─── */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: "10K+", label: "Businesses" },
              { val: "2.4M", label: "Monthly scans" },
              { val: "98%", label: "Retention" },
              { val: "4.9★", label: "Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-display font-bold text-foreground">{s.val}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What it does ─── */}
      <section id="capabilities" className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
              Everything between<br />the scan and the sale.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Twelve powerful modules. One dashboard. Zero friction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {[
              { icon: QrCode, title: "Smart QR", desc: "Dynamic codes with analytics & A/B testing" },
              { icon: Gamepad2, title: "Gamification", desc: "Spin wheels, scratch cards, freebie games" },
              { icon: Heart, title: "Loyalty", desc: "Points, tiers & rewards that stick" },
              { icon: Share2, title: "Referrals", desc: "Viral loops with automated rewards" },
              { icon: BarChart3, title: "Analytics", desc: "Real-time insights on every interaction" },
              { icon: Shield, title: "Reputation", desc: "Monitor Google, Yelp & TripAdvisor" },
              { icon: Users2, title: "Affiliates", desc: "Commission tracking built in" },
              { icon: Megaphone, title: "Influencers", desc: "Discover, manage & measure ROI" },
              { icon: MapPin, title: "Multi-Location", desc: "One dashboard for every venue" },
              { icon: CreditCard, title: "Card Studio", desc: "Digital cards with NFC & QR" },
              { icon: Star, title: "Awards", desc: "Showcase certifications & press" },
              { icon: Sparkles, title: "Microsite", desc: "15 modular cards, endlessly flexible" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fade}
                className="group p-4 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <f.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-sm font-semibold">{f.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Ecosystem ─── */}
      <section id="ecosystem" className="py-24 sm:py-32 bg-muted/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-16">
            <div className="lg:w-2/5 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <img src={ibloovLogo} alt="iBloov" className="h-10 w-auto rounded-xl" />
                <div>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold">Ecosystem</h2>
                  <p className="text-muted-foreground text-sm mt-1">Nine products. One login.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                AuraLink is one piece of the puzzle. Connect training, payments, talent, photos, 
                and city data — all sharing context, all under one roof.
              </p>
            </div>

            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ecosystemProducts.map((app, i) => (
                <motion.div
                  key={app.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `hsl(${app.color} / 0.1)` }}
                  >
                    <app.icon className="w-5 h-5" style={{ color: `hsl(${app.color})` }} />
                  </div>
                  <span className="text-sm font-semibold">{app.name}</span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">{app.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Live in five minutes.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {[
              { n: "01", title: "Claim your page", desc: "Pick your niche, add your brand, choose your cards." },
              { n: "02", title: "Turn on the engines", desc: "Activate loyalty, gamification, referrals — one click each." },
              { n: "03", title: "Watch it compound", desc: "Analytics, reputation, and growth on autopilot." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto font-display font-bold text-lg">
                  {s.n}
                </div>
                <h3 className="font-display font-semibold mt-4 text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section id="pricing" className="py-24 sm:py-32 bg-muted/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold">No surprises.</h2>
            <p className="mt-3 text-muted-foreground text-sm">Free to start. 14-day trial on every paid plan.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className={`relative p-6 rounded-2xl border transition-all ${
                  p.popular
                    ? "bg-primary text-primary-foreground border-primary ring-2 ring-primary/20"
                    : "bg-card border-border"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-widest">
                    Popular
                  </div>
                )}
                <div className="text-xs font-semibold uppercase tracking-wider opacity-70">{p.name}</div>
                <div className="flex items-baseline gap-0.5 mt-2">
                  <span className="text-4xl font-display font-bold">{p.price}</span>
                  {p.period && <span className="text-sm opacity-60">{p.period}</span>}
                </div>
                <div className="text-xs opacity-60 mt-1">{p.cards}</div>
                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className={`w-3.5 h-3.5 shrink-0 ${p.popular ? "opacity-70" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/dashboard")}
                  className={`w-full mt-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    p.popular
                      ? "bg-primary-foreground text-primary hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Get started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 sm:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/70" />
            <div className="relative">
              <img src={ibloovLogo} alt="iBloov" className="h-12 w-auto mx-auto mb-6 rounded-xl brightness-0 invert opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold">Ready when you are.</h2>
              <p className="mt-3 text-primary-foreground/70 max-w-md mx-auto">
                See exactly what your customers will see. No signup needed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                <button
                  onClick={() => navigate("/microsite")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
                >
                  <Smartphone className="w-5 h-5" />
                  View live demo
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-primary-foreground/20 font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Sign in or sign up
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-6 w-auto rounded-md" />
            <span className="text-xs text-muted-foreground">AuraLink by iBloov</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#capabilities" className="hover:text-foreground transition-colors">Features</a>
            <a href="#ecosystem" className="hover:text-foreground transition-colors">Ecosystem</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <button onClick={() => navigate("/microsite")} className="hover:text-foreground transition-colors">Demo</button>
          </div>
          <p className="text-[11px] text-muted-foreground">© 2026 iBloov Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
