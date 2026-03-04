import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Microsite from "./pages/Microsite";
import Dashboard from "./pages/Dashboard";
import QRManagement from "./pages/dashboard/QRManagement";
import AffiliateDashboard from "./pages/dashboard/AffiliateDashboard";
import SubscriptionPage from "./pages/dashboard/SubscriptionPage";
import InfluencerPage from "./pages/dashboard/InfluencerPage";
import LoyaltyPage from "./pages/dashboard/LoyaltyPage";
import ReferralPage from "./pages/dashboard/ReferralPage";
import SEOPage from "./pages/dashboard/SEOPage";
import ReputationPage from "./pages/dashboard/ReputationPage";
import EnterprisePage from "./pages/dashboard/EnterprisePage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import MenuPage from "./pages/microsite/MenuPage";
import GalleryPage from "./pages/microsite/GalleryPage";
import ReviewsPage from "./pages/microsite/ReviewsPage";
import ConciergePage from "./pages/microsite/ConciergePage";
import StaffPage from "./pages/microsite/StaffPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/microsite" element={<Microsite />} />
          <Route path="/microsite/menu" element={<MenuPage />} />
          <Route path="/microsite/gallery" element={<GalleryPage />} />
          <Route path="/microsite/reviews" element={<ReviewsPage />} />
          <Route path="/microsite/concierge" element={<ConciergePage />} />
          <Route path="/microsite/staff" element={<StaffPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/qr" element={<QRManagement />} />
          <Route path="/dashboard/affiliates" element={<AffiliateDashboard />} />
          <Route path="/dashboard/subscription" element={<SubscriptionPage />} />
          <Route path="/dashboard/influencers" element={<InfluencerPage />} />
          <Route path="/dashboard/loyalty" element={<LoyaltyPage />} />
          <Route path="/dashboard/referrals" element={<ReferralPage />} />
          <Route path="/dashboard/seo" element={<SEOPage />} />
          <Route path="/dashboard/reputation" element={<ReputationPage />} />
          <Route path="/dashboard/enterprise" element={<EnterprisePage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
