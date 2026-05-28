import { useEffect, useMemo, useState } from "react";
import { Link2, Copy, Check, Pencil, Pause, Play, Trash2, Plus, Scissors, ExternalLink, BarChart3, Search } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/aura/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

type LinkStatus = "active" | "suspended" | "discontinued";

interface ManagedLink {
  id: string;
  label: string;
  slug: string;
  destination: string;
  status: LinkStatus;
  clicks: number;
  createdAt: string;
}

const SHORT_DOMAIN = "4i.fyi";
const STORAGE_KEY = "auralink:managed-links";

const SEED: ManagedLink[] = [
  { id: "l1", label: "Main Microsite", slug: "bv", destination: "https://4i.fyi/restaurant/bella-vista-downtown/microsite", status: "active", clicks: 4821, createdAt: "2025-09-10" },
  { id: "l2", label: "Dinner Menu", slug: "bv-menu", destination: "https://4i.fyi/restaurant/bella-vista-downtown/menu", status: "active", clicks: 2103, createdAt: "2025-09-12" },
  { id: "l3", label: "Reserve a Table", slug: "bv-book", destination: "https://reservations.bellavista.com/downtown?source=qr&utm_campaign=table", status: "active", clicks: 1287, createdAt: "2025-09-14" },
  { id: "l4", label: "Summer Promo (ended)", slug: "summer25", destination: "https://4i.fyi/promo/summer-2025", status: "discontinued", clicks: 542, createdAt: "2025-06-01" },
  { id: "l5", label: "Brooklyn Soft Launch", slug: "bk-launch", destination: "https://4i.fyi/restaurant/bella-vista-brooklyn?preview=1", status: "suspended", clicks: 96, createdAt: "2025-10-02" },
];

const loadLinks = (): ManagedLink[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return SEED;
};

const saveLinks = (links: ManagedLink[]) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(links)); } catch {}
};

const randomSlug = () => Math.random().toString(36).slice(2, 8);

const statusStyles: Record<LinkStatus, string> = {
  active: "bg-aura-success/15 text-aura-success",
  suspended: "bg-aura-warning/15 text-aura-warning",
  discontinued: "bg-muted text-muted-foreground line-through",
};

