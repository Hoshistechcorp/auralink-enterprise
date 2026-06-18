const steps = [
  { n: "01", t: "Sign up", d: "21-day Supernova trial. No card.", bg: "#C6F432" },
  { n: "02", t: "Customize", d: "Add logo, menu, photos. 3 minutes.", bg: "#7CC7FF" },
  { n: "03", t: "Go live", d: "Print QR, place on tables, done.", bg: "#FF7A59" },
];

const HowItWorks = () => (
  <section className="px-5 py-20 bg-[#C8A2FF]">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#1F2BD6] font-bold">How it works</span>
        <h2 className="font-grotesk mt-2 text-[32px] sm:text-[40px] font-extrabold text-[#111] tracking-tight">
          Live in 3 steps.
        </h2>
      </div>
      <ol className="space-y-4 max-w-lg mx-auto">
        {steps.map((s, i) => (
          <li
            key={s.n}
            className="flex gap-5 items-center rounded-3xl border-2 border-[#111] bg-[#FFF7ED] p-5 shadow-[0_6px_0_0_#111]"
            style={{ transform: `rotate(${i === 1 ? 0.5 : i === 0 ? -0.5 : 0.3}deg)` }}
          >
            <span
              className="font-grotesk text-[28px] font-extrabold shrink-0 h-14 w-14 rounded-2xl border-2 border-[#111] flex items-center justify-center text-[#111]"
              style={{ background: s.bg }}
            >
              {s.n}
            </span>
            <div>
              <p className="font-grotesk font-extrabold text-[17px] text-[#111]">{s.t}</p>
              <p className="text-[13.5px] text-[#111]/70 mt-0.5">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
