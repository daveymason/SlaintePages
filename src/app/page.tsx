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
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { HEALTH_TECH_AGENTS } from '@/data/agentsData';
import { INDUSTRY_VERTICALS } from '@/data/verticalsData';
import { AgentSolutionCard } from '@/components/AgentSolutionCard';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'SlainteTech | Safer Care, Recovered Hospital Funding & Proven API Security',
  description:
    'Save clinician charting hours, catch unsafe prescriptions automatically, recover missed hospital HIPE funding, and prove EU NIS2 cybersecurity compliance across 8 care settings.',
  path: '/',
  ogImage: '/images/og/slainte-og.png',
  ogImageAlt: 'SlainteTech Clinical Safety, Hospital Revenue Integrity & API Security Platform',
});

const HOME_TECHNICAL_FAQS: FaqItem[] = [
  {
    question: 'Do we have to rip out Epic, Oracle Cerner, MEDITECH, or our clinic system to use SlainteTech?',
    answer:
      'No. You can connect SlainteTech alongside your existing EHR in 15 minutes via read-only SMART-on-FHIR v2 (supporting RFC 7636 S256 PKCE launch at /.well-known/smart-configuration) or mirror legacy HL7v2 ADT/ORU/RDE feeds at POST /enterprise/hl7v2/ingest with zero disruption to live clinical systems.',
  },
  {
    question: 'Why does SlainteTech compute triage scores and drug checks in Python rules instead of text generation?',
    answer:
      'Hospital clinical safety boards (such as DCB0129/0160 and HIQA reviewers) will not approve unverified text prediction for patient doses or sepsis scoring. Our FastMCP Safety Server (:8081) runs RCP NEWS2 (0-20), Manchester Triage (Cat 1-5), and 3-Tier Rx-Guard (Beta-Lactam/NSAID/Sulfa cross-reactivity, ISMP high-alert drug pairs, and LOINC eGFR/Potassium checks) inside unit-tested Python code in under 10 milliseconds.',
  },
  {
    question: 'How does the HL7 FHIR R4 core handle legacy data, coding units, and patient matching?',
    answer:
      'SlainteFHIR (:8082) stores clinical resources cleanly in Patient Compartments using SNOMED-CT, LOINC, UCUM dosage units (http://unitsofmeasure.org), and Irish GMS identifiers (urn:oid:1.3.6.1.4.1.54392.5.2690.42.80). SlainteGov-Onboard and SlainteShield-FHIR validate imports upfront and output OASIS SARIF v2.1.0 quality reports.',
  },
  {
    question: 'How do you prove security and GDPR Article 9 compliance to hospital CISOs and regulators?',
    answer:
      'All audit_log, ai_exchange, and break_glass_grants SQLite tables are locked with BEFORE UPDATE and BEFORE DELETE abort triggers so history can never be altered. SlainteShield-BOLA continuously verifies OWASP API1:2023 tenant isolation, SlainteGov-GDPR strips direct identifiers before external processing, and SlainteGov-NIS2 issues board-ready EU NIS2 Article 21 certificates alongside HMAC-SHA256 SIEM webhooks.',
  },
  {
    question: 'Can we host everything inside our hospital private cloud or completely offline?',
    answer:
      'Yes. The full platform deploys via Docker Compose inside a hospital VPC, clinic server, or air-gapped field workstation (web UI :8000, safety engine :8081, local FHIR store :8082) with 0 bytes of required external internet traffic.',
  },
  {
    question: 'How is the software tested before each release?',
    answer:
      'Our core engine ships with 344+ automated pytest security, RBAC, prescribing safety, HL7 FHIR R4 conformance, and per-vertical patient-cohort tests alongside WCAG 2.2 AA accessibility and coarse-pointer 44px touch-target checks.',
  },
];

