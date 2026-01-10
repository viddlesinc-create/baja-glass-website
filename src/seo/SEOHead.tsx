import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOConfig } from './metaConfig';
import type { SEOMeta } from './types';

interface SEOHeadProps extends Partial<SEOMeta> {
  children?: React.ReactNode;
}

const BASE_URL = 'https://bajaglass.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'Baja Glass & Mirror';

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
  // Ensure homepage canonical has no trailing slash
  const canonical = canonicalOverride || config.canonical || 
    (pathname === '/' ? BASE_URL : `${BASE_URL}${pathname}`);
  const ogImage = ogImageOverride || config.ogImage || DEFAULT_OG_IMAGE;

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
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@baja_glass_lv" />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {children}
    </Helmet>
  );
}
