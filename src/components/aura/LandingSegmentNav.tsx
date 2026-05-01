import { useNavigate, useLocation } from "react-router-dom";
import { Building2, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const segments = [
  { label: "Enterprise", path: "/enterprise", icon: Building2 },
  { label: "Tourism Board", path: "/tourism", icon: Globe2 },
] as const;

const LandingSegmentNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePath =
    segments.find((s) => s.path === location.pathname)?.path ?? "/enterprise";

  return (
    <div className="flex items-center justify-center py-2.5">
      <div
        className="relative inline-flex items-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl p-1 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/5"
        role="tablist"
        aria-label="Switch landing experience"
      >
        {/* Sliding indicator */}
        <div
          className={cn(
            "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[#C9A35B] to-[#E8C886] shadow-[0_4px_20px_-4px_rgba(201,163,91,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            activePath === "/tourism" ? "translate-x-full" : "translate-x-0"
          )}
          aria-hidden
        />
        {segments.map((seg) => {
          const isActive = activePath === seg.path;
          const Icon = seg.icon;
          return (
            <button
              key={seg.path}
              onClick={() => navigate(seg.path)}
              role="tab"
              aria-selected={isActive}
              className={cn(
                "relative z-10 flex items-center gap-2 px-5 sm:px-7 py-2 rounded-full text-[13px] font-semibold transition-colors duration-300 whitespace-nowrap",
                isActive
                  ? "text-[#1B1310]"
                  : "text-white/70 hover:text-white"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              {seg.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LandingSegmentNav;
