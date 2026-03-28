import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: "312%", label: "More Engagement" },
  { value: "8", label: "Revenue Streams" },
  { value: "24hrs", label: "To Go Live" },
];

const EnterpriseHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
          alt="Fine dining restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/90 to-[#0D1117]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-[#0D1117]/40" />
      </div>

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8604C]/10 border border-[#E8604C]/20 text-[#E8604C] text-xs font-semibold tracking-widest uppercase mb-6">
            The Hospitality Operating System
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            Your guests deserve
            <br />
            <span className="italic bg-gradient-to-r from-[#E8604C] to-[#D4A853] bg-clip-text text-transparent">
              more than a website.
            </span>
          </h1>

          <p className="mt-6 text-white/40 text-base sm:text-lg max-w-lg leading-relaxed">
            One link. Loyalty, gift cards, AI concierge, analytics — live in 24 hours.
          </p>

          <div className="flex items-center gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="block font-display text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#D4A853] to-[#E8604C] bg-clip-text text-transparent">
                  {s.value}
                </span>
                <span className="text-[10px] text-white/30 font-medium uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
            <button
              onClick={() => navigate("/signup")}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#E8604C] text-white font-semibold text-[15px] hover:bg-[#d4533f] transition-colors shadow-lg shadow-[#E8604C]/20"
            >
              Launch Your AuraLink
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/microsite")}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white/70 font-semibold text-[15px] hover:bg-white/[0.04] transition-colors"
            >
              <Eye className="w-4 h-4" />
              See the Public View
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
