import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { AgentsDirectoryClient } from './AgentsDirectoryClient';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: '16 Clinical Safety, Revenue & Cyber Modules | SlainteTech',
  description:
    'Inspect all 16 live SlainteTech modules for safer prescribing, faster charting, hospital HIPE revenue recovery, and healthcare API security.',
  path: '/health-tech-agents/',
  ogImage: '/images/og/agents/pharmacotherapy-allergy-renal-safety-agent.png',
  ogImageAlt: 'SlainteTech 16 Clinical Safety & Security Modules Directory',
});

const DIRECTORY_FAQS: FaqItem[] = [
  {
    question: 'Do we have to turn on all 16 modules on Day 1?',
    answer:
      'No. Many hospital buyers start with a 15-minute read-only sidecar running SlainteShield (security & data validation) plus SlainteRev-Coding (missed HIPE billing discovery), then expand into clinical charting, triage, and prescribing modules by department.',
  },
  {
    question: 'How do the three teams (Security, Governance, Clinical) connect behind the scenes?',
    answer:
      'Every module speaks directly to the same HL7 FHIR R4 patient store (:8082) and tested Python gatekeeper (:8081). When SlainteScribe-Voice drafts a medication during a consultation, SlainteRx-Guard screens it automatically and SlainteGov-Audit seals the approval record.',
  },
  {
    question: 'Can clinical actions ever be altered silently in background logs?',
    answer:
      'No. All logs in audit_log, ai_exchange, and break_glass_grants enforce SQLite BEFORE UPDATE / BEFORE DELETE abort triggers alongside canonical SHA-256 HL7 FHIR R4 Provenance hashes.',
  },
  {
    question: 'Which standards and exports are built directly into these modules?',
    answer:
      'Built-in support includes HL7 FHIR R4.0.1, SMART-on-FHIR v2 (RFC 7636 PKCE), HL7v2 ADT/ORU/RDE ingestion, OASIS SARIF v2.1.0 security reports, HSE PCRS GMS CSV exports, and EU NIS2 Article 21 attestation certificates.',
  },
];

export default function HealthTechAgentsIndexPage() {
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
            3 Specialized Teams • 16 Live Software Modules
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            16 Focused Modules That Protect Patients &amp; Recover Time
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 740 }}>
            Pick a team below to filter by Cybersecurity, Governance &amp; Billing, or Frontline Care. Click any module to view its live SlainteDash screenshot, practical business case, and technical specification.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-label="Module directory" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <AgentsDirectoryClient />
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Modules Technical FAQ"
        title="How the 16 Modules Deploy & Integrate"
        subtitle="Answers covering modular rollouts, HL7 FHIR R4 sharing, and immutable audit guarantees."
        items={DIRECTORY_FAQS}
      />
    </Box>
  );
}
