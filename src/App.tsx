import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { BreadcrumbNav } from "./components/BreadcrumbNav";
import RedirectComponent from "./components/RedirectComponent";
import QueryParameterRedirects from "./components/QueryParameterRedirects";
import { SEOHead } from "./seo";
import { usePageTracking } from "./hooks/usePageTracking";

// Landing pages (standalone, no header/footer)
const FramelessShowerLanding = lazy(() => import("./pages/landing/FramelessShowerLanding"));

// Eagerly load critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for code splitting
const GlassCompanyLasVegas = lazy(() => import("./pages/GlassCompanyLasVegas"));
const ShowerDoorsHub = lazy(() => import("./pages/ShowerDoorsHub"));
const FramelessShowerDoors = lazy(() => import("./pages/FramelessShowerDoors"));
const SemiFramelessShowerDoors = lazy(() => import("./pages/SemiFramelessShowerDoors"));
const SlidingShowerDoors = lazy(() => import("./pages/SlidingShowerDoors"));
const HingedShowerDoors = lazy(() => import("./pages/HingedShowerDoors"));
const CustomEnclosures = lazy(() => import("./pages/CustomEnclosures"));
const SteamShowerEnclosures = lazy(() => import("./pages/SteamShowerEnclosures"));

const ShowerEnclosuresLasVegas = lazy(() => import("./pages/ShowerEnclosuresLasVegas"));
const Gallery = lazy(() => import("./pages/Gallery"));
const AreasServed = lazy(() => import("./pages/AreasServed"));
const About = lazy(() => import("./pages/About"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const Reviews = lazy(() => import("./pages/Reviews"));
const ResidentialGlassRepair = lazy(() => import("./pages/ResidentialGlassRepair"));
const OfficeEnclosures = lazy(() => import("./pages/OfficeEnclosures"));
const FAQ = lazy(() => import("./pages/FAQ"));
const ShowerDoorReplacement = lazy(() => import("./pages/ShowerDoorReplacement"));
const ShowerDoorInstallationLasVegas = lazy(() => import("./pages/ShowerDoorInstallationLasVegas"));


// Location pages
const ShowerDoorsHenderson = lazy(() => import("./pages/locations/ShowerDoorsHenderson"));
const ShowerDoorsSummerlin = lazy(() => import("./pages/locations/ShowerDoorsSummerlin"));
const ShowerDoorsParadise = lazy(() => import("./pages/locations/ShowerDoorsParadise"));
const ShowerDoorsSpringValley = lazy(() => import("./pages/locations/ShowerDoorsSpringValley"));
const ShowerDoorsEnterprise = lazy(() => import("./pages/locations/ShowerDoorsEnterprise"));
const ShowerDoorsGreenValley = lazy(() => import("./pages/locations/ShowerDoorsGreenValley"));

// Blog pages
const Blog = lazy(() => import("./pages/Blog"));
const GlassCareGuide = lazy(() => import("./pages/blog/GlassCareGuide"));
const ChoosingRightDoor = lazy(() => import("./pages/blog/ChoosingRightDoor"));
const InstallationProcess = lazy(() => import("./pages/blog/InstallationProcess"));
const WarrantyInformation = lazy(() => import("./pages/blog/WarrantyInformation"));
const ShowerDoorCostGuide = lazy(() => import("./pages/blog/ShowerDoorCostGuide"));
const FramelessVsSemiFrameless = lazy(() => import("./pages/blog/FramelessVsSemiFrameless"));
const HardWaterSolutions = lazy(() => import("./pages/blog/HardWaterSolutions"));

function App() {
  usePageTracking();
  const location = useLocation();
  
  // Check if current route is a landing page (no header/footer)
  const isLandingPage = location.pathname.startsWith('/lp/');

  // Render landing pages without header/footer
  if (isLandingPage) {
    return (
      <>
        <SEOHead />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/lp/frameless-shower-doors" element={<FramelessShowerLanding />} />
          </Routes>
        </Suspense>
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
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/shower-door-installation-las-vegas" element={<ShowerDoorInstallationLasVegas />} />
              <Route path="/shower-door-replacement-las-vegas" element={<RedirectComponent to="/shower-door-installation-las-vegas" />} />
              <Route path="/custom-shower-doors-las-vegas" element={<RedirectComponent to="/shower-doors-las-vegas" />} />
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
              
              <Route path="/shower-doors-las-vegas/semi-frameless" element={<SemiFramelessShowerDoors />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
