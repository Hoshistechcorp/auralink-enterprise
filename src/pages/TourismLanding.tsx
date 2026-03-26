import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe, MapPin, BarChart3, ArrowRight, ChevronRight, Users2, Megaphone,
  TrendingUp, Map, Compass, Camera, CalendarDays, Landmark, Building2, PieChart,
} from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Sun, Moon } from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import { toast } from "sonner";
import LandingSegmentNav from "@/components/aura/LandingSegmentNav";

const tourismCapabilities = [
  { icon: Globe, title: "Destination Portal", desc: "A single link showcasing every venue, attraction, and experience in your destination" },
  { icon: MapPin, title: "Interactive Maps", desc: "Let visitors discover restaurants, hotels, and attractions with smart mapping" },
  { icon: BarChart3, title: "Visitor Analytics", desc: "Track visitor behavior, popular spots, and tourism trends in real-time" },
  { icon: Users2, title: "Venue Network", desc: "Onboard and manage all hospitality venues in your destination from one dashboard" },
  { icon: TrendingUp, title: "Economic Impact", desc: "Measure tourism revenue, spending patterns, and growth metrics" },
  { icon: Megaphone, title: "Campaign Manager", desc: "Run destination marketing campaigns with trackable QR codes and links" },
  { icon: CalendarDays, title: "Event Calendar", desc: "Centralized events across all venues — festivals, markets, concerts" },
  { icon: Camera, title: "Visual Storytelling", desc: "Curate galleries and visitor stories that showcase your destination" },
  { icon: PieChart, title: "Reporting Suite", desc: "Generate board-ready reports on tourism KPIs and performance" },
  { icon: Compass, title: "Itinerary Builder", desc: "Help visitors plan multi-day trips with curated venue recommendations" },
  { icon: Landmark, title: "Heritage & Culture", desc: "Spotlight cultural landmarks, local cuisine, and authentic experiences" },
  { icon: Building2, title: "Stakeholder Portal", desc: "Give government bodies and sponsors visibility into tourism metrics" },
];

const useCases = [
  {
    title: "City & Regional Tourism Boards",
    desc: "Unite every restaurant, hotel, and attraction under one digital destination. Track visitor engagement and demonstrate ROI to stakeholders.",
    icon: Building2,
  },
  {
    title: "Convention & Visitors Bureaus",
    desc: "Equip convention attendees with a scannable guide to local dining, nightlife, and experiences — driving spending to your member businesses.",
    icon: Compass,
  },
  {
    title: "Destination Marketing Orgs",
    desc: "Run measurable campaigns with QR-powered landing pages. See exactly how many visitors discovered venues through your promotions.",
    icon: TrendingUp,
  },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const TourismLanding = () => {
  const navigate = useNavigate();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const [waitlistEmail, setWaitlistEmail] = useState("");

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;
    toast.success("Thank you! Our tourism team will reach out shortly.");
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
              Contact Sales
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
              Power your destination
              <br />
              <span className="text-primary">with data.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Give every venue in your destination a digital presence — then measure visitor engagement, spending, and satisfaction from one dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-[15px] hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#capabilities" className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl border border-border bg-card font-semibold text-[15px] hover:bg-muted transition-colors">
                See Capabilities
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Built for tourism leadership.</h2>
            <p className="mt-3 text-muted-foreground text-sm">From city boards to national tourism organizations — AuraLink scales with your destination.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {useCases.map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="p-5 rounded-2xl bg-card border border-border">
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-16 sm:py-20 bg-muted/20 border-y border-border/40">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Destination-grade tools.</h2>
            <p className="mt-3 text-muted-foreground text-sm">Everything a tourism board needs to digitize, measure, and market their destination.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {tourismCapabilities.map((f, i) => (
              <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} variants={fade} className="p-4 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-200">
                <f.icon className="w-4 h-4 text-primary mb-2" />
                <h3 className="text-[13px] font-semibold">{f.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Venues Onboarded" },
              { value: "2M+", label: "Visitor Scans" },
              { value: "38%", label: "Avg. Engagement Lift" },
              { value: "12x", label: "Campaign ROI" },
            ].map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                <p className="text-3xl sm:text-4xl font-display font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 sm:py-20 bg-muted/20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
            <div className="relative max-w-lg mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-bold">Let's digitize your destination.</h2>
              <p className="mt-2 text-primary-foreground/70 text-sm">Schedule a personalized walkthrough with our tourism partnerships team.</p>
              <form onSubmit={handleWaitlist} className="mt-6 flex flex-col sm:flex-row gap-2">
                <input type="email" required placeholder="your@tourismboard.org" value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} className="flex-1 px-4 py-2.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30" />
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">Request Demo</button>
              </form>
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="text-primary-foreground/50 text-xs">or</span>
                <a href="mailto:tourism@ibloov.com?subject=AuraLink Tourism Board Demo" className="flex items-center gap-1.5 px-5 py-2 rounded-xl border border-primary-foreground/20 text-sm font-medium hover:bg-primary-foreground/10 transition-colors">
                  Email Our Team
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
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
            <button onClick={() => navigate("/")} className="hover:text-foreground transition-colors">For Users</button>
            <button onClick={() => navigate("/enterprise")} className="hover:text-foreground transition-colors">For Business</button>
            <button onClick={() => navigate("/login")} className="hover:text-foreground transition-colors">Sign In</button>
          </div>
          <p className="text-[11px] text-muted-foreground">© 2026 iBloov Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default TourismLanding;
