import { useNavigate } from "react-router-dom";
import { ArrowLeft, Instagram, Facebook, Twitter, Youtube, Globe, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, label: "Instagram", handle: "@bellavistanyc", url: "#", color: "bg-gradient-to-br from-pink-500 to-purple-600" },
  { icon: Facebook, label: "Facebook", handle: "BellaVistaNewYork", url: "#", color: "bg-blue-600" },
  { icon: Twitter, label: "X (Twitter)", handle: "@bellavista_nyc", url: "#", color: "bg-foreground" },
  { icon: Youtube, label: "YouTube", handle: "Bella Vista Kitchen", url: "#", color: "bg-red-600" },
  { icon: MessageCircle, label: "TikTok", handle: "@bellavistanyc", url: "#", color: "bg-foreground" },
  { icon: Globe, label: "Website", handle: "bellavistanyc.com", url: "#", color: "bg-primary" },
  { icon: Mail, label: "Newsletter", handle: "Subscribe for updates", url: "#", color: "bg-primary" },
];

const SocialLinksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-[430px] mx-auto">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/microsite")} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="font-display text-lg font-semibold">Social Links</h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.url}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-3 p-4 rounded-2xl bg-card border hover:border-primary/30 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center`}>
              <s.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm">{s.label}</h3>
              <p className="text-xs text-muted-foreground truncate">{s.handle}</p>
            </div>
            <ArrowLeft className="w-4 h-4 text-muted-foreground rotate-180" />
          </motion.a>
        ))}
      </div>
      <div className="h-8" />
    </div>
  );
};

export default SocialLinksPage;
