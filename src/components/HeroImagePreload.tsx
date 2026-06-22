import { Helmet } from "react-helmet-async";
import { getHeroPreloadSrcSet } from "@/components/OptimizedImage";

interface HeroImagePreloadProps {
  /** Original image src (same value passed to the hero OptimizedImage) */
  src: string;
  /** Intrinsic width passed to the hero OptimizedImage (drives srcset widths) */
  width?: number;
  /** Same `sizes` the hero uses (default full-width hero) */
  sizes?: string;
}

/**
 * Emits a high-priority LCP preload for a page's hero image that matches the
 * exact Netlify Image CDN WebP candidates the hero <picture> renders. Drop one
 * instance per page next to its hero. Helmet hoists it into <head> at SSR time,
 * so the prerendered HTML preloads the correct hero (and nothing else).
 */
const HeroImagePreload = ({ src, width = 1920, sizes = "100vw" }: HeroImagePreloadProps) => {
  const imagesrcset = getHeroPreloadSrcSet(src, width);
  return (
    <Helmet>
      <link
        rel="preload"
        as="image"
        type="image/webp"
        imagesrcset={imagesrcset}
        imagesizes={sizes}
        fetchpriority="high"
      />
    </Helmet>
  );
};

export default HeroImagePreload;
