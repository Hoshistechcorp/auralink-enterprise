import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Tag, Calendar, Percent } from "lucide-react";

const deals = [
  { title: "Summer Hotel Package", discount: "25% OFF", desc: "Stay 3 nights, pay for 2 at select downtown hotels.", expires: "Aug 31, 2026" },
  { title: "Atlanta CityPASS", discount: "40% OFF", desc: "Visit 5 top attractions for one low price. Includes Georgia Aquarium and World of Coca-Cola.", expires: "Dec 31, 2026" },
  { title: "BeltLine Food Tour Special", discount: "$20 OFF", desc: "Guided walking food tour with 6 tastings across the Eastside BeltLine.", expires: "Jun 30, 2026" },
  { title: "MARTA Tourist Pass", discount: "Unlimited Rides", desc: "7-day unlimited transit pass for $28. Perfect for visitors exploring the city.", expires: "Ongoing" },
  { title: "Georgia Aquarium Family Pack", discount: "15% OFF", desc: "Family of 4 admission with behind-the-scenes access.", expires: "Sep 15, 2026" },
];

const UpcomingDealsPage = () => (
  <DestinationSubPage title="Upcoming Deals">
    <p className="text-sm text-muted-foreground mb-5">Tourism promotions, hotel discounts, and travel packages.</p>
    <div className="space-y-3">
      {deals.map((d) => (
        <div key={d.title} className="p-4 rounded-2xl bg-card border shadow-sm">
          <div className="flex items-start justify-between">
            <h3 className="font-display font-semibold">{d.title}</h3>
            <span className="px-2 py-0.5 rounded-full bg-aura-success/15 text-aura-success text-xs font-bold">{d.discount}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{d.desc}</p>
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" /> Expires: {d.expires}
          </div>
        </div>
      ))}
    </div>
  </DestinationSubPage>
);

export default UpcomingDealsPage;
