import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store, Clock, ImagePlus, Trash2, Plus, Save, GripVertical,
  UtensilsCrossed, Users, Camera, FileText, MapPin, Phone, Mail,
  Globe, Star, ChevronDown, Check, X, CalendarDays, Award, Wine,
  HelpCircle, Instagram, Facebook, Twitter, Youtube, MessageCircle,
  Link2, Sparkles, Gift, DollarSign,
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
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "awards", label: "Awards", icon: Award },
  { id: "privateDining", label: "Private Dining", icon: Wine },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
  { id: "socialLinks", label: "Social Links", icon: Globe },
  { id: "giftCards", label: "Gift Cards", icon: Gift },
] as const;
type Tab = (typeof tabs)[number]["id"];

/* ── Types ───────────────────────────────────────────── */
interface MenuItem { id: string; name: string; description: string; price: string; category: string; popular: boolean; }
interface StaffMember { id: string; name: string; role: string; bio: string; }
interface GalleryImage { id: string; url: string; caption: string; }
interface DayHours { day: string; open: string; close: string; closed: boolean; }
interface EventItem { id: string; title: string; date: string; time: string; location: string; desc: string; tag: string; }
interface AwardItem { id: string; title: string; year: string; org: string; desc: string; }
interface PrivateRoom { id: string; name: string; capacity: string; desc: string; }
interface FAQItem { id: string; question: string; answer: string; }
interface SocialLink { id: string; platform: string; handle: string; url: string; enabled: boolean; }
interface GiftCardItem { id: string; name: string; amount: string; description: string; active: boolean; }

/* ── Helpers ─────────────────────────────────────────── */
const uid = () => crypto.randomUUID();
const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";
const labelCls = "text-xs font-medium text-muted-foreground mb-1.5 block";
const btnPrimary = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity";

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
  { id: uid(), name: "Marco Rossi", role: "Executive Chef", bio: "Trained in Florence, 20+ years of culinary mastery." },
  { id: uid(), name: "Sophia Chen", role: "Head Sommelier", bio: "Award-winning wine expert with an encyclopedic palate." },
  { id: uid(), name: "James Wright", role: "General Manager", bio: "Ensuring every guest feels like family since 2005." },
  { id: uid(), name: "Elena Volkov", role: "Pastry Chef", bio: "Creates edible art that delights every sense." },
];

const defaultGallery: GalleryImage[] = [
  { id: uid(), url: "/placeholder.svg", caption: "Dining room interior" },
  { id: uid(), url: "/placeholder.svg", caption: "Chef's special plating" },
  { id: uid(), url: "/placeholder.svg", caption: "Wine cellar selection" },
  { id: uid(), url: "/placeholder.svg", caption: "Private dining area" },
];

const defaultEvents: EventItem[] = [
  { id: uid(), title: "Wine & Dine Tasting Night", date: "2026-03-15", time: "19:00", location: "The Cellar", desc: "Explore 12 premium Italian wines paired with chef-curated bites.", tag: "Sold Out" },
  { id: uid(), title: "Jazz & Supper Club", date: "2026-03-22", time: "20:00", location: "Grand Terrace", desc: "Live jazz trio with a 4-course prix fixe dinner.", tag: "Few Spots Left" },
  { id: uid(), title: "Truffle Season Launch", date: "2026-04-01", time: "18:30", location: "Main Dining", desc: "Celebrate the arrival of white truffles with an exclusive tasting menu.", tag: "New" },
  { id: uid(), title: "Easter Brunch", date: "2026-04-05", time: "10:30", location: "Grand Terrace", desc: "Family-style brunch with live entertainment and egg hunt for kids.", tag: "Family" },
  { id: uid(), title: "Pasta Masterclass", date: "2026-04-12", time: "14:00", location: "Kitchen Studio", desc: "Hands-on class with Chef Marco — learn to make fresh tagliatelle.", tag: "Interactive" },
];

