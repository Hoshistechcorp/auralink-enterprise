import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gift, CreditCard, Check, Ticket, Search, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const giftCards = [
  { id: "1", name: "Classic Dinner", amount: 50, description: "Perfect for a starter and main course", color: "from-primary/20 to-primary/5", popular: false },
  { id: "2", name: "Fine Dining Experience", amount: 100, description: "Enjoy a full 3-course dinner for two", color: "from-chart-4/20 to-chart-4/5", popular: true },
  { id: "3", name: "Chef's Table", amount: 200, description: "An unforgettable multi-course tasting menu", color: "from-chart-2/20 to-chart-2/5", popular: false },
  { id: "4", name: "Ultimate Celebration", amount: 500, description: "Wine pairing, private dining & the full experience", color: "from-chart-5/20 to-chart-5/5", popular: false },
];

const customAmounts = [25, 75, 150, 250, 300];

/* Mock redeemable codes for demo */
const mockCodes: Record<string, { balance: number; original: number; name: string; from: string }> = {
  "BV-GIFT-50A": { balance: 50, original: 50, name: "Classic Dinner", from: "Sarah M." },
  "BV-GIFT-100B": { balance: 72.50, original: 100, name: "Fine Dining Experience", from: "David K." },
  "BV-GIFT-200C": { balance: 200, original: 200, name: "Chef's Table", from: "Emily R." },
  "BV-GIFT-500D": { balance: 0, original: 500, name: "Ultimate Celebration", from: "James W." },
};

type TabMode = "buy" | "redeem";

const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

const GiftCardsPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabMode>("buy");

  // Buy state
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Redeem state
  const [redeemCode, setRedeemCode] = useState("");
  const [lookupResult, setLookupResult] = useState<null | { found: boolean; balance?: number; original?: number; name?: string; from?: string }>(null);
  const [redeemAmount, setRedeemAmount] = useState("");
  const [redeemed, setRedeemed] = useState(false);

  const handleSelectCard = (id: string) => {
    setSelectedCard(id);
    setShowForm(true);
    setCustomAmount("");
  };

  const handleCustomAmount = (amt: number) => {
    setSelectedCard(null);
    setCustomAmount(amt.toString());
    setShowForm(true);
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedCard
      ? giftCards.find((c) => c.id === selectedCard)?.amount
      : customAmount;
    toast.success(`Gift card of $${amount} purchased! A confirmation has been sent.`);
    setShowForm(false);
    setSelectedCard(null);
    setCustomAmount("");
    setRecipientName("");
    setRecipientEmail("");
    setSenderName("");
    setMessage("");
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const code = redeemCode.trim().toUpperCase();
    if (!code) return;
    const match = mockCodes[code];
    if (match) {
      setLookupResult({ found: true, ...match });
    } else {
      setLookupResult({ found: false });
    }
    setRedeemed(false);
    setRedeemAmount("");
  };

  const handleRedeem = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(redeemAmount);
    if (!lookupResult?.found || !lookupResult.balance || isNaN(amt) || amt <= 0) return;
    if (amt > lookupResult.balance) {
      toast.error(`Amount exceeds available balance of $${lookupResult.balance.toFixed(2)}`);
      return;
    }
    const newBalance = lookupResult.balance - amt;
    setLookupResult({ ...lookupResult, balance: newBalance });
    setRedeemed(true);
    setRedeemAmount("");
    toast.success(`$${amt.toFixed(2)} redeemed! Remaining balance: $${newBalance.toFixed(2)}`);
  };

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/40 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="font-display font-bold text-base">Gift Cards</h1>
          <p className="text-[10px] text-muted-foreground">Give the gift of great dining</p>
        </div>
      </div>

      {/* Tab Toggle */}
      <div className="px-4 pt-4">
        <div className="flex rounded-xl bg-muted p-1 gap-1">
          <button
            onClick={() => { setTab("buy"); setLookupResult(null); setRedeemCode(""); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              tab === "buy" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            <Gift className="w-3.5 h-3.5" /> Buy a Card
          </button>
          <button
            onClick={() => { setTab("redeem"); setShowForm(false); setSelectedCard(null); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              tab === "redeem" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
            }`}
          >
            <Ticket className="w-3.5 h-3.5" /> Redeem / Check Balance
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {tab === "buy" ? (
          <motion.div
            key="buy"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            className="px-4 py-5 space-y-5"
          >
            {/* Preset Cards */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Choose a Gift Card</h2>
              <div className="grid grid-cols-2 gap-3">
                {giftCards.map((card, i) => (
                  <motion.button
                    key={card.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleSelectCard(card.id)}
                    className={`relative p-4 rounded-2xl border text-left transition-all ${
                      selectedCard === card.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-primary/30"
                    } bg-gradient-to-br ${card.color}`}
                  >
                    {card.popular && (
                      <span className="absolute -top-2 right-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold">
                        POPULAR
                      </span>
                    )}
                    <Gift className="w-5 h-5 text-primary mb-2" />
                    <p className="text-lg font-bold">${card.amount}</p>
                    <p className="text-xs font-medium mt-0.5">{card.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{card.description}</p>
                    {selectedCard === card.id && (
                      <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <h2 className="text-sm font-semibold mb-3">Or pick a custom amount</h2>
              <div className="flex flex-wrap gap-2">
                {customAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleCustomAmount(amt)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      customAmount === amt.toString()
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Form */}
            {showForm && (
              <motion.form
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handlePurchase}
                className="p-5 rounded-2xl bg-card border space-y-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold">
                    Gift Card — ${selectedCard ? giftCards.find((c) => c.id === selectedCard)?.amount : customAmount}
                  </h3>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Your Name</label>
                  <input value={senderName} onChange={(e) => setSenderName(e.target.value)} required placeholder="Your name" className={inputCls} maxLength={100} />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Recipient Name</label>
                  <input value={recipientName} onChange={(e) => setRecipientName(e.target.value)} required placeholder="Who is this for?" className={inputCls} maxLength={100} />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Recipient Email</label>
                  <input type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} required placeholder="their@email.com" className={inputCls} maxLength={255} />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Personal Message (optional)</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add a note..." rows={2}
                    className={`${inputCls} resize-none`} maxLength={200} />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                  Purchase Gift Card
                </button>
              </motion.form>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="redeem"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            className="px-4 py-5 space-y-5"
          >
            {/* Code Lookup */}
            <div>
              <h2 className="text-sm font-semibold mb-1">Enter your gift card code</h2>
              <p className="text-[11px] text-muted-foreground mb-3">Find the code on your gift card email or physical card</p>
              <form onSubmit={handleLookup} className="flex gap-2">
                <div className="relative flex-1">
                  <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    value={redeemCode}
                    onChange={(e) => { setRedeemCode(e.target.value.toUpperCase()); setLookupResult(null); setRedeemed(false); }}
                    placeholder="BV-GIFT-XXXX"
                    className={`${inputCls} pl-10 font-mono tracking-wider`}
                    maxLength={20}
                  />
                </div>
                <button type="submit" className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shrink-0">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Demo hint */}
            <div className="p-3 rounded-xl bg-muted/50 border border-border/50">
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Demo codes:</span>{" "}
                BV-GIFT-50A ($50), BV-GIFT-100B ($72.50 remaining), BV-GIFT-200C ($200), BV-GIFT-500D (fully used)
              </p>
            </div>

            {/* Lookup Result */}
            <AnimatePresence mode="wait">
              {lookupResult && (
                <motion.div
                  key={redeemCode}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="space-y-4"
                >
                  {!lookupResult.found ? (
                    <div className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
                      <p className="text-sm font-semibold text-destructive">Code not found</p>
                      <p className="text-xs text-muted-foreground mt-1">Please check the code and try again</p>
                    </div>
                  ) : (
                    <>
                      {/* Balance Card */}
                      <div className="p-5 rounded-2xl bg-card border overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Gift Card Balance</p>
                              <p className="text-3xl font-bold mt-1">${lookupResult.balance?.toFixed(2)}</p>
                            </div>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              lookupResult.balance! > 0 ? "bg-chart-2/10" : "bg-muted"
                            }`}>
                              {lookupResult.balance! > 0 ? (
                                <ShieldCheck className="w-5 h-5 text-chart-2" />
                              ) : (
                                <Gift className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="p-2.5 rounded-lg bg-muted/50">
                              <p className="text-muted-foreground">Card</p>
                              <p className="font-medium mt-0.5">{lookupResult.name}</p>
                            </div>
                            <div className="p-2.5 rounded-lg bg-muted/50">
                              <p className="text-muted-foreground">Original Value</p>
                              <p className="font-medium mt-0.5">${lookupResult.original?.toFixed(2)}</p>
                            </div>
                            <div className="p-2.5 rounded-lg bg-muted/50">
                              <p className="text-muted-foreground">From</p>
                              <p className="font-medium mt-0.5">{lookupResult.from}</p>
                            </div>
                            <div className="p-2.5 rounded-lg bg-muted/50">
                              <p className="text-muted-foreground">Code</p>
                              <p className="font-mono font-medium mt-0.5 text-[11px]">{redeemCode}</p>
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div className="mt-4">
                            <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                              <span>Used: ${(lookupResult.original! - lookupResult.balance!).toFixed(2)}</span>
                              <span>Remaining: ${lookupResult.balance?.toFixed(2)}</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(lookupResult.balance! / lookupResult.original!) * 100}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="h-full rounded-full bg-primary"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Redeem Form */}
                      {lookupResult.balance! > 0 ? (
                        <form onSubmit={handleRedeem} className="p-5 rounded-2xl bg-card border space-y-4">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <h3 className="text-sm font-semibold">Redeem at Checkout</h3>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Enter the amount to apply from this gift card to your bill.
                          </p>
                          <div className="flex gap-2">
                            <div className="relative flex-1">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <input
                                type="number"
                                step="0.01"
                                min="0.01"
                                max={lookupResult.balance}
                                value={redeemAmount}
                                onChange={(e) => setRedeemAmount(e.target.value)}
                                placeholder="0.00"
                                required
                                className={`${inputCls} pl-9 font-mono`}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => setRedeemAmount(lookupResult.balance!.toFixed(2))}
                              className="px-3 py-2.5 rounded-xl bg-muted text-xs font-medium text-muted-foreground hover:bg-muted/80 transition-colors whitespace-nowrap"
                            >
                              Use All
                            </button>
                          </div>
                          <button type="submit" className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Apply to Bill <ArrowRight className="w-4 h-4" />
                          </button>
                        </form>
                      ) : (
                        <div className="p-5 rounded-2xl bg-muted/30 border text-center">
                          <p className="text-sm font-semibold text-muted-foreground">This card has been fully redeemed</p>
                          <p className="text-xs text-muted-foreground mt-1">The entire ${lookupResult.original?.toFixed(2)} balance has been used</p>
                          <button
                            onClick={() => setTab("buy")}
                            className="mt-3 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                          >
                            Buy a New Gift Card
                          </button>
                        </div>
                      )}

                      {/* Success animation */}
                      <AnimatePresence>
                        {redeemed && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-4 rounded-2xl bg-chart-2/10 border border-chart-2/20 flex items-center gap-3"
                          >
                            <div className="w-9 h-9 rounded-xl bg-chart-2/20 flex items-center justify-center shrink-0">
                              <Check className="w-5 h-5 text-chart-2" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-chart-2">Successfully redeemed!</p>
                              <p className="text-[10px] text-muted-foreground mt-0.5">New balance: ${lookupResult.balance?.toFixed(2)}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftCardsPage;
