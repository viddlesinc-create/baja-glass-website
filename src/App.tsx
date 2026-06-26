import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import { SEOHead } from "./seo";
import { usePageTracking } from "./hooks/usePageTracking";

// Landing pages (standalone, no header/footer). These are the ONLY routes a
// /lp/* visitor can reach, so the entry chunk stays limited to them.
const FramelessShowerLanding = lazy(() => import("./pages/landing/FramelessShowerLanding"));
const FramelessShowerDoorsLVLanding = lazy(() => import("./pages/landing/FramelessShowerDoorsLVLanding"));
const LuxuryShowerEnclosuresLanding = lazy(() => import("./pages/landing/LuxuryShowerEnclosuresLanding"));
const ShowerDoorInstallationLVLanding = lazy(() => import("./pages/landing/ShowerDoorInstallationLVLanding"));
const ShowerDoorInstallationNearMeLanding = lazy(() => import("./pages/landing/ShowerDoorInstallationNearMeLanding"));
const SteamShowerInstallationLVLanding = lazy(() => import("./pages/landing/SteamShowerInstallationLVLanding"));
const CustomShowerEnclosuresLVLanding = lazy(() => import("./pages/landing/CustomShowerEnclosuresLVLanding"));

// The entire main site (homepage + header/footer/nav + all non-landing routes)
// is one lazy chunk so paid /lp/* landing pages never download or execute it.
const MainSite = lazy(() => import("./MainSite"));

function App() {
  usePageTracking();
  const location = useLocation();

  // Render landing pages without header/footer
  if (location.pathname.startsWith('/lp/')) {
    return (
      <>
        <SEOHead />
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/lp/frameless-shower-doors" element={<FramelessShowerLanding />} />
            <Route path="/lp/frameless-shower-doors-lv" element={<FramelessShowerDoorsLVLanding />} />
            <Route path="/lp/luxury-shower-enclosures" element={<LuxuryShowerEnclosuresLanding />} />
            <Route path="/lp/shower-door-installation-lv" element={<ShowerDoorInstallationLVLanding />} />
            <Route path="/lp/shower-door-installation-near-me" element={<ShowerDoorInstallationNearMeLanding />} />
            <Route path="/lp/steam-shower-installation-lv" element={<SteamShowerInstallationLVLanding />} />
            <Route path="/lp/custom-shower-enclosures-lv" element={<CustomShowerEnclosuresLVLanding />} />
          </Routes>
        </Suspense>
      </>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <MainSite />
    </Suspense>
  );
}

export default App;
