import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown, Home, Layers, BarChart3, Gamepad2, Heart, Share2,
  QrCode, Users2, Megaphone, Search, Shield, MapPin, UserCog,
  Building2, Gift, CreditCard, Settings, ClipboardEdit,
  Globe, BookOpen, Download, Rocket, Sparkles, CheckCircle2, Circle,
  ArrowRight,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getOnboardingProgress, type OnboardingProgress } from "@/lib/onboardingProgress";

// ── Feature Sections ──────────────────────────────
interface DocSection {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const sections: DocSection[] = [
  {
    id: "dashboard", icon: Home, title: "Dashboard Overview",
    description: "Your central command center showing key metrics, quick stats, and activity summaries at a glance.",
    features: ["Real-time visitor and engagement metrics", "Quick-access cards for all major modules", "Activity feed with recent customer interactions", "Revenue and performance KPIs", "Multi-location switcher in the top bar", "Dark/light mode toggle"],
  },
  {
    id: "admin", icon: ClipboardEdit, title: "Admin Panel",
    description: "Manage all your business content — hours, menu items, gallery, staff profiles, events, awards, private dining, FAQs, and social links.",
    features: ["Business Hours: Set operating hours with timezone support and special holiday schedules", "Menu Management: Add/edit menu items with images, prices, descriptions, and visibility toggles", "Photo Gallery: Upload and organize venue photos with drag-and-drop ordering", "Staff Profiles: Create team member cards with photos, roles, and guest ratings", "Events: Manage upcoming events with ticketing (price & quantity) and date/time settings", "Awards & Press: Showcase accolades, press mentions, and industry recognition", "Private Dining: Configure private dining rooms with capacity, pricing, and inquiry forms", "FAQs: Create and organize frequently asked questions for your microsite", "Social Links: Connect all your social media profiles in one place", "Content gated by subscription tier — locked tabs prompt upgrade"],
  },
  {
    id: "card-studio", icon: Layers, title: "Card Studio",
    description: "Customize your public microsite layout by selecting up to 15 cards. Drag to reorder, toggle visibility, and preview changes in real time.",
    features: ["15 available card types covering every aspect of your business", "Drag-and-drop card reordering", "Toggle cards on/off to control what visitors see", "Live preview of your microsite layout", "Cards locked by tier display upgrade prompts", "Spark tier: 6 core cards (Details, Gift Cards, Menu, Social Links, Reviews, FAQs)", "Maverick tier: adds Freebie Game, Staff, Awards, Events, Popular Dishes", "Supernova tier: unlocks AI Concierge, Private Dining, Photo Gallery, Refer a Friend, Affiliate"],
  },
  {
    id: "analytics", icon: BarChart3, title: "Analytics",
    description: "Track visitor engagement, card performance, and business metrics with interactive charts and exportable reports.",
    features: ["Visitor count and trend charts (daily, weekly, monthly)", "Card-level engagement metrics — views, taps, and conversion rates", "Top-performing content identification", "Revenue tracking and goal progress", "Geographic visitor breakdown", "Device and platform distribution"],
  },
  {
    id: "gamification", icon: Gamepad2, title: "Gamification",
    description: "Engage customers with interactive games and rewards that drive repeat visits and social sharing.",
    features: ["Spin-the-wheel and scratch card prize games", "Configurable prize pools and win probabilities", "Freebie Game card on the microsite for instant engagement", "Prize redemption tracking and analytics", "Social sharing incentives for game results"],
  },
  {
    id: "loyalty", icon: Heart, title: "Loyalty Program",
    description: "Build a tiered loyalty program with points, rewards, and milestone tracking to keep customers coming back.",
    features: ["Multi-tier loyalty levels (Bronze, Silver, Gold, Platinum)", "Points-per-visit and points-per-dollar configuration", "Reward catalog with redemption thresholds", "Member activity tracking and engagement analytics", "Automated milestone notifications", "VIP perks and exclusive offers management"],
  },
  {
    id: "referrals", icon: Share2, title: "Referral Program",
    description: "Enable customers to refer friends via unique links on the microsite's Refer a Friend card, with tracking and rewards.",
    features: ["Unique referral link generation for each customer", "Refer a Friend card on the public microsite", "Referral tracking with conversion metrics", "Configurable rewards for referrer and referee", "Social sharing integration (SMS, email, social media)", "Referral leaderboard and top advocate tracking"],
  },
  {
    id: "qr", icon: QrCode, title: "QR Code Management",
    description: "Generate, customize, and track QR codes that link to your microsite, specific cards, or custom URLs.",
    features: ["One-click QR code generation for any microsite page", "Custom branding with logo overlay and color matching", "Download in multiple formats (PNG, SVG, PDF)", "Scan analytics with location and device tracking", "Batch QR code creation for multi-location setups", "Dynamic QR codes that can be updated without reprinting"],
  },
  {
    id: "affiliates", icon: Users2, title: "Affiliate Program",
    description: "Create and manage affiliate campaigns with unique promo codes, commission tracking, and performance dashboards.",
    features: ["Campaign creation with custom promo codes (e.g., SARAH20)", "Affiliate sign-up via the microsite Affiliate card", "Commission rate configuration per campaign", "Real-time revenue and conversion tracking", "Affiliate performance leaderboard", "Payout management and history"],
  },
  {
    id: "influencers", icon: Megaphone, title: "Influencer Management",
    description: "Discover, onboard, and track influencer partnerships to amplify your brand reach.",
    features: ["Influencer discovery and outreach tools", "Campaign assignment and brief management", "Content tracking across social platforms", "ROI measurement per influencer partnership", "Automated reporting and performance summaries"],
  },
  {
    id: "seo", icon: Search, title: "SEO & Maps",
    description: "Optimize your local search presence with Google Maps integration, keyword tracking, and listing management.",
    features: ["Google Maps card integration on the microsite", "Local SEO audit and optimization suggestions", "Keyword ranking tracker for local search terms", "Business listing consistency checker", "Review response management for SEO impact"],
  },
  {
    id: "reputation", icon: Shield, title: "Reputation Management",
    description: "Monitor and manage your online reputation across review platforms with sentiment analysis and response tools.",
    features: ["Multi-platform review aggregation (Google, Yelp, TripAdvisor)", "Sentiment analysis with trend tracking", "Automated alerts for negative reviews", "Review response templates and AI suggestions", "Reputation score tracking over time", "Competitor benchmarking"],
  },
  {
    id: "gift-cards", icon: Gift, title: "Gift Cards",
    description: "Sell digital gift cards on your microsite and manage redemption, balances, and transaction history from the dashboard.",
    features: ["Digital gift card purchasing on the public microsite", "Preset and custom dollar amounts", "Unique gift card codes (e.g., BV-GIFT-100B)", "Balance lookup and partial redemption", "POS 'Sell Card' interface for in-house issuance", "Transaction history and sales analytics"],
  },
  {
    id: "locations", icon: MapPin, title: "Multi-Location Management",
    description: "Manage multiple business locations from a single dashboard with per-location settings and analytics.",
    features: ["Quick location switcher in the dashboard header", "Per-location microsite customization", "Centralized vs. location-specific content management", "Cross-location performance comparison", "Location-specific QR codes and referral links"],
  },
  {
    id: "team", icon: UserCog, title: "Team Management",
    description: "Invite team members, assign roles, and manage access permissions across your organization.",
    features: ["Role-based access control (Admin, Manager, Coordinator, Staff)", "Team member invitation via email", "Activity logs per team member", "Permission management for sensitive settings"],
  },
  {
    id: "enterprise", icon: Building2, title: "Enterprise Features",
    description: "Advanced tools for large organizations including white-labeling, API access, and dedicated support.",
    features: ["White-label branding options", "API access for custom integrations", "Dedicated account manager", "Custom reporting and data exports", "SLA guarantees and priority support"],
  },
  {
    id: "subscription", icon: CreditCard, title: "Subscription & Billing",
    description: "Manage your plan, view billing history, and upgrade or downgrade between Spark, Maverick, and Supernova tiers.",
    features: ["Three subscription tiers: Spark (Free), Maverick ($79/mo), Supernova ($149/mo)", "21-day free trial of Supernova for all new users", "Plan comparison with feature breakdown", "Billing history and invoice downloads", "Upgrade/downgrade with prorated billing", "Trial countdown visible on dashboard and microsite"],
  },
  {
    id: "microsite", icon: Globe, title: "Public Microsite",
    description: "Your customer-facing mini website with action buttons, content cards, and interactive features — all powered by your dashboard settings.",
    features: ["Action Buttons: Call, Message, Directions, and Reserve — all configurable from Settings", "Dynamic card layout controlled by Card Studio", "Reviews card with real customer submissions (star ratings + comments)", "Gift Cards card for digital purchases", "Menu card with item details and pricing", "Freebie Game for interactive engagement", "Staff card with team profiles and tip links", "Refer a Friend and Affiliate sign-up cards", "AI Concierge for instant customer assistance", "Photo Gallery with venue imagery", "Trial expiry shows upgrade prompt instead of hiding cards", "Trial countdown banner visible to business owner", "Fully mobile-responsive design"],
  },
  {
    id: "settings", icon: Settings, title: "Settings",
    description: "Configure your profile, business details, notification preferences, visual theme, and security options.",
    features: ["Profile: Edit name, email, phone, bio, and avatar", "Business: Set industry, venues, team members, and reservation provider", "Microsite Action Buttons: Configure phone, SMS, address, email, and Google Maps URL", "Notifications: Toggle alerts for reviews, referrals, loyalty milestones, and more", "Appearance: Choose from 6 preset themes or create custom colors, adjust border radius and font style", "Security: Change password, enable two-factor authentication, manage active sessions", "Documentation: This guide — a full reference of every feature (you are here!)"],
  },
];

// ── PDF Export ────────────────────────────────────
const generateDocsPdf = (progress: OnboardingProgress) => {
  const printContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>AuraLink Platform Documentation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: #1a1a1a; padding: 48px; line-height: 1.6; }
    h1 { font-size: 28px; margin-bottom: 4px; color: #6b2139; }
    .subtitle { font-size: 13px; color: #888; margin-bottom: 32px; }
    h2 { font-size: 20px; margin-top: 28px; margin-bottom: 12px; color: #6b2139; border-bottom: 2px solid #f0e0e6; padding-bottom: 6px; }
    p { font-size: 13px; color: #555; margin-bottom: 8px; }
    .step-box { background: #faf5f7; border: 1px solid #f0e0e6; border-radius: 8px; padding: 14px 16px; margin-bottom: 10px; page-break-inside: avoid; }
    .step-num { display: inline-block; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700; margin-right: 8px; }
    .step-done { background: #16a34a; color: white; }
    .step-pending { background: #6b2139; color: white; }
    .step-title { font-weight: 600; font-size: 14px; }
    .tip { font-size: 11px; color: #6b2139; margin-top: 4px; font-style: italic; }
    .section { page-break-inside: avoid; margin-bottom: 20px; }
    .section-title { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
    .section-desc { font-size: 12px; color: #666; margin-bottom: 8px; }
    ul { padding-left: 20px; margin-bottom: 8px; }
    li { font-size: 12px; color: #444; margin-bottom: 3px; }
    .stats { display: flex; gap: 16px; margin-bottom: 24px; }
    .stat-box { flex: 1; background: #faf5f7; border-radius: 8px; padding: 12px; text-align: center; }
    .stat-num { font-size: 28px; font-weight: 700; color: #6b2139; }
    .stat-label { font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 1px; }
    .progress-bar { background: #f0e0e6; border-radius: 8px; height: 12px; margin: 16px 0; }
    .progress-fill { background: #16a34a; border-radius: 8px; height: 12px; }
    .footer { margin-top: 40px; text-align: center; font-size: 11px; color: #aaa; border-top: 1px solid #eee; padding-top: 16px; }
    @media print { body { padding: 24px; } }
  </style>
</head>
<body>
  <h1>AuraLink Platform Documentation</h1>
  <p class="subtitle">Complete Feature Reference · v1.0 · March 2026</p>
  <div class="stats">
    <div class="stat-box"><div class="stat-num">${sections.length}</div><div class="stat-label">Modules</div></div>
    <div class="stat-box"><div class="stat-num">15</div><div class="stat-label">Microsite Cards</div></div>
    <div class="stat-box"><div class="stat-num">3</div><div class="stat-label">Plan Tiers</div></div>
  </div>
  <h2>🚀 Getting Started (${progress.completedCount}/${progress.totalCount} Complete)</h2>
  <div class="progress-bar"><div class="progress-fill" style="width:${progress.percentage}%"></div></div>
  ${progress.steps.map(s => `
    <div class="step-box">
      <span class="step-num ${s.completed ? 'step-done' : 'step-pending'}">${s.completed ? '✓' : s.step}</span>
      <span class="step-title">${s.title}${s.completed ? ' ✅' : ''}</span>
      <p style="margin-top:6px">${s.description}</p>
      <p class="tip">💡 ${s.tip}</p>
    </div>
  `).join("")}
  <h2>📖 Feature Reference</h2>
  ${sections.map(s => `
    <div class="section">
      <div class="section-title">${s.title}</div>
      <div class="section-desc">${s.description}</div>
      <ul>${s.features.map(f => `<li>${f}</li>`).join("")}</ul>
    </div>
  `).join("")}
  <div class="footer">AuraLink Enterprise Platform · Generated ${new Date().toLocaleDateString()}</div>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(printContent);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 400);
  } else {
    toast({ title: "Pop-up blocked", description: "Please allow pop-ups to export the PDF.", variant: "destructive" });
  }
};

// ── Section Accordion ──────────────────────────────
const SectionAccordion = ({ section }: { section: DocSection }) => {
  const [open, setOpen] = useState(false);
  const Icon = section.icon;
  return (
    <div className="border rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-muted/50 transition-colors">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold">{section.title}</h4>
          <p className="text-xs text-muted-foreground truncate">{section.description}</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <div className="px-4 pb-4 pt-1 border-t">
              <p className="text-sm text-muted-foreground mb-3">{section.description}</p>
              <ul className="space-y-1.5">
                {section.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Main Component ─────────────────────────────────
const DocumentationTab = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showGuide, setShowGuide] = useState(true);
  const [progress, setProgress] = useState<OnboardingProgress>(getOnboardingProgress);

  useEffect(() => {
    setProgress(getOnboardingProgress());
  }, []);

  const filtered = searchQuery
    ? sections.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : sections;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      {/* Getting Started Guide with Progress */}
      <div className="p-6 rounded-2xl bg-card border">
        <button onClick={() => setShowGuide(!showGuide)} className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h3 className="font-display font-semibold text-lg">Getting Started</h3>
              <p className="text-xs text-muted-foreground">{progress.completedCount} of {progress.totalCount} steps completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-primary">{progress.percentage}%</span>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${showGuide ? "rotate-180" : ""}`} />
          </div>
        </button>

        {/* Progress Bar — always visible */}
        <div className="mt-4 h-2.5 rounded-full bg-muted/50 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress.percentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          {progress.steps.map((s) => (
            <div key={s.id} className="flex flex-col items-center">
              {s.completed ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <Circle className="w-3.5 h-3.5 text-muted-foreground/40" />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence>
          {showGuide && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2">
                {progress.steps.map((step) => (
                  <div
                    key={step.step}
                    className={`flex gap-3 p-3.5 rounded-xl border transition-colors ${
                      step.completed
                        ? "bg-green-500/5 border-green-500/20"
                        : "bg-muted/30 border-transparent hover:border-primary/20"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      step.completed
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground"
                    }`}>
                      {step.completed ? <CheckCircle2 className="w-4 h-4" /> : step.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-semibold ${step.completed ? "line-through text-muted-foreground" : ""}`}>
                          {step.title}
                        </h4>
                        {step.completed && (
                          <span className="text-[10px] font-medium text-green-600 bg-green-500/10 px-1.5 py-0.5 rounded-full">Done</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                      {!step.completed && (
                        <button
                          onClick={() => navigate(step.link)}
                          className="flex items-center gap-1 mt-2 text-[11px] text-primary font-medium hover:underline"
                        >
                          Complete this step <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                      {step.completed && (
                        <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-green-600 font-medium">
                          <Sparkles className="w-3 h-3" />
                          {step.tip}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Feature Reference */}
      <div className="p-6 rounded-2xl bg-card border">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-lg">Feature Reference</h3>
          </div>
          <button
            onClick={() => generateDocsPdf(progress)}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          A complete reference of every feature and function in AuraLink. Click any section to expand.
        </p>

        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search features..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-muted/30 text-center">
            <p className="text-2xl font-bold text-primary">{sections.length}</p>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Modules</p>
          </div>
          <div className="p-3 rounded-xl bg-muted/30 text-center">
            <p className="text-2xl font-bold text-primary">15</p>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Microsite Cards</p>
          </div>
          <div className="p-3 rounded-xl bg-muted/30 text-center">
            <p className="text-2xl font-bold text-primary">3</p>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Plan Tiers</p>
          </div>
        </div>

        <div className="space-y-2">
          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">No features match your search.</p>
          )}
          {filtered.map((section) => (
            <SectionAccordion key={section.id} section={section} />
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground">
        AuraLink Platform v1.0 · Last updated March 2026
      </div>
    </motion.div>
  );
};

export default DocumentationTab;
