import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store, Clock, ImagePlus, Trash2, Plus, Save, GripVertical,
  UtensilsCrossed, Users, Camera, FileText, MapPin, Phone, Mail,
  Globe, Star, ChevronDown, Check, X,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/aura/DashboardLayout";

/* ── Tabs ────────────────────────────────────────────── */
const tabs = [
  { id: "business", label: "Business Info", icon: Store },
  { id: "hours", label: "Hours & Contact", icon: Clock },
  { id: "menu", label: "Menu Items", icon: UtensilsCrossed },
  { id: "gallery", label: "Gallery", icon: Camera },
  { id: "staff", label: "Staff Profiles", icon: Users },
] as const;
type Tab = (typeof tabs)[number]["id"];

/* ── Types ───────────────────────────────────────────── */
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  popular: boolean;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

interface DayHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

/* ── Helpers ─────────────────────────────────────────── */
const uid = () => crypto.randomUUID();

const inputCls =
  "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";
const labelCls = "text-xs font-medium text-muted-foreground mb-1.5 block";
const btnPrimary =
  "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity";

/* ── Initial data ────────────────────────────────────── */
const defaultHours: DayHours[] = [
  { day: "Monday", open: "11:00", close: "22:00", closed: false },
  { day: "Tuesday", open: "11:00", close: "22:00", closed: false },
  { day: "Wednesday", open: "11:00", close: "22:00", closed: false },
  { day: "Thursday", open: "11:00", close: "23:00", closed: false },
  { day: "Friday", open: "11:00", close: "23:30", closed: false },
  { day: "Saturday", open: "10:00", close: "23:30", closed: false },
  { day: "Sunday", open: "10:00", close: "21:00", closed: false },
];

const defaultMenu: MenuItem[] = [
  { id: uid(), name: "Truffle Risotto", description: "Arborio rice, black truffle, aged parmesan", price: "34", category: "Mains", popular: true },
  { id: uid(), name: "Burrata Caprese", description: "Fresh burrata, heirloom tomatoes, basil oil", price: "18", category: "Starters", popular: true },
  { id: uid(), name: "Osso Buco", description: "Braised veal shank, gremolata, saffron risotto", price: "42", category: "Mains", popular: false },
  { id: uid(), name: "Tiramisu", description: "Classic Italian, mascarpone, espresso", price: "14", category: "Desserts", popular: true },
];

const defaultStaff: StaffMember[] = [
  { id: uid(), name: "Marco Bellini", role: "Owner & Head Chef", bio: "25+ years of Italian fine dining experience." },
  { id: uid(), name: "Sofia Russo", role: "Sommelier", bio: "Certified sommelier specializing in Italian wines." },
  { id: uid(), name: "Luca Moretti", role: "Sous Chef", bio: "Trained in Rome, expert in handmade pasta." },
];

const defaultGallery: GalleryImage[] = [
  { id: uid(), url: "/placeholder.svg", caption: "Dining room interior" },
  { id: uid(), url: "/placeholder.svg", caption: "Chef's special plating" },
  { id: uid(), url: "/placeholder.svg", caption: "Wine cellar selection" },
  { id: uid(), url: "/placeholder.svg", caption: "Private dining area" },
];

const menuCategories = ["Starters", "Mains", "Pasta", "Desserts", "Drinks"];