export default function HomePage() {
  return (
    <Box>
      {/* HERO */}
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{
          bgcolor: '#0F172A',
          backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #133B54 65%, #0F291E 100%)',
          color: '#FFFFFF',
          py: { xs: 7, md: 10 },
          borderBottom: '2px solid #38BDF8',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2.5 }}>
                <Chip
                  label="16 Clinical & Cyber Modules"
                  color="primary"
                  size="small"
                  sx={{ border: '1px solid #7DD3FC' }}
                />
                <Chip
                  label="8 Care Settings"
                  size="small"
                  sx={{ bgcolor: '#1E293B', color: '#F8FAFC', border: '1px solid #475569' }}
                />
                <Chip
                  label="Desktop • Tablet • Mobile Care-at-Home"
                  size="small"
                  sx={{ bgcolor: '#0F291E', color: '#DCFCE7', border: '1px solid #4ADE80' }}
                />
              </Stack>

              <Typography
                component="h1"
                variant="h1"
                id="page-heading"
                tabIndex={-1}
                sx={{ color: '#FFFFFF', mb: 2.5, outline: 'none' }}
              >
                Save Clinician Hours. Protect Every Prescription. Recover Missed Funding.
              </Typography>

              <Typography variant="body1" sx={{ color: '#E2E8F0', fontSize: '1.1rem', mb: 3.5, maxWidth: 650 }}>
                Built for hospital directors, practice owners, and CISOs. SlainteTech stops dangerous drug clashes before they reach patients, captures missed HIPE funding from verified lab results, and automates continuous healthcare cyber testing across 8 frontline care settings.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
                <Button
                  component={Link}
                  href="/contact/"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                  sx={{ border: '1px solid #7DD3FC' }}
                >
                  Book a 15-Min Pilot Demo
                </Button>
                <Button
                  component={Link}
                  href="/verticals/"
                  variant="outlined"
                  sx={{
                    color: '#FFFFFF',
                    borderColor: '#94A3B8',
                    '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  Explore 8 Care Settings
                </Button>
                <Button
                  component={Link}
                  href="/health-tech-agents/"
                  variant="outlined"
                  sx={{
                    color: '#BAE6FD',
                    borderColor: '#38BDF8',
                    '&:hover': { borderColor: '#7DD3FC', bgcolor: 'rgba(56,189,248,0.12)' },
                  }}
                >
                  See All 16 Modules
                </Button>
              </Stack>

              <Grid container spacing={2}>
                {[
                  { stat: 'Zero Guesswork Safety', detail: 'Exact clinical rules check triage urgency, drug clashes & kidney labs every time' },
                  { stat: '15-Min Sidecar Setup', detail: 'Attach read-only alongside Epic, Cerner, or MEDITECH with zero downtime' },
                  { stat: 'Private & Offline Ready', detail: 'Host inside hospital networks or completely offline with full patient privacy' },
                ].map((item) => (
                  <Grid key={item.stat} size={{ xs: 12, sm: 4 }}>
                    <Box sx={{ p: 1.75, borderRadius: 2, bgcolor: 'rgba(15, 23, 42, 0.72)', border: '1px solid #334155', height: '100%' }}>
                      <Typography sx={{ fontWeight: 800, color: '#7DD3FC', fontSize: '1.05rem', mb: 0.4 }}>
                        {item.stat}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#CBD5E1', display: 'block', lineHeight: 1.45 }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: '#0B192C',
                  border: '1px solid #38BDF8',
                  color: '#FFFFFF',
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#7DD3FC', fontWeight: 800 }}>
                    HOW SLAINTETECH WORKS TOGETHER
                  </Typography>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: '#86EFAC',
                    }}
                  >
                    <Box
                      component="span"
                      className="telemetry-pulse"
                      sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22C55E', display: 'inline-block' }}
                    />
                    LIVE PLATFORM
                  </Box>
                </Stack>

                <Stack spacing={1.5}>
                  {[
                    {
                      layer: '1. Frontline Care Workspaces',
                      desc: 'Role-tailored screens for ED, GP & Home Nursing, Psychiatry, Dentistry, Pharmacy, Ambulance Tablets, Sport, and Aerospace.',
                    },
                    {
                      layer: '2. 16 Clinical & Security Modules',
                      desc: 'Three teams working together: Security Testing (3), Coding & Compliance (5), and Clinical Care & Safety (8).',
                    },
                    {
                      layer: '3. Tested Safety Rule Gatekeeper',
                      desc: 'Runs exact triage scores, allergy/interaction/kidney prescribing checks, and security boundary locks with zero guesswork.',
                    },
                    {
                      layer: '4. Clean Patient Records & Audit Log',
                      desc: 'Stores structured records side-by-side with existing hospital feeds and signs every decision into an unchangeable log.',
                    },
                  ].map((box) => (
                    <Box
                      key={box.layer}
                      sx={{
                        p: 1.75,
                        borderRadius: 2,
                        bgcolor: '#13263E',
                        border: '1px solid #294364',
                      }}
                    >
                      <Typography sx={{ fontWeight: 800, fontSize: '0.88rem', color: '#F8FAFC', mb: 0.4 }}>
                        {box.layer}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#CBD5E1', display: 'block', lineHeight: 1.45 }}>
                        {box.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* "FOR..." INDUSTRY VERTICALS SECTION */}
      <Box component="section" aria-labelledby="for-verticals-heading" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            spacing={2}
            sx={{ mb: 4.5 }}
          >
            <Box sx={{ maxWidth: 720 }}>
              <Typography variant="overline" sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
                8 Purpose-Built Care Settings
              </Typography>
              <Typography component="h2" variant="h2" id="for-verticals-heading" sx={{ color: '#0F172A', mb: 1 }}>
                Tailored to Every Care Team You Run
              </Typography>
              <Typography variant="body1" sx={{ color: '#334155' }}>
                One reliable clinical core adapted into 8 clean workspaces, each pre-loaded with specialty patient views, safety checks, and tablet/mobile responsiveness.
              </Typography>
            </Box>
            <Button component={Link} href="/verticals/" variant="outlined" color="primary">
              Compare All 8 Verticals
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {INDUSTRY_VERTICALS.map((v) => (
              <Grid key={v.slug} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  className="slainte-interactive-card"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: '#FFFFFF',
                    borderTop: `4px solid ${v.palette.accentMain}`,
                  }}
                >
                  <CardContent sx={{ p: 2.75 }}>
                    <Box
                      component="img"
                      src={v.coverImage}
                      alt={v.coverImageAlt}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: 156,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: 1.5,
                        border: '1px solid #CBD5E1',
                        mb: 2,
                        display: 'block',
                        bgcolor: '#0F172A',
                      }}
                    />
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        bgcolor: v.palette.badgeBg,
                        color: v.palette.badgeText,
                        px: 1.2,
                        py: 0.4,
                        borderRadius: '6px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        mb: 1.5,
                      }}
                    >
                      {v.brand}
                    </Box>
                    <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1, fontSize: '1.1rem' }}>
                      {v.forLabel}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334155', fontSize: '0.88rem', mb: 1.5 }}>
                      {v.heroHeadline}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#134E68', fontWeight: 700, display: 'block' }}>
                      {v.kpis[0].value} • {v.kpis[1].value}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2.75, pb: 2.5, pt: 0 }}>
                    <Button
                      component={Link}
                      href={`/verticals/${v.slug}/`}
                      size="small"
                      variant="outlined"
                      fullWidth
                      endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                      sx={{
                        color: v.palette.accentMain,
                        borderColor: v.palette.accentMain,
                        justifyContent: 'space-between',
                      }}
                    >
                      Explore {v.brand}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* RESPONSIVE CARE-AT-HOME & AMBULANCE TABLET CALLOUT */}
      <Box
        component="section"
        aria-labelledby="responsive-field-heading"
        sx={{
          py: { xs: 6, md: 7.5 },
          bgcolor: '#FFFFFF',
          borderTop: '1px solid #CBD5E1',
          borderBottom: '1px solid #CBD5E1',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <DevicesRoundedIcon sx={{ color: '#1B6B8D' }} aria-hidden="true" />
                <Typography variant="overline" sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em' }}>
                  Works Where Your Team Works
                </Typography>
              </Stack>
              <Typography component="h2" variant="h2" id="responsive-field-heading" sx={{ color: '#0F172A', mb: 1.5 }}>
                Built for Care-at-Home Nurses, Clinics &amp; Moving Ambulances
              </Typography>
              <Typography variant="body1" sx={{ color: '#334155', mb: 2.5 }}>
                Care happens on home visits, clinic rounds, and ambulances, not just behind a desk. Every SlainteDash screen adapts smoothly to phones and rugged tablets with large glove-ready buttons and clear glare-free contrast.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button component={Link} href="/verticals/general-practice/" variant="contained" color="primary">
                  See GP &amp; Home Nursing
                </Button>
                <Button component={Link} href="/verticals/ambulance-ems/" variant="outlined" color="primary">
                  See Ambulance Tablet ePCR
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={1.5}>
                {[
                  {
                    icon: <DevicesRoundedIcon sx={{ color: '#1B6B8D' }} aria-hidden="true" />,
                    title: 'Glove & Thumb Friendly Controls',
                    text: 'Enlarged charting buttons, dental tooth charts, and triage triggers built for fast field use.',
                  },
                  {
                    icon: <ShieldRoundedIcon sx={{ color: '#15803D' }} aria-hidden="true" />,
                    title: 'One-Tap Mobile Navigation',
                    text: 'Jump straight between patient charts, safety checks, and alerts on phones or iPads.',
                  },
                  {
                    icon: <LockRoundedIcon sx={{ color: '#B91C1C' }} aria-hidden="true" />,
                    title: 'Easy on the Eyes Day & Night',
                    text: 'Accessible high contrast stays legible in bright ambulance bays or dim night-shift wards.',
                  },
                ].map((feat) => (
                  <Paper key={feat.title} elevation={0} sx={{ p: 2, border: '1px solid #CBD5E1', borderRadius: 2, bgcolor: '#F8FAFC' }}>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Box sx={{ mt: 0.25 }}>{feat.icon}</Box>
                      <Box>
                        <Typography component="h3" variant="h3" sx={{ fontSize: '1rem', color: '#0F172A', mb: 0.25 }}>
                          {feat.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#334155', fontSize: '0.88rem' }}>
                          {feat.text}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ALL 16 CLINICAL & SECURITY MODULES GRID */}
      <Box component="section" aria-labelledby="agents-fleet-heading" sx={{ py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            spacing={2}
            sx={{ mb: 4.5 }}
          >
            <Box sx={{ maxWidth: 740 }}>
              <Typography variant="overline" sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
                3 Specialized Teams • 16 Focused Modules
              </Typography>
              <Typography component="h2" variant="h2" id="agents-fleet-heading" sx={{ color: '#0F172A', mb: 1 }}>
                Clinical Safety, Coding &amp; Security Modules
              </Typography>
              <Typography variant="body1" sx={{ color: '#334155' }}>
                See live screenshots of every module below. Each tool removes busywork, catches safety risks early, or proves cybersecurity compliance automatically.
              </Typography>
            </Box>
            <Button component={Link} href="/health-tech-agents/" variant="contained" color="primary">
              Browse All 16 Modules
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {HEALTH_TECH_AGENTS.map((agent) => (
              <Grid key={agent.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                <AgentSolutionCard agent={agent} headingLevel="h3" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* REAL-WORLD HEALTHCARE DELIVERY & CLINICAL PHOTOGRAPHY */}
      <Box
        component="section"
        aria-labelledby="clinical-delivery-heading"
        sx={{
          py: { xs: 7, md: 9 },
          bgcolor: '#FFFFFF',
          borderTop: '1px solid #E2E8F0',
          borderBottom: '1px solid #E2E8F0',
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ mb: 4.5, maxWidth: 780 }}>
            <Typography variant="overline" sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
              Proven in Frontline Care Settings
            </Typography>
            <Typography component="h2" variant="h2" id="clinical-delivery-heading" sx={{ color: '#0F172A' }}>
              Designed With Frontline Teams, Hospital Trusts &amp; CISOs
            </Typography>
            <Typography variant="body1" sx={{ color: '#334155' }}>
              From acute emergency bays and busy GP surgeries to community nursing visits and hospital security operations centres, SlainteTech fits into daily clinical care without disruption.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {[
              {
                img: '/images/hero-clinicians.jpg',
                title: 'Ward Rounds & Shift Handovers',
                subtitle: 'Hospital Inpatient & Specialist Wards',
                desc: 'Clinicians review 24-hour vital trends, early-warning alerts, and source-cited shift briefings on ward tablets in seconds.',
              },
              {
                img: '/images/bedside-doctor.jpg',
                title: 'Faster Consultation Notes',
                subtitle: 'General Practice & Ambulatory Care',
                desc: 'Structured notes and safety-checked prescriptions draft automatically so clinicians keep full focus on the patient.',
              },
              {
                img: '/images/emergency-team.jpg',
                title: 'Emergency & Resuscitation Bays',
                subtitle: 'Emergency Departments & Trauma Care',
                desc: 'Live triage urgency scores and pre-arrival ambulance updates are ready before the casualty reaches the door.',
              },
              {
                img: '/images/telehealth-nurse.jpg',
                title: 'Proactive Chronic Care',
                subtitle: 'Primary Care & Care-at-Home Nursing',
                desc: 'Spot overdue diabetes, kidney, and blood pressure checks early to schedule timely follow-up care.',
              },
              {
                img: '/images/security-soc.jpg',
                title: 'Hospital Cybersecurity Command',
                subtitle: 'EU NIS2 & Continuous Audit Proof',
                desc: 'Continuous chart isolation tests and instant signed alerts pushed straight to hospital security teams.',
              },
            ].map((card, idx) => (
              <Grid key={card.title} size={{ xs: 12, sm: 6, md: idx === 0 ? 8 : idx === 1 ? 4 : 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    border: '1px solid #CBD5E1',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 18px rgba(15, 23, 42, 0.12)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={card.img}
                    alt={card.title}
                    sx={{
                      width: '100%',
                      height: idx === 0 ? 240 : 190,
                      objectFit: 'cover',
                      display: 'block',
                      bgcolor: '#0F172A',
                    }}
                  />
                  <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
                    <Typography variant="overline" sx={{ color: '#1B6B8D', fontWeight: 800, fontSize: '0.72rem' }}>
                      {card.subtitle}
                    </Typography>
                    <Typography component="h3" variant="h3" sx={{ fontSize: '1.05rem', color: '#0F172A', mb: 0.75 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.5 }}>
                      {card.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TECHNICAL FAQ FOR BUYERS & IT TEAMS */}
      <TechnicalFaqSection
        eyebrow="Platform Technical FAQ"
        title="How It Works Under the Hood (IT, Safety & Procurement FAQ)"
        subtitle="Answers for hospital CIOs, CISOs, Clinical Safety Officers, and procurement teams checking integration, hosting, and compliance."
        items={HOME_TECHNICAL_FAQS}
      />

      {/* DECISION-MAKER & INVESTOR FOOTER CTA */}
      <Box
        component="section"
        aria-labelledby="decision-makers-heading"
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: '#0F172A',
          color: '#FFFFFF',
          borderTop: '2px solid #1B6B8D',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <VerifiedRoundedIcon sx={{ color: '#38BDF8' }} aria-hidden="true" />
                <Typography variant="overline" sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em' }}>
                  Start Low-Risk, See Value in Days
                </Typography>
              </Stack>
              <Typography component="h2" variant="h2" id="decision-makers-heading" sx={{ color: '#FFFFFF', mb: 1.5 }}>
                Launch in 15 Minutes Without Replacing Your Existing EHR.
              </Typography>
              <Typography variant="body1" sx={{ color: '#CBD5E1' }}>
                Start with a read-only security and HIPE funding check beside Epic, Cerner, or MEDITECH, or switch on complete specialty clinical workspaces as you grow.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={1.5}>
                <Button
                  component={Link}
                  href="/contact/"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                  sx={{ border: '1px solid #7DD3FC' }}
                >
                  Book Your 15-Min Pilot Demo
                </Button>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button
                    component={Link}
                    href="/pricing/"
                    variant="outlined"
                    fullWidth
                    sx={{ color: '#FFFFFF', borderColor: '#64748B', '&:hover': { borderColor: '#FFFFFF' } }}
                  >
                    See Pricing Tiers
                  </Button>
                  <Button
                    component={Link}
                    href="/security-compliance/"
                    variant="outlined"
                    fullWidth
                    sx={{ color: '#FFFFFF', borderColor: '#64748B', '&:hover': { borderColor: '#FFFFFF' } }}
                  >
                    Compliance Checklist
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
