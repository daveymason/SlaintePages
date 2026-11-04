# SlaintePages — SlainteTech AI Security Labs (Master Agentic Product & Website Blueprint)

**Repository:** `/home/adman-voids/Desktop/Code/SlaintePages`  
**Company Identity:** **SlainteTech AI Security Labs**  
**Tagline:** *Autonomous Clinical, Compliance & Cybersecurity Agents Bound by Deterministic FastMCP Guardrails on HL7 FHIR R4.*

---

## 1. Cohesive Company & Product Narrative (Zero Waffle)

**SlainteTech AI Security Labs** builds **Autonomous Healthcare, Privacy & Security Agents**.

Generic LLM wrappers fail in healthcare because language models hallucinate clinical math, violate GDPR data-minimisation rules, and ignore API authorization boundaries. SlainteTech solves this by separating **Agentic Reasoning** from **Deterministic Execution**:

1. **The Sovereign Substrate (`SlainteFHIR` + `SlainteScan` FastMCP):**
   - `SlainteFHIR` (`:8082`) stores verified HL7 FHIR R4 patient compartments with SHA-256 `Provenance` sign-off.
   - `SlainteScan` (`:8081`) exposes zero-hallucination Python clinical tools via the Model Context Protocol (MCP): Manchester Triage (Cat 1–5), RCP NEWS2 (0–20), Drug-Allergy Cross-Reactivity matrices, and SNOMED-CT/LOINC/UCUM bindings. Agents *must* call these deterministic tools—they never guess clinical numbers in their weights.
2. **The 9-Agent Autonomous Fleet (`/agents` Hub + Embedded In-App Copilots):**
   - Users manage, configure, and trigger all **9 specialized agents** from the sidebar **"Agents"** Command Center (`/agents`), including per-agent settings (model assignment, guardrails, execution schedules), while clinical agents remain embedded directly where clinicians work (e.g., **Patient Summariser Agent** on the Patient Details card, **Rx-Guard** in the Intake & Prescribing modals).
   - Divided into three squads:
     - **Security & Red-Team Squad (`SlainteShield`):** `BOLA Red-Team Agent`, `FHIR R4 Conformance Agent`, and `Software & CVE Vulnerability Agent`.
     - **Governance & Privacy Squad (`SlainteGov`):** `GDPR & Data Privacy Agent` and `Immutable Clinical & AI Audit Agent`.
     - **Clinical & Ingestion Squad (`SlainteClinical`):** `Multimodal Ingestion Agent`, `Patient Summariser Agent`, `Medication Safety Agent`, and `Acuity Triage Agent`.
3. **Adaptive Multi-Vertical Cockpits (`SlainteDash` — "Sign in as..."):**
   - Signing in as **Emergency Department**, **General Practice**, **Dentist**, **Pharmacy**, **Ambulance EMS**, **Elite Sports Club**, or **Astronaut Health** dynamically reconfigures the dashboard, navigation bar, and active agent squad—while the **BOLA**, **GDPR**, and **Audit** agents continuously verify cross-vertical access boundaries.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                      SLAINTETECH AI SECURITY LABS PLATFORM                        │
├───────────────────────────────────────────────────────────────────────────────────┤
│  3. ADAPTIVE VERTICAL COCKPITS (SlainteDash — "Sign in as...")                    │
│     ED Triage │ GP │ Dentist │ Pharmacy │ Ambulance EMS │ Elite Sports │ Astro    │
├───────────────────────────────────────────────────────────────────────────────────┤
│  2. THE 9-AGENT AUTONOMOUS FLEET (Sidebar "/agents" Hub + Embedded In-App Views)  │
│     [Squad A: SlainteShield Security & Red-Team]                                  │
│       • Agent 01: BOLA & Role-Boundary Red-Team Agent (OWASP API1:2023)           │
│       • Agent 02: FHIR R4 Conformance & Terminology Agent (SNOMED/LOINC/SARIF)    │
│       • Agent 03: Software Supply-Chain & App Vulnerability Agent (CVE/CSP/SRI)   │
│     [Squad B: SlainteGov Privacy & Regulatory Compliance]                         │
│       • Agent 04: GDPR, PHI Minimisation & BAA Gate Agent (EU GDPR Art. 9)        │
│       • Agent 05: Immutable Clinical & AI Audit Trail Agent (SHA-256 Provenance)  │
│     [Squad C: SlainteClinical Bedside & Ingestion — Also Embedded on App Pages]   │
│       • Agent 06: Multimodal Clinical Ingestion Agent (CSV / PDF / OCR ➔ R4)      │
│       • Agent 07: Patient Summariser & Handover Agent (Embedded on Patient Card)  │
│       • Agent 08: Pharmacotherapy & Allergy Safety Agent (Embedded in Intake/Rx)  │
│       • Agent 09: Acuity Triage & NEWS2 Deterioration Agent (Embedded in Queue)   │
├───────────────────────────────────────────────────────────────────────────────────┤
│  1. DETERMINISTIC SUBSTRATE (SlainteScan FastMCP 8081 + SlainteFHIR R4 8082)      │
│     Zero-Hallucination Python Rules • Irish GMS OID • SHA-256 Provenance          │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Smart Execution Order & Clean Structural Plan (Why Phase 11 Goes First)

