/* ── Restaurant Certifications & Ratings (shared between dashboard & microsite) ── */

const STORAGE_KEY = "auralink_certifications";

export interface Certification {
  id: string;
  /** Preset key (e.g. "michelin-1") or "custom" */
  type: string;
  /** Short display label shown in tooltip / list (e.g. "1 Michelin Star") */
  label: string;
  /** Optional issuing body (e.g. "Michelin Guide", "AAA", "Forbes Travel") */
  issuer?: string;
  /** Optional year awarded */
  year?: string;
  /** Emoji or single character used as the badge glyph */
  glyph: string;
  /** HSL color (without hsl()) used for the badge background tint */
  color: string;
}

export interface CertificationPreset {
  type: string;
  label: string;
  issuer: string;
  glyph: string;
  color: string;
}

export const CERTIFICATION_PRESETS: CertificationPreset[] = [
  { type: "michelin-1", label: "1 Michelin Star", issuer: "Michelin Guide", glyph: "★", color: "0 70% 45%" },
  { type: "michelin-2", label: "2 Michelin Stars", issuer: "Michelin Guide", glyph: "★★", color: "0 70% 45%" },
  { type: "michelin-3", label: "3 Michelin Stars", issuer: "Michelin Guide", glyph: "★★★", color: "0 70% 45%" },
  { type: "bib-gourmand", label: "Bib Gourmand", issuer: "Michelin Guide", glyph: "🍽", color: "10 75% 50%" },
  { type: "michelin-green", label: "Michelin Green Star", issuer: "Michelin Guide", glyph: "✦", color: "140 55% 38%" },
  { type: "aaa-5d", label: "AAA Five Diamond", issuer: "AAA", glyph: "◆", color: "210 70% 45%" },
  { type: "aaa-4d", label: "AAA Four Diamond", issuer: "AAA", glyph: "◆", color: "210 60% 50%" },
  { type: "forbes-5", label: "Forbes Five Star", issuer: "Forbes Travel Guide", glyph: "★", color: "38 80% 45%" },
  { type: "forbes-4", label: "Forbes Four Star", issuer: "Forbes Travel Guide", glyph: "★", color: "38 80% 50%" },
  { type: "worlds-50", label: "World's 50 Best", issuer: "The World's 50 Best Restaurants", glyph: "50", color: "270 50% 45%" },
  { type: "james-beard", label: "James Beard Award", issuer: "James Beard Foundation", glyph: "JB", color: "352 60% 40%" },
  { type: "zagat", label: "Zagat Rated", issuer: "Zagat", glyph: "Z", color: "0 60% 40%" },
  { type: "tripadvisor", label: "Travelers' Choice", issuer: "Tripadvisor", glyph: "✓", color: "152 60% 38%" },
  { type: "ggreen", label: "Green Key Certified", issuer: "Green Key Global", glyph: "🌿", color: "140 60% 35%" },
];

const defaults: Certification[] = [
  {
    id: "seed-1",
    type: "michelin-1",
    label: "1 Michelin Star",
    issuer: "Michelin Guide",
    year: "2024",
    glyph: "★",
    color: "0 70% 45%",
  },
];

export const getCertifications = (): Certification[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...defaults];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...defaults];
  } catch {
    return [...defaults];
  }
};

export const saveCertifications = (items: Certification[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const newCertificationId = () =>
  (typeof crypto !== "undefined" && "randomUUID" in crypto)
    ? crypto.randomUUID()
    : `cert-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
