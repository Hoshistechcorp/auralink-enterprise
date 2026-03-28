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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E8604C]">See It In Action</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
            Go live in <span className="italic text-white/40">under 3 minutes.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer group"
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
            <>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80"
                alt="Restaurant interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0D1117]/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#E8604C]/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-20 h-20 rounded-full bg-[#E8604C] text-white flex items-center justify-center shadow-2xl shadow-[#E8604C]/30 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                </div>
                <p className="mt-5 text-sm font-medium text-white/40">Click to play demo</p>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseVideoDemo;
