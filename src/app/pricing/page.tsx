import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'Pricing & Licensing | SlainteTech',
  description:
    'Transparent licensing for GP and dental clinics, 15-minute hospital security and billing sidecars, and private offline healthcare deployments.',
  path: '/pricing/',
  ogImage: '/images/og/slainte-og.png',
  ogImageAlt: 'SlainteTech Commercial Pricing & Licensing',
});

const TIERS = [
  {
    name: 'Tier 1: Clinic & Practice Edition',
    badge: 'GP, Dental, Psych & Pharmacy',
    price: '€199 - €499',
    unit: 'per clinician / site / month',
    summary:
      'Complete clinical workspace for GP surgeries, dental groups, psychiatry clinics, community nurses, and pharmacies.',
    features: [
      'Your choice of dedicated vertical (SlainteGP, SlainteDent, SlaintePsych, or SlaintePharm)',
      'Fast hands-free visit notes turned into structured drafts ready for sign-off',
      'Built-in allergy, high-risk drug interaction, and kidney dose checks',
      'Clean touch-friendly layout for desktop PCs, iPads, and phones on house calls',
      'Monthly Irish HSE GMS billing export with automated patient privacy redaction',
    ],
  },
  {
    name: 'Tier 2: Hospital Security & Coding Sidecar',
    badge: 'Most Popular for Hospitals',
    price: '€48,000 - €95,000',
    unit: 'annual site license',
    summary:
      'Connects read-only beside Epic, Cerner, or MEDITECH in 15 minutes with zero disruption to doctors or nurses.',
    features: [
      'Continuous patient chart privacy testing and API vulnerability checks',
      'Automated chart review to flag missed billable complexity before discharge coding',
      'Tamper-proof security audit ledger and one-click board compliance certificates',
      'Connects cleanly to hospital single sign-on and SOC alert tools',
      'Often pays for itself within 90 days through recovered hospital billing codes',
    ],
    highlighted: true,
  },
  {
    name: 'Tier 3: Private Cloud or Offline Edition',
    badge: 'Acute Hospitals, EMS & Defence',
    price: 'Custom Enterprise',
    unit: 'private cloud or offline hardware',
    summary:
      'Full 8-setting, 16-module platform running inside your own data centre or offline hardware with legacy hospital bridges.',
    features: [
      'All 8 care settings including Emergency Dept, Ambulance Tablet ePCR, and Aerospace',
      'All 16 clinical, coding, and cybersecurity modules on one unified platform',
      'Built-in legacy hospital message bridge for patient admissions, labs, and orders',
      'Zero data leaves your building with optional 100% offline deployment',
      'Dedicated clinical safety engineering support for hospital sign-off',
    ],
  },
];

const PRICING_FAQS: FaqItem[] = [
  {
    question: 'What is included in Tier 2 vs Tier 3 technically?',
    answer:
      'Tier 2 runs as a SMART-on-FHIR v2 read-only sidecar hosting SlainteShield Security (:8081/:8000), SlainteRev-Coding HIPE/ICD-10-AM analysis, OASIS SARIF v2.1.0 outputs, OIDC SSO (Keycloak/Entra/Okta), HMAC-SHA256 SIEM webhooks, and append-only SQLite governance logs. Tier 3 unlocks the full HL7 FHIR R4 SlainteFHIR :8082 store, HL7v2 MSH/PID/AL1/OBX ingestion bridge, and all 8 clinical verticals.',
  },
  {
    question: 'Why does the Hospital Sidecar often reach payback under 90 days?',
    answer:
      'Acute hospitals routinely miss secondary comorbidities (CC/MCC modifiers) in discharge summaries, reducing HIPE / DRG reimbursement. SlainteRev-Coding flags supported clinical evidence directly from chart data before final billing submission.',
  },
  {
    question: 'Can GP practices export monthly HSE PCRS / GMS claim batches?',
    answer:
      'Yes. Tier 1 includes built-in HSE PCRS monthly GMS batch CSV exports along with GDPR Article 9 automated PII masking for cross-clinic reporting.',
  },
  {
    question: 'Are there per-API-call fees or hidden egress costs?',
    answer:
      'No. All licensing is predictable per clinician/site (Tier 1) or per hospital site/private cloud instance (Tiers 2 and 3) with unlimited rule-based safety checks, NEWS2/MTS calculations, and security scans inside your licensed environment.',
  },
];

export default function PricingPage() {
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
            Simple Licensing • Fast ROI • Zero EHR Disruption
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Start in 15 Minutes Beside Your Existing EHR. Scale When Ready.
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 740 }}>
            You do not need a 3-year system replacement to protect patient charts, prove NIS2 security compliance, or recover missed hospital billing. Launch as a quiet read-only sidecar, or run complete clinic workspaces on day one.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="tiers-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="tiers-heading" sx={{ color: '#0F172A', mb: 4 }}>
            Licensing Plans for Clinics, Hospitals &amp; Enterprise Fleets
          </Typography>

          <Grid container spacing={3} alignItems="stretch">
            {TIERS.map((tier) => (
              <Grid key={tier.name} size={{ xs: 12, md: 4 }}>
                <Card
                  className="slainte-interactive-card"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: '#FFFFFF',
                    border: tier.highlighted ? '2px solid #1B6B8D' : '1px solid #CBD5E1',
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Chip
                      label={tier.badge}
                      color={tier.highlighted ? 'primary' : 'default'}
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                      {tier.name}
                    </Typography>
                    <Typography sx={{ fontSize: '1.85rem', fontWeight: 800, color: '#134E68' }}>
                      {tier.price}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#334155', display: 'block', mb: 2, fontWeight: 700 }}>
                      {tier.unit}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334155', mb: 2.5 }}>
                      {tier.summary}
                    </Typography>

                    <Stack component="ul" role="list" spacing={1.25} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                      {tier.features.map((feat) => (
                        <Stack component="li" key={feat} direction="row" spacing={1} alignItems="flex-start">
                          <CheckCircleRoundedIcon sx={{ color: '#15803D', fontSize: 19, mt: 0.25, flexShrink: 0 }} aria-hidden="true" />
                          <Typography variant="body2" sx={{ color: '#0F172A', fontSize: '0.88rem' }}>
                            {feat}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ px: 3.5, pb: 3.5, pt: 1 }}>
                    <Button
                      component={Link}
                      href="/contact/"
                      variant={tier.highlighted ? 'contained' : 'outlined'}
                      color="primary"
                      fullWidth
                      endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                    >
                      Book a 30-Day Pilot
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Procurement & Technical FAQ"
        title="Licensing, Integration & Infrastructure FAQ"
        subtitle="Technical specifications for sidecar vs core deployment, OIDC identity mapping, HSE PCRS billing exports, and clinical safety engineering."
        items={PRICING_FAQS}
      />
    </Box>
  );
}
