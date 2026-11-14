import React from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
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
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import { TechnicalFaqSection, type FaqItem } from '@/components/TechnicalFaqSection';
import { buildPageMetadata } from '@/utils/seo';

export const metadata = buildPageMetadata({
  title: 'Evals Benchmark Scorecard & OpenTelemetry MCP Tracing | SlainteTech',
  description:
    '210-case deterministic evaluation scorecard (100.0% accuracy, 100.0% guardrail catch rate, 100.0% uncited-claim rejection, 0.028ms mean rule latency) plus live Slainte-Scan-MCP (:8081) OpenTelemetry W3C TraceContext waterfalls.',
  path: '/evals/',
  ogImage: '/images/og/evals.png',
  ogImageAlt: 'SlainteTech /evals 210-Case Deterministic Benchmark Scorecard & OpenTelemetry MCP Traces',
});

interface SuiteRow {
  suiteId: string;
  agentCode: string;
  href: string;
  scope: string;
  passed: string;
  accuracy: string;
  guardrailCatch: string;
  adversarialBreakdown: string;
  falsePositives: string;
  latency: string;
}

const SUITE_ROWS: SuiteRow[] = [
  {
    suiteId: 'rx_guard',
    agentCode: 'SlainteRx-Guard',
    href: '/health-tech-agents/pharmacotherapy-allergy-renal-safety-agent/',
    scope: '3-Tier Allergy Cross-Reactivity, ISMP High-Alert DDI & Renal eGFR/K+ Prescribing Gate',
    passed: '50 / 50',
    accuracy: '100.0%',
    guardrailCatch: '100.0%',
    adversarialBreakdown: '30 / 30 lethal/major traps blocked',
    falsePositives: '0.0% (0 / 20 safe)',
    latency: '0.028 / 0.061 / 0.112 ms',
  },
  {
    suiteId: 'dx_triage',
    agentCode: 'SlainteDx-Triage',
    href: '/health-tech-agents/manchester-triage-news2-acuity-agent/',
    scope: 'Manchester Triage System (Cat 1 to 5) & RCP NEWS2 Acute Deterioration Scoring',
    passed: '50 / 50',
    accuracy: '100.0%',
    guardrailCatch: '100.0%',
    adversarialBreakdown: '23 / 23 critical emergencies flagged',
    falsePositives: '0.0% (0 / 27 stable)',
    latency: '0.017 / 0.030 / 0.053 ms',
  },
  {
    suiteId: 'rev_coding',
    agentCode: 'SlainteRev-Coding',
    href: '/health-tech-agents/autonomous-icd10-drg-clinical-coding-agent/',
    scope: 'HIPE ICD-10-AM Comorbidity Audit & Uncited Hallucination Citation Guardrail',
    passed: '40 / 40',
    accuracy: '100.0%',
    guardrailCatch: '100.0%',
    adversarialBreakdown: '16 / 16 uncited or hallucinated claims rejected',
    falsePositives: '0.0% (0 / 8 clean)',
    latency: '0.022 / 0.073 / 0.093 ms',
  },
  {
    suiteId: 'bola_shield',
    agentCode: 'SlainteShield-BOLA',
    href: '/health-tech-agents/bola-authorization-red-team-agent/',
    scope: 'RFC 1918 & Loopback Egress Guardrail, SSRF Metadata Blocking & Compartment Pruning',
    passed: '40 / 40',
    accuracy: '100.0%',
    guardrailCatch: '100.0%',
    adversarialBreakdown: '20 / 20 SSRF & external egress URLs blocked',
    falsePositives: '0.0% (0 / 12 internal)',
    latency: '0.029 / 0.057 / 0.113 ms',
  },
  {
    suiteId: 'fhir_shield',
    agentCode: 'SlainteShield-FHIR',
    href: '/health-tech-agents/fhir-r4-conformance-terminology-agent/',
    scope: 'HL7 FHIR R4 Bundle & Resource Conformance (Irish GMS OID & LOINC/SNOMED)',
    passed: '30 / 30',
    accuracy: '100.0%',
    guardrailCatch: '100.0%',
    adversarialBreakdown: '15 / 15 malformed payloads rejected',
    falsePositives: '0.0% (0 / 15 valid)',
    latency: '0.014 / 0.031 / 0.035 ms',
  },
];

