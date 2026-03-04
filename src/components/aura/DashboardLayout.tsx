import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home, Layers, BarChart3, Gamepad2, Settings, QrCode, Users2, CreditCard, Heart, Megaphone, Share2, Search,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: Layers, label: "Card Studio", path: "/dashboard/cards" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Gamepad2, label: "Gamification", path: "/dashboard/gamification" },
  { icon: QrCode, label: "QR Codes", path: "/dashboard/qr" },
  { icon: Users2, label: "Affiliates", path: "/dashboard/affiliates" },
  { icon: Megaphone, label: "Influencers", path: "/dashboard/influencers" },
  { icon: Heart, label: "Loyalty", path: "/dashboard/loyalty" },
  { icon: Share2, label: "Referrals", path: "/dashboard/referrals" },
  { icon: Search, label: "SEO & Maps", path: "/dashboard/seo" },
  { icon: CreditCard, label: "Subscription", path: "/dashboard/subscription" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const DashboardLayout = ({ children, title, subtitle = "Bella Vista · Restaurant" }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      <aside className="w-60 bg-card border-r p-4 hidden lg:flex flex-col">
        <div className="font-display text-xl font-bold text-primary mb-8 cursor-pointer" onClick={() => navigate("/")}>
          AuraLink
        </div>
        <nav className="space-y-1 flex-1">
          {sidebarItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <button
          onClick={() => navigate("/microsite")}
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          ← View Public Page
        </button>
      </aside>

      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl font-bold">{title}</h1>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            <button
              onClick={() => navigate("/microsite")}
              className="lg:hidden text-sm text-primary font-medium"
            >
              View Page →
            </button>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
