import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gift, CreditCard, Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const giftCards = [
  { id: "1", name: "Classic Dinner", amount: 50, description: "Perfect for a starter and main course", color: "from-primary/20 to-primary/5", popular: false },
  { id: "2", name: "Fine Dining Experience", amount: 100, description: "Enjoy a full 3-course dinner for two", color: "from-chart-4/20 to-chart-4/5", popular: true },
  { id: "3", name: "Chef's Table", amount: 200, description: "An unforgettable multi-course tasting menu", color: "from-chart-2/20 to-chart-2/5", popular: false },
  { id: "4", name: "Ultimate Celebration", amount: 500, description: "Wine pairing, private dining & the full experience", color: "from-chart-5/20 to-chart-5/5", popular: false },
];

const customAmounts = [25, 75, 150, 250, 300];

const GiftCardsPage = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

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

      <div className="px-4 py-5 space-y-5">
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
              <input value={senderName} onChange={(e) => setSenderName(e.target.value)} required placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Recipient Name</label>
              <input value={recipientName} onChange={(e) => setRecipientName(e.target.value)} required placeholder="Who is this for?"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Recipient Email</label>
              <input type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} required placeholder="their@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Personal Message (optional)</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add a note..." rows={2}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" maxLength={200} />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Purchase Gift Card
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default GiftCardsPage;
