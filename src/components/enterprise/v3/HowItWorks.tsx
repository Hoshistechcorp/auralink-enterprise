const steps = [
  { n: "01", t: "Sign up", d: "21-day Supernova trial. No card." },
  { n: "02", t: "Customize", d: "Add logo, menu, photos. 3 minutes." },
  { n: "03", t: "Go live", d: "Print QR, place on tables, done." },
];

const HowItWorks = () => (
  <section className="px-5 py-16">
    <div className="text-center mb-8">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A35B]">How it works</span>
      <h2 className="font-grotesk mt-2 text-[28px] font-bold text-[#F5F0E8] tracking-tight">Live in 3 steps.</h2>
    </div>
    <ol className="space-y-3 max-w-md mx-auto">
      {steps.map((s) => (
        <li key={s.n} className="flex gap-4 rounded-2xl border border-[#1F1A17] bg-[#0F0D0B] p-5">
          <span className="font-grotesk text-[24px] font-bold bg-gradient-to-r from-[#E8C886] to-[#C9A35B] bg-clip-text text-transparent shrink-0 w-10">
            {s.n}
          </span>
          <div>
            <p className="font-grotesk font-semibold text-[15px] text-[#F5F0E8]">{s.t}</p>
            <p className="text-[13px] text-[#A89B8B] mt-0.5">{s.d}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default HowItWorks;