### Why Phase 11 Must Precede Phase 9 Lite
Building **Phase 11 (Multi-Vertical "Sign in as..." Cockpits + The 9-Agent Hub)** first is the smartest engineering sequence because:
1. Introducing the 7 vertical sign-in roles (`ed`, `gp`, `dentist`, `pharmacy`, `ems`, `sports`, `astro`) creates new role-scoped views and access patterns.
2. **Agent 01 (`SlainteShield-BOLA`)**, **Agent 04 (`SlainteGov-GDPR`)**, and **Agent 05 (`SlainteGov-Audit`)** can then directly audit those vertical role boundaries, verify that `ai_exchange` and `audit_log` record the active vertical persona, and export unified compliance snapshots.
3. Instead of scattering code or renaming existing files that `286+` tests import (`ai/`, `local_fhir_store.py`, `fhir_client.py`), we use a **clean, zero-breakage modular layout**:
   - Keep `slainte-auditor/` (`conformance_filter.py`, `terminology_verifier.py`, `redteam_bola_agent.py`, `sarif_reporter.py`) intact as the execution backend for Agents 01–05.
   - Add a clean `agents_hub.py` registry in `SlainteDash` that defines all **9 Agents**, their per-agent settings (stored in `system_settings` SQLite table), their live diagnostic runners (`CVE/Headers Check`, `GDPR Compliance Check`, `Audit Trigger & Provenance Check`), and their embedded UI hooks.
   - Add a clean `verticals.py` registry in `SlainteDash` defining the **7 Vertical Cockpits**, their custom KPI cards, terminology focus, and default assigned agents.
   - Keep `/auditor` working as an alias to `/agents` so zero existing links or tests break.

### Execution Scope Table (Repos, Files & Estimated LOC)

| Step & Phase | Deliverable | Repositories Touched | Files Modified / Created | Est. LOC | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Step 1: Phase 11 + Phase 9 Lite (Unified)** | **Sidebar "Agents" Hub (`/agents` with 9 Agents & Per-Agent Settings)** + Embedded Patient/Intake Agents + `GDPR`, `CVE`, & `Audit` Agents + **"Sign in as..." 7 Vertical Cockpits** & Modernized Navigation | `SlainteDash` (`Patient-Dashboard-htmx-python-fhir`), `SlainteEngine` (`slainte-engine/frontend` & `slainte-auditor`) | **10 files** (`agents_hub.py`, `verticals.py`, `app.py`, `templates/agents.html`, `templates/agent_settings_modal.html`, `templates/login.html`, `templates/header.html`, `templates/sidebar.html`, `templates/dashboard.html`, `tests/test_agents_and_verticals.py`) | **~820 LOC** | **Low (<10%)** — Additive modules (`agents_hub.py`, `verticals.py`) preserving all existing route contracts |
| **Step 2: Phase 12 (`SlaintePages`)** | **SlaintePages** Public Startup Website showcasing the 9 Agents (`/agents/*`) & 7 Verticals (`/verticals/*`) (Next.js App Router, Netlify + Docker, SEO + GEO `llms.txt`) | `SlaintePages` (`/home/adman-voids/Desktop/Code/SlaintePages`), `slainte-engine/docker-compose.yml` | **~28 files** (`netlify.toml`, `Dockerfile`, `public/llms.txt`, 19 route pages) | **~2,100 LOC** | **Zero Risk to Core App (0%)** — Isolated repository & container |

---

## 3. Complete 9-Agent Fleet Specification (`/agents` Hub + Embedded Locations)

