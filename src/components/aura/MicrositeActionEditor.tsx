import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Navigation, Globe, Mail, Info, CalendarCheck, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getBusinessContact, saveBusinessContact, type BusinessContact } from "@/lib/businessContact";

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

  const handleSave = () => {
    saveBusinessContact(contact);
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
                  a.label === "Reservations";
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
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MicrositeActionEditor;
