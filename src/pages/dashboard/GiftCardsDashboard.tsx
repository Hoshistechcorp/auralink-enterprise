import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gift, DollarSign, CreditCard, Plus, Save, Trash2, TrendingUp, Users,
  ArrowUp, ArrowDown, ShoppingBag, Repeat, Eye,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/aura/DashboardLayout";

const uid = () => crypto.randomUUID();
const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";
const btnPrimary = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity";

interface GiftCardItem { id: string; name: string; amount: string; description: string; active: boolean; }

/* ── Mock Analytics Data ──────────────────────────── */
const metrics = [
  { label: "Total Revenue", value: "$12,480", change: "+22%", up: true, icon: DollarSign },
  { label: "Cards Sold", value: "187", change: "+31%", up: true, icon: ShoppingBag },
  { label: "Cards Redeemed", value: "94", change: "+18%", up: true, icon: Repeat },
  { label: "Active Balance", value: "$6,240", change: "-8%", up: false, icon: CreditCard },
];

const salesByWeek = [
  { day: "Mon", sales: 4 }, { day: "Tue", sales: 7 }, { day: "Wed", sales: 5 },
  { day: "Thu", sales: 9 }, { day: "Fri", sales: 14 }, { day: "Sat", sales: 18 }, { day: "Sun", sales: 12 },
];

const revenueByMonth = [
  { month: "Oct", revenue: 1800 }, { month: "Nov", revenue: 2400 }, { month: "Dec", revenue: 4200 },
  { month: "Jan", revenue: 1600 }, { month: "Feb", revenue: 1280 }, { month: "Mar", revenue: 1200 },
];

const denominationBreakdown = [
  { name: "$50", value: 42, color: "hsl(var(--primary))" },
  { name: "$100", value: 68, color: "hsl(var(--secondary))" },
  { name: "$200", value: 48, color: "hsl(var(--chart-4))" },
  { name: "$500", value: 29, color: "hsl(var(--chart-2))" },
];

const topPurchaseChannels = [
  { channel: "Microsite", pct: 52, count: 97 },
  { channel: "In-Store", pct: 28, count: 52 },
  { channel: "QR Code", pct: 12, count: 22 },
  { channel: "Referral", pct: 8, count: 16 },
];

const recentTransactions = [
  { id: "GC-1847", buyer: "Sarah M.", recipient: "John D.", amount: "$100", type: "Purchase", time: "12m ago" },
  { id: "GC-1846", buyer: "Mike R.", recipient: "—", amount: "$50", type: "Redemption", time: "34m ago" },
  { id: "GC-1845", buyer: "Emily K.", recipient: "Lisa W.", amount: "$200", type: "Purchase", time: "1h ago" },
  { id: "GC-1844", buyer: "James T.", recipient: "—", amount: "$75", type: "Redemption", time: "2h ago" },
  { id: "GC-1843", buyer: "Anna P.", recipient: "Chris B.", amount: "$500", type: "Purchase", time: "3h ago" },
];