| ID | Agent Name | Squad | Where It Lives in `SlainteDash` | Per-Agent Settings Configurable in `/agents` | What It Verifies / Executes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **BOLA & Role-Boundary Red-Team Agent** (`SlainteShield-BOLA`) | Security (`SlainteShield`) | `/agents` Hub + Security Telemetry Drawer | Target FHIR URL, Probe Depth, Assigned Synthesis Model, Auto-Block on Leak | Samples live Victim/Attacker patient pairs, probes cross-patient (`CompartmentDefinition/Patient`) and cross-vertical endpoints for OWASP API1:2023 / CWE-863 leaks using Dual-Phase Reflection ($\mathcal{M}$). |
| **02** | **FHIR R4 Conformance & Terminology Agent** (`SlainteShield-FHIR`) | Security (`SlainteShield`) | `/agents` Hub + SARIF Export | Strict UCUM Mode, Irish GMS OID Enforcement, `$validate` Profile Level | Audits all FHIR R4 resources for unmapped SNOMED-CT/LOINC codes, non-UCUM units, and missing GMS OIDs; exports OASIS SARIF v2.1.0. |
| **03** | **Software & CVE Vulnerability Agent** (`SlainteShield-CVE`) | Security (`SlainteShield`) | `/agents` Hub + `/settings/security` | Dependency Pin Audit, CSP/SRI Header Check, Rate-Limiter Storage Verification | Inspects pinned Python dependencies (`requirements.txt`), verifies active HTTP security headers (`Content-Security-Policy`, `SRI sha384-`, `SameSite`, `HttpOnly`), and checks multi-worker `SqliteStorage` rate-limiting posture. |
| **04** | **GDPR & Clinical Privacy Agent** (`SlainteGov-GDPR`) | Governance (`SlainteGov`) | `/agents` Hub + `/settings/ai` & `/settings/security` | `AI_DEIDENTIFY` Mode (`auto`/`always`), `AI_ALLOW_REAL_PHI` Gate, `LOG_HASH_SALT` Check | Enforces EU GDPR Art. 9 & Irish HIQA data minimisation: verifies PII stripping before LLM context assembly, confirms salted SHA-256 subject pseudonymisation in logs, and blocks unauthorized external PHI egress. |
| **05** | **Immutable Clinical & AI Audit Agent** (`SlainteGov-Audit`) | Governance (`SlainteGov`) | `/agents` Hub + `/settings/security` (`ai_exchange` & `audit_log` reader + snapshot export) | Audit Retention Window, Trigger Integrity Check, One-Click Signed Snapshot Export | Verifies SQLite append-only triggers (`audit_log_no_update`, `ai_exchange_no_delete`), displays the live `ai_exchange` & `audit_log` ledger, validates `Provenance` SHA-256 bundle signatures, and exports signed JSON audit backups. |
| **06** | **Multimodal Clinical Ingestion Agent** (`SlainteEngine-Ingest`) | Clinical (`SlainteClinical`) | `/agents` Hub + **Patients Page (`Add Patient / Ingest` Modal)** | Auto-Watch `/data/raw`, GMS Deduplication Mode, OCR Confidence Threshold | Converts messy CSVs, clinical PDFs, and handwritten triage notes into validated HL7 FHIR R4 bundles via FastMCP and deduplicates by Irish GMS number. |
| **07** | **Patient Summariser & Handover Agent** (`SlainteScribe-Brief`) | Clinical (`SlainteClinical`) | `/agents` Hub + **Embedded on Every Patient Details Page** | Assigned LLM Model, Max Summary Length, Mandatory `[ResourceType/id]` Citations | Generates a 3-bullet bedside clinical handover briefing on the Patient Details page citing exact FHIR resource IDs and logs every exchange to `ai_exchange`. |
| **08** | **Medication & Allergy Safety Agent** (`SlainteRx-Guard`) | Clinical (`SlainteClinical`) | `/agents` Hub + **Embedded in Intake Modal, Patient Details & Pharmacy Cockpit** | Cross-Reactivity Strictness, Beta-Lactam/NSAID/Sulfa Interception | Deterministically cross-checks `MedicationRequest` drugs against `AllergyIntolerance` via FastMCP (`check_drug_allergy_contraindications`) and displays critical CDS alerts. |
| **09** | **Acuity Triage & Deterioration Agent** (`SlainteDx-Triage`) | Clinical (`SlainteClinical`) | `/agents` Hub + **Embedded in Live Triage Queue & Patient 24h Sparkline Card** | MTS Category Thresholds, NEWS2 Escalation Alert Tier ($\ge 5$ Med, $\ge 7$ High) | Deterministically computes Manchester Triage (Cat 1–5) priority and 24-hour RCP NEWS2 physiological deterioration trajectories via FastMCP. |

