import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Obrigado from "./pages/Obrigado";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Floating WhatsApp Button (right-fixed) */}
      <a
        href="https://wa.me/61996212692"
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 rounded-full shadow-glow bg-[hsl(var(--secondary))] text-secondary-foreground w-12 h-12 flex items-center justify-center text-base font-medium hover:opacity-90 transition"
        aria-label="Fale no WhatsApp"
        title="Fale no WhatsApp"
      >
        WA
      </a>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obrigado" element={<Obrigado />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
