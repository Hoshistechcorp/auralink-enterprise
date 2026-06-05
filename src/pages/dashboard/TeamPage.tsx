import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus, Shield, Trash2, Mail, MapPin, KeyRound, Copy, Check,
  Eye, EyeOff, Users2, Pencil, X, Lock, Building2,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/aura/DashboardLayout";
import {
  BRANCHES,
  BranchManager,
  getManagers,
  addManager,
  updateManager,
  removeManager,
} from "@/lib/branchManagers";

type EditForm = {
  name: string;
  email: string;
  password: string;
  branchId: string;
};

const emptyForm: EditForm = { name: "", email: "", password: "", branchId: BRANCHES[0].id };

const randomPassword = () =>
  Math.random().toString(36).slice(-4) + Math.floor(1000 + Math.random() * 9000);

const TeamPage = () => {
  const [managers, setManagers] = useState<BranchManager[]>(getManagers());
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState<EditForm>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [revealId, setRevealId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [branchFilter, setBranchFilter] = useState<string>("all");

  const refresh = () => setManagers(getManagers());

  const handleCreate = () => {
    if (!form.name || !form.email || !form.password) {
      toast({ title: "Missing details", description: "Name, email, and password are required." });
      return;
    }
    const branch = BRANCHES.find((b) => b.id === form.branchId)!;
    try {
      addManager({
        name: form.name,
        email: form.email,
        password: form.password,
        branchId: branch.id,
        branchLabel: branch.label,
      });
      refresh();
      setShowAdd(false);
      setForm(emptyForm);
      toast({ title: "Branch manager created", description: `${form.email} can now sign in.` });
    } catch (e: any) {
      toast({ title: "Couldn't create manager", description: e.message });
    }
  };

  const handleSaveEdit = (id: string) => {
    const branch = BRANCHES.find((b) => b.id === form.branchId)!;
    updateManager(id, {
      name: form.name,
      email: form.email,
      password: form.password,
      branchId: branch.id,
      branchLabel: branch.label,
    });
    refresh();
    setEditingId(null);
    setForm(emptyForm);
    toast({ title: "Manager updated" });
  };

  const handleDelete = (id: string) => {
    removeManager(id);
    refresh();
    toast({ title: "Manager removed" });
  };

  const handleCopyCreds = (m: BranchManager) => {
    const text = `AuraLink Manager Login\nEmail: ${m.email}\nPassword: ${m.password}\nBranch: ${m.branchLabel}\nLogin: ${window.location.origin}/login`;
    navigator.clipboard.writeText(text);
    setCopiedId(m.id);
    setTimeout(() => setCopiedId(null), 2000);
    toast({ title: "Login details copied", description: "Share securely with the manager." });
  };

  const handleResetPassword = (id: string) => {
    const newPass = randomPassword();
    updateManager(id, { password: newPass });
    refresh();
    toast({ title: "Password reset", description: `New password: ${newPass}` });
  };

  const filtered = branchFilter === "all"
    ? managers
    : managers.filter((m) => m.branchId === branchFilter);

  return (
    <DashboardLayout title="Branch Managers" subtitle="Create logins and assign managers to a single branch">
      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total Managers", value: managers.length, icon: Users2 },
          { label: "Branches Covered", value: new Set(managers.map((m) => m.branchId)).size, icon: Building2 },
          { label: "Active", value: managers.filter((m) => m.status === "active").length, icon: Shield },
          { label: "Pending Invite", value: managers.filter((m) => m.status === "invited").length, icon: Mail },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="p-4 rounded-2xl bg-card border">
            <div className="flex items-center gap-2 mb-1">
              <stat.icon className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
            <div className="text-xl font-bold">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* How it works */}
      <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 mb-6 flex gap-3">
        <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Branch-scoped access.</span> Each manager
          signs in with their own email + password and only sees data for the branch you assign them.
          The location switcher is locked, and admin tools (Team, Locations, Subscription, Enterprise) are hidden from their view.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setBranchFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${branchFilter === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
          >
            All branches ({managers.length})
          </button>
          {BRANCHES.map((b) => {
            const count = managers.filter((m) => m.branchId === b.id).length;
            return (
              <button
                key={b.id}
                onClick={() => setBranchFilter(b.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${branchFilter === b.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`}
              >
                {b.label.split("—")[1]?.trim() || b.label} ({count})
              </button>
            );
          })}
        </div>
        <button
          onClick={() => { setForm({ ...emptyForm, password: randomPassword() }); setShowAdd(true); }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <UserPlus className="w-4 h-4" /> Add Branch Manager
        </button>
      </div>

      {/* Add Form */}
      <AnimatePresence>
        {showAdd && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mb-4">
            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="font-medium mb-3">New Branch Manager</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Full Name</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" className="w-full px-3 py-2 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Login Email</label>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="manager@bellavista.com" className="w-full px-3 py-2 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Password</label>
                  <div className="flex gap-2">
                    <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="flex-1 px-3 py-2 rounded-xl bg-muted/50 border text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    <button onClick={() => setForm({ ...form, password: randomPassword() })} className="px-3 py-2 rounded-xl bg-muted text-xs font-medium" title="Generate">
                      <KeyRound className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Assigned Branch</label>
                  <select value={form.branchId} onChange={(e) => setForm({ ...form, branchId: e.target.value })} className="w-full px-3 py-2 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                    {BRANCHES.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button onClick={() => { setShowAdd(false); setForm(emptyForm); }} className="px-4 py-2 rounded-xl bg-muted text-sm font-medium">Cancel</button>
                <button onClick={handleCreate} className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Create Login</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Managers list */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="p-8 rounded-2xl bg-card border text-center text-sm text-muted-foreground">
            No branch managers yet. Click <b>Add Branch Manager</b> to create the first login.
          </div>
        )}

        {filtered.map((m, i) => {
          const isEditing = editingId === m.id;
          const revealed = revealId === m.id;
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${isEditing ? "bg-primary/5 border-primary/30" : "bg-card hover:border-primary/20"}`}
            >
              {isEditing ? (
                <div className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="px-3 py-2 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="px-3 py-2 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password" className="px-3 py-2 rounded-xl bg-muted/50 border text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    <select value={form.branchId} onChange={(e) => setForm({ ...form, branchId: e.target.value })} className="px-3 py-2 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                      {BRANCHES.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
                    </select>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button onClick={() => { setEditingId(null); setForm(emptyForm); }} className="p-2 rounded-lg bg-muted"><X className="w-4 h-4" /></button>
                    <button onClick={() => handleSaveEdit(m.id)} className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium">Save</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                      {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium">{m.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider flex items-center gap-1">
                          <Shield className="w-3 h-3" /> Branch Manager
                        </span>
                        {m.status === "invited" && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-aura-warning/10 text-aura-warning font-medium">Pending First Login</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5 flex-wrap">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {m.email}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" /> {m.branchLabel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs mt-1.5">
                        <span className="text-muted-foreground">Password:</span>
                        <code className="px-2 py-0.5 rounded bg-muted font-mono">
                          {revealed ? m.password : "••••••••"}
                        </code>
                        <button onClick={() => setRevealId(revealed ? null : m.id)} className="text-muted-foreground hover:text-foreground">
                          {revealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 flex-wrap">
                    <button
                      onClick={() => handleCopyCreds(m)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted hover:bg-muted/70 text-xs font-medium transition-colors"
                      title="Copy login details"
                    >
                      {copiedId === m.id ? <Check className="w-3.5 h-3.5 text-aura-success" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedId === m.id ? "Copied" : "Copy login"}
                    </button>
                    <button
                      onClick={() => handleResetPassword(m.id)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted hover:bg-muted/70 text-xs font-medium transition-colors"
                      title="Reset password"
                    >
                      <KeyRound className="w-3.5 h-3.5" /> Reset
                    </button>
                    <button
                      onClick={() => {
                        setEditingId(m.id);
                        setForm({ name: m.name, email: m.email, password: m.password, branchId: m.branchId });
                      }}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button
                      onClick={() => handleDelete(m.id)}
                      className="p-2 rounded-lg hover:bg-destructive/10 transition-colors"
                      title="Remove access"
                    >
                      <Trash2 className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default TeamPage;
