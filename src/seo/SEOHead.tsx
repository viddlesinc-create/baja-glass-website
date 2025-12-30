import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOConfig } from './metaConfig';
import type { SEOMeta } from './types';

interface SEOHeadProps extends Partial<SEOMeta> {
  children?: React.ReactNode;
}

const BASE_URL = 'https://bajaglass.com';

export default function SEOHead({
  title: titleOverride,
  description: descriptionOverride,
  canonical: canonicalOverride,
  ogImage: ogImageOverride,
  noIndex,
  children,
}: SEOHeadProps) {
  const { pathname } = useLocation();
  const config = getSEOConfig(pathname);

  const title = titleOverride || config.title;
  const description = descriptionOverride || config.description;
  const canonical = canonicalOverride || config.canonical || `${BASE_URL}${pathname}`;
  const ogImage = ogImageOverride || config.ogImage;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {children}
    </Helmet>
  );
}
