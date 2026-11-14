import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import { INDUSTRY_VERTICALS, getVerticalBySlug } from '@/data/verticalsData';
import { VerticalUniqueTemplate } from '@/components/VerticalUniqueTemplate';
import { buildPageMetadata } from '@/utils/seo';

export function generateStaticParams() {
  return INDUSTRY_VERTICALS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) {
    return buildPageMetadata({
      title: 'Vertical Not Found | SlainteTech',
      description: 'Requested clinical care vertical was not found.',
      path: '/verticals/',
    });
  }
  return buildPageMetadata({
    title: vertical.seoTitle,
    description: vertical.seoDescription,
    path: `/verticals/${vertical.slug}/`,
    ogImage: `/images/og/verticals/${vertical.slug}.png`,
    ogImageAlt: `${vertical.brand} (${vertical.forLabel}) Live SlainteDash Workspace`,
  });
}

export default async function VerticalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);
  if (!vertical) {
    notFound();
  }
  return <VerticalUniqueTemplate vertical={vertical} />;
}
