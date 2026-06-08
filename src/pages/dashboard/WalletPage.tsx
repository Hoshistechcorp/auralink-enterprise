import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "@/components/aura/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet as WalletIcon, ArrowDownToLine, TrendingUp, Clock, Plus, Building2, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { confirmAction } from "@/components/ui/confirm-dialog";
import {
  getTransactions, getBalance, getPending, getLifetimeRevenue, addTransaction,
  getMethods, saveMethods, TYPE_LABELS, WALLET_EVENT,
  type WalletTransaction, type WithdrawalMethod, type TxType,
} from "@/lib/wallet";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

const typeColor: Record<TxType, string> = {
  gift_card: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  tip: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  reservation: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  merchandise: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  event: "bg-pink-500/15 text-pink-600 dark:text-pink-400",
  other: "bg-muted text-muted-foreground",
  withdrawal: "bg-red-500/15 text-red-600 dark:text-red-400",
  fee: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
};

export default function WalletPage() {
  const [txs, setTxs] = useState<WalletTransaction[]>([]);
  const [methods, setMethods] = useState<WithdrawalMethod[]>([]);
  const [filter, setFilter] = useState<"all" | TxType>("all");
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);

  const refresh = () => {
    setTxs(getTransactions());
    setMethods(getMethods());
  };

  useEffect(() => {
    refresh();
    const onUpdate = () => refresh();
    window.addEventListener(WALLET_EVENT, onUpdate);
    return () => window.removeEventListener(WALLET_EVENT, onUpdate);
  }, []);

  const balance = useMemo(() => getBalance(txs), [txs]);
  const pending = useMemo(() => getPending(txs), [txs]);
  const lifetime = useMemo(() => getLifetimeRevenue(txs), [txs]);

  const filtered = useMemo(
    () => (filter === "all" ? txs : txs.filter((t) => t.type === filter)),
    [txs, filter],
  );

  // Withdrawal form
  const [wAmount, setWAmount] = useState("");
  const [wMethodId, setWMethodId] = useState<string>("");
  const [wNote, setWNote] = useState("");

  const submitWithdrawal = () => {
    const amt = parseFloat(wAmount);
    if (!amt || amt <= 0) return toast({ title: "Enter a valid amount", variant: "destructive" });
    if (amt > balance) return toast({ title: "Insufficient balance", variant: "destructive" });
    const method = methods.find((m) => m.id === wMethodId);
    if (!method) return toast({ title: "Select a withdrawal method", variant: "destructive" });

    addTransaction({
      type: "withdrawal",
      description: `Withdrawal — ${method.details}${wNote ? ` · ${wNote}` : ""}`,
      amount: -amt,
      status: "pending",
      reference: `WD-${Date.now().toString().slice(-4)}`,
    });
    toast({ title: "Withdrawal requested", description: `${fmt(amt)} to ${method.details} · processing in 1–3 days` });
    setWAmount(""); setWNote(""); setWMethodId("");
    setWithdrawOpen(false);
  };

  // Method form
  const [mLabel, setMLabel] = useState("");
  const [mType, setMType] = useState<WithdrawalMethod["type"]>("bank");
  const [mDetails, setMDetails] = useState("");

  const addMethod = () => {
    if (!mLabel || !mDetails) return toast({ title: "Fill out both fields", variant: "destructive" });
    const next: WithdrawalMethod = { id: `m_${Date.now()}`, label: mLabel, type: mType, details: mDetails };
    const updated = [...methods, next];
    saveMethods(updated);
    setMethods(updated);
    setMLabel(""); setMDetails(""); setMType("bank");
    setMethodOpen(false);
    toast({ title: "Method added" });
  };

  const removeMethod = async (id: string) => {
    if (!(await confirmAction({ title: "Remove payment method?", description: "This withdrawal method will be removed from your account." }))) return;
    const updated = methods.filter((m) => m.id !== id);
    saveMethods(updated);
    setMethods(updated);
  };

  return (
    <DashboardLayout title="Wallet" subtitle="Revenue, transactions & withdrawals">
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground border-0">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider opacity-80">
              <WalletIcon className="w-4 h-4" /> Available balance
            </div>
            <div className="text-4xl font-display font-bold mt-2">{fmt(balance)}</div>
            <Dialog open={withdrawOpen} onOpenChange={setWithdrawOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm" className="mt-4">
                  <ArrowDownToLine className="w-4 h-4" /> Withdraw funds
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Withdraw funds</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Amount (USD)</Label>
                    <Input type="number" min="0" step="0.01" value={wAmount} onChange={(e) => setWAmount(e.target.value)} placeholder="0.00" />
                    <p className="text-xs text-muted-foreground mt-1">Available: {fmt(balance)}</p>
                  </div>
                  <div>
                    <Label>Withdraw to</Label>
                    {methods.length === 0 ? (
                      <p className="text-sm text-muted-foreground mt-1">No withdrawal methods. Add one below.</p>
                    ) : (
                      <Select value={wMethodId} onValueChange={setWMethodId}>
                        <SelectTrigger><SelectValue placeholder="Select method" /></SelectTrigger>
                        <SelectContent>
                          {methods.map((m) => (
                            <SelectItem key={m.id} value={m.id}>{m.label} — {m.details}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                  <div>
                    <Label>Note (optional)</Label>
                    <Input value={wNote} onChange={(e) => setWNote(e.target.value)} placeholder="Reference or memo" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setWithdrawOpen(false)}>Cancel</Button>
                  <Button onClick={submitWithdrawal}>Request withdrawal</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Clock className="w-4 h-4" /> Pending
            </div>
            <div className="text-3xl font-display font-bold mt-2">{fmt(pending)}</div>
            <p className="text-xs text-muted-foreground mt-1">Clears within 1–3 business days</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <TrendingUp className="w-4 h-4" /> Lifetime revenue
            </div>
            <div className="text-3xl font-display font-bold mt-2">{fmt(lifetime)}</div>
            <p className="text-xs text-muted-foreground mt-1">Across all sources</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">Transaction history</TabsTrigger>
          <TabsTrigger value="methods">Withdrawal methods</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg">All transactions</CardTitle>
              <Select value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
                <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  {Object.entries(TYPE_LABELS).map(([k, v]) => (
                    <SelectItem key={k} value={k}>{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              {filtered.length === 0 ? (
                <p className="text-sm text-muted-foreground py-8 text-center">No transactions yet.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Description</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((t) => (
                      <TableRow key={t.id}>
                        <TableCell>
                          <div className="font-medium">{t.description}</div>
                          {t.reference && <div className="text-xs text-muted-foreground">{t.reference}</div>}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className={typeColor[t.type]}>{TYPE_LABELS[t.type]}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={t.status === "completed" ? "default" : t.status === "pending" ? "secondary" : "destructive"}>
                            {t.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{fmtDate(t.createdAt)}</TableCell>
                        <TableCell className={`text-right font-semibold ${t.amount < 0 ? "text-destructive" : "text-emerald-600 dark:text-emerald-400"}`}>
                          {t.amount < 0 ? "-" : "+"}{fmt(Math.abs(t.amount))}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg">Withdrawal methods</CardTitle>
              <Dialog open={methodOpen} onOpenChange={setMethodOpen}>
                <DialogTrigger asChild>
                  <Button size="sm"><Plus className="w-4 h-4" /> Add method</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Add withdrawal method</DialogTitle></DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label>Label</Label>
                      <Input value={mLabel} onChange={(e) => setMLabel(e.target.value)} placeholder="Primary bank" />
                    </div>
                    <div>
                      <Label>Type</Label>
                      <Select value={mType} onValueChange={(v) => setMType(v as WithdrawalMethod["type"])}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank">Bank account</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="stripe">Stripe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Details</Label>
                      <Input value={mDetails} onChange={(e) => setMDetails(e.target.value)} placeholder="e.g. Chase •••• 4821" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setMethodOpen(false)}>Cancel</Button>
                    <Button onClick={addMethod}>Add method</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              {methods.length === 0 ? (
                <p className="text-sm text-muted-foreground py-8 text-center">No methods yet. Add one to start withdrawing.</p>
              ) : (
                <div className="space-y-2">
                  {methods.map((m) => (
                    <div key={m.id} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-muted"><Building2 className="w-4 h-4" /></div>
                        <div>
                          <div className="font-medium text-sm">{m.label}</div>
                          <div className="text-xs text-muted-foreground capitalize">{m.type} · {m.details}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeMethod(m.id)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
