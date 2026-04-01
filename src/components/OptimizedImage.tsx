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


/**
 * Check if we're running on Netlify (production)
 */
const isNetlify = () => {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname;
  return hostname.includes('netlify.app') || 
         hostname.includes('bajaglass.com') ||
         hostname.includes('shopglass.com');
};

/**
 * Generates Netlify Image CDN URL for optimized image delivery
 * Supports WebP and AVIF formats for modern browsers
 */
const getNetlifyImageUrl = (src: string, width: number, format?: 'webp' | 'avif') => {
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
  // Generate appropriate widths based on the target width
  const widths = width <= 200 
    ? [width, width * 2, width * 3].filter(w => w <= 600) // For small images like logos
    : [400, 800, 1200, 1920].filter(w => w <= width * 2); // For larger images
  const useNetlify = isNetlify();
  const [fallbackToOriginal, setFallbackToOriginal] = useState(false);

  // In development (or if the Image CDN endpoint fails), just use the original image
  if (!useNetlify || fallbackToOriginal) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
      />
    );
  }

  // Generate srcset for AVIF format (smallest file size, best for modern browsers)
  const avifSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w, 'avif')} ${w}w`)
    .join(', ');

  // Generate srcset for WebP format (fallback for browsers without AVIF)
  const webpSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w, 'webp')} ${w}w`)
    .join(', ');

  // Generate srcset for original format (final fallback)
  const fallbackSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w)} ${w}w`)
    .join(', ');

  return (
    <picture>
      {/* AVIF format - smallest file size, best for modern browsers */}
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      {/* WebP format - fallback for browsers without AVIF */}
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      {/* Original format - final fallback */}
      <source srcSet={fallbackSrcSet} sizes={sizes} />
      <img
        src={getNetlifyImageUrl(src, 1200)}
        alt={alt}
        className={className}
        width={width}
        height={height}
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onError={() => setFallbackToOriginal(true)}
      />
    </picture>
  );
};


export default OptimizedImage;
