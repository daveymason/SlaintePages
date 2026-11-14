import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'Investors & Strategic Rationale | SlainteTech',
  description:
    'Why SlainteTech wins regulated healthcare software: EU NIS2 and clinical safety compliance tailwinds, rule-based patient safety, and 8 clinical verticals on one platform.',
  path: '/investors/',
  ogImage: '/images/og/slainte-og.png',
  ogImageAlt: 'SlainteTech Investor Thesis & Market Defensibility',
});

const INVESTOR_FAQS: FaqItem[] = [
  {
    question: 'Why does the split between Layer 2 workflows and the :8081 safety server create a real regulatory moat?',
    answer:
      'Hospital Clinical Safety Officers evaluating UK/EU DCB0129/0160 or HIQA governance reject software that relies on unverified text prediction for patient scoring or drug dosing. SlainteTech enforces every NEWS2 (0-20), Manchester Triage (Cat 1-5), and 3-Tier Rx-Guard decision in unit-tested Python code on port :8081.',
  },
  {
    question: 'What is the land-and-expand unit economics of the 15-minute sidecar?',
    answer:
      'Instead of facing 18-to-36-month EHR replacement tenders, hospitals land on Tier 2 (€48k-€95k/yr) using SMART-on-FHIR v2 PKCE S256 read-only connection in 15 minutes. Uncovered HIPE DRG comorbidities and NIS2 BOLA/SARIF verification quickly establish budget ROI, paving expansion into clinical workspaces.',
  },
  {
    question: 'How does one engineering codebase serve 8 healthcare markets efficiently?',
    answer:
      'Emergency Dept, GP & Home Care, Psychiatry, Dentistry, Pharmacy, Ambulance ePCR, Elite Sport, and Aerospace share the identical FastMCP safety kernel (:8081), SlainteFHIR R4 patient core (:8082), OIDC/RBAC middleware, and HTMX rendering patterns while swapping domain terminology, KPIs, and device ergonomics cleanly.',
  },
  {
    question: 'What objective proof exists in the repository today for technical due diligence?',
    answer:
      'The core slainte-engine codebase ships with 344+ automated clinical and cybersecurity regression tests, OASIS SARIF v2.1.0 security reports, Docker Compose private-cloud builds, SMART-on-FHIR v2 discovery metadata, and working interactive sandboxes for every vertical and module.',
  },
];

export default function InvestorsPage() {
  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{
          bgcolor: '#0F172A',
          backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 8 },
          borderBottom: '2px solid #38BDF8',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
            Institutional Investor &amp; Strategic Partner Brief
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Healthcare Software That Clinical Safety Boards Can Actually Approve
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 760 }}>
            Healthcare systems face mandatory EU NIS2 cybersecurity deadlines and strict patient safety sign-off while frontline staff drown in paperwork. SlainteTech solves compliance, revenue recovery, and clinician overload in one unified platform.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="moats-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="moats-heading" sx={{ color: '#0F172A', mb: 4 }}>
            Four Defensible Business Advantages
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: '1. Clinical Math That Passes Hospital Sign-Off',
                body: 'Most lightweight software wrappers fail hospital clinical safety review because they ask open-ended text models to judge vital signs and medication doses. SlainteTech calculates emergency triage, sepsis risk, and drug checks through tested medical rules.',
              },
              {
                title: '2. 15-Minute Hospital Entry With Immediate CFO Payback',
                body: 'Rather than waiting years to win core EHR replacement contracts, SlainteTech attaches read-only alongside existing hospital systems in 15 minutes to catch API security leaks and recover uncoded inpatient billing.',
              },
              {
                title: '3. One Core Platform Across Eight Healthcare Verticals',
                body: 'Emergency wards, GP clinics, psychiatry, dental chains, pharmacies, ambulance tablets, pro sport teams, and remote habitats all run on the same core engine, multiplying addressable revenue without bloated R&D teams.',
              },
              {
                title: '4. Private Network & Offline Deployment Built In',
                body: 'Runs inside a hospital trust private cloud or isolated local server so zero patient data leaves the facility, removing cross-border privacy blockers across the EU and UK.',
              },
            ].map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <Card className="slainte-surface-panel" sx={{ height: '100%', bgcolor: '#FFFFFF' }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1.25 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334155' }}>
                      {item.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Paper elevation={0} sx={{ mt: 5, p: 4, bgcolor: '#0F172A', color: '#FFFFFF', borderRadius: 3, border: '1px solid #38BDF8' }}>
            <Typography component="h2" variant="h2" sx={{ color: '#FFFFFF', mb: 1.5 }}>
              Working Software Ready for Technical Due Diligence Today
            </Typography>
            <Typography variant="body1" sx={{ color: '#CBD5E1', mb: 3, maxWidth: 740 }}>
              No slideware promises. Inspect 344+ automated clinical and security tests, reproducible private cloud builds, standard security reports, and live workspaces across all 8 care settings and 16 modules.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                component={Link}
                href="/contact/"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                sx={{ border: '1px solid #7DD3FC' }}
              >
                Request Investor Data Room &amp; Walkthrough
              </Button>
              <Button
                component={Link}
                href="/verticals/"
                variant="outlined"
                sx={{ color: '#FFFFFF', borderColor: '#94A3B8', '&:hover': { borderColor: '#FFFFFF' } }}
              >
                Explore All 8 Care Settings
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Technical Due-Diligence FAQ"
        title="Architecture, Clinical Safety & Defensibility FAQ"
        subtitle="Technical verification details covering FastMCP determinism, OASIS SARIF outputs, SMART-on-FHIR v2 wedge mechanics, and multi-vertical architecture."
        items={INVESTOR_FAQS}
      />
    </Box>
  );
}
