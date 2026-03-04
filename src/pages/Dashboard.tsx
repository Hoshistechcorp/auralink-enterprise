import { Eye, MousePointer, TrendingUp, CreditCard, BarChart3, Layers, Gamepad2, Settings, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const viewData = [
  { day: "Mon", views: 320 },
  { day: "Tue", views: 480 },
  { day: "Wed", views: 520 },
  { day: "Thu", views: 410 },
  { day: "Fri", views: 680 },
  { day: "Sat", views: 890 },
  { day: "Sun", views: 750 },
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

const metrics = [
  { label: "Page Views", value: "12,847", change: "+18%", icon: Eye },
  { label: "Engagements", value: "4,231", change: "+24%", icon: MousePointer },
  { label: "Top Card", value: "Menu", change: "68% clicks", icon: TrendingUp },
  { label: "Plan", value: "Pro", change: "Active", icon: CreditCard },
];

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Layers, label: "Card Studio", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Gamepad2, label: "Gamification", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const activities = [
  { text: "New review from Sarah M. ⭐⭐⭐⭐⭐", time: "2m ago" },
  { text: "Menu card viewed 142 times today", time: "15m ago" },
  { text: "Photo Gallery: 3 new uploads", time: "1h ago" },
  { text: "AI Concierge answered 28 questions", time: "2h ago" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-60 bg-card border-r p-4 hidden lg:flex flex-col">
        <div className="font-display text-xl font-bold text-primary mb-8">AuraLink</div>
        <nav className="space-y-1 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => navigate("/microsite")}
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          ← View Public Page
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Bella Vista · Restaurant</p>
            </div>
            <button
              onClick={() => navigate("/microsite")}
              className="lg:hidden text-sm text-primary font-medium"
            >
              View Page →
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-2xl bg-card border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <m.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold">{m.value}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">{m.label}</span>
                  <span className="aura-badge aura-badge-success text-[10px]">{m.change}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Page Views</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={viewData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="views" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-5 rounded-2xl bg-card border">
              <h3 className="font-display font-semibold mb-4">Engagement Rate</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={engagementData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="rate" stroke="hsl(var(--secondary))" strokeWidth={2} dot={{ fill: "hsl(var(--secondary))" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="p-5 rounded-2xl bg-card border">
            <h3 className="font-display font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                  <span className="text-sm">{a.text}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
