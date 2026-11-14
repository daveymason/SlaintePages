import React from 'react';
import type { AgentRecord } from '@/data/agentsData';
import type { VerticalLayoutVariant } from '@/data/verticalsData';

function fitLabel(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  const trimmed = text.slice(0, maxChars - 1);
  const lastSpace = trimmed.lastIndexOf(' ');
  return `${(lastSpace > 8 ? trimmed.slice(0, lastSpace) : trimmed).trim()}...`;
}

/**
 * Clean, responsive architecture flow schematic for each of the 16 Clinical & Security Modules.
 * Every text node is fitted cleanly inside its box bounds with explicit aspect ratio attributes.
 */
export function AgentSchematicSvg({ agent }: { agent: AgentRecord }) {
  const accent =
    agent.squadColor === 'error'
      ? '#EF4444'
      : agent.squadColor === 'warning'
      ? '#F59E0B'
      : '#38BDF8';

  const badge1 = fitLabel(agent.fastMcpBadges[0] || 'HL7 FHIR R4', 20);
  const badge2 = fitLabel(agent.fastMcpBadges[1] || 'Safety Gate', 24);
  const badge3 = fitLabel(agent.fastMcpBadges[2] || 'Audit Ledger', 24);
  const chipLabel = fitLabel(agent.capabilities[0]?.guardrailChip || 'Rule-Based Gate', 18);

  return (
    <svg
      viewBox="0 0 480 300"
      width="480"
      height="300"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`${agent.name} (${agent.codeName}) safety and verification flow`}
      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }}
    >
      <title>{`${agent.codeName}: Clinical & Security Workflow`}</title>
      <defs>
        <linearGradient id={`bar-${agent.slug}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>

      <rect width="480" height="300" rx="12" fill="#0F172A" stroke="#334155" strokeWidth="2" />

      {/* Top terminal bar */}
      <rect x="1" y="1" width="478" height="38" rx="11" fill="#1E293B" />
      <circle cx="22" cy="20" r="5" fill="#EF4444" />
      <circle cx="38" cy="20" r="5" fill="#F59E0B" />
      <circle cx="54" cy="20" r="5" fill="#22C55E" className="telemetry-pulse" />
      <text x="72" y="24" fill="#E2E8F0" fontSize="11.5" fontFamily="monospace" fontWeight="700">
        {fitLabel(`${agent.codeName} | Live Safety Workflow`, 42)}
      </text>

      {/* Node 1: Input FHIR / Clinical Signal */}
      <rect x="20" y="62" width="132" height="94" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
      <text x="32" y="83" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="700">
        1. PATIENT DATA
      </text>
      <text x="32" y="105" fill="#F8FAFC" fontSize="12.5" fontFamily="sans-serif" fontWeight="700">
        HL7 FHIR R4
      </text>
      <text x="32" y="123" fill="#CBD5E1" fontSize="10" fontFamily="sans-serif">
        {badge1}
      </text>
      <rect x="32" y="136" width="104" height="7" rx="3.5" fill="#334155" />
      <rect x="32" y="136" width="74" height="7" rx="3.5" fill="#38BDF8" />

      {/* Connector 1 */}
      <line x1="152" y1="109" x2="172" y2="109" stroke={accent} strokeWidth="2.5" strokeDasharray="4 3" />
      <polygon points="172,104 180,109 172,114" fill={accent} />

      {/* Node 2: Rule-Based Safety Engine */}
      <rect x="180" y="54" width="132" height="110" rx="10" fill="#0B2239" stroke={accent} strokeWidth="2" />
      <circle cx="297" cy="70" r="4.5" fill={accent} className="telemetry-pulse" />
      <text x="192" y="74" fill={accent} fontSize="9.5" fontFamily="monospace" fontWeight="700">
        2. SAFETY CHECK
      </text>
      <text x="192" y="97" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="800">
        Zero-Guess
      </text>
      <text x="192" y="114" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="800">
        Python Rules
      </text>
      <text x="192" y="134" fill="#BAE6FD" fontSize="9.5" fontFamily="monospace">
        {chipLabel}
      </text>
      <text x="192" y="150" fill="#86EFAC" fontSize="9.5" fontFamily="monospace">
        100% Tested Logic
      </text>

      {/* Connector 2 */}
      <line x1="312" y1="109" x2="332" y2="109" stroke="#22C55E" strokeWidth="2.5" />
      <polygon points="332,104 340,109 332,114" fill="#22C55E" />

      {/* Node 3: Verified Result & Log */}
      <rect x="340" y="62" width="120" height="94" rx="8" fill="#0F291E" stroke="#22C55E" strokeWidth="1.5" />
      <text x="352" y="83" fill="#86EFAC" fontSize="9.5" fontFamily="monospace" fontWeight="700">
        3. SIGNED LOG
      </text>
      <text x="352" y="105" fill="#FFFFFF" fontSize="12.5" fontFamily="sans-serif" fontWeight="700">
        Approved
      </text>
      <text x="352" y="123" fill="#DCFCE7" fontSize="10" fontFamily="sans-serif">
        SHA-256 Audit
      </text>
      <rect x="352" y="133" width="94" height="16" rx="4" fill="#14532D" />
      <text x="360" y="144.5" fill="#86EFAC" fontSize="9" fontFamily="monospace" fontWeight="700">
        PASS | 100%
      </text>

      {/* Bottom Verification Bar & Metrics */}
      <rect x="20" y="182" width="440" height="96" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1" />
      <text x="34" y="204" fill="#94A3B8" fontSize="9.5" fontFamily="monospace" fontWeight="700">
        VERIFIED GUARDRAILS &amp; AUDIT STATUS
      </text>
      <text x="412" y="204" fill="#86EFAC" fontSize="9.5" fontFamily="monospace" fontWeight="700">
        ACTIVE
      </text>
      <text x="34" y="226" fill="#F8FAFC" fontSize="10.5" fontFamily="monospace">
        [OK] {badge2}
      </text>
      <text x="34" y="245" fill="#38BDF8" fontSize="10.5" fontFamily="monospace">
        [OK] {badge3}
      </text>
      <rect x="34" y="258" width="412" height="6" rx="3" fill="#0F172A" />
      <rect x="34" y="258" width="388" height="6" rx="3" fill={`url(#bar-${agent.slug})`} />
    </svg>
  );
}

