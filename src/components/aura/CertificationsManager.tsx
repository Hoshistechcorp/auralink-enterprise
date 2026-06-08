import { useState } from "react";
import { Award, Plus, Trash2, Save, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { confirmAction } from "@/components/ui/confirm-dialog";
import {
  getCertifications,
  saveCertifications,
  newCertificationId,
  CERTIFICATION_PRESETS,
  type Certification,
} from "@/lib/certifications";

const inputCls =
  "w-full px-3 py-2 rounded-lg bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

const CertificationsManager = () => {
  const [items, setItems] = useState<Certification[]>(getCertifications);

  const addPreset = (presetType: string) => {
    const preset = CERTIFICATION_PRESETS.find((p) => p.type === presetType);
    if (!preset) return;
    if (items.some((i) => i.type === preset.type)) {
      toast({ title: "Already added", description: `${preset.label} is already on your profile.` });
      return;
    }
    setItems([
      ...items,
      {
        id: newCertificationId(),
        type: preset.type,
        label: preset.label,
        issuer: preset.issuer,
        year: String(new Date().getFullYear()),
        glyph: preset.glyph,
        color: preset.color,
      },
    ]);
  };

  const addCustom = () => {
    setItems([
      ...items,
      {
        id: newCertificationId(),
        type: "custom",
        label: "Custom Award",
        issuer: "",
        year: String(new Date().getFullYear()),
        glyph: "★",
        color: "352 60% 40%",
      },
    ]);
  };

  const update = (id: string, patch: Partial<Certification>) =>
    setItems((s) => s.map((i) => (i.id === id ? { ...i, ...patch } : i)));

  const remove = async (id: string) => {
    if (!(await confirmAction({ title: "Remove certification?", description: "This badge will no longer appear on your microsite." }))) return;
    setItems((s) => s.filter((i) => i.id !== id));
  };

  const save = () => {
    saveCertifications(items);
    window.dispatchEvent(new Event("auralink:certs-updated"));
    toast({
      title: "Certifications saved",
      description: "Badges now appear next to your name on your microsite.",
    });
  };

  return (
    <div className="p-6 rounded-2xl bg-card border">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          <h3 className="font-display font-semibold text-lg">Certifications & Ratings</h3>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-5">
        Showcase awards (Michelin, Forbes, AAA, James Beard…) as badges beside your name on the
        public microsite.
      </p>

      {/* Preset quick-add */}
      <div className="mb-5">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
          Quick add
        </label>
        <div className="flex flex-wrap gap-2">
          {CERTIFICATION_PRESETS.map((p) => {
            const active = items.some((i) => i.type === p.type);
            return (
              <button
                key={p.type}
                onClick={() => addPreset(p.type)}
                disabled={active}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  active
                    ? "bg-primary/10 border-primary/30 text-primary cursor-default"
                    : "bg-muted/50 border-border hover:border-primary/30"
                }`}
              >
                <span
                  className="inline-flex w-4 h-4 items-center justify-center rounded-full text-[9px] font-bold"
                  style={{
                    backgroundColor: `hsl(${p.color} / 0.18)`,
                    color: `hsl(${p.color})`,
                  }}
                >
                  {p.glyph}
                </span>
                {p.label}
                {active && <Check className="w-3 h-3" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Existing list */}
      <div className="space-y-3">
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground italic">
            No certifications yet. Add one above to start displaying badges.
          </p>
        )}
        {items.map((c, i) => (
          <div key={c.id} className="p-4 rounded-xl bg-muted/30 border space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex w-7 h-7 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `hsl(${c.color} / 0.18)`,
                    color: `hsl(${c.color})`,
                  }}
                >
                  {c.glyph}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  Badge {i + 1}
                </span>
              </div>
              <button
                onClick={() => remove(c.id)}
                className="p-1 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                aria-label="Remove"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">
                  Label
                </label>
                <input
                  value={c.label}
                  onChange={(e) => update(c.id, { label: e.target.value })}
                  className={inputCls}
                  maxLength={60}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">
                  Issuer
                </label>
                <input
                  value={c.issuer || ""}
                  onChange={(e) => update(c.id, { issuer: e.target.value })}
                  className={inputCls}
                  maxLength={60}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">
                  Year
                </label>
                <input
                  value={c.year || ""}
                  onChange={(e) => update(c.id, { year: e.target.value })}
                  className={inputCls}
                  maxLength={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">
                    Glyph
                  </label>
                  <input
                    value={c.glyph}
                    onChange={(e) => update(c.id, { glyph: e.target.value.slice(0, 3) })}
                    className={`${inputCls} text-center font-bold`}
                    maxLength={3}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 block">
                    Color
                  </label>
                  <input
                    value={c.color}
                    onChange={(e) => update(c.id, { color: e.target.value })}
                    placeholder="352 60% 40%"
                    className={`${inputCls} font-mono text-xs`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
        <button
          onClick={addCustom}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-border hover:border-primary/30 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Custom Award
        </button>
        <button
          onClick={save}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Save className="w-4 h-4" /> Save Certifications
        </button>
      </div>
    </div>
  );
};

export default CertificationsManager;
