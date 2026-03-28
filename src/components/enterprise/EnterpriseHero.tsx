import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const proofPoints = [
  { text: "Live in under 48 hours", color: "text-[#1B9AAA]" },
  { text: "No developers needed", color: "text-[#D4A853]" },
  { text: "Works on every device", color: "text-[#E8604C]" },
];

const EnterpriseHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E8604C]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E8604C]/10 border border-[#E8604C]/20 text-[#E8604C] text-xs font-semibold tracking-widest uppercase mb-6">
            Built for Hospitality
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white">
            Not just a page.
            <br />
            <span className="italic text-[#E8604C]">A hospitality operating system.</span>
          </h1>

          <p className="mt-6 text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            One link gives your restaurant, hotel, or venue a microsite with loyalty,
            gamification, referrals, gift cards, and real-time analytics — ready in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <button
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#E8604C] text-white font-semibold text-[15px] hover:bg-[#d4533f] transition-colors shadow-lg shadow-[#E8604C]/20"
            >
              Claim Your AuraLink
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:hello@ibloov.com?subject=AuraLink Enterprise Demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-white/10 text-white/70 font-semibold text-[15px] hover:bg-white/[0.04] transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Proof points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
            {proofPoints.map((p, i) => (
              <span key={i} className={`text-xs font-medium ${p.color} flex items-center gap-1.5`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {p.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
