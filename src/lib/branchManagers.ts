// Branch Manager registry (localStorage-based prototype)
// Super admin creates managers, assigns each to one branch, sets a password.
// Managers log in with their email + password and are scoped to that branch.

export interface Branch {
  id: string;
  label: string;
}

export interface BranchManager {
  id: string;
  name: string;
  email: string;
  password: string; // plaintext OK for prototype
  branchId: string;
  branchLabel: string;
  status: "active" | "invited";
  createdAt: string;
  lastActive: string;
}

const KEY = "aura_branch_managers";

export const BRANCHES: Branch[] = [
  { id: "downtown", label: "Bella Vista — Downtown" },
  { id: "midtown", label: "Bella Vista — Midtown" },
  { id: "brooklyn", label: "Bella Vista — Brooklyn" },
];

const seed: BranchManager[] = [
  {
    id: "bm-1",
    name: "Sofia Romano",
    email: "sofia.downtown@bellavista.com",
    password: "downtown123",
    branchId: "downtown",
    branchLabel: "Bella Vista — Downtown",
    status: "active",
    createdAt: new Date().toISOString(),
    lastActive: "2h ago",
  },
  {
    id: "bm-2",
    name: "Luca Moretti",
    email: "luca.midtown@bellavista.com",
    password: "midtown123",
    branchId: "midtown",
    branchLabel: "Bella Vista — Midtown",
    status: "active",
    createdAt: new Date().toISOString(),
    lastActive: "1d ago",
  },
];

export const getManagers = (): BranchManager[] => {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw);
};

export const saveManagers = (list: BranchManager[]) => {
  localStorage.setItem(KEY, JSON.stringify(list));
};

export const addManager = (m: Omit<BranchManager, "id" | "createdAt" | "lastActive" | "status">): BranchManager => {
  const list = getManagers();
  if (list.find((x) => x.email.toLowerCase() === m.email.toLowerCase())) {
    throw new Error("A manager with this email already exists");
  }
  const created: BranchManager = {
    ...m,
    id: `bm-${Date.now()}`,
    status: "invited",
    createdAt: new Date().toISOString(),
    lastActive: "—",
  };
  saveManagers([...list, created]);
  return created;
};

export const updateManager = (id: string, patch: Partial<BranchManager>) => {
  const list = getManagers().map((m) => (m.id === id ? { ...m, ...patch } : m));
  saveManagers(list);
};

export const removeManager = (id: string) => {
  saveManagers(getManagers().filter((m) => m.id !== id));
};

export const findManagerByCredentials = (email: string, password: string): BranchManager | undefined => {
  return getManagers().find(
    (m) => m.email.toLowerCase() === email.toLowerCase() && m.password === password,
  );
};
