import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store, Clock, ImagePlus, Trash2, Plus, Save, GripVertical,
  UtensilsCrossed, Users, Camera, FileText, MapPin, Phone, Mail,
  Globe, Star, ChevronDown, Check, X, CalendarDays, Award, Wine,
  HelpCircle, Instagram, Facebook, Twitter, Youtube, MessageCircle,
  Link2, Sparkles, Eye, EyeOff, Ticket, DollarSign, Lock, Crown,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/aura/DashboardLayout";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { getSubscription, getEffectivePlan, isCardAccessible, type PlanId } from "@/lib/subscription";

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
] as const;
type Tab = (typeof tabs)[number]["id"];

/* ── Types ───────────────────────────────────────────── */
interface MenuItem { id: string; name: string; description: string; price: string; category: string; popular: boolean; image: string; visibility: "public" | "private"; }
interface StaffMember { id: string; name: string; role: string; bio: string; tipLink: string; }
interface GalleryImage { id: string; url: string; caption: string; }
interface DayHours { day: string; open: string; close: string; closed: boolean; }
interface EventItem { id: string; title: string; date: string; time: string; location: string; desc: string; tag: string; ticketEnabled: boolean; ticketPrice: string; ticketQty: string; }
interface AwardItem { id: string; title: string; year: string; org: string; desc: string; }
interface PrivateRoom { id: string; name: string; capacity: string; desc: string; image: string; }
interface FAQItem { id: string; question: string; answer: string; }
interface SocialLink { id: string; platform: string; handle: string; url: string; enabled: boolean; }

/* ── Helpers ─────────────────────────────────────────── */
const uid = () => crypto.randomUUID();
const inputCls = "w-full px-4 py-2.5 rounded-xl bg-muted/50 border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";
const labelCls = "text-xs font-medium text-muted-foreground mb-1.5 block";
const btnPrimary = "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity";

