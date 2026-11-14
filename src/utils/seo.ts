import type { Metadata } from 'next';

export const SITE_URL = 'https://slainte-tech.com';
export const DEFAULT_OG_IMAGE = '/images/og/slainte-og.png';
export const OG_CACHE_VERSION = '20261114b';

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
}

/**
 * Builds complete, route-specific SEO, Canonical, Open Graph, and Twitter Card metadata.
 * Ensures every statically exported page emits its exact canonical URL and a 1200x630 PNG card.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = title,
  keywords,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const baseImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
  const absoluteImageUrl = baseImageUrl.includes('?')
    ? baseImageUrl
    : `${baseImageUrl}?v=${OG_CACHE_VERSION}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      types: {
        'text/plain': [
          { url: `${SITE_URL}/llms.txt`, title: 'SlainteTech LLMs Index' },
          { url: `${SITE_URL}/llms-full.txt`, title: 'SlainteTech Complete Technical Reference' },
        ],
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'SlainteTech',
      locale: 'en_IE',
      type: 'website',
      images: [
        {
          url: absoluteImageUrl,
          secureUrl: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: absoluteImageUrl,
          alt: ogImageAlt,
        },
      ],
    },
  };
}
