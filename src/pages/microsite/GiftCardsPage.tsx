import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Gift,
  CreditCard,
  Check,
  Ticket,
  Search,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Mail,
  Lock,
  Sparkles,
  Home,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const giftCards = [
  { id: "1", name: "Classic Dinner", amount: 50, description: "Perfect for a starter and main course", color: "from-primary/20 to-primary/5", popular: false },
  { id: "2", name: "Fine Dining Experience", amount: 100, description: "Enjoy a full 3-course dinner for two", color: "from-chart-4/20 to-chart-4/5", popular: true },
  { id: "3", name: "Chef's Table", amount: 200, description: "An unforgettable multi-course tasting menu", color: "from-chart-2/20 to-chart-2/5", popular: false },
  { id: "4", name: "Ultimate Celebration", amount: 500, description: "Wine pairing, private dining & the full experience", color: "from-chart-5/20 to-chart-5/5", popular: false },
];

const customAmounts = [25, 75, 150, 250, 300];

const mockCodes: Record<string, { balance: number; original: number; name: string; from: string }> = {
  "BV-GIFT-50A": { balance: 50, original: 50, name: "Classic Dinner", from: "Sarah M." },
  "BV-GIFT-100B": { balance: 72.5, original: 100, name: "Fine Dining Experience", from: "David K." },
  "BV-GIFT-200C": { balance: 200, original: 200, name: "Chef's Table", from: "Emily R." },
  "BV-GIFT-500D": { balance: 0, original: 500, name: "Ultimate Celebration", from: "James W." },
};

type TabMode = "buy" | "redeem";
type BuyStep = "select" | "details" | "checkout" | "success";

const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

/* Restaurant details — would come from microsite config in production */
const RESTAURANT = {
  name: "Bella Vista Restaurant",
  tagline: "Authentic Italian · Since 2008",
  address: "412 Riverside Avenue, Brooklyn, NY 11211",
  phone: "+1 (718) 555-0142",
  email: "reservations@bellavista.com",
  website: "bellavista.auralink.app",
  hours: "Tue–Sun · 5:00 PM – 11:00 PM",
};

const generateCode = () => {
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `BV-GIFT-${rnd}`;
};

const formatDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const getExpiryDate = (monthsFromNow = 12) => {
  const d = new Date();
  d.setMonth(d.getMonth() + monthsFromNow);
  return formatDate(d);
};

