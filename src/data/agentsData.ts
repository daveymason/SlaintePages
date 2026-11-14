import type { FaqItem } from '@/components/TechnicalFaqSection';

export type AgentSquad = 'SlainteShield Security' | 'SlainteGov Governance' | 'SlainteClinical Care';

export interface AgentCapability {
  title: string;
  description: string;
  guardrailChip: string;
  iconKey:
    | 'security'
    | 'verified'
    | 'bug'
    | 'privacy'
    | 'factCheck'
    | 'sync'
    | 'summarize'
    | 'medication'
    | 'monitorHeart'
    | 'mic'
    | 'analytics';
}

export interface AgentSpecRow {
  parameter: string;
  deterministicMechanism: string;
  fhirBinding: string;
  standardAlignment: string;
}

export interface AgentRecord {
  slug: string;
  name: string;
  codeName: string;
  squad: AgentSquad;
  squadColor: 'error' | 'warning' | 'primary';
  iconKey: AgentCapability['iconKey'];
  dashboardScreenshot: string;
  seoTitle: string;
  seoDescription: string;
  heroSummary: string;
  fastMcpBadges: string[];
  capabilities: [AgentCapability, AgentCapability, AgentCapability];
  verticalUseCase: {
    eyebrow: string;
    headline: string;
    scenario: string;
    outcomeMetric: string;
    verticalTitle: string;
    verticalHref: string;
  };
  technicalSpecs: AgentSpecRow[];
}

