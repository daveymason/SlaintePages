import type { Metadata } from 'next';
import React from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ContactFormClient } from './ContactFormClient';

export const metadata: Metadata = {
  title: 'Book a 30-Day Clinical & Security Pilot | SlainteTech',
  description:
    'Start a zero-disruption 30-day hospital SMART-on-FHIR pilot, clinic deployment, or executive platform walkthrough with SlainteTech.',
};

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
            30-Day Hospital Pilots • CISO Security Audits • Investor Briefings
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Go Live in 15 Minutes With Zero Disruption to Your Existing EHR
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 720 }}>
            Connect SlainteTech alongside Epic, Cerner, MEDITECH, or your clinic database via read-only SMART-on-FHIR v2 and surface security gaps, missed HIPE revenue, and prescribing risks within days.
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
                    What Happens in a 30-Day Hospital Pilot?
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155' }}>
                    Week 1: Deploy read-only SMART-on-FHIR v2 or synthetic/staging HL7v2 mirror. Week 2: Run SlainteShield BOLA + FHIR SARIF conformance + SlainteRev-Coding HIPE gap audit. Week 3–4: Deliver executive CISO Compliance Certificate and quantified DRG uplift report.
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
                    Include your track (Pilot, CISO/Security, or Investor Data Room) in the subject line for priority routing.
                  </Typography>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