interface TraceSpanExample {
  operation: string;
  toolName: string;
  transport: string;
  policy: string;
  verdict: 'PASS' | 'GUARDRAIL_BLOCKED';
}

const BOLA_TRACE_SPANS: TraceSpanExample[] = [
  {
    operation: 'mcp.guardrail/verify_rfc1918_target',
    toolName: 'verify_rfc1918_sandbox_target',
    transport: 'fastmcp-inproc (slainte-scan-mcp)',
    policy: 'Verify local target resolves strictly within loopback or RFC 1918 private subnet',
    verdict: 'PASS',
  },
  {
    operation: 'guardrail.canary/ssrf_metadata_egress',
    toolName: 'verify_rfc1918_sandbox_target',
    transport: 'fastmcp-inproc (slainte-scan-mcp)',
    policy: 'Block cloud metadata SSRF probe to 169.254.169.254/latest/meta-data/',
    verdict: 'GUARDRAIL_BLOCKED',
  },
  {
    operation: 'mcp.surface/prune_fhir_compartments',
    toolName: 'prune_fhir_capability_compartments',
    transport: 'fastmcp-inproc (slainte-scan-mcp)',
    policy: 'Prune non-patient resources from FHIR CapabilityStatement (82.5% reduction)',
    verdict: 'PASS',
  },
  {
    operation: 'http.probe/VEC-01..VEC-05',
    toolName: 'HTTP Differential Oracle (5 Vectors)',
    transport: 'in-agent-runtime',
    policy: 'Verify anonymous/fuzzed BOLA & Break-the-Glass routes block with HTTP 302/400/401',
    verdict: 'PASS',
  },
  {
    operation: 'mcp.fhir/validate_canary_patient',
    toolName: 'validate_fhir_resource',
    transport: 'sse://127.0.0.1:8081/sse',
    policy: 'Validate Irish GMS Patient FHIR R4 compartment resource over live SSE JSON-RPC',
    verdict: 'PASS',
  },
];

const CODING_TRACE_SPANS: TraceSpanExample[] = [
  {
    operation: 'mcp.coding/audit_hipe_comorbidities',
    toolName: 'audit_patient_coding_comorbidities',
    transport: 'fastmcp-inproc (slainte-scan-mcp)',
    policy: 'Cross-check LOINC Observations (eGFR, HbA1c, Troponin, Lactate, SpO2, SBP) against Conditions',
    verdict: 'PASS',
  },
  {
    operation: 'mcp.terminology/resolve_J96.00',
    toolName: 'resolve_terminology',
    transport: 'sse://127.0.0.1:8081/sse',
    policy: 'Dual-code ICD-10-AM J96.00 & SNOMED-CT over live Slainte-Scan-MCP SSE session',
    verdict: 'PASS',
  },
  {
    operation: 'mcp.guardrail/cite_HIPE-RESP-05',
    toolName: 'verify_coding_evidence_citation',
    transport: 'fastmcp-inproc (slainte-scan-mcp)',
    policy: 'Verify cited [Observation/id] exists in chart and breaches hypoxaemia clinical threshold',
    verdict: 'PASS',
  },
  {
    operation: 'guardrail.canary/uncited_hallucination_block',
    toolName: 'verify_coding_evidence_citation',
    transport: 'fastmcp-inproc (slainte-scan-mcp)',
    policy: 'Block synthetic hallucinated claim referencing nonexistent Observation/hallucinated-llm-claim-999',
    verdict: 'GUARDRAIL_BLOCKED',
  },
  {
    operation: 'mcp.fhir/validate_coded_condition',
    toolName: 'validate_fhir_resource',
    transport: 'sse://127.0.0.1:8081/sse',
    policy: 'Validate dual-coded HIPE Condition resource over live Slainte-Scan-MCP (:8081/sse)',
    verdict: 'PASS',
  },
];

