import React from 'react';
import Link from 'next/link';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CopyCodeBlock } from '@/components/CopyCodeBlock';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'Integration & API Docs | SlainteTech',
  description:
    'Technical integration guide for hospital IT teams covering SMART-on-FHIR v2 launch, HL7v2 hospital feeds, OIDC single sign-on, and safety APIs.',
  path: '/docs/',
  ogImage: '/images/og/docs.png',
  ogImageAlt: 'SlainteTech Hospital IT & Integration Documentation',
});

const SMART_CONFIG_JSON = `GET /.well-known/smart-configuration HTTP/1.1
Host: slainte-appliance.internal

{
  "authorization_endpoint": "https://slainte-appliance.internal/smart/authorize",
  "token_endpoint": "https://slainte-appliance.internal/smart/token",
  "code_challenge_methods_supported": ["S256"],
  "grant_types_supported": ["authorization_code"],
  "scopes_supported": [
    "openid", "fhirUser", "launch", "launch/patient",
    "patient/*.read", "user/*.cruds"
  ]
}`;

const HL7V2_CURL = `curl -X POST http://127.0.0.1:8000/enterprise/hl7v2/ingest \\
  -H "Content-Type: text/plain" \\
  --data-binary $'MSH|^~\\\\&|PAS|HSE_HOSP|SLAINTE|R4|202611071200||ADT^A01|MSG001|P|2.5\\rPID|1||GMS992811^^^HSE_GMS||MURPHY^SIOBHAN||19680412|F\\rAL1|1|DA|91936005^Penicillin^SCT|SV|Anaphylaxis\\rOBX|1|NM|33914-3^eGFR^LN||28|mL/min/1.73m2'`;

const DOCS_FAQS: FaqItem[] = [
  {
    question: 'Which SMART-on-FHIR v2 security parameters are enforced on launch?',
    answer:
      'Every EHR and standalone launch enforces RFC 7636 PKCE with code_challenge_methods_supported=["S256"], strict state parameter binding, FHIR context scopes (launch, launch/patient, patient/*.read, user/*.cruds), and TLS-verified token exchange.',
  },
  {
    question: 'Which HL7v2 trigger events does POST /enterprise/hl7v2/ingest translate?',
    answer:
      'The pipe-hat parser ingests ADT^A01/A04/A08 patient admission/update feeds, ORU^R01 diagnostic lab observations (such as LOINC 33914-3 eGFR and serum potassium), and RDE^O11 pharmacy orders, converting MSH, PID, AL1, DG1, and OBX segments into deduplicated HL7 FHIR R4 bundles.',
  },
  {
    question: 'How does enterprise Single Sign-On map clinical permissions?',
    answer:
      'Setting OIDC_DISCOVERY_URL connects SlainteTech to Keycloak, Microsoft Entra ID, or Okta. JWT identity claims map directly to enforced server-side RBAC roles: consultant, gp, pharmacist, triage_nurse, dental_surgeon, paramedic, flight_surgeon, and admin.',
  },
  {
    question: 'How are webhook integrations secured for SIEM / SOC teams?',
    answer:
      'Security findings and NIS2 alerts dispatched to external SIEM or SOAR collectors (Microsoft Sentinel, Splunk, PagerDuty) are signed with HMAC-SHA256 headers and guarded by strict SSRF private-IP / loopback destination blocks.',
  },
];

export default function DocsPage() {
  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{ bgcolor: '#0F172A', color: '#FFFFFF', py: { xs: 6, md: 8 }, borderBottom: '2px solid #38BDF8' }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
            Hospital IT &amp; System Integration Guide
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Connect to Any Modern EHR or Legacy Hospital Feed
          </Typography>
          <Typography variant="body1" sx={{ color: '#CBD5E1', maxWidth: 760 }}>
            Deploy SlainteTech alongside Epic, Oracle Cerner, HAPI FHIR, and Azure Health Data Services via SMART-on-FHIR v2, or connect older hospital PAS/LIS message feeds without altering core systems.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="integration-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="integration-heading" sx={{ color: '#0F172A', mb: 3 }}>
            1. Standard SMART-on-FHIR v2 EHR Connection
          </Typography>
          <Typography variant="body2" sx={{ color: '#334155', mb: 2.5 }}>
            Launch cleanly inside existing clinician sessions using standard <code>/.well-known/smart-configuration</code> discovery and verified PKCE tokens.
          </Typography>
          <CopyCodeBlock caption="SMART-on-FHIR v2 Discovery Endpoint" code={SMART_CONFIG_JSON} />

          <Typography component="h2" variant="h2" sx={{ color: '#0F172A', mt: 6, mb: 3 }}>
            2. Legacy Hospital HL7v2 Message Bridge
          </Typography>
          <Typography variant="body2" sx={{ color: '#334155', mb: 2.5 }}>
            Turn older hospital admissions, lab results, and allergy feeds into clean, deduplicated HL7 FHIR R4 patient records in real time.
          </Typography>
          <CopyCodeBlock caption="POST /enterprise/hl7v2/ingest (MSH / PID / AL1 / OBX)" code={HL7V2_CURL} />

          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5, height: '100%' }}>
                <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                  Single Sign-On &amp; Role-Based Access
                </Typography>
                <Typography variant="body2" sx={{ color: '#334155' }}>
                  Connect your hospital identity provider (Keycloak, Microsoft Entra ID, or Okta) to map staff groups straight to <code>consultant</code>, <code>gp</code>, <code>pharmacist</code>, <code>triage_nurse</code>, and <code>admin</code> roles.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5, height: '100%' }}>
                <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                  Machine-Readable Indexes &amp; Module Specs
                </Typography>
                <Typography variant="body2" sx={{ color: '#334155', mb: 2 }}>
                  Inspect our structured <code>/llms.txt</code> and <code>/llms-full.txt</code> references covering every vertical and clinical safety module.
                </Typography>
                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                  <Button component="a" href="/llms.txt" variant="outlined" color="primary" size="small">
                    View /llms.txt
                  </Button>
                  <Button component="a" href="/llms-full.txt" variant="outlined" color="primary" size="small">
                    View /llms-full.txt
                  </Button>
                  <Button component={Link} href="/health-tech-agents/" variant="contained" color="primary" size="small">
                    Browse All 16 Modules
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Integration & Protocol FAQ"
        title="SMART-on-FHIR v2, HL7v2 & Identity Technical FAQ"
        subtitle="Protocol requirements, HL7 segment parsing, OIDC claim mapping, and signed SIEM webhook specifications."
        items={DOCS_FAQS}
      />
    </Box>
  );
}
