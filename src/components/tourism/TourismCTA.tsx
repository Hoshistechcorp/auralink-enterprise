import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TourismCTA = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="relative bg-tourism-midnight py-24 sm:py-32 border-t border-tourism-divider overflow-hidden">
      <div className="absolute inset-0 bg-grid-transit opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-[#C9A35B]/10 blur-[160px]" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-[#C9A35B]/25 bg-gradient-to-b from-[#0F1626] to-[#0A0F1C] p-10 sm:p-14 text-center glow-tourism-brass"
        >
          <h2 className="font-fraunces text-[clamp(32px,4.2vw,52px)] font-bold text-tourism-ivory leading-[1.1] mb-5">
            Your destination deserves more than a{" "}
            <span className="italic text-tourism-brass">brochure</span>.
          </h2>
          <p className="text-base sm:text-lg text-tourism-slate max-w-[580px] mx-auto mb-9 leading-relaxed">
            Replace scattered tourism marketing with one intelligent destination hub
            that visitors actually use and your team can finally measure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button
              onClick={() => navigate("/signup")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-tourism-brass text-[#1B1310] font-semibold text-[15px] hover:opacity-95 transition-all"
            >
              Book a Tourism Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/microsite")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#2A3349] bg-[#141B2E]/60 text-tourism-ivory font-semibold text-[15px] hover:bg-[#141B2E] hover:border-[#3FA7A0]/40 transition-colors"
            >
              <Eye className="w-4 h-4" />
              See a Destination Demo
            </button>
          </div>

          <p className="text-[12px] text-tourism-slate">
            Fast launch · No app download · QR-ready · Built for modern tourism teams
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismCTA;
