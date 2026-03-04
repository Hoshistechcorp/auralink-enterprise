import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, Eye, TrendingUp, MapPin, Globe, Calendar, Star,
  Landmark, BarChart3, ArrowUpRight, ArrowDownRight,
} from "lucide-react";
import DashboardLayout from "@/components/aura/DashboardLayout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, CartesianGrid } from "recharts";

/* ── Mock data ──────────────────────────────────── */
const kpiCards = [
  { label: "Page Views", value: "1.2M", change: "+18%", up: true, icon: Eye },
  { label: "Unique Visitors", value: "485K", change: "+12%", up: true, icon: Users },
  { label: "Avg. Session", value: "4m 32s", change: "+8%", up: true, icon: TrendingUp },
  { label: "Conversion Rate", value: "3.7%", change: "-0.2%", up: false, icon: Star },
];

const monthlyVisitors = [
  { month: "Jan", visitors: 320000 }, { month: "Feb", visitors: 290000 },
  { month: "Mar", visitors: 410000 }, { month: "Apr", visitors: 520000 },
  { month: "May", visitors: 680000 }, { month: "Jun", visitors: 890000 },
  { month: "Jul", visitors: 1100000 }, { month: "Aug", visitors: 980000 },
  { month: "Sep", visitors: 750000 }, { month: "Oct", visitors: 620000 },
  { month: "Nov", visitors: 480000 }, { month: "Dec", visitors: 560000 },
];

const topAttractions = [
  { name: "Georgia Aquarium", views: 245000, change: "+22%" },
  { name: "MLK Historic Park", views: 198000, change: "+15%" },
  { name: "World of Coca-Cola", views: 176000, change: "+8%" },
  { name: "Atlanta Botanical Garden", views: 142000, change: "+31%" },
  { name: "Centennial Olympic Park", views: 128000, change: "+5%" },
  { name: "High Museum of Art", views: 115000, change: "+12%" },
  { name: "Stone Mountain Park", views: 98000, change: "+19%" },
  { name: "Fox Theatre", views: 87000, change: "+7%" },
];

const visitorCountries = [
  { country: "United States", visitors: 8200000, pct: 68 },
  { country: "Canada", visitors: 980000, pct: 8 },
  { country: "United Kingdom", visitors: 720000, pct: 6 },
  { country: "Germany", visitors: 540000, pct: 5 },
  { country: "Japan", visitors: 420000, pct: 4 },
  { country: "Brazil", visitors: 360000, pct: 3 },
  { country: "France", visitors: 310000, pct: 3 },
  { country: "Other", visitors: 470000, pct: 3 },
];

const pieColors = [
  "hsl(var(--primary))", "hsl(var(--aura-info))", "hsl(var(--aura-warning))",
  "hsl(var(--aura-success))", "hsl(var(--secondary))", "hsl(var(--destructive))",
  "hsl(var(--aura-gold))", "hsl(var(--muted-foreground))",
];

const cardEngagement = [
  { card: "Attractions", clicks: 48200 },
  { card: "Things To Do", clicks: 42100 },
  { card: "Events", clicks: 38700 },
  { card: "Food & Dining", clicks: 35400 },
  { card: "Hotels", clicks: 33100 },
  { card: "Nature", clicks: 28600 },
  { card: "Culture", clicks: 24300 },
  { card: "Neighborhoods", clicks: 21800 },
  { card: "Transport", clicks: 19500 },
  { card: "Deals", clicks: 18200 },
  { card: "Photos", clicks: 15900 },
  { card: "Creators", clicks: 14100 },
  { card: "Plan Trip", clicks: 12800 },
  { card: "Businesses", clicks: 11200 },
  { card: "Services", clicks: 8400 },
];

