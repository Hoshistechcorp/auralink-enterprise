import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnterpriseCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.04] relative overflow-hidden">
      {/* Warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E8604C]/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E8604C]">Ready?</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Stop stitching together <span className="italic text-[#E8604C]">five apps.</span>
            <br />
            Use one.
          </h2>
          <p className="mt-5 text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            Replace your link-in-bio, review tool, loyalty app, QR generator, and analytics dashboard
            — with a single AuraLink.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <button
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#E8604C] text-white font-semibold text-[15px] hover:bg-[#d4533f] transition-colors shadow-lg shadow-[#E8604C]/20"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:hello@ibloov.com?subject=AuraLink Enterprise Demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-white/10 text-white/70 font-semibold text-[15px] hover:bg-white/[0.04] transition-colors"
            >
              Book a Demo
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
            {["Free to start", "No credit card", "Live in 48hrs"].map((t) => (
              <span key={t} className="text-xs font-medium text-[#1B9AAA] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
