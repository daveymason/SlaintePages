import type { Metadata } from 'next';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { AgentsDirectoryClient } from './AgentsDirectoryClient';

export const metadata: Metadata = {
  title: '16 Clinical & Security Agents | SlainteTech',
  description:
    'Inspect all 16 clinical safety, prescribing, revenue recovery, and healthcare API security modules built on HL7 FHIR R4.',
};

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
            Clinical Safety, Revenue &amp; Security Agent Suite
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            16 Specialized Modules. Zero Guessed Clinical Math.
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 740 }}>
            Every SlainteTech agent operates against structured HL7 FHIR R4 patient compartments, enforces rule-based Python safety checks, and writes tamper-evident SHA-256 audit logs. Select any agent below to inspect its live console screenshot, vertical use case, and technical specification.
          </Typography>
        </Container>
      </Box>

      <Box component="section" aria-label="Agent directory" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <AgentsDirectoryClient />
        </Container>
      </Box>
    </Box>
  );
}
