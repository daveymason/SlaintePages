import React from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';
import { ContactFormClient } from './ContactFormClient';

export const metadata = buildPageMetadata({
  title: 'Book a 30-Day Clinical & Security Pilot | SlainteTech',
  description:
    'Start a zero-disruption 30-day hospital SMART-on-FHIR v2 pilot, clinic deployment, or executive platform walkthrough with SlainteTech.',
  path: '/contact/',
  ogImage: '/images/og/slainte-og.png',
  ogImageAlt: 'Book a 30-Day Pilot with SlainteTech',
});

const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'Do you need write access to our live hospital EHR during a 30-day pilot?',
    answer:
      'No. Tier 2 pilots connect using read-only SMART-on-FHIR v2 scopes (launch/patient, patient/*.read with PKCE S256) or operate against a de-identified synthetic / HL7v2 staging mirror inside your hospital network.',
  },
  {
    question: 'What deliverables do IT, Finance, and Clinical leaders receive at day 30?',
    answer:
      'You receive an OASIS SARIF v2.1.0 security report with BOLA and FHIR R4 conformance findings, an executive EU NIS2 Article 21 gap certificate, and a quantified HIPE / ICD-10-AM missed DRG complexity recovery summary.',
  },
  {
    question: 'How is OIDC single sign-on tested during the pilot?',
    answer:
      'You can point OIDC_DISCOVERY_URL to a test tenant in Microsoft Entra ID, Keycloak, or Okta so your information security team verifies role-based claims enforcement (consultant, gp, pharmacist, admin) directly.',
  },
  {
    question: 'Can we test SlainteTech on-premise with zero external internet traffic?',
    answer:
      'Yes. We provide a self-contained Docker Compose appliance bundle for Linux hosts inside your firewall or offline evaluation lab.',
  },
];

export default function ContactPage() {
  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{ bgcolor: '#0F172A', color: '#FFFFFF', py: { xs: 6, md: 8 }, borderBottom: '2px solid #38BDF8' }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
            30-Day Hospital Pilots • Security Audits • Clinic Walkthroughs
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Go Live in 15 Minutes With Zero Disruption to Your Existing System
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 720 }}>
            Run SlainteTech safely beside Epic, Cerner, MEDITECH, or your clinic software and uncover chart security gaps, missed billing revenue, and prescribing risks within weeks.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-label="Contact and pilot booking" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 7 }}>
              <ContactFormClient />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2.5}>
                <Paper elevation={0} sx={{ p: 3, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5 }}>
                  <Typography component="h2" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                    What Happens in a 30-Day Pilot?
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155' }}>
                    Week 1: Connect read-only beside your staging or test feed. Week 2: Run security lock checks, chart standards scans, and missed-billing reviews. Week 3 to 4: Deliver an executive NIS2 readiness score and quantified revenue recovery report.
                  </Typography>
                </Paper>
                <Paper elevation={0} sx={{ p: 3, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5 }}>
                  <Typography component="h2" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                    Direct Engineering &amp; Investor Contact
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155', mb: 1 }}>
                    Clinical Pilots, Security &amp; Investor Relations:{' '}
                    <strong>
                      <a href="mailto:hello@slainte-tech.com" style={{ color: '#134E68' }}>
                        hello@slainte-tech.com
                      </a>
                    </strong>
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#475569' }}>
                    Include your track (Pilot, Security Audit, or Investor Data Room) in the subject line for priority routing.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Pilot Setup & Security FAQ"
        title="Onboarding, Access Scopes & Firewall FAQ"
        subtitle="Technical answers covering read-only SMART-on-FHIR v2 scopes, OASIS SARIF deliverables, OIDC testing, and offline bundles."
        items={CONTACT_FAQS}
      />
    </Box>
  );
}
