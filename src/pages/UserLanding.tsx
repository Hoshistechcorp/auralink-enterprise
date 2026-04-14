import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart, Share2, Star, Sparkles, ArrowRight, Smartphone,
  Gift, Gamepad2, Trophy, Ticket, Bell,
} from "lucide-react";
import { toast } from "sonner";
import LandingNavbar from "@/components/aura/LandingNavbar";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

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
  const [waitlistEmail, setWaitlistEmail] = useState("");

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail.trim()) return;
    toast.success("You're on the list! We'll notify you when we launch.");
    setWaitlistEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white font-body antialiased">
      <LandingNavbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#E8604C]/[0.04] rounded-full blur-[140px]" />
        </div>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white">
              Your favorite spots,
              <br />
              <span className="italic bg-gradient-to-r from-[#E8604C] to-[#D4A853] bg-clip-text text-transparent">rewarded.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
              Scan, explore, and earn rewards at restaurants, hotels, and cafés. No app download needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <button onClick={() => navigate("/microsite")} className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-[#E8604C] text-white font-semibold text-[15px] hover:bg-[#d4533f] transition-colors shadow-lg shadow-[#E8604C]/20">
                <Smartphone className="w-4 h-4" />
                Try a Demo
              </button>
              <a href="#how-it-works" className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-2xl border border-white/10 text-white/70 font-semibold text-[15px] hover:bg-white/[0.04] transition-colors">
                How It Works
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">How it works</h2>
            <p className="mt-3 text-white/40 text-sm">Three steps to start earning rewards everywhere you go.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div key={item.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-12 h-12 rounded-full bg-[#E8604C] text-white flex items-center justify-center mx-auto text-xl font-bold">{item.step}</div>
                <h3 className="font-semibold mt-4 text-white">{item.title}</h3>
                <p className="text-sm text-white/40 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Everything you get</h2>
            <p className="mt-3 text-white/40 text-sm">One scan unlocks a world of perks and experiences.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {userBenefits.map((f, i) => (
              <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} variants={fade} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E8604C]/20 transition-all duration-200">
                <f.icon className="w-4 h-4 text-[#E8604C] mb-2" />
                <h3 className="text-[13px] font-semibold text-white">{f.title}</h3>
                <p className="text-[11px] text-white/40 mt-0.5 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E8604C] to-[#D4A853] text-white p-8 sm:p-14">
            <div className="relative max-w-lg mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-bold">Start earning rewards today.</h2>
              <p className="mt-2 text-white/70 text-sm">Join thousands of guests already enjoying exclusive perks at their favorite venues.</p>
              <form onSubmit={handleWaitlist} className="mt-6 flex flex-col sm:flex-row gap-2">
                <input type="email" required placeholder="your@email.com" value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30" />
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-white text-[#E8604C] font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">Get Early Access</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src={ibloovLogo} alt="iBloov" className="h-5 w-auto rounded-md" />
            <span className="text-xs text-white/40">AuraLink</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-white/40">
            <button onClick={() => navigate("/enterprise")} className="hover:text-white transition-colors">For Business</button>
            <button onClick={() => navigate("/tourism")} className="hover:text-white transition-colors">Tourism Boards</button>
            <button onClick={() => navigate("/login")} className="hover:text-white transition-colors">Sign In</button>
          </div>
          <p className="text-[11px] text-white/30">© 2026 iBloov Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default UserLanding;