---

## 4. Mapping the 9 Agents & Stack Features to the 7 "Sign in as..." Vertical Cockpits

| Sign-In Vertical Role | Product Brand | Default Active Agent Squad | Vertical-Specific Dashboard Experience |
| :--- | :--- | :--- | :--- |
| **1. Emergency Department** | **SlainteED** | `Dx-Triage`, `Engine-Ingest`, `Scribe-Brief`, `Rx-Guard`, `Shield-BOLA`, `Gov-Audit` | Collapsible MTS Cat 1–5 Live Triage Queue, 24h NEWS2 deterioration sparklines, acute CSV/PDF intake dropzone, Bedside AI Handover Briefing, and Electronic `Provenance` Sign-Off. |
| **2. General Practice (GP)** | **SlainteGP** | `Scribe-Brief`, `Rx-Guard`, `Engine-Ingest`, `Gov-GDPR`, `Shield-FHIR` | Longitudinal patient roster with GMS OID deduplication, SOAP consultation workflow, Chronic Disease Management (Diabetes/COPD/Hypertension) vital trends, and repeat prescribing safety gate. |
| **3. Dental Surgery** | **SlainteDent** | `Rx-Guard`, `Engine-Ingest`, `Scribe-Brief`, `Gov-GDPR` | Pre-procedure allergy & anticoagulant safety gate (`AllergyIntolerance` + `MedicationRequest`), interactive 32-tooth FDI Odontogram & 6-sextant BPE summary card, and dental PDF referral ingestion. |
| **4. Pharmacy** | **SlaintePharm** | `Rx-Guard`, `Shield-FHIR`, `Gov-Audit`, `Gov-GDPR` | Active `MedicationRequest` dispensing queue, deterministic FastMCP Drug-Allergy cross-reactivity interceptor, Irish GMS reimbursement ID verification, and pharmacist `Provenance` sign-off. |
| **5. Ambulance / EMS** | **SlainteEMS** | `Dx-Triage`, `Engine-Ingest`, `Scribe-Brief`, `Gov-Audit` | High-contrast pre-hospital ePCR field intake, instant deterministic MTS Cat 1–5 + NEWS2 acuity scoring from ambulance vitals, handwritten field note OCR, and zero-latency hospital FHIR R4 push. |
| **6. Elite Sports Club** | **SlainteSport** | `Dx-Triage`, `Rx-Guard`, `Shield-BOLA`, `Gov-GDPR` | Squad readiness & physiological load telemetry (HR, SpO2, BP, Temp trajectories), concussion & return-to-play `Provenance` clearance sign-off, TUE medication screening, and BOLA-verified athlete privacy. |
| **7. Astronaut Health** | **SlainteAstro** | **All 9 Agents in 100% Air-Gapped Local 3B Mode** | Offline deep-space bio-telemetry running local 3B Ollama models + embedded `SlainteFHIR` with zero Earth-cloud dependency; tracks crew NEWS2 drift and signs mission medical logs cryptographically. |

---

## 5. Information Architecture (IA) & Complete Sitemap (`SlaintePages`)

