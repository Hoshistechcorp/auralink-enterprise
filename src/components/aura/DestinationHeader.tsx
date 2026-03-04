import { MapPin, Users, BadgeCheck, Shield } from "lucide-react";
import coverImage from "@/assets/destination-cover.jpg";
import logoImage from "@/assets/destination-logo.png";

const DestinationHeader = () => (
  <div className="relative">
    <div className="h-48 overflow-hidden">
      <img src={coverImage} alt="Atlanta skyline at golden hour" className="w-full h-full object-cover" />
      <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-background/80" />
    </div>

    <div className="relative px-4 -mt-12">
      <div className="flex items-end gap-3">
        <img
          src={logoImage}
          alt="Visit Atlanta logo"
          className="w-20 h-20 rounded-2xl border-4 border-background shadow-lg object-cover bg-card"
        />
        <div className="pb-1 flex-1">
          <div className="flex items-center gap-1.5">
            <h1 className="text-xl font-display font-bold">Visit Atlanta</h1>
            <BadgeCheck className="w-5 h-5 text-aura-info" />
            <Shield className="w-4 h-4 text-aura-success" />
          </div>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-sm font-medium flex items-center gap-1">⭐ 4.8 <span className="text-xs text-muted-foreground">visitor rating</span></span>
            <span className="text-sm font-medium flex items-center gap-1">🏛️ 12M <span className="text-xs text-muted-foreground">annual visitors</span></span>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        Where Culture, Food, and Music Meet.
      </p>
      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
        <MapPin className="w-3 h-3" />
        <span>Atlanta, Georgia, USA</span>
      </div>
      <div className="flex gap-1.5 mt-2">
        <span className="aura-badge aura-badge-gold">🏆 Top Destination</span>
        <span className="aura-badge aura-badge-success">🌍 Cultural Capital</span>
      </div>
    </div>
  </div>
);

export default DestinationHeader;
