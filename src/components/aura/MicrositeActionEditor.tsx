import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Navigation, Globe, Mail, Info, CalendarCheck, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getBusinessContact, saveBusinessContact, type BusinessContact } from "@/lib/businessContact";
import { getSubscription, saveSubscription } from "@/lib/subscription";

const inputCls =
  "w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

const previewActions = [
  { icon: Phone, label: "Call" },
  { icon: MessageCircle, label: "Message" },
  { icon: Navigation, label: "Directions" },
  { icon: Info, label: "Details" },
  { icon: CalendarCheck, label: "Reservations" },
];

const MicrositeActionEditor = () => {
  const [contact, setContact] = useState<BusinessContact>(getBusinessContact);
  const [reservationProvider, setReservationProvider] = useState("opentable");
  const [reservationUrl, setReservationUrl] = useState("");

  useEffect(() => {
    const sub = getSubscription();
    setReservationProvider(sub.reservationProvider || "opentable");
    setReservationUrl(sub.reservationUrl || "");
  }, []);

  const handleSave = () => {
    saveBusinessContact(contact);
    const sub = getSubscription();
    sub.reservationProvider = reservationProvider;
    sub.reservationUrl = reservationUrl;
    saveSubscription(sub);
    toast({ title: "Action buttons saved", description: "Your microsite action buttons have been updated." });
  };

  const set = <K extends keyof BusinessContact>(k: K, v: BusinessContact[K]) =>
    setContact((c) => ({ ...c, [k]: v }));

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 rounded-2xl border bg-card overflow-hidden"
    >
      <div className="p-5 border-b flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h3 className="font-display font-semibold text-lg">Microsite Action Buttons</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Configure Call, Message, Directions and contact links shown on your public microsite.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Save className="w-4 h-4" /> Save
        </button>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6 p-5">
        {/* Editor */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone Number (Call)</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={contact.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(212) 555-0198" className={inputCls} />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">SMS Number (Message)</label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={contact.smsNumber} onChange={(e) => set("smsNumber", e.target.value)} placeholder="(212) 555-0198" className={inputCls} />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Business Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={contact.address} onChange={(e) => set("address", e.target.value)} placeholder="123 Grand Ave, NY" className={inputCls} />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Google Maps URL (optional)</label>
            <div className="relative">
              <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={contact.mapsUrl} onChange={(e) => set("mapsUrl", e.target.value)} placeholder="https://maps.google.com/..." className={inputCls} />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Website</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={contact.website} onChange={(e) => set("website", e.target.value)} placeholder="www.bellavistanyc.com" className={inputCls} />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Contact Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input value={contact.email} onChange={(e) => set("email", e.target.value)} placeholder="info@bellavista.com" className={inputCls} />
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="rounded-2xl border bg-muted/30 p-4">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">Live Preview</div>
          <div className="rounded-xl bg-background border p-3">
            <div className="text-sm font-display font-semibold mb-1">Bella Vista</div>
            <div className="text-[11px] text-muted-foreground mb-3 truncate">{contact.address || "No address set"}</div>
            <div className="grid grid-cols-5 gap-1.5">
              {previewActions.map((a) => {
                const enabled =
                  (a.label === "Call" && contact.phone) ||
                  (a.label === "Message" && contact.smsNumber) ||
                  (a.label === "Directions" && (contact.address || contact.mapsUrl)) ||
                  a.label === "Details" ||
                  (a.label === "Reservations" && reservationUrl);
                return (
                  <div
                    key={a.label}
                    className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg border text-center ${
                      enabled ? "bg-card" : "bg-muted/40 opacity-50"
                    }`}
                  >
                    <a.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[9px] font-medium leading-tight">{a.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 space-y-1 text-[10px] text-muted-foreground">
              {contact.phone && <div className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> {contact.phone}</div>}
              {contact.email && <div className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> {contact.email}</div>}
              {contact.website && <div className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> {contact.website}</div>}
              {reservationUrl && <div className="flex items-center gap-1.5"><CalendarCheck className="w-3 h-3" /> {reservationProvider}</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Link */}
      <div className="px-5 pb-5">
        <div className="p-5 rounded-xl bg-muted/30 border">
          <div className="flex items-center gap-2 mb-2">
            <CalendarCheck className="w-4 h-4 text-primary" />
            <h4 className="text-sm font-semibold">Reservation Link</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Set your reservation provider. This link powers the "Reservations" button on your microsite.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Provider</label>
              <select
                value={reservationProvider}
                onChange={(e) => setReservationProvider(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="opentable">OpenTable</option>
                <option value="resy">Resy</option>
                <option value="yelp">Yelp Reservations</option>
                <option value="tock">Tock</option>
                <option value="custom">Custom Link</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Reservation URL</label>
              <input
                value={reservationUrl}
                onChange={(e) => setReservationUrl(e.target.value)}
                placeholder={reservationProvider === "opentable" ? "https://opentable.com/r/..." : reservationProvider === "resy" ? "https://resy.com/cities/..." : "https://..."}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MicrositeActionEditor;
