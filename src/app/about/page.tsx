import React from 'react';
import Link from 'next/link';
import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'About SlainteTech | Patient Safety & Healthcare Security',
  description:
    'SlainteTech builds verified clinical workflow software, rule-based prescription safety checks, and continuous healthcare API protection in Ireland.',
  path: '/about/',
  ogImage: '/images/og/slainte-og.png',
  ogImageAlt: 'About SlainteTech Clinical Safety & Healthcare Software',
});

const ABOUT_FAQS: FaqItem[] = [
  {
    question: 'What clinical safety standards guide SlainteTech engineering?',
    answer:
      'All acute physiology calculators (RCP NEWS2 0-20, Manchester Triage Category 1-5), 3-Tier Rx-Guard drug safety rules (allergy cross-reactivity, ISMP high-alert drug pairs, and LOINC eGFR renal limits), and permanent SQLite provenance logs are engineered to support UK/EU DCB0129 and DCB0160 clinical risk management files.',
  },
  {
    question: 'How does SlainteShield protect hospitals from API breaches and EU NIS2 penalties?',
    answer:
      'SlainteShield automates continuous BOLA cross-patient compartment fuzzing, HL7 FHIR R4 schema conformance checks exported in OASIS SARIF v2.1.0, dependency hash pinning, SRI script verification, and EU NIS2 Article 21 control audits.',
  },
  {
    question: 'Are all interfaces tested for screen readers, tablets, and mobile gloves?',
    answer:
      'Yes. Every public and operational UI complies with WCAG 2.2 AA contrast minimums (at least 4.5:1 body text), keyboard focus indicators, landmarks, and 44x44px coarse-pointer touch targets for ambulances, ward tablets, and house-call phones.',
  },
  {
    question: 'Where is SlainteTech based and how do hospitals deploy the platform?',
    answer:
      'SlainteTech is built in Ireland with zero dependency on external consumer cloud APIs. Hospitals and clinics deploy via Docker Compose in private EU/UK cloud VPCs, on-site clinic servers, or offline hardware appliances.',
  },
];

export default function AboutPage() {
  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{ bgcolor: '#0F172A', color: '#FFFFFF', py: { xs: 6, md: 8 }, borderBottom: '2px solid #38BDF8' }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
            Mission &amp; Principles
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Healthcare Software Built Around Patient Safety First
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 740 }}>
            Born from hands-on Irish healthcare integration and offensive API security work, SlainteTech follows one strict rule: triage scores, medication checks, and patient privacy must never rely on guesswork.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="principles-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="principles-heading" sx={{ color: '#0F172A', mb: 4 }}>
            Our Three Non-Negotiable Promises
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                title: 'Rule-Based Safety Gates Before Any Order Is Signed',
                text: 'Vital-sign scoring and drug allergy/kidney safety rules run in tested clinical code with zero hidden black-box math.',
              },
              {
                title: 'Always-On Security Testing Inside the Clinic',
                text: 'Healthcare APIs are prime ransomware and data-leak targets. Our built-in security suite constantly checks record locks, access permissions, and software dependencies.',
              },
              {
                title: 'Fast, Calm Screens for Real Frontline Work',
                text: 'Whether used by an Emergency Consultant at a workstation, a Care-at-Home Nurse on a phone, a Paramedic in a moving ambulance, or a medic at an offline station, the interface stays responsive and simple.',
              },
            ].map((p) => (
              <Grid key={p.title} size={{ xs: 12, md: 4 }}>
                <Card className="slainte-surface-panel" sx={{ height: '100%', bgcolor: '#FFFFFF' }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1.25 }}>
                      {p.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334155' }}>
                      {p.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 5 }}>
            <Button
              component={Link}
              href="/contact/"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
            >
              Talk With Our Engineering Team
            </Button>
            <Button component={Link} href="/verticals/" variant="outlined" color="primary">
              Explore Our 8 Care Settings
            </Button>
          </Stack>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Engineering & Governance FAQ"
        title="Clinical Safety, Compliance & Security Architecture FAQ"
        subtitle="Underlying safety rules, SlainteShield continuous verification, WCAG 2.2 AA accessibility standards, and hosting options."
        items={ABOUT_FAQS}
      />
    </Box>
  );
}
