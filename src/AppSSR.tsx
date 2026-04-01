/**
 * SSR-only App component — all page imports are EAGER (no React.lazy).
 * Used exclusively by entry-server.tsx during SSG prerendering so that
 * renderToString() produces full page HTML instead of the Suspense fallback.
 *
 * Keep route definitions in sync with App.tsx.
 */
import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BreadcrumbNav } from "./components/BreadcrumbNav";
import RedirectComponent from "./components/RedirectComponent";
import QueryParameterRedirects from "./components/QueryParameterRedirects";
import { SEOHead } from "./seo";
import { usePageTracking } from "./hooks/usePageTracking";

// Landing pages
import FramelessShowerLanding from "./pages/landing/FramelessShowerLanding";

// All pages — eagerly imported for SSR
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
import ShowerEnclosuresLasVegas from "./pages/ShowerEnclosuresLasVegas";
import Gallery from "./pages/Gallery";
import AreasServed from "./pages/AreasServed";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import Reviews from "./pages/Reviews";
import ResidentialGlassRepair from "./pages/ResidentialGlassRepair";
import OfficeEnclosures from "./pages/OfficeEnclosures";
import FAQ from "./pages/FAQ";

// Location pages
import ShowerDoorsHenderson from "./pages/locations/ShowerDoorsHenderson";
import ShowerDoorsSummerlin from "./pages/locations/ShowerDoorsSummerlin";
import ShowerDoorsParadise from "./pages/locations/ShowerDoorsParadise";
import ShowerDoorsSpringValley from "./pages/locations/ShowerDoorsSpringValley";
import ShowerDoorsEnterprise from "./pages/locations/ShowerDoorsEnterprise";
import ShowerDoorsGreenValley from "./pages/locations/ShowerDoorsGreenValley";

// Blog pages
import Blog from "./pages/Blog";
import GlassCareGuide from "./pages/blog/GlassCareGuide";
import ChoosingRightDoor from "./pages/blog/ChoosingRightDoor";
import InstallationProcess from "./pages/blog/InstallationProcess";
import WarrantyInformation from "./pages/blog/WarrantyInformation";
import ShowerDoorCostGuide from "./pages/blog/ShowerDoorCostGuide";
import FramelessVsSemiFrameless from "./pages/blog/FramelessVsSemiFrameless";
import HardWaterSolutions from "./pages/blog/HardWaterSolutions";

function AppSSR() {
  usePageTracking();
  const location = useLocation();

  const isLandingPage = location.pathname.startsWith('/lp/');

  if (isLandingPage) {
    return (
      <>
        <SEOHead />
        <ScrollToTop />
        <Routes>
          <Route path="/lp/frameless-shower-doors" element={<FramelessShowerLanding />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <SEOHead />
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
            <Route path="/shower-doors-las-vegas/repair" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
            <Route path="/shower-enclosures-las-vegas" element={<ShowerEnclosuresLasVegas />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/areas-served" element={<AreasServed />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/custom-shower-doors-las-vegas" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
            <Route path="/shower-door-installation-las-vegas" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
            <Route path="/shower-doors-henderson-nv" element={<ShowerDoorsHenderson />} />
            <Route path="/shower-doors-summerlin-nv" element={<ShowerDoorsSummerlin />} />
            <Route path="/shower-doors-paradise-nv" element={<ShowerDoorsParadise />} />
            <Route path="/shower-doors-spring-valley-nv" element={<ShowerDoorsSpringValley />} />
            <Route path="/shower-doors-enterprise-nv" element={<ShowerDoorsEnterprise />} />
            <Route path="/shower-doors-green-valley-nv" element={<ShowerDoorsGreenValley />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/glass-care-guide" element={<GlassCareGuide />} />
            <Route path="/blog/choosing-right-door" element={<ChoosingRightDoor />} />
            <Route path="/blog/installation-process" element={<InstallationProcess />} />
            <Route path="/blog/warranty-information" element={<WarrantyInformation />} />
            <Route path="/blog/shower-door-installation-cost-las-vegas" element={<ShowerDoorCostGuide />} />
            <Route path="/blog/frameless-vs-semi-frameless-shower-doors" element={<FramelessVsSemiFrameless />} />
            <Route path="/blog/las-vegas-water-quality-shower-glass-hard-water-solutions" element={<HardWaterSolutions />} />
            
            {/* Legacy WordPress redirects */}
            <Route path="/services" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
            <Route path="/services/*" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
            <Route path="/contact-us" element={<RedirectComponent to="/contact" />} />
            <Route path="/contact-us/*" element={<RedirectComponent to="/contact" />} />
            
            {/* Semi-frameless URL variations */}
            <Route path="/shower-doors-las-vegas/semi-frameless" element={<RedirectComponent to="/shower-doors-las-vegas/semi-frameless-framed" />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AppSSR;
