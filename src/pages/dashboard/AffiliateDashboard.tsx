import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users2, MousePointer, DollarSign, TrendingUp, Trophy, Link2, Copy, Check,
  Gift, CalendarDays, ShoppingBag, Ticket, ExternalLink, Plus, Megaphone,
  Tag, BarChart3, Eye, Trash2, Search,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/aura/DashboardLayout";

const uid = () => crypto.randomUUID();
const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";
const btnPrimary = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity";

const metrics = [
  { label: "Affiliates", value: "148", change: "+12", icon: Users2 },
  { label: "Total Clicks", value: "24,891", change: "+1,240", icon: MousePointer },
  { label: "Conversions", value: "1,847", change: "+89", icon: TrendingUp },
  { label: "Revenue", value: "$18,420", change: "+$2,100", icon: DollarSign },
];

const leaderboard = [
  { rank: 1, name: "Sarah Johnson", clicks: 4821, conversions: 342, revenue: "$4,280", avatar: "SJ" },
  { rank: 2, name: "Mike Chen", clicks: 3492, conversions: 271, revenue: "$3,150", avatar: "MC" },
  { rank: 3, name: "Emma Davis", clicks: 2847, conversions: 198, revenue: "$2,470", avatar: "ED" },
  { rank: 4, name: "Alex Rivera", clicks: 2103, conversions: 156, revenue: "$1,920", avatar: "AR" },
  { rank: 5, name: "Lisa Park", clicks: 1892, conversions: 134, revenue: "$1,680", avatar: "LP" },
];

const revenueData = [
  { month: "Jan", revenue: 2400 },
  { month: "Feb", revenue: 3100 },
  { month: "Mar", revenue: 2800 },
  { month: "Apr", revenue: 3600 },
  { month: "May", revenue: 4200 },
  { month: "Jun", revenue: 4800 },
];

const products = [
  { id: "gift", label: "Gift Cards", icon: Gift, commission: "8%", links: 42 },
  { id: "dining", label: "Dining Experiences", icon: CalendarDays, commission: "12%", links: 28 },
  { id: "events", label: "Events", icon: Ticket, commission: "10%", links: 19 },
  { id: "merch", label: "Merchandise", icon: ShoppingBag, commission: "15%", links: 11 },
];

const rankColors = ["text-aura-warning", "text-muted-foreground", "text-secondary"];

interface Campaign {
  id: string;
  name: string;
  description: string;
  commission: string;
  startDate: string;
  endDate: string;
  active: boolean;
  clicks: number;
  conversions: number;
  revenue: number;
}

interface PromoCode {
  id: string;
  code: string;
  affiliateName: string;
  affiliateEmail: string;
  campaignId: string;
  discount: string;
  discountType: "percent" | "fixed";
  uses: number;
  maxUses: number;
  revenue: number;
  active: boolean;
  createdAt: string;
}

const defaultCampaigns: Campaign[] = [
  { id: uid(), name: "Summer Dining Special", description: "20% off all dining experiences for summer", commission: "12%", startDate: "2026-06-01", endDate: "2026-08-31", active: true, clicks: 8420, conversions: 624, revenue: 7800 },
  { id: uid(), name: "Holiday Gift Card Push", description: "Promote gift cards during the holiday season", commission: "10%", startDate: "2026-11-15", endDate: "2026-12-31", active: true, clicks: 12400, conversions: 891, revenue: 11200 },
  { id: uid(), name: "New Year Events", description: "Drive ticket sales for NYE events", commission: "15%", startDate: "2026-12-01", endDate: "2027-01-05", active: false, clicks: 3200, conversions: 198, revenue: 2960 },
];

const defaultPromoCodes: PromoCode[] = [
  { id: uid(), code: "SARAH20", affiliateName: "Sarah Johnson", affiliateEmail: "sarah@example.com", campaignId: defaultCampaigns[0].id, discount: "20", discountType: "percent", uses: 142, maxUses: 500, revenue: 4280, active: true, createdAt: "2026-01-15" },
  { id: uid(), code: "MIKE15", affiliateName: "Mike Chen", affiliateEmail: "mike@example.com", campaignId: defaultCampaigns[0].id, discount: "15", discountType: "percent", uses: 98, maxUses: 300, revenue: 3150, active: true, createdAt: "2026-02-01" },
  { id: uid(), code: "EMMA10", affiliateName: "Emma Davis", affiliateEmail: "emma@example.com", campaignId: defaultCampaigns[1].id, discount: "10", discountType: "fixed", uses: 67, maxUses: 200, revenue: 2470, active: true, createdAt: "2026-02-20" },
  { id: uid(), code: "ALEX25", affiliateName: "Alex Rivera", affiliateEmail: "alex@example.com", campaignId: defaultCampaigns[2].id, discount: "25", discountType: "percent", uses: 45, maxUses: 150, revenue: 1920, active: false, createdAt: "2026-03-01" },
];

