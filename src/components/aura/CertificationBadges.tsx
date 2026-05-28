import { useEffect, useState } from "react";
import { getCertifications, type Certification } from "@/lib/certifications";

interface Props {
  size?: "sm" | "md";
  max?: number;
}

const CertificationBadges = ({ size = "sm", max = 4 }: Props) => {
  const [items, setItems] = useState<Certification[]>([]);

  useEffect(() => {
    setItems(getCertifications());
    const handler = () => setItems(getCertifications());
    window.addEventListener("storage", handler);
    window.addEventListener("auralink:certs-updated", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("auralink:certs-updated", handler);
    };
  }, []);

  if (!items.length) return null;
  const visible = items.slice(0, max);
  const extra = items.length - visible.length;

  const dim = size === "sm" ? "w-5 h-5 text-[10px]" : "w-6 h-6 text-xs";

  return (
    <div className="flex items-center gap-1" aria-label="Certifications and ratings">
      {visible.map((c) => (
        <span
          key={c.id}
          title={`${c.label}${c.issuer ? ` — ${c.issuer}` : ""}${c.year ? ` (${c.year})` : ""}`}
          className={`${dim} inline-flex items-center justify-center rounded-full font-semibold leading-none shadow-sm border border-background/40`}
          style={{
            backgroundColor: `hsl(${c.color} / 0.18)`,
            color: `hsl(${c.color})`,
          }}
        >
          <span aria-hidden="true">{c.glyph}</span>
          <span className="sr-only">{c.label}</span>
        </span>
      ))}
      {extra > 0 && (
        <span className={`${dim} inline-flex items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold`}>
          +{extra}
        </span>
      )}
    </div>
  );
};

export default CertificationBadges;
