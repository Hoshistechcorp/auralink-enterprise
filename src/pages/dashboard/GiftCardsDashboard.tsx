import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift, DollarSign, CreditCard, Plus, Save, Trash2, TrendingUp,
  ArrowUp, ArrowDown, ShoppingBag, Repeat, Eye, Search, Send,
  CheckCircle2, XCircle, Clock, User, Mail, MessageSquare, Ticket,
  ShieldCheck, ArrowRight,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/aura/DashboardLayout";

const uid = () => crypto.randomUUID();
const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";
const btnPrimary = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity";

interface GiftCardItem { id: string; name: string; amount: string; description: string; active: boolean; }

interface IssuedCard {
  id: string;
  code: string;
  cardName: string;
  amount: number;
  balance: number;
  buyerName: string;
  buyerEmail: string;
  recipientName: string;
  recipientEmail: string;
  message: string;
  status: "active" | "partially_used" | "fully_used" | "expired";
  purchasedAt: string;
  transactions: CardTransaction[];
}

interface CardTransaction {
  id: string;
  type: "purchase" | "redemption";
  amount: number;
  date: string;
  note: string;
}

/* ── Mock Data ──────────────────────────── */
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

const generateCode = () => `BV-GIFT-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

const defaultIssuedCards: IssuedCard[] = [
  {
    id: uid(), code: "BV-GIFT-50A", cardName: "Classic Dinner", amount: 50, balance: 50,
    buyerName: "Sarah M.", buyerEmail: "sarah@email.com", recipientName: "John D.", recipientEmail: "john@email.com",
    message: "Happy birthday!", status: "active", purchasedAt: "2026-03-01",
    transactions: [{ id: uid(), type: "purchase", amount: 50, date: "2026-03-01", note: "Gift card purchased" }],
  },
  {
    id: uid(), code: "BV-GIFT-100B", cardName: "Fine Dining Experience", amount: 100, balance: 72.50,
    buyerName: "David K.", buyerEmail: "david@email.com", recipientName: "Emily R.", recipientEmail: "emily@email.com",
    message: "Enjoy your anniversary dinner!", status: "partially_used", purchasedAt: "2026-02-14",
    transactions: [
      { id: uid(), type: "purchase", amount: 100, date: "2026-02-14", note: "Gift card purchased" },
      { id: uid(), type: "redemption", amount: 27.50, date: "2026-02-28", note: "Lunch for two — Table 12" },
    ],
  },
  {
    id: uid(), code: "BV-GIFT-200C", cardName: "Chef's Table", amount: 200, balance: 200,
    buyerName: "Emily R.", buyerEmail: "emily@email.com", recipientName: "James W.", recipientEmail: "james@email.com",
    message: "", status: "active", purchasedAt: "2026-03-05",
    transactions: [{ id: uid(), type: "purchase", amount: 200, date: "2026-03-05", note: "Gift card purchased" }],
  },
  {
    id: uid(), code: "BV-GIFT-500D", cardName: "Ultimate Celebration", amount: 500, balance: 0,
    buyerName: "James W.", buyerEmail: "james@email.com", recipientName: "Anna P.", recipientEmail: "anna@email.com",
    message: "Thank you for everything!", status: "fully_used", purchasedAt: "2026-01-10",
    transactions: [
      { id: uid(), type: "purchase", amount: 500, date: "2026-01-10", note: "Gift card purchased" },
      { id: uid(), type: "redemption", amount: 280, date: "2026-01-20", note: "Private dining event" },
      { id: uid(), type: "redemption", amount: 220, date: "2026-02-05", note: "Chef's tasting menu — Table 1" },
    ],
  },
];

const tabs = [
  { id: "analytics", label: "Analytics" },
  { id: "manage", label: "Manage Cards" },
  { id: "issued", label: "Issued Cards" },
  { id: "purchase", label: "Sell Card" },
  { id: "redeem", label: "Redeem" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const statusConfig = {
  active: { label: "Active", cls: "bg-chart-2/10 text-chart-2", icon: CheckCircle2 },
  partially_used: { label: "Partial", cls: "bg-aura-warning/10 text-aura-warning", icon: Clock },
  fully_used: { label: "Used", cls: "bg-muted text-muted-foreground", icon: XCircle },
  expired: { label: "Expired", cls: "bg-destructive/10 text-destructive", icon: XCircle },
};

const GiftCardsDashboard = () => {
  const [tab, setTab] = useState<TabId>("analytics");
  const [giftCards, setGiftCards] = useState<GiftCardItem[]>([
    { id: uid(), name: "Classic Dinner", amount: "50", description: "Perfect for a starter and main course", active: true },
    { id: uid(), name: "Fine Dining Experience", amount: "100", description: "Enjoy a full 3-course dinner for two", active: true },
    { id: uid(), name: "Chef's Table", amount: "200", description: "An unforgettable multi-course tasting menu", active: true },
    { id: uid(), name: "Ultimate Celebration", amount: "500", description: "Wine pairing, private dining & the full experience", active: true },
  ]);
  const [issuedCards, setIssuedCards] = useState<IssuedCard[]>(defaultIssuedCards);
  const [searchIssued, setSearchIssued] = useState("");

  // Add card modal
  const [addCardModal, setAddCardModal] = useState(false);
  const [newCard, setNewCard] = useState({ name: "", amount: "", description: "" });

  // Purchase flow
  const [selectedCardId, setSelectedCardId] = useState("");
  const [purchaseForm, setPurchaseForm] = useState({ buyerName: "", buyerEmail: "", recipientName: "", recipientEmail: "", message: "", customAmount: "" });
  const [purchaseComplete, setPurchaseComplete] = useState<{ code: string; amount: number } | null>(null);

  // Redeem flow
  const [redeemCode, setRedeemCode] = useState("");
  const [foundCard, setFoundCard] = useState<IssuedCard | null>(null);
  const [redeemAmount, setRedeemAmount] = useState("");
  const [redeemNote, setRedeemNote] = useState("");

  // Detail modal
  const [detailCard, setDetailCard] = useState<IssuedCard | null>(null);

  const addGiftCard = () => {
    if (!newCard.name || !newCard.amount) return;
    setGiftCards([...giftCards, { id: uid(), name: newCard.name, amount: newCard.amount, description: newCard.description, active: true }]);
    setAddCardModal(false);
    setNewCard({ name: "", amount: "", description: "" });
    toast({ title: "Card type added", description: `"${newCard.name}" is now available for sale.` });
  };

  const updateGiftCard = (id: string, patch: Partial<GiftCardItem>) => setGiftCards((g) => g.map((gc) => (gc.id === id ? { ...gc, ...patch } : gc)));
  const deleteGiftCard = (id: string) => setGiftCards((g) => g.filter((gc) => gc.id !== id));
  const saveCards = () => toast({ title: "Gift Cards saved", description: "Changes published to your microsite." });

  const handlePurchase = () => {
    const card = giftCards.find((c) => c.id === selectedCardId);
    const amount = card ? parseFloat(card.amount) : parseFloat(purchaseForm.customAmount);
    if (!amount || !purchaseForm.buyerName || !purchaseForm.recipientName) return;
    const code = generateCode();
    const newIssued: IssuedCard = {
      id: uid(), code, cardName: card?.name || "Custom Amount", amount, balance: amount,
      buyerName: purchaseForm.buyerName, buyerEmail: purchaseForm.buyerEmail,
      recipientName: purchaseForm.recipientName, recipientEmail: purchaseForm.recipientEmail,
      message: purchaseForm.message, status: "active", purchasedAt: new Date().toISOString().split("T")[0],
      transactions: [{ id: uid(), type: "purchase", amount, date: new Date().toISOString().split("T")[0], note: "Gift card purchased" }],
    };
    setIssuedCards([newIssued, ...issuedCards]);
    setPurchaseComplete({ code, amount });
    toast({ title: "Gift card sold!", description: `Code: ${code} — $${amount} card issued to ${purchaseForm.recipientName}` });
  };

  const resetPurchase = () => {
    setSelectedCardId("");
    setPurchaseForm({ buyerName: "", buyerEmail: "", recipientName: "", recipientEmail: "", message: "", customAmount: "" });
    setPurchaseComplete(null);
  };

  const handleLookup = () => {
    const card = issuedCards.find((c) => c.code.toLowerCase() === redeemCode.trim().toLowerCase());
    setFoundCard(card || null);
    if (!card) toast({ title: "Not found", description: "No gift card matches that code.", variant: "destructive" });
  };

  const handleRedeem = () => {
    if (!foundCard) return;
    const amt = parseFloat(redeemAmount);
    if (isNaN(amt) || amt <= 0 || amt > foundCard.balance) {
      toast({ title: "Invalid amount", description: `Enter between $0.01 and $${foundCard.balance.toFixed(2)}`, variant: "destructive" });
      return;
    }
    const newBalance = foundCard.balance - amt;
    const tx: CardTransaction = { id: uid(), type: "redemption", amount: amt, date: new Date().toISOString().split("T")[0], note: redeemNote || "Redeemed at checkout" };
    const updated = issuedCards.map((c) =>
      c.id === foundCard.id ? { ...c, balance: newBalance, status: (newBalance === 0 ? "fully_used" : "partially_used") as IssuedCard["status"], transactions: [...c.transactions, tx] } : c
    );
    setIssuedCards(updated);
    setFoundCard({ ...foundCard, balance: newBalance, transactions: [...foundCard.transactions, tx] });
    setRedeemAmount("");
    setRedeemNote("");
    toast({ title: "Redeemed!", description: `$${amt.toFixed(2)} applied. Remaining: $${newBalance.toFixed(2)}` });
  };

  const filteredIssued = issuedCards.filter((c) =>
    !searchIssued || c.code.toLowerCase().includes(searchIssued.toLowerCase()) || c.recipientName.toLowerCase().includes(searchIssued.toLowerCase()) || c.buyerName.toLowerCase().includes(searchIssued.toLowerCase())
  );

  return (
    <DashboardLayout title="Gift Cards" subtitle="Full lifecycle — create, sell, track & redeem">
      {/* Quick Action */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => { setTab("purchase"); resetPurchase(); }}
          className={btnPrimary}
        >
          <Plus className="w-4 h-4" /> Create Gift Card
        </button>
      </div>
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
              <button onClick={() => setAddCardModal(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Add Card</button>
            </div>
            <div className="space-y-3">
              {giftCards.map((gc, i) => (
                <motion.div key={gc.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className={`p-4 rounded-xl border transition-all ${gc.active ? "bg-muted/30" : "bg-muted/10 opacity-60"}`}>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Gift className="w-5 h-5 text-primary" /></div>
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
            <div className="flex justify-end mt-6"><button onClick={saveCards} className={btnPrimary}><Save className="w-4 h-4" /> Save Gift Cards</button></div>
          </div>
        </motion.div>
      )}

      {/* ── Issued Cards Tab ───────────────── */}
      {tab === "issued" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-semibold text-lg">Issued Gift Cards</h3>
              <p className="text-xs text-muted-foreground">{issuedCards.length} cards issued — click to view full history</p>
            </div>
          </div>

          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input value={searchIssued} onChange={(e) => setSearchIssued(e.target.value)} placeholder="Search by code, buyer, or recipient..." className={`${inputCls} pl-10`} />
          </div>

          <div className="rounded-2xl bg-card border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Code</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Card</th>
                    <th className="text-left px-4 py-3 font-medium text-muted-foreground">Recipient</th>
                    <th className="text-center px-4 py-3 font-medium text-muted-foreground">Amount</th>
                    <th className="text-center px-4 py-3 font-medium text-muted-foreground">Balance</th>
                    <th className="text-center px-4 py-3 font-medium text-muted-foreground">Status</th>
                    <th className="text-right px-4 py-3 font-medium text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIssued.map((card, i) => {
                    const sc = statusConfig[card.status];
                    return (
                      <motion.tr key={card.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                        className="border-b last:border-0 hover:bg-muted/10 transition-colors cursor-pointer"
                        onClick={() => setDetailCard(card)}>
                        <td className="px-4 py-3 font-mono text-xs font-bold text-primary">{card.code}</td>
                        <td className="px-4 py-3 font-medium">{card.cardName}</td>
                        <td className="px-4 py-3">
                          <div className="text-sm">{card.recipientName}</div>
                          <div className="text-[10px] text-muted-foreground">{card.recipientEmail}</div>
                        </td>
                        <td className="px-4 py-3 text-center font-medium">${card.amount}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={card.balance > 0 ? "font-bold text-aura-success" : "text-muted-foreground"}>${card.balance.toFixed(2)}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${sc.cls}`}>{sc.label}</span>
                        </td>
                        <td className="px-4 py-3 text-right text-xs text-muted-foreground">{card.purchasedAt}</td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Total Issued</p>
              <p className="text-xl font-bold">{issuedCards.length}</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Active</p>
              <p className="text-xl font-bold text-aura-success">{issuedCards.filter((c) => c.status === "active" || c.status === "partially_used").length}</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Total Value</p>
              <p className="text-xl font-bold">${issuedCards.reduce((s, c) => s + c.amount, 0).toLocaleString()}</p>
            </div>
            <div className="p-4 rounded-2xl bg-card border">
              <p className="text-[10px] text-muted-foreground">Outstanding Balance</p>
              <p className="text-xl font-bold text-primary">${issuedCards.reduce((s, c) => s + c.balance, 0).toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Sell Card Tab ───────────────── */}
      {tab === "purchase" && (
        <div className="max-w-2xl mx-auto space-y-6">
          <AnimatePresence mode="wait">
            {purchaseComplete ? (
              <motion.div key="complete" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 rounded-2xl bg-card border text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-chart-2/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-chart-2" />
                </div>
                <h3 className="font-display font-bold text-xl">Gift Card Issued!</h3>
                <div className="p-4 rounded-xl bg-muted/50 inline-block">
                  <p className="text-xs text-muted-foreground mb-1">Gift Card Code</p>
                  <p className="text-2xl font-mono font-bold text-primary tracking-wider">{purchaseComplete.code}</p>
                </div>
                <p className="text-sm text-muted-foreground">A ${purchaseComplete.amount} gift card has been created and added to your issued cards.</p>
                <button onClick={resetPurchase} className={`${btnPrimary} mx-auto`}><Plus className="w-4 h-4" /> Sell Another</button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                {/* Select Card Type */}
                <div className="p-5 rounded-2xl bg-card border">
                  <h3 className="font-display font-semibold mb-4">Select Gift Card</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {giftCards.filter((c) => c.active).map((c) => (
                      <button key={c.id} onClick={() => { setSelectedCardId(c.id); setPurchaseForm({ ...purchaseForm, customAmount: "" }); }}
                        className={`p-4 rounded-xl border text-left transition-all ${selectedCardId === c.id ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "hover:border-primary/30"}`}>
                        <Gift className="w-5 h-5 text-primary mb-2" />
                        <p className="text-lg font-bold">${c.amount}</p>
                        <p className="text-xs font-medium">{c.name}</p>
                        <p className="text-[10px] text-muted-foreground mt-1">{c.description}</p>
                      </button>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Or enter custom amount</label>
                    <div className="relative max-w-xs">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input value={purchaseForm.customAmount} onChange={(e) => { setPurchaseForm({ ...purchaseForm, customAmount: e.target.value.replace(/[^0-9.]/g, "") }); setSelectedCardId(""); }}
                        placeholder="0.00" className={`${inputCls} pl-9`} maxLength={8} />
                    </div>
                  </div>
                </div>

                {/* Buyer & Recipient */}
                <div className="p-5 rounded-2xl bg-card border space-y-4">
                  <h3 className="font-display font-semibold">Buyer & Recipient Details</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><User className="w-3 h-3" /> Buyer Name *</label>
                      <input value={purchaseForm.buyerName} onChange={(e) => setPurchaseForm({ ...purchaseForm, buyerName: e.target.value })} placeholder="Full name" className={inputCls} maxLength={100} />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><Mail className="w-3 h-3" /> Buyer Email</label>
                      <input type="email" value={purchaseForm.buyerEmail} onChange={(e) => setPurchaseForm({ ...purchaseForm, buyerEmail: e.target.value })} placeholder="email@example.com" className={inputCls} maxLength={255} />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><User className="w-3 h-3" /> Recipient Name *</label>
                      <input value={purchaseForm.recipientName} onChange={(e) => setPurchaseForm({ ...purchaseForm, recipientName: e.target.value })} placeholder="Who is this for?" className={inputCls} maxLength={100} />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><Mail className="w-3 h-3" /> Recipient Email</label>
                      <input type="email" value={purchaseForm.recipientEmail} onChange={(e) => setPurchaseForm({ ...purchaseForm, recipientEmail: e.target.value })} placeholder="email@example.com" className={inputCls} maxLength={255} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 flex items-center gap-1"><MessageSquare className="w-3 h-3" /> Personal Message (optional)</label>
                    <textarea value={purchaseForm.message} onChange={(e) => setPurchaseForm({ ...purchaseForm, message: e.target.value })} placeholder="Add a note..." rows={2} className={`${inputCls} resize-none`} maxLength={200} />
                  </div>
                  <button onClick={handlePurchase} disabled={(!selectedCardId && !purchaseForm.customAmount) || !purchaseForm.buyerName || !purchaseForm.recipientName}
                    className={`${btnPrimary} w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed`}>
                    <Send className="w-4 h-4" /> Issue Gift Card
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ── Redeem Tab ───────────────── */}
      {tab === "redeem" && (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Lookup */}
          <div className="p-5 rounded-2xl bg-card border space-y-4">
            <h3 className="font-display font-semibold flex items-center gap-2"><Ticket className="w-4 h-4 text-primary" /> Look Up Gift Card</h3>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input value={redeemCode} onChange={(e) => { setRedeemCode(e.target.value.toUpperCase()); setFoundCard(null); }}
                  placeholder="BV-GIFT-XXXX" className={`${inputCls} pl-10 font-mono tracking-wider`} maxLength={20} />
              </div>
              <button onClick={handleLookup} className={btnPrimary}><Search className="w-4 h-4" /> Look Up</button>
            </div>
          </div>

          {foundCard && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              {/* Balance Card */}
              <div className="p-5 rounded-2xl bg-card border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Current Balance</p>
                      <p className="text-3xl font-bold mt-1">${foundCard.balance.toFixed(2)}</p>
                      <p className="text-xs text-muted-foreground">of ${foundCard.amount} original</p>
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${foundCard.balance > 0 ? "bg-chart-2/10" : "bg-muted"}`}>
                      {foundCard.balance > 0 ? <ShieldCheck className="w-5 h-5 text-chart-2" /> : <XCircle className="w-5 h-5 text-muted-foreground" />}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-muted/50"><p className="text-muted-foreground">Card</p><p className="font-medium mt-0.5">{foundCard.cardName}</p></div>
                    <div className="p-2.5 rounded-lg bg-muted/50"><p className="text-muted-foreground">Code</p><p className="font-mono font-medium mt-0.5">{foundCard.code}</p></div>
                    <div className="p-2.5 rounded-lg bg-muted/50"><p className="text-muted-foreground">Buyer</p><p className="font-medium mt-0.5">{foundCard.buyerName}</p></div>
                    <div className="p-2.5 rounded-lg bg-muted/50"><p className="text-muted-foreground">Recipient</p><p className="font-medium mt-0.5">{foundCard.recipientName}</p></div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                      <span>Used: ${(foundCard.amount - foundCard.balance).toFixed(2)}</span>
                      <span>Remaining: ${foundCard.balance.toFixed(2)}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${(foundCard.balance / foundCard.amount) * 100}%` }} transition={{ duration: 0.6 }} className="h-full rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Redeem Form */}
              {foundCard.balance > 0 && (
                <div className="p-5 rounded-2xl bg-card border space-y-4">
                  <h3 className="font-display font-semibold flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> Apply to Bill</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input value={redeemAmount} onChange={(e) => setRedeemAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                        placeholder={`Max $${foundCard.balance.toFixed(2)}`} className={`${inputCls} pl-9`} maxLength={8} />
                    </div>
                    <input value={redeemNote} onChange={(e) => setRedeemNote(e.target.value)} placeholder="Note (e.g. Table 5 — dinner)" className={inputCls} maxLength={100} />
                  </div>
                  <button onClick={handleRedeem} className={`${btnPrimary} w-full justify-center`}><ArrowRight className="w-4 h-4" /> Redeem</button>
                </div>
              )}

              {/* Transaction History */}
              <div className="p-5 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold mb-3">Transaction History</h3>
                <div className="space-y-2">
                  {foundCard.transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.type === "purchase" ? "bg-chart-2/10" : "bg-aura-warning/10"}`}>
                        {tx.type === "purchase" ? <Plus className="w-4 h-4 text-chart-2" /> : <ArrowRight className="w-4 h-4 text-aura-warning" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{tx.note}</p>
                        <p className="text-[10px] text-muted-foreground">{tx.date}</p>
                      </div>
                      <span className={`text-sm font-bold ${tx.type === "purchase" ? "text-chart-2" : "text-destructive"}`}>
                        {tx.type === "purchase" ? "+" : "-"}${tx.amount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* ── Add Card Modal ──────────────────── */}
      <Dialog open={addCardModal} onOpenChange={setAddCardModal}>
        <DialogContent className="max-w-md">
          <DialogHeader><DialogTitle>Add Gift Card Type</DialogTitle></DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Card Name *</label>
              <input value={newCard.name} onChange={(e) => setNewCard({ ...newCard, name: e.target.value })} placeholder="e.g. Brunch Special" className={inputCls} maxLength={80} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Amount *</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input value={newCard.amount} onChange={(e) => setNewCard({ ...newCard, amount: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="75" className={`${inputCls} pl-9`} maxLength={8} />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Description</label>
              <textarea value={newCard.description} onChange={(e) => setNewCard({ ...newCard, description: e.target.value })} placeholder="Describe the experience..." rows={2} className={`${inputCls} resize-none`} maxLength={200} />
            </div>
            <button onClick={addGiftCard} className={`${btnPrimary} w-full justify-center`}><Plus className="w-4 h-4" /> Add Card</button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Card Detail Modal ──────────────────── */}
      <Dialog open={!!detailCard} onOpenChange={() => setDetailCard(null)}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          {detailCard && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  {detailCard.code}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-muted/50"><p className="text-muted-foreground">Card Type</p><p className="font-medium mt-1">{detailCard.cardName}</p></div>
                  <div className="p-3 rounded-xl bg-muted/50"><p className="text-muted-foreground">Original Amount</p><p className="font-bold mt-1 text-lg">${detailCard.amount}</p></div>
                  <div className="p-3 rounded-xl bg-muted/50"><p className="text-muted-foreground">Current Balance</p><p className="font-bold mt-1 text-lg text-primary">${detailCard.balance.toFixed(2)}</p></div>
                  <div className="p-3 rounded-xl bg-muted/50"><p className="text-muted-foreground">Status</p><p className="font-medium mt-1">{statusConfig[detailCard.status].label}</p></div>
                  <div className="p-3 rounded-xl bg-muted/50"><p className="text-muted-foreground">Buyer</p><p className="font-medium mt-1">{detailCard.buyerName}</p><p className="text-muted-foreground">{detailCard.buyerEmail}</p></div>
                  <div className="p-3 rounded-xl bg-muted/50"><p className="text-muted-foreground">Recipient</p><p className="font-medium mt-1">{detailCard.recipientName}</p><p className="text-muted-foreground">{detailCard.recipientEmail}</p></div>
                </div>
                {detailCard.message && (
                  <div className="p-3 rounded-xl bg-muted/50 text-xs"><p className="text-muted-foreground">Message</p><p className="font-medium mt-1 italic">"{detailCard.message}"</p></div>
                )}
                <div>
                  <h4 className="font-display font-semibold text-sm mb-2">Transaction History</h4>
                  <div className="space-y-2">
                    {detailCard.transactions.map((tx) => (
                      <div key={tx.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 text-xs">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${tx.type === "purchase" ? "bg-chart-2/10" : "bg-aura-warning/10"}`}>
                          {tx.type === "purchase" ? <Plus className="w-3.5 h-3.5 text-chart-2" /> : <ArrowRight className="w-3.5 h-3.5 text-aura-warning" />}
                        </div>
                        <div className="flex-1"><p className="font-medium">{tx.note}</p><p className="text-muted-foreground">{tx.date}</p></div>
                        <span className={`font-bold ${tx.type === "purchase" ? "text-chart-2" : "text-destructive"}`}>{tx.type === "purchase" ? "+" : "-"}${tx.amount.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default GiftCardsDashboard;
