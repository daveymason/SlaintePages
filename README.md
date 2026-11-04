# SlaintePages — SlainteTech AI Security Labs (Master Agentic Product & Website Blueprint)

**Repository:** `/home/adman-voids/Desktop/Code/SlaintePages`  
**Company Identity:** **SlainteTech AI Security Labs**  
**Tagline:** *Autonomous Clinical & Security Agents Bound by Deterministic FastMCP Guardrails on HL7 FHIR R4.*

---

## 1. Cohesive Company & Product Narrative (Zero Waffle)

**SlainteTech AI Security Labs** is an **Autonomous Healthcare Agent Company**.

Generic LLM wrappers fail in medicine because language models hallucinate math, invent clinical codes, and ignore API authorization boundaries. SlainteTech solves this by separating **Agentic Reasoning** from **Deterministic Execution**:

1. **The Sovereign Substrate (`SlainteFHIR` + `SlainteScan` FastMCP):**
   - `SlainteFHIR` (`:8082`) stores verified HL7 FHIR R4 patient compartments with SHA-256 `Provenance` sign-off.
   - `SlainteScan` (`:8081`) exposes zero-hallucination Python clinical tools via the Model Context Protocol (MCP): Manchester Triage (Cat 1–5), RCP NEWS2 (0–20), Drug-Allergy Cross-Reactivity matrices, and SNOMED-CT/LOINC/UCUM bindings. Agents *must* call these deterministic tools—they never guess clinical numbers in their weights.
2. **The SlainteTech Autonomous Agent Fleet (`/agents`):**
   - Instead of one monolithic bot, SlainteTech deploys specialized, sandboxed **Security Agents** (`SlainteShield`) and **Clinical Workflow Agents** (`SlainteClinical`), each powered by pluggable local 3B models (`k9/lime:latest`, `k9/Doggo:3b`, `recordstore:latest`, `gemma3:1b`) or frontier cloud models (`openai/gpt-6.1-luna`, `openai/gpt-4o`).
   - The **Red-Team BOLA Agent** and **FHIR R4 Terminology Verifier Agent** are the flagship security agents proving the platform's zero-trust guarantees, alongside clinical agents for **Multimodal Ingestion**, **Bedside Summarisation**, **Medication Safety**, and **Diagnostic Triage Support**.
3. **Adaptive Multi-Vertical Cockpits (`SlainteDash` — "Sign in as..."):**
   - One unified clinical frontend where signing in as **Emergency Department**, **General Practice**, **Dentist**, **Pharmacy**, **Ambulance EMS**, **Elite Sports Club**, or **Astronaut Health** loads that vertical's tailored dashboard and activates its assigned agents.

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                     SLAINTETECH AI SECURITY LABS PLATFORM                       │
├─────────────────────────────────────────────────────────────────────────────────┤
│  3. ADAPTIVE VERTICAL COCKPITS (SlainteDash — "Sign in as...")                  │
│     ED Triage │ GP │ Dentist │ Pharmacy │ Ambulance EMS │ Elite Sports │ Astro  │
├─────────────────────────────────────────────────────────────────────────────────┤
│  2. AUTONOMOUS AGENT FLEET (/agents — Pluggable Local 3B Ollama or Cloud LLMs)  │
│     • Agent 01: Red-Team BOLA Security Agent (Dual-Phase Reflection, API1:2023) │
│     • Agent 02: FHIR R4 Conformance & Terminology Verifier Agent (SARIF v2.1.0) │
│     • Agent 03: Autonomous Multimodal Ingestion Agent (CSV / PDF / OCR ➔ R4)    │
│     • Agent 04: Clinical Handover & Summarisation Agent ([ResourceType/id])     │
│     • Agent 05: Medication Safety & Contraindication Agent (Beta-Lactam/NSAID)  │
│     • Agent 06: Diagnostic Triage & Deterioration Agent (MTS Cat 1–5 + NEWS2)   │
├─────────────────────────────────────────────────────────────────────────────────┤
│  1. DETERMINISTIC SUBSTRATE (SlainteScan FastMCP 8081 + SlainteFHIR R4 8082)    │
│     Zero-Hallucination Python Rules • Irish GMS OID • SHA-256 Provenance        │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Final Phases Scope: Repositories, Files & Lines of Code (LOC)