const programs = [
  { name: "Summer in Atlanta 2026", status: "Active", reach: "2.4M", conversion: "4.2%" },
  { name: "Cultural Heritage Month", status: "Upcoming", reach: "—", conversion: "—" },
  { name: "ATL Food Week", status: "Active", reach: "890K", conversion: "5.1%" },
  { name: "Holiday Lights Festival", status: "Draft", reach: "—", conversion: "—" },
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "attractions", label: "Attractions" },
  { id: "visitors", label: "Visitors" },
  { id: "programs", label: "Programs" },
] as const;

type Tab = (typeof tabs)[number]["id"];

const fmt = (n: number) => n >= 1000000 ? `${(n / 1000000).toFixed(1)}M` : n >= 1000 ? `${(n / 1000).toFixed(0)}K` : String(n);

const TourismDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <DashboardLayout title="Tourism Dashboard" subtitle="Visit Atlanta · Tourism Authority">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto mb-6 pb-1 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {kpiCards.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-2xl bg-card border shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <kpi.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className={`flex items-center gap-0.5 text-xs font-semibold ${kpi.up ? "text-aura-success" : "text-destructive"}`}>
                    {kpi.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {kpi.change}
                  </span>
                </div>
                <div className="text-2xl font-display font-bold">{kpi.value}</div>
                <div className="text-xs text-muted-foreground">{kpi.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Monthly Visitors Chart */}
          <div className="p-5 rounded-2xl bg-card border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-semibold">Peak Travel Months</h3>
                <p className="text-xs text-muted-foreground">Monthly visitor traffic for 2025</p>
              </div>
              <div className="text-xs text-muted-foreground">🔥 Peak: July (1.1M)</div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyVisitors}>
                  <defs>
                    <linearGradient id="visitorGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tickFormatter={fmt} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ borderRadius: 12, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                  <Area type="monotone" dataKey="visitors" stroke="hsl(var(--primary))" fill="url(#visitorGrad)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card Engagement */}
          <div className="p-5 rounded-2xl bg-card border shadow-sm">
            <h3 className="font-display font-semibold mb-1">Card Engagement</h3>
            <p className="text-xs text-muted-foreground mb-4">Clicks per destination card this month</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cardEngagement} layout="vertical" margin={{ left: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" tickFormatter={fmt} tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis type="category" dataKey="card" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" width={75} />
                  <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ borderRadius: 12, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                  <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      )}

      {/* Attractions Tab */}
      {activeTab === "attractions" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="p-5 rounded-2xl bg-card border shadow-sm">
            <h3 className="font-display font-semibold mb-1">Most Viewed Attractions</h3>
            <p className="text-xs text-muted-foreground mb-4">Ranked by page views this quarter</p>
            <div className="space-y-2">
              {topAttractions.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{a.name}</div>
                    <div className="text-xs text-muted-foreground">{fmt(a.views)} views</div>
                  </div>
                  <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${(a.views / topAttractions[0].views) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-aura-success flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" />{a.change}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-card border shadow-sm text-center">
              <Landmark className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-display font-bold">47</div>
              <div className="text-xs text-muted-foreground">Listed Attractions</div>
            </div>
            <div className="p-4 rounded-2xl bg-card border shadow-sm text-center">
              <Star className="w-6 h-6 text-aura-warning mx-auto mb-2" />
              <div className="text-2xl font-display font-bold">4.6</div>
              <div className="text-xs text-muted-foreground">Avg. Attraction Rating</div>
            </div>
            <div className="p-4 rounded-2xl bg-card border shadow-sm text-center">
              <Eye className="w-6 h-6 text-aura-info mx-auto mb-2" />
              <div className="text-2xl font-display font-bold">1.19M</div>
              <div className="text-xs text-muted-foreground">Total Attraction Views</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Visitors Tab */}
      {activeTab === "visitors" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Country breakdown */}
            <div className="p-5 rounded-2xl bg-card border shadow-sm">
              <h3 className="font-display font-semibold mb-1">Top Visitor Countries</h3>
              <p className="text-xs text-muted-foreground mb-4">Annual visitor distribution by origin</p>
              <div className="h-56 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={visitorCountries}
                      dataKey="visitors"
                      nameKey="country"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={85}
                      paddingAngle={2}
                    >
                      {visitorCountries.map((_, i) => (
                        <Cell key={i} fill={pieColors[i % pieColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ borderRadius: 12, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Country list */}
            <div className="p-5 rounded-2xl bg-card border shadow-sm">
              <h3 className="font-display font-semibold mb-4">Breakdown</h3>
              <div className="space-y-2.5">
                {visitorCountries.map((c, i) => (
                  <div key={c.country} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: pieColors[i % pieColors.length] }} />
                    <span className="text-sm flex-1">{c.country}</span>
                    <span className="text-sm font-medium">{fmt(c.visitors)}</span>
                    <span className="text-xs text-muted-foreground w-10 text-right">{c.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visitor metrics */}
          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { label: "Total Annual Visitors", value: "12M", icon: Users },
              { label: "Avg. Stay Duration", value: "3.2 days", icon: Calendar },
              { label: "Return Visitors", value: "28%", icon: TrendingUp },
              { label: "Countries Represented", value: "142", icon: Globe },
            ].map((m) => (
              <div key={m.label} className="p-4 rounded-2xl bg-card border shadow-sm text-center">
                <m.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-xl font-display font-bold">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Programs Tab */}
      {activeTab === "programs" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="p-5 rounded-2xl bg-card border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-semibold">Tourism Programs & Campaigns</h3>
                <p className="text-xs text-muted-foreground">Manage cultural initiatives, grants, and city campaigns</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                + New Program
              </button>
            </div>
            <div className="space-y-2">
              {programs.map((p) => (
                <div key={p.name} className="flex items-center gap-3 p-4 rounded-xl border bg-muted/20 hover:bg-muted/40 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Reach: {p.reach} · Conversion: {p.conversion}</div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    p.status === "Active" ? "bg-aura-success/15 text-aura-success" :
                    p.status === "Upcoming" ? "bg-aura-info/15 text-aura-info" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Smart destination gamification */}
          <div className="p-5 rounded-2xl bg-card border shadow-sm">
            <h3 className="font-display font-semibold mb-1">Smart Destination Badges</h3>
            <p className="text-xs text-muted-foreground mb-4">Gamification badges visitors can unlock</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { badge: "🏙️ City Explorer", rule: "Visit 5 attractions", earned: 12400 },
                { badge: "🎭 Culture Lover", rule: "Attend 3 festivals", earned: 8200 },
                { badge: "📸 Local Storyteller", rule: "Share 10 photos", earned: 5600 },
                { badge: "🍕 Foodie Trail", rule: "Dine at 5 restaurants", earned: 9800 },
                { badge: "🌳 Nature Scout", rule: "Visit 3 parks", earned: 7100 },
                { badge: "🗺️ Neighborhood Pro", rule: "Explore 4 districts", earned: 4300 },
              ].map((b) => (
                <div key={b.badge} className="p-4 rounded-xl border bg-muted/20">
                  <div className="text-lg mb-1">{b.badge}</div>
                  <div className="text-xs text-muted-foreground">{b.rule}</div>
                  <div className="text-xs font-medium text-primary mt-2">{fmt(b.earned)} earned</div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue / Monetization */}
          <div className="p-5 rounded-2xl bg-card border shadow-sm">
            <h3 className="font-display font-semibold mb-1">Government Monetization</h3>
            <p className="text-xs text-muted-foreground mb-4">Revenue from sponsored content and promotions</p>
            <div className="grid sm:grid-cols-4 gap-3">
              {[
                { label: "Sponsored Attractions", revenue: "$24,500" },
                { label: "Featured Events", revenue: "$18,200" },
                { label: "Local Business Promos", revenue: "$12,800" },
                { label: "Tour Packages", revenue: "$31,400" },
              ].map((r) => (
                <div key={r.label} className="p-3 rounded-xl border bg-muted/20 text-center">
                  <div className="text-lg font-display font-bold text-primary">{r.revenue}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </DashboardLayout>
  );
};

export default TourismDashboardPage;
