// Staff registry (localStorage-based prototype)
// Waiters, chefs, hosts, bartenders, etc. — scoped to a single branch.
// Admins manage all staff; branch managers manage only their branch.

import { BRANCHES } from "./branchManagers";

export type StaffRole = "waiter" | "chef" | "host" | "bartender" | "manager_on_duty" | "other";

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: StaffRole;
  branchId: string;
  branchLabel: string;
  status: "active" | "inactive";
  createdAt: string;
}

const KEY = "aura_staff_members";

export const STAFF_ROLE_LABELS: Record<StaffRole, string> = {
  waiter: "Waiter",
  chef: "Chef",
  host: "Host",
  bartender: "Bartender",
  manager_on_duty: "Manager on Duty",
  other: "Other",
};

const seed: StaffMember[] = [
  {
    id: "st-1",
    name: "Maria Conti",
    email: "maria@bellavista.com",
    phone: "+1 555 0142",
    role: "waiter",
    branchId: "downtown",
    branchLabel: BRANCHES[0].label,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "st-2",
    name: "Antonio Russo",
    email: "antonio@bellavista.com",
    phone: "+1 555 0188",
    role: "chef",
    branchId: "downtown",
    branchLabel: BRANCHES[0].label,
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: "st-3",
    name: "Elena Bianchi",
    email: "elena@bellavista.com",
    role: "host",
    branchId: "midtown",
    branchLabel: BRANCHES[1].label,
    status: "active",
    createdAt: new Date().toISOString(),
  },
];

export const getStaff = (): StaffMember[] => {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw);
};

export const saveStaff = (list: StaffMember[]) => {
  localStorage.setItem(KEY, JSON.stringify(list));
};

export const addStaff = (m: Omit<StaffMember, "id" | "createdAt" | "status">): StaffMember => {
  const list = getStaff();
  if (m.email && list.find((x) => x.email.toLowerCase() === m.email.toLowerCase())) {
    throw new Error("A staff member with this email already exists");
  }
  const created: StaffMember = {
    ...m,
    id: `st-${Date.now()}`,
    status: "active",
    createdAt: new Date().toISOString(),
  };
  saveStaff([...list, created]);
  return created;
};

export const updateStaff = (id: string, patch: Partial<StaffMember>) => {
  saveStaff(getStaff().map((m) => (m.id === id ? { ...m, ...patch } : m)));
};

export const removeStaff = (id: string) => {
  saveStaff(getStaff().filter((m) => m.id !== id));
};