export const HEALTH_TECH_AGENTS: AgentRecord[] = [
  {
    slug: 'bola-authorization-red-team-agent',
    name: 'Patient Chart Access & Role-Boundary Testing',
    codeName: 'SlainteShield-BOLA',
    squad: 'SlainteShield Security',
    squadColor: 'error',
    iconKey: 'security',
    dashboardScreenshot: '/images/agents/bola-authorization-red-team-agent.png',
    seoTitle: 'Healthcare API BOLA & Role-Boundary Security Testing | SlainteTech',
    seoDescription:
      'Prove one staff login or portal account can never read another patient chart by swapping an ID across hospital and clinic APIs.',
    heroSummary:
      'Continuously tests every patient record endpoint to prove unauthorized staff or outside accounts can never view someone else’s medical chart by changing a record ID.',
    fastMcpBadges: ['OWASP API1:2023', 'Patient Record Isolation', 'Safe Test Boundary'],
    capabilities: [
      {
        title: 'Focused on Real Patient Records',
        description:
          'Automatically finds active patient record endpoints and tests those first instead of wasting time scanning public information pages.',
        guardrailChip: '82.5% Surface Focus',
        iconKey: 'security',
      },
      {
        title: 'Cross-Account Read Comparison',
        description:
          'Safely compares authorized doctor access against unauthorized account probes in isolated sessions to confirm zero data leaks.',
        guardrailChip: 'Exact Access Diff',
        iconKey: 'verified',
      },
      {
        title: 'Safe Hospital-Network Lock',
        description:
          'Built-in network safety locks prevent accidental testing outside approved internal or staging hospital networks.',
        guardrailChip: 'Zero Live Disruption',
        iconKey: 'factCheck',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Elite Sports Medicine',
      headline: 'Keeping Coaching Accounts Out of Confidential Player Medical Files',
      scenario:
        'When physiotherapists, coaches, and club doctors share one squad readiness portal, SlainteShield-BOLA regularly verifies that coaching or external logins cannot open confidential cardiac, concussion, or TUE medical files.',
      outcomeMetric: '0 Cross-Patient Record Leaks Across 8 Medical Data Types',
      verticalTitle: 'For Elite Sports Clubs & Federations',
      verticalHref: '/verticals/sports-medicine/',
    },
    technicalSpecs: [
      {
        parameter: 'Target Surface',
        deterministicMechanism: 'CapabilityStatement parser + CompartmentDefinition/Patient filter',
        fhirBinding: 'Patient, Observation, Condition, MedicationRequest, AllergyIntolerance, DocumentReference',
        standardAlignment: 'OWASP API Security Top 10 (API1:2023)',
      },
      {
        parameter: 'Safety Boundary',
        deterministicMechanism: 'RFC 1918 / localhost IP validation prior to socket dispatch',
        fhirBinding: 'GET /fhir/r4/metadata',
        standardAlignment: 'EU NIS2 Directive Art. 21 Security Testing',
      },
      {
        parameter: 'Audit Output',
        deterministicMechanism: 'Structured telemetry JSON + CISO Compliance Certificate digest',
        fhirBinding: 'AuditEvent & SharedAuditMemory',
        standardAlignment: 'CWE-639 / CWE-863 Verification',
      },
    ],
  },
  {
    slug: 'fhir-r4-conformance-terminology-agent',
    name: 'HL7 FHIR R4 & Medical Coding Conformance',
    codeName: 'SlainteShield-FHIR',
    squad: 'SlainteShield Security',
    squadColor: 'error',
    iconKey: 'verified',
    dashboardScreenshot: '/images/agents/fhir-r4-conformance-terminology-agent.png',
    seoTitle: 'HL7 FHIR R4 Schema, SNOMED, LOINC & UCUM Verification | SlainteTech',
    seoDescription:
      'Keep clinical codes, dosage units, and GMS patient numbers clean across hospital transfers, pharmacy queues, and reimbursement claims.',
    heroSummary:
      'Catches missing diagnosis codes, sloppy medication dose units, and broken patient IDs before prescriptions reach pharmacies or records move between clinics.',
    fastMcpBadges: ['HL7 FHIR R4 Validation', 'SNOMED / LOINC / UCUM', 'Clean Export Reports'],
    capabilities: [
      {
        title: 'Clean Dose & Lab Unit Checks',
        description:
          'Makes sure every vital sign, lab reading, and prescription carries exact medical units (mg, mL, mmol/L) instead of ambiguous free text.',
        guardrailChip: 'Strict Dose Unit Gate',
        iconKey: 'verified',
      },
      {
        title: 'Irish GMS Number Validation',
        description:
          'Checks patient records against official Irish GMS identifier rules so clinic transfers and monthly pharmacy claims never get rejected.',
        guardrailChip: 'HSE Interop Ready',
        iconKey: 'factCheck',
      },
      {
        title: 'Developer & QA Pipeline Export',
        description:
          'Outputs standard machine-readable defect reports directly into hospital IT testing and deployment pipelines.',
        guardrailChip: 'SARIF v2.1.0 Reports',
        iconKey: 'analytics',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Clinical & Community Pharmacies',
      headline: 'Stopping Sloppy Dose Text & Broken GMS Numbers Before Claims Fail',
      scenario:
        'Before orders reach the pharmacist queue or leave for monthly HSE PCRS reimbursement, SlainteShield-FHIR flags unclear text instructions and missing GMS identifiers automatically.',
      outcomeMetric: '100% Data Check Prior to Monthly Claim Export',
      verticalTitle: 'For Clinical & Community Pharmacies',
      verticalHref: '/verticals/pharmacy/',
    },
    technicalSpecs: [
      {
        parameter: 'Code System Checks',
        deterministicMechanism: 'Deterministic URI & code-presence ruleset in terminology_verifier.py',
        fhirBinding: 'Observation.code, Condition.code, MedicationRequest.medicationCodeableConcept',
        standardAlignment: 'HL7 FHIR R4.0.1 & HIQA eHealth Standards',
      },
      {
        parameter: 'Unit Integrity',
        deterministicMechanism: 'UCUM system URI (http://unitsofmeasure.org) & unit token verifier',
        fhirBinding: 'Observation.valueQuantity, Dosage.doseAndRate',
        standardAlignment: 'ISO 11240 / UCUM Clinical Safety',
      },
      {
        parameter: 'Machine Report',
        deterministicMechanism: 'Deterministic SARIF v2.1.0 generator (sarif_reporter.py)',
        fhirBinding: 'OperationOutcome / Bundle.$validate',
        standardAlignment: 'OASIS SARIF v2.1.0',
      },
    ],
  },
  {
    slug: 'healthcare-cve-vulnerability-agent',
    name: 'Software Supply-Chain & Single Sign-On Security',
    codeName: 'SlainteShield-CVE',
    squad: 'SlainteShield Security',
    squadColor: 'error',
    iconKey: 'bug',
    dashboardScreenshot: '/images/agents/healthcare-cve-vulnerability-agent.png',
    seoTitle: 'Healthcare Software Supply-Chain & CVE Security Check | SlainteTech',
    seoDescription:
      'Keep clinical software locked down against third-party package tampering, browser script attacks, and brute-force login attempts.',
    heroSummary:
      'Protects clinic and hospital deployments from hidden software tampering, outdated third-party packages, browser script risks, and repeated password guessing.',
    fastMcpBadges: ['Locked Package Versions', 'Verified Browser Assets', 'Login Lockout Defense'],
    capabilities: [
      {
        title: 'Strict Software Package Locks',
        description:
          'Confirms every server dependency is pinned to an approved version so unexpected software updates never sneak into clinical systems.',
        guardrailChip: 'Zero Unpinned Code',
        iconKey: 'bug',
      },
      {
        title: 'Verified Browser Assets',
        description:
          'Checks cryptographic file hashes and strict browser headers so every screen delivered to clinicians matches approved builds.',
        guardrailChip: 'Tamper-Proof Browser UI',
        iconKey: 'security',
      },
      {
        title: 'Brute-Force Login Protection',
        description:
          'Enforces shared login attempt tracking and automatic 15-minute lockouts after 5 failed password tries across all server workers.',
        guardrailChip: '5-Strike Auto Lockout',
        iconKey: 'verified',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Aerospace & Offline Care',
      headline: 'Zero Software Drift Inside Sealed Offline Medical Bays',
      scenario:
        'Before locking an offline hospital server or expedition medical container, SlainteShield-CVE checks that every library version and UI asset matches approved security hashes.',
      outcomeMetric: '100% Repeatable Build & Offline File Verification',
      verticalTitle: 'For Astronaut & Aerospace Medicine',
      verticalHref: '/verticals/astronaut-health/',
    },
    technicalSpecs: [
      {
        parameter: 'Supply-Chain Check',
        deterministicMechanism: 'Manifest parser auditing exact == version specifiers',
        fhirBinding: 'Appliance Container Runtime',
        standardAlignment: 'EU NIS2 Supply-Chain Security (Art. 21(2)(d))',
      },
      {
        parameter: 'Transport & DOM Defense',
        deterministicMechanism: 'CSP header + HTML template sha384 integrity attribute scanner',
        fhirBinding: 'SMART-on-FHIR & Clinical UI Shell',
        standardAlignment: 'OWASP ASVS v4.0 Level 2',
      },
      {
        parameter: 'Auth Abuse Control',
        deterministicMechanism: 'Centralized SQLite rate-limit backend + 5-strike lockout verifier',
        fhirBinding: '/login, /smart/token, /auth/oidc/callback',
        standardAlignment: 'ISO/IEC 27001:2022 A.8.9',
      },
    ],
  },
  {
    slug: 'gdpr-clinical-privacy-deidentification-agent',
    name: 'GDPR Patient Privacy & Emergency Access Gate',
    codeName: 'SlainteGov-GDPR',
    squad: 'SlainteGov Governance',
    squadColor: 'warning',
    iconKey: 'privacy',
    dashboardScreenshot: '/images/agents/gdpr-clinical-privacy-deidentification-agent.png',
    seoTitle: 'GDPR Art. 9 Healthcare Privacy & Emergency Access Control | SlainteTech',
    seoDescription:
      'Protect patient identities automatically under GDPR Article 9, keep raw PHI out of system logs, and record audited 60-minute emergency chart overrides.',
    heroSummary:
      'Keeps patient names, addresses, and phone numbers out of logs and outside summaries, while giving clinicians an audited 60-minute emergency override when lives are at risk.',
    fastMcpBadges: ['GDPR Article 9 Ready', 'Automatic Name Removal', '60-Min Emergency Access'],
    capabilities: [
      {
        title: 'Automatic Patient Name Removal',
        description:
          'Strips direct names, street addresses, phone numbers, and GMS IDs before notes or summaries leave secure chart views.',
        guardrailChip: 'Pre-Send Privacy Gate',
        iconKey: 'privacy',
      },
      {
        title: 'Clean Pseudonymized System Logs',
        description:
          'Replaces real patient IDs in technical logs with scrambled cryptographic tokens so troubleshooting never leaks patient identity.',
        guardrailChip: 'Zero Raw PHI in Logs',
        iconKey: 'security',
      },
      {
        title: 'Audited 60-Minute Emergency Overrides',
        description:
          'Lets on-call clinicians open urgent charts in an emergency with automatic time expiry and instant alerts sent to security teams.',
        guardrailChip: 'Audited Override Log',
        iconKey: 'factCheck',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Psychiatry & Mental Health',
      headline: 'Keeping Mental Health Notes Confidential While Enabling Crisis Care',
      scenario:
        'Because psychiatric notes carry extreme privacy sensitivity, SlainteGov-GDPR removes patient identity details before note summaries run and records a security-alerted Break-the-Glass entry for out-of-hours crises.',
      outcomeMetric: '100% Direct-Identifier Removal Prior to Note Processing',
      verticalTitle: 'For Psychiatrists & Mental Health',
      verticalHref: '/verticals/psychiatry/',
    },
    technicalSpecs: [
      {
        parameter: 'Context Redaction',
        deterministicMechanism: 'Deterministic field scrubber in ai/context.py prior to provider dispatch',
        fhirBinding: 'Patient.name, Patient.address, Patient.telecom, Patient.identifier, Patient.birthDate',
        standardAlignment: 'EU GDPR Art. 5(1)(c) & Art. 9',
      },
      {
        parameter: 'Cloud BAA Gate',
        deterministicMechanism: 'Blocks non-local PHI transmission unless AI_ALLOW_REAL_PHI=true',
        fhirBinding: 'Outbound Redaction Filter',
        standardAlignment: 'EU GDPR Art. 28 Processor Governance',
      },
      {
        parameter: 'Emergency Override',
        deterministicMechanism: 'Append-only break_glass_grants SQLite table + SIEM webhook',
        fhirBinding: 'Patient Compartment Emergency Access',
        standardAlignment: 'GDPR Art. 9(2)(c) Vital Interests',
      },
    ],
  },
  {
    slug: 'immutable-clinical-ai-audit-agent',
    name: 'Tamper-Proof Clinical Audit Ledger',
    codeName: 'SlainteGov-Audit',
    squad: 'SlainteGov Governance',
    squadColor: 'warning',
    iconKey: 'factCheck',
    dashboardScreenshot: '/images/agents/immutable-clinical-ai-audit-agent.png',
    seoTitle: 'Tamper-Proof Healthcare Audit Trail & Compliance Certificates | SlainteTech',
    seoDescription:
      'Lock every clinical decision, sign-off, and record change into an unchangeable database log ready for HIQA, NIS2, and medico-legal review.',
    heroSummary:
      'Locks every triage score, prescribing override, and clinical sign-off into an unchangeable audit log that proves who approved every decision and exports board-ready certificates.',
    fastMcpBadges: ['Unchangeable Audit Log', 'Signed Doctor Sign-Off', 'Board Certificates'],
    capabilities: [
      {
        title: 'Database-Level Tamper Protection',
        description:
          'Database rules physically block any attempt to edit or delete past audit history, keeping medico-legal evidence intact.',
        guardrailChip: 'Tamper Lock Verified',
        iconKey: 'factCheck',
      },
      {
        title: 'Signed Practitioner Attribution',
        description:
          'Ties doctor, nurse, or pharmacist registration details permanently to approved handovers, prescriptions, and clearances.',
        guardrailChip: 'Signed Record Proof',
        iconKey: 'verified',
      },
      {
        title: 'SOC Security Alerts & Certificates',
        description:
          'Sends signed security alerts straight to hospital IT security tools and prints inspection-ready compliance certificates.',
        guardrailChip: 'Instant Audit Export',
        iconKey: 'analytics',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Emergency Departments',
      headline: 'Indisputable Medico-Legal Proof Across High-Pressure ED Shifts',
      scenario:
        'During busy emergency handovers, every urgency score, prescribing override, and consultant approval is sealed immediately into an unchangeable audit ledger.',
      outcomeMetric: 'Zero Editable or Deletable Rows Across Audit Tables',
      verticalTitle: 'For Emergency Departments',
      verticalHref: '/verticals/emergency-departments/',
    },
    technicalSpecs: [
      {
        parameter: 'Immutability Mechanism',
        deterministicMechanism: 'SQLite BEFORE UPDATE / BEFORE DELETE RAISE(ABORT) triggers on 3 audit tables',
        fhirBinding: 'audit_log, ai_exchange, break_glass_grants',
        standardAlignment: 'EU AI Act Art. 12 Record-Keeping',
      },
      {
        parameter: 'Clinical Non-Repudiation',
        deterministicMechanism: 'Canonical JSON SHA-256 digest stored in Provenance.signature',
        fhirBinding: 'HL7 FHIR R4 Provenance',
        standardAlignment: 'HIQA Information Management Standards',
      },
      {
        parameter: 'SOC Integration',
        deterministicMechanism: 'HMAC-SHA256 webhook dispatcher + signed JSON snapshot export',
        fhirBinding: 'GET /agents/audit/snapshot & /agents/compliance-certificate',
        standardAlignment: 'EU NIS2 Art. 23 Incident Reporting',
      },
    ],
  },
  {
    slug: 'multimodal-hl7v2-fhir-ingestion-agent',
    name: 'Legacy Hospital Feed & Document Intake Bridge',
    codeName: 'SlainteEngine-Ingest',
    squad: 'SlainteClinical Care',
    squadColor: 'primary',
    iconKey: 'sync',
    dashboardScreenshot: '/images/agents/multimodal-hl7v2-fhir-ingestion-agent.png',
    seoTitle: 'HL7v2, CSV, PDF & Photo Intake to HL7 FHIR R4 | SlainteTech',
    seoDescription:
      'Connect older hospital feeds, clinic spreadsheets, referral PDFs, and handwritten ambulance notes into clean modern charts without buying expensive middleware.',
    heroSummary:
      'Brings older hospital HL7v2 feeds, clinic spreadsheets, referral letters, and handwritten triage notes cleanly into one patient record without duplicate patient files.',
    fastMcpBadges: ['HL7v2 Hospital Bridge', 'CSV, PDF & Photo Intake', 'Zero Duplicate Patients'],
    capabilities: [
      {
        title: 'Direct Legacy Hospital Translation',
        description:
          'Converts classic HL7v2 hospital admission, lab result, and pharmacy messages straight into modern HL7 FHIR R4 patient charts.',
        guardrailChip: 'Zero Middleware Tax',
        iconKey: 'sync',
      },
      {
        title: 'Spreadsheets, PDFs & Handwritten Notes',
        description:
          'Reads clinic rosters, referral PDFs, and photographed triage sheets into structured vitals and allergies.',
        guardrailChip: 'Multi-Format Intake',
        iconKey: 'factCheck',
      },
      {
        title: 'Smart Patient Matching by GMS ID',
        description:
          'Matches returning patients by GMS identifier so hospital admissions and GP visits enrich one timeline rather than creating duplicates.',
        guardrailChip: 'Single Clean Record',
        iconKey: 'verified',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Ambulance & Paramedics',
      headline: 'Turning Field Vitals & Hospital Feeds Into Live Emergency Charts',
      scenario:
        'When paramedics send pre-hospital vitals or an older hospital PAS sends an admission feed, SlainteEngine-Ingest merges patient allergies and readings into the emergency queue in milliseconds.',
      outcomeMetric: '<50ms Legacy Message Conversion Without Middleware',
      verticalTitle: 'For Ambulance & Paramedic Services',
      verticalHref: '/verticals/ambulance-ems/',
    },
    technicalSpecs: [
      {
        parameter: 'Legacy Hospital Feeds',
        deterministicMechanism: 'Native Python HL7v2 v2.3–v2.5 segment parser (/enterprise/hl7v2/ingest)',
        fhirBinding: 'Bundle (transaction/collection) -> Patient, Encounter, Observation, AllergyIntolerance',
        standardAlignment: 'HL7 v2.x to HL7 FHIR R4 Mapping',
      },
      {
        parameter: 'Multimodal Intake',
        deterministicMechanism: 'CSV/PDF/Image parser + deterministic SNOMED complaint resolver',
        fhirBinding: 'POST /fhir/intake/manual & /fhir/intake/upload',
        standardAlignment: 'LOINC Vital Signs & SNOMED-CT',
      },
      {
        parameter: 'Identity Resolution',
        deterministicMechanism: 'Exact GMS OID lookup before Patient resource creation',
        fhirBinding: 'Patient.identifier (urn:oid:1.3.6.1.4.1.54392.5.2690.42.80)',
        standardAlignment: 'HIQA National Health Identifier Guidance',
      },
    ],
  },
  {
    slug: 'cited-patient-handover-summariser-agent',
    name: 'Source-Cited Shift Handover Briefing',
    codeName: 'SlainteScribe-Brief',
    squad: 'SlainteClinical Care',
    squadColor: 'primary',
    iconKey: 'summarize',
    dashboardScreenshot: '/images/agents/cited-patient-handover-summariser-agent.png',
    seoTitle: 'Source-Cited Clinical Shift Handover Summaries | SlainteTech',
    seoDescription:
      'Turn long patient records into clear 4-bullet shift briefings where every claim links back to real allergies, vital scores, and lab results.',
    heroSummary:
      'Turns dense patient histories into a crisp 4-bullet shift handover where every point cites the exact underlying allergy, vital trend, or blood test record.',
    fastMcpBadges: ['Record-Cited Bullets', 'Allergies Shown First', 'Works Even Offline'],
    capabilities: [
      {
        title: 'Allergies & Active Meds Always Kept First',
        description:
          'Even on patients with years of notes, allergies and active prescriptions are never trimmed out of shift briefings.',
        guardrailChip: 'Allergies-First Policy',
        iconKey: 'summarize',
      },
      {
        title: 'Never Invents Missing Data',
        description:
          'If a lab link is slow or missing, the summary clearly states the section is unavailable instead of filling gaps with guesses.',
        guardrailChip: 'Source-Cited Only',
        iconKey: 'verified',
      },
      {
        title: 'Offline Shift Briefing Ready',
        description:
          'Produces a structured 4-bullet shift handover even during internet outages and logs full verification timestamps.',
        guardrailChip: '100% Uptime Handover',
        iconKey: 'factCheck',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Emergency Departments',
      headline: 'Calm, Complete Shift Handovers Across 30+ Boarded Patients',
      scenario:
        'At 08:00 shift change, incoming doctors pull up SlainteScribe-Brief to review presenting issues, 24-hour early-warning trends, key abnormal labs, and active drug allergies in seconds.',
      outcomeMetric: '4 Clear Bullets Linked Straight to Verified Chart Records',
      verticalTitle: 'For Emergency Departments',
      verticalHref: '/verticals/emergency-departments/',
    },
    technicalSpecs: [
      {
        parameter: 'Context Assembly',
        deterministicMechanism: 'Priority-ordered FHIR compartment curator (ai/context.py)',
        fhirBinding: 'Patient/$everything or parallel Observation/Condition/Allergy/Medication queries',
        standardAlignment: 'ISBAR / Clinical Handover Safety',
      },
      {
        parameter: 'Safety Grounding',
        deterministicMechanism: 'Pre-computed RCP NEWS2 + check_drug_allergy_contraindications injected verbatim',
        fhirBinding: '[Patient/id], [Condition], [Observation/vital-signs], [AllergyIntolerance]',
        standardAlignment: 'DCB0129 Clinical Risk Control',
      },
      {
        parameter: 'Deployment Flexibility',
        deterministicMechanism: 'Runs inside private hospital VPCs or offline local servers',
        fhirBinding: '/settings/ai & POST /ai/summarise/<patient_id>',
        standardAlignment: 'EU AI Act Transparency & Traceability',
      },
    ],
  },
  {
    slug: 'pharmacotherapy-allergy-renal-safety-agent',
    name: '3-Tier Allergy, Drug-Clash & Kidney Prescribing Gate',
    codeName: 'SlainteRx-Guard',
    squad: 'SlainteClinical Care',
    squadColor: 'primary',
    iconKey: 'medication',
    dashboardScreenshot: '/images/agents/pharmacotherapy-allergy-renal-safety-agent.png',
    seoTitle: '3-Tier Allergy, Drug Interaction & Kidney Prescribing Safety | SlainteTech',
    seoDescription:
      'Stop unsafe prescriptions automatically by checking cross-allergies, dangerous drug combinations, and blood test kidney limits before dispensing.',
    heroSummary:
      'Catches dangerous prescriptions in under 5ms by screening drug-family allergies, high-risk medicine clashes, and current kidney and potassium blood test results.',
    fastMcpBadges: ['Allergy Cross-Check', 'High-Alert Drug Clashes', 'Kidney Lab Screening'],
    capabilities: [
      {
        title: 'Tier 1: Cross-Allergy Family Block',
        description:
          'Stops Penicillin allergies from receiving Amoxicillin or related antibiotics, plus Aspirin/NSAID and Sulfa cross-reactions.',
        guardrailChip: 'Anaphylaxis Hard-Stop',
        iconKey: 'medication',
      },
      {
        title: 'Tier 2: Life-Threatening Drug Pairs',
        description:
          'Flags high-risk pairs such as Clarithromycin + Statin, Warfarin + NSAID, Opioid + Benzodiazepine, and Potassium-sparing stacks.',
        guardrailChip: 'High-Alert Clash Check',
        iconKey: 'security',
      },
      {
        title: 'Tier 3: Live Kidney & Potassium Dosing Check',
        description:
          'Checks recent lab results automatically to intercept Metformin in severe kidney disease (eGFR < 30) and risky NSAIDs below eGFR 60.',
        guardrailChip: 'Live Lab-Aware Dosing',
        iconKey: 'verified',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Dental Surgeons & DSOs',
      headline: 'Catching Penicillin Allergies & Blood Thinner Risks Before Writing a Script',
      scenario:
        'Before prescribing post-extraction antibiotics or painkillers chairside, SlainteRx-Guard checks patient allergies, active Warfarin or Apixaban use, and recent kidney labs immediately.',
      outcomeMetric: 'All 3 Safety Layers Checked in Under 5ms Per Order',
      verticalTitle: 'For Dental Surgeons & DSOs',
      verticalHref: '/verticals/dentistry/',
    },
    technicalSpecs: [
      {
        parameter: 'Execution Engine',
        deterministicMechanism: '100% rule-based Python check matrix (evaluate_clinical_pharmacology_3tier)',
        fhirBinding: 'AllergyIntolerance, MedicationRequest, Observation (LOINC 33914-3, 2823-3)',
        standardAlignment: 'ISMP High-Alert Medications & NICE CKD Guidance',
      },
      {
        parameter: 'Clinical Override Governance',
        deterministicMechanism: 'Blocks HTTP write unless prescriber RBAC role documents clinical justification',
        fhirBinding: 'POST /fhir/Medications/<id>/add & SIEM Webhook on High-Risk Override',
        standardAlignment: 'HIQA Medication Safety & DCB0160',
      },
      {
        parameter: 'Embedded Surfaces',
        deterministicMechanism: 'Runs inline on Patient Prescribing, Consultation Scribe drafts, and Pharmacy Queue',
        fhirBinding: 'MedicationRequest.note & AuditEvent',
        standardAlignment: 'Rule-Based Clinical Calculation Standard',
      },
    ],
  },
  {
    slug: 'manchester-triage-news2-acuity-agent',
    name: 'Manchester Triage & NEWS2 Sepsis Early Warning',
    codeName: 'SlainteDx-Triage',
    squad: 'SlainteClinical Care',
    squadColor: 'primary',
    iconKey: 'monitorHeart',
    dashboardScreenshot: '/images/agents/manchester-triage-news2-acuity-agent.png',
    seoTitle: 'Manchester Triage (MTS) & RCP NEWS2 Early Warning Scoring | SlainteTech',
    seoDescription:
      'Compute exact Manchester Triage categories (1-5) and RCP NEWS2 early-warning scores in under 10ms as every vital sign arrives.',
    heroSummary:
      'Calculates official Manchester Triage urgency levels (Cat 1-5) and RCP NEWS2 sepsis warning scores in under 10ms using tested clinical math every time vitals update.',
    fastMcpBadges: ['Manchester Triage 1-5', 'RCP NEWS2 (0-20)', '24h Vital Trend Graphs'],
    capabilities: [
      {
        title: 'Exact RCP NEWS2 Scoring',
        description:
          'Scores breathing rate, oxygen saturation, blood pressure, pulse, temperature, and alertness against official Royal College thresholds.',
        guardrailChip: 'Official RCP Rules',
        iconKey: 'monitorHeart',
      },
      {
        title: '5-Level Emergency Triage Queue',
        description:
          'Combines vital-sign triggers with presenting symptoms to classify patients from Immediate (0 min) to Non-Urgent (240 min).',
        guardrailChip: 'Sub-10ms Triage Math',
        iconKey: 'verified',
      },
      {
        title: '24-Hour Bedside Trend Graphs',
        description:
          'Displays crisp 24-hour vital trend curves that refresh live the moment a nurse or tablet records a new observation.',
        guardrailChip: 'Live Vital Refresh',
        iconKey: 'analytics',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Ambulance & Paramedics',
      headline: 'Instant Pre-Hospital Acuity Warnings Straight From Moving Ambulances',
      scenario:
        'A paramedic enters roadside BP 84/52, HR 135, SpO2 87%, and RR 30 on a tablet; SlainteDx-Triage raises MTS Category 1 and NEWS2 High Risk immediately before hospital arrival.',
      outcomeMetric: '<10ms Clinical Acuity Scoring With Zero Cloud Delay',
      verticalTitle: 'For Ambulance & Paramedic Services',
      verticalHref: '/verticals/ambulance-ems/',
    },
    technicalSpecs: [
      {
        parameter: 'Vital Sign Inputs',
        deterministicMechanism: 'LOINC-keyed Python physiological scorer (calculate_news2_score & calculate_mts_category)',
        fhirBinding: 'Observation (8480-6 SBP, 8867-4 HR, 9279-1 RR, 2708-6/59408-5 SpO2, 8310-5 Temp, 9269-2 GCS)',
        standardAlignment: 'Royal College of Physicians NEWS2 (2017/2023)',
      },
      {
        parameter: 'Escalation Tiers',
        deterministicMechanism: 'Low (0–4), Single-Parameter Red (3), Medium (5–6), High Sepsis/ICU Review (>=7)',
        fhirBinding: 'Encounter.priority & Observation',
        standardAlignment: 'HSE National Early Warning System (INEWS)',
      },
      {
        parameter: 'Field & Bedside UX',
        deterministicMechanism: 'Collapsible urgent-focus MTS accordions + coarse-pointer 44px touch controls',
        fhirBinding: 'GET /fhir/Triage & POST /fhir/VitalSigns/<id>/add',
        standardAlignment: 'WCAG 2.2 AA & Emergency Human Factors',
      },
    ],
  },
  {
    slug: 'ambient-clinical-voice-scribe-agent',
    name: 'Consultation Scribe & Pre-Screened Order Drafter',
    codeName: 'SlainteScribe-Voice',
    squad: 'SlainteClinical Care',
    squadColor: 'primary',
    iconKey: 'mic',
    dashboardScreenshot: '/images/agents/ambient-clinical-voice-scribe-agent.png',
    seoTitle: 'Consultation Documentation & Safe Prescription Drafting | SlainteTech',
    seoDescription:
      'Turn consultations into ready SOAP notes, structured diagnoses, and allergy-checked prescription drafts for fast 1-tap clinician sign-off.',
    heroSummary:
      'Cuts evening typing by turning consultations into clean SOAP notes, coded diagnoses, and safety-screened draft prescriptions waiting for clinician approval.',
    fastMcpBadges: ['Ready SOAP Notes', 'Pre-Screened Draft Orders', 'Mandatory Doctor Co-Sign'],
    capabilities: [
      {
        title: 'Structured SOAP Notes & Vitals',
        description:
          'Organizes consultation audio or dictation into clean Subjective, Objective, Assessment, and Plan sections plus vital readings.',
        guardrailChip: 'Vitals & Plan Ready',
        iconKey: 'mic',
      },
      {
        title: 'Safety-Checked Draft Prescriptions',
        description:
          'Every medicine discussed during the visit runs automatically through SlainteRx-Guard so allergy or kidney risks surface right away.',
        guardrailChip: 'Zero Unscreened Orders',
        iconKey: 'medication',
      },
      {
        title: 'Clinician Always Approves First',
        description:
          'Drafts never alter the permanent medical record on their own; licensed clinicians review checkboxes and approve in one click.',
        guardrailChip: 'Clinician Co-Sign Required',
        iconKey: 'verified',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: GP Surgeries & Home Nursing',
      headline: 'Giving Clinicians Hours Back After Busy Clinics & House Calls',
      scenario:
        'After a 10-minute surgery visit or home-care call, the clinician reviews the pre-drafted SOAP note, checks the allergy-verified repeat orders, and signs off before the next patient.',
      outcomeMetric: '1-Click Commit of Approved Consultation Note & Safe Prescriptions',
      verticalTitle: 'For General Practitioners & Community Nursing',
      verticalHref: '/verticals/general-practice/',
    },
    technicalSpecs: [
      {
        parameter: 'Speech & Text Pipeline',
        deterministicMechanism: 'Browser Web Speech API (en-IE) / local Whisper ASR + structured clinical parser',
        fhirBinding: 'POST /enterprise/scribe/process',
        standardAlignment: 'EU GDPR Art. 9 & Local-First Option',
      },
      {
        parameter: 'Pre-Commit Safety Gate',
        deterministicMechanism: 'Inline invocation of evaluate_clinical_pharmacology_3tier on all draft orders',
        fhirBinding: 'Draft MedicationRequest + AllergyIntolerance + Observation (eGFR)',
        standardAlignment: 'EU AI Act Art. 14 Human Oversight',
      },
      {
        parameter: 'FHIR R4 Persistence',
        deterministicMechanism: 'Atomic commit of approved SOAP, Conditions, Vitals, and non-blocked Rx',
        fhirBinding: 'DocumentReference (11506-3), Condition, Observation, MedicationRequest',
        standardAlignment: 'HL7 FHIR R4 Clinical Document Architecture',
      },
    ],
  },
  {
    slug: 'autonomous-icd10-drg-clinical-coding-agent',
    name: 'HIPE, ICD-10-AM & DRG Revenue Recovery',
    codeName: 'SlainteRev-Coding',
    squad: 'SlainteGov Governance',
    squadColor: 'warning',
    iconKey: 'analytics',
    dashboardScreenshot: '/images/agents/autonomous-icd10-drg-clinical-coding-agent.png',
    seoTitle: 'HIPE, ICD-10-AM & DRG Hospital Revenue Recovery Auditor | SlainteTech',
    seoDescription:
      'Find uncoded diagnoses supported by real blood tests and vital results so hospitals capture legitimate HIPE funding without guesswork.',
    heroSummary:
      'Compares abnormal blood tests and vitals against diagnosis lists to flag missed HIPE / ICD-10-AM conditions with clear lab evidence so hospitals recover earned funding.',
    fastMcpBadges: ['Irish HIPE / ABF Ready', 'Dual SNOMED + ICD-10', 'Backed by Real Lab Proof'],
    capabilities: [
      {
        title: 'Lab-Proven Diagnosis Gap Check',
        description:
          'Matches clear clinical lab thresholds (kidney eGFR < 60, HbA1c >= 48, elevated Troponin or Lactate) against missing diagnosis codes.',
        guardrailChip: 'Lab-Backed Coding Only',
        iconKey: 'analytics',
      },
      {
        title: 'Transparent CFO Reimbursement ROI',
        description:
          'Estimates missed HIPE DRG complexity value clearly for hospital finance teams before discharge billing closes.',
        guardrailChip: 'Clear Payback Metric',
        iconKey: 'factCheck',
      },
      {
        title: 'One-Click Clinician Coding Capture',
        description:
          'Applies approved dual diagnosis codes linked directly to the supporting blood test or vital record.',
        guardrailChip: 'Full Billing Evidence',
        iconKey: 'verified',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Acute & Chronic Care',
      headline: 'Capturing Missed Secondary Diagnoses Backed by Blood Test Proof',
      scenario:
        'When a patient chart shows repeated low eGFR (38) and raised HbA1c (56) without Stage 3 Kidney Disease or Type 2 Diabetes on the problem list, SlainteRev-Coding surfaces the exact lab proof for sign-off.',
      outcomeMetric: 'Every Suggested Billing Code Links to a Verified Lab Result',
      verticalTitle: 'For General Practitioners & Primary Care',
      verticalHref: '/verticals/general-practice/',
    },
    technicalSpecs: [
      {
        parameter: 'Evidence Ruleset',
        deterministicMechanism: 'Deterministic LOINC threshold scanner (scan_patient_coding_gaps)',
        fhirBinding: 'Observation (33914-3 eGFR, 4548-4 HbA1c, 6598-7 Troponin, 2524-7 Lactate) vs. Condition',
        standardAlignment: 'Irish HPO HIPE & ICD-10-AM / ACHI Standards',
      },
      {
        parameter: 'Dual Coding Output',
        deterministicMechanism: 'Creates Condition with simultaneous http://snomed.info/sct & ICD-10-AM codings',
        fhirBinding: 'POST /enterprise/coding/apply/<patient_id>',
        standardAlignment: 'HIQA SNOMED-CT National Release & ABF Audit',
      },
      {
        parameter: 'Anti-Fraud Guardrail',
        deterministicMechanism: 'Never proposes a diagnosis code without a verifiable abnormal LOINC Observation',
        fhirBinding: 'Condition.note citing [Observation/id] value & timestamp',
        standardAlignment: 'Hospital Billing Audit Defensibility',
      },
    ],
  },
  {
    slug: 'clinic-onboarding-legacy-migration-agent',
    name: 'Clinic Onboarding & Legacy Data Migration',
    codeName: 'SlainteGov-Onboard',
    squad: 'SlainteGov Governance',
    squadColor: 'warning',
    iconKey: 'verified',
    dashboardScreenshot: '/images/agents/clinic-onboarding-legacy-migration-agent.png',
    seoTitle: 'Clinic Onboarding & Legacy Medical Record Migration | SlainteTech',
    seoDescription:
      'Import years of legacy GP, dental, or clinic exports into clean, validated HL7 FHIR R4 patient charts in hours instead of months.',
    heroSummary:
      'Turns messy spreadsheets, old clinic database exports, and scanned referral files into clean, standards-compliant HL7 FHIR R4 patient charts in hours.',
    fastMcpBadges: ['Clean Patient Migration', 'Standard Code Mapping', 'Zero Lost Records'],
    capabilities: [
      {
        title: 'Universal Practice Export Support',
        description:
          'Reads mixed CSV tables, legacy HL7v2 messages, and scanned clinic referral letters without custom engineering projects.',
        guardrailChip: 'Multi-Format Import',
        iconKey: 'sync',
      },
      {
        title: 'Clean National Coding Alignment',
        description:
          'Maps imported conditions, medications, and labs to official SNOMED-CT, LOINC, and UCUM standards automatically.',
        guardrailChip: 'HIQA Standard Aligned',
        iconKey: 'factCheck',
      },
      {
        title: 'Validation Before Import Commits',
        description:
          'Rejects malformed fields cleanly upfront so your new live database launches with clean patient histories.',
        guardrailChip: 'Zero-Defect Import',
        iconKey: 'verified',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Clinic Networks & Practice Groups',
      headline: 'Onboarding Newly Acquired Clinics in Hours Instead of Quarters',
      scenario:
        'When a clinic group brings a new medical centre onto the platform, SlainteGov-Onboard validates GMS identifiers and imports years of diagnoses, allergies, and lab results cleanly.',
      outcomeMetric: 'Zero Data Loss Across Imported Clinic Cohorts',
      verticalTitle: 'For General Practitioners & Clinic Networks',
      verticalHref: '/verticals/general-practice/',
    },
    technicalSpecs: [
      {
        parameter: 'Source Ingestion Formats',
        deterministicMechanism: 'Native CSV, HL7v2 ADT/ORU parsers, and text extractors',
        fhirBinding: 'Bundle.entry with provenance attribution',
        standardAlignment: 'HL7 FHIR R4 Core & Irish National Profiles',
      },
      {
        parameter: 'Terminology Resolution',
        deterministicMechanism: 'Deterministic LOINC and SNOMED-CT lookup table resolution',
        fhirBinding: 'Coding.system = http://snomed.info/sct & http://loinc.org',
        standardAlignment: 'HIQA National Health Information Standards',
      },
      {
        parameter: 'Verification Gate',
        deterministicMechanism: 'Zero-tolerance schema validator rejects malformed references',
        fhirBinding: 'OperationOutcome error reporting',
        standardAlignment: 'OASIS SARIF v2.1.0 & ISO 27001',
      },
    ],
  },
  {
    slug: 'discharge-clinical-handover-agent',
    name: 'Safe Discharge & Medication Reconciliation',
    codeName: 'SlainteCare-Transfer',
    squad: 'SlainteClinical Care',
    squadColor: 'primary',
    iconKey: 'sync',
    dashboardScreenshot: '/images/agents/discharge-clinical-handover-agent.png',
    seoTitle: 'Hospital Discharge Safety & Medication Reconciliation | SlainteTech',
    seoDescription:
      'Prevent unsafe premature discharges and take-home medication errors with automatic vital stability checks and GP transfer letters.',
    heroSummary:
      'Verifies patient vital stability before ward discharge, checks every take-home prescription against allergies and kidney labs, and drafts clean GP transfer summaries.',
    fastMcpBadges: ['Vital Stability Gate', 'Take-Home Med Check', 'Ready GP Transfer Letter'],
    capabilities: [
      {
        title: 'Pre-Discharge Vital Stability Check',
        description:
          'Reviews the last 24 hours of observations and puts an automatic clinical warning on discharges when NEWS2 stability criteria are not met.',
        guardrailChip: 'Unstable Vital Hold',
        iconKey: 'monitorHeart',
      },
      {
        title: 'Take-Home Medication Safety Review',
        description:
          'Screens every discharge medication against inpatient orders, allergies, drug clashes, and kidney function before going home.',
        guardrailChip: 'Zero Med Gaps',
        iconKey: 'medication',
      },
      {
        title: 'Signed GP Transfer Summary',
        description:
          'Bundles problem lists, discharge vitals, follow-up steps, and clinician sign-off into a structured transfer letter.',
        guardrailChip: 'Doctor Signed Transfer',
        iconKey: 'factCheck',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Acute Hospital Wards',
      headline: 'Stopping Unsafe Discharges Before Patients Leave the Ward',
      scenario:
        'If a patient planned for discharge shows raised breathing rate (24) and dipped oxygen (93%), SlainteCare-Transfer raises an automatic stability hold before discharge papers print.',
      outcomeMetric: '100% of Discharged Patients Screened for Vital & Rx Safety',
      verticalTitle: 'For Hospital Inpatient Wards & ED',
      verticalHref: '/verticals/emergency-departments/',
    },
    technicalSpecs: [
      {
        parameter: 'Stability Threshold',
        deterministicMechanism: 'RCP NEWS2 early warning score calculation',
        fhirBinding: 'Observation (NEWS2 Vital Signs) & RiskAssessment',
        standardAlignment: 'Royal College of Physicians NEWS2 Standard',
      },
      {
        parameter: 'Pharmacology Safety',
        deterministicMechanism: 'Deterministic 3-tier allergy, DDI, and eGFR screening',
        fhirBinding: 'MedicationRequest.status = active / stopped',
        standardAlignment: 'ISMP High-Alert Medication Guidelines',
      },
      {
        parameter: 'Transfer Profile',
        deterministicMechanism: 'FHIR R4 DocumentReference clinical note composition',
        fhirBinding: 'DocumentReference with Provenance cryptographic hash',
        standardAlignment: 'Irish Core Clinical Handover Standard',
      },
    ],
  },
  {
    slug: 'emergency-prehospital-prealert-agent',
    name: 'Ambulance-to-ED Pre-Arrival Alert',
    codeName: 'SlainteEMS-Alert',
    squad: 'SlainteClinical Care',
    squadColor: 'error',
    iconKey: 'monitorHeart',
    dashboardScreenshot: '/images/agents/emergency-prehospital-prealert-agent.png',
    seoTitle: 'Ambulance Pre-Hospital Pre-Alert to Receiving ED | SlainteTech',
    seoDescription:
      'Compute emergency priority scores on paramedic tablets and alert receiving hospital stroke and trauma bays before the ambulance arrives.',
    heroSummary:
      'Calculates triage urgency from paramedic tablet vitals in milliseconds and beams structured pre-arrival alerts with ETA straight to receiving hospital ED bays.',
    fastMcpBadges: ['Instant Roadside Scoring', 'Live ED Bay Pre-Alert', 'Offline Tablet Cache'],
    capabilities: [
      {
        title: 'Sub-Second Field Urgency Math',
        description:
          'Assigns official Manchester Triage and RCP NEWS2 scores directly from field blood pressure, pulse, oxygen, and breathing rate.',
        guardrailChip: 'Zero-Latency Triage',
        iconKey: 'monitorHeart',
      },
      {
        title: 'Direct Resus Bay Notification',
        description:
          'Sends vital signs, allergies, field treatments, and ETA straight onto receiving hospital emergency boards.',
        guardrailChip: 'Live ED Pre-Alert',
        iconKey: 'sync',
      },
      {
        title: 'Works Through Signal Blackouts',
        description:
          'Keeps paramedics charting smoothly in rural dead zones and syncs records cleanly the moment signal returns.',
        guardrailChip: 'High-Contrast Tablet UI',
        iconKey: 'security',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Ambulance & Paramedics',
      headline: 'Preparing Stroke & Trauma Teams Before Ambulance Doors Open',
      scenario:
        'A crew records suspected stroke vitals en route; SlainteEMS-Alert pushes an immediate priority alert to the receiving hospital so the CT suite and team are ready on arrival.',
      outcomeMetric: 'Shorter Door-to-Treatment Times via Live ED Pre-Alerting',
      verticalTitle: 'For Ambulance & Paramedic Services',
      verticalHref: '/verticals/ambulance-ems/',
    },
    technicalSpecs: [
      {
        parameter: 'Acuity Algorithms',
        deterministicMechanism: 'Manchester Triage System & RCP NEWS2 in deterministic Python',
        fhirBinding: 'RiskAssessment & Observation (Vital Signs)',
        standardAlignment: 'MTS 3rd Edition & RCP National Guidelines',
      },
      {
        parameter: 'Telemetry Protocol',
        deterministicMechanism: 'Authenticated REST/WebSocket relay to receiving ED queues',
        fhirBinding: 'Encounter (Emergency) with status = in-progress',
        standardAlignment: 'HL7 FHIR R4 Emergency Encounter Profile',
      },
      {
        parameter: 'Field Security',
        deterministicMechanism: 'TLS 1.3 encrypted mobile transit with salted audit logging',
        fhirBinding: 'Provenance with practitioner ID (PHECC / NMBI)',
        standardAlignment: 'PHECC Pre-Hospital Standard & ISO 27001',
      },
    ],
  },
  {
    slug: 'chronic-disease-surveillance-agent',
    name: 'Chronic Disease Care-Gap & Recall Tracker',
    codeName: 'SlainteCare-CDM',
    squad: 'SlainteClinical Care',
    squadColor: 'primary',
    iconKey: 'summarize',
    dashboardScreenshot: '/images/agents/chronic-disease-surveillance-agent.png',
    seoTitle: 'Chronic Disease Care-Gap & HSE CDM Recall Surveillance | SlainteTech',
    seoDescription:
      'Spot overdue diabetic HbA1c, kidney eGFR, and blood pressure reviews across practice rosters before complications happen.',
    heroSummary:
      'Sweeps GP and primary care patient rosters to highlight overdue diabetes, kidney, and blood pressure checks so nurses can book timely follow-ups effortlessly.',
    fastMcpBadges: ['HSE CDM Aligned', 'Overdue Test Alerts', 'Ready Nurse Recall Lists'],
    capabilities: [
      {
        title: 'Practice-Wide Test Monitoring',
        description:
          'Continuously checks patient rosters for overdue yearly HbA1c, 6-month blood pressure, and kidney function panels.',
        guardrailChip: 'Zero-Miss Recall',
        iconKey: 'analytics',
      },
      {
        title: 'Prioritized Risk Escalation',
        description:
          'Puts clinically worsening patients (such as rising systolic BP or falling kidney eGFR) at the top of review lists.',
        guardrailChip: 'Risk-First Sorting',
        iconKey: 'factCheck',
      },
      {
        title: 'Irish HSE CDM Contract Alignment',
        description:
          'Structured directly around biannual Chronic Disease Management review schedules for effortless practice revenue capture.',
        guardrailChip: 'HSE CDM Ready',
        iconKey: 'verified',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: GP & Primary Care Networks',
      headline: 'Closing Chronic Care Gaps Before Emergencies Happen',
      scenario:
        'Across 1,200 diabetic patients, SlainteCare-CDM spots 42 patients overdue for HbA1c tests by more than 14 months so practice nurses schedule proactive reviews in minutes.',
      outcomeMetric: '94% On-Time Chronic Review Coverage Across Active Panels',
      verticalTitle: 'For General Practitioners & Community Nursing',
      verticalHref: '/verticals/general-practice/',
    },
    technicalSpecs: [
      {
        parameter: 'Surveillance Intervals',
        deterministicMechanism: 'Temporal interval evaluation against clinical guidelines',
        fhirBinding: 'Observation (4548-4 HbA1c, 33914-3 eGFR, 85354-9 BP)',
        standardAlignment: 'HSE Chronic Disease Management Framework',
      },
      {
        parameter: 'Care Gap Flagging',
        deterministicMechanism: 'Deterministic rule engine evaluating lab date and values',
        fhirBinding: 'CarePlan.activity and Flag resource',
        standardAlignment: 'NICE & Irish College of General Practitioners (ICGP)',
      },
      {
        parameter: 'Audit Logging',
        deterministicMechanism: 'Append-only audit trail logging all surfaced care gaps',
        fhirBinding: 'AuditEvent with pseudonymized patient identifier',
        standardAlignment: 'EU GDPR Article 9 & Data Minimisation',
      },
    ],
  },
  {
    slug: 'eu-nis2-directive-compliance-agent',
    name: 'EU NIS2 Directive & Hospital Cyber Audit',
    codeName: 'SlainteGov-NIS2',
    squad: 'SlainteGov Governance',
    squadColor: 'error',
    iconKey: 'security',
    dashboardScreenshot: '/images/agents/eu-nis2-directive-compliance-agent.png',
    seoTitle: 'EU NIS2 Directive Healthcare Compliance & Attestation | SlainteTech',
    seoDescription:
      'Replace annual compliance spreadsheets with continuous automated EU NIS2 Article 21 verification, SIEM webhooks, and board-ready certificates.',
    heroSummary:
      'Continuously tests hospital cybersecurity controls against EU NIS2 Article 21, verifying access locks, package pins, and security alerts, and prints audit-ready certificates.',
    fastMcpBadges: ['EU Directive 2022/2555', 'Article 21 Safeguards', 'Board-Ready Proof'],
    capabilities: [
      {
        title: 'Live Article 21 Technical Checks',
        description:
          'Continuously tests access controls, multi-factor policies, incident alerting, and software supply-chain hygiene.',
        guardrailChip: '5/5 Controls Checked',
        iconKey: 'security',
      },
      {
        title: 'Hospital SOC Webhook Alerts',
        description:
          'Verifies instant signed security alert delivery straight to Microsoft Sentinel, Splunk, and PagerDuty.',
        guardrailChip: 'Live SIEM Webhooks',
        iconKey: 'sync',
      },
      {
        title: 'Printable Board & Auditor Certificates',
        description:
          'Outputs clear, timestamped compliance certificates ready for trust boards, insurers, and national cyber regulators.',
        guardrailChip: 'Executive Ready',
        iconKey: 'factCheck',
      },
    ],
    verticalUseCase: {
      eyebrow: 'Real-World Example: Hospital CISOs & Trust Boards',
      headline: 'Instant Regulatory Proof When National Cyber Auditors Ask',
      scenario:
        'Ahead of an external regulatory inspection, the CISO exports a signed EU NIS2 Article 21 certificate proving live technical compliance across every clinical API and login boundary.',
      outcomeMetric: '100% Continuous Audit Readiness Across All Safeguards',
      verticalTitle: 'Security & NIS2 Compliance Matrix',
      verticalHref: '/security-compliance/',
    },
    technicalSpecs: [
      {
        parameter: 'Regulatory Scope',
        deterministicMechanism: 'Continuous verification of NIS2 Article 21 (1)-(2) safeguards',
        fhirBinding: 'CapabilityStatement.security & AuditEvent',
        standardAlignment: 'EU Directive 2022/2555 (NIS2) & ISO/IEC 27001:2022',
      },
      {
        parameter: 'Supply-Chain Verification',
        deterministicMechanism: 'Exact dependency version pin checks & SRI sha384- asset verification',
        fhirBinding: 'Audit log verification signatures',
        standardAlignment: 'NIST SP 800-161 Supply Chain Risk Management',
      },
      {
        parameter: 'Incident Reporting Gate',
        deterministicMechanism: 'HMAC-SHA256 signed webhook dispatch within mandatory incident windows',
        fhirBinding: 'AuditEvent with cryptographic SHA-256 digest',
        standardAlignment: 'EU NIS2 24-Hour Early Warning Mandate',
      },
    ],
  },
];

export function getAgentBySlug(slug: string): AgentRecord | undefined {
  return HEALTH_TECH_AGENTS.find((a) => a.slug === slug);
}

/**
 * Generates tailored, non-generic technical FAQs for every single one of the 16 modules
 * so deep technical, FHIR, API, and regulatory details live in a dedicated FAQ section.
 */
export function getAgentFaqs(agent: AgentRecord): FaqItem[] {
  const specSummary = agent.technicalSpecs
    .map((s) => `${s.parameter}: ${s.deterministicMechanism} (${s.fhirBinding})`)
    .join('; ');

  return [
    {
      question: `How does ${agent.codeName} execute under the hood without guessing?`,
      answer: `${agent.codeName} (${agent.name}) runs tested, rule-based Python verification logic rather than relying on statistical guesswork. Specifically: ${specSummary}.`,
    },
    {
      question: `Which HL7 FHIR R4 resources and endpoints does ${agent.codeName} bind to?`,
      answer: `It connects directly with ${agent.technicalSpecs.map((s) => s.fhirBinding).join(' | ')}. It runs side-by-side with Epic, Oracle Cerner, MEDITECH, or HAPI FHIR via SMART-on-FHIR v2 or mirrors legacy hospital HL7v2 messages.`,
    },
    {
      question: `Which compliance and clinical standards does ${agent.codeName} help satisfy?`,
      answer: `Built directly around ${agent.technicalSpecs.map((s) => s.standardAlignment).join(', ')}. Every action produces verifiable proof inside append-only audit storage or OASIS SARIF / compliance certificate exports.`,
    },
    {
      question: `How fast can our hospital or clinic deploy ${agent.codeName} in a pilot?`,
      answer: `You can run a 15-minute read-only SMART-on-FHIR v2 sidecar pilot alongside your existing system with zero downtime, or deploy the entire private container stack (UI :8000, Safety Engine :8081, SlainteFHIR :8082) inside your hospital VPC or offline environment.`,
    },
  ];
}
