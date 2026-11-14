export type VerticalLayoutVariant =
  | 'resuscitation-command'
  | 'longitudinal-care'
  | 'therapeutic-calm'
  | 'precision-odontogram'
  | 'dispensing-matrix'
  | 'rugged-field-tablet'
  | 'athletic-telemetry'
  | 'orbital-airgap';

export interface VerticalPalette {
  /** Dark or rich hero surface with guaranteed >= 7:1 contrast with heroText */
  heroBg: string;
  heroGradient: string;
  heroText: string;
  heroMuted: string;
  /** Primary accent with >= 4.5:1 contrast against #FFFFFF */
  accentMain: string;
  /** Soft surface tint for feature panels */
  surfaceTint: string;
  borderTint: string;
  badgeBg: string;
  badgeText: string;
}

export interface VerticalWorkflowStep {
  step: string;
  title: string;
  detail: string;
}

export interface VerticalRecord {
  slug: string; // /verticals/<slug>/
  forLabel: string; // "For Emergency Departments", etc.
  brand: string;
  roleLabel: string;
  layoutVariant: VerticalLayoutVariant;
  dashboardScreenshot: string;
  palette: VerticalPalette;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroLead: string;
  mobileReadyNote: string;
  kpis: [
    { label: string; value: string; detail: string },
    { label: string; value: string; detail: string },
    { label: string; value: string; detail: string },
  ];
  painPointsSolved: [
    { pain: string; deterministicFix: string },
    { pain: string; deterministicFix: string },
    { pain: string; deterministicFix: string },
  ];
  workflowSteps: [VerticalWorkflowStep, VerticalWorkflowStep, VerticalWorkflowStep];
  buyerRoi: {
    clinicalBuyer: string;
    economicImpact: string;
    complianceGuarantee: string;
  };
  assignedAgentSlugs: string[];
}

