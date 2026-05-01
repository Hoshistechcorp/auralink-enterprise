import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCta = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0907]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] p-[1.5px] bg-brass-gradient"
        >
          <div className="relative rounded-[30px] bg-[#0E0B09] px-6 sm:px-12 py-16 sm:py-20 text-center overflow-hidden">
            {/* Warm glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-[#C9A35B]/20 blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 h-60 w-[400px] rounded-full bg-[#B8893E]/15 blur-[120px]" />

            <div className="relative">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">Your move</span>
              <h2 className="font-fraunces mt-4 text-3xl sm:text-5xl font-bold text-ivory tracking-tight leading-[1.1] max-w-3xl mx-auto">
                One operating system for direct revenue, better guest experiences, and{" "}
                <span className="italic text-brass-gradient">full data ownership.</span>
              </h2>
              <p className="mt-5 text-stone-warm text-[15px] sm:text-[16px] max-w-xl mx-auto">
                Bring bookings, gift cards, AI guest relations, loyalty, and growth into one
                mobile-first hub built for hospitality.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => navigate("/signup")}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brass-gradient text-[#1B1310] font-semibold text-[15px] glow-brass hover:opacity-95 transition-opacity"
                >
                  Book Enterprise Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => navigate("/microsite")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#3A302A] bg-[#141110]/60 text-ivory font-semibold text-[15px] hover:bg-[#1B1714] hover:border-brass-soft transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  See Live Demo
                </button>
              </div>

              <p className="mt-6 text-[12px] text-stone-warm">
                No coding required. Fast launch. Enterprise support available.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
