import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import Grid from '@mui/material/Grid2';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { INDUSTRY_VERTICALS } from '@/data/verticalsData';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: '8 Healthcare Care Settings (Verticals) | SlainteTech',
  description:
    'See live software screenshots across 8 healthcare settings: Emergency Departments, GP & Home Nursing, Psychiatry, Dentistry, Pharmacy, Ambulance ePCR, Sports Medicine, and Aerospace.',
  path: '/verticals/',
  ogImage: '/images/og/verticals.png',
  ogImageAlt: 'SlainteTech 8 Healthcare Vertical Workspaces Live Screenshots',
});

const VERTICALS_FAQS: FaqItem[] = [
  {
    question: 'Do different clinical verticals share the same underlying database or overwrite each other?',
    answer:
      'All 8 verticals sit on one unified HL7 FHIR R4 clinical store (:8082) with dedicated patient cohort filtering (cohort_ids) and specialty interfaces. When a GP or paramedic logs an allergy or lab observation, hospitals and pharmacies see accurate safety alerts immediately without data silos.',
  },
  {
    question: 'How quickly can an organization add another vertical after starting with one?',
    answer:
      'Because all 8 workspaces share the same FHIR R4 core, safety gatekeeper (:8081), and user directory, turning on a second or third vertical is a license and role configuration change rather than a separate IT project.',
  },
  {
    question: 'Which medical data standards and patient IDs are supported across all verticals?',
    answer:
      'Observations, diagnoses, and medications follow HL7 FHIR R4.0.1 with SNOMED-CT, LOINC, UCUM dosage units, and Irish GMS identifier OID bindings (urn:oid:1.3.6.1.4.1.54392.5.2690.42.80).',
  },
  {
    question: 'Are mobile community nurses and paramedics supported natively without a separate app?',
    answer:
      'Yes. The responsive web interface uses coarse-pointer 44x44px touch targets, 16px anti-zoom inputs, mobile drawers, and high-contrast themes tuned for moving ambulances, iPads, and smartphones over 4G/5G or local Wi-Fi.',
  },
];

export default function VerticalsHubPage() {
  return (
    <Box>
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{
          bgcolor: '#0F172A',
          backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #133B54 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 8 },
          borderBottom: '2px solid #38BDF8',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
            One Proven Platform • 8 Specialty Workspaces
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            id="page-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
          >
            Pick the Workspace Built for Your Clinical Team
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 760 }}>
            Every specialty below runs cleanly inside SlainteDash with dedicated patient groups, built-in prescribing checks, and responsive layouts across wall monitors, iPads, and phones.
          </Typography>
        </Container>
      </Box>

      {/* 8 VERTICAL CARDS */}
      <Box component="section" aria-labelledby="vertical-cards-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="vertical-cards-heading" sx={{ color: '#0F172A', mb: 1 }}>
            See Live Workspaces Across All 8 Care Settings
          </Typography>
          <Typography variant="body1" sx={{ color: '#334155', mb: 4 }}>
            Inspect real software screens and open any setting below for detailed workflows and ROI.
          </Typography>

          <Grid container spacing={3}>
            {INDUSTRY_VERTICALS.map((v) => (
              <Grid key={v.slug} size={{ xs: 12, sm: 6, md: 6 }}>
                <Card
                  className="slainte-interactive-card"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: '#FFFFFF',
                    borderTop: `5px solid ${v.palette.accentMain}`,
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Box
                      component="img"
                      src={v.coverImage}
                      alt={v.coverImageAlt}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: 220,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: 2,
                        border: '1px solid #CBD5E1',
                        mb: 2.5,
                        display: 'block',
                        bgcolor: '#0F172A',
                      }}
                    />
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                      <Box
                        component="span"
                        sx={{
                          bgcolor: v.palette.badgeBg,
                          color: v.palette.badgeText,
                          px: 1.4,
                          py: 0.45,
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                        }}
                      >
                        {v.brand}
                      </Box>
                      <Typography variant="caption" sx={{ color: '#334155', fontWeight: 700 }}>
                        {v.assignedAgentSlugs.length} Built-In Modules
                      </Typography>
                    </Stack>

                    <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                      {v.forLabel}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#334155', mb: 2 }}>
                      {v.heroLead}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {v.kpis.map((k) => (
                        <Box
                          key={k.label}
                          component="span"
                          sx={{
                            fontSize: '0.76rem',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            bgcolor: '#F1F5F9',
                            color: '#0F172A',
                            border: '1px solid #CBD5E1',
                            px: 1.1,
                            py: 0.35,
                            borderRadius: '6px',
                          }}
                        >
                          {k.label}: {k.value}
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ px: 3.5, pb: 3, pt: 0 }}>
                    <Button
                      component={Link}
                      href={`/verticals/${v.slug}/`}
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                      sx={{
                        bgcolor: v.palette.accentMain,
                        color: '#FFFFFF',
                        justifyContent: 'space-between',
                        '&:hover': { bgcolor: '#0F172A' },
                      }}
                    >
                      Open {v.forLabel} Page
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* COMPARISON MATRIX */}
      <Box component="section" aria-labelledby="comparison-heading" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#FFFFFF', borderTop: '1px solid #CBD5E1' }}>
        <Container maxWidth="lg">
          <Typography component="h2" variant="h2" id="comparison-heading" sx={{ color: '#0F172A', mb: 1 }}>
            Side-by-Side Comparison Across All 8 Settings
          </Typography>
          <Typography variant="body2" sx={{ color: '#475569', mb: 3 }}>
            See primary clinical users, core buyer outcomes, and supported hardware at a glance.
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #CBD5E1', borderRadius: 2 }}>
            <Table aria-label="Care settings capability comparison">
              <caption style={{ textAlign: 'left', padding: '12px 16px', color: '#334155', fontSize: '0.875rem' }}>
                Comparison of frontline users, key safety tools, and supported devices across all 8 care verticals.
              </caption>
              <TableHead sx={{ bgcolor: '#F1F5F9' }}>
                <TableRow>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>Care Setting</TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>Who Uses It Daily</TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>Key Safety &amp; Time Savers</TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>Supported Devices</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {INDUSTRY_VERTICALS.map((v) => (
                  <TableRow key={v.slug} hover>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 800 }}>
                      <Box component={Link} href={`/verticals/${v.slug}/`} sx={{ color: '#134E68', textDecoration: 'underline' }}>
                        {v.brand} ({v.forLabel})
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: '#334155' }}>{v.roleLabel}</TableCell>
                    <TableCell sx={{ color: '#0F172A', fontWeight: 600 }}>
                      {v.kpis[0].value} + {v.kpis[1].value}
                    </TableCell>
                    <TableCell sx={{ color: '#334155' }}>{v.mobileReadyNote}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Multi-Vertical Technical FAQ"
        title="Technical Details for Multi-Site & Hospital Rollouts"
        subtitle="How workspaces share patient records cleanly across sites without duplicating data."
        items={VERTICALS_FAQS}
      />
    </Box>
  );
}
