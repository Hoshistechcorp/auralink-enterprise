import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const segments = [
  { label: "User", path: "/" },
  { label: "Enterprise", path: "/enterprise" },
  { label: "Tourism Board", path: "/tourism" },
] as const;

const LandingSegmentNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = segments.find((s) => s.path === location.pathname)?.path ?? "/";

  return (
    <div className="flex items-center justify-center py-4">
      <div className="inline-flex items-center rounded-xl border border-border bg-card p-1 shadow-sm">
        {segments.map((seg) => {
          const isActive = activePath === seg.path;
          return (
            <button
              key={seg.path}
              onClick={() => navigate(seg.path)}
              className={cn(
                "px-5 sm:px-8 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              )}
            >
              {seg.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LandingSegmentNav;