const defaultAwards: AwardItem[] = [
  { id: uid(), title: "Michelin Star", year: "2024", org: "Michelin Guide", desc: "Recognized for exceptional cuisine and consistency" },
  { id: uid(), title: "Best Italian Restaurant", year: "2024", org: "James Beard Foundation", desc: "Northeast regional winner" },
  { id: uid(), title: "Wine Spectator Award", year: "2023", org: "Wine Spectator", desc: "Grand Award for outstanding wine program" },
  { id: uid(), title: "OpenTable Diners' Choice", year: "2024", org: "OpenTable", desc: "Top 50 restaurants in New York City" },
  { id: uid(), title: "AAA Four Diamond", year: "2023", org: "AAA", desc: "Distinguished fine dining establishment" },
  { id: uid(), title: "Zagat Top Rated", year: "2024", org: "Zagat", desc: "29/30 food rating" },
  { id: uid(), title: "Best Chef: Northeast", year: "2022", org: "James Beard Foundation", desc: "Chef Marco Bellini" },
  { id: uid(), title: "Forbes Travel Guide", year: "2024", org: "Forbes", desc: "Four-Star restaurant rating" },
];

const defaultRooms: PrivateRoom[] = [
  { id: uid(), name: "The Cellar", capacity: "8–12 guests", desc: "Intimate wine cellar setting with curated tasting menus" },
  { id: uid(), name: "Grand Terrace", capacity: "20–50 guests", desc: "Open-air rooftop with panoramic city views" },
  { id: uid(), name: "Salon Privé", capacity: "12–24 guests", desc: "Elegant private room with custom AV setup" },
];

const defaultFAQs: FAQItem[] = [
  { id: uid(), question: "Do you take reservations?", answer: "Yes! We accept reservations through OpenTable, by phone, or through our AI Concierge. We recommend booking at least 48 hours in advance for weekend dining." },
  { id: uid(), question: "Is there a dress code?", answer: "We maintain a smart casual dress code. Jackets are appreciated but not required. No athletic wear or flip-flops please." },
  { id: uid(), question: "Do you accommodate dietary restrictions?", answer: "Absolutely. Our kitchen can accommodate gluten-free, vegan, vegetarian, and most allergy requirements. Please inform your server." },
  { id: uid(), question: "Is valet parking available?", answer: "Yes, complimentary valet parking is available Thursday through Sunday evenings." },
  { id: uid(), question: "Do you have a private dining room?", answer: "We have three private dining spaces: The Cellar, Grand Terrace, and Salon Privé. Contact us for availability." },
  { id: uid(), question: "What's your cancellation policy?", answer: "We ask for 24-hour notice for cancellations. Parties of 6 or more require 48-hour notice." },
  { id: uid(), question: "Do you offer gift cards?", answer: "Yes, physical and digital gift cards are available in any denomination." },
  { id: uid(), question: "Is the restaurant wheelchair accessible?", answer: "Yes, our restaurant is fully ADA accessible including restrooms." },
  { id: uid(), question: "Do you have outdoor seating?", answer: "Yes! Our Grand Terrace offers beautiful outdoor dining from May through October." },
  { id: uid(), question: "Can I host a corporate event?", answer: "Absolutely. We offer customized corporate dining packages with AV equipment and tailored menus." },
  { id: uid(), question: "What wines do you carry?", answer: "Our award-winning wine list features over 400 selections with a focus on Italian and French varietals." },
  { id: uid(), question: "Do you have a kids' menu?", answer: "Yes, we offer a children's menu for guests 12 and under." },
];

const defaultSocials: SocialLink[] = [
  { id: uid(), platform: "Instagram", handle: "@bellavistanyc", url: "https://instagram.com/bellavistanyc", enabled: true },
  { id: uid(), platform: "Facebook", handle: "BellaVistaNewYork", url: "https://facebook.com/BellaVistaNewYork", enabled: true },
  { id: uid(), platform: "X (Twitter)", handle: "@bellavista_nyc", url: "https://x.com/bellavista_nyc", enabled: true },
  { id: uid(), platform: "YouTube", handle: "Bella Vista Kitchen", url: "https://youtube.com/@bellavistakitchen", enabled: true },
  { id: uid(), platform: "TikTok", handle: "@bellavistanyc", url: "https://tiktok.com/@bellavistanyc", enabled: true },
  { id: uid(), platform: "Yelp", handle: "Bella Vista NYC", url: "https://yelp.com/biz/bella-vista-new-york", enabled: true },
  { id: uid(), platform: "Google Reviews", handle: "4.8 ★ (2,400+ reviews)", url: "https://g.page/bellavistanyc/review", enabled: true },
  { id: uid(), platform: "Website", handle: "bellavistanyc.com", url: "https://bellavistanyc.com", enabled: true },
  { id: uid(), platform: "Newsletter", handle: "Subscribe for updates", url: "mailto:newsletter@bellavistanyc.com", enabled: true },
];

