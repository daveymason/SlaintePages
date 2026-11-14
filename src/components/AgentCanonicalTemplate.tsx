import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
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
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import { HEALTH_TECH_AGENTS, getAgentFaqs, type AgentRecord } from '@/data/agentsData';
import { AgentIcon } from '@/components/AgentIcon';
import { AgentSchematicSvg } from '@/components/VisualSchematics';
import { AgentSolutionCard } from '@/components/AgentSolutionCard';
import { TechnicalFaqSection } from '@/components/TechnicalFaqSection';

/**
 * Canonical module layout shared across all 16 `/health-tech-agents/<slug>/` pages:
 * 1. Clear buyer hero + workflow schematic graph
 * 2. Live SlainteDash console screenshot
 * 3. Plain-English 3-column protection & time-saving benefits
 * 4. Full-width real healthcare scenario & vertical link
 * 5. Technical specification table + dedicated Technical FAQ with JSON-LD
 * 6. Solution grid showcasing the other 15 modules
 */
export function AgentCanonicalTemplate({ agent }: { agent: AgentRecord }) {
  const otherAgents = HEALTH_TECH_AGENTS.filter((item) => item.slug !== agent.slug);
  const agentFaqs = getAgentFaqs(agent);
  const agentUrl = `https://slainte-tech.com/health-tech-agents/${agent.slug}/`;

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://slainte-tech.com/' },
          { '@type': 'ListItem', position: 2, name: 'Modules & Agents', item: 'https://slainte-tech.com/health-tech-agents/' },
          { '@type': 'ListItem', position: 3, name: agent.name, item: agentUrl },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: `${agent.name} (${agent.codeName})`,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web, Linux, Cloud VPC',
        url: agentUrl,
        description: agent.seoDescription,
        screenshot: `https://slainte-tech.com${agent.dashboardScreenshot}`,
      },
    ],
  };

  return (
    <Box>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* SECTION 1: CANONICAL AGENT HERO */}
      <Box
        component="section"
        aria-labelledby="page-heading"
        sx={{
          bgcolor: '#0F172A',
          backgroundImage: 'linear-gradient(135deg, #0F172A 0%, #133B54 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 9 },
          borderBottom: '1px solid #1E293B',
        }}
      >
        <Container maxWidth="lg">
          <Box component="nav" aria-label="Breadcrumb" sx={{ mb: 2.5 }}>
            <Stack
              component="ol"
              direction="row"
              flexWrap="wrap"
              spacing={1}
              alignItems="center"
              sx={{ listStyle: 'none', p: 0, m: 0, fontSize: '0.875rem', color: '#CBD5E1' }}
            >
              <li>
                <Box component={Link} href="/" sx={{ color: '#BAE6FD', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  Home
                </Box>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Box
                  component={Link}
                  href="/health-tech-agents/"
                  sx={{ color: '#BAE6FD', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Clinical &amp; Security Modules
                </Box>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: '#FFFFFF', fontWeight: 700 }}>
                {agent.codeName}
              </li>
            </Stack>
          </Box>

          <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" flexWrap="wrap" gap={1} alignItems="center" sx={{ mb: 2 }}>
                <Chip label={agent.squad} color={agent.squadColor} size="small" />
                <Chip
                  label={`Module ID: ${agent.codeName}`}
                  size="small"
                  sx={{
                    bgcolor: '#1E293B',
                    color: '#F8FAFC',
                    border: '1px solid #475569',
                    fontFamily: 'monospace',
                  }}
                />
              </Stack>

              <Typography
                component="h1"
                variant="h1"
                id="page-heading"
                tabIndex={-1}
                sx={{ color: '#FFFFFF', mb: 2, outline: 'none' }}
              >
                {agent.name}
              </Typography>

              <Typography variant="body1" sx={{ color: '#E2E8F0', fontSize: '1.08rem', mb: 3, maxWidth: 640 }}>
                {agent.heroSummary}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3.5 }}>
                {agent.fastMcpBadges.map((badge) => (
                  <Box
                    key={badge}
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      bgcolor: 'rgba(15, 23, 42, 0.72)',
                      color: '#E0F2FE',
                      border: '1px solid #38BDF8',
                      px: 1.4,
                      py: 0.6,
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                    }}
                  >
                    <VerifiedRoundedIcon sx={{ fontSize: 16, color: '#38BDF8' }} aria-hidden="true" />
                    {badge}
                  </Box>
                ))}
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/contact/"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                  sx={{ border: '1px solid #7DD3FC' }}
                >
                  Book a {agent.codeName} Pilot
                </Button>
                <Button
                  component={Link}
                  href={agent.verticalUseCase.verticalHref}
                  variant="outlined"
                  sx={{
                    color: '#FFFFFF',
                    borderColor: '#94A3B8',
                    '&:hover': { borderColor: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  {agent.verticalUseCase.verticalTitle}
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <AgentSchematicSvg agent={agent} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* LIVE SLAINTEDASH AGENT CONSOLE SCREENSHOT */}
      <Box
        component="section"
        aria-labelledby="live-console-heading"
        sx={{ py: { xs: 5, md: 7 }, bgcolor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            spacing={2}
            sx={{ mb: 3 }}
          >
            <Box>
              <Typography variant="overline" sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
                See {agent.codeName} Running Live
              </Typography>
              <Typography component="h2" variant="h2" id="live-console-heading" sx={{ color: '#0F172A' }}>
                Inside SlainteDash: Live {agent.name} View
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#475569', maxWidth: 420 }}>
              Real software capture from SlainteDash showing live checks, patient safety alerts, and signed audit logs.
            </Typography>
          </Stack>

          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid #CBD5E1',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.14)',
              bgcolor: '#0F172A',
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 1.1,
                bgcolor: '#1E293B',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              <Stack direction="row" spacing={0.8} alignItems="center">
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#EF4444' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#F59E0B' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22C55E' }} />
              </Stack>
              <Typography variant="caption" sx={{ color: '#CBD5E1', fontFamily: 'monospace', fontSize: '0.78rem' }}>
                SlainteDash | {agent.codeName} ({agent.squad})
              </Typography>
              <Box sx={{ width: 42 }} />
            </Box>
            <Box
              component="img"
              src={agent.dashboardScreenshot}
              alt={`${agent.name} (${agent.codeName}) live SlainteDash dashboard screenshot`}
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Paper>
        </Container>
      </Box>

      {/* SECTION 2: 3-COLUMN BUYER BENEFITS */}
      <Box component="section" aria-labelledby="capabilities-heading" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, maxWidth: 740 }}>
            <Typography
              variant="overline"
              sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}
            >
              Key Buyer Outcomes
            </Typography>
            <Typography component="h2" variant="h2" id="capabilities-heading" sx={{ color: '#0F172A', mb: 1 }}>
              Three Ways {agent.codeName} Protects Your Patients &amp; Organization
            </Typography>
            <Typography variant="body1" sx={{ color: '#334155' }}>
              Every safeguard runs automatically behind your clinical workflows using verified rules and clear audit trails.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {agent.capabilities.map((cap) => (
              <Grid key={cap.title} size={{ xs: 12, md: 4 }}>
                <Card
                  className="slainte-surface-panel"
                  sx={{ height: '100%', bgcolor: '#FFFFFF', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: '10px',
                          bgcolor: '#E0F2FE',
                          color: '#0C4A6E',
                          border: '1px solid #BAE6FD',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <AgentIcon iconKey={cap.iconKey} sx={{ fontSize: 22 }} />
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          fontFamily: 'monospace',
                          bgcolor: '#DCFCE7',
                          color: '#14532D',
                          border: '1px solid #86EFAC',
                          px: 1.1,
                          py: 0.4,
                          borderRadius: '6px',
                        }}
                      >
                        {cap.guardrailChip}
                      </Box>
                    </Stack>
                    <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1.25 }}>
                      {cap.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334155' }}>
                      {cap.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 3: FULL-WIDTH PAGE BREAK - REAL EXAMPLE VERTICAL USE CASE */}
      <Box
        component="section"
        aria-labelledby="vertical-use-case-heading"
        sx={{
          bgcolor: '#0C2D48',
          backgroundImage: 'linear-gradient(120deg, #0F172A 0%, #134E68 60%, #0F3D3E 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 7.5 },
          borderTop: '2px solid #38BDF8',
          borderBottom: '2px solid #38BDF8',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
                <HubRoundedIcon sx={{ color: '#7DD3FC', fontSize: 20 }} aria-hidden="true" />
                <Typography
                  variant="overline"
                  sx={{ color: '#BAE6FD', fontWeight: 800, letterSpacing: '0.08em', lineHeight: 1.2 }}
                >
                  {agent.verticalUseCase.eyebrow}
                </Typography>
              </Stack>

              <Typography component="h2" variant="h2" id="vertical-use-case-heading" sx={{ color: '#FFFFFF', mb: 2 }}>
                {agent.verticalUseCase.headline}
              </Typography>

              <Typography variant="body1" sx={{ color: '#E2E8F0', mb: 2.5, maxWidth: 720 }}>
                {agent.verticalUseCase.scenario}
              </Typography>

              <Box
                sx={{
                  display: 'inline-block',
                  bgcolor: '#0F291E',
                  color: '#DCFCE7',
                  border: '1px solid #4ADE80',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                }}
              >
                Verified Result: {agent.verticalUseCase.outcomeMetric}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(15, 23, 42, 0.84)',
                  color: '#FFFFFF',
                  border: '1px solid #7DD3FC',
                  borderRadius: 3,
                }}
              >
                <Typography component="p" variant="subtitle2" sx={{ color: '#BAE6FD', fontWeight: 800, mb: 1 }}>
                  SEE THIS CARE SETTING LIVE
                </Typography>
                <Typography variant="body2" sx={{ color: '#E2E8F0', mb: 2.5 }}>
                  Explore how {agent.codeName} fits directly into {agent.verticalUseCase.verticalTitle.replace(/^For /, '')} across desktop and mobile tablets.
                </Typography>
                <Button
                  component={Link}
                  href={agent.verticalUseCase.verticalHref}
                  variant="contained"
                  color="primary"
                  fullWidth
                  endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
                  sx={{ border: '1px solid #7DD3FC' }}
                >
                  {agent.verticalUseCase.verticalTitle}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 4: TECHNICAL SPECIFICATION TABLE */}
      <Box component="section" aria-labelledby="specs-heading" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}
          >
            For Hospital IT &amp; Safety Engineers
          </Typography>
          <Typography component="h2" variant="h2" id="specs-heading" sx={{ color: '#0F172A', mb: 1 }}>
            Technical Architecture &amp; Standards Mapping
          </Typography>
          <Typography variant="body2" sx={{ color: '#475569', mb: 3 }}>
            Exact mechanisms, HL7 FHIR R4 bindings, and statutory standards verified for {agent.codeName}.
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #CBD5E1', borderRadius: 2 }}>
            <Table aria-label={`${agent.name} technical specification`}>
              <caption style={{ textAlign: 'left', padding: '12px 16px', color: '#334155', fontSize: '0.875rem' }}>
                Verified technical controls for {agent.codeName} inside the SlainteTech HL7 FHIR R4 runtime.
              </caption>
              <TableHead sx={{ bgcolor: '#F1F5F9' }}>
                <TableRow>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    Control Area
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    How It Works Under the Hood
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    HL7 FHIR R4 / Endpoint Binding
                  </TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    Regulatory / Clinical Standard
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {agent.technicalSpecs.map((row) => (
                  <TableRow key={row.parameter} hover>
                    <TableCell component="th" scope="row" sx={{ fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap' }}>
                      {row.parameter}
                    </TableCell>
                    <TableCell sx={{ color: '#334155' }}>{row.deterministicMechanism}</TableCell>
                    <TableCell sx={{ color: '#0F172A', fontFamily: 'monospace', fontSize: '0.84rem' }}>
                      {row.fhirBinding}
                    </TableCell>
                    <TableCell sx={{ color: '#134E68', fontWeight: 700 }}>{row.standardAlignment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* SECTION 5: DEDICATED TECHNICAL FAQ WITH JSON-LD */}
      <TechnicalFaqSection
        eyebrow={`${agent.codeName} Technical FAQ`}
        title={`${agent.codeName} Technical & Integration FAQ`}
        subtitle={`Architecture, standards, API integration, and safety details for IT and governance leads reviewing ${agent.name}.`}
        items={agentFaqs}
      />

      {/* SECTION 6: OTHER MODULES IN A 3-COLUMN SOLUTION GRID */}
      <Box component="section" aria-labelledby="other-agents-heading" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            spacing={2}
            sx={{ mb: 4 }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: '#134E68', fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}
              >
                Explore the Full Platform
              </Typography>
              <Typography component="h2" variant="h2" id="other-agents-heading" sx={{ color: '#0F172A' }}>
                See All 15 Other SlainteTech Modules
              </Typography>
            </Box>
            <Button component={Link} href="/health-tech-agents/" variant="outlined" color="primary">
              Browse Full 16-Module Directory
            </Button>
          </Stack>

          <Grid container spacing={3}>
            {otherAgents.map((other) => (
              <Grid key={other.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                <AgentSolutionCard agent={other} headingLevel="h3" />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