/* ══════════════════════════════════════════════════════
   ADMIN PAGE
   ══════════════════════════════════════════════════════ */
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("business");

  /* Business info */
  const [business, setBusiness] = useState({
    name: "Bella Vista",
    tagline: "Award-winning Italian fine dining · Est. 1998",
    description:
      "Nestled in the heart of Manhattan, Bella Vista offers an authentic Italian dining experience featuring handcrafted pastas, wood-fired dishes, and an award-winning wine program.",
    address: "123 Grand Ave, New York, NY 10001",
    phone: "+1 (212) 555-0147",
    email: "info@bellavista.com",
    website: "https://bellavista.com",
    cuisine: "Italian",
    priceRange: "$$$",
    capacity: "120",
    established: "1998",
  });

  /* Hours */
  const [hours, setHours] = useState<DayHours[]>(defaultHours);

  /* Menu */
  const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenu);
  const [editingMenu, setEditingMenu] = useState<string | null>(null);

  /* Staff */
  const [staff, setStaff] = useState<StaffMember[]>(defaultStaff);

  /* Gallery */
  const [gallery, setGallery] = useState<GalleryImage[]>(defaultGallery);

  /* ── Handlers ────────────────────────────────────── */
  const save = (section: string) =>
    toast({ title: `${section} saved`, description: "Changes published to your microsite." });

  const addMenuItem = () => {
    const item: MenuItem = { id: uid(), name: "", description: "", price: "", category: "Mains", popular: false };
    setMenuItems([...menuItems, item]);
    setEditingMenu(item.id);
  };

  const updateMenuItem = (id: string, patch: Partial<MenuItem>) =>
    setMenuItems((items) => items.map((m) => (m.id === id ? { ...m, ...patch } : m)));

  const deleteMenuItem = (id: string) => setMenuItems((items) => items.filter((m) => m.id !== id));

  const addStaff = () => {
    const member: StaffMember = { id: uid(), name: "", role: "", bio: "" };
    setStaff([...staff, member]);
  };

  const updateStaff = (id: string, patch: Partial<StaffMember>) =>
    setStaff((s) => s.map((m) => (m.id === id ? { ...m, ...patch } : m)));

  const deleteStaff = (id: string) => setStaff((s) => s.filter((m) => m.id !== id));

  const addGalleryImage = () => {
    setGallery([...gallery, { id: uid(), url: "/placeholder.svg", caption: "" }]);
  };

  const updateGallery = (id: string, patch: Partial<GalleryImage>) =>
    setGallery((g) => g.map((img) => (img.id === id ? { ...img, ...patch } : img)));

  const deleteGalleryImage = (id: string) => setGallery((g) => g.filter((img) => img.id !== id));

  const updateHour = (idx: number, patch: Partial<DayHours>) =>
    setHours((h) => h.map((d, i) => (i === idx ? { ...d, ...patch } : d)));

  /* ══════════════════════════════════════════════════
     RENDER
     ══════════════════════════════════════════════════ */
  return (
    <DashboardLayout title="Admin Panel" subtitle="Manage all business content & details">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab Nav */}
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
          {/* ─── BUSINESS INFO ──────────────────────── */}
          {activeTab === "business" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Business Details</h3>

                {/* Logo & cover placeholder */}
                <div className="flex gap-4 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-primary/30 cursor-pointer hover:bg-primary/20 transition-colors">
                    <ImagePlus className="w-5 h-5 text-primary" />
                    <span className="text-[9px] text-primary font-medium">Logo</span>
                  </div>
                  <div className="flex-1 h-24 rounded-2xl bg-muted/50 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-muted-foreground/20 cursor-pointer hover:bg-muted transition-colors">
                    <ImagePlus className="w-5 h-5 text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground font-medium">Cover Photo (1200×400 recommended)</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Business Name</label>
                    <input value={business.name} onChange={(e) => setBusiness({ ...business, name: e.target.value })} className={inputCls} maxLength={100} />
                  </div>
                  <div>
                    <label className={labelCls}>Cuisine Type</label>
                    <input value={business.cuisine} onChange={(e) => setBusiness({ ...business, cuisine: e.target.value })} className={inputCls} maxLength={50} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Tagline</label>
                    <input value={business.tagline} onChange={(e) => setBusiness({ ...business, tagline: e.target.value })} className={inputCls} maxLength={150} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Description</label>
                    <textarea value={business.description} onChange={(e) => setBusiness({ ...business, description: e.target.value })} rows={3} className={`${inputCls} resize-none`} maxLength={500} />
                    <span className="text-[10px] text-muted-foreground mt-1 block text-right">{business.description.length}/500</span>
                  </div>
                  <div>
                    <label className={labelCls}>Price Range</label>
                    <div className="flex gap-2">
                      {["$", "$$", "$$$", "$$$$"].map((p) => (
                        <button
                          key={p}
                          onClick={() => setBusiness({ ...business, priceRange: p })}
                          className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                            business.priceRange === p ? "bg-primary text-primary-foreground" : "bg-muted/50 border text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Seating Capacity</label>
                    <input value={business.capacity} onChange={(e) => setBusiness({ ...business, capacity: e.target.value.replace(/\D/g, "") })} className={inputCls} maxLength={5} />
                  </div>
                  <div>
                    <label className={labelCls}>Established Year</label>
                    <input value={business.established} onChange={(e) => setBusiness({ ...business, established: e.target.value.replace(/\D/g, "") })} className={inputCls} maxLength={4} />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button onClick={() => save("Business details")} className={btnPrimary}>
                    <Save className="w-4 h-4" /> Save Details
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── HOURS & CONTACT ────────────────────── */}
          {activeTab === "hours" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              {/* Contact */}
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Contact Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input value={business.address} onChange={(e) => setBusiness({ ...business, address: e.target.value })} className={`${inputCls} pl-10`} maxLength={200} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input value={business.phone} onChange={(e) => setBusiness({ ...business, phone: e.target.value })} className={`${inputCls} pl-10`} maxLength={20} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input value={business.email} onChange={(e) => setBusiness({ ...business, email: e.target.value })} className={`${inputCls} pl-10`} maxLength={100} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Website</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input value={business.website} onChange={(e) => setBusiness({ ...business, website: e.target.value })} className={`${inputCls} pl-10`} maxLength={200} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Operating Hours</h3>
                <div className="space-y-2">
                  {hours.map((d, i) => (
                    <div key={d.day} className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 p-3 rounded-xl bg-muted/30">
                      <span className="w-20 sm:w-24 text-sm font-medium shrink-0">{d.day}</span>
                      <Switch checked={!d.closed} onCheckedChange={(v) => updateHour(i, { closed: !v })} />
                      {d.closed ? (
                        <span className="text-sm text-muted-foreground italic">Closed</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <input type="time" value={d.open} onChange={(e) => updateHour(i, { open: e.target.value })} className="px-2 py-1.5 rounded-lg bg-background border text-sm w-[110px]" />
                          <span className="text-xs text-muted-foreground">to</span>
                          <input type="time" value={d.close} onChange={(e) => updateHour(i, { close: e.target.value })} className="px-2 py-1.5 rounded-lg bg-background border text-sm w-[110px]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <button onClick={() => save("Hours & contact")} className={btnPrimary}>
                    <Save className="w-4 h-4" /> Save Hours
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── MENU ITEMS ─────────────────────────── */}
          {activeTab === "menu" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-lg">Menu Items</h3>
                    <p className="text-xs text-muted-foreground">{menuItems.length} items across {menuCategories.length} categories</p>
                  </div>
                  <button onClick={addMenuItem} className={btnPrimary}>
                    <Plus className="w-4 h-4" /> Add Item
                  </button>
                </div>

                {menuCategories.map((cat) => {
                  const items = menuItems.filter((m) => m.category === cat);
                  if (items.length === 0) return null;
                  return (
                    <div key={cat} className="mb-6 last:mb-0">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{cat}</h4>
                      <div className="space-y-2">
                        {items.map((item, i) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            className="p-4 rounded-xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all"
                          >
                            {editingMenu === item.id ? (
                              <div className="space-y-3">
                                <div className="grid sm:grid-cols-3 gap-3">
                                  <input value={item.name} onChange={(e) => updateMenuItem(item.id, { name: e.target.value })} placeholder="Dish name" className={inputCls} maxLength={80} />
                                  <input value={item.price} onChange={(e) => updateMenuItem(item.id, { price: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="Price" className={inputCls} maxLength={8} />
                                  <select value={item.category} onChange={(e) => updateMenuItem(item.id, { category: e.target.value })} className={inputCls}>
                                    {menuCategories.map((c) => <option key={c}>{c}</option>)}
                                  </select>
                                </div>
                                <input value={item.description} onChange={(e) => updateMenuItem(item.id, { description: e.target.value })} placeholder="Description" className={inputCls} maxLength={200} />
                                <div className="flex items-center justify-between">
                                  <label className="flex items-center gap-2 text-sm">
                                    <Switch checked={item.popular} onCheckedChange={(v) => updateMenuItem(item.id, { popular: v })} />
                                    <Star className="w-3.5 h-3.5 text-aura-warning" /> Popular dish
                                  </label>
                                  <div className="flex gap-2">
                                    <button onClick={() => deleteMenuItem(item.id)} className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => setEditingMenu(null)} className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
                                      <Check className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between cursor-pointer" onClick={() => setEditingMenu(item.id)}>
                                <div className="flex items-center gap-3">
                                  <GripVertical className="w-4 h-4 text-muted-foreground/40" />
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium">{item.name || "Untitled"}</span>
                                      {item.popular && <Star className="w-3 h-3 fill-aura-warning text-aura-warning" />}
                                    </div>
                                    <p className="text-xs text-muted-foreground">{item.description}</p>
                                  </div>
                                </div>
                                <span className="text-sm font-bold">${item.price}</span>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-end mt-6">
                  <button onClick={() => save("Menu")} className={btnPrimary}>
                    <Save className="w-4 h-4" /> Publish Menu
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── GALLERY ────────────────────────────── */}
          {activeTab === "gallery" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-lg">Photo Gallery</h3>
                    <p className="text-xs text-muted-foreground">{gallery.length} photos</p>
                  </div>
                  <button onClick={addGalleryImage} className={btnPrimary}>
                    <Plus className="w-4 h-4" /> Add Photo
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {gallery.map((img, i) => (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      className="group relative rounded-xl overflow-hidden border bg-muted/30"
                    >
                      <div className="aspect-square bg-muted/50 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-muted-foreground/30" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <input
                            value={img.caption}
                            onChange={(e) => updateGallery(img.id, { caption: e.target.value })}
                            placeholder="Add caption..."
                            className="w-full bg-transparent text-white text-xs border-b border-white/30 pb-1 focus:outline-none placeholder:text-white/50"
                            maxLength={100}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <button
                          onClick={() => deleteGalleryImage(img.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/40 text-white hover:bg-destructive/80 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {img.caption && (
                        <div className="p-2">
                          <span className="text-[10px] text-muted-foreground">{img.caption}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Upload placeholder */}
                  <button
                    onClick={addGalleryImage}
                    className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <ImagePlus className="w-6 h-6 text-muted-foreground/40" />
                    <span className="text-[10px] text-muted-foreground font-medium">Upload</span>
                  </button>
                </div>

                <div className="flex justify-end mt-6">
                  <button onClick={() => save("Gallery")} className={btnPrimary}>
                    <Save className="w-4 h-4" /> Save Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── STAFF PROFILES ─────────────────────── */}
          {activeTab === "staff" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-lg">Staff Profiles</h3>
                    <p className="text-xs text-muted-foreground">{staff.length} team members</p>
                  </div>
                  <button onClick={addStaff} className={btnPrimary}>
                    <Plus className="w-4 h-4" /> Add Member
                  </button>
                </div>

                <div className="space-y-3">
                  {staff.map((member, i) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="p-4 rounded-xl bg-muted/30"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 self-start">
                          {member.name ? (
                            <span className="text-lg font-display font-bold text-primary">
                              {member.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          ) : (
                            <Users className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="grid sm:grid-cols-2 gap-2">
                            <input value={member.name} onChange={(e) => updateStaff(member.id, { name: e.target.value })} placeholder="Full name" className={inputCls} maxLength={80} />
                            <input value={member.role} onChange={(e) => updateStaff(member.id, { role: e.target.value })} placeholder="Role / title" className={inputCls} maxLength={80} />
                          </div>
                          <textarea value={member.bio} onChange={(e) => updateStaff(member.id, { bio: e.target.value })} placeholder="Short bio..." rows={2} className={`${inputCls} resize-none`} maxLength={300} />
                        </div>
                        <button onClick={() => deleteStaff(member.id)} className="self-start p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors shrink-0">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end mt-6">
                  <button onClick={() => save("Staff profiles")} className={btnPrimary}>
                    <Save className="w-4 h-4" /> Save Profiles
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminPage;