| Route Path | Page Title | One-Line Content Summary |
| :--- | :--- | :--- |
| `/` | **SlainteTech AI Security Labs (Home)** | Category-defining startup lander showcasing the 9-Agent Autonomous Fleet, deterministic FastMCP guardrails, and 7 vertical clinical cockpits. |
| `/agents` | **The 9-Agent Autonomous Fleet** | Interactive command matrix of all 9 SlainteTech Security, Governance, and Clinical Agents with their FastMCP bindings and per-agent controls. |
| `/agents/bola-red-team` | **Agent 01: BOLA & Role-Boundary Red-Team Agent** | Deep dive into `SlainteShield-BOLA`: RFC 1918 guardrails, `CompartmentDefinition/Patient` pruning, and Dual-Phase Reflection ($\mathcal{M}$) API probing. |
| `/agents/fhir-conformance` | **Agent 02: FHIR R4 Conformance & Terminology Agent** | Shows how `SlainteShield-FHIR` audits SNOMED-CT, LOINC, UCUM, and Irish GMS OIDs and exports OASIS SARIF v2.1.0 compliance reports. |
| `/agents/cve-vulnerability` | **Agent 03: Software & CVE Vulnerability Agent** | Explains how `SlainteShield-CVE` continuously audits pinned dependencies, CSP/SRI cryptographic headers, and multi-worker rate-limiting posture. |
| `/agents/gdpr-privacy` | **Agent 04: GDPR & Clinical Privacy Agent** | Details how `SlainteGov-GDPR` enforces EU GDPR Art. 9 data minimisation, `AI_DEIDENTIFY` PII stripping, BAA gates, and salted log pseudonymisation. |
| `/agents/immutable-audit` | **Agent 05: Immutable Clinical & AI Audit Agent** | Showcases `SlainteGov-Audit`: append-only SQLite triggers on `audit_log` & `ai_exchange`, `Provenance` SHA-256 verification, and signed audit exports. |
| `/agents/multimodal-ingestion` | **Agent 06: Multimodal Clinical Ingestion Agent** | Explains how `SlainteEngine-Ingest` converts messy CSVs, PDFs, and handwritten notes into deduplicated HL7 FHIR R4 bundles. |
| `/agents/clinical-copilots` | **Agents 07–09: Summariser, Rx-Guard & Triage Agents** | Showcases the embedded bedside agents (`SlainteScribe-Brief`, `SlainteRx-Guard`, `SlainteDx-Triage`) backed by zero-hallucination FastMCP rules. |
| `/platform/mcp-guardrails` | **SlainteScan FastMCP & SlainteFHIR Core** | Architectural proof of "Intelligence Out of the Loop": why agents call deterministic Python MCP tools on port `8081` against the `:8082` FHIR micro-EHR. |
| `/verticals` | **One Agentic Engine, Seven Clinical Verticals** | Matrix demonstrating how the "Sign in as..." selector reconfigures the dashboard and active agent squad across 7 healthcare and aerospace domains. |
| `/verticals/emergency-department` | **SlainteED — Acute & Emergency Triage** | Hospital ED cockpit powered by the Triage, Ingestion, and Rx-Guard agents with collapsible MTS Cat 1–5 queues and NEWS2 sparklines. |
| `/verticals/general-practice` | **SlainteGP — Primary Care & CDM** | GP clinic workspace combining the Scribe, GDPR, and Rx-Guard agents for SOAP consultations, chronic disease tracking, and safe repeat prescribing. |
| `/verticals/dentistry` | **SlainteDent — Dental & Periodontal Suite** | Dental surgery cockpit using the Rx-Guard and Ingestion agents for pre-op medical clearance, 32-tooth FDI charting, and referral parsing. |
| `/verticals/pharmacy` | **SlaintePharm — Clinical Dispensing Gate** | Pharmacy cockpit led by `SlainteRx-Guard` and `SlainteShield-FHIR` for Beta-Lactam/NSAID cross-reactivity interception and GMS validation. |
| `/verticals/ambulance-ems` | **SlainteEMS — Pre-Hospital Paramedic ePCR** | Paramedic field cockpit using `SlainteDx-Triage` and OCR Ingestion for rapid ambulance vital scoring and instant ED handoff. |
| `/verticals/elite-sports` | **SlainteSport — Athlete Performance Medicine** | Pro sports medicine cockpit combining physiological load telemetry, return-to-play `Provenance` sign-off, and `SlainteShield-BOLA` athlete privacy. |
| `/verticals/astronaut-health` | **SlainteAstro — Deep-Space Bio-Telemetry** | Flagship showcase of all 9 agents running 100% air-gapped on local 3B models for autonomous crew health monitoring in deep space. |
| `/security-compliance` | **Security, Governance & EU MDR Posture** | Engineering transparency page covering append-only SQLite audit triggers, `ai_exchange` logs, GDPR Art. 9 gates, and SARIF v2.1.0 verification. |

---

## 6. 2026 Netlify + Next.js (SEO & GEO) + Docker Blueprint

1. **Next.js App Router + `@netlify/plugin-nextjs` (OpenNext v5):** Zero-config static/edge hybrid deployment on Netlify with instant rollbacks.
2. **SEO + GEO (`public/llms.txt` + JSON-LD):** Exposes a clean Markdown manifest at `/llms.txt` documenting all 9 agents, their FastMCP tool schemas, and all 7 vertical cockpits so AI search engines cite SlainteTech with 100% accuracy.
3. **Shared `SlainteDash` Visual System:** Uses the exact dark slate (`#0f172a`), clinical cyan (`#0ea5e9`), verified emerald (`#10b981`), and monospace telemetry badges from the clinical dashboard.
4. **Docker Standalone Mode:** Includes a multi-stage `Dockerfile` (`output: 'standalone'`) running on port `3001` for local full-stack appliance demos.
