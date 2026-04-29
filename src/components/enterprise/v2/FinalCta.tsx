import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCta = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] p-[1.5px] bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#F472B6]"
        >
          <div className="relative rounded-[30px] bg-[#0A0A10] px-6 sm:px-12 py-16 sm:py-20 text-center overflow-hidden">
            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-[#3B82F6]/20 blur-[120px]" />
            <div className="absolute bottom-0 left-1/3 h-60 w-[400px] rounded-full bg-[#8B5CF6]/20 blur-[120px]" />

            <div className="relative">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#A78BFA]">Your move</span>
              <h2 className="font-jakarta mt-4 text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">
                Ready to become a <span className="text-aura-gradient italic">Maverick?</span>
              </h2>
              <p className="mt-5 text-white/55 text-[16px] sm:text-[17px] max-w-lg mx-auto">
                Build your venue's digital headquarters today. Live in 3 minutes — no card required.
              </p>

              <button
                onClick={() => navigate("/signup")}
                className="group mt-9 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-aura-gradient text-white font-semibold text-[15px] glow-blue hover:opacity-95 transition-opacity"
              >
                Claim Your Handle
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
