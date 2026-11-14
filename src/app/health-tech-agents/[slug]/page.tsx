import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import { HEALTH_TECH_AGENTS, getAgentBySlug } from '@/data/agentsData';
import { AgentCanonicalTemplate } from '@/components/AgentCanonicalTemplate';
import { buildPageMetadata } from '@/utils/seo';

export function generateStaticParams() {
  return HEALTH_TECH_AGENTS.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) {
    return buildPageMetadata({
      title: 'Module Not Found | SlainteTech',
      description: 'Requested SlainteTech module was not found.',
      path: '/health-tech-agents/',
    });
  }
  return buildPageMetadata({
    title: agent.seoTitle,
    description: agent.seoDescription,
    path: `/health-tech-agents/${agent.slug}/`,
    ogImage: `/images/og/agents/${agent.slug}.png`,
    ogImageAlt: `${agent.name} (${agent.codeName}) Live Console`,
  });
}

export default async function HealthTechAgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) {
    notFound();
  }
  return <AgentCanonicalTemplate agent={agent} />;
}
