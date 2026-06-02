import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, ShieldCheck } from "lucide-react";
import type { LegalSection } from "@/lib/legalContent";

type LegalDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: "terms" | "privacy";
  title: string;
  effective: string;
  version: string;
  sections: LegalSection[];
};

export const LegalDialog = ({
  open,
  onOpenChange,
  variant,
  title,
  effective,
  version,
  sections,
}: LegalDialogProps) => {
  const Icon = variant === "terms" ? FileText : ShieldCheck;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-4.5 h-4.5 text-primary" />
            </div>
            <div className="text-left">
              <DialogTitle className="text-lg font-display">{title}</DialogTitle>
              <DialogDescription className="text-xs mt-0.5">
                Effective {effective} · v{version}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="px-6 py-5 space-y-6">
            {sections.map((s) => (
              <section key={s.id}>
                <h3 className="text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              </section>
            ))}
          </div>
        </ScrollArea>
        <div className="px-6 py-3 border-t border-border bg-muted/30 text-xs text-muted-foreground text-center">
          Scroll to read in full · By checking the box you agree to these terms
        </div>
      </DialogContent>
    </Dialog>
  );
};