const EVALS_FAQS: FaqItem[] = [
  {
    question: 'Does SlainteTech actually call the Slainte-Scan-MCP (:8081) server via MCP JSON-RPC?',
    answer:
      'Yes. Slainte-Scan-MCP runs as an isolated FastMCP SSE server on 127.0.0.1:8081/sse. Agents using SlainteMcpBridge establish an SSE session (GET /sse -> endpoint event -> JSON-RPC initialize -> tools/list -> tools/call) to invoke MCP tools exposed on :8081 over the wire, while falling back transparently to the exact registered FastMCP callables in slainte-scan-mcp/src/mcp_server.py when running in air-gapped tests or prior to container image rebuilds.',
  },
  {
    question: 'Why does uncited-claim and hallucination rejection score 100.0% in SlainteRev-Coding?',
    answer:
      'Every candidate HIPE ICD-10-AM comorbidity passes through verify_coding_evidence_citation inside Slainte-Scan-MCP. The guardrail verifies both that the referenced Observation/<id> exists inside the active patient FHIR bundle and that its numeric LOINC quantity objectively meets the pathology rule threshold (e.g., Lactate >= 2.0 mmol/L, eGFR < 60, SpO2 <= 91%). Claims lacking a valid chart Observation or failing thresholds are hard-blocked with GUARDRAIL_BLOCKED.',
  },
  {
    question: 'How is W3C TraceContext OpenTelemetry tracing structured across agent executions?',
    answer:
      'Each execution generates a 128-bit W3C trace_id, 64-bit root_span_id, and formatted traceparent header (00-<trace_id>-<root_span_id>-01). Individual MCP tool calls and HTTP differential oracle steps are recorded as child spans with nanosecond timestamps, transport labels (sse://127.0.0.1:8081/sse vs fastmcp-inproc), policy names, verdict badges, and exact millisecond latencies.',
  },
  {
    question: 'Can engineering reviewers run the 210-case /evals benchmark live inside SlainteDash?',
    answer:
      'Yes. Inside slainte-engine, running evals/benchmark_runner.py executes all 210 cases across all 5 suites and persists data/audit_reports/evals_scorecard.json, while /evals (HTML) and /api/evals/scorecard (JSON) serve live results and recent OpenTelemetry waterfalls directly inside the authenticated SlainteDash console.',
  },
];

