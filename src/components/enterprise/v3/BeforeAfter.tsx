import { X, Check } from "lucide-react";

const before = ["6 disconnected tools", "Commission on every booking", "Generic guest experience", "No data on who visits"];
const after = ["One mobile hub", "0% commission, direct revenue", "Branded, multilingual journey", "Live analytics per guest"];

const Row = ({ ok, text }: { ok: boolean; text: string }) => (
  <li className="flex items-start gap-2.5 text-[14px]">
    <span
      className={`mt-0.5 h-6 w-6 rounded-full flex items-center justify-center shrink-0 border-2 border-[#111] ${
        ok ? "bg-[#C6F432] text-[#111]" : "bg-[#FF7A59] text-[#FFF7ED]"
      }`}
    >
      {ok ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : <X className="w-3.5 h-3.5" strokeWidth={3} />}
    </span>
    <span className="text-[#111] font-medium">{text}</span>
  </li>
);

const BeforeAfter = () => (
  <section className="px-5 py-20 bg-[#FFE8D6]">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#1F2BD6] font-bold">The shift</span>
        <h2 className="font-grotesk mt-2 text-[32px] sm:text-[40px] font-extrabold text-[#111] tracking-tight">
          Replace six tools.
        </h2>
        <p className="text-[15px] text-[#111]/70 mt-2">One AuraLink, no more chaos.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="rounded-3xl border-2 border-[#111] bg-[#FFF7ED] p-6 shadow-[0_6px_0_0_#111]">
          <p className="text-[11px] uppercase tracking-wider text-[#111]/50 mb-4 font-bold">Before</p>
          <ul className="space-y-3">{before.map((t) => <Row key={t} ok={false} text={t} />)}</ul>
        </div>
        <div className="rounded-3xl border-2 border-[#111] bg-[#C6F432] p-6 shadow-[0_6px_0_0_#111]">
          <p className="text-[11px] uppercase tracking-wider text-[#111]/70 mb-4 font-bold">With AuraLink</p>
          <ul className="space-y-3">{after.map((t) => <Row key={t} ok text={t} />)}</ul>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
