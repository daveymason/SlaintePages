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
import { CopyCodeBlock } from '@/components/CopyCodeBlock';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'Platform Architecture & Clinical Safety Engine | SlainteTech',
  description:
    'See how SlainteTech combines easy frontline clinical tools with tested Python safety rules, clean HL7 FHIR R4 records, and 5-minute private cloud or offline deployment.',
  path: '/platform/',
  ogImage: '/images/og/platform.png',
  ogImageAlt: 'SlainteTech 4-Layer Clinical Safety & FHIR R4 Platform',
});

const DOCKER_SNIPPET = `# Private hospital VPC or offline deployment (under 5 minutes)
git clone https://github.com/daveymason/slainte-engine.git
cd slainte-engine
cp .env.example .env
docker compose up -d --build

# Internal services started automatically:
# - Frontline Clinical Workspaces -> http://127.0.0.1:8000
# - Python Safety Gate Server     -> http://127.0.0.1:8081
# - SlainteFHIR R4 Patient Store  -> http://127.0.0.1:8082/fhir/r4`;

const PLATFORM_FAQS: FaqItem[] = [
  {
    question: 'Why are clinical scores and prescription safety checks isolated on port :8081?',
    answer:
      'Separating tested clinical math into the dedicated FastMCP Python server (:8081) ensures vital scoring (RCP NEWS2 0-20, Manchester Triage Cat 1-5), 3-Tier prescribing screening (drug-family cross-allergies, high-alert interactions, kidney eGFR/Potassium checks), and private-network locks never rely on statistical text guessing.',
  },
  {
    question: 'What database and audit protections sit inside Layer 4 (:8082)?',
    answer:
      'SlainteFHIR R4 stores patient resources inside CompartmentDefinition/Patient boundaries alongside a SQLite ledger containing audit_log, ai_exchange, and break_glass_grants tables protected by BEFORE UPDATE and BEFORE DELETE abort triggers, plus SHA-256 HL7 FHIR R4 Provenance hashes.',
  },
  {
    question: 'How does the frontend stay fast on hospital wards and older clinic PCs?',
    answer:
      'Layer 1 serves lightweight HTML views enhanced with sub-50ms HTMX swaps, avoiding bloated single-page client bundles, while supporting coarse-pointer 44px touch targets and WCAG 2.2 AA contrast ratios across phones, iPads, and ward workstations.',
  },
  {
    question: 'Can we run SlainteTech alongside Epic, Oracle Cerner, or MEDITECH instead of replacing them?',
    answer:
      'Yes. Connect read-only via SMART-on-FHIR v2 (PKCE S256 launch) or mirror hospital HL7v2 ADT/ORU/RDE feeds directly into POST /enterprise/hl7v2/ingest with zero disruption to existing clinical workflows.',
  },
];

export default function PlatformPage() {
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
            How the Platform Protects Patients &amp; Hospitals
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Faster Clinician Workflows Without Ever Guessing on Safety
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 760 }}>
            Generic tools send sensitive charts outside the clinic and hope text generation scores drug doses safely. SlainteTech draws a strict line: software drafts clinical paperwork fast to save clinicians hours, while proven medical rules compute every risk score, block unsafe prescriptions, and lock permanent audit logs.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="layers-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="layers-heading" sx={{ color: '#0F172A', mb: 1 }}>
            Four Practical Building Blocks Working Together
          </Typography>
          <Typography variant="body1" sx={{ color: '#334155', mb: 4, maxWidth: 740 }}>
            Designed so clinical leaders get calm day-to-day software while IT and security teams keep complete infrastructure control.
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                step: 'PART 01',
                title: 'Screens Tailored for 8 Care Settings',
                desc: 'Dedicated interfaces for Emergency Departments, GPs & Care-at-Home Nurses, Psychiatry, Dentistry, Pharmacy, Ambulance ePCR, Elite Sport, and Aerospace across desktop, iPad, and phones.',
              },
              {
                step: 'PART 02',
                title: '16 Safety, Coding & Cyber Modules',
                desc: 'Three coordinated teams handle security boundary testing (3 modules), revenue coding & compliance audits (5 modules), and frontline clinical care (8 modules).',
              },
              {
                step: 'PART 03',
                title: 'Rule-Based Safety Gatekeeper',
                desc: 'Checks emergency triage timing, sepsis early-warning scores, allergy cross-reactions, high-risk drug clashes, and kidney lab limits using tested rules instead of guesswork.',
              },
              {
                step: 'PART 04',
                title: 'Private Patient Record Core & Tamper-Proof Log',
                desc: 'Runs stand-alone or alongside legacy hospital systems, while sealing every clinical sign-off and security event into an unchangeable audit database.',
              },
            ].map((item) => (
              <Grid key={item.step} size={{ xs: 12, md: 6 }}>
                <Card className="slainte-surface-panel" sx={{ height: '100%', bgcolor: '#FFFFFF' }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 800, color: '#134E68' }}>
                      {item.step}
                    </Typography>
                    <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mt: 0.5, mb: 1.25 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334155' }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Paper elevation={0} sx={{ mt: 5, p: { xs: 3, md: 4 }, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 3 }}>
            <Typography component="h2" variant="h2" sx={{ color: '#0F172A', mb: 1.5 }}>
              Launch Inside Your Own Network in 5 Minutes
            </Typography>
            <Typography variant="body2" sx={{ color: '#334155', mb: 3 }}>
              Host completely inside your hospital private cloud, clinic server, or offline appliance, or plug in read-only beside Epic, Oracle Cerner, or MEDITECH.
            </Typography>
            <CopyCodeBlock caption="5-minute private server setup" code={DOCKER_SNIPPET} />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
              <Button
                component={Link}
                href="/docs/"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
              >
                Open Integration &amp; API Docs
              </Button>
              <Button component={Link} href="/health-tech-agents/" variant="outlined" color="primary">
                See All 16 Modules
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Architecture Technical FAQ"
        title="Technical Details, Ports & Hosting FAQ"
        subtitle="System architecture, HL7 FHIR R4 storage, SMART-on-FHIR v2 sidecar attachment, and offline hosting answers."
        items={PLATFORM_FAQS}
      />
    </Box>
  );
}
