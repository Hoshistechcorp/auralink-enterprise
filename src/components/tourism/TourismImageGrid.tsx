import { motion } from "framer-motion";

interface TourismImageGridProps {
  images: {
    landmark: string;
    nightlife: string;
    nature: string;
    coastal: string;
  };
}

const categories = [
  { key: "landmark" as const, label: "Heritage & Culture", tag: "Landmarks" },
  { key: "nightlife" as const, label: "Nightlife & Dining", tag: "Experiences" },
  { key: "nature" as const, label: "Nature & Adventure", tag: "Outdoors" },
  { key: "coastal" as const, label: "Coastal & Beaches", tag: "Coastal" },
];

const TourismImageGrid = ({ images }: TourismImageGridProps) => {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#00CED1] font-bold text-xs tracking-[0.3em] uppercase mb-3">Explore Destinations</p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold">
            Every corner tells a <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFD700] bg-clip-text text-transparent">story</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto">
            Digitize your entire destination — from ancient landmarks to buzzing night markets — under one unified brand.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? "row-span-2" : i === 3 ? "row-span-2" : ""
              }`}
            >
              <img
                src={images[cat.key]}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[#FF6B35]/0 group-hover:bg-[#FF6B35]/10 transition-colors duration-500" />
              
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-white/90 border border-white/10">
                  {cat.tag}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-display font-bold text-lg sm:text-xl">{cat.label}</h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-white/60 text-xs mt-1 group-hover:text-white/80 transition-colors"
                >
                  Showcase to millions of visitors →
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismImageGrid;
