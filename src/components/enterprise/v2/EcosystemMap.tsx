import { motion } from "framer-motion";
import { Users, Wallet, Camera, Megaphone, BarChart3 } from "lucide-react";

const nodes = [
  { icon: Users, name: "VibesGigs", desc: "Instant staffing & certified hospitality talent" },
  { icon: Wallet, name: "Flex-it", desc: "Frictionless digital tipping for staff" },
  { icon: Camera, name: "PicPop", desc: "Live memory walls and user-generated content" },
  { icon: Megaphone, name: "TribeMint", desc: "Creator and affiliate growth engine" },
  { icon: BarChart3, name: "iBloov Insight", desc: "Destination and venue analytics" },
];

const EcosystemMap = () => (
  <section id="ecosystem" className="relative py-24 sm:py-32 bg-[#0E0B09] border-t border-[#2A2320]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brass-gradient">Ecosystem</span>
        <h2 className="font-fraunces mt-3 text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
          More than a link. An entire{" "}
          <span className="italic text-brass-gradient">operating system.</span>
        </h2>
        <p className="mt-4 text-stone-warm text-[15px]">
          AuraLink connects your venue directly to the iBloov ecosystem to solve staffing,
          payments, growth, and guest engagement from one hub.
        </p>
      </motion.div>

      {/* Desktop radial map */}
      <div className="hidden lg:block relative h-[520px]">
        {/* Center orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-[#C9A35B]/25 blur-2xl animate-glow-pulse" />
            <div className="relative h-32 w-32 rounded-full bg-brass-gradient flex items-center justify-center glow-brass border border-[#E8C886]">
              <div className="text-center">
                <p className="font-fraunces font-bold text-[#1B1310] text-[18px] leading-none">AuraLink</p>
                <p className="text-[9px] text-[#1B1310]/70 font-jakarta italic mt-1">by iBloov</p>
              </div>
            </div>
          </div>
        </div>

        {/* SVG connectors */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 520" preserveAspectRatio="none">
          {[
            [400, 260, 100, 80],
            [400, 260, 700, 80],
            [400, 260, 60, 260],
            [400, 260, 740, 260],
            [400, 260, 400, 480],
          ].map((c, i) => (
            <line
              key={i}
              x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]}
              stroke="rgba(201,163,91,0.25)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          ))}
        </svg>

        {/* Nodes positioned */}
        {[
          { pos: "left-[8%] top-[8%]", n: nodes[0] },
          { pos: "right-[8%] top-[8%]", n: nodes[1] },
          { pos: "left-[2%] top-1/2 -translate-y-1/2", n: nodes[2] },
          { pos: "right-[2%] top-1/2 -translate-y-1/2", n: nodes[3] },
          { pos: "left-1/2 -translate-x-1/2 bottom-[2%]", n: nodes[4] },
        ].map(({ pos, n }) => {
          const Icon = n.icon;
          return (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`absolute ${pos} z-10 w-[200px]`}
            >
              <div className="rounded-2xl border border-brass-soft bg-[#141110]/95 backdrop-blur p-4 hover:border-[#E8C886] transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="h-8 w-8 rounded-lg bg-[#1B1714] border border-brass-soft flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#E8C886]" />
                  </div>
                  <p className="font-fraunces font-bold text-ivory text-[14px]">{n.name}</p>
                </div>
                <p className="text-[11px] text-stone-warm leading-relaxed">{n.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / tablet vertical list */}
      <div className="lg:hidden">
        <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-brass-gradient flex items-center justify-center glow-brass">
          <p className="font-fraunces font-bold text-[#1B1310] text-[14px]">AuraLink</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {nodes.map((n) => {
            const Icon = n.icon;
            return (
              <div key={n.name} className="rounded-2xl border border-brass-soft bg-[#141110] p-4">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="h-8 w-8 rounded-lg bg-[#1B1714] border border-brass-soft flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#E8C886]" />
                  </div>
                  <p className="font-fraunces font-bold text-ivory text-[14px]">{n.name}</p>
                </div>
                <p className="text-[12px] text-stone-warm leading-relaxed">{n.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default EcosystemMap;
