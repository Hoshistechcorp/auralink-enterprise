import { useState } from "react";
import { motion } from "framer-motion";
import {
  User, Bell, Palette, Globe, Lock, Mail, Phone, MapPin,
  Camera, Save, Check, BellRing, BellOff, Monitor, Moon, Sun,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/aura/DashboardLayout";
import { useDarkMode } from "@/hooks/use-dark-mode";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "security", label: "Security", icon: Lock },
] as const;

type Tab = (typeof tabs)[number]["id"];

const themeOptions = [
  { id: "default", label: "Restaurant", desc: "Warm wine & gold tones", colors: ["352 43% 32%", "35 35% 64%", "30 33% 97%"] },
  { id: "hotel", label: "Hotel", desc: "Navy & brass elegance", colors: ["210 35% 17%", "38 30% 56%", "0 0% 100%"] },
  { id: "lounge", label: "Lounge", desc: "Deep purple & neon pink", colors: ["270 30% 17%", "338 100% 53%", "0 0% 7%"] },
];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const { isDark, toggle: toggleDark } = useDarkMode();
  const [activeTheme, setActiveTheme] = useState("default");

  const [profile, setProfile] = useState({
    name: "Marco Bellini",
    email: "marco@bellavista.com",
    phone: "+1 (212) 555-0147",
    role: "Owner & Manager",
    location: "123 Grand Ave, New York, NY 10001",
    bio: "Passionate restaurateur with 25+ years of experience in Italian fine dining. Committed to delivering exceptional culinary experiences.",
  });

  const [notifications, setNotifications] = useState({
    newReviews: true,
    weeklyReport: true,
    referralAlerts: true,
    loyaltyMilestones: true,
    systemUpdates: false,
    marketingTips: false,
    staffActivity: true,
    lowRatingAlert: true,
  });

  const handleSave = () => {
    toast({ title: "Settings saved", description: "Your changes have been applied successfully." });
  };

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    const root = document.documentElement;
    root.classList.remove("theme-hotel", "theme-lounge");
    if (themeId === "hotel") root.classList.add("theme-hotel");
    if (themeId === "lounge") root.classList.add("theme-lounge");
    toast({ title: "Theme updated", description: `Switched to ${themeId} theme.` });
  };

  const notificationItems = [
    { key: "newReviews", label: "New Reviews", desc: "Get notified when customers leave reviews", icon: BellRing },
    { key: "weeklyReport", label: "Weekly Report", desc: "Receive a weekly performance summary", icon: Mail },
    { key: "referralAlerts", label: "Referral Alerts", desc: "Notifications for new referral sign-ups", icon: BellRing },
    { key: "loyaltyMilestones", label: "Loyalty Milestones", desc: "When members reach new tiers", icon: BellRing },
    { key: "staffActivity", label: "Staff Activity", desc: "Updates on staff profile interactions", icon: BellRing },
    { key: "lowRatingAlert", label: "Low Rating Alerts", desc: "Immediate alert for ratings below 3 stars", icon: BellOff },
    { key: "systemUpdates", label: "System Updates", desc: "Platform feature releases and maintenance", icon: Bell },
    { key: "marketingTips", label: "Marketing Tips", desc: "Weekly tips to improve your presence", icon: Mail },
  ] as const;

  return (
    <DashboardLayout title="Settings" subtitle="Manage your account & preferences">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab Navigation */}
        <div className="lg:w-52 shrink-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Personal Information</h3>

                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl font-display font-bold text-primary">
                      {profile.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-medium">{profile.name}</h4>
                    <p className="text-sm text-muted-foreground">{profile.role}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Bio</label>
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-2">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground mb-6">Choose which updates you'd like to receive.</p>

                <div className="space-y-1">
                  {notificationItems.map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-center justify-between p-3.5 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{item.label}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                      </div>
                      <Switch
                        checked={notifications[item.key]}
                        onCheckedChange={(checked) => setNotifications({ ...notifications, [item.key]: checked })}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end mt-6">
                  <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                    <Check className="w-4 h-4" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Appearance Tab */}
          {activeTab === "appearance" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Dark Mode */}
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-2">Display Mode</h3>
                <p className="text-sm text-muted-foreground mb-5">Switch between light and dark modes.</p>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { if (isDark) toggleDark(); }}
                    className={`p-4 rounded-2xl border-2 transition-all ${!isDark ? "border-primary bg-primary/5" : "border-transparent bg-muted/50 hover:border-muted"}`}
                  >
                    <div className="w-full h-20 rounded-xl bg-[hsl(30,33%,97%)] border mb-3 flex items-center justify-center">
                      <Sun className="w-6 h-6 text-[hsl(352,43%,32%)]" />
                    </div>
                    <div className="text-sm font-medium">Light</div>
                    <div className="text-[10px] text-muted-foreground">Bright & airy</div>
                  </button>
                  <button
                    onClick={() => { if (!isDark) toggleDark(); }}
                    className={`p-4 rounded-2xl border-2 transition-all ${isDark ? "border-primary bg-primary/5" : "border-transparent bg-muted/50 hover:border-muted"}`}
                  >
                    <div className="w-full h-20 rounded-xl bg-[hsl(20,10%,8%)] border border-[hsl(20,10%,22%)] mb-3 flex items-center justify-center">
                      <Moon className="w-6 h-6 text-[hsl(352,43%,45%)]" />
                    </div>
                    <div className="text-sm font-medium">Dark</div>
                    <div className="text-[10px] text-muted-foreground">Easy on the eyes</div>
                  </button>
                </div>
              </div>

              {/* Theme */}
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-2">Color Theme</h3>
                <p className="text-sm text-muted-foreground mb-5">Choose the visual identity for your dashboard.</p>

                <div className="grid sm:grid-cols-3 gap-3">
                  {themeOptions.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(theme.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        activeTheme === theme.id ? "border-primary bg-primary/5" : "border-transparent bg-muted/50 hover:border-muted"
                      }`}
                    >
                      <div className="flex gap-1.5 mb-3">
                        {theme.colors.map((c, i) => (
                          <div key={i} className="w-8 h-8 rounded-lg" style={{ backgroundColor: `hsl(${c})` }} />
                        ))}
                      </div>
                      <div className="text-sm font-medium">{theme.label}</div>
                      <div className="text-[10px] text-muted-foreground">{theme.desc}</div>
                      {activeTheme === theme.id && (
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-primary font-medium">
                          <Check className="w-3 h-3" /> Active
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Language</h3>
                      <p className="text-xs text-muted-foreground">Currently set to English (US)</p>
                    </div>
                  </div>
                  <select className="px-3 py-2 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>English (US)</option>
                    <option>Español</option>
                    <option>Français</option>
                    <option>Italiano</option>
                    <option>Deutsch</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Security Settings</h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-sm font-medium">Password</div>
                        <div className="text-xs text-muted-foreground">Last changed 45 days ago</div>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                        Change
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Two-Factor Authentication</div>
                        <div className="text-xs text-muted-foreground">Add an extra layer of security</div>
                      </div>
                      <Switch defaultChecked={false} />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Login Notifications</div>
                        <div className="text-xs text-muted-foreground">Get notified of new sign-ins</div>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/50">
                    <div className="text-sm font-medium mb-2">Active Sessions</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Monitor className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <div className="text-xs font-medium">MacBook Pro — New York</div>
                            <div className="text-[10px] text-muted-foreground">Current session</div>
                          </div>
                        </div>
                        <span className="aura-badge aura-badge-success text-[10px]">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <div className="text-xs font-medium">iPhone 15 — New York</div>
                            <div className="text-[10px] text-muted-foreground">2 hours ago</div>
                          </div>
                        </div>
                        <button className="text-[10px] text-destructive font-medium">Revoke</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
