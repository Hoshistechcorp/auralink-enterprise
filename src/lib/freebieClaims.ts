// Frontend-only freebie claims store (localStorage).
// End-to-end flow:
//  1. Customer wins prize on Spin & Win → submits email
//     → claim is created (status: "pending") + "won" email mocked
//  2. Customer visits venue with their email → staff opens dashboard
//     → looks up claim by email/code → marks Redeemed
//     → "confirmation" email mocked
export type ClaimStatus = "pending" | "redeemed" | "expired";

export interface FreebieClaim {
  id: string;
  code: string;             // 6-char human-readable code
  email: string;
  prizeLabel: string;
  businessName: string;
  status: ClaimStatus;
  createdAt: string;        // ISO
  expiresAt: string;        // ISO
  redeemedAt?: string;
  emailsSent: Array<{ kind: "won" | "redeemed"; at: string }>;
}

const KEY = "auralink:freebie:claims";
export const FREEBIE_EVENT = "auralink:freebie-updated";

function read(): FreebieClaim[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FreebieClaim[]) : [];
  } catch {
    return [];
  }
}

function write(claims: FreebieClaim[]) {
  localStorage.setItem(KEY, JSON.stringify(claims));
  window.dispatchEvent(new CustomEvent(FREEBIE_EVENT));
}

export function listClaims(): FreebieClaim[] {
  // auto-expire on read
  const now = Date.now();
  const all = read();
  let mutated = false;
  for (const c of all) {
    if (c.status === "pending" && new Date(c.expiresAt).getTime() < now) {
      c.status = "expired";
      mutated = true;
    }
  }
  if (mutated) write(all);
  return all.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
}

function genCode(): string {
  // unambiguous alphabet (no 0/O/1/I)
  const a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += a[Math.floor(Math.random() * a.length)];
  return s;
}

export interface CreateClaimInput {
  email: string;
  prizeLabel: string;
  businessName?: string;
  /** Days until expiry. Defaults to 14. */
  claimWindowDays?: number;
}

export function createClaim(input: CreateClaimInput): FreebieClaim {
  const now = new Date();
  const expires = new Date(now);
  expires.setDate(expires.getDate() + (input.claimWindowDays ?? 14));

  const claim: FreebieClaim = {
    id: `clm_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    code: genCode(),
    email: input.email.trim().toLowerCase(),
    prizeLabel: input.prizeLabel,
    businessName: input.businessName ?? "the venue",
    status: "pending",
    createdAt: now.toISOString(),
    expiresAt: expires.toISOString(),
    emailsSent: [{ kind: "won", at: now.toISOString() }],
  };

  const all = read();
  all.push(claim);
  write(all);
  // Mock sending the "you won" email
  console.info("[freebie] mock email → won", {
    to: claim.email,
    subject: `🎉 You won ${claim.prizeLabel} at ${claim.businessName}!`,
    code: claim.code,
    expiresAt: claim.expiresAt,
  });
  return claim;
}

export function findClaim(query: { email?: string; code?: string }): FreebieClaim | undefined {
  const all = listClaims();
  const email = query.email?.trim().toLowerCase();
  const code = query.code?.trim().toUpperCase();
  return all.find(
    (c) =>
      (email ? c.email === email : true) &&
      (code ? c.code === code : true)
  );
}

export function redeemClaim(id: string): FreebieClaim | undefined {
  const all = read();
  const c = all.find((x) => x.id === id);
  if (!c) return undefined;
  if (c.status !== "pending") return c;
  c.status = "redeemed";
  const at = new Date().toISOString();
  c.redeemedAt = at;
  c.emailsSent.push({ kind: "redeemed", at });
  write(all);
  // Mock sending the confirmation email
  console.info("[freebie] mock email → redeemed", {
    to: c.email,
    subject: `✅ Redemption confirmed — ${c.prizeLabel}`,
    redeemedAt: at,
  });
  return c;
}

export function deleteClaim(id: string) {
  write(read().filter((c) => c.id !== id));
}

export function claimStats() {
  const all = listClaims();
  return {
    total: all.length,
    pending: all.filter((c) => c.status === "pending").length,
    redeemed: all.filter((c) => c.status === "redeemed").length,
    expired: all.filter((c) => c.status === "expired").length,
  };
}
