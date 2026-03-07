import { useState } from "react";
import { QrCode, Link as LinkIcon, X, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const BottomBrandBar = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <div className="border-t bg-card px-4 py-4 mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowQR(true)}
              className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Show QR Code"
            >
              <QrCode className="w-5 h-5 text-primary" />
            </button>
            <div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <LinkIcon className="w-3 h-3" />
                <span>auralink.io/bellavista</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                toast.success("Link copied to clipboard!");
              }}
              className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
            Powered by <span className="font-display text-primary">AuraLink</span>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-card rounded-3xl p-6 max-w-xs w-full shadow-2xl border relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-muted flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-4">
                <h3 className="font-display text-lg font-semibold">Scan to Visit</h3>
                <p className="text-xs text-muted-foreground">Point your camera at the QR code to open Bella Vista's page</p>

                {/* QR Code SVG */}
                <div className="mx-auto w-48 h-48 bg-background rounded-2xl border-2 border-primary/20 p-3 flex items-center justify-center">
                  <svg viewBox="0 0 256 256" className="w-full h-full">
                    {/* QR Code pattern */}
                    <rect width="256" height="256" fill="white" />
                    {/* Position detection patterns */}
                    <rect x="16" y="16" width="56" height="56" fill="hsl(var(--primary))" />
                    <rect x="24" y="24" width="40" height="40" fill="white" />
                    <rect x="32" y="32" width="24" height="24" fill="hsl(var(--primary))" />
                    
                    <rect x="184" y="16" width="56" height="56" fill="hsl(var(--primary))" />
                    <rect x="192" y="24" width="40" height="40" fill="white" />
                    <rect x="200" y="32" width="24" height="24" fill="hsl(var(--primary))" />
                    
                    <rect x="16" y="184" width="56" height="56" fill="hsl(var(--primary))" />
                    <rect x="24" y="192" width="40" height="40" fill="white" />
                    <rect x="32" y="200" width="24" height="24" fill="hsl(var(--primary))" />
                    
                    {/* Data modules */}
                    {[
                      [88,16],[96,16],[112,16],[128,16],[144,16],[160,16],
                      [88,24],[120,24],[152,24],
                      [88,32],[96,32],[104,32],[112,32],[128,32],[136,32],[152,32],[160,32],
                      [88,40],[128,40],[160,40],
                      [88,48],[96,48],[112,48],[120,48],[136,48],[144,48],[160,48],
                      [88,56],[128,56],
                      [16,88],[24,88],[32,88],[48,88],[56,88],[88,88],[104,88],[120,88],[136,88],[152,88],[168,88],[184,88],[200,88],[216,88],[232,88],
                      [16,96],[48,96],[72,96],[96,96],[128,96],[160,96],[192,96],[224,96],
                      [24,104],[40,104],[56,104],[80,104],[104,104],[120,104],[144,104],[168,104],[184,104],[208,104],[232,104],
                      [16,112],[32,112],[64,112],[88,112],[112,112],[136,112],[152,112],[176,112],[200,112],[224,112],
                      [24,120],[48,120],[72,120],[96,120],[120,120],[144,120],[168,120],[192,120],[216,120],
                      [16,128],[40,128],[56,128],[80,128],[104,128],[128,128],[152,128],[176,128],[200,128],[224,128],[232,128],
                      [32,136],[48,136],[64,136],[88,136],[112,136],[136,136],[160,136],[184,136],[208,136],
                      [16,144],[24,144],[40,144],[56,144],[72,144],[96,144],[120,144],[144,144],[168,144],[192,144],[216,144],[232,144],
                      [16,152],[48,152],[80,152],[104,152],[128,152],[152,152],[184,152],[208,152],
                      [24,160],[40,160],[64,160],[88,160],[112,160],[136,160],[160,160],[176,160],[200,160],[224,160],
                      [88,168],[96,168],[112,168],[128,168],[152,168],[168,168],[192,168],[216,168],
                      [184,184],[200,184],[216,184],[232,184],
                      [184,192],[216,192],
                      [184,200],[192,200],[200,200],[208,200],[224,200],[232,200],
                      [184,208],[224,208],
                      [184,216],[192,216],[200,216],[208,216],[216,216],[224,216],[232,216],
                    ].map(([x, y], i) => (
                      <rect key={i} x={x} y={y} width="8" height="8" fill="hsl(var(--primary))" />
                    ))}
                  </svg>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium">Bella Vista</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <LinkIcon className="w-3 h-3" />
                    <span>auralink.io/bellavista</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowQR(false)}
                  className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomBrandBar;
