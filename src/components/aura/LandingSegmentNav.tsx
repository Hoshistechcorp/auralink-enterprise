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
        className="relative inline-flex items-center rounded-full border-2 border-[#111] bg-[#FFF7ED] p-1 shadow-[0_4px_0_0_#111]"
        role="tablist"
        aria-label="Switch landing experience"
      >
        {/* Sliding indicator */}
        <div
          className={cn(
            "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[#111] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
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
                "relative z-10 flex items-center gap-2 px-5 sm:px-7 py-2 rounded-full text-[13px] font-bold transition-colors duration-300 whitespace-nowrap",
                isActive ? "text-[#C6F432]" : "text-[#111]/60 hover:text-[#111]"
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
