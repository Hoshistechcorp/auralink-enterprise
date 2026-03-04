import { QrCode, Link as LinkIcon } from "lucide-react";

const BottomBrandBar = () => {
  return (
    <div className="border-t bg-card px-4 py-4 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <QrCode className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <LinkIcon className="w-3 h-3" />
              <span>auralink.io/bellavista</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground font-medium">
          Powered by <span className="font-display text-primary">AuraLink</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBrandBar;
