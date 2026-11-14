import React from 'react';
import Link from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { HEALTH_TECH_AGENTS } from '@/data/agentsData';
import { AgentSolutionCard } from '@/components/AgentSolutionCard';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: '16 Clinical & Security Modules Gallery | SlainteTech',
  description:
    'Browse live screenshots and practical buyer summaries for all 16 SlainteTech safety, coding, and cybersecurity modules.',
  path: '/agents/',
  ogImage: '/images/og/agents/bola-authorization-red-team-agent.png',
  ogImageAlt: 'SlainteTech All 16 Clinical & Security Modules Gallery',
});

const AGENTS_ALIAS_FAQS: FaqItem[] = [
  {
    question: 'What is the difference between /agents/ and /health-tech-agents/?',
    answer:
      'This gallery shows all 16 live modules side-by-side in one scrollable view, while /health-tech-agents/ lets teams filter by Security, Governance & Coding, or Frontline Clinical teams and inspect full module specifications.',
  },
  {
    question: 'Are the screenshots shown real captures from SlainteDash?',
    answer:
      'Yes. Every preview image is captured directly from our running SlainteDash application executing live safety checks, clinical patient records, and audit outputs.',
  },
  {
    question: 'How do these modules interact with tested clinical math instead of guessing?',
    answer:
      'Clinical scores (RCP NEWS2, Manchester Triage 1-5) and prescribing screenings (allergy cross-reactivity, ISMP drug pairs, kidney eGFR/Potassium checks) execute inside unit-tested Python functions on FastMCP (:8081).',
  },
  {
    question: 'Can we trial individual modules before deploying a full clinic workspace?',
    answer:
      'Yes. Hospital buyers regularly start with read-only security probes (SlainteShield-BOLA / FHIR) and HIPE billing audits (SlainteRev-Coding) via SMART-on-FHIR v2 within 15 minutes.',
  },
];

export default function AgentsAliasPage() {
  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{ bgcolor: '#0F172A', color: '#FFFFFF', py: { xs: 6, md: 8 }, borderBottom: '2px solid #38BDF8' }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            All 16 Clinical &amp; Security Modules at a Glance
          </Typography>
          <Typography variant="body1" sx={{ color: '#CBD5E1', mb: 3, maxWidth: 680 }}>
            Inspect real software screenshots for every module below, or filter by squad inside our main interactive directory.
          </Typography>
          <Button
            component={Link}
            href="/health-tech-agents/"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
          >
            Open Filterable Squad Directory
          </Button>
        </Container>
      </Box>

      <Box component="section" aria-label="All 16 modules" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {HEALTH_TECH_AGENTS.map((agent) => (
              <Grid key={agent.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                <AgentSolutionCard agent={agent} headingLevel="h2" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Modules FAQ"
        title="Technical & Deployment FAQ for SlainteTech Modules"
        subtitle="Details on clinical math verification, live screenshots, and read-only hospital trials."
        items={AGENTS_ALIAS_FAQS}
      />
    </Box>
  );
}
