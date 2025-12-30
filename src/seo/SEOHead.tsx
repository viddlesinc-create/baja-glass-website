import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOConfig } from './metaConfig';
import { SEOMeta } from './types';

interface SEOHeadProps extends Partial<SEOMeta> {
  children?: React.ReactNode;
}

export default function SEOHead({ 
  title: titleOverride,
  description: descriptionOverride,
  canonical: canonicalOverride,
  ogImage: ogImageOverride,
  noIndex,
  children 
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const config = getSEOConfig(pathname);

  const title = titleOverride || config.title;
  const description = descriptionOverride || config.description;
  const canonical = canonicalOverride || config.canonical;
  const ogImage = ogImageOverride || config.ogImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {children}
    </Helmet>
  );
}
