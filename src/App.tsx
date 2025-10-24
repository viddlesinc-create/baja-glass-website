import * as React from "react";
import { Routes, Route } from "react-router-dom";
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
import GlassCareGuide from "./pages/blog/GlassCareGuide";
import ChoosingRightDoor from "./pages/blog/ChoosingRightDoor";
import InstallationProcess from "./pages/blog/InstallationProcess";
import WarrantyInformation from "./pages/blog/WarrantyInformation";
import ResidentialGlassRepair from "./pages/ResidentialGlassRepair";
import OfficeEnclosures from "./pages/OfficeEnclosures";
import RedirectComponent from "./components/RedirectComponent";
import QueryParameterRedirects from "./components/QueryParameterRedirects";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BreadcrumbNav } from "./components/BreadcrumbNav";

function App() {
  return (
    <>
      <QueryParameterRedirects />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <BreadcrumbNav />
        <main id="main-content" className="flex-1">
          <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/glass-company-las-vegas" element={<GlassCompanyLasVegas />} />
                <Route path="/glass-company-las-vegas/residential-glass-repair" element={<ResidentialGlassRepair />} />
                <Route path="/glass-company-las-vegas/office-enclosures" element={<OfficeEnclosures />} />
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
                <Route path="/blog/glass-care-guide" element={<GlassCareGuide />} />
                <Route path="/blog/choosing-right-door" element={<ChoosingRightDoor />} />
                <Route path="/blog/installation-process" element={<InstallationProcess />} />
                <Route path="/blog/warranty-information" element={<WarrantyInformation />} />
                
                {/* Legacy WordPress redirects */}
                <Route path="/services" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
                <Route path="/services/*" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
                <Route path="/contact-us" element={<RedirectComponent to="/contact" />} />
                <Route path="/contact-us/*" element={<RedirectComponent to="/contact" />} />
                
                {/* Semi-frameless URL variations */}
                <Route path="/shower-doors-las-vegas/semi-frameless" element={<RedirectComponent to="/shower-doors-las-vegas/semi-frameless-framed" />} />
                
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