| Phase | Target Deliverable | Repositories Touched | Files Modified / Created | Estimated LOC | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Phase 9 Lite** | Governance Polish: `G10` (`ai_exchange` Agent Audit Trail UI tab) + `G1` (One-Click Signed JSON/DB Audit Snapshot Download) | `SlainteDash` (`Patient-Dashboard-htmx-python-fhir`), `SlainteEngine` (`slainte-engine/frontend`) | **3 files** (`app.py`, `templates/settings_security.html`, `tests/test_phase6_security.py`) | **~140 LOC** | **Very Low (<5%)** — Additive admin read/export routes |
| **Phase 11** | **Autonomous Agents Command Center UI (`/agents`)** + **"Sign in as..."** Multi-Vertical Dashboards (`ED`, `GP`, `Dentist`, `Pharmacy`, `EMS`, `Elite Sports`, `Astronaut`) & Modernized Navigation | `SlainteDash` (`Patient-Dashboard-htmx-python-fhir`), `SlainteEngine` (`slainte-engine/frontend`) | **9 files** (`agents_registry.py`, `verticals.py`, `app.py`, `templates/agents.html`, `templates/login.html`, `templates/header.html`, `templates/sidebar.html`, `templates/dashboard.html`, `tests/test_verticals.py`) | **~650 LOC** | **Low (~10%)** — Upgrades the existing `Slainte-Auditor` & `Pipeline` views into a unified **Autonomous Agents Hub** |
| **Phase 12** | **SlaintePages** Public Startup Website with `/agents/*` & `/verticals/*` Showcases (Next.js App Router, Netlify + Docker, SEO + GEO `llms.txt`) | `SlaintePages` (`/home/adman-voids/Desktop/Code/SlaintePages`), `slainte-engine/docker-compose.yml` | **~26 files** (`netlify.toml`, `Dockerfile`, `public/llms.txt`, 17 route pages including `/agents` & `/verticals`) | **~2,000 LOC** | **Zero Risk to Core App (0%)** — Isolated repository & container |

---

## 3. The SlainteTech Autonomous Agent Fleet (`/agents`)

By unifying our existing engines under a clean **Agentic Registry**, `SlainteDash` and `SlaintePages` showcase **6 specialized agents** (with Agents 01–04 already 100% live in code today and Agents 05–06 directly wired to our existing FastMCP tools):

