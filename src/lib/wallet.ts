// Frontend-only wallet store (localStorage).
export type TxType = "gift_card" | "tip" | "reservation" | "merchandise" | "event" | "other" | "withdrawal" | "fee";
export type TxStatus = "completed" | "pending" | "failed";

export interface WalletTransaction {
  id: string;
  type: TxType;
  description: string;
  amount: number; // positive = credit, negative = debit
  status: TxStatus;
  createdAt: string;
  reference?: string;
}

export interface WithdrawalMethod {
  id: string;
  label: string;
  type: "bank" | "paypal" | "stripe";
  details: string;
}

const TX_KEY = "auralink:wallet:txs";
const METHOD_KEY = "auralink:wallet:methods";
export const WALLET_EVENT = "auralink:wallet-updated";

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

const defaultSeed = (): WalletTransaction[] => [
  { id: "tx_1", type: "gift_card", description: "Gift card — $100 (Sarah M.)", amount: 100, status: "completed", createdAt: daysAgo(1), reference: "GC-2841" },
  { id: "tx_2", type: "gift_card", description: "Gift card — $250 (Corporate)", amount: 250, status: "completed", createdAt: daysAgo(2), reference: "GC-2840" },
  { id: "tx_3", type: "tip", description: "Staff tip pool — Friday service", amount: 48.5, status: "completed", createdAt: daysAgo(2) },
  { id: "tx_4", type: "reservation", description: "Private dining deposit — Table 12", amount: 500, status: "completed", createdAt: daysAgo(3), reference: "RES-118" },
  { id: "tx_5", type: "merchandise", description: "Branded merch — Tote bag x4", amount: 120, status: "completed", createdAt: daysAgo(4) },
  { id: "tx_6", type: "event", description: "Wine tasting tickets (8)", amount: 640, status: "completed", createdAt: daysAgo(5), reference: "EVT-22" },
  { id: "tx_7", type: "fee", description: "Processing fee", amount: -18.45, status: "completed", createdAt: daysAgo(5) },
  { id: "tx_8", type: "withdrawal", description: "Withdrawal — Chase •••• 4821", amount: -1000, status: "completed", createdAt: daysAgo(7), reference: "WD-007" },
  { id: "tx_9", type: "gift_card", description: "Gift card — $75 (Jordan K.)", amount: 75, status: "pending", createdAt: daysAgo(0), reference: "GC-2842" },
];

export function getTransactions(): WalletTransaction[] {
  try {
    const raw = localStorage.getItem(TX_KEY);
    if (!raw) {
      const seeded = defaultSeed();
      localStorage.setItem(TX_KEY, JSON.stringify(seeded));
      return seeded;
    }
    return JSON.parse(raw);
  } catch {
    return defaultSeed();
  }
}

export function saveTransactions(txs: WalletTransaction[]) {
  localStorage.setItem(TX_KEY, JSON.stringify(txs));
  window.dispatchEvent(new Event(WALLET_EVENT));
}

export function addTransaction(tx: Omit<WalletTransaction, "id" | "createdAt"> & { createdAt?: string }) {
  const txs = getTransactions();
  const full: WalletTransaction = {
    id: `tx_${Date.now()}`,
    createdAt: tx.createdAt || new Date().toISOString(),
    ...tx,
  };
  saveTransactions([full, ...txs]);
  return full;
}

export function getBalance(txs?: WalletTransaction[]) {
  const list = txs || getTransactions();
  return list.filter((t) => t.status === "completed").reduce((s, t) => s + t.amount, 0);
}

export function getPending(txs?: WalletTransaction[]) {
  const list = txs || getTransactions();
  return list.filter((t) => t.status === "pending").reduce((s, t) => s + Math.max(t.amount, 0), 0);
}

export function getLifetimeRevenue(txs?: WalletTransaction[]) {
  const list = txs || getTransactions();
  return list
    .filter((t) => t.status === "completed" && t.amount > 0 && t.type !== "withdrawal")
    .reduce((s, t) => s + t.amount, 0);
}

export function getMethods(): WithdrawalMethod[] {
  try {
    const raw = localStorage.getItem(METHOD_KEY);
    if (!raw) {
      const seeded: WithdrawalMethod[] = [
        { id: "m_1", label: "Primary bank", type: "bank", details: "Chase •••• 4821" },
      ];
      localStorage.setItem(METHOD_KEY, JSON.stringify(seeded));
      return seeded;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveMethods(methods: WithdrawalMethod[]) {
  localStorage.setItem(METHOD_KEY, JSON.stringify(methods));
  window.dispatchEvent(new Event(WALLET_EVENT));
}

export const TYPE_LABELS: Record<TxType, string> = {
  gift_card: "Gift card",
  tip: "Tip",
  reservation: "Reservation",
  merchandise: "Merchandise",
  event: "Event",
  other: "Other",
  withdrawal: "Withdrawal",
  fee: "Fee",
};