const tabs = [
  { id: "analytics", label: "Analytics" },
  { id: "manage", label: "Manage Cards" },
  { id: "transactions", label: "Transactions" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const GiftCardsDashboard = () => {
  const [tab, setTab] = useState<TabId>("analytics");
  const [giftCards, setGiftCards] = useState<GiftCardItem[]>([
    { id: uid(), name: "Classic Dinner", amount: "50", description: "Perfect for a starter and main course", active: true },
    { id: uid(), name: "Fine Dining Experience", amount: "100", description: "Enjoy a full 3-course dinner for two", active: true },
    { id: uid(), name: "Chef's Table", amount: "200", description: "An unforgettable multi-course tasting menu", active: true },
    { id: uid(), name: "Ultimate Celebration", amount: "500", description: "Wine pairing, private dining & the full experience", active: true },
  ]);

  const addGiftCard = () => setGiftCards([...giftCards, { id: uid(), name: "", amount: "", description: "", active: true }]);
  const updateGiftCard = (id: string, patch: Partial<GiftCardItem>) => setGiftCards((g) => g.map((gc) => (gc.id === id ? { ...gc, ...patch } : gc)));
  const deleteGiftCard = (id: string) => setGiftCards((g) => g.filter((gc) => gc.id !== id));
  const save = () => toast({ title: "Gift Cards saved", description: "Changes published to your microsite." });

  return (
    <DashboardLayout title="Gift Cards" subtitle="Manage gift card offerings, track sales & redemptions">
      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m, i) => (
          <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="p-4 rounded-2xl bg-card border">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center"><m.icon className="w-4 h-4 text-primary" /></div>
              <span className={`text-[10px] font-medium flex items-center gap-0.5 ${m.up ? "text-aura-success" : "text-destructive"}`}>
                {m.up ? <ArrowUp className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />}{m.change}
              </span>
            </div>
            <div className="text-2xl font-bold">{m.value}</div>
            <span className="text-xs text-muted-foreground">{m.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${tab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Analytics Tab ──────────────────── */}
      {tab === "analytics" && (
        <div className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Weekly Sales</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={salesByWeek}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} name="Cards Sold" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Monthly Revenue</h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={revenueByMonth}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(v) => `$${v}`} />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="hsl(var(--secondary))" strokeWidth={2} dot={{ fill: "hsl(var(--secondary))" }} name="Revenue" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Denomination Breakdown</h3>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={denominationBreakdown} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={3}>
                    {denominationBreakdown.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                {denominationBreakdown.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                    <span className="text-muted-foreground">{d.name}</span>
                    <span className="font-medium">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Purchase Channels</h3>
              <div className="space-y-3">
                {topPurchaseChannels.map((c) => (
                  <div key={c.channel} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-24">{c.channel}</span>
                    <Progress value={c.pct} className="h-2 flex-1" />
                    <span className="text-xs text-muted-foreground w-12 text-right">{c.count} sold</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Manage Cards Tab ───────────────── */}
      {tab === "manage" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="p-6 rounded-2xl bg-card border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-semibold text-lg">Gift Card Offerings</h3>
                <p className="text-xs text-muted-foreground">{giftCards.length} cards — customers can purchase these on your microsite</p>
              </div>
              <button onClick={addGiftCard} className={btnPrimary}><Plus className="w-4 h-4" /> Add Card</button>
            </div>

            <div className="space-y-3">
              {giftCards.map((gc, i) => (
                <motion.div key={gc.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className={`p-4 rounded-xl border transition-all ${gc.active ? "bg-muted/30" : "bg-muted/10 opacity-60"}`}>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Gift className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium flex-1">{gc.name || "New Gift Card"}</span>
                        <Switch checked={gc.active} onCheckedChange={(v) => updateGiftCard(gc.id, { active: v })} />
                      </div>
                      <div className="grid sm:grid-cols-3 gap-2">
                        <input value={gc.name} onChange={(e) => updateGiftCard(gc.id, { name: e.target.value })} placeholder="Card name" className={inputCls} maxLength={80} />
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input value={gc.amount} onChange={(e) => updateGiftCard(gc.id, { amount: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="Amount" className={`${inputCls} pl-9`} maxLength={8} />
                        </div>
                        <button onClick={() => deleteGiftCard(gc.id)} className="self-center p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                      <textarea value={gc.description} onChange={(e) => updateGiftCard(gc.id, { description: e.target.value })} placeholder="Description" rows={2} className={`${inputCls} resize-none`} maxLength={200} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-end mt-6"><button onClick={save} className={btnPrimary}><Save className="w-4 h-4" /> Save Gift Cards</button></div>
          </div>
        </motion.div>
      )}

      {/* ── Transactions Tab ───────────────── */}
      {tab === "transactions" && (
        <div className="p-5 rounded-2xl bg-card border">
          <h3 className="font-display font-semibold mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">ID</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Buyer</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Recipient</th>
                  <th className="text-center px-4 py-3 font-medium text-muted-foreground">Amount</th>
                  <th className="text-center px-4 py-3 font-medium text-muted-foreground">Type</th>
                  <th className="text-right px-4 py-3 font-medium text-muted-foreground">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx, i) => (
                  <motion.tr key={tx.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }} className="border-b last:border-0 hover:bg-muted/10 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{tx.id}</td>
                    <td className="px-4 py-3 font-medium">{tx.buyer}</td>
                    <td className="px-4 py-3 text-muted-foreground">{tx.recipient}</td>
                    <td className="px-4 py-3 text-center font-medium">{tx.amount}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${tx.type === "Purchase" ? "bg-primary/10 text-primary" : "bg-chart-4/20 text-chart-4"}`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-xs text-muted-foreground">{tx.time}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default GiftCardsDashboard;