| Agent ID | Agent Name | Category | Bound MCP Tools / Engine | Status in Codebase | What It Does |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Agent 01** | **BOLA Red-Team Agent** (`SlainteShield-BOLA`) | Security & Adversarial AI | `CompartmentDefinition/Patient`, Dual-Phase Reflection ($\mathcal{M}$), RFC 1918 Guardrail | **LIVE** (`redteam_bola_agent.py`) | Autonomously samples Victim/Attacker patient pairs, probes cross-compartment FHIR endpoints for OWASP API1:2023 / CWE-863 leaks, and synthesizes remediation guidance. |
| **Agent 02** | **FHIR R4 Conformance & Terminology Agent** (`SlainteShield-FHIR`) | Security & Standards | `$validate`, SNOMED-CT, LOINC, UCUM, Irish GMS OID, SARIF v2.1.0 Exporter | **LIVE** (`terminology_verifier.py` + `sarif_reporter.py`) | Audits every FHIR R4 bundle for unmapped clinical codes, invalid UCUM units, missing GMS OIDs, and structural R4 drift, exporting OASIS SARIF v2.1.0 reports. |
| **Agent 03** | **Multimodal Clinical Ingestion Agent** (`SlainteEngine-Ingest`) | Data Pipeline & OCR | `scan_clinical_schema`, `resolve_terminology`, `ingest_handwritten_note`, `validate_fhir_resource` | **LIVE** (`openhands/agent_runner.py`) | Watches `/data/raw` and bedside uploads, parses messy CSVs, PDFs, and handwritten notes, deduplicates by GMS number, and commits verified FHIR R4 bundles. |
| **Agent 04** | **Bedside Handover & Summarisation Agent** (`SlainteScribe-Brief`) | Clinical Documentation | `build_patient_context`, `[ResourceType/id]` Citation Engine, `ai_exchange` Audit Trail | **LIVE** (`app.py` `/ai/summarise/<id>`) | Synthesizes a 3-bullet bedside clinical handover briefing citing exact FHIR resource IDs and logs every prompt hash and response to `ai_exchange`. |
| **Agent 05** | **Pharmacotherapy & Allergy Safety Agent** (`SlainteRx-Guard`) | Clinical Safety Gate | `check_drug_allergy_contraindications` (FastMCP `:8081`) | **LIVE TOOL / UI AGENT CARD** (`clinical_rules.py`) | Cross-checks active `MedicationRequest` prescriptions against `AllergyIntolerance` records using deterministic Beta-Lactam/Cephalosporin/NSAID/Sulfa cross-reactivity tables. |
| **Agent 06** | **Acuity Triage & Deterioration Agent** (`SlainteDx-Triage`) | Clinical Decision Support | `calculate_mts_category`, `calculate_news2_score` (FastMCP `:8081`) | **LIVE TOOL / UI AGENT CARD** (`clinical_rules.py`) | Evaluates physiological vitals and presenting complaints to compute deterministic Manchester Triage (Cat 1–5) priority and 24-hour RCP NEWS2 deterioration trajectories. |

---

## 4. Mapping the Agent Fleet & Stack Features to the 7 Vertical Cockpits

| Sign-In Vertical Role | Product Brand | Active Agents Assigned to This Cockpit | Primary Dashboard Features |
| :--- | :--- | :--- | :--- |
| **1. Emergency Department** | **SlainteED** | `SlainteDx-Triage`, `SlainteEngine-Ingest`, `SlainteScribe-Brief`, `SlainteRx-Guard`, `SlainteShield` | Collapsible MTS Cat 1–5 Live Triage Queue, 24h NEWS2 deterioration sparklines, acute CSV/PDF intake dropzone, Bedside AI Handover Briefing, and Electronic `Provenance` Sign-Off. |
| **2. General Practice (GP)** | **SlainteGP** | `SlainteScribe-Brief`, `SlainteRx-Guard`, `SlainteEngine-Ingest`, `SlainteShield-FHIR` | Longitudinal patient roster with GMS OID deduplication, SOAP consultation notes, Chronic Disease Management (Diabetes/COPD/Hypertension) vital trends, and repeat prescribing safety gate. |
| **3. Dental Surgery** | **SlainteDent** | `SlainteRx-Guard`, `SlainteEngine-Ingest`, `SlainteScribe-Brief` | Pre-procedure allergy & anticoagulant safety gate (`AllergyIntolerance` + `MedicationRequest`), interactive 32-tooth FDI Odontogram & 6-sextant BPE summary card, and dental PDF referral ingestion. |
| **4. Pharmacy** | **SlaintePharm** | `SlainteRx-Guard`, `SlainteShield-FHIR`, `SlainteShield-BOLA` | Active `MedicationRequest` dispensing queue, deterministic FastMCP Drug-Allergy cross-reactivity interceptor, Irish GMS reimbursement ID verification, and pharmacist `Provenance` sign-off. |
| **5. Ambulance / EMS** | **SlainteEMS** | `SlainteDx-Triage`, `SlainteEngine-Ingest`, `SlainteScribe-Brief` | High-contrast pre-hospital ePCR field intake, instant deterministic MTS Cat 1–5 + NEWS2 acuity scoring from ambulance vitals, handwritten field note OCR, and zero-latency hospital FHIR R4 push. |
| **6. Elite Sports Club** | **SlainteSport** | `SlainteDx-Triage`, `SlainteRx-Guard`, `SlainteShield-BOLA` | Squad readiness & physiological load telemetry (HR, SpO2, BP, Temp trajectories), concussion & return-to-play `Provenance` clearance sign-off, TUE medication screening, and BOLA-verified athlete privacy. |
| **7. Astronaut Health** | **SlainteAstro** | **All 6 Agents in 100% Air-Gapped Local 3B Mode** | Offline deep-space bio-telemetry running local 3B Ollama models + embedded `SlainteFHIR` with zero Earth-cloud dependency; tracks crew NEWS2 drift and signs mission medical logs cryptographically. |

