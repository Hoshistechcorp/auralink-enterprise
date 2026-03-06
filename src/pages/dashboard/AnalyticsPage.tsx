import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, MousePointer, TrendingUp, Clock, Users, Smartphone, Monitor, Globe, ArrowUp, ArrowDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/aura/DashboardLayout";

const metrics = [
  { label: "Page Views", value: "12,847", change: "+18%", up: true, icon: Eye },
  { label: "Unique Visitors", value: "4,231", change: "+24%", up: true, icon: Users },
  { label: "Engagement Rate", value: "68%", change: "+5%", up: true, icon: MousePointer },
  { label: "Avg. Session", value: "3m 42s", change: "+12s", up: true, icon: Clock },
];

const viewData = [
  { day: "Mon", views: 320, visitors: 180 },
  { day: "Tue", views: 480, visitors: 260 },
  { day: "Wed", views: 520, visitors: 290 },
  { day: "Thu", views: 410, visitors: 220 },
  { day: "Fri", views: 680, visitors: 380 },
  { day: "Sat", views: 890, visitors: 510 },
  { day: "Sun", views: 750, visitors: 420 },
];

const engagementData = [
  { day: "Mon", rate: 32 },
  { day: "Tue", rate: 45 },
  { day: "Wed", rate: 38 },
  { day: "Thu", rate: 52 },
  { day: "Fri", rate: 48 },
  { day: "Sat", rate: 61 },
  { day: "Sun", rate: 55 },
];

const cardPerformance = [
  { name: "Menu", views: 4280, clicks: 2840, ctr: 66 },
  { name: "Reviews", views: 3120, clicks: 1870, ctr: 60 },
  { name: "Details", views: 2840, clicks: 1420, ctr: 50 },
  { name: "Photo Gallery", views: 2100, clicks: 1680, ctr: 80 },
  { name: "Staff", views: 1560, clicks: 780, ctr: 50 },
  { name: "Events", views: 1340, clicks: 940, ctr: 70 },
  { name: "Social Links", views: 1200, clicks: 960, ctr: 80 },
  { name: "FAQs", views: 980, clicks: 490, ctr: 50 },
  { name: "Popular Dishes", views: 890, clicks: 712, ctr: 80 },
  { name: "Awards", views: 720, clicks: 360, ctr: 50 },
  { name: "Freebie Game", views: 680, clicks: 612, ctr: 90 },
  { name: "AI Concierge", views: 540, clicks: 486, ctr: 90 },
  { name: "Private Dining", views: 420, clicks: 294, ctr: 70 },
  { name: "Refer a Friend", views: 380, clicks: 228, ctr: 60 },
  { name: "Affiliate", views: 220, clicks: 110, ctr: 50 },
];

const deviceData = [
  { name: "Mobile", value: 62, color: "hsl(var(--primary))" },
  { name: "Desktop", value: 28, color: "hsl(var(--secondary))" },
  { name: "Tablet", value: 10, color: "hsl(var(--muted-foreground))" },
];

const trafficSources = [
  { source: "QR Code", visits: 4820, pct: 38 },
  { source: "Direct Link", visits: 3210, pct: 25 },
  { source: "Google Search", visits: 2560, pct: 20 },
  { source: "Social Media", visits: 1420, pct: 11 },
  { source: "Referral", visits: 837, pct: 6 },
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "cards", label: "Card Performance" },
  { id: "traffic", label: "Traffic Sources" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const AnalyticsPage = () => {
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <DashboardLayout title="Analytics" subtitle="Track microsite performance & engagement">
      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m, i) => (
          <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="p-4 rounded-2xl bg-card border">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center"><m.icon className="w-4 h-4 text-primary" /></div>
              <span className={`text-[10px] font-medium flex items-center gap-0.5 ${m.up ? "text-aura-success" : "text-destructive"}`}>
                {m.up ? <ArrowUp className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />}{m.change}
              </span>
            </div>
            <div className="text-2xl font-bold">{m.value}</div>
            <span className="text-xs text-muted-foreground">{m.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${tab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Page Views & Visitors</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={viewData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="views" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} name="Views" />
                  <Bar dataKey="visitors" fill="hsl(var(--secondary))" radius={[6, 6, 0, 0]} name="Visitors" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Engagement Rate</h3>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={engagementData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" tickFormatter={(v) => `${v}%`} />
                  <Tooltip />
                  <Area type="monotone" dataKey="rate" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.1} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Devices */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Devices</h3>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={deviceData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={3}>
                    {deviceData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-2">
                {deviceData.map((d) => (
                  <div key={d.name} className="flex items-center gap-1.5 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                    <span className="text-muted-foreground">{d.name}</span>
                    <span className="font-medium">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Top Action Buttons</h3>
              <div className="space-y-3">
                {[
                  { action: "Call", clicks: 1840, pct: 36 },
                  { action: "Directions", clicks: 1420, pct: 28 },
                  { action: "Reservations", clicks: 980, pct: 19 },
                  { action: "Share", clicks: 520, pct: 10 },
                  { action: "Message", clicks: 340, pct: 7 },
                ].map((a) => (
                  <div key={a.action} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-24">{a.action}</span>
                    <Progress value={a.pct} className="h-2 flex-1" />
                    <span className="text-xs text-muted-foreground w-16 text-right">{a.clicks.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "cards" && (
        <div className="p-5 rounded-2xl bg-card border">
          <h3 className="font-display font-semibold mb-4">Card Performance — All 15 Cards</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">#</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Card</th>
                  <th className="text-center px-4 py-3 font-medium text-muted-foreground">Views</th>
                  <th className="text-center px-4 py-3 font-medium text-muted-foreground">Clicks</th>
                  <th className="text-center px-4 py-3 font-medium text-muted-foreground">CTR</th>
                </tr>
              </thead>
              <tbody>
                {cardPerformance.map((card, i) => (
                  <motion.tr key={card.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }} className="border-b last:border-0 hover:bg-muted/10 transition-colors">
                    <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                    <td className="px-4 py-3 font-medium">{card.name}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{card.views.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground">{card.clicks.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 justify-center">
                        <Progress value={card.ctr} className="h-1.5 w-16" />
                        <span className="text-xs font-medium">{card.ctr}%</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "traffic" && (
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-card border">
            <h3 className="font-display font-semibold mb-4">Traffic Sources</h3>
            <div className="space-y-3">
              {trafficSources.map((s, i) => (
                <motion.div key={s.source} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><Globe className="w-4 h-4 text-primary" /></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{s.source}</span>
                      <span className="text-xs text-muted-foreground">{s.visits.toLocaleString()} visits</span>
                    </div>
                    <Progress value={s.pct} className="h-1.5" />
                  </div>
                  <span className="text-xs font-medium w-8 text-right">{s.pct}%</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-card border">
            <h3 className="font-display font-semibold mb-4">QR Code vs Direct Traffic</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={[
                { source: "QR Main", scans: 2840 },
                { source: "QR Menu", scans: 2103 },
                { source: "QR Table", scans: 892 },
                { source: "QR Event", scans: 347 },
                { source: "QR Staff", scans: 156 },
              ]}>
                <XAxis dataKey="source" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Tooltip />
                <Bar dataKey="scans" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} name="Scans" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AnalyticsPage;