const menuCategories = ["Starters", "Mains", "Pasta", "Desserts", "Drinks"];
const eventTags = ["New", "Sold Out", "Few Spots Left", "Family", "Interactive", "Seasonal"];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("business");

  /* Business info */
  const [business, setBusiness] = useState({
    name: "Bella Vista", tagline: "Award-winning Italian fine dining · Est. 1998",
    description: "Nestled in the heart of Manhattan, Bella Vista offers an authentic Italian dining experience featuring handcrafted pastas, wood-fired dishes, and an award-winning wine program.",
    address: "123 Grand Ave, New York, NY 10001", phone: "+1 (212) 555-0147",
    email: "info@bellavista.com", website: "https://bellavista.com",
    cuisine: "Italian", priceRange: "$$$", capacity: "120", established: "1998",
  });

  const [hours, setHours] = useState<DayHours[]>(defaultHours);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(defaultMenu);
  const [editingMenu, setEditingMenu] = useState<string | null>(null);
  const [staff, setStaff] = useState<StaffMember[]>(defaultStaff);
  const [gallery, setGallery] = useState<GalleryImage[]>(defaultGallery);
  const [events, setEvents] = useState<EventItem[]>(defaultEvents);
  const [awards, setAwards] = useState<AwardItem[]>(defaultAwards);
  const [rooms, setRooms] = useState<PrivateRoom[]>(defaultRooms);
  const [faqs, setFaqs] = useState<FAQItem[]>(defaultFAQs);
  const [socials, setSocials] = useState<SocialLink[]>(defaultSocials);

  const save = (section: string) => toast({ title: `${section} saved`, description: "Changes published to your microsite." });

  // Menu handlers
  const addMenuItem = () => { const item: MenuItem = { id: uid(), name: "", description: "", price: "", category: "Mains", popular: false }; setMenuItems([...menuItems, item]); setEditingMenu(item.id); };
  const updateMenuItem = (id: string, patch: Partial<MenuItem>) => setMenuItems((items) => items.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  const deleteMenuItem = (id: string) => setMenuItems((items) => items.filter((m) => m.id !== id));

  // Staff handlers
  const addStaff = () => setStaff([...staff, { id: uid(), name: "", role: "", bio: "" }]);
  const updateStaff = (id: string, patch: Partial<StaffMember>) => setStaff((s) => s.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  const deleteStaff = (id: string) => setStaff((s) => s.filter((m) => m.id !== id));

  // Gallery handlers
  const addGalleryImage = () => setGallery([...gallery, { id: uid(), url: "/placeholder.svg", caption: "" }]);
  const updateGallery = (id: string, patch: Partial<GalleryImage>) => setGallery((g) => g.map((img) => (img.id === id ? { ...img, ...patch } : img)));
  const deleteGalleryImage = (id: string) => setGallery((g) => g.filter((img) => img.id !== id));

  // Hours handler
  const updateHour = (idx: number, patch: Partial<DayHours>) => setHours((h) => h.map((d, i) => (i === idx ? { ...d, ...patch } : d)));

  // Events handlers
  const addEvent = () => setEvents([...events, { id: uid(), title: "", date: "", time: "", location: "", desc: "", tag: "New" }]);
  const updateEvent = (id: string, patch: Partial<EventItem>) => setEvents((e) => e.map((ev) => (ev.id === id ? { ...ev, ...patch } : ev)));
  const deleteEvent = (id: string) => setEvents((e) => e.filter((ev) => ev.id !== id));

  // Awards handlers
  const addAward = () => setAwards([...awards, { id: uid(), title: "", year: new Date().getFullYear().toString(), org: "", desc: "" }]);
  const updateAward = (id: string, patch: Partial<AwardItem>) => setAwards((a) => a.map((aw) => (aw.id === id ? { ...aw, ...patch } : aw)));
  const deleteAward = (id: string) => setAwards((a) => a.filter((aw) => aw.id !== id));

  // Rooms handlers
  const addRoom = () => setRooms([...rooms, { id: uid(), name: "", capacity: "", desc: "" }]);
  const updateRoom = (id: string, patch: Partial<PrivateRoom>) => setRooms((r) => r.map((rm) => (rm.id === id ? { ...rm, ...patch } : rm)));
  const deleteRoom = (id: string) => setRooms((r) => r.filter((rm) => rm.id !== id));

  // FAQs handlers
  const addFAQ = () => setFaqs([...faqs, { id: uid(), question: "", answer: "" }]);
  const updateFAQ = (id: string, patch: Partial<FAQItem>) => setFaqs((f) => f.map((fq) => (fq.id === id ? { ...fq, ...patch } : fq)));
  const deleteFAQ = (id: string) => setFaqs((f) => f.filter((fq) => fq.id !== id));

  // Gift cards handlers
  const [giftCards, setGiftCards] = useState<GiftCardItem[]>([
    { id: uid(), name: "Classic Dinner", amount: "50", description: "Perfect for a starter and main course", active: true },
    { id: uid(), name: "Fine Dining Experience", amount: "100", description: "Enjoy a full 3-course dinner for two", active: true },
    { id: uid(), name: "Chef's Table", amount: "200", description: "An unforgettable multi-course tasting menu", active: true },
    { id: uid(), name: "Ultimate Celebration", amount: "500", description: "Wine pairing, private dining & the full experience", active: true },
  ]);
  const addGiftCard = () => setGiftCards([...giftCards, { id: uid(), name: "", amount: "", description: "", active: true }]);
  const updateGiftCard = (id: string, patch: Partial<GiftCardItem>) => setGiftCards((g) => g.map((gc) => (gc.id === id ? { ...gc, ...patch } : gc)));
  const deleteGiftCard = (id: string) => setGiftCards((g) => g.filter((gc) => gc.id !== id));

  return (
    <DashboardLayout title="Admin Panel" subtitle="Manage all business content & details">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tab Nav */}
        <div className="lg:w-52 shrink-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}>
                <tab.icon className="w-4 h-4" />{tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {/* ─── BUSINESS INFO ──────────────────────── */}
          {activeTab === "business" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Business Details</h3>
                <div className="flex gap-4 mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-primary/30 cursor-pointer hover:bg-primary/20 transition-colors">
                    <ImagePlus className="w-5 h-5 text-primary" /><span className="text-[9px] text-primary font-medium">Logo</span>
                  </div>
                  <div className="flex-1 h-24 rounded-2xl bg-muted/50 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-muted-foreground/20 cursor-pointer hover:bg-muted transition-colors">
                    <ImagePlus className="w-5 h-5 text-muted-foreground" /><span className="text-[10px] text-muted-foreground font-medium">Cover Photo (1200×400 recommended)</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={labelCls}>Business Name</label><input value={business.name} onChange={(e) => setBusiness({ ...business, name: e.target.value })} className={inputCls} maxLength={100} /></div>
                  <div><label className={labelCls}>Cuisine Type</label><input value={business.cuisine} onChange={(e) => setBusiness({ ...business, cuisine: e.target.value })} className={inputCls} maxLength={50} /></div>
                  <div className="sm:col-span-2"><label className={labelCls}>Tagline</label><input value={business.tagline} onChange={(e) => setBusiness({ ...business, tagline: e.target.value })} className={inputCls} maxLength={150} /></div>
                  <div className="sm:col-span-2"><label className={labelCls}>Description</label><textarea value={business.description} onChange={(e) => setBusiness({ ...business, description: e.target.value })} rows={3} className={`${inputCls} resize-none`} maxLength={500} /><span className="text-[10px] text-muted-foreground mt-1 block text-right">{business.description.length}/500</span></div>
                  <div><label className={labelCls}>Price Range</label>
                    <div className="flex gap-2">{["$", "$$", "$$$", "$$$$"].map((p) => (
                      <button key={p} onClick={() => setBusiness({ ...business, priceRange: p })} className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${business.priceRange === p ? "bg-primary text-primary-foreground" : "bg-muted/50 border text-muted-foreground hover:bg-muted"}`}>{p}</button>
                    ))}</div>
                  </div>
                  <div><label className={labelCls}>Seating Capacity</label><input value={business.capacity} onChange={(e) => setBusiness({ ...business, capacity: e.target.value.replace(/\D/g, "") })} className={inputCls} maxLength={5} /></div>
                  <div><label className={labelCls}>Established Year</label><input value={business.established} onChange={(e) => setBusiness({ ...business, established: e.target.value.replace(/\D/g, "") })} className={inputCls} maxLength={4} /></div>
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Business details")} className={btnPrimary}><Save className="w-4 h-4" /> Save Details</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── HOURS & CONTACT ────────────────────── */}
          {activeTab === "hours" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Contact Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={labelCls}>Address</label><div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><input value={business.address} onChange={(e) => setBusiness({ ...business, address: e.target.value })} className={`${inputCls} pl-10`} maxLength={200} /></div></div>
                  <div><label className={labelCls}>Phone</label><div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><input value={business.phone} onChange={(e) => setBusiness({ ...business, phone: e.target.value })} className={`${inputCls} pl-10`} maxLength={20} /></div></div>
                  <div><label className={labelCls}>Email</label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><input value={business.email} onChange={(e) => setBusiness({ ...business, email: e.target.value })} className={`${inputCls} pl-10`} maxLength={100} /></div></div>
                  <div><label className={labelCls}>Website</label><div className="relative"><Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><input value={business.website} onChange={(e) => setBusiness({ ...business, website: e.target.value })} className={`${inputCls} pl-10`} maxLength={200} /></div></div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border">
                <h3 className="font-display font-semibold text-lg mb-6">Operating Hours</h3>
                <div className="space-y-2">
                  {hours.map((d, i) => (
                    <div key={d.day} className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 p-3 rounded-xl bg-muted/30">
                      <span className="w-20 sm:w-24 text-sm font-medium shrink-0">{d.day}</span>
                      <Switch checked={!d.closed} onCheckedChange={(v) => updateHour(i, { closed: !v })} />
                      {d.closed ? <span className="text-sm text-muted-foreground italic">Closed</span> : (
                        <div className="flex items-center gap-2">
                          <input type="time" value={d.open} onChange={(e) => updateHour(i, { open: e.target.value })} className="px-2 py-1.5 rounded-lg bg-background border text-sm w-[110px]" />
                          <span className="text-xs text-muted-foreground">to</span>
                          <input type="time" value={d.close} onChange={(e) => updateHour(i, { close: e.target.value })} className="px-2 py-1.5 rounded-lg bg-background border text-sm w-[110px]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Hours & contact")} className={btnPrimary}><Save className="w-4 h-4" /> Save Hours</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── MENU ITEMS ─────────────────────────── */}
          {activeTab === "menu" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Menu Items</h3><p className="text-xs text-muted-foreground">{menuItems.length} items across {menuCategories.length} categories</p></div>
                  <button onClick={addMenuItem} className={btnPrimary}><Plus className="w-4 h-4" /> Add Item</button>
                </div>
                {menuCategories.map((cat) => {
                  const items = menuItems.filter((m) => m.category === cat);
                  if (items.length === 0) return null;
                  return (
                    <div key={cat} className="mb-6 last:mb-0">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{cat}</h4>
                      <div className="space-y-2">
                        {items.map((item, i) => (
                          <motion.div key={item.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="p-4 rounded-xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all">
                            {editingMenu === item.id ? (
                              <div className="space-y-3">
                                <div className="grid sm:grid-cols-3 gap-3">
                                  <input value={item.name} onChange={(e) => updateMenuItem(item.id, { name: e.target.value })} placeholder="Dish name" className={inputCls} maxLength={80} />
                                  <input value={item.price} onChange={(e) => updateMenuItem(item.id, { price: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="Price" className={inputCls} maxLength={8} />
                                  <select value={item.category} onChange={(e) => updateMenuItem(item.id, { category: e.target.value })} className={inputCls}>{menuCategories.map((c) => <option key={c}>{c}</option>)}</select>
                                </div>
                                <input value={item.description} onChange={(e) => updateMenuItem(item.id, { description: e.target.value })} placeholder="Description" className={inputCls} maxLength={200} />
                                <div className="flex items-center justify-between">
                                  <label className="flex items-center gap-2 text-sm"><Switch checked={item.popular} onCheckedChange={(v) => updateMenuItem(item.id, { popular: v })} /><Star className="w-3.5 h-3.5 text-aura-warning" /> Popular dish</label>
                                  <div className="flex gap-2">
                                    <button onClick={() => deleteMenuItem(item.id)} className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                    <button onClick={() => setEditingMenu(null)} className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium"><Check className="w-3.5 h-3.5" /></button>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between cursor-pointer" onClick={() => setEditingMenu(item.id)}>
                                <div className="flex items-center gap-3"><GripVertical className="w-4 h-4 text-muted-foreground/40" /><div><div className="flex items-center gap-2"><span className="text-sm font-medium">{item.name || "Untitled"}</span>{item.popular && <Star className="w-3 h-3 fill-aura-warning text-aura-warning" />}</div><p className="text-xs text-muted-foreground">{item.description}</p></div></div>
                                <span className="text-sm font-bold">${item.price}</span>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-end mt-6"><button onClick={() => save("Menu")} className={btnPrimary}><Save className="w-4 h-4" /> Publish Menu</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── GALLERY ────────────────────────────── */}
          {activeTab === "gallery" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Photo Gallery</h3><p className="text-xs text-muted-foreground">{gallery.length} photos</p></div>
                  <button onClick={addGalleryImage} className={btnPrimary}><Plus className="w-4 h-4" /> Add Photo</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {gallery.map((img, i) => (
                    <motion.div key={img.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }} className="group relative rounded-xl overflow-hidden border bg-muted/30">
                      <div className="aspect-square bg-muted/50 flex items-center justify-center"><Camera className="w-8 h-8 text-muted-foreground/30" /></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3"><input value={img.caption} onChange={(e) => updateGallery(img.id, { caption: e.target.value })} placeholder="Add caption..." className="w-full bg-transparent text-white text-xs border-b border-white/30 pb-1 focus:outline-none placeholder:text-white/50" maxLength={100} onClick={(e) => e.stopPropagation()} /></div>
                        <button onClick={() => deleteGalleryImage(img.id)} className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/40 text-white hover:bg-destructive/80 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                      {img.caption && <div className="p-2"><span className="text-[10px] text-muted-foreground">{img.caption}</span></div>}
                    </motion.div>
                  ))}
                  <button onClick={addGalleryImage} className="aspect-square rounded-xl border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all"><ImagePlus className="w-6 h-6 text-muted-foreground/40" /><span className="text-[10px] text-muted-foreground font-medium">Upload</span></button>
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Gallery")} className={btnPrimary}><Save className="w-4 h-4" /> Save Gallery</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── STAFF PROFILES ─────────────────────── */}
          {activeTab === "staff" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Staff Profiles</h3><p className="text-xs text-muted-foreground">{staff.length} team members</p></div>
                  <button onClick={addStaff} className={btnPrimary}><Plus className="w-4 h-4" /> Add Member</button>
                </div>
                <div className="space-y-3">
                  {staff.map((member, i) => (
                    <motion.div key={member.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="p-4 rounded-xl bg-muted/30">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 self-start">
                          {member.name ? <span className="text-lg font-display font-bold text-primary">{member.name.split(" ").map((n) => n[0]).join("")}</span> : <Users className="w-5 h-5 text-primary" />}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="grid sm:grid-cols-2 gap-2">
                            <input value={member.name} onChange={(e) => updateStaff(member.id, { name: e.target.value })} placeholder="Full name" className={inputCls} maxLength={80} />
                            <input value={member.role} onChange={(e) => updateStaff(member.id, { role: e.target.value })} placeholder="Role / title" className={inputCls} maxLength={80} />
                          </div>
                          <textarea value={member.bio} onChange={(e) => updateStaff(member.id, { bio: e.target.value })} placeholder="Short bio..." rows={2} className={`${inputCls} resize-none`} maxLength={300} />
                        </div>
                        <button onClick={() => deleteStaff(member.id)} className="self-start p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors shrink-0"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Staff profiles")} className={btnPrimary}><Save className="w-4 h-4" /> Save Profiles</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── EVENTS ────────────────────────────── */}
          {activeTab === "events" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Upcoming Events</h3><p className="text-xs text-muted-foreground">{events.length} events — displayed on your microsite Events card</p></div>
                  <button onClick={addEvent} className={btnPrimary}><Plus className="w-4 h-4" /> Add Event</button>
                </div>
                <div className="space-y-3">
                  {events.map((ev, i) => (
                    <motion.div key={ev.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="p-4 rounded-xl bg-muted/30 space-y-3">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input value={ev.title} onChange={(e) => updateEvent(ev.id, { title: e.target.value })} placeholder="Event title" className={inputCls} maxLength={100} />
                        <select value={ev.tag} onChange={(e) => updateEvent(ev.id, { tag: e.target.value })} className={inputCls}>{eventTags.map((t) => <option key={t}>{t}</option>)}</select>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <input type="date" value={ev.date} onChange={(e) => updateEvent(ev.id, { date: e.target.value })} className={inputCls} />
                        <input type="time" value={ev.time} onChange={(e) => updateEvent(ev.id, { time: e.target.value })} className={inputCls} />
                        <input value={ev.location} onChange={(e) => updateEvent(ev.id, { location: e.target.value })} placeholder="Venue" className={inputCls} maxLength={50} />
                      </div>
                      <div className="flex gap-2">
                        <textarea value={ev.desc} onChange={(e) => updateEvent(ev.id, { desc: e.target.value })} placeholder="Description" rows={2} className={`${inputCls} resize-none flex-1`} maxLength={300} />
                        <button onClick={() => deleteEvent(ev.id)} className="self-start p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors shrink-0"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Events")} className={btnPrimary}><Save className="w-4 h-4" /> Save Events</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── AWARDS ────────────────────────────── */}
          {activeTab === "awards" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Awards & Recognition</h3><p className="text-xs text-muted-foreground">{awards.length} awards — displayed on your microsite Awards card</p></div>
                  <button onClick={addAward} className={btnPrimary}><Plus className="w-4 h-4" /> Add Award</button>
                </div>
                <div className="space-y-3">
                  {awards.map((aw, i) => (
                    <motion.div key={aw.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="p-4 rounded-xl bg-muted/30">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Award className="w-5 h-5 text-primary" /></div>
                        <div className="flex-1 space-y-2">
                          <div className="grid sm:grid-cols-3 gap-2">
                            <input value={aw.title} onChange={(e) => updateAward(aw.id, { title: e.target.value })} placeholder="Award title" className={inputCls} maxLength={100} />
                            <input value={aw.org} onChange={(e) => updateAward(aw.id, { org: e.target.value })} placeholder="Organization" className={inputCls} maxLength={80} />
                            <input value={aw.year} onChange={(e) => updateAward(aw.id, { year: e.target.value.replace(/\D/g, "") })} placeholder="Year" className={inputCls} maxLength={4} />
                          </div>
                          <input value={aw.desc} onChange={(e) => updateAward(aw.id, { desc: e.target.value })} placeholder="Description" className={inputCls} maxLength={200} />
                        </div>
                        <button onClick={() => deleteAward(aw.id)} className="self-start p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors shrink-0"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Awards")} className={btnPrimary}><Save className="w-4 h-4" /> Save Awards</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── PRIVATE DINING ─────────────────────── */}
          {activeTab === "privateDining" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Private Dining Rooms</h3><p className="text-xs text-muted-foreground">{rooms.length} rooms — displayed on your microsite Private Dining card</p></div>
                  <button onClick={addRoom} className={btnPrimary}><Plus className="w-4 h-4" /> Add Room</button>
                </div>
                <div className="space-y-3">
                  {rooms.map((rm, i) => (
                    <motion.div key={rm.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="p-4 rounded-xl bg-muted/30">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Wine className="w-5 h-5 text-primary" /></div>
                        <div className="flex-1 space-y-2">
                          <div className="grid sm:grid-cols-2 gap-2">
                            <input value={rm.name} onChange={(e) => updateRoom(rm.id, { name: e.target.value })} placeholder="Room name" className={inputCls} maxLength={60} />
                            <input value={rm.capacity} onChange={(e) => updateRoom(rm.id, { capacity: e.target.value })} placeholder="e.g. 8–12 guests" className={inputCls} maxLength={30} />
                          </div>
                          <textarea value={rm.desc} onChange={(e) => updateRoom(rm.id, { desc: e.target.value })} placeholder="Description" rows={2} className={`${inputCls} resize-none`} maxLength={200} />
                        </div>
                        <button onClick={() => deleteRoom(rm.id)} className="self-start p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors shrink-0"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Private Dining")} className={btnPrimary}><Save className="w-4 h-4" /> Save Rooms</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── FAQs ──────────────────────────────── */}
          {activeTab === "faqs" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Frequently Asked Questions</h3><p className="text-xs text-muted-foreground">{faqs.length} FAQs — displayed on your microsite FAQs card</p></div>
                  <button onClick={addFAQ} className={btnPrimary}><Plus className="w-4 h-4" /> Add FAQ</button>
                </div>
                <div className="space-y-3">
                  {faqs.map((fq, i) => (
                    <motion.div key={fq.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="p-4 rounded-xl bg-muted/30">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1"><HelpCircle className="w-4 h-4 text-primary" /></div>
                        <div className="flex-1 space-y-2">
                          <input value={fq.question} onChange={(e) => updateFAQ(fq.id, { question: e.target.value })} placeholder="Question" className={inputCls} maxLength={200} />
                          <textarea value={fq.answer} onChange={(e) => updateFAQ(fq.id, { answer: e.target.value })} placeholder="Answer" rows={2} className={`${inputCls} resize-none`} maxLength={500} />
                        </div>
                        <button onClick={() => deleteFAQ(fq.id)} className="self-start p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors shrink-0"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("FAQs")} className={btnPrimary}><Save className="w-4 h-4" /> Save FAQs</button></div>
              </div>
            </motion.div>
          )}

          {/* ─── SOCIAL LINKS ──────────────────────── */}
          {activeTab === "socialLinks" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border">
                <div className="flex items-center justify-between mb-6">
                  <div><h3 className="font-display font-semibold text-lg">Social Links</h3><p className="text-xs text-muted-foreground">Manage your social media links — displayed on your microsite Social Links card</p></div>
                </div>
                <div className="space-y-3">
                  {socials.map((sl, i) => (
                    <motion.div key={sl.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className={`p-4 rounded-xl border transition-all ${sl.enabled ? "bg-muted/30" : "bg-muted/10 opacity-60"}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Globe className="w-5 h-5 text-primary" /></div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{sl.platform}</span>
                            <Switch checked={sl.enabled} onCheckedChange={(v) => updateSocial(sl.id, { enabled: v })} />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-2">
                            <input value={sl.handle} onChange={(e) => updateSocial(sl.id, { handle: e.target.value })} placeholder="Handle / name" className={inputCls} maxLength={100} />
                            <input value={sl.url} onChange={(e) => updateSocial(sl.id, { url: e.target.value })} placeholder="URL" className={inputCls} maxLength={300} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-end mt-6"><button onClick={() => save("Social Links")} className={btnPrimary}><Save className="w-4 h-4" /> Save Links</button></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminPage;
