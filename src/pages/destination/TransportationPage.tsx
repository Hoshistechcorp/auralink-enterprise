import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Plane, Train, Bus, Bike } from "lucide-react";

const options = [
  { icon: Plane, name: "Hartsfield-Jackson Atlanta International Airport", desc: "World's busiest airport (ATL). MARTA train connects directly to downtown in 20 minutes." },
  { icon: Train, name: "MARTA Rail & Bus", desc: "Atlanta's public transit system with 4 rail lines and 100+ bus routes. Breeze Card for easy payment." },
  { icon: Bus, name: "Atlanta Streetcar", desc: "Free streetcar loop connecting downtown attractions including Centennial Olympic Park." },
  { icon: Bike, name: "Relay Bike Share", desc: "500+ bikes at 65 stations across Atlanta. Perfect for BeltLine exploration." },
];

const TransportationPage = () => (
  <DestinationSubPage title="Transportation">
    <p className="text-sm text-muted-foreground mb-5">Getting to and around Atlanta.</p>
    <div className="space-y-3">
      {options.map((o) => (
        <div key={o.name} className="p-4 rounded-2xl bg-card border shadow-sm flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <o.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm">{o.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{o.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default TransportationPage;
