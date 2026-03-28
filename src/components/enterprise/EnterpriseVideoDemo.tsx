import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const EnterpriseVideoDemo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-16 sm:py-24 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E8604C]">See It In Action</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Watch AuraLink work <span className="italic text-white/40">for a real restaurant.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] cursor-pointer group"
          onClick={() => setShowVideo(true)}
        >
          {showVideo ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="AuraLink Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#E8604C]/10 to-transparent">
              <div className="w-20 h-20 rounded-full bg-[#E8604C] text-white flex items-center justify-center shadow-2xl shadow-[#E8604C]/30 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <p className="mt-5 text-sm font-medium text-white/40">Click to play demo</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseVideoDemo;
