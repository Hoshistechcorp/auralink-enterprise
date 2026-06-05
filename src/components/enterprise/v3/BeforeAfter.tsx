import { X, Check } from "lucide-react";

const before = ["6 disconnected tools", "Commission on every booking", "Generic guest experience", "No data on who visits"];
const after = ["One mobile hub", "0% commission, direct revenue", "Branded, multilingual journey", "Live analytics per guest"];

const Row = ({ ok, text }: { ok: boolean; text: string }) => (
  <li className="flex items-start gap-2.5 text-[14px]">
    <span
      className={`mt-0.5 h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${
        ok ? "bg-[#C9A35B]/15 text-[#E8C886]" : "bg-[#3a1f1c] text-[#E08373]"
      }`}
    >
      {ok ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
    </span>
    <span className={ok ? "text-[#F5F0E8]" : "text-[#A89B8B]"}>{text}</span>
  </li>
);

const BeforeAfter = () => (
  <section className="px-5 py-16">
    <div className="text-center mb-8">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A35B]">The shift</span>
      <h2 className="font-grotesk mt-2 text-[28px] font-bold text-[#F5F0E8] tracking-tight">Replace six tools.</h2>
      <p className="text-[14px] text-[#A89B8B] mt-1.5">One IBloov, no more chaos.</p>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-[#1F1A17] bg-[#0F0D0B] p-5">
        <p className="text-[11px] uppercase tracking-wider text-[#7A6F62] mb-3">Before</p>
        <ul className="space-y-2.5">{before.map((t) => <Row key={t} ok={false} text={t} />)}</ul>
      </div>
      <div className="rounded-2xl border border-[#C9A35B]/30 bg-gradient-to-b from-[#1A1410] to-[#0F0D0B] p-5">
        <p className="text-[11px] uppercase tracking-wider text-[#C9A35B] mb-3">With IBloov</p>
        <ul className="space-y-2.5">{after.map((t) => <Row key={t} ok text={t} />)}</ul>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
