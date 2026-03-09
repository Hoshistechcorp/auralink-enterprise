import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, MapPin, Ticket, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  desc: string;
  tag: string;
  ticketPrice: number;
  ticketsAvailable: number;
  image: string;
}

const events: Event[] = [
  { title: "Wine & Dine Tasting Night", date: "Mar 15, 2026", time: "7:00 PM", location: "The Cellar", desc: "Explore 12 premium Italian wines paired with chef-curated bites.", tag: "Sold Out", ticketPrice: 85, ticketsAvailable: 0, image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format" },
  { title: "Jazz & Supper Club", date: "Mar 22, 2026", time: "8:00 PM", location: "Grand Terrace", desc: "Live jazz trio with a 4-course prix fixe dinner.", tag: "Few Spots Left", ticketPrice: 120, ticketsAvailable: 6, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format" },
  { title: "Truffle Season Launch", date: "Apr 1, 2026", time: "6:30 PM", location: "Main Dining", desc: "Celebrate the arrival of white truffles with an exclusive tasting menu.", tag: "New", ticketPrice: 150, ticketsAvailable: 30, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format" },
  { title: "Easter Brunch", date: "Apr 5, 2026", time: "10:30 AM", location: "Grand Terrace", desc: "Family-style brunch with live entertainment and egg hunt for kids.", tag: "Family", ticketPrice: 45, ticketsAvailable: 50, image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format" },
  { title: "Pasta Masterclass", date: "Apr 12, 2026", time: "2:00 PM", location: "Kitchen Studio", desc: "Hands-on class with Chef Marco — learn to make fresh tagliatelle.", tag: "Interactive", ticketPrice: 75, ticketsAvailable: 12, image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format" },
];

const tagColors: Record<string, string> = {
  "Sold Out": "aura-badge-danger",
  "Few Spots Left": "aura-badge-warning",
  "New": "aura-badge-success",
  "Family": "aura-badge-info",
  "Interactive": "aura-badge-gold",
};

const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

const EventsPage = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [ticketQty, setTicketQty] = useState(1);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");

  const openTicketing = (event: Event) => {
    setSelectedEvent(event);
    setTicketQty(1);
    setBuyerName("");
    setBuyerEmail("");
  };

  const handlePurchase = () => {
    if (!buyerName || !buyerEmail || !selectedEvent) return;
    toast({
      title: "Tickets purchased! 🎫",
      description: `${ticketQty}× ${selectedEvent.title} — $${(selectedEvent.ticketPrice * ticketQty).toFixed(2)} total. Confirmation sent to ${buyerEmail}`,
    });
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Events</h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {events.map((event, i) => (
          <motion.div key={event.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="rounded-2xl bg-card border overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-36 object-cover" loading="lazy" />
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm">{event.title}</h3>
                <span className={`aura-badge ${tagColors[event.tag] || "aura-badge-info"} text-[10px] shrink-0`}>{event.tag}</span>
              </div>
              <p className="text-xs text-muted-foreground">{event.desc}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{event.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{event.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5 text-primary" />
                  <span className="text-sm font-bold text-primary">${event.ticketPrice}</span>
                  <span className="text-[10px] text-muted-foreground">/ person</span>
                </div>
                {event.ticketsAvailable > 0 && event.ticketsAvailable <= 10 && (
                  <span className="text-[10px] text-aura-warning font-medium">{event.ticketsAvailable} left</span>
                )}
              </div>
              {event.tag !== "Sold Out" ? (
                <button onClick={() => openTicketing(event)}
                  className="w-full mt-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5" /> Get Tickets
                </button>
              ) : (
                <button disabled className="w-full mt-1 py-2.5 rounded-xl bg-muted text-muted-foreground text-sm font-medium cursor-not-allowed">
                  Sold Out
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-8" />

      {/* Ticket Purchase Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-[400px]">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-base">
                  <Ticket className="w-4 h-4 text-primary" /> Get Tickets
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-muted/30 border">
                  <h4 className="text-sm font-semibold">{selectedEvent.title}</h4>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{selectedEvent.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{selectedEvent.time}</span>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Number of Tickets</label>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setTicketQty(Math.max(1, ticketQty - 1))}
                      className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-bold w-8 text-center">{ticketQty}</span>
                    <button onClick={() => setTicketQty(Math.min(selectedEvent.ticketsAvailable, ticketQty + 1))}
                      className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-muted-foreground ml-auto">{selectedEvent.ticketsAvailable} available</span>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center justify-between text-sm">
                    <span>{ticketQty}× Ticket @ ${selectedEvent.ticketPrice}</span>
                    <span className="font-bold text-primary">${(selectedEvent.ticketPrice * ticketQty).toFixed(2)}</span>
                  </div>
                </div>

                {/* Buyer Info */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Your Name *</label>
                    <input value={buyerName} onChange={(e) => setBuyerName(e.target.value)} placeholder="Full name" className={inputCls} maxLength={100} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Email *</label>
                    <input type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} placeholder="your@email.com" className={inputCls} maxLength={255} />
                  </div>
                </div>

                <button onClick={handlePurchase} disabled={!buyerName || !buyerEmail}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed">
                  <ShoppingBag className="w-4 h-4" /> Purchase — ${(selectedEvent.ticketPrice * ticketQty).toFixed(2)}
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventsPage;
