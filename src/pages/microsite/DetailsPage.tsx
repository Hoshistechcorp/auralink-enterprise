import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Phone, Globe, MapPin, Wifi, CreditCard, Car, Accessibility } from "lucide-react";
import { motion } from "framer-motion";

const hours = [
  { day: "Monday", time: "11:30 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:30 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:30 AM – 10:00 PM" },
  { day: "Thursday", time: "11:30 AM – 11:00 PM" },
  { day: "Friday", time: "11:30 AM – 11:30 PM" },
  { day: "Saturday", time: "10:00 AM – 11:30 PM" },
  { day: "Sunday", time: "10:00 AM – 9:00 PM" },
];

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: CreditCard, label: "All cards accepted" },
  { icon: Car, label: "Valet parking" },
  { icon: Accessibility, label: "Wheelchair accessible" },
];

const DetailsPage = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Details & Hours</h1>
      </div>

      <div className="px-4 mt-4 space-y-6">
        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-card border">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">(212) 555-0198</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-card border">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm">www.bellavistanyc.com</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-card border">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">123 Grand Ave, New York, NY 10001</span>
            </div>
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Hours</h2>
          <div className="rounded-xl bg-card border divide-y">
            {hours.map((h) => (
              <div key={h.day} className={`flex items-center justify-between px-4 py-2.5 text-sm ${h.day === today ? "bg-primary/5 font-medium" : ""}`}>
                <div className="flex items-center gap-2">
                  {h.day === today && <Clock className="w-3.5 h-3.5 text-primary" />}
                  <span>{h.day}</span>
                </div>
                <span className="text-muted-foreground">{h.time}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Amenities */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Amenities</h2>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-2 p-3 rounded-xl bg-card border text-sm">
                <a.icon className="w-4 h-4 text-primary" />
                {a.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="h-8" />
    </div>
  );
};

export default DetailsPage;