---

## 5. Information Architecture (IA) & Complete Sitemap (`SlaintePages`)

Every route below is a concise, high-impact page in the **Next.js App Router** (`SlaintePages`):

| Route Path | Page Title | One-Line Content Summary |
| :--- | :--- | :--- |
| `/` | **SlainteTech AI Security Labs (Home)** | Category-defining startup lander showcasing the Autonomous Healthcare Agent Fleet, deterministic FastMCP guardrails, and 7 vertical cockpits. |
| `/agents` | **Autonomous Agent Fleet Overview** | Interactive directory of all 6 SlainteTech Security & Clinical Agents, showing how local 3B or cloud models pair with deterministic MCP tools. |
| `/agents/bola-red-team` | **Agent 01: BOLA Red-Team Security Agent** | Deep dive into `SlainteShield-BOLA`: RFC 1918 guardrails, `CompartmentDefinition/Patient` pruning, and Dual-Phase Reflection ($\mathcal{M}$) API probing. |
| `/agents/fhir-conformance` | **Agent 02: FHIR R4 Conformance & Terminology Agent** | Shows how `SlainteShield-FHIR` audits SNOMED-CT, LOINC, UCUM, and Irish GMS OIDs and generates OASIS SARIF v2.1.0 compliance reports. |
| `/agents/multimodal-ingestion` | **Agent 03: Multimodal Clinical Ingestion Agent** | Explains how `SlainteEngine-Ingest` turns messy CSVs, PDFs, and handwritten notes into deduplicated HL7 FHIR R4 bundles. |
| `/agents/clinical-copilot` | **Agents 04–06: Scribe, Rx-Guard & Triage Agents** | Showcases the bedside clinical agents (`SlainteScribe-Brief`, `SlainteRx-Guard`, `SlainteDx-Triage`) backed by zero-hallucination FastMCP rules. |
| `/platform/mcp-guardrails` | **SlainteScan FastMCP & SlainteFHIR Core** | Architectural proof of "Intelligence Out of the Loop": why agents must call deterministic Python MCP tools on port `8081` against the `:8082` FHIR micro-EHR. |
| `/verticals` | **One Agentic Engine, Seven Clinical Verticals** | Matrix demonstrating how the "Sign in as..." selector reconfigures the dashboard and active agent squad for 7 industries. |
| `/verticals/emergency-department` | **SlainteED — Acute & Emergency Triage** | Hospital ED cockpit powered by the Triage, Ingestion, and Rx-Guard agents with collapsible MTS Cat 1–5 queues and NEWS2 sparklines. |
| `/verticals/general-practice` | **SlainteGP — Primary Care & CDM** | GP clinic workspace combining the Scribe and Rx-Guard agents for SOAP consultations, chronic disease tracking, and safe repeat prescribing. |
| `/verticals/dentistry` | **SlainteDent — Dental & Periodontal Suite** | Dental surgery cockpit using the Rx-Guard and Ingestion agents for pre-op medical clearance, 32-tooth FDI charting, and referral parsing. |
| `/verticals/pharmacy` | **SlaintePharm — Clinical Dispensing Gate** | Pharmacy cockpit led by `SlainteRx-Guard` and `SlainteShield-FHIR` for Beta-Lactam/NSAID cross-reactivity interception and GMS validation. |
| `/verticals/ambulance-ems` | **SlainteEMS — Pre-Hospital Paramedic ePCR** | Paramedic field cockpit using `SlainteDx-Triage` and OCR Ingestion for rapid ambulance vital scoring and instant ED handoff. |
| `/verticals/elite-sports` | **SlainteSport — Athlete Performance Medicine** | Pro sports medicine cockpit combining physiological load telemetry, return-to-play `Provenance` sign-off, and `SlainteShield-BOLA` athlete privacy. |
| `/verticals/astronaut-health` | **SlainteAstro — Deep-Space Bio-Telemetry** | Flagship showcase of all 6 agents running 100% air-gapped on local 3B models for autonomous crew health monitoring in deep space. |
| `/security-compliance` | **Security, Governance & EU MDR Posture** | Engineering transparency page covering append-only SQLite audit triggers, `ai_exchange` logs, PHI gates, and SARIF v2.1.0 verification. |

