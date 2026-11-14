import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'Hospital Cybersecurity, NIS2 & GDPR Art. 9 Compliance | SlainteTech',
  description:
    'Turn EU NIS2, GDPR Article 9, OWASP API1 BOLA protection, and HIQA audit readiness into live, verifiable software checks instead of static spreadsheets.',
  path: '/security-compliance/',
  ogImage: '/images/og/security-compliance.png',
  ogImageAlt: 'SlainteTech EU NIS2, GDPR Art. 9 & OWASP API Security Matrix',
});

const COMPLIANCE_ROWS = [
  {
    framework: 'EU NIS2 Directive (2022/2555)',
    requirement: 'Risk management, software supply-chain safety & 24h incident alerting',
    control: 'Continuous cross-account API probing, locked package versions, SRI browser asset hashes, and signed alerts sent straight to Sentinel, Splunk, or PagerDuty.',
  },
  {
    framework: 'Clinical Safety Governance (EU AI Act / DCB0129)',
    requirement: 'Complete record-keeping, mandatory clinician sign-off & safe dosing math',
    control: 'Unchangeable audit database rules, doctor co-sign locks on drafts, and rule-based Python scoring for urgency and medication safety.',
  },
  {
    framework: 'EU GDPR Article 9 & 32',
    requirement: 'Strict protection of special-category health records & emergency logging',
    control: 'Automatic removal of patient names/contacts before external processing, scrambled log IDs, and 60-minute audited Break-the-Glass emergency overrides.',
  },
  {
    framework: 'OWASP API Security Top 10 (2023)',
    requirement: 'Stopping Broken Object Level Authorization (BOLA) & weak logins',
    control: 'Automated cross-account chart isolation checks, enterprise SSO (Entra ID, Keycloak, Okta), S256 PKCE SMART launch, and 5-strike brute-force lockouts.',
  },
  {
    framework: 'HIQA & National Health Standards',
    requirement: 'Clean clinical coding, practitioner attribution & prescribing checks',
    control: 'SNOMED-CT, LOINC, UCUM & Irish GMS verification with OASIS SARIF reports, signed doctor attribution, and 3-tier prescription safety blocks.',
  },
];

const SECURITY_FAQS: FaqItem[] = [
  {
    question: 'What exact technical controls prove EU NIS2 Article 21 compliance inside SlainteTech?',
    answer:
      'SlainteGov-NIS2 continuously tests access controls, MFA/OIDC policies, exact == package dependency pinning, Subresource Integrity sha384 hashes on browser templates, SQLite multi-worker rate limiting (5-strike 15-minute lockouts), and HMAC-SHA256 SIEM alert dispatch (X-Slainte-Signature).',
  },
  {
    question: 'How does database tamper-protection work so logs cannot be edited after an incident?',
    answer:
      'The audit_log, ai_exchange, and break_glass_grants SQLite tables enforce BEFORE UPDATE and BEFORE DELETE RAISE(ABORT) database triggers. Non-destructive savepoint probes in SlainteGov-Audit verify continuously that any attempt to rewrite history aborts with SQLITE_ABORT.',
  },
  {
    question: 'How is GDPR Article 9 PII removal verified when generating summaries?',
    answer:
      'ai/context.py strips Patient.name, Patient.address, Patient.telecom, GMS identifiers, and narrows Patient.birthDate to birth year prior to processing, while LOG_HASH_SALT hashes subject IDs in application logs and AI_ALLOW_REAL_PHI=false blocks external cloud transmission by default.',
  },
  {
    question: 'What downloadable artefacts do CISOs and DPOs get for external audits?',
    answer:
      'Compliance leads can export timestamped CISO Attestation Certificates (/agents/compliance-certificate), signed JSON audit snapshots (/agents/audit/snapshot), and OASIS SARIF v2.1.0 schema/security reports directly from the Governance Hub.',
  },
];

export default function SecurityCompliancePage() {
  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{
          bgcolor: '#0F172A',
          backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #3B0D1E 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 8 },
          borderBottom: '2px solid #EF4444',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#FCA5A5', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
            Real Software Proof, Not Annual Paper Checklists
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Pass NIS2, GDPR &amp; Clinical Safety Audits With Continuous Proof
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 760 }}>
            CISOs and hospital boards cannot rely on static compliance PDFs that go out of date the next morning. Every regulation below maps directly to running checks, locked audit tables, and exportable certificates built right into SlainteTech.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="matrix-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="matrix-heading" sx={{ color: '#0F172A', mb: 1 }}>
            How Each Regulation Maps to Live Software Controls
          </Typography>
          <Typography variant="body1" sx={{ color: '#334155', mb: 3 }}>
            Plain-English breakdown of statutory mandates and how SlainteTech enforces them automatically.
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #CBD5E1', borderRadius: 2, bgcolor: '#FFFFFF' }}>
            <Table aria-label="Regulatory compliance verification matrix">
              <caption style={{ textAlign: 'left', padding: '12px 16px', color: '#334155', fontSize: '0.875rem' }}>
                Mapping between statutory European healthcare regulations and live automated controls in SlainteTech.
              </caption>
              <TableHead sx={{ bgcolor: '#F1F5F9' }}>
                <TableRow>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>Regulation / Standard</TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>What Auditors Check</TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>How SlainteTech Proves It</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {COMPLIANCE_ROWS.map((row) => (
                  <TableRow key={row.framework} hover>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 800, color: '#0F172A', width: '24%' }}>
                      {row.framework}
                    </TableCell>
                    <TableCell sx={{ color: '#334155', width: '30%' }}>{row.requirement}</TableCell>
                    <TableCell sx={{ color: '#0F172A' }}>{row.control}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Paper elevation={0} sx={{ mt: 5, p: 3.5, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5 }}>
            <Typography component="h2" variant="h2" sx={{ color: '#0F172A', mb: 1 }}>
              Ready-to-Print CISO &amp; DPO Audit Reports
            </Typography>
            <Typography variant="body2" sx={{ color: '#334155', mb: 2.5 }}>
              Download signed compliance certificates and machine-readable security scan outputs in one click for HIQA, NCSC/NIS2, and hospital governance boards.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                component={Link}
                href="/health-tech-agents/bola-authorization-red-team-agent/"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
              >
                See Chart Privacy Testing
              </Button>
              <Button
                component={Link}
                href="/health-tech-agents/immutable-clinical-ai-audit-agent/"
                variant="outlined"
                color="primary"
              >
                See Tamper-Proof Audit Log
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Security & Privacy FAQ"
        title="Cybersecurity, Cryptography & GDPR Technical FAQ"
        subtitle="Technical verification details for CISOs, Data Protection Officers, and clinical safety assessors."
        accentColor="#B91C1C"
        items={SECURITY_FAQS}
      />
    </Box>
  );
}
