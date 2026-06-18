import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sanitize = (v: string) =>
  v
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .slice(0, 32);

type Props = {
  variant?: "hero" | "sticky";
  placeholder?: string;
};

const ClaimLinkBar = ({ variant = "hero", placeholder = "yourbusiness" }: Props) => {
  const navigate = useNavigate();
  const [slug, setSlug] = useState("");

  const go = (e?: React.FormEvent) => {
    e?.preventDefault();
    const s = sanitize(slug);
    navigate(`/signup${s ? `?slug=${encodeURIComponent(s)}` : ""}`);
  };

  const sticky = variant === "sticky";

  return (
    <form onSubmit={go} className="w-full">
      <div
        className={`flex items-center gap-1 rounded-full bg-white border-2 border-[#111] p-1.5 ${
          sticky
            ? "shadow-[0_4px_0_0_#111]"
            : "shadow-[0_6px_0_0_#111] sm:shadow-[0_8px_0_0_#111]"
        }`}
      >
        <span
          className={`pl-3 pr-1 font-grotesk font-bold text-[#111] select-none ${
            sticky ? "text-[13px]" : "text-[14px] sm:text-[15px]"
          }`}
        >
          4i.fyi/
        </span>
        <input
          type="text"
          inputMode="text"
          autoComplete="off"
          spellCheck={false}
          value={slug}
          onChange={(e) => setSlug(sanitize(e.target.value))}
          placeholder={placeholder}
          aria-label="Claim your AuraLink username"
          className={`flex-1 min-w-0 bg-transparent outline-none border-0 text-[#111] placeholder:text-[#111]/35 font-grotesk font-semibold ${
            sticky ? "text-[14px] py-2" : "text-[15px] sm:text-[17px] py-2.5"
          }`}
        />
        <button
          type="submit"
          className={`flex items-center gap-1.5 rounded-full bg-[#111] text-[#FFF7ED] font-grotesk font-bold whitespace-nowrap transition-transform active:scale-95 hover:bg-[#1F2BD6] ${
            sticky ? "text-[12.5px] px-4 py-2" : "text-[13px] sm:text-[14px] px-5 sm:px-6 py-2.5 sm:py-3"
          }`}
        >
          {sticky ? "Claim" : "Claim my AuraLink"}
          <ArrowRight className={sticky ? "w-3.5 h-3.5" : "w-4 h-4"} />
        </button>
      </div>

      {!sticky && (
        <p className="mt-3 text-[12px] sm:text-[13px] text-[#111]/60 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#F39A1F]" />
          Your link will be{" "}
          <span className="font-grotesk font-bold text-[#111]">
            4i.fyi/{slug || placeholder}
          </span>
        </p>
      )}
    </form>
  );
};

export default ClaimLinkBar;
