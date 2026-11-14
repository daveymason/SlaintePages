import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import Link from 'next/link';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { CopyCodeBlock } from '@/components/CopyCodeBlock';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'Machine-Readable Platform Indexes (/llms.txt) | SlainteTech',
  description:
    'Access SlainteTech structured technical references (/llms.txt and /llms-full.txt), canonical XML sitemap, and search engine crawler policies.',
  path: '/llms/',
  ogImage: '/images/og/slainte-og.png',
  ogImageAlt: 'SlainteTech /llms.txt, /llms-full.txt & Sitemap Hub',
});

const LLMS_HUB_FAQS: FaqItem[] = [
  {
    question: 'What is the difference between /llms.txt and /llms-full.txt?',
    answer:
      '/llms.txt provides a concise Markdown navigation directory listing every SlainteTech care setting, safety module, pricing tier, and core page with canonical https://slainte-tech.com/ URLs. /llms-full.txt expands every module, protocol standard, compliance rule, and technical boundary into a complete single-file specification.',
  },
  {
    question: 'How does /sitemap.xml map the full public platform?',
    answer:
      'Generated statically at build time from our central vertical and module registries, /sitemap.xml lists all canonical HTML endpoints across core product pages, the 8 clinical care settings (/verticals/[slug]/), and the 16 safety and cybersecurity modules (/health-tech-agents/[slug]/).',
  },
  {
    question: 'Which crawlers and search indexers are permitted in /robots.txt?',
    answer:
      'All standard search engine crawlers and documentation indexers (including GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, and Applebot-Extended) are explicitly allowed, with direct Sitemap, LLMs-Txt, and LLMs-Full-Txt header links.',
  },
  {
    question: 'Are raw .txt and .xml endpoints served cleanly over static hosting?',
    answer:
      'Yes. Both /llms.txt, /llms-full.txt, /robots.txt, and /sitemap.xml are emitted as standalone static files alongside /llms/index.html, and every page header includes <link rel="alternate" type="text/plain"> discovery metadata.',
  },
];

export default function LlmsHubPage() {
  const llmsTxtContent = fs.readFileSync(path.join(process.cwd(), 'public', 'llms.txt'), 'utf-8');

  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{
          bgcolor: '#0F172A',
          backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #134E68 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 8 },
          borderBottom: '2px solid #38BDF8',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
            Machine-Readable Documentation &amp; Crawler Index
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Platform Technical Indexes (/llms.txt &amp; /sitemap.xml)
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 760, mb: 3 }}>
            Open raw plain-text specifications, full architectural documentation, and XML route maps directly, or inspect the complete platform index below.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} flexWrap="wrap" useFlexGap>
            <Button
              component="a"
              href="/llms.txt"
              variant="contained"
              color="primary"
              endIcon={<OpenInNewRoundedIcon aria-hidden="true" />}
              sx={{ border: '1px solid #7DD3FC' }}
            >
              Open Raw /llms.txt
            </Button>
            <Button
              component="a"
              href="/llms-full.txt"
              variant="contained"
              color="primary"
              endIcon={<OpenInNewRoundedIcon aria-hidden="true" />}
              sx={{ bgcolor: '#1E293B', '&:hover': { bgcolor: '#334155' }, border: '1px solid #7DD3FC' }}
            >
              Open Full /llms-full.txt
            </Button>
            <Button
              component="a"
              href="/sitemap.xml"
              variant="outlined"
              sx={{ color: '#FFFFFF', borderColor: '#94A3B8', '&:hover': { borderColor: '#FFFFFF' } }}
            >
              View /sitemap.xml
            </Button>
            <Button
              component="a"
              href="/robots.txt"
              variant="outlined"
              sx={{ color: '#FFFFFF', borderColor: '#94A3B8', '&:hover': { borderColor: '#FFFFFF' } }}
            >
              View /robots.txt
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="index-preview-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5, height: '100%' }}>
                <Typography component="h2" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                  Concise Index (`/llms.txt`)
                </Typography>
                <Typography variant="body2" sx={{ color: '#334155', mb: 2 }}>
                  Structured Markdown directory covering all 8 verticals, 16 safety modules, and company pages.
                </Typography>
                <Button component="a" href="/llms.txt" variant="outlined" color="primary" size="small">
                  Open /llms.txt
                </Button>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5, height: '100%' }}>
                <Typography component="h2" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                  Full Spec (`/llms-full.txt`)
                </Typography>
                <Typography variant="body2" sx={{ color: '#334155', mb: 2 }}>
                  Complete single-file technical, commercial pricing, compliance matrix, and endpoint reference.
                </Typography>
                <Button component="a" href="/llms-full.txt" variant="outlined" color="primary" size="small">
                  Open /llms-full.txt
                </Button>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5, height: '100%' }}>
                <Typography component="h2" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                  Hospital IT API Docs
                </Typography>
                <Typography variant="body2" sx={{ color: '#334155', mb: 2 }}>
                  SMART-on-FHIR v2 PKCE S256 launch, HL7v2 ingestion, and OIDC identity role mapping examples.
                </Typography>
                <Button
                  component={Link}
                  href="/docs/"
                  variant="contained"
                  color="primary"
                  size="small"
                  endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                >
                  Open /docs/
                </Button>
              </Paper>
            </Grid>
          </Grid>

          <Typography component="h2" variant="h2" id="index-preview-heading" sx={{ color: '#0F172A', mb: 2 }}>
            Live Contents of /llms.txt
          </Typography>
          <CopyCodeBlock caption="https://slainte-tech.com/llms.txt" code={llmsTxtContent} />
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="GEO & Indexing Technical FAQ"
        title="Discovery, Sitemap & Crawler Configuration FAQ"
        subtitle="Details on /llms.txt formatting, automated /sitemap.xml generation, and explicit crawler permissions in /robots.txt."
        items={LLMS_HUB_FAQS}
      />
    </Box>
  );
}
