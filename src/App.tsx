import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GlassCompanyLasVegas from "./pages/GlassCompanyLasVegas";
import ShowerDoorsHub from "./pages/ShowerDoorsHub";
import FramelessShowerDoors from "./pages/FramelessShowerDoors";
import SemiFramelessShowerDoors from "./pages/SemiFramelessShowerDoors";
import SlidingShowerDoors from "./pages/SlidingShowerDoors";
import HingedShowerDoors from "./pages/HingedShowerDoors";
import CustomEnclosures from "./pages/CustomEnclosures";
import SteamShowerEnclosures from "./pages/SteamShowerEnclosures";
import ShowerGlassRepair from "./pages/ShowerGlassRepair";
import Gallery from "./pages/Gallery";
import AreasServed from "./pages/AreasServed";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/glass-company-las-vegas" element={<GlassCompanyLasVegas />} />
              <Route path="/shower-doors-las-vegas" element={<ShowerDoorsHub />} />
              <Route path="/shower-doors-las-vegas/frameless" element={<FramelessShowerDoors />} />
              <Route path="/shower-doors-las-vegas/semi-frameless-framed" element={<SemiFramelessShowerDoors />} />
              <Route path="/shower-doors-las-vegas/sliding" element={<SlidingShowerDoors />} />
              <Route path="/shower-doors-las-vegas/hinged" element={<HingedShowerDoors />} />
              <Route path="/shower-doors-las-vegas/custom-enclosures" element={<CustomEnclosures />} />
              <Route path="/shower-doors-las-vegas/steam-enclosures" element={<SteamShowerEnclosures />} />
              <Route path="/shower-doors-las-vegas/repair" element={<ShowerGlassRepair />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/areas-served" element={<AreasServed />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