/* ---------- Email Preview component (purchase + redemption) ---------- */
const EmailPreview = ({
  variant,
  data,
}: {
  variant: "purchase" | "redeem";
  data: any;
}) => (
  <div className="rounded-2xl border bg-card overflow-hidden">
    <div className="px-4 py-2.5 bg-muted/40 border-b flex items-center gap-2">
      <Mail className="w-3.5 h-3.5 text-muted-foreground" />
      <p className="text-[11px] font-medium text-muted-foreground">
        Email preview — sent to{" "}
        <span className="text-foreground font-semibold">{data.email}</span>
      </p>
    </div>
    <div className="p-5 bg-white text-[#1a1a1a]">
      <div className="text-center mb-4">
        <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 items-center justify-center mb-2">
          {variant === "purchase" ? (
            <Gift className="w-6 h-6 text-primary" />
          ) : (
            <Check className="w-6 h-6 text-primary" />
          )}
        </div>
        <h3 className="text-lg font-bold">
          {variant === "purchase"
            ? `🎁 ${data.senderName || "Someone"} sent you a gift!`
            : `✅ Gift card redeemed at ${RESTAURANT.name}`}
        </h3>
        <p className="text-xs text-[#666] mt-1">
          From {RESTAURANT.name} · {RESTAURANT.tagline}
        </p>
      </div>

      {variant === "purchase" ? (
        <>
          <p className="text-sm leading-relaxed mb-3">
            Hi <span className="font-semibold">{data.recipientName || "there"}</span>,
          </p>
          <p className="text-sm leading-relaxed mb-4">
            <span className="font-semibold">{data.senderName || "A friend"}</span> has sent
            you a <span className="font-semibold">${data.amount}</span> gift card to enjoy
            at <span className="font-semibold">{RESTAURANT.name}</span>
            {data.cardName ? ` — ${data.cardName}` : ""}.
          </p>
          {data.message && (
            <div className="p-3 rounded-lg bg-[#f7f5f0] border-l-2 border-primary mb-4 text-xs italic text-[#444]">
              "{data.message}"
              <p className="not-italic mt-1.5 text-[10px] text-[#888]">
                — {data.senderName}
              </p>
            </div>
          )}
          <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-center mb-4">
            <p className="text-[10px] uppercase tracking-wider text-[#888]">
              Your gift code
            </p>
            <p className="font-mono text-lg font-bold tracking-wider mt-1">
              {data.code}
            </p>
            <p className="text-[10px] text-[#888] mt-1">
              Value: ${data.amount}
            </p>
            <p className="text-[10px] font-semibold text-primary mt-1">
              Redeem before {data.expiryDate}
            </p>
          </div>
          <p className="text-xs text-[#666] leading-relaxed mb-3">
            Redeem in person at our restaurant or on our website. Show this code
            to your server or paste it on our redemption page.
          </p>
        </>
      ) : (
        <>
          <p className="text-sm leading-relaxed mb-3">
            Hi <span className="font-semibold">{data.recipientName || "there"}</span>,
          </p>
          <p className="text-sm leading-relaxed mb-4">
            We've successfully redeemed{" "}
            <span className="font-semibold">${data.amount}</span> from your
            gift card at <span className="font-semibold">{RESTAURANT.name}</span>.
            Thank you for dining with us!
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs mb-4">
            <div className="p-2.5 rounded-lg bg-[#f7f5f0]">
              <p className="text-[#888]">Code</p>
              <p className="font-mono font-semibold mt-0.5">{data.code}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#f7f5f0]">
              <p className="text-[#888]">Card</p>
              <p className="font-semibold mt-0.5">{data.name}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#f7f5f0]">
              <p className="text-[#888]">Redeemed</p>
              <p className="font-semibold mt-0.5">${data.amount}</p>
            </div>
            <div className="p-2.5 rounded-lg bg-primary/10">
              <p className="text-[#888]">Remaining</p>
              <p className="font-bold text-primary mt-0.5">
                ${data.balance.toFixed(2)}
              </p>
            </div>
          </div>
          {data.balance > 0 && (
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 mb-3">
              <p className="text-xs text-[#444]">
                You still have <span className="font-bold text-primary">${data.balance.toFixed(2)}</span> available.
                Use it before <span className="font-semibold">{data.expiryDate}</span>.
              </p>
            </div>
          )}
          <p className="text-xs text-[#666] leading-relaxed mb-3">
            Keep this email for your records. We'd love to see you again soon
            at {RESTAURANT.name}.
          </p>
        </>
      )}

      {/* Restaurant footer block */}
      <div className="mt-5 pt-4 border-t">
        <p className="text-[11px] font-bold text-[#1a1a1a] mb-1.5">
          Visit {RESTAURANT.name}
        </p>
        <div className="space-y-0.5 text-[10px] text-[#666] leading-relaxed">
          <p>📍 {RESTAURANT.address}</p>
          <p>📞 {RESTAURANT.phone} · ✉ {RESTAURANT.email}</p>
          <p>🕐 {RESTAURANT.hours}</p>
          <p>🌐 {RESTAURANT.website}</p>
        </div>
        <p className="text-[10px] text-[#999] mt-3 text-center">
          {RESTAURANT.name} · Powered by AuraLink
        </p>
      </div>
    </div>
  </div>
);


const GiftCardsPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabMode>("buy");

  // Buy state
  const [step, setStep] = useState<BuyStep>("select");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [processing, setProcessing] = useState(false);
  const [orderCode, setOrderCode] = useState("");

  // Redeem state
  const [redeemCode, setRedeemCode] = useState("");
  const [lookupResult, setLookupResult] = useState<null | { found: boolean; balance?: number; original?: number; name?: string; from?: string }>(null);
  const [redeemAmount, setRedeemAmount] = useState("");
  const [lastRedeemed, setLastRedeemed] = useState<number | null>(null);

  const purchaseAmount = selectedCard
    ? giftCards.find((c) => c.id === selectedCard)?.amount ?? 0
    : Number(customAmount) || 0;
  const purchaseCardName = selectedCard
    ? giftCards.find((c) => c.id === selectedCard)?.name
    : "Custom Gift Card";

  const handleSelectCard = (id: string) => {
    setSelectedCard(id);
    setCustomAmount("");
    setStep("details");
  };

  const handleCustomAmount = (amt: number) => {
    setSelectedCard(null);
    setCustomAmount(amt.toString());
    setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("checkout");
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setOrderCode(generateCode());
      setProcessing(false);
      setStep("success");
      toast.success("Payment successful! Gift card sent.");
    }, 1400);
  };

  const handleBackHome = () => navigate("/microsite");

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const code = redeemCode.trim().toUpperCase();
    if (!code) return;
    const match = mockCodes[code];
    setLookupResult(match ? { found: true, ...match } : { found: false });
    setLastRedeemed(null);
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
    setLastRedeemed(amt);
    setRedeemAmount("");
    toast.success(`$${amt.toFixed(2)} redeemed! Confirmation email sent.`);
  };

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto pb-10">
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/40 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => {
            if (step !== "select" && tab === "buy") {
              if (step === "success") handleBackHome();
              else setStep(step === "checkout" ? "details" : "select");
            } else {
              navigate("/microsite");
            }
          }}
          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="font-display font-bold text-base">
            {step === "checkout" && tab === "buy"
              ? "Checkout"
              : step === "success" && tab === "buy"
              ? "Order Complete"
              : "Gift Cards"}
          </h1>
          <p className="text-[10px] text-muted-foreground">
            {step === "checkout"
              ? "Secure payment"
              : step === "success"
              ? "Confirmation sent"
              : "Give the gift of great dining"}
          </p>
        </div>
      </div>

      {step === "select" && (
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
              onClick={() => { setTab("redeem"); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                tab === "redeem" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              <Ticket className="w-3.5 h-3.5" /> Redeem / Check Balance
            </button>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {tab === "buy" && step === "select" && (
          <motion.div key="select" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-4 py-5 space-y-5">
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
                    className={`relative p-4 rounded-2xl border text-left transition-all border-border hover:border-primary/30 bg-gradient-to-br ${card.color}`}
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
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-3">Or pick a custom amount</h2>
              <div className="flex flex-wrap gap-2">
                {customAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleCustomAmount(amt)}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* DETAILS */}
        {tab === "buy" && step === "details" && (
          <motion.form
            key="details"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            onSubmit={handleDetailsSubmit}
            className="px-4 py-5 space-y-4"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border flex items-center gap-3">
              <Gift className="w-6 h-6 text-primary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">{purchaseCardName}</p>
                <p className="text-xl font-bold">${purchaseAmount}</p>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Your Name</label>
              <input value={senderName} onChange={(e) => setSenderName(e.target.value)} required placeholder="Your name" className={inputCls} maxLength={100} />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Your Email (for receipt)</label>
              <input type="email" value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} required placeholder="you@email.com" className={inputCls} maxLength={255} />
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
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add a note..." rows={2} className={`${inputCls} resize-none`} maxLength={200} />
            </div>

            <button type="submit" className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Continue to Checkout <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        )}

        {/* CHECKOUT */}
        {tab === "buy" && step === "checkout" && (
          <motion.div
            key="checkout"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            className="px-4 py-5 space-y-4"
          >
            {/* Order summary */}
            <div className="p-4 rounded-2xl bg-card border space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold">Order Summary</h3>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{purchaseCardName}</span>
                  <span className="font-medium">${purchaseAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing fee</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="h-px bg-border my-1" />
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">${purchaseAmount.toFixed(2)}</span>
                </div>
              </div>
              <div className="pt-2 border-t text-[11px] text-muted-foreground space-y-0.5">
                <p>To: <span className="text-foreground font-medium">{recipientName}</span> ({recipientEmail})</p>
                <p>From: <span className="text-foreground font-medium">{senderName}</span></p>
              </div>
            </div>

            {/* Payment form */}
            <form onSubmit={handlePay} className="p-4 rounded-2xl bg-card border space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold">Payment</h3>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Lock className="w-3 h-3" /> Secure
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Card Number</label>
                <input
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                  required
                  placeholder="4242 4242 4242 4242"
                  inputMode="numeric"
                  className={`${inputCls} font-mono tracking-wider`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Expiry</label>
                  <input
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value.slice(0, 5))}
                    required
                    placeholder="MM/YY"
                    className={`${inputCls} font-mono`}
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">CVC</label>
                  <input
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    required
                    placeholder="123"
                    className={`${inputCls} font-mono`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {processing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    Processing payment...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Pay ${purchaseAmount.toFixed(2)}
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-muted-foreground">
                Demo checkout — no real charges
              </p>
            </form>
          </motion.div>
        )}

        {/* SUCCESS */}
        {tab === "buy" && step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 py-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-chart-2/10 to-primary/5 border text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="w-16 h-16 mx-auto rounded-2xl bg-chart-2 flex items-center justify-center mb-3"
              >
                <Check className="w-9 h-9 text-white" strokeWidth={3} />
              </motion.div>
              <h2 className="text-lg font-bold">Payment Successful!</h2>
              <p className="text-xs text-muted-foreground mt-1">
                Your ${purchaseAmount} gift card has been emailed to{" "}
                <span className="font-semibold text-foreground">{recipientEmail}</span>
              </p>

              <div className="mt-4 p-3 rounded-xl bg-card border text-left">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Gift Code</p>
                <p className="font-mono font-bold text-base mt-0.5">{orderCode}</p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  Also sent to your inbox at {senderEmail}
                </p>
              </div>
            </div>

            <EmailPreview
              variant="purchase"
              data={{
                email: recipientEmail,
                recipientName,
                senderName,
                amount: purchaseAmount,
                cardName: purchaseCardName,
                message,
                code: orderCode,
                expiryDate: getExpiryDate(12),
              }}
            />

            <button
              onClick={handleBackHome}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" /> Back to Home
            </button>
          </motion.div>
        )}

        {/* REDEEM */}
        {tab === "redeem" && (
          <motion.div key="redeem" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 12 }} className="px-4 py-5 space-y-5">
            <div>
              <h2 className="text-sm font-semibold mb-1">Enter your gift card code</h2>
              <p className="text-[11px] text-muted-foreground mb-3">Find the code on your gift card email or physical card</p>
              <form onSubmit={handleLookup} className="flex gap-2">
                <div className="relative flex-1">
                  <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    value={redeemCode}
                    onChange={(e) => { setRedeemCode(e.target.value.toUpperCase()); setLookupResult(null); setLastRedeemed(null); }}
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

            <div className="p-3 rounded-xl bg-muted/50 border border-border/50">
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Demo codes:</span>{" "}
                BV-GIFT-50A ($50), BV-GIFT-100B ($72.50 remaining), BV-GIFT-200C ($200), BV-GIFT-500D (fully used)
              </p>
            </div>

            <AnimatePresence mode="wait">
              {lookupResult && (
                <motion.div key={redeemCode} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="space-y-4">
                  {!lookupResult.found ? (
                    <div className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20 text-center">
                      <p className="text-sm font-semibold text-destructive">Code not found</p>
                      <p className="text-xs text-muted-foreground mt-1">Please check the code and try again</p>
                    </div>
                  ) : (
                    <>
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
                            onClick={() => { setTab("buy"); setStep("select"); }}
                            className="mt-3 px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                          >
                            Buy a New Gift Card
                          </button>
                        </div>
                      )}

                      <AnimatePresence>
                        {lastRedeemed !== null && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-3"
                          >
                            <div className="p-4 rounded-2xl bg-chart-2/10 border border-chart-2/20 flex items-center gap-3">
                              <div className="w-9 h-9 rounded-xl bg-chart-2/20 flex items-center justify-center shrink-0">
                                <Check className="w-5 h-5 text-chart-2" />
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-chart-2">Successfully redeemed!</p>
                                <p className="text-[10px] text-muted-foreground mt-0.5">
                                  ${lastRedeemed.toFixed(2)} applied · New balance: ${lookupResult.balance?.toFixed(2)}
                                </p>
                              </div>
                            </div>

                            <EmailPreview
                              variant="redeem"
                              data={{
                                email: `${lookupResult.from?.toLowerCase().replace(/\s+|\./g, "") || "guest"}@email.com`,
                                code: redeemCode,
                                name: lookupResult.name,
                                amount: lastRedeemed,
                                balance: lookupResult.balance ?? 0,
                                recipientName: lookupResult.from,
                                expiryDate: getExpiryDate(12),
                              }}
                            />
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
