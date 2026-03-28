import { motion } from "framer-motion";
import { ArrowRight, Eye, Shield, Clock, Globe, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const trustSignals = [
  { icon: Shield, label: "SOC 2 Compliant" },
  { icon: Clock, label: "99.9% Uptime" },
  { icon: Globe, label: "GDPR Ready" },
  { icon: FileCheck, label: "Enterprise SLA" },
];

const EnterpriseCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 sm:py-32 border-t border-white/[0.04] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t from-[#E8604C]/[0.08] via-[#D4A853]/[0.04] to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E8604C]">Ready?</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Your guests don't want <span className="italic text-[#E8604C]">six apps.</span>
            <br />
            Give them one.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <button
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#E8604C] text-white font-semibold text-[15px] hover:bg-[#d4533f] transition-colors shadow-lg shadow-[#E8604C]/20"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/microsite")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white/70 font-semibold text-[15px] hover:bg-white/[0.04] transition-colors"
            >
              <Eye className="w-4 h-4" />
              See the Public View
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {trustSignals.map((t) => {
              const Icon = t.icon;
              return (
                <span key={t.label} className="flex items-center gap-2 text-xs font-medium text-white/20">
                  <Icon className="w-3.5 h-3.5" />
                  {t.label}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
