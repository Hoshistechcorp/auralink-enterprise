import DestinationSubPage from "@/components/aura/DestinationSubPage";
import { Camera, Upload, Heart } from "lucide-react";

const PhotoMemoriesPage = () => (
  <DestinationSubPage title="Photo Memories">
    <div className="text-center py-8">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Camera className="w-8 h-8 text-primary" />
      </div>
      <h2 className="font-display text-xl font-bold mb-2">Share Your Atlanta Moments</h2>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
        Powered by PicPop — upload your travel photos and see what other visitors are sharing.
      </p>
      <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity">
        <Upload className="w-4 h-4" /> Upload Photos
      </button>
    </div>

    <div className="mt-8">
      <h3 className="font-display font-semibold mb-3">Recent Visitor Photos</h3>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-muted flex items-center justify-center">
            <Camera className="w-5 h-5 text-muted-foreground/40" />
          </div>
        ))}
      </div>
      <p className="text-xs text-center text-muted-foreground mt-3">
        <Heart className="w-3 h-3 inline" /> 1,247 photos shared by visitors
      </p>
    </div>
  </DestinationSubPage>
);

export default PhotoMemoriesPage;
