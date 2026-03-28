import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const TourismCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thank you! Our tourism team will reach out shortly.");
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-[#FAFAF8] to-[#F5F0E8]">
      <div className="max-w-[700px] mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-[clamp(34px,4.5vw,56px)] font-bold text-[#0D1117] leading-[1.12] mb-5">
            Your destination deserves
            <br />more than a <em className="italic text-[#E8604C]">brochure.</em>
          </h2>
          <p className="text-lg text-[#4A5568] max-w-[520px] mx-auto mb-10 leading-relaxed font-light">
            Join the destinations replacing scattered marketing with one intelligent
            hub that drives visitors, tracks impact, and pays for itself.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 mb-4"
        >
          <input
            type="email"
            required
            placeholder="your@tourismboard.org"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-4 rounded-xl border-2 border-black/10 bg-white text-[#0D1117] placeholder:text-[#8B95A5] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8604C]/40 focus:border-[#E8604C]"
          />
          <button
            type="submit"
            className="px-8 py-4 rounded-xl bg-[#E8604C] text-white font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,96,76,0.3)] transition-all whitespace-nowrap flex items-center justify-center gap-2"
          >
            Get Your Destination Live
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>

        <a
          href="mailto:tourism@ibloov.com?subject=AuraLink Tourism Board Demo"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-black/10 text-sm font-semibold text-[#0D1117] hover:border-[#0D1117] transition-all"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
};

export default TourismCTA;
