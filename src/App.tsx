import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import DonatePage from "./pages/DonatePage";
import ProgramsPage from "./pages/ProgramsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ThalassemiaPage from "./pages/ThalassemiaPage";
import MedicineDistributionPage from "./pages/MedicineDistributionPage";
import EducationVocationalTrainingPage from "./pages/EducationVocationalTrainingPage";
import AwarenessCampaignsPage from "./pages/AwarenessCampaignsPage";
import TeamThalassemiaFightersPage from "./pages/TeamThalassemiaFightersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/*
        IMPORTANT:
        Using basename={import.meta.env.BASE_URL} keeps routing working if the app is hosted
        in a subfolder (e.g. https://example.com/hadya/).
      */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/thalassemia" element={<ThalassemiaPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/medicine-distribution" element={<MedicineDistributionPage />} />
          <Route path="/programs/education-vocational-training" element={<EducationVocationalTrainingPage />} />
          <Route path="/programs/awareness-campaigns" element={<AwarenessCampaignsPage />} />
          <Route path="/programs/team-thalassemia-fighters" element={<TeamThalassemiaFightersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
