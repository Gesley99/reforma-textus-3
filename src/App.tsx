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
      {/* WhatsApp Button (right-fixed, animated) */}
      <a
        href="https://wa.me/61996212692"
        target="_blank"
        rel="noreferrer"
        className="group fixed right-4 top-1/2 -translate-y-1/2 z-50 rounded-full shadow-glow bg-[hsl(var(--secondary))] text-secondary-foreground h-12 flex items-center justify-center text-sm font-medium transition-all hover:-translate-x-2"
        aria-label="Fale no WhatsApp"
        title="Fale no WhatsApp"
        style={{ width: "3rem" }}
      >
        <span className="px-4 hidden group-hover:inline whitespace-nowrap">
          Solicite seu trabalho pelo nosso WhatsApp
        </span>
        <span className="w-12 inline-flex items-center justify-center">WP</span>
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
