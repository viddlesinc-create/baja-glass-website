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
 * Generates Netlify Image CDN URL for optimized image delivery
 * Automatically serves WebP to supported browsers
 */
const getNetlifyImageUrl = (src: string, width: number, format?: 'webp' | 'avif') => {
  // For local images, use Netlify's Image CDN
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
 * Uses Netlify Image CDN for automatic optimization
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
  const widths = [400, 800, 1200, 1920];
  
  // Generate srcset for WebP format
  const webpSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w, 'webp')} ${w}w`)
    .join(', ');
  
  // Generate srcset for original format (fallback)
  const fallbackSrcSet = widths
    .map(w => `${getNetlifyImageUrl(src, w)} ${w}w`)
    .join(', ');

  return (
    <picture>
      {/* WebP format - primary for modern browsers */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      {/* Original format fallback */}
      <source
        srcSet={fallbackSrcSet}
        sizes={sizes}
      />
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
    </picture>
  );
};

export default OptimizedImage;
