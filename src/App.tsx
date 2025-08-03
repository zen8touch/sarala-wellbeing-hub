
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceDetails from "./pages/ServiceDetails";
import Assessment from "./pages/Assessment";
import Blog from "./pages/Blog";
import SocialSkillEvaluation from "./pages/SocialSkillEvaluation";
import AdolescentSelfAwareness from "./pages/AdolescentSelfAwareness";
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
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/social-skill-evaluation" element={<SocialSkillEvaluation />} />
          <Route path="/adolescent-self-awareness" element={<AdolescentSelfAwareness />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