export const INDUSTRY_VERTICALS: VerticalRecord[] = [
  {
    slug: 'emergency-departments',
    forLabel: 'For Emergency Departments',
    brand: 'SlainteED',
    roleLabel: 'ED Consultants, Registrars & Triage Nurses',
    layoutVariant: 'resuscitation-command',
    dashboardScreenshot: '/images/verticals/emergency-departments.png',
    palette: {
      heroBg: '#1E1B2E',
      heroGradient: 'linear-gradient(135deg, #0F172A 0%, #3B0D1E 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#E2E8F0',
      accentMain: '#B91C1C', // 6.47:1 on white
      surfaceTint: '#FEF2F2',
      borderTint: '#FECACA',
      badgeBg: '#FEE2E2',
      badgeText: '#7F1D1D', // 9.2:1 on #FEE2E2
    },
    seoTitle: 'Emergency Department Triage & Resuscitation Software (SlainteED) | SlainteTech',
    seoDescription:
      'Cut missed sepsis deterioration and 20-minute shift handovers. SlainteED automates Manchester Triage (Cat 1-5), 24h RCP NEWS2 tracking, 3-Tier prescribing checks, and cited consultant briefings.',
    heroHeadline: 'Spot Deteriorating Patients Faster. Finish Shift Handovers in Seconds.',
    heroLead:
      'Overcrowded emergency floors cannot afford delayed escalation or charting backlogs. SlainteED computes exact Manchester Triage (Cat 1 to 5) and RCP NEWS2 scores in under 10ms, blocks unsafe prescriptions automatically, and builds source-cited consultant handovers ready for sign-off.',
    mobileReadyNote: 'Adapts cleanly from resuscitation wall boards to bedside iPads and registrar tablets.',
    kpis: [
      { label: 'Acute Triage Engine', value: 'MTS Cat 1 to 5', detail: 'Instant 0m Immediate to 240m Non-Urgent priority routing' },
      { label: 'Sepsis Deterioration', value: 'RCP NEWS2 0 to 20', detail: '24h vital trajectories with auto-alerts when score reaches 7 or higher' },
      { label: 'Prescribing Gate', value: '3-Tier Rx-Guard', detail: 'Allergy, high-risk interaction & renal eGFR block before sign-off' },
    ],
    painPointsSolved: [
      {
        pain: 'Waiting-room deterioration missed between manual whiteboard checks',
        deterministicFix: 'Live vital ingestion recalculates RCP NEWS2 on every reading and flags high-risk bays automatically.',
      },
      {
        pain: 'Slow 08:00 and 20:00 shift handovers across 30+ boarded patients',
        deterministicFix: 'One-click handover summaries cite exact vital trends, NEWS2 scores, lab markers, and documented allergies.',
      },
      {
        pain: 'Missed HIPE complexity funding from uncoded sepsis, lactate, and acute kidney injury labs',
        deterministicFix: 'Pre-discharge lab audits flag uncoded SNOMED and ICD-10-AM diagnoses so hospitals capture full reimbursement.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Rapid Triage or Ambulance Arrival', detail: 'Ingest ambulance records, hospital HL7v2 feeds, or bedside vitals in under a second.' },
      { step: '02', title: 'Protected Acute Prescribing & Orders', detail: 'Record vitals, diagnoses, and medication orders with instant allergy, interaction, and kidney safety screening.' },
      { step: '03', title: 'Consultant Sign-Off & HIPE Capture', detail: 'Lock handovers and discharge plans with cryptographically signed practitioner attribution.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'Clinical Director of Emergency Medicine & Chief Nursing Information Officer',
      economicImpact: 'Recovers uncoded acute HIPE DRG revenue while cutting shift handover preparation to seconds.',
      complianceGuarantee: 'Aligned with HIQA INEWS escalation rules, GDPR Art. 9 emergency access logging, and complete audit trails.',
    },
    assignedAgentSlugs: [
      'manchester-triage-news2-acuity-agent',
      'cited-patient-handover-summariser-agent',
      'pharmacotherapy-allergy-renal-safety-agent',
      'multimodal-hl7v2-fhir-ingestion-agent',
      'immutable-clinical-ai-audit-agent',
      'autonomous-icd10-drg-clinical-coding-agent',
    ],
  },
  {
    slug: 'general-practice',
    forLabel: 'For General Practitioners & Community Nursing',
    brand: 'SlainteGP',
    roleLabel: 'GPs, Practice Nurses & Care-at-Home Community Nurses',
    layoutVariant: 'longitudinal-care',
    dashboardScreenshot: '/images/verticals/general-practice.png',
    palette: {
      heroBg: '#0C2D48',
      heroGradient: 'linear-gradient(135deg, #0F172A 0%, #0E4D6E 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#E0F2FE',
      accentMain: '#155E75', // 7.18:1 on white
      surfaceTint: '#F0F9FF',
      borderTint: '#BAE6FD',
      badgeBg: '#E0F2FE',
      badgeText: '#0C4A6E', // 9.1:1 on #E0F2FE
    },
    seoTitle: 'GP Practice & Community Nursing Software (SlainteGP) | SlainteTech',
    seoDescription:
      'End evening charting backlogs in 10-minute consultations and home visits with instant structured SOAP notes, safe repeat prescribing, and automated PCRS claims.',
    heroHeadline: 'Finish Clinics On Time With Zero Evening Charting Backlogs.',
    heroLead:
      'Built equally for busy GP consulting rooms and mobile Care-at-Home Nurses. SlainteGP converts consultations into structured SOAP notes for 1-tap sign-off, automates HSE Chronic Disease Management, and protects every repeat prescription.',
    mobileReadyNote: 'Touch-optimised 44px mobile & tablet drawer + quick-action bottom dock built specifically for Community Health and Care-at-Home Nurses on the move.',
    kpis: [
      { label: 'Ambient Consultation', value: 'Voice -> SOAP', detail: 'Live dictation drafts SOAP notes & pre-screened FHIR orders' },
      { label: 'Mobile Home-Care UX', value: 'Phone & Tablet', detail: 'Responsive off-canvas drawer & 44px touch controls for home visits' },
      { label: 'GMS & PCRS Ready', value: 'HSE GMS OID', detail: 'Automatic GMS deduplication & 1-click PCRS claim CSV export' },
    ],
    painPointsSolved: [
      {
        pain: '2+ hours of evening SOAP note typing after full GP surgeries or community home-visit rounds',
        deterministicFix: 'SlainteScribe-Voice structures live consultations into SOAP DocumentReferences and pre-screened orders for 1-click co-sign.',
      },
      {
        pain: 'Clunky desktop-only EHRs that fail Care-at-Home Nurses standing in a patient’s living room',
        deterministicFix: 'Responsive mobile/tablet layout provides thumb-reachable Patient, Vertical, Agent, and Vitals recording on 4G/5G phones and iPads.',
      },
      {
        pain: 'Unsafe repeat prescribing when hospital discharge letters alter renal function or add anticoagulants',
        deterministicFix: '3-Tier SlainteRx-Guard checks latest LOINC eGFR and active DDI pairs on every repeat renewal.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Consult in Clinic or Patient’s Home', detail: 'Open the longitudinal GMS-linked chart on desktop, tablet, or mobile and start Ambient Voice Scribe.' },
      { step: '02', title: 'Review CDM Targets & 3-Tier Rx-Guard', detail: 'Inspect HbA1c, BP, and eGFR trends while screening new or 28-day repeat prescriptions automatically.' },
      { step: '03', title: 'Co-Sign & Export HSE PCRS Claims', detail: 'Commit structured FHIR resources with GDPR Art. 9 PII protection and export monthly GMS batches.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'GP Principals, Primary Care Networks & Community Healthcare Organisations (CHOs)',
      economicImpact: 'Saves 6–10 clinician hours per week on consultation notes and streamlines HSE CDM & PCRS reimbursement.',
      complianceGuarantee: 'Irish GMS OID Conformance, EU GDPR Art. 9 De-Identification & IMC Provenance Attribution.',
    },
    assignedAgentSlugs: [
      'ambient-clinical-voice-scribe-agent',
      'pharmacotherapy-allergy-renal-safety-agent',
      'cited-patient-handover-summariser-agent',
      'gdpr-clinical-privacy-deidentification-agent',
      'autonomous-icd10-drg-clinical-coding-agent',
      'multimodal-hl7v2-fhir-ingestion-agent',
    ],
  },
  {
    slug: 'psychiatry',
    forLabel: 'For Psychiatrists & Mental Health',
    brand: 'SlaintePsych',
    roleLabel: 'Consultant Psychiatrists, CMHTs & Liaison Mental Health Nurses',
    layoutVariant: 'therapeutic-calm',
    dashboardScreenshot: '/images/verticals/psychiatry.png',
    palette: {
      heroBg: '#1E1B3A',
      heroGradient: 'linear-gradient(135deg, #17153B 0%, #3B1D5E 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#EDE9FE',
      accentMain: '#5B21B6', // 8.38:1 on white
      surfaceTint: '#F5F3FF',
      borderTint: '#DDD6FE',
      badgeBg: '#EDE9FE',
      badgeText: '#4C1D95', // 10.1:1 on #EDE9FE
    },
    seoTitle: 'For Psychiatrists & Mental Health Services (SlaintePsych) | SlainteTech',
    seoDescription:
      'Psychiatry & Community Mental Health Team (CMHT) vertical featuring MSE documentation, LOINC PHQ-9/GAD-7 tracking, psychotropic renal/DDI safety, and GDPR Art. 9 isolation.',
    heroHeadline: 'High-Confidentiality Mental State Documentation, LOINC Scales & Psychotropic Safety',
    heroLead:
      'Mental health clinicians require narrative depth without sacrificing eye contact, strict compartment privacy, and vigilant renal/electrolyte monitoring for complex psychotropic regimens. SlaintePsych is now built natively into the core platform.',
    mobileReadyNote: 'Supports Community Mental Health Teams (CMHTs) and Crisis Home Treatment nurses on mobile and tablet devices.',
    kpis: [
      { label: 'Rating Scales', value: 'PHQ-9 & GAD-7', detail: 'Standardized LOINC 44261-6 & 70274-6 longitudinal scoring' },
      { label: 'Psychotropic Gate', value: 'Renal & DDI', detail: 'Screens eGFR impairment, CNS depressant stacking & allergies' },
      { label: 'Record Isolation', value: 'BOLA + Art. 9', detail: 'Compartment-isolated notes with SIEM-audited Break-the-Glass' },
    ],
    painPointsSolved: [
      {
        pain: 'Typing lengthy Mental State Examinations (MSE) disrupts therapeutic rapport during consultations',
        deterministicFix: 'Ambient Voice Scribe & structured MSE composer file LOINC-coded psychiatric assessments in minutes.',
      },
      {
        pain: 'Polypharmacy interactions and declining renal eGFR missed across primary and specialist care',
        deterministicFix: '3-Tier SlainteRx-Guard cross-checks CNS regimens, Opioid/Benzodiazepine co-prescribing, and LOINC eGFR labs.',
      },
      {
        pain: 'Unauthorized snooping into sensitive psychiatric histories inside shared hospital EHRs',
        deterministicFix: 'SlainteShield-BOLA verifies compartment boundaries while SlainteGov-GDPR logs and alerts on every emergency override.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Select Service User & Review Risk Trajectory', detail: 'View longitudinal PHQ-9, GAD-7, active psychotropics, and latest renal eGFR on one calm clinical screen.' },
      { step: '02', title: 'Record MSE & Standardized LOINC Scales', detail: 'Document appearance, mood, thought, perception, capacity, and crisis safety plan directly to FHIR R4.' },
      { step: '03', title: 'Enforce GDPR Art. 9 & BOLA Confidentiality', detail: 'Every handover summary strips direct PII and every out-of-team emergency access triggers an immutable audit grant.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'Clinical Directors of Psychiatry, Mental Health Commission Compliance Leads & Private Clinics',
      economicImpact: 'Reduces MSE & tribunal/referral dictation overhead while preventing high-cost psychotropic adverse drug events.',
      complianceGuarantee: 'EU GDPR Art. 9 Special Category Isolation, Mental Health Audit Non-Repudiation & OWASP BOLA Verification.',
    },
    assignedAgentSlugs: [
      'gdpr-clinical-privacy-deidentification-agent',
      'ambient-clinical-voice-scribe-agent',
      'pharmacotherapy-allergy-renal-safety-agent',
      'bola-authorization-red-team-agent',
      'immutable-clinical-ai-audit-agent',
      'cited-patient-handover-summariser-agent',
    ],
  },
  {
    slug: 'dentistry',
    forLabel: 'For Dental Surgeons & DSOs',
    brand: 'SlainteDent',
    roleLabel: 'Dental Surgeons, Oral Surgeons & Periodontists',
    layoutVariant: 'precision-odontogram',
    dashboardScreenshot: '/images/verticals/dentistry.png',
    palette: {
      heroBg: '#0B2F35',
      heroGradient: 'linear-gradient(135deg, #082026 0%, #0E5A63 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#CCFBF1',
      accentMain: '#0F626A', // 6.84:1 on white
      surfaceTint: '#F0FDFA',
      borderTint: '#99F6E4',
      badgeBg: '#CCFBF1',
      badgeText: '#115E59', // 7.3:1 on #CCFBF1
    },
    seoTitle: 'For Dental Surgeons, Oral Surgery & DSOs (SlainteDent) | SlainteTech',
    seoDescription:
      'Interactive 32-tooth FDI Odontogram (11–48), 6-sextant BPE periodontal charting, and chairside antibiotic/anticoagulant medical clearance on HL7 FHIR R4.',
    heroHeadline: 'Chairside 32-Tooth FDI Odontogram & Instant Medical Clearance Before You Inject or Extract',
    heroLead:
      'Dental software is historically cut off from medical pathology and pharmacology. SlainteDent unites interactive FDI 11–48 tooth charting and 6-sextant BPE periodontal scoring with live medical allergy, anticoagulant, and renal safety checks.',
    mobileReadyNote: 'Chairside tablet-friendly 32-tooth FDI Odontogram with touch-scrollable quadrants for surgery iPads.',
    kpis: [
      { label: 'Dental Charting', value: 'FDI 11–48', detail: 'Interactive 32-tooth status persisted as SNOMED/LOINC FHIR Observations' },
      { label: 'Periodontal Matrix', value: '6-Sextant BPE', detail: '0–4* Basic Periodontal Examination recorded chairside' },
      { label: 'Pre-Op Medical Gate', value: 'Allergy & Bleed', detail: 'Flags Penicillin allergy, Warfarin/DOACs & NSAID renal risk' },
    ],
    painPointsSolved: [
      {
        pain: 'Prescribing Amoxicillin or Ibuprofen post-extraction without visibility into GP allergy or CKD labs',
        deterministicFix: '3-Tier SlainteRx-Guard intercepts Beta-Lactam cross-reactivity, Warfarin+NSAID bleed risk, and eGFR < 60.',
      },
      {
        pain: 'Paper medical history questionnaires that miss recently started bisphosphonates or DOACs',
        deterministicFix: 'Reads active FHIR MedicationRequests and flags anticoagulants/hemostasis risks right above the Odontogram.',
      },
      {
        pain: 'Siloed proprietary dental charts that cannot exchange referrals with hospital oral & maxillofacial units',
        deterministicFix: 'Persists dental charts and operative notes as standard HL7 FHIR R4 Observations and DocumentReferences.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Automatic Pre-Procedure Medical Clearance', detail: 'Review highlighted Penicillin/Latex allergies and Warfarin/Apixaban hemostasis banners upon opening the chart.' },
      { step: '02', title: 'Tap-to-Chart 32-Tooth FDI & 6-Sextant BPE', detail: 'Toggle Sound, Carious, Restored, Endodontic, Crown, Extraction Planned, or Missing states per tooth.' },
      { step: '03', title: 'Prescribe Safely & File Operative Note', detail: 'Screen post-op analgesia/antibiotics through SlainteRx-Guard and save the signed operative note to FHIR R4.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'Dental Support Organisations (DSOs), Hospital Maxillofacial Units & Specialist Practices',
      economicImpact: 'Eliminates chairside medical-clearance delays and standardizes multi-clinic periodontal & surgical audits.',
      complianceGuarantee: 'SNOMED-CT Dental Binding, Dental Council Audit Trail & Deterministic Prescribing Safety.',
    },
    assignedAgentSlugs: [
      'pharmacotherapy-allergy-renal-safety-agent',
      'multimodal-hl7v2-fhir-ingestion-agent',
      'cited-patient-handover-summariser-agent',
      'gdpr-clinical-privacy-deidentification-agent',
    ],
  },
  {
    slug: 'pharmacy',
    forLabel: 'For Clinical & Community Pharmacies',
    brand: 'SlaintePharm',
    roleLabel: 'Supervising Pharmacists, Hospital Clinical Pharmacists & Dispensers',
    layoutVariant: 'dispensing-matrix',
    dashboardScreenshot: '/images/verticals/pharmacy.png',
    palette: {
      heroBg: '#092B1E',
      heroGradient: 'linear-gradient(135deg, #062016 0%, #0F5132 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#DCFCE7',
      accentMain: '#15803D', // 5.13:1 on white
      surfaceTint: '#F0FDF4',
      borderTint: '#BBF7D0',
      badgeBg: '#DCFCE7',
      badgeText: '#14532D', // 9.4:1 on #DCFCE7
    },
    seoTitle: 'For Clinical & Community Pharmacies (SlaintePharm) | SlainteTech',
    seoDescription:
      'Active MedicationRequest dispensing verification queue powered by 3-Tier SlainteRx-Guard (Allergy, DDI, eGFR), PSI Provenance sign-off, and HSE PCRS GMS export.',
    heroHeadline: 'Lab-Aware 3-Tier Dispensing Safety & Automated HSE PCRS Reimbursement',
    heroLead:
      'Pharmacists are the last clinical safety barrier before medicines reach the patient, yet dispensaries rarely see kidney function labs and suffer severe alert fatigue. SlaintePharm ranks queues by real clinical risk and catches dangerous interactions automatically.',
    mobileReadyNote: 'Ward-round tablet ready for hospital clinical pharmacists reviewing inpatient drug kardexes at the bedside.',
    kpis: [
      { label: 'Pharmacology Gate', value: '3-Tier Engine', detail: 'Allergy cross-reactivity + ISMP High-Alert DDI + LOINC eGFR' },
      { label: 'GMS Claims', value: 'PCRS Batch CSV', detail: '1-click verified Irish GMS OID monthly claim export' },
      { label: 'RBAC Separation', value: 'PSI Enforced', detail: 'Granular pharmacist role gate & immutable Provenance sign-off' },
    ],
    painPointsSolved: [
      {
        pain: 'Dispensing Clarithromycin alongside Simvastatin or Metformin in unrecognised Stage 4 CKD',
        deterministicFix: 'SlainteRx-Guard evaluates active regimens and LOINC eGFR/Potassium labs automatically before dispense.',
      },
      {
        pain: 'Rejected monthly HSE PCRS claims caused by malformed GMS identifiers or non-UCUM dosage units',
        deterministicFix: 'SlainteShield-FHIR validates GMS OIDs and UCUM units upstream of the `/enterprise/pcrs/export` batch.',
      },
      {
        pain: 'Weak separation of duties between prescribing and dispensing in shared clinical software',
        deterministicFix: 'Granular clinical RBAC restricts Dispense Verified / Hold Rx actions exclusively to registered pharmacists.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Risk-Sorted Active Dispensing Queue', detail: 'Flagged prescriptions with cross-reactivity, high-alert DDIs, or renal alerts sort automatically to the top.' },
      { step: '02', title: 'Pharmacist Clinical Intervention or Verify', detail: 'Place unsafe orders On-Hold with prescriber query notes or mark Dispensed & PSI Verified in one click.' },
      { step: '03', title: 'Export Verified HSE PCRS Batch', detail: 'Download clean monthly GMS reimbursement CSVs with verified timestamps and dispenser attribution.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'Pharmacy Chains, Hospital Chief Pharmacists & Supervising Pharmacists',
      economicImpact: 'Cuts PCRS claim rejections and focuses clinical pharmacist time on genuine high-severity DDI/renal interventions.',
      complianceGuarantee: 'PSI Inspection Auditability, HL7 FHIR R4 UCUM Conformance & RBAC Separation of Duties.',
    },
    assignedAgentSlugs: [
      'pharmacotherapy-allergy-renal-safety-agent',
      'fhir-r4-conformance-terminology-agent',
      'immutable-clinical-ai-audit-agent',
      'gdpr-clinical-privacy-deidentification-agent',
    ],
  },
  {
    slug: 'ambulance-ems',
    forLabel: 'For Ambulance & Paramedic Services',
    brand: 'SlainteEMS',
    roleLabel: 'Advanced Paramedics, EMTs & National Ambulance Control',
    layoutVariant: 'rugged-field-tablet',
    dashboardScreenshot: '/images/verticals/ambulance-ems.png',
    palette: {
      heroBg: '#291805',
      heroGradient: 'linear-gradient(135deg, #1C1917 0%, #5C2D0C 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#FEF3C7',
      accentMain: '#B45309', // 5.02:1 on white
      surfaceTint: '#FFFBEB',
      borderTint: '#FDE68A',
      badgeBg: '#FEF3C7',
      badgeText: '#78350F', // 8.7:1 on #FEF3C7
    },
    seoTitle: 'Ambulance Tablet ePCR & ED Pre-Alert Software (SlainteEMS) | SlainteTech',
    seoDescription:
      'Glove-friendly rugged tablet ePCR for paramedics with 10-second vital entry, instant MTS Cat 1-5 and NEWS2 scoring, and 1-tap hospital resuscitation bay handoff.',
    heroHeadline: 'Glove-Friendly Tablet ePCR, Instant Acuity Scoring & Direct Resus Pre-Alerts',
    heroLead:
      'Built for moving ambulances, roadside trauma, and rugged field tablets. Paramedics record vitals in 10 seconds with 44px glove-ready touch buttons, compute validated MTS and NEWS2 scores offline or over 5G, and stream structured records ahead to the hospital resuscitation bay.',
    mobileReadyNote: 'Built mobile- and tablet-first: coarse-pointer 44px inputs, anti-zoom 16px touch fields, and one-thumb bottom dock for ambulance crews.',
    kpis: [
      { label: 'Roadside Triage', value: '<10ms MTS/NEWS2', detail: 'Deterministic Cat 1–5 & NEWS2 0–20 from ambulance vitals' },
      { label: 'Rugged Ergonomics', value: '44px Touch UI', detail: 'High-contrast mode & glove-safe controls on Toughbooks/iPads' },
      { label: 'Hospital Pre-Alert', value: '1-Tap FHIR Push', detail: 'Transmits Patient, Vitals, Allergies & Meds to ED queue' },
    ],
    painPointsSolved: [
      {
        pain: 'Crackly radio pre-alerts and lost paper ambulance sheets during chaotic resuscitation handovers',
        deterministicFix: 'POST /fhir/Vertical/ems/epcr transmits a complete SNOMED/LOINC FHIR R4 Bundle directly to the receiving ED.',
      },
      {
        pain: 'Tiny desktop buttons and hover-only menus that fail on bouncing ambulance tablets',
        deterministicFix: 'Responsive mobile drawer, sticky bottom quick-dock, and High-Contrast Clinical Priority Mode work cleanly in the field.',
      },
      {
        pain: 'Handwritten field notes and ECG observations stranded outside the electronic record',
        deterministicFix: 'SlainteEngine-Ingest extracts photographed triage notes into structured FHIR Observations.',
      },
    ],
    workflowSteps: [
      { step: '01', title: '10-Second Roadside Vital Entry on Tablet', detail: 'Capture SBP, DBP, HR, SpO2, RR, Temp, Known Allergies, and Field Meds Given on large touch inputs.' },
      { step: '02', title: 'Automatic MTS Cat 1-5 & NEWS2 Calculation', detail: 'Verified clinical rules compute exact triage target minutes and sepsis or hypoxia escalation tiers instantly.' },
      { step: '03', title: 'Zero-Latency Receiving ED Handover', detail: 'Receiving ED consultants see the casualty live in their Cat 1–5 queue before the ambulance bay doors open.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'National Ambulance Services, Private EMS Operators & Aeromedical Retrieval Teams',
      economicImpact: 'Shaves critical minutes off ambulance-to-resuscitation turnaround and eliminates duplicate ED triage re-entry.',
      complianceGuarantee: 'PHECC / Pre-Hospital Audit Traceability, HL7 FHIR R4 Interoperability & Offline-Capable Architecture.',
    },
    assignedAgentSlugs: [
      'manchester-triage-news2-acuity-agent',
      'multimodal-hl7v2-fhir-ingestion-agent',
      'cited-patient-handover-summariser-agent',
      'immutable-clinical-ai-audit-agent',
    ],
  },
  {
    slug: 'sports-medicine',
    forLabel: 'For Elite Sports Clubs & Federations',
    brand: 'SlainteSport',
    roleLabel: 'Heads of Sports Medicine, Team Physicians & Club Physiotherapists',
    layoutVariant: 'athletic-telemetry',
    dashboardScreenshot: '/images/verticals/sports-medicine.png',
    palette: {
      heroBg: '#0B2922',
      heroGradient: 'linear-gradient(135deg, #0F172A 0%, #114B3C 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#D1FAE5',
      accentMain: '#0F766E', // 5.47:1 on white
      surfaceTint: '#F0FDFA',
      borderTint: '#99F6E4',
      badgeBg: '#CCFBF1',
      badgeText: '#134E4A', // 8.9:1 on #CCFBF1
    },
    seoTitle: 'For Elite Sports Clubs & Federations (SlainteSport) | SlainteTech',
    seoDescription:
      'Athlete performance medicine vertical featuring squad physiological readiness, SCAT6 concussion Return-to-Play cryptographic Provenance, TUE screening, and BOLA privacy.',
    heroHeadline: 'Cryptographic Return-to-Play Clearance, TUE Pharmacology & BOLA-Isolated Athlete Privacy',
    heroLead:
      'High-value squad medical data is a prime target for leaks, media intrusion, and medico-legal concussion disputes. SlainteSport combines pitchside physiological tracking, Therapeutic Use Exemption (TUE) medication screening, and SHA-256 signed Return-to-Play clearances.',
    mobileReadyNote: 'Pitchside iPad and dressing-room tablet responsive interface for immediate concussion & injury assessment.',
    kpis: [
      { label: 'Return-to-Play', value: 'SCAT6 + SHA-256', detail: 'Team physician cryptographic FHIR Provenance clearance' },
      { label: 'Roster Privacy', value: 'BOLA Red-Teamed', detail: 'Continuous cross-athlete compartment isolation probing' },
      { label: 'Pharmacology Gate', value: 'Rx & TUE Check', detail: 'Allergy, NSAID renal & DDI screening before matchday meds' },
    ],
    painPointsSolved: [
      {
        pain: 'Disputed concussion or hamstring Return-to-Play sign-offs during high-stakes tournament weeks',
        deterministicFix: '1-click Team Doctor clearance writes an immutable SHA-256 signed FHIR Provenance + clinical note.',
      },
      {
        pain: 'Sensitive athlete medical records exposed across broad coaching or analytics logins',
        deterministicFix: 'SlainteShield-BOLA continuously tests CompartmentDefinition/Patient boundaries to guarantee strict isolation.',
      },
      {
        pain: 'Repeated NSAID analgesia masking renal strain or interacting with concurrent prescriptions',
        deterministicFix: '3-Tier SlainteRx-Guard checks athlete allergies, DDIs, and LOINC renal biomarkers prior to prescribing.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Monitor Squad Bio-Telemetry Board', detail: 'Review live HR, SpO2, BP, Temp, and NEWS2 physiological drift across the first-team roster.' },
      { step: '02', title: 'Screen Matchday & Recovery Prescriptions', detail: 'Verify analgesia and recovery regimens through 3-Tier SlainteRx-Guard on tablet or desktop.' },
      { step: '03', title: 'Sign Cryptographic Return-to-Play Clearance', detail: 'Bind IMC registration and timestamped SHA-256 Provenance before clearing an athlete for selection.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'Premier Rugby, Football, GAA, Olympic Federations & Pro Sports Medical Departments',
      economicImpact: 'Protects multi-million-euro squad availability while eliminating medico-legal clearance ambiguity.',
      complianceGuarantee: 'OWASP API1:2023 BOLA Verification, EU GDPR Art. 9 Athlete Privacy & Non-Repudiable Provenance.',
    },
    assignedAgentSlugs: [
      'bola-authorization-red-team-agent',
      'manchester-triage-news2-acuity-agent',
      'pharmacotherapy-allergy-renal-safety-agent',
      'gdpr-clinical-privacy-deidentification-agent',
      'immutable-clinical-ai-audit-agent',
    ],
  },
  {
    slug: 'astronaut-health',
    forLabel: 'For Astronaut & Aerospace Medicine',
    brand: 'SlainteAstro',
    roleLabel: 'Flight Surgeons, Crew Medical Officers & Extreme-Environment Missions',
    layoutVariant: 'orbital-airgap',
    dashboardScreenshot: '/images/verticals/astronaut-health.png',
    palette: {
      heroBg: '#090D1F',
      heroGradient: 'linear-gradient(135deg, #020617 0%, #1E1B4B 100%)',
      heroText: '#FFFFFF',
      heroMuted: '#E0E7FF',
      accentMain: '#3730A3', // 9.42:1 on white
      surfaceTint: '#EEF2FF',
      borderTint: '#C7D2FE',
      badgeBg: '#E0E7FF',
      badgeText: '#1E1B4B', // 12.6:1 on #E0E7FF
    },
    seoTitle: 'Aerospace & Offline Medical Decision Support (SlainteAstro) | SlainteTech',
    seoDescription:
      '100% air-gapped medical bay running clinical triage, prescribing safety checks, and FHIR telemetry completely offline with zero Earth-cloud dependency.',
    heroHeadline: '100% Air-Gapped Clinical Decision Support. Zero Cloud Uplink Required.',
    heroLead:
      'On deep-space, submarine, or remote polar missions, 22-minute communication blackouts make cloud software useless and medication mistakes fatal. SlainteAstro runs all clinical triage, prescribing safety gates, and audit logging locally inside a self-contained offline appliance.',
    mobileReadyNote: 'Runs self-contained on habitat workstations and crew medical tablets over local spacecraft Wi-Fi or Ethernet.',
    kpis: [
      { label: 'Earth Uplink Required', value: '0 Bytes', detail: '100% offline local appliance execution + local FHIR record store' },
      { label: 'Integrated Modules', value: 'All 16 Modules', detail: 'Full security, audit, triage, documentation & prescribing gate onboard' },
      { label: 'EVA Flight Clearance', value: 'SHA-256 Signed', detail: 'Cryptographic Flight Surgeon & Crew Medical Officer sign-off logs' },
    ],
    painPointsSolved: [
      {
        pain: 'Cloud medical software fails completely during orbital blackout, deep-space latency, or naval EMCON',
        deterministicFix: 'Self-contained container appliance runs 100% locally (`SlainteFHIR :8082` + Safety Gate `:8081` + local engine).',
      },
      {
        pain: 'Unchecked dosing errors or hypoxia miscalculations in isolated high-stress emergencies',
        deterministicFix: 'All physiological scoring (NEWS2/MTS) and 3-Tier prescribing gates run in verified Python rules, never guessed.',
      },
      {
        pain: 'Software supply-chain tampering or unverified telemetry modifications during multi-month missions',
        deterministicFix: 'SlainteShield-CVE & SlainteGov-Audit continuously verify dependency pins, SRI hashes, and append-only SQLite triggers.',
      },
    ],
    workflowSteps: [
      { step: '01', title: 'Continuous Habitat & EVA Bio-Telemetry', detail: 'Ingest crew SpO2, HR, BP, temperature, and lab panels into the onboard SlainteFHIR R4 server.' },
      { step: '02', title: 'Local Acuity Scoring & Prescribing Checks', detail: 'Detect subtle NEWS2 hypoxia drift and screen onboard medical-kit prescriptions with zero cloud calls.' },
      { step: '03', title: 'Cryptographic EVA Clearance & Telemetry Sync', detail: 'Sign EVA clearances with SHA-256 Provenance ready for deterministic Earth-sync upon signal acquisition.' },
    ],
    buyerRoi: {
      clinicalBuyer: 'Space Agencies (ESA / NASA Commercial), Subsea/Polar Expeditions & Sovereign Defence Medical Units',
      economicImpact: 'Proves extreme edge-autonomy: if SlainteTech runs safely in deep space without internet, it runs effortlessly inside an air-gapped hospital.',
      complianceGuarantee: '100% Air-Gapped Data Sovereignty, Deterministic Clinical Math & Tamper-Evident Mission Logs.',
    },
    assignedAgentSlugs: [
      'manchester-triage-news2-acuity-agent',
      'pharmacotherapy-allergy-renal-safety-agent',
      'healthcare-cve-vulnerability-agent',
      'immutable-clinical-ai-audit-agent',
      'ambient-clinical-voice-scribe-agent',
      'bola-authorization-red-team-agent',
    ],
  },
];

export function getVerticalBySlug(slug: string): VerticalRecord | undefined {
  return INDUSTRY_VERTICALS.find((v) => v.slug === slug);
}