---

## 6. Updated Concise Copy Deck (Agent-First Positioning)

### 6.1 Homepage Hero (`/`)
- **Eyebrow Badge:** `SLAINTETECH AI SECURITY LABS • AUTONOMOUS CLINICAL & RED-TEAM AGENTS`
- **Headline:** **Autonomous Healthcare Agents. Mathematically Bound by FastMCP. Continuously Red-Teamed on FHIR R4.**
- **Subheadline:** We build specialized AI agents for clinical care and healthcare cybersecurity. Every SlainteTech agent runs against deterministic Model Context Protocol (`SlainteScan`) calculators and an air-gapped HL7 FHIR R4 core (`SlainteFHIR`)—starting with our flagship **BOLA Red-Team** and **FHIR R4 Verification** agents, and scaling to **Ingestion**, **Triage**, **Prescribing Safety**, and **Bedside Summarisation** across seven vertical cockpits.
- **Primary CTAs:** `[Explore the Autonomous Agent Fleet]` · `[Launch Multi-Vertical Clinical Demo]`

### 6.2 Dashboard UI Upgrade: The "Autonomous Agents" Command Center
In `SlainteDash`, we replace the single `"Slainte-Auditor"` nav item with **"Autonomous Agents"** (`/agents`):
- **Top Fleet Telemetry Bar:** Total Active Agents (`6`), Bound FastMCP Tools (`6`), Active LLM Engine (`k9/lime:latest` / `openai/gpt-6.1-luna`), Last Security Audit Status (`SARIF v2.1.0 Verified`).
- **Section A — Security & Red-Team Agents (`SlainteShield`):**
  - **Agent 01: BOLA Red-Team Agent** (Live Dual-Phase Reflection $\mathcal{M}$ table, cross-compartment HTTP probe runner)
  - **Agent 02: FHIR R4 Conformance & Terminology Verifier Agent** (SNOMED/LOINC/UCUM/OID findings + SARIF download)
- **Section B — Clinical & Ingestion Agents (`SlainteClinical`):**
  - **Agent 03: Multimodal Ingestion Agent** (Live `/data/raw` queue + one-click ingest trigger)
  - **Agent 04: Bedside Summarisation Agent** (Live test runner on any patient ID + `ai_exchange` log preview)
  - **Agent 05: Medication Safety Agent (`SlainteRx-Guard`)** (Interactive drug-allergy cross-reactivity tester)
  - **Agent 06: Acuity Triage & Deterioration Agent (`SlainteDx-Triage`)** (Interactive MTS Cat 1–5 + NEWS2 calculator)

---

## 7. 2026 Netlify + Next.js (SEO & GEO) + Docker Blueprint

1. **Next.js App Router + `@netlify/plugin-nextjs` (OpenNext v5):** Zero-config static/edge hybrid deployment on Netlify with instant rollbacks.
2. **SEO + GEO (`public/llms.txt` + JSON-LD):** Exposes a clean Markdown manifest at `/llms.txt` documenting all 6 agents, their FastMCP tool schemas, and all 7 vertical cockpits so AI search engines cite SlainteTech with 100% accuracy.
3. **Shared `SlainteDash` Visual System:** Uses the exact dark slate (`#0f172a`), clinical cyan (`#0ea5e9`), verified emerald (`#10b981`), and monospace telemetry badges from the clinical dashboard.
4. **Docker Standalone Mode:** Includes a multi-stage `Dockerfile` (`output: 'standalone'`) running on port `3001` for local full-stack appliance demos.