const LinksPage = () => {
  const [links, setLinks] = useState<ManagedLink[]>(() => loadLinks());
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | LinkStatus>("all");
  const [editing, setEditing] = useState<ManagedLink | null>(null);
  const [creating, setCreating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => saveLinks(links), [links]);

  const filtered = useMemo(() => {
    return links.filter((l) => {
      if (filter !== "all" && l.status !== filter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return l.label.toLowerCase().includes(q) || l.slug.toLowerCase().includes(q) || l.destination.toLowerCase().includes(q);
    });
  }, [links, query, filter]);

  const totals = useMemo(() => ({
    total: links.length,
    active: links.filter((l) => l.status === "active").length,
    clicks: links.reduce((sum, l) => sum + l.clicks, 0),
  }), [links]);

  const handleCopy = (link: ManagedLink) => {
    const url = `https://${SHORT_DOMAIN}/${link.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedId(link.id);
    toast.success("Short link copied");
    setTimeout(() => setCopiedId(null), 1500);
  };

  const updateLink = (id: string, patch: Partial<ManagedLink>) => {
    setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };

  const handleStatus = (l: ManagedLink, status: LinkStatus) => {
    updateLink(l.id, { status });
    toast.success(`Link ${status}`);
  };

  const handleDelete = (l: ManagedLink) => {
    if (!confirm(`Delete "${l.label}"? This cannot be undone.`)) return;
    setLinks((prev) => prev.filter((x) => x.id !== l.id));
    toast.success("Link deleted");
  };

  const handleShortenSlug = (l: ManagedLink) => {
    updateLink(l.id, { slug: randomSlug() });
    toast.success("New short slug generated");
  };

  const handleSaveEdit = (form: ManagedLink) => {
    if (!form.label.trim() || !form.destination.trim() || !form.slug.trim()) {
      toast.error("All fields are required");
      return;
    }
    const slugTaken = links.some((l) => l.id !== form.id && l.slug.toLowerCase() === form.slug.toLowerCase());
    if (slugTaken) { toast.error("Slug already in use"); return; }
    setLinks((prev) => prev.map((l) => (l.id === form.id ? form : l)));
    setEditing(null);
    toast.success("Link updated");
  };

  const handleCreate = (form: Omit<ManagedLink, "id" | "clicks" | "createdAt" | "status">) => {
    if (!form.label.trim() || !form.destination.trim()) { toast.error("Label and destination required"); return; }
    const slug = form.slug.trim() || randomSlug();
    if (links.some((l) => l.slug.toLowerCase() === slug.toLowerCase())) { toast.error("Slug already in use"); return; }
    const link: ManagedLink = {
      id: `l${Date.now()}`,
      label: form.label.trim(),
      destination: form.destination.trim(),
      slug,
      status: "active",
      clicks: 0,
      createdAt: new Date().toISOString().slice(0, 10),
    };
    setLinks((prev) => [link, ...prev]);
    setCreating(false);
    toast.success("Short link created");
  };

  return (
    <DashboardLayout title="Link Management" subtitle="Create, shorten, edit, suspend or discontinue your links">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
        {[
          { label: "Total Links", value: totals.total, icon: Link2 },
          { label: "Active", value: totals.active, icon: Play },
          { label: "Total Clicks", value: totals.clicks.toLocaleString(), icon: BarChart3 },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="p-4 rounded-2xl border bg-card">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <s.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl font-display font-bold mt-1">{s.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by label, slug or URL…" className="pl-9" />
        </div>
        <div className="flex gap-1 p-1 rounded-xl bg-muted">
          {(["all", "active", "suspended", "discontinued"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${filter === f ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <Button onClick={() => setCreating(true)} className="gap-2">
          <Plus className="w-4 h-4" /> New Link
        </Button>
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground border rounded-2xl bg-card">
            No links found.
          </div>
        )}
        {filtered.map((l) => {
          const shortUrl = `${SHORT_DOMAIN}/${l.slug}`;
          return (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl border bg-card flex flex-col lg:flex-row lg:items-center gap-3"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-sm">{l.label}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusStyles[l.status]}`}>
                    {l.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <button onClick={() => handleCopy(l)} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/15 transition-colors">
                    {copiedId === l.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {shortUrl}
                  </button>
                  <span className="text-muted-foreground text-xs">→</span>
                  <span className="text-xs text-muted-foreground truncate max-w-[280px] sm:max-w-[420px]" title={l.destination}>
                    {l.destination}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-muted-foreground">
                  <span>{l.clicks.toLocaleString()} clicks</span>
                  <span>·</span>
                  <span>Created {l.createdAt}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 flex-wrap">
                <Button size="sm" variant="ghost" onClick={() => handleShortenSlug(l)} title="Regenerate short slug">
                  <Scissors className="w-3.5 h-3.5" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => window.open(l.destination, "_blank")} title="Open destination">
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setEditing(l)} title="Edit">
                  <Pencil className="w-3.5 h-3.5" />
                </Button>
                {l.status === "active" ? (
                  <Button size="sm" variant="ghost" onClick={() => handleStatus(l, "suspended")} title="Suspend">
                    <Pause className="w-3.5 h-3.5" />
                  </Button>
                ) : l.status === "suspended" ? (
                  <Button size="sm" variant="ghost" onClick={() => handleStatus(l, "active")} title="Reactivate">
                    <Play className="w-3.5 h-3.5" />
                  </Button>
                ) : null}
                {l.status !== "discontinued" && (
                  <Button size="sm" variant="ghost" onClick={() => handleStatus(l, "discontinued")} className="text-aura-warning" title="Discontinue">
                    Discontinue
                  </Button>
                )}
                <Button size="sm" variant="ghost" onClick={() => handleDelete(l)} className="text-destructive" title="Delete">
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Edit Modal */}
      <LinkFormDialog
        open={!!editing}
        initial={editing}
        onClose={() => setEditing(null)}
        onSubmit={(form) => editing && handleSaveEdit({ ...editing, ...form })}
        title="Edit link"
      />

      {/* Create Modal */}
      <LinkFormDialog
        open={creating}
        initial={null}
        onClose={() => setCreating(false)}
        onSubmit={(form) => handleCreate(form)}
        title="Create short link"
      />
    </DashboardLayout>
  );
};

interface FormState { label: string; slug: string; destination: string }

const LinkFormDialog = ({
  open, initial, onClose, onSubmit, title,
}: {
  open: boolean;
  initial: ManagedLink | null;
  onClose: () => void;
  onSubmit: (f: FormState) => void;
  title: string;
}) => {
  const [form, setForm] = useState<FormState>({ label: "", slug: "", destination: "" });

  useEffect(() => {
    if (open) {
      setForm(initial
        ? { label: initial.label, slug: initial.slug, destination: initial.destination }
        : { label: "", slug: "", destination: "" });
    }
  }, [open, initial]);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader><DialogTitle>{title}</DialogTitle></DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="label">Label</Label>
            <Input id="label" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} placeholder="e.g. Dinner Menu" maxLength={80} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dest">Destination URL</Label>
            <Input id="dest" value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} placeholder="https://…" maxLength={500} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slug">Short slug</Label>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-1 px-3 h-10 rounded-md border bg-muted/40 text-sm">
                <span className="text-muted-foreground">{SHORT_DOMAIN}/</span>
                <input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value.replace(/[^a-zA-Z0-9-]/g, "") })}
                  placeholder="auto"
                  maxLength={32}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
              <Button type="button" variant="outline" size="sm" onClick={() => setForm({ ...form, slug: randomSlug() })}>
                <Scissors className="w-3.5 h-3.5 mr-1.5" /> Generate
              </Button>
            </div>
            <p className="text-[11px] text-muted-foreground">Letters, numbers and hyphens. Leave empty to auto-generate.</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={() => onSubmit(form)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LinksPage;
