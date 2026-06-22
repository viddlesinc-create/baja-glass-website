import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

const isSSR = typeof window === 'undefined';

/**
 * Check if we're running on Netlify (production)
 */
const isNetlify = () => {
  if (isSSR) return false;
  const hostname = window.location.hostname;
  return hostname.includes('netlify.app') || 
         hostname.includes('bajaglass.com') ||
         hostname.includes('shopglass.com');
};

/**
 * Generates Netlify Image CDN URL for optimized image delivery
 */
export const getNetlifyImageUrl = (src: string, width: number, format?: 'webp' | 'avif') => {
  const params = new URLSearchParams({
    url: src,
    w: width.toString(),
    fit: 'cover',
  });
  
  if (format) {
    params.set('fm', format);
  }
  
  return `/.netlify/images?${params.toString()}`;
};

/**
 * Builds the WebP srcset string a hero <picture> renders, so a matching
 * <link rel="preload" imagesrcset> can be emitted without a mismatched fetch.
 * Mirrors the width logic used in OptimizedImage's SSR/Netlify branches.
 */
export const getHeroPreloadSrcSet = (src: string, width = 1920) => {
  const widths = width <= 200
    ? [width, width * 2, width * 3].filter(w => w <= 600)
    : [400, 800, 1200, 1920].filter(w => w <= width * 2);
  return widths.map(w => `${getNetlifyImageUrl(src, w, 'webp')} ${w}w`).join(', ');
};

/**
 * OptimizedImage component with responsive srcset and WebP support
 * Uses Netlify Image CDN for automatic optimization in production
 * Falls back to original image in development
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width = 1920,
  height = 1080,
  sizes = '100vw',
  priority = false,
}: OptimizedImageProps) => {
  const [fallbackToOriginal, setFallbackToOriginal] = useState(false);

  // During SSR, use Netlify CDN URLs so prerendered HTML points to optimized images
  if (isSSR) {
    const ssrWidths = width <= 200
      ? [width, width * 2, width * 3].filter(w => w <= 600)
      : [400, 800, 1200, 1920].filter(w => w <= width * 2);
    const ssrWebpSrcSet = ssrWidths
      .map(w => `${getNetlifyImageUrl(src, w, 'webp')} ${w}w`)
      .join(', ');
    return (
      <picture>
        <source type="image/webp" srcSet={ssrWebpSrcSet} sizes={sizes} />
        <img
          src={getNetlifyImageUrl(src, 1200, 'webp')}
          alt={alt}
          className={className}
          width={width}
          height={height}
          fetchpriority={priority ? 'high' : 'auto'}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
        />
      </picture>
    );
  }

  if (!isNetlify() || fallbackToOriginal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        fetchpriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
      />
    );
  }

  // Generate appropriate widths based on the target width
  const widths = width <= 200 
    ? [width, width * 2, width * 3].filter(w => w <= 600)
    : [400, 800, 1200, 1920].filter(w => w <= width * 2);

  const avifSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w, 'avif')} ${w}w`)
    .join(', ');

  const webpSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w, 'webp')} ${w}w`)
    .join(', ');

  const fallbackSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w)} ${w}w`)
    .join(', ');

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <source srcSet={fallbackSrcSet} sizes={sizes} />
      <img
        src={getNetlifyImageUrl(src, 1200)}
        alt={alt}
        className={className}
        width={width}
        height={height}
        fetchpriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setFallbackToOriginal(true)}
      />
    </picture>
  );
};

export default OptimizedImage;
