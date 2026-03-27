import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
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
    <section id="contact" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-14"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#FF8555] to-[#FFD700]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          
          {/* Floating sparkle */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 right-8 hidden sm:block"
          >
            <Sparkles className="w-8 h-8 text-white/20" />
          </motion.div>

          <div className="relative max-w-lg mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Let's digitize your destination.
            </h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Schedule a personalized walkthrough with our tourism partnerships team.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="your@tourismboard.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-[#0a0a0a] text-white font-bold text-sm hover:bg-[#1a1a1a] transition-colors whitespace-nowrap flex items-center justify-center gap-2 shadow-xl"
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-white/50 text-xs">or</span>
              <a
                href="mailto:tourism@ibloov.com?subject=AuraLink Tourism Board Demo"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors text-white"
              >
                Email Our Team
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismCTA;