const tabs = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "campaigns", label: "Campaigns", icon: Megaphone },
  { id: "promo-codes", label: "Promo Codes", icon: Tag },
] as const;
type TabId = (typeof tabs)[number]["id"];

const AffiliateDashboard = () => {
  const [tab, setTab] = useState<TabId>("overview");
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState("gift");
  const [campaigns, setCampaigns] = useState<Campaign[]>(defaultCampaigns);
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>(defaultPromoCodes);
  const [searchCode, setSearchCode] = useState("");

  // Campaign modal
  const [campaignModal, setCampaignModal] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: "", description: "", commission: "", startDate: "", endDate: "" });

  // Promo code modal
  const [promoModal, setPromoModal] = useState(false);
  const [newPromo, setNewPromo] = useState({ code: "", affiliateName: "", affiliateEmail: "", campaignId: "", discount: "", discountType: "percent" as "percent" | "fixed", maxUses: "" });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const createCampaign = () => {
    if (!newCampaign.name || !newCampaign.commission) return;
    setCampaigns([...campaigns, {
      id: uid(), ...newCampaign, active: true, clicks: 0, conversions: 0, revenue: 0,
    }]);
    setCampaignModal(false);
    setNewCampaign({ name: "", description: "", commission: "", startDate: "", endDate: "" });
    toast({ title: "Campaign created", description: `"${newCampaign.name}" is now live.` });
  };

  const createPromoCode = () => {
    if (!newPromo.code || !newPromo.affiliateName || !newPromo.campaignId) return;
    setPromoCodes([...promoCodes, {
      id: uid(), ...newPromo, uses: 0, maxUses: parseInt(newPromo.maxUses) || 100, revenue: 0, active: true, createdAt: new Date().toISOString().split("T")[0],
    }]);
    setPromoModal(false);
    setNewPromo({ code: "", affiliateName: "", affiliateEmail: "", campaignId: "", discount: "", discountType: "percent", maxUses: "" });
    toast({ title: "Promo code created", description: `Code "${newPromo.code}" assigned to ${newPromo.affiliateName}.` });
  };

  const filteredCodes = promoCodes.filter((p) =>
    !searchCode || p.code.toLowerCase().includes(searchCode.toLowerCase()) || p.affiliateName.toLowerCase().includes(searchCode.toLowerCase())
  );

  return (
    <DashboardLayout title="Affiliate Marketing" subtitle="Manage campaigns, promo codes & track performance">
      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m, i) => (
          <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="p-4 rounded-2xl bg-card border">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
              <m.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl font-bold">{m.value}</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-muted-foreground">{m.label}</span>
              <span className="aura-badge aura-badge-success text-[10px]">{m.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${tab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
            <t.icon className="w-3.5 h-3.5" /> {t.label}
          </button>
        ))}
      </div>

      {/* ── Overview Tab ──────────────────── */}
      {tab === "overview" && (
        <div className="space-y-6">
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Affiliate Revenue</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]} />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="lg:col-span-2 p-5 rounded-2xl bg-card border">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-aura-warning" />
                <h3 className="font-display font-semibold">Top Affiliates</h3>
              </div>
              <div className="space-y-3">
                {leaderboard.map((affiliate, i) => (
                  <motion.div key={affiliate.rank} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3">
                    <span className={`text-sm font-bold w-5 ${rankColors[i] || "text-muted-foreground"}`}>#{affiliate.rank}</span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-semibold text-primary">{affiliate.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{affiliate.name}</div>
                      <div className="text-[10px] text-muted-foreground">{affiliate.conversions} conversions</div>
                    </div>
                    <span className="text-xs font-semibold text-aura-success">{affiliate.revenue}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Link Generator */}
          <div className="p-5 rounded-2xl bg-card border">
            <div className="flex items-center gap-2 mb-5">
              <Link2 className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold">Affiliate Link Generator</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {products.map((product, i) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedProduct === product.id ? "bg-primary/5 border-primary/30" : "bg-card hover:bg-muted/50"}`}
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center"><product.icon className="w-4 h-4 text-primary" /></div>
                    <div>
                      <div className="text-sm font-medium">{product.label}</div>
                      <div className="text-[10px] text-muted-foreground">{product.links} active links</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="aura-badge aura-badge-gold text-[10px]">{product.commission} commission</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-muted text-[11px]">
                    <span className="flex-1 truncate text-muted-foreground">auralink.io/bv/ref/{product.id}</span>
                    <button onClick={(e) => { e.stopPropagation(); handleCopy(product.id); }}
                      className="shrink-0 w-6 h-6 rounded-md bg-card border flex items-center justify-center hover:bg-primary/10 transition-colors">
                      {copiedLink === product.id ? <Check className="w-3 h-3 text-aura-success" /> : <Copy className="w-3 h-3" />}
                    </button>
                    <button className="shrink-0 w-6 h-6 rounded-md bg-card border flex items-center justify-center hover:bg-primary/10 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Campaigns Tab ──────────────────── */}
      {tab === "campaigns" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display font-semibold text-lg">Affiliate Campaigns</h3>
              <p className="text-xs text-muted-foreground">{campaigns.length} campaigns — create targeted campaigns for your affiliates</p>
            </div>
            <button onClick={() => setCampaignModal(true)} className={btnPrimary}><Plus className="w-4 h-4" /> New Campaign</button>
          </div>

          <div className="space-y-3">
            {campaigns.map((c, i) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                className={`p-5 rounded-2xl border transition-all ${c.active ? "bg-card" : "bg-muted/20 opacity-70"}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Megaphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{c.name}</h4>
                      <p className="text-[11px] text-muted-foreground">{c.description}</p>
                    </div>
                  </div>
                  <Switch checked={c.active} onCheckedChange={(v) => setCampaigns(campaigns.map((x) => x.id === c.id ? { ...x, active: v } : x))} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-muted/50">
                    <p className="text-[10px] text-muted-foreground">Commission</p>
                    <p className="text-sm font-bold text-primary">{c.commission}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-muted/50">
                    <p className="text-[10px] text-muted-foreground">Clicks</p>
                    <p className="text-sm font-bold">{c.clicks.toLocaleString()}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-muted/50">
                    <p className="text-[10px] text-muted-foreground">Conversions</p>
                    <p className="text-sm font-bold">{c.conversions.toLocaleString()}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-muted/50">
                    <p className="text-[10px] text-muted-foreground">Revenue</p>
                    <p className="text-sm font-bold text-aura-success">${c.revenue.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                  <span>Start: {c.startDate}</span>
                  <span>End: {c.endDate}</span>
                  <span className="ml-auto">{promoCodes.filter((p) => p.campaignId === c.id).length} promo codes</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ── Promo Codes Tab ──────────────────── */}
      {tab === "promo-codes" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-semibold text-lg">Promo Codes</h3>
              <p className="text-xs text-muted-foreground">{promoCodes.length} codes — track usage and revenue per affiliate</p>
            </div>
            <button onClick={() => setPromoModal(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Create Promo Code</button>
          </div>

          {/* Search */}
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input value={searchCode} onChange={(e) => setSearchCode(e.target.value)} placeholder="Search by code or affiliate..." className={`${inputCls} pl-10`} />
          </div>

          {/* Codes Table */}
          <div className="rounded-2xl bg-card border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Code</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Affiliate</th>
                    <th className="text-center px-4 py-3 font-medium text-muted-foreground">Discount</th>
                    <th className="text-center px-4 py-3 font-medium text-muted-foreground">Usage</th>
                    <th className="text-center px-4 py-3 font-medium text-muted-foreground">Revenue</th>
                    <th className="text-center px-4 py-3 font-medium text-muted-foreground">Status</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCodes.map((p, i) => (
                    <motion.tr key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                      className="border-b last:border-0 hover:bg-muted/10 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-primary text-xs bg-primary/10 px-2 py-1 rounded-lg">{p.code}</span>
                          <button onClick={() => handleCopy(p.code)} className="w-6 h-6 rounded-md hover:bg-muted flex items-center justify-center">
                            {copiedLink === p.code ? <Check className="w-3 h-3 text-aura-success" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm font-medium">{p.affiliateName}</div>
                        <div className="text-[10px] text-muted-foreground">{p.affiliateEmail}</div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="aura-badge aura-badge-gold text-[10px]">
                          {p.discountType === "percent" ? `${p.discount}%` : `$${p.discount}`} off
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-xs font-medium">{p.uses}/{p.maxUses}</span>
                          <Progress value={(p.uses / p.maxUses) * 100} className="h-1.5 w-16" />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center font-medium text-aura-success">${p.revenue.toLocaleString()}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${p.active ? "bg-chart-2/10 text-chart-2" : "bg-muted text-muted-foreground"}`}>
                          {p.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={() => setPromoCodes(promoCodes.map((x) => x.id === p.id ? { ...x, active: !x.active } : x))}
                            className="w-7 h-7 rounded-lg hover:bg-muted flex items-center justify-center" title={p.active ? "Deactivate" : "Activate"}>
                            <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                          </button>
                          <button onClick={() => setPromoCodes(promoCodes.filter((x) => x.id !== p.id))}
                            className="w-7 h-7 rounded-lg hover:bg-destructive/10 flex items-center justify-center">
                            <Trash2 className="w-3.5 h-3.5 text-destructive" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Total Codes</p>
              <p className="text-xl font-bold">{promoCodes.length}</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Active Codes</p>
              <p className="text-xl font-bold text-primary">{promoCodes.filter((p) => p.active).length}</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Total Uses</p>
              <p className="text-xl font-bold">{promoCodes.reduce((s, p) => s + p.uses, 0).toLocaleString()}</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Total Revenue</p>
              <p className="text-xl font-bold text-aura-success">${promoCodes.reduce((s, p) => s + p.revenue, 0).toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Campaign Modal ──────────────────── */}
      <Dialog open={campaignModal} onOpenChange={setCampaignModal}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Create Campaign</DialogTitle></DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Campaign Name *</label>
              <input value={newCampaign.name} onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })} placeholder="e.g. Summer Dining Promo" className={inputCls} maxLength={80} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Description</label>
              <textarea value={newCampaign.description} onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })} placeholder="What is this campaign about?" rows={2} className={`${inputCls} resize-none`} maxLength={200} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Commission Rate *</label>
                <input value={newCampaign.commission} onChange={(e) => setNewCampaign({ ...newCampaign, commission: e.target.value })} placeholder="e.g. 15%" className={inputCls} maxLength={10} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Start Date</label>
                <input type="date" value={newCampaign.startDate} onChange={(e) => setNewCampaign({ ...newCampaign, startDate: e.target.value })} className={inputCls} />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">End Date</label>
                <input type="date" value={newCampaign.endDate} onChange={(e) => setNewCampaign({ ...newCampaign, endDate: e.target.value })} className={inputCls} />
              </div>
            </div>
            <button onClick={createCampaign} className={`${btnPrimary} w-full justify-center`}>
              <Megaphone className="w-4 h-4" /> Create Campaign
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Promo Code Modal ──────────────────── */}
      <Dialog open={promoModal} onOpenChange={setPromoModal}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Create Promo Code</DialogTitle></DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Promo Code *</label>
              <input value={newPromo.code} onChange={(e) => setNewPromo({ ...newPromo, code: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "") })} placeholder="e.g. SARAH20" className={`${inputCls} font-mono tracking-wider`} maxLength={20} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Affiliate Name *</label>
                <input value={newPromo.affiliateName} onChange={(e) => setNewPromo({ ...newPromo, affiliateName: e.target.value })} placeholder="Full name" className={inputCls} maxLength={80} />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Affiliate Email</label>
                <input type="email" value={newPromo.affiliateEmail} onChange={(e) => setNewPromo({ ...newPromo, affiliateEmail: e.target.value })} placeholder="email@example.com" className={inputCls} maxLength={255} />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Campaign *</label>
              <select value={newPromo.campaignId} onChange={(e) => setNewPromo({ ...newPromo, campaignId: e.target.value })} className={inputCls}>
                <option value="">Select campaign...</option>
                {campaigns.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Discount</label>
                <input value={newPromo.discount} onChange={(e) => setNewPromo({ ...newPromo, discount: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="20" className={inputCls} maxLength={6} />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Type</label>
                <select value={newPromo.discountType} onChange={(e) => setNewPromo({ ...newPromo, discountType: e.target.value as "percent" | "fixed" })} className={inputCls}>
                  <option value="percent">Percent %</option>
                  <option value="fixed">Fixed $</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Max Uses</label>
                <input value={newPromo.maxUses} onChange={(e) => setNewPromo({ ...newPromo, maxUses: e.target.value.replace(/[^0-9]/g, "") })} placeholder="100" className={inputCls} maxLength={6} />
              </div>
            </div>
            <button onClick={createPromoCode} className={`${btnPrimary} w-full justify-center`}>
              <Tag className="w-4 h-4" /> Create Promo Code
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default AffiliateDashboard;