/* ── Timezones ───────────────────────────────────────── */
const timezones = [
  "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
  "America/Anchorage", "Pacific/Honolulu", "America/Phoenix",
  "Europe/London", "Europe/Paris", "Europe/Berlin", "Asia/Tokyo",
  "Asia/Shanghai", "Asia/Dubai", "Australia/Sydney", "Africa/Lagos",
  "America/Sao_Paulo", "America/Toronto", "Asia/Kolkata", "Asia/Singapore",
];

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
  { id: uid(), name: "Truffle Risotto", description: "Arborio rice, black truffle, aged parmesan", price: "34", category: "Mains", popular: true, image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=200&h=200&fit=crop", visibility: "public" },
  { id: uid(), name: "Burrata Caprese", description: "Fresh burrata, heirloom tomatoes, basil oil", price: "18", category: "Starters", popular: true, image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=200&h=200&fit=crop", visibility: "public" },
  { id: uid(), name: "Osso Buco", description: "Braised veal shank, gremolata, saffron risotto", price: "42", category: "Mains", popular: false, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop", visibility: "public" },
  { id: uid(), name: "Tiramisu", description: "Classic Italian, mascarpone, espresso", price: "14", category: "Desserts", popular: true, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&h=200&fit=crop", visibility: "private" },
];

const defaultStaff: StaffMember[] = [
  { id: uid(), name: "Marco Rossi", role: "Executive Chef", bio: "Trained in Florence, 20+ years of culinary mastery.", tipLink: "" },
  { id: uid(), name: "Sophia Chen", role: "Head Sommelier", bio: "Award-winning wine expert with an encyclopedic palate.", tipLink: "" },
  { id: uid(), name: "James Wright", role: "General Manager", bio: "Ensuring every guest feels like family since 2005.", tipLink: "" },
  { id: uid(), name: "Elena Volkov", role: "Pastry Chef", bio: "Creates edible art that delights every sense.", tipLink: "" },
];

const defaultGallery: GalleryImage[] = [
  { id: uid(), url: "/placeholder.svg", caption: "Dining room interior" },
  { id: uid(), url: "/placeholder.svg", caption: "Chef's special plating" },
  { id: uid(), url: "/placeholder.svg", caption: "Wine cellar selection" },
  { id: uid(), url: "/placeholder.svg", caption: "Private dining area" },
];

const defaultEvents: EventItem[] = [
  { id: uid(), title: "Wine & Dine Tasting Night", date: "2026-03-15", time: "19:00", location: "The Cellar", desc: "Explore 12 premium Italian wines paired with chef-curated bites.", tag: "Sold Out", ticketEnabled: true, ticketPrice: "120", ticketQty: "50" },
  { id: uid(), title: "Jazz & Supper Club", date: "2026-03-22", time: "20:00", location: "Grand Terrace", desc: "Live jazz trio with a 4-course prix fixe dinner.", tag: "Few Spots Left", ticketEnabled: true, ticketPrice: "95", ticketQty: "80" },
  { id: uid(), title: "Truffle Season Launch", date: "2026-04-01", time: "18:30", location: "Main Dining", desc: "Celebrate the arrival of white truffles with an exclusive tasting menu.", tag: "New", ticketEnabled: true, ticketPrice: "150", ticketQty: "40" },
  { id: uid(), title: "Easter Brunch", date: "2026-04-05", time: "10:30", location: "Grand Terrace", desc: "Family-style brunch with live entertainment and egg hunt for kids.", tag: "Family", ticketEnabled: false, ticketPrice: "", ticketQty: "" },
  { id: uid(), title: "Pasta Masterclass", date: "2026-04-12", time: "14:00", location: "Kitchen Studio", desc: "Hands-on class with Chef Marco — learn to make fresh tagliatelle.", tag: "Interactive", ticketEnabled: true, ticketPrice: "75", ticketQty: "20" },
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
  { id: uid(), name: "The Cellar", capacity: "8–12 guests", desc: "Intimate wine cellar setting with curated tasting menus", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=200&h=200&fit=crop" },
  { id: uid(), name: "Grand Terrace", capacity: "20–50 guests", desc: "Open-air rooftop with panoramic city views", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop" },
  { id: uid(), name: "Salon Privé", capacity: "12–24 guests", desc: "Elegant private room with custom AV setup", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=200&fit=crop" },
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

  const [timezone, setTimezone] = useState("America/New_York");
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

  /* Modal states */
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [newMenuItem, setNewMenuItem] = useState<MenuItem>({ id: "", name: "", description: "", price: "", category: "Mains", popular: false, image: "", visibility: "public" });

  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<EventItem>({ id: "", title: "", date: "", time: "", location: "", desc: "", tag: "New", ticketEnabled: false, ticketPrice: "", ticketQty: "" });

  const [staffModalOpen, setStaffModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState<StaffMember>({ id: "", name: "", role: "", bio: "", tipLink: "" });

  const [awardModalOpen, setAwardModalOpen] = useState(false);
  const [newAward, setNewAward] = useState<AwardItem>({ id: "", title: "", year: new Date().getFullYear().toString(), org: "", desc: "" });

  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [newRoom, setNewRoom] = useState<PrivateRoom>({ id: "", name: "", capacity: "", desc: "", image: "" });

  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [newFaq, setNewFaq] = useState<FAQItem>({ id: "", question: "", answer: "" });

  const save = (section: string) => toast({ title: `${section} saved`, description: "Changes published to your microsite." });

  // Menu handlers
  const addMenuItem = () => {
    const item: MenuItem = { ...newMenuItem, id: uid() };
    setMenuItems([...menuItems, item]);
    setNewMenuItem({ id: "", name: "", description: "", price: "", category: "Mains", popular: false, image: "", visibility: "public" });
    setMenuModalOpen(false);
    toast({ title: "Menu item added" });
  };
  const updateMenuItem = (id: string, patch: Partial<MenuItem>) => setMenuItems((items) => items.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  const deleteMenuItem = (id: string) => setMenuItems((items) => items.filter((m) => m.id !== id));

  // Staff handlers
  const addStaffMember = () => {
    setStaff([...staff, { ...newStaff, id: uid() }]);
    setNewStaff({ id: "", name: "", role: "", bio: "", tipLink: "" });
    setStaffModalOpen(false);
    toast({ title: "Staff member added" });
  };
  const updateStaff = (id: string, patch: Partial<StaffMember>) => setStaff((s) => s.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  const deleteStaff = (id: string) => setStaff((s) => s.filter((m) => m.id !== id));

  // Gallery handlers
  const addGalleryImage = () => setGallery([...gallery, { id: uid(), url: "/placeholder.svg", caption: "" }]);
  const updateGallery = (id: string, patch: Partial<GalleryImage>) => setGallery((g) => g.map((img) => (img.id === id ? { ...img, ...patch } : img)));
  const deleteGalleryImage = (id: string) => setGallery((g) => g.filter((img) => img.id !== id));

  // Hours handler
  const updateHour = (idx: number, patch: Partial<DayHours>) => setHours((h) => h.map((d, i) => (i === idx ? { ...d, ...patch } : d)));

  // Events handlers
  const addEvent = () => {
    setEvents([...events, { ...newEvent, id: uid() }]);
    setNewEvent({ id: "", title: "", date: "", time: "", location: "", desc: "", tag: "New", ticketEnabled: false, ticketPrice: "", ticketQty: "" });
    setEventModalOpen(false);
    toast({ title: "Event added" });
  };
  const updateEvent = (id: string, patch: Partial<EventItem>) => setEvents((e) => e.map((ev) => (ev.id === id ? { ...ev, ...patch } : ev)));
  const deleteEvent = (id: string) => setEvents((e) => e.filter((ev) => ev.id !== id));

  // Awards handlers
  const addAwardItem = () => {
    setAwards([...awards, { ...newAward, id: uid() }]);
    setNewAward({ id: "", title: "", year: new Date().getFullYear().toString(), org: "", desc: "" });
    setAwardModalOpen(false);
    toast({ title: "Award added" });
  };
  const updateAward = (id: string, patch: Partial<AwardItem>) => setAwards((a) => a.map((aw) => (aw.id === id ? { ...aw, ...patch } : aw)));
  const deleteAward = (id: string) => setAwards((a) => a.filter((aw) => aw.id !== id));

  // Rooms handlers
  const addRoomItem = () => {
    setRooms([...rooms, { ...newRoom, id: uid() }]);
    setNewRoom({ id: "", name: "", capacity: "", desc: "", image: "" });
    setRoomModalOpen(false);
    toast({ title: "Room added" });
  };
  const updateRoom = (id: string, patch: Partial<PrivateRoom>) => setRooms((r) => r.map((rm) => (rm.id === id ? { ...rm, ...patch } : rm)));
  const deleteRoom = (id: string) => setRooms((r) => r.filter((rm) => rm.id !== id));

  // FAQs handlers
  const addFAQItem = () => {
    setFaqs([...faqs, { ...newFaq, id: uid() }]);
    setNewFaq({ id: "", question: "", answer: "" });
    setFaqModalOpen(false);
    toast({ title: "FAQ added" });
  };
  const updateFAQ = (id: string, patch: Partial<FAQItem>) => setFaqs((f) => f.map((fq) => (fq.id === id ? { ...fq, ...patch } : fq)));
  const deleteFAQ = (id: string) => setFaqs((f) => f.filter((fq) => fq.id !== id));

  // Socials handlers
  const updateSocial = (id: string, patch: Partial<SocialLink>) => setSocials((s) => s.map((sl) => (sl.id === id ? { ...sl, ...patch } : sl)));

  /* Image upload modal state */
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageModalUrl, setImageModalUrl] = useState("");
  const [imageModalCallback, setImageModalCallback] = useState<((url: string) => void) | null>(null);

  const openImageModal = (cb: (url: string) => void) => {
    setImageModalUrl("");
    setImageModalCallback(() => cb);
    setImageModalOpen(true);
  };

  const confirmImageModal = () => {
    if (imageModalUrl && imageModalCallback) imageModalCallback(imageModalUrl);
    setImageModalOpen(false);
    setImageModalUrl("");
    setImageModalCallback(null);
  };

  /* Image placeholder component */
  const ImageUploadBox = ({ image, onChange, label = "Add Image" }: { image: string; onChange: (v: string) => void; label?: string }) => (
    <div
      onClick={(e) => { if (!image) { e.stopPropagation(); openImageModal(onChange); } }}
      className="relative w-20 h-20 rounded-xl bg-muted/50 border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all shrink-0 overflow-hidden"
    >
      {image ? (
        <>
          <img src={image} alt="" className="w-full h-full object-cover" />
          <button onClick={(e) => { e.stopPropagation(); onChange(""); }} className="absolute top-1 right-1 p-0.5 rounded bg-black/50 text-white"><X className="w-3 h-3" /></button>
        </>
      ) : (
        <>
          <ImagePlus className="w-4 h-4 text-muted-foreground/50" />
          <span className="text-[8px] text-muted-foreground mt-0.5">{label}</span>
        </>
      )}
    </div>
  );


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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-semibold text-lg">Operating Hours</h3>
                  <div className="flex items-center gap-2">
                    <label className={labelCls + " mb-0"}>🌐 Timezone</label>
                    <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="px-3 py-1.5 rounded-lg bg-muted/50 border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/20">
                      {timezones.map((tz) => <option key={tz} value={tz}>{tz.replace(/_/g, " ")}</option>)}
                    </select>
                  </div>
                </div>
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
                  <button onClick={() => setMenuModalOpen(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Add Item</button>
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
                                <div className="flex gap-3">
                                  <ImageUploadBox image={item.image} onChange={(v) => updateMenuItem(item.id, { image: v })} />
                                  <div className="flex-1 grid sm:grid-cols-3 gap-3">
                                    <input value={item.name} onChange={(e) => updateMenuItem(item.id, { name: e.target.value })} placeholder="Dish name" className={inputCls} maxLength={80} />
                                    <input value={item.price} onChange={(e) => updateMenuItem(item.id, { price: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="Price" className={inputCls} maxLength={8} />
                                    <select value={item.category} onChange={(e) => updateMenuItem(item.id, { category: e.target.value })} className={inputCls}>{menuCategories.map((c) => <option key={c}>{c}</option>)}</select>
                                  </div>
                                </div>
                                <input value={item.description} onChange={(e) => updateMenuItem(item.id, { description: e.target.value })} placeholder="Description" className={inputCls} maxLength={200} />
                                <div className="flex items-center justify-between flex-wrap gap-3">
                                  <div className="flex items-center gap-4">
                                    <label className="flex items-center gap-2 text-sm"><Switch checked={item.popular} onCheckedChange={(v) => updateMenuItem(item.id, { popular: v })} /><Star className="w-3.5 h-3.5 text-aura-warning" /> Popular</label>
                                    <label className="flex items-center gap-2 text-sm">
                                      <Switch checked={item.visibility === "public"} onCheckedChange={(v) => updateMenuItem(item.id, { visibility: v ? "public" : "private" })} />
                                      {item.visibility === "public" ? <><Eye className="w-3.5 h-3.5 text-primary" /> Public</> : <><EyeOff className="w-3.5 h-3.5 text-muted-foreground" /> Private</>}
                                    </label>
                                  </div>
                                  <div className="flex gap-2">
                                    <button onClick={() => deleteMenuItem(item.id)} className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                    <button onClick={() => setEditingMenu(null)} className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium"><Check className="w-3.5 h-3.5" /></button>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between cursor-pointer" onClick={() => setEditingMenu(item.id)}>
                                <div className="flex items-center gap-3">
                                  <GripVertical className="w-4 h-4 text-muted-foreground/40" />
                                  {item.image && <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />}
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium">{item.name || "Untitled"}</span>
                                      {item.popular && <Star className="w-3 h-3 fill-aura-warning text-aura-warning" />}
                                      {item.visibility === "private" && <EyeOff className="w-3 h-3 text-muted-foreground" />}
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
                  <button onClick={() => setStaffModalOpen(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Add Member</button>
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
                          <div>
                            <label className={labelCls}>💰 Tip Link (Flex-It)</label>
                            <div className="relative">
                              <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <input value={member.tipLink} onChange={(e) => updateStaff(member.id, { tipLink: e.target.value })} placeholder="https://flex-it.com/your-link" className={`${inputCls} pl-9`} maxLength={200} />
                            </div>
                          </div>
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
                  <button onClick={() => setEventModalOpen(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Add Event</button>
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
                      {/* Ticketing */}
                      <div className="p-3 rounded-xl bg-background/50 border">
                        <div className="flex items-center justify-between mb-2">
                          <label className="flex items-center gap-2 text-sm font-medium"><Ticket className="w-4 h-4 text-primary" /> Ticketing</label>
                          <Switch checked={ev.ticketEnabled} onCheckedChange={(v) => updateEvent(ev.id, { ticketEnabled: v })} />
                        </div>
                        {ev.ticketEnabled && (
                          <div className="grid grid-cols-2 gap-3 mt-2">
                            <div><label className={labelCls}>Ticket Price ($)</label><input value={ev.ticketPrice} onChange={(e) => updateEvent(ev.id, { ticketPrice: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="0.00" className={inputCls} /></div>
                            <div><label className={labelCls}>Available Qty</label><input value={ev.ticketQty} onChange={(e) => updateEvent(ev.id, { ticketQty: e.target.value.replace(/\D/g, "") })} placeholder="100" className={inputCls} /></div>
                          </div>
                        )}
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
                  <button onClick={() => setAwardModalOpen(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Add Award</button>
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
                  <button onClick={() => setRoomModalOpen(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Add Room</button>
                </div>
                <div className="space-y-3">
                  {rooms.map((rm, i) => (
                    <motion.div key={rm.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="p-4 rounded-xl bg-muted/30">
                      <div className="flex gap-3">
                        <ImageUploadBox image={rm.image} onChange={(v) => updateRoom(rm.id, { image: v })} label="Room" />
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
                  <button onClick={() => setFaqModalOpen(true)} className={btnPrimary}><Plus className="w-4 h-4" /> Add FAQ</button>
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

      {/* ═══════════════ MODALS ═══════════════ */}

      {/* Add Menu Item Modal */}
      <Dialog open={menuModalOpen} onOpenChange={setMenuModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Menu Item</DialogTitle>
            <DialogDescription>Fill in the details for the new dish.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="flex gap-3">
              <ImageUploadBox image={newMenuItem.image} onChange={(v) => setNewMenuItem({ ...newMenuItem, image: v })} />
              <div className="flex-1 space-y-3">
                <input value={newMenuItem.name} onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })} placeholder="Dish name" className={inputCls} maxLength={80} />
                <div className="grid grid-cols-2 gap-3">
                  <input value={newMenuItem.price} onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="Price" className={inputCls} maxLength={8} />
                  <select value={newMenuItem.category} onChange={(e) => setNewMenuItem({ ...newMenuItem, category: e.target.value })} className={inputCls}>{menuCategories.map((c) => <option key={c}>{c}</option>)}</select>
                </div>
              </div>
            </div>
            <input value={newMenuItem.description} onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })} placeholder="Description" className={inputCls} maxLength={200} />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm"><Switch checked={newMenuItem.popular} onCheckedChange={(v) => setNewMenuItem({ ...newMenuItem, popular: v })} /><Star className="w-3.5 h-3.5 text-aura-warning" /> Popular</label>
              <label className="flex items-center gap-2 text-sm">
                <Switch checked={newMenuItem.visibility === "public"} onCheckedChange={(v) => setNewMenuItem({ ...newMenuItem, visibility: v ? "public" : "private" })} />
                {newMenuItem.visibility === "public" ? <><Eye className="w-3.5 h-3.5 text-primary" /> Public</> : <><EyeOff className="w-3.5 h-3.5 text-muted-foreground" /> Private</>}
              </label>
            </div>
          </div>
          <DialogFooter>
            <button onClick={() => setMenuModalOpen(false)} className="px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button onClick={addMenuItem} disabled={!newMenuItem.name} className={btnPrimary}><Plus className="w-4 h-4" /> Add Item</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Event Modal */}
      <Dialog open={eventModalOpen} onOpenChange={setEventModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
            <DialogDescription>Create a new event for your microsite.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <input value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} placeholder="Event title" className={inputCls} maxLength={100} />
            <div className="grid grid-cols-2 gap-3">
              <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className={inputCls} />
              <input type="time" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} placeholder="Venue / Location" className={inputCls} maxLength={50} />
              <select value={newEvent.tag} onChange={(e) => setNewEvent({ ...newEvent, tag: e.target.value })} className={inputCls}>{eventTags.map((t) => <option key={t}>{t}</option>)}</select>
            </div>
            <textarea value={newEvent.desc} onChange={(e) => setNewEvent({ ...newEvent, desc: e.target.value })} placeholder="Description" rows={3} className={`${inputCls} resize-none`} maxLength={300} />
            {/* Ticketing */}
            <div className="p-3 rounded-xl bg-muted/30 border">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium"><Ticket className="w-4 h-4 text-primary" /> Enable Ticketing</label>
                <Switch checked={newEvent.ticketEnabled} onCheckedChange={(v) => setNewEvent({ ...newEvent, ticketEnabled: v })} />
              </div>
              {newEvent.ticketEnabled && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div><label className={labelCls}>Ticket Price ($)</label><input value={newEvent.ticketPrice} onChange={(e) => setNewEvent({ ...newEvent, ticketPrice: e.target.value.replace(/[^0-9.]/g, "") })} placeholder="0.00" className={inputCls} /></div>
                  <div><label className={labelCls}>Available Qty</label><input value={newEvent.ticketQty} onChange={(e) => setNewEvent({ ...newEvent, ticketQty: e.target.value.replace(/\D/g, "") })} placeholder="100" className={inputCls} /></div>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <button onClick={() => setEventModalOpen(false)} className="px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button onClick={addEvent} disabled={!newEvent.title} className={btnPrimary}><Plus className="w-4 h-4" /> Add Event</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Staff Modal */}
      <Dialog open={staffModalOpen} onOpenChange={setStaffModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Team Member</DialogTitle>
            <DialogDescription>Add a new staff member profile.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-3">
              <input value={newStaff.name} onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} placeholder="Full name" className={inputCls} maxLength={80} />
              <input value={newStaff.role} onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })} placeholder="Role / title" className={inputCls} maxLength={80} />
            </div>
            <textarea value={newStaff.bio} onChange={(e) => setNewStaff({ ...newStaff, bio: e.target.value })} placeholder="Short bio..." rows={2} className={`${inputCls} resize-none`} maxLength={300} />
            <div>
              <label className={labelCls}>💰 Tip Link (Flex-It)</label>
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input value={newStaff.tipLink} onChange={(e) => setNewStaff({ ...newStaff, tipLink: e.target.value })} placeholder="https://flex-it.com/your-link" className={`${inputCls} pl-9`} maxLength={200} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <button onClick={() => setStaffModalOpen(false)} className="px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button onClick={addStaffMember} disabled={!newStaff.name} className={btnPrimary}><Plus className="w-4 h-4" /> Add Member</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Award Modal */}
      <Dialog open={awardModalOpen} onOpenChange={setAwardModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Award</DialogTitle>
            <DialogDescription>Add a new award or recognition.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <input value={newAward.title} onChange={(e) => setNewAward({ ...newAward, title: e.target.value })} placeholder="Award title" className={inputCls} maxLength={100} />
            <div className="grid grid-cols-2 gap-3">
              <input value={newAward.org} onChange={(e) => setNewAward({ ...newAward, org: e.target.value })} placeholder="Organization" className={inputCls} maxLength={80} />
              <input value={newAward.year} onChange={(e) => setNewAward({ ...newAward, year: e.target.value.replace(/\D/g, "") })} placeholder="Year" className={inputCls} maxLength={4} />
            </div>
            <input value={newAward.desc} onChange={(e) => setNewAward({ ...newAward, desc: e.target.value })} placeholder="Description" className={inputCls} maxLength={200} />
          </div>
          <DialogFooter>
            <button onClick={() => setAwardModalOpen(false)} className="px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button onClick={addAwardItem} disabled={!newAward.title} className={btnPrimary}><Plus className="w-4 h-4" /> Add Award</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Room Modal */}
      <Dialog open={roomModalOpen} onOpenChange={setRoomModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Private Dining Room</DialogTitle>
            <DialogDescription>Add a new dining room or space.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="flex gap-3">
              <ImageUploadBox image={newRoom.image} onChange={(v) => setNewRoom({ ...newRoom, image: v })} label="Room" />
              <div className="flex-1 space-y-3">
                <input value={newRoom.name} onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })} placeholder="Room name" className={inputCls} maxLength={60} />
                <input value={newRoom.capacity} onChange={(e) => setNewRoom({ ...newRoom, capacity: e.target.value })} placeholder="e.g. 8–12 guests" className={inputCls} maxLength={30} />
              </div>
            </div>
            <textarea value={newRoom.desc} onChange={(e) => setNewRoom({ ...newRoom, desc: e.target.value })} placeholder="Description" rows={2} className={`${inputCls} resize-none`} maxLength={200} />
          </div>
          <DialogFooter>
            <button onClick={() => setRoomModalOpen(false)} className="px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button onClick={addRoomItem} disabled={!newRoom.name} className={btnPrimary}><Plus className="w-4 h-4" /> Add Room</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add FAQ Modal */}
      <Dialog open={faqModalOpen} onOpenChange={setFaqModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add FAQ</DialogTitle>
            <DialogDescription>Add a frequently asked question.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <input value={newFaq.question} onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })} placeholder="Question" className={inputCls} maxLength={200} />
            <textarea value={newFaq.answer} onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })} placeholder="Answer" rows={3} className={`${inputCls} resize-none`} maxLength={500} />
          </div>
          <DialogFooter>
            <button onClick={() => setFaqModalOpen(false)} className="px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button onClick={addFAQItem} disabled={!newFaq.question} className={btnPrimary}><Plus className="w-4 h-4" /> Add FAQ</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Image URL Modal */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Image</DialogTitle>
            <DialogDescription>Paste an image URL below.</DialogDescription>
          </DialogHeader>
          <div className="py-2">
            <label className={labelCls}>Image URL</label>
            <input value={imageModalUrl} onChange={(e) => setImageModalUrl(e.target.value)} placeholder="https://example.com/image.jpg" className={inputCls} />
            {imageModalUrl && (
              <div className="mt-3 rounded-xl overflow-hidden border">
                <img src={imageModalUrl} alt="Preview" className="w-full h-32 object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
              </div>
            )}
          </div>
          <DialogFooter>
            <button onClick={() => setImageModalOpen(false)} className="px-4 py-2 rounded-xl text-sm text-muted-foreground hover:bg-muted transition-colors">Cancel</button>
            <button onClick={confirmImageModal} disabled={!imageModalUrl} className={btnPrimary}><Check className="w-4 h-4" /> Add Image</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </DashboardLayout>
  );
};

export default AdminPage;