/**
 * 8 distinct, responsive bespoke clinical graphs and interface schematics across all 8 verticals.
 */
export function VerticalUniqueGraphic({
  variant,
  brand,
}: {
  variant: VerticalLayoutVariant;
  brand: string;
}) {
  switch (variant) {
    case 'resuscitation-command':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} live vital-sign graph and emergency triage monitor`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} Emergency Deterioration Graph`}</title>
          <defs>
            <linearGradient id="ecgArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <rect width="460" height="280" rx="14" fill="#130912" stroke="#F87171" strokeWidth="2" />
          <text x="22" y="32" fill="#FCA5A5" fontSize="11.5" fontFamily="monospace" fontWeight="700">
            RESUS BAY 01 | MTS CAT 1 IMMEDIATE (0 MIN)
          </text>
          <circle cx="430" cy="28" r="6" fill="#EF4444" className="telemetry-pulse" />

          {/* Gridlines behind vitals wave */}
          <line x1="22" y1="68" x2="438" y2="68" stroke="#3F1D2B" strokeWidth="1" />
          <line x1="22" y1="108" x2="438" y2="108" stroke="#3F1D2B" strokeWidth="1" />
          <line x1="22" y1="148" x2="438" y2="148" stroke="#3F1D2B" strokeWidth="1" />

          {/* Area fill + ECG / NEWS2 waveform */}
          <polygon
            fill="url(#ecgArea)"
            points="22,148 22,110 75,110 92,92 108,132 124,58 140,152 156,102 180,110 245,110 262,64 278,148 294,108 438,108 438,148"
          />
          <polyline
            fill="none"
            stroke="#EF4444"
            strokeWidth="3"
            points="22,110 75,110 92,92 108,132 124,58 140,152 156,102 180,110 245,110 262,64 278,148 294,108 438,108"
          />

          <rect x="22" y="174" width="130" height="80" rx="8" fill="#2A101B" stroke="#F87171" />
          <text x="34" y="196" fill="#FCA5A5" fontSize="10" fontFamily="monospace">EARLY WARNING</text>
          <text x="34" y="229" fill="#FFFFFF" fontSize="25" fontFamily="sans-serif" fontWeight="800">9 / 20</text>
          <text x="34" y="245" fill="#FCA5A5" fontSize="9.5" fontFamily="sans-serif">SEPSIS ESCALATION</text>

          <rect x="165" y="174" width="130" height="80" rx="8" fill="#1E293B" stroke="#475569" />
          <text x="177" y="196" fill="#94A3B8" fontSize="10" fontFamily="monospace">LIVE VITALS</text>
          <text x="177" y="220" fill="#F8FAFC" fontSize="12" fontFamily="monospace" fontWeight="700">HR 132 | SpO2 89%</text>
          <text x="177" y="240" fill="#CBD5E1" fontSize="11.5" fontFamily="monospace">BP 88/54 | RR 28</text>

          <rect x="308" y="174" width="130" height="80" rx="8" fill="#0F291E" stroke="#4ADE80" />
          <text x="320" y="196" fill="#86EFAC" fontSize="10" fontFamily="monospace">RX SAFETY GATE</text>
          <text x="320" y="222" fill="#FFFFFF" fontSize="13.5" fontFamily="sans-serif" fontWeight="800">ACTIVE BLOCK</text>
          <text x="320" y="242" fill="#DCFCE7" fontSize="10" fontFamily="sans-serif">Allergy &amp; Renal Safe</text>
        </svg>
      );

    case 'longitudinal-care':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} GP clinic tablet and mobile community nursing preview`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} Clinic Tablet & Community Mobile View`}</title>
          <rect width="460" height="280" rx="14" fill="#0A253B" stroke="#38BDF8" strokeWidth="2" />
          <rect x="24" y="24" width="272" height="232" rx="12" fill="#FFFFFF" />
          <rect x="24" y="24" width="272" height="36" rx="12" fill="#0F172A" />
          <text x="40" y="47" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="700">
            SlainteGP | Clinic &amp; Home Visit
          </text>
          <text x="40" y="84" fill="#0F172A" fontSize="13" fontFamily="sans-serif" fontWeight="800">
            Instant Consultation Notes (SOAP)
          </text>
          <rect x="40" y="96" width="240" height="44" rx="6" fill="#F0F9FF" stroke="#BAE6FD" />
          <text x="50" y="114" fill="#0C4A6E" fontSize="10" fontFamily="sans-serif" fontWeight="700">
            Home visit BP 134/82 | HbA1c 51 mmol/mol
          </text>
          <text x="50" y="130" fill="#334155" fontSize="9.8" fontFamily="sans-serif">
            Plan: Renew Metformin 28d (Kidney eGFR 68 OK)
          </text>
          <rect x="40" y="152" width="114" height="38" rx="6" fill="#DCFCE7" />
          <text x="50" y="175" fill="#14532D" fontSize="10.5" fontFamily="sans-serif" fontWeight="700">GMS Verified</text>
          <rect x="166" y="152" width="114" height="38" rx="6" fill="#E0F2FE" />
          <text x="176" y="175" fill="#0C4A6E" fontSize="10.5" fontFamily="sans-serif" fontWeight="700">PCRS Claim Ready</text>
          <rect x="40" y="204" width="240" height="34" rx="8" fill="#1B6B8D" />
          <text x="84" y="225" fill="#FFFFFF" fontSize="11.5" fontFamily="sans-serif" fontWeight="700">
            1-Tap Clinician Sign-Off
          </text>

          <rect x="314" y="54" width="122" height="202" rx="16" fill="#1E293B" stroke="#7DD3FC" strokeWidth="2" />
          <text x="330" y="80" fill="#BAE6FD" fontSize="9.5" fontFamily="monospace" fontWeight="700">HOME NURSE</text>
          <rect x="328" y="92" width="94" height="44" rx="6" fill="#0F172A" />
          <text x="336" y="111" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="700">44px Touch UI</text>
          <text x="336" y="126" fill="#38BDF8" fontSize="9.5" fontFamily="monospace">SpO2 98% | HR 74</text>
          <rect x="328" y="146" width="94" height="44" rx="6" fill="#0F172A" />
          <text x="336" y="165" fill="#86EFAC" fontSize="10" fontFamily="sans-serif" fontWeight="700">Rx Gate Clear</text>
          <text x="336" y="180" fill="#CBD5E1" fontSize="9" fontFamily="sans-serif">Zero Risk Flags</text>
          <rect x="328" y="216" width="94" height="26" rx="6" fill="#38BDF8" />
          <text x="342" y="233" fill="#0F172A" fontSize="9.5" fontFamily="sans-serif" fontWeight="800">Quick Dock</text>
        </svg>
      );

    case 'therapeutic-calm':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} PHQ-9 and GAD-7 symptom trend graph and privacy shield`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} Mental Health Outcome Graph & Privacy Shield`}</title>
          <rect width="460" height="280" rx="14" fill="#191434" stroke="#A78BFA" strokeWidth="2" />
          <text x="24" y="36" fill="#DDD6FE" fontSize="11.5" fontFamily="monospace" fontWeight="700">
            SLAINTEPSYCH | SYMPTOM TRACKING &amp; PRIVACY
          </text>
          <rect x="24" y="54" width="250" height="200" rx="10" fill="#261F4D" stroke="#8B5CF6" />
          <text x="40" y="79" fill="#FFFFFF" fontSize="12.5" fontFamily="sans-serif" fontWeight="800">
            Longitudinal Recovery Scores
          </text>
          <text x="40" y="106" fill="#EDE9FE" fontSize="11" fontFamily="monospace">PHQ-9 Depression: 14 -&gt; 8</text>
          <rect x="40" y="116" width="214" height="9" rx="4.5" fill="#17153B" />
          <rect x="40" y="116" width="118" height="9" rx="4.5" fill="#A78BFA" />
          <text x="40" y="148" fill="#EDE9FE" fontSize="11" fontFamily="monospace">GAD-7 Anxiety: 11 -&gt; 6</text>
          <rect x="40" y="158" width="214" height="9" rx="4.5" fill="#17153B" />
          <rect x="40" y="158" width="88" height="9" rx="4.5" fill="#34D399" />

          {/* Trend sparkline */}
          <polyline
            fill="none"
            stroke="#34D399"
            strokeWidth="2.5"
            points="44,182 96,192 148,198 200,212 248,218"
          />
          <rect x="40" y="224" width="214" height="20" rx="4" fill="#17153B" />
          <text x="48" y="237.5" fill="#86EFAC" fontSize="9.5" fontFamily="monospace" fontWeight="700">
            Renal eGFR &amp; CNS Meds Verified
          </text>

          <rect x="292" y="54" width="144" height="200" rx="10" fill="#120E29" stroke="#C4B5FD" />
          <circle cx="364" cy="110" r="30" fill="#3B1D5E" stroke="#C4B5FD" strokeWidth="2" />
          <text x="343" y="115" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="800">ART.9</text>
          <text x="310" y="164" fill="#FFFFFF" fontSize="12" fontFamily="sans-serif" fontWeight="700">Strict Chart Lock</text>
          <text x="310" y="184" fill="#DDD6FE" fontSize="10" fontFamily="sans-serif">Names Stripped in</text>
          <text x="310" y="200" fill="#DDD6FE" fontSize="10" fontFamily="sans-serif">Note Drafts</text>
          <text x="310" y="232" fill="#FDE68A" fontSize="9.5" fontFamily="monospace">Audited Access Log</text>
        </svg>
      );

    case 'precision-odontogram':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} 32-tooth FDI dental chart and allergy clearance gate`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} 32-Tooth Chart & Prescribing Gate`}</title>
          <rect width="460" height="280" rx="14" fill="#072227" stroke="#2DD4BF" strokeWidth="2" />
          <text x="24" y="36" fill="#99F6E4" fontSize="11.5" fontFamily="monospace" fontWeight="700">
            32-TOOTH DENTAL CHART (11-48) &amp; PRE-OP CHECK
          </text>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={`u-${i}`}>
              <rect x={26 + i * 25} y="56" width="21" height="36" rx="5" fill={i === 5 ? '#FEE2E2' : '#CCFBF1'} stroke="#14B8A6" />
              <text x={30 + i * 25} y="78" fill="#0F172A" fontSize="9.5" fontFamily="monospace" fontWeight="800">{18 - i}</text>
              <rect x={236 + i * 25} y="56" width="21" height="36" rx="5" fill={i === 2 ? '#FEF3C7' : '#CCFBF1'} stroke="#14B8A6" />
              <text x={240 + i * 25} y="78" fill="#0F172A" fontSize="9.5" fontFamily="monospace" fontWeight="800">{21 + i}</text>
            </g>
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={`l-${i}`}>
              <rect x={26 + i * 25} y="104" width="21" height="36" rx="5" fill="#E2E8F0" stroke="#14B8A6" />
              <text x={30 + i * 25} y="126" fill="#0F172A" fontSize="9.5" fontFamily="monospace" fontWeight="800">{48 - i}</text>
              <rect x={236 + i * 25} y="104" width="21" height="36" rx="5" fill={i === 5 ? '#DBEAFE' : '#E2E8F0'} stroke="#14B8A6" />
              <text x={240 + i * 25} y="126" fill="#0F172A" fontSize="9.5" fontFamily="monospace" fontWeight="800">{31 + i}</text>
            </g>
          ))}
          <rect x="26" y="162" width="408" height="94" rx="10" fill="#0D363D" stroke="#5EEAD4" />
          <text x="40" y="188" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="800">
            Chairside Allergy &amp; Blood-Thinner Clearance
          </text>
          <text x="40" y="212" fill="#FCA5A5" fontSize="11" fontFamily="monospace" fontWeight="700">
            BLOCK: Penicillin Allergy -&gt; Amoxicillin Blocked
          </text>
          <text x="40" y="236" fill="#99F6E4" fontSize="10.5" fontFamily="monospace">
            6-Sextant Gum Score: 2 / 1 / 2 | 3 / 1 / 2 Saved
          </text>
        </svg>
      );

    case 'dispensing-matrix':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} risk-ranked pharmacy safety queue`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} Dispensing Queue & Safety Checks`}</title>
          <rect width="460" height="280" rx="14" fill="#071F15" stroke="#4ADE80" strokeWidth="2" />
          <text x="24" y="36" fill="#86EFAC" fontSize="11.5" fontFamily="monospace" fontWeight="700">
            PHARMACY SAFETY QUEUE | 3-TIER SCREENING
          </text>
          <rect x="24" y="54" width="412" height="58" rx="8" fill="#2C1215" stroke="#F87171" />
          <text x="38" y="76" fill="#FCA5A5" fontSize="10.5" fontFamily="monospace" fontWeight="700">
            HIGH-RISK INTERACTION HELD FOR PRESCRIBER
          </text>
          <text x="38" y="96" fill="#FFFFFF" fontSize="11.5" fontFamily="sans-serif" fontWeight="700">
            Clarithromycin 500mg + Atorvastatin 80mg -&gt; Intercepted
          </text>

          <rect x="24" y="124" width="412" height="58" rx="8" fill="#291E09" stroke="#FBBF24" />
          <text x="38" y="146" fill="#FDE68A" fontSize="10.5" fontFamily="monospace" fontWeight="700">
            KIDNEY FUNCTION ALERT | eGFR 26 mL/min
          </text>
          <text x="38" y="166" fill="#FFFFFF" fontSize="11.5" fontFamily="sans-serif" fontWeight="700">
            Metformin 1000mg Blocked (eGFR Below 30)
          </text>

          <rect x="24" y="194" width="412" height="62" rx="8" fill="#0E3624" stroke="#4ADE80" />
          <text x="38" y="218" fill="#86EFAC" fontSize="10.5" fontFamily="monospace" fontWeight="700">
            VERIFIED SAFE TO DISPENSE | GMS ID CHECKED
          </text>
          <text x="38" y="240" fill="#FFFFFF" fontSize="11.5" fontFamily="sans-serif">
            Monthly HSE PCRS Claim Batch Ready to Export
          </text>
        </svg>
      );

    case 'rugged-field-tablet':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} ambulance tablet ePCR console`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} Ambulance Tablet ePCR`}</title>
          <rect width="460" height="280" rx="18" fill="#1C1917" stroke="#F59E0B" strokeWidth="4" />
          <rect x="16" y="16" width="428" height="248" rx="10" fill="#291D0E" stroke="#78350F" />
          <text x="32" y="44" fill="#FDE68A" fontSize="11.5" fontFamily="monospace" fontWeight="800">
            AMBULANCE TABLET | 44PX GLOVE TOUCH UI
          </text>
          <circle cx="420" cy="39" r="6" fill="#F59E0B" className="telemetry-pulse" />
          <rect x="32" y="62" width="124" height="72" rx="8" fill="#0F172A" stroke="#F59E0B" />
          <text x="44" y="84" fill="#FDE68A" fontSize="10" fontFamily="monospace">BP / HR</text>
          <text x="44" y="114" fill="#FFFFFF" fontSize="18.5" fontFamily="monospace" fontWeight="800">84/52 | 135</text>

          <rect x="168" y="62" width="124" height="72" rx="8" fill="#0F172A" stroke="#F59E0B" />
          <text x="180" y="84" fill="#FDE68A" fontSize="10" fontFamily="monospace">SpO2 / RR</text>
          <text x="180" y="114" fill="#FFFFFF" fontSize="18.5" fontFamily="monospace" fontWeight="800">87% | 30</text>

          <rect x="304" y="62" width="124" height="72" rx="8" fill="#7F1D1D" stroke="#FCA5A5" />
          <text x="316" y="84" fill="#FEE2E2" fontSize="10" fontFamily="monospace">PRIORITY</text>
          <text x="316" y="114" fill="#FFFFFF" fontSize="18" fontFamily="sans-serif" fontWeight="800">MTS CAT 1</text>

          <rect x="32" y="152" width="396" height="90" rx="10" fill="#B45309" />
          <text x="52" y="188" fill="#FFFFFF" fontSize="15" fontFamily="sans-serif" fontWeight="800">
            1-TAP SEND PRE-ALERT TO HOSPITAL ED -&gt;
          </text>
          <text x="52" y="216" fill="#FEF3C7" fontSize="11" fontFamily="monospace">
            Instant Acuity Score | Zero Manual Re-Entry at Bay
          </text>
        </svg>
      );

    case 'athletic-telemetry':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} athlete readiness and concussion clearance monitor`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} Squad Readiness & Clearance`}</title>
          <rect width="460" height="280" rx="14" fill="#08201B" stroke="#34D399" strokeWidth="2" />
          <text x="24" y="36" fill="#A7F3D0" fontSize="11.5" fontFamily="monospace" fontWeight="700">
            SQUAD READINESS &amp; CONCUSSION CLEARANCE
          </text>
          {[
            { y: 56, name: 'Athlete #07 (Midfield)', vitals: 'HR 52 | SpO2 99% | NEWS2 0', status: 'CLEARED (SIGNED)' },
            { y: 118, name: 'Athlete #10 (Out-Half)', vitals: 'SCAT6 Day 6 Concussion Check', status: 'DOCTOR SIGNED' },
            { y: 180, name: 'Athlete #04 (Lock)', vitals: 'Chart Privacy Verified', status: '0 RECORD LEAKS' },
          ].map((row, idx) => (
            <g key={idx}>
              <rect x="24" y={row.y} width="412" height="50" rx="8" fill="#0F2E27" stroke="#10B981" />
              <text x="38" y={row.y + 22} fill="#FFFFFF" fontSize="12.5" fontFamily="sans-serif" fontWeight="700">{row.name}</text>
              <text x="38" y={row.y + 40} fill="#A7F3D0" fontSize="10" fontFamily="monospace">{row.vitals}</text>
              <rect x="292" y={row.y + 12} width="130" height="26" rx="6" fill="#065F46" />
              <text x="304" y={row.y + 29} fill="#ECFDF5" fontSize="9.5" fontFamily="monospace" fontWeight="700">{row.status}</text>
            </g>
          ))}
          <text x="24" y="256" fill="#6EE7B7" fontSize="10.5" fontFamily="monospace">
            TUE Medication Check Active | Strict Athlete Chart Lock
          </text>
        </svg>
      );

    case 'orbital-airgap':
      return (
        <svg
          viewBox="0 0 460 280"
          width="460"
          height="280"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${brand} offline air-gapped medical workspace`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <title>{`${brand} 100% Offline Medical Workspace`}</title>
          <rect width="460" height="280" rx="14" fill="#050816" stroke="#818CF8" strokeWidth="2" />
          <circle cx="380" cy="76" r="42" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.5" />
          <ellipse cx="380" cy="76" rx="64" ry="18" fill="none" stroke="#818CF8" strokeDasharray="4 3" />
          <circle cx="90" cy="48" r="2" fill="#E0E7FF" />
          <circle cx="240" cy="36" r="1.5" fill="#E0E7FF" />
          <circle cx="290" cy="94" r="2" fill="#818CF8" className="telemetry-pulse" />

          <text x="24" y="38" fill="#C7D2FE" fontSize="11.5" fontFamily="monospace" fontWeight="700">
            AIR-GAPPED MEDICAL BAY | 0 BYTES CLOUD UPLINK
          </text>
          <rect x="24" y="64" width="256" height="84" rx="10" fill="#111633" stroke="#6366F1" />
          <text x="38" y="88" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="800">
            Onboard Local Medical Stack
          </text>
          <text x="38" y="110" fill="#A5B4FC" fontSize="10.5" fontFamily="monospace">
            - Local Triage &amp; Drug Checks (:8081)
          </text>
          <text x="38" y="130" fill="#A5B4FC" fontSize="10.5" fontFamily="monospace">
            - Local FHIR Patient Store (:8082)
          </text>

          <rect x="24" y="164" width="412" height="90" rx="10" fill="#0F172A" stroke="#4F46E5" />
          <text x="38" y="190" fill="#86EFAC" fontSize="11" fontFamily="monospace" fontWeight="700">
            ALL 16 SAFETY &amp; SECURITY MODULES ACTIVE OFFLINE
          </text>
          <text x="38" y="214" fill="#E0E7FF" fontSize="11.5" fontFamily="sans-serif">
            Oxygen / Hypoxia Monitoring &amp; Onboard Kit Medication Screening
          </text>
          <text x="38" y="236" fill="#94A3B8" fontSize="10" fontFamily="monospace">
            Tamper-Proof Audit Trail Ready for Delayed Ground Sync
          </text>
        </svg>
      );
  }
}
