import { motion } from "framer-motion";
import { ArrowRight, Gift, Star, Utensils, MessageCircle, Calendar, Camera, Users, Award, Music, CreditCard, Share2, MapPin, Sparkles, BookOpen, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cards = [
  { icon: Gift, title: "Gift Cards", color: "#E8604C" },
  { icon: Utensils, title: "Menu", color: "#D4A853" },
  { icon: Star, title: "Reviews", color: "#1B9AAA" },
  { icon: MessageCircle, title: "AI Concierge", color: "#A855F7" },
  { icon: Calendar, title: "Events", color: "#E8604C" },
  { icon: Camera, title: "Gallery", color: "#1B9AAA" },
  { icon: Users, title: "Staff", color: "#D4A853" },
  { icon: Award, title: "Loyalty", color: "#E8604C" },
  { icon: Music, title: "VibeGigs", color: "#A855F7" },
  { icon: CreditCard, title: "Payments", color: "#1B9AAA" },
  { icon: Share2, title: "Social", color: "#D4A853" },
  { icon: MapPin, title: "Locations", color: "#E8604C" },
  { icon: Sparkles, title: "Rewards", color: "#A855F7" },
  { icon: BookOpen, title: "FAQs", color: "#1B9AAA" },
  { icon: Phone, title: "Contact", color: "#D4A853" },
];

const EnterpriseMicrositePreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.04] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4A853]">
              The Public View
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              See what your <span className="italic text-[#E8604C]">guests</span> see.
            </h2>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-md">
              Every AuraLink microsite comes with 15 smart modules — from gift cards and AI concierge to loyalty rewards and live events. All accessible from one scannable link.
            </p>
            <button
              onClick={() => navigate("/microsite")}
              className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white/80 text-sm font-semibold hover:bg-white/[0.1] transition-colors"
            >
              Try the Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E8604C]/20 to-[#D4A853]/10 rounded-[3rem] blur-2xl" />
              
              {/* Phone frame */}
              <div className="relative w-[280px] rounded-[2.5rem] border-[3px] border-white/10 bg-[#0D1117] p-4 pt-8 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />
                
                {/* Header */}
                <div className="text-center mb-4 mt-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8604C] to-[#D4A853] mx-auto mb-2" />
                  <p className="text-white text-xs font-bold">The Grand Restaurant</p>
                  <p className="text-white/30 text-[9px]">Fine Dining · New York</p>
                </div>

                {/* Card grid */}
                <div className="grid grid-cols-3 gap-2">
                  {cards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/[0.04] border border-white/[0.06] aspect-square gap-1"
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${card.color}15` }}>
                          <Icon className="w-3.5 h-3.5" style={{ color: card.color }} />
                        </div>
                        <span className="text-[8px] text-white/60 font-medium text-center leading-tight">{card.title}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom bar */}
                <div className="mt-3 h-1 w-24 bg-white/10 rounded-full mx-auto" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseMicrositePreview;
