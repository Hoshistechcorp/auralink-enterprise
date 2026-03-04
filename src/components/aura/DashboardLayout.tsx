import { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home, Layers, BarChart3, Gamepad2, Settings, QrCode, Users2, CreditCard,
  Heart, Megaphone, Share2, Search, Shield, Building2, ChevronDown, LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  icon: LucideIcon;
  label: string;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
}

const navSections: NavSection[] = [
  {
    title: "Overview",
    defaultOpen: true,
    items: [
      { icon: Home, label: "Dashboard", path: "/dashboard" },
      { icon: Layers, label: "Card Studio", path: "/dashboard/cards" },
      { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
    ],
  },
  {
    title: "Engagement",
    defaultOpen: true,
    items: [
      { icon: Gamepad2, label: "Gamification", path: "/dashboard/gamification" },
      { icon: Heart, label: "Loyalty", path: "/dashboard/loyalty" },
      { icon: Share2, label: "Referrals", path: "/dashboard/referrals" },
    ],
  },
  {
    title: "Marketing",
    defaultOpen: true,
    items: [
      { icon: QrCode, label: "QR Codes", path: "/dashboard/qr" },
      { icon: Users2, label: "Affiliates", path: "/dashboard/affiliates" },
      { icon: Megaphone, label: "Influencers", path: "/dashboard/influencers" },
    ],
  },
  {
    title: "Insights",
    defaultOpen: false,
    items: [
      { icon: Search, label: "SEO & Maps", path: "/dashboard/seo" },
      { icon: Shield, label: "Reputation", path: "/dashboard/reputation" },
    ],
  },
  {
    title: "Business",
    defaultOpen: false,
    items: [
      { icon: Building2, label: "Enterprise", path: "/dashboard/enterprise" },
      { icon: CreditCard, label: "Subscription", path: "/dashboard/subscription" },
      { icon: Settings, label: "Settings", path: "/dashboard/settings" },
    ],
  },
];

const SidebarSection = ({ section, currentPath, navigate }: { section: NavSection; currentPath: string; navigate: (p: string) => void }) => {
  const hasActive = section.items.some((i) => currentPath === i.path);
  const [open, setOpen] = useState(section.defaultOpen || hasActive);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
      >
        {section.title}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "" : "-rotate-90"}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {section.items.map((item) => {
              const active = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
      <aside className="w-56 bg-card border-r hidden lg:flex flex-col">
        <div className="p-4 pb-2">
          <div className="font-display text-xl font-bold text-primary cursor-pointer" onClick={() => navigate("/")}>
            AuraLink
          </div>
          <p className="text-[10px] text-muted-foreground mt-0.5">Enterprise Platform</p>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
          {navSections.map((section) => (
            <SidebarSection key={section.title} section={section} currentPath={location.pathname} navigate={navigate} />
          ))}
        </nav>
        <div className="p-3 border-t">
          <button
            onClick={() => navigate("/microsite")}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            ← View Public Page
          </button>
        </div>
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
