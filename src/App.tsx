import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Questionnaire from './pages/Questionnaire';
import PatientQuestionnaire from "./pages/PatientQuestionnaire";
import ResearcherQuestionnaire from "./pages/ResearcherQuestionnaire";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/questionnaire/patient" element={<PatientQuestionnaire />} />
          <Route path="/questionnaire/researcher" element={<ResearcherQuestionnaire />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