export default function EvalsPage() {
  return (
    <Box>
      {/* Hero Banner */}
      <Box
        component="section"
        aria-labelledby="evals-heading"
        sx={{
          bgcolor: '#0F172A',
          backgroundImage: 'linear-gradient(135deg, #0B1324 0%, #0F2942 55%, #115E59 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 8 },
          borderBottom: '2px solid #14B8A6',
        }}
      >
        <Container maxWidth="lg">
          <Chip
            icon={<TerminalRoundedIcon sx={{ color: '#5EEAD4 !important', fontSize: 16 }} aria-hidden="true" />}
            label="/evals Benchmark & OpenTelemetry W3C MCP Tracing"
            sx={{
              mb: 2,
              bgcolor: '#115E59',
              color: '#CCFBF1',
              fontWeight: 700,
              border: '1px solid #2DD4BF',
            }}
          />
          <Typography
            component="h1"
            variant="h1"
            id="evals-heading"
            tabIndex={-1}
            sx={{ color: '#FFFFFF', mb: 2, maxWidth: 920, outline: 'none' }}
          >
            Verified 210-Case /evals Scorecard &amp; Live MCP Telemetry
          </Typography>
          <Typography variant="body1" sx={{ color: '#E2E8F0', maxWidth: 820, mb: 3 }}>
            Public, reproducible evaluation results across SlainteEngine&apos;s deterministic pharmacology, triage, HIPE revenue coding, BOLA/SSRF perimeter isolation, and FHIR R4 conformance layers, paired with W3C TraceContext waterfalls over Slainte-Scan-MCP (:8081).
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={Link}
              href="/health-tech-agents/bola-authorization-red-team-agent/"
              variant="contained"
              sx={{ bgcolor: '#14B8A6', color: '#042F2E', fontWeight: 800, '&:hover': { bgcolor: '#2DD4BF' } }}
              endIcon={<ArrowForwardRoundedIcon aria-hidden="true" />}
            >
              Inspect SlainteShield-BOLA
            </Button>
            <Button
              component={Link}
              href="/health-tech-agents/autonomous-icd10-drg-clinical-coding-agent/"
              variant="outlined"
              sx={{ color: '#FFFFFF', borderColor: '#5EEAD4', fontWeight: 700, '&:hover': { borderColor: '#CCFBF1', bgcolor: 'rgba(20,184,166,0.12)' } }}
            >
              Inspect SlainteRev-Coding
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Top 4 KPI Scorecard Tiles */}
      <Box component="section" aria-label="Headline benchmark metrics" sx={{ py: { xs: 5, md: 6 }, bgcolor: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2.5}>
            {[
              {
                label: 'Overall Eval Accuracy',
                value: '100.0%',
                sub: '210 / 210 deterministic & adversarial cases passed',
                accent: '#0F766E',
                icon: <CheckCircleOutlineRoundedIcon sx={{ color: '#0F766E' }} aria-hidden="true" />,
              },
              {
                label: 'Guardrail Catch Rate',
                value: '100.0%',
                sub: '0 missed traps across DDI, SSRF, FHIR & triage gates',
                accent: '#1D4ED8',
                icon: <ShieldRoundedIcon sx={{ color: '#1D4ED8' }} aria-hidden="true" />,
              },
              {
                label: 'Uncited Claim Rejection',
                value: '100.0%',
                sub: '16 / 16 fabricated coding claims blocked (0.0% FP)',
                accent: '#B91C1C',
                icon: <ShieldRoundedIcon sx={{ color: '#B91C1C' }} aria-hidden="true" />,
              },
              {
                label: 'Deterministic Latency',
                value: '0.028 ms',
                sub: 'Mean per rule | P95: 0.073 ms | P99: 0.113 ms',
                accent: '#334155',
                icon: <SpeedRoundedIcon sx={{ color: '#334155' }} aria-hidden="true" />,
              },
            ].map((kpi) => (
              <Grid key={kpi.label} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    height: '100%',
                    bgcolor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderTop: `4px solid ${kpi.accent}`,
                    borderRadius: 2,
                  }}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', color: '#475569', letterSpacing: '0.04em' }}>
                      {kpi.label}
                    </Typography>
                    {kpi.icon}
                  </Stack>
                  <Typography variant="h2" sx={{ color: kpi.accent, fontWeight: 900, mb: 0.5 }}>
                    {kpi.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#475569', display: 'block' }}>
                    {kpi.sub}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benchmark Matrix Table */}
      <Box component="section" aria-labelledby="matrix-heading" sx={{ py: { xs: 6, md: 7 }, bgcolor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#0F766E', fontWeight: 800, letterSpacing: '0.08em', display: 'block', mb: 0.5 }}>
            Reproducible Test Suite: evals/benchmark_runner.py
          </Typography>
          <Typography component="h2" variant="h2" id="matrix-heading" sx={{ color: '#0F172A', mb: 1 }}>
            210-Case Evaluation Matrix Across 5 Core Pillars
          </Typography>
          <Typography variant="body1" sx={{ color: '#334155', mb: 3, maxWidth: 820 }}>
            Every metric below comes from running SlainteEngine&apos;s deterministic benchmark runner against live FastMCP tools (`MCP_TOOL_REGISTRY`) with per-case high-resolution percentile timers.
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #CBD5E1', borderRadius: 2 }}>
            <Table aria-label="210-case SlainteEngine evaluation scorecard">
              <caption style={{ textAlign: 'left', padding: '12px 16px', color: '#475569', fontSize: '0.85rem' }}>
                Benchmark v1.0.0 | Slainte-Scan-MCP endpoint: http://127.0.0.1:8081/sse (8 SSE tools discovered + 4 in-process safety/coding extensions) | Total run time: 24.19 ms.
              </caption>
              <TableHead sx={{ bgcolor: '#0F172A' }}>
                <TableRow>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#FFFFFF' }}>Agent &amp; Suite</TableCell>
                  <TableCell scope="col" sx={{ fontWeight: 800, color: '#FFFFFF' }}>Clinical / Security Scope</TableCell>
                  <TableCell scope="col" align="center" sx={{ fontWeight: 800, color: '#FFFFFF' }}>Pass / Total</TableCell>
                  <TableCell scope="col" align="center" sx={{ fontWeight: 800, color: '#FFFFFF' }}>Guardrail Catch</TableCell>
                  <TableCell scope="col" align="center" sx={{ fontWeight: 800, color: '#FFFFFF' }}>False Positives</TableCell>
                  <TableCell scope="col" align="right" sx={{ fontWeight: 800, color: '#FFFFFF' }}>P50 / P95 / P99</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {SUITE_ROWS.map((row) => (
                  <TableRow key={row.suiteId} hover>
                    <TableCell component="th" scope="row" sx={{ width: '18%' }}>
                      <Link href={row.href} style={{ fontWeight: 800, color: '#0F766E', textDecoration: 'none' }}>
                        {row.agentCode}
                      </Link>
                      <Typography variant="caption" sx={{ display: 'block', fontFamily: 'monospace', color: '#64748B' }}>
                        {row.suiteId}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ color: '#0F172A', width: '32%' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#0F172A' }}>
                        {row.scope}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#475569' }}>
                        {row.adversarialBreakdown}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={{ fontFamily: 'monospace', fontWeight: 800, color: '#0F172A' }}>
                      {row.passed}
                      <Chip label={row.accuracy} size="small" sx={{ ml: 1, bgcolor: '#DCFCE7', color: '#166534', fontWeight: 800 }} />
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={row.guardrailCatch} size="small" sx={{ bgcolor: '#DBEAFE', color: '#1E40AF', fontWeight: 800 }} />
                    </TableCell>
                    <TableCell align="center" sx={{ fontFamily: 'monospace', color: '#334155' }}>
                      {row.falsePositives}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: 'monospace', color: '#0F172A', whiteSpace: 'nowrap' }}>
                      {row.latency}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* Flagship MCP + OpenTelemetry Trace Inspector */}
      <Box component="section" aria-labelledby="otel-traces-heading" sx={{ py: { xs: 6, md: 7 }, bgcolor: '#F1F5F9', borderTop: '1px solid #CBD5E1' }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#1D4ED8', fontWeight: 800, letterSpacing: '0.08em', display: 'block', mb: 0.5 }}>
            W3C TraceContext + FastMCP (:8081/sse) Tool-Calling
          </Typography>
          <Typography component="h2" variant="h2" id="otel-traces-heading" sx={{ color: '#0F172A', mb: 1 }}>
            Multi-Step MCP Tool Execution &amp; Guardrail Interception Waterfalls
          </Typography>
          <Typography variant="body1" sx={{ color: '#334155', mb: 4, maxWidth: 840 }}>
            Both flagship agents route validation, terminology dual-coding, and perimeter checks through SlainteMcpBridge (`agents/mcp_tracer.py`), emitting W3C `traceparent` spans while enforcing intentional adversarial canary interceptions on every audit sweep.
          </Typography>

          <Stack spacing={4}>
            {/* Agent 01 Card */}
            <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5 }}>
              <Grid container spacing={3} alignItems="flex-start">
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <Chip label="Agent 01" size="small" sx={{ bgcolor: '#FEE2E2', color: '#991B1B', fontWeight: 800 }} />
                    <Chip label="W3C traceparent" size="small" sx={{ bgcolor: '#E2E8F0', color: '#0F172A', fontFamily: 'monospace', fontWeight: 700 }} />
                  </Stack>
                  <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                    SlainteShield-BOLA: Perimeter &amp; SSRF Guardrail Trace
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155', mb: 2 }}>
                    Confirms loopback/RFC 1918 bounds, executes a live SSRF canary against <code>169.254.169.254</code> to verify hard egress blocking, prunes unused FHIR capabilities by 82.5%, runs 5 HTTP differential oracle probes (`VEC-01` to `VEC-05`), and validates a FHIR Patient canary against `Slainte-Scan-MCP` over live SSE (`:8081/sse`).
                  </Typography>
                  <TableContainer sx={{ border: '1px solid #E2E8F0', borderRadius: 1.5 }}>
                    <Table size="small" aria-label="SlainteShield-BOLA OpenTelemetry span list">
                      <TableHead sx={{ bgcolor: '#F8FAFC' }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 800 }}>Span Operation</TableCell>
                          <TableCell sx={{ fontWeight: 800 }}>Transport</TableCell>
                          <TableCell sx={{ fontWeight: 800 }}>Verdict</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {BOLA_TRACE_SPANS.map((sp) => (
                          <TableRow key={sp.operation}>
                            <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700, color: '#0F172A' }}>
                              {sp.operation}
                              <Typography variant="caption" sx={{ display: 'block', fontFamily: 'sans-serif', color: '#475569' }}>
                                {sp.policy}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.72rem', color: '#334155' }}>
                              {sp.transport}
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={sp.verdict === 'PASS' ? 'PASS' : 'BLOCKED'}
                                size="small"
                                sx={{
                                  bgcolor: sp.verdict === 'PASS' ? '#DCFCE7' : '#FEE2E2',
                                  color: sp.verdict === 'PASS' ? '#166534' : '#991B1B',
                                  fontWeight: 800,
                                  fontSize: '0.7rem',
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Box
                    component="img"
                    src="/images/agents/bola-authorization-red-team-agent.png"
                    alt="Live SlainteDash capture of SlainteShield-BOLA showing BOLA differential oracle results and the OpenTelemetry MCP (:8081) trace waterfall"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      border: '1px solid #CBD5E1',
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* Agent 11 Card */}
            <Paper elevation={0} sx={{ p: { xs: 2.5, md: 3.5 }, bgcolor: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 2.5 }}>
              <Grid container spacing={3} alignItems="flex-start">
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <Chip label="Agent 11" size="small" sx={{ bgcolor: '#FEF3C7', color: '#92400E', fontWeight: 800 }} />
                    <Chip label="Zero-Hallucination Guard" size="small" sx={{ bgcolor: '#E2E8F0', color: '#0F172A', fontFamily: 'monospace', fontWeight: 700 }} />
                  </Stack>
                  <Typography component="h3" variant="h3" sx={{ color: '#0F172A', mb: 1 }}>
                    SlainteRev-Coding: Grounded Citation &amp; Dual-Coding Trace
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#334155', mb: 2 }}>
                    Audits objective LOINC labs against active Conditions, dual-codes detected ICD-10-AM / SNOMED-CT gaps via live SSE (`resolve_terminology`), checks every proposed citation against the patient Observation bundle (`verify_coding_evidence_citation`), traps a synthetic hallucinated diagnosis claim (`GUARDRAIL_BLOCKED`), and validates the Condition schema via `:8081/sse`.
                  </Typography>
                  <TableContainer sx={{ border: '1px solid #E2E8F0', borderRadius: 1.5 }}>
                    <Table size="small" aria-label="SlainteRev-Coding OpenTelemetry span list">
                      <TableHead sx={{ bgcolor: '#F8FAFC' }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 800 }}>Span Operation</TableCell>
                          <TableCell sx={{ fontWeight: 800 }}>Transport</TableCell>
                          <TableCell sx={{ fontWeight: 800 }}>Verdict</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {CODING_TRACE_SPANS.map((sp) => (
                          <TableRow key={sp.operation}>
                            <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.75rem', fontWeight: 700, color: '#0F172A' }}>
                              {sp.operation}
                              <Typography variant="caption" sx={{ display: 'block', fontFamily: 'sans-serif', color: '#475569' }}>
                                {sp.policy}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ fontFamily: 'monospace', fontSize: '0.72rem', color: '#334155' }}>
                              {sp.transport}
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={sp.verdict === 'PASS' ? 'PASS' : 'BLOCKED'}
                                size="small"
                                sx={{
                                  bgcolor: sp.verdict === 'PASS' ? '#DCFCE7' : '#FEE2E2',
                                  color: sp.verdict === 'PASS' ? '#166534' : '#991B1B',
                                  fontWeight: 800,
                                  fontSize: '0.7rem',
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Box
                    component="img"
                    src="/images/agents/autonomous-icd10-drg-clinical-coding-agent.png"
                    alt="Live SlainteDash capture of SlainteRev-Coding showing grounded Observation citations and the OpenTelemetry MCP (:8081) trace waterfall"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      border: '1px solid #CBD5E1',
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Stack>
        </Container>
      </Box>

      <TechnicalFaqSection
        eyebrow="Evaluation Methodology FAQ"
        title="How We Benchmark Accuracy, Citations & MCP Tracing"
        subtitle="Architecture details on FastMCP SSE transport, W3C TraceContext spans, and zero-hallucination citation guardrails."
        accentColor="#0F766E"
        items={EVALS_FAQS}
      />
    </Box>
  );
}
