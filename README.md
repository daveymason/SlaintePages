# SlaintePages — SlainteTech AI Security Labs (Master Product & Website Blueprint)

**Repository:** `/home/adman-voids/Desktop/Code/SlaintePages`  
**Company Identity:** **SlainteTech AI Security Labs**  
**Tagline:** *Sovereign Clinical Interoperability, Deterministic MCP Guardrails, and Autonomous FHIR R4 Red-Team Verification.*

---

## 1. Cohesive Company & Product Narrative (Zero Waffle)

Healthcare organizations do not need another generic AI chatbot. They face three hard engineering problems:
1. **Unstructured Intake Chaos:** Clinical data arrives as messy CSVs, legacy extracts, PDFs, and handwritten triage notes.
2. **LLM Hallucination Risk:** Unconstrained language models guess vital scores, invent SNOMED-CT codes, and miss fatal drug-allergy cross-reactivities.
3. **Authorization & Compartment Leaks:** Multi-tenant FHIR R4 APIs suffer from Broken Object-Level Authorization (BOLA / OWASP API1:2023) when patient compartments are not continuously verified.

**SlainteTech AI Security Labs** solves all three in **one unified, on-premise clinical appliance (`Slainte-Engine`)** composed of four deterministic layers and one adaptive multi-vertical UI:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                     SLAINTETECH AI SECURITY LABS PLATFORM                       │
├─────────────────────────────────────────────────────────────────────────────────┤
│  4. SLAINTEDASH (Adaptive Role-Based Clinical Cockpits)                         │
│     "Sign in as...": ED Triage │ GP │ Dentist │ Pharmacy │ EMS │ Sports │ Astro │
├─────────────────────────────────────────────────────────────────────────────────┤
│  3. SLAINTESHIELD (Autonomous Red-Team FHIR R4 Verifier / Slainte-Auditor)      │
│     RFC 1918 Guardrail • Compartment Pruning • Live BOLA Probing • SARIF v2.1.0 │
├─────────────────────────────────────────────────────────────────────────────────┤
│  2. SLAINTESCAN (Deterministic FastMCP Clinical Guardrail Server — Port 8081)   │
│     MTS Cat 1–5 • RCP NEWS2 • Drug-Allergy Cross-Reactivity • SNOMED/LOINC/UCUM │
├─────────────────────────────────────────────────────────────────────────────────┤
│  1. SLAINTEENGINE + SLAINTEFHIR (Autonomous Ingestion & R4 Micro-EHR — 8082)    │
│     OpenHands Ingestion Loop • Irish GMS OID • SHA-256 Provenance Sign-Off      │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Final Phases Scope: Repositories, Files & Lines of Code (LOC)

| Phase | Target Deliverable | Repositories Touched | Files Modified / Created | Estimated LOC | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Phase 9 Lite** | Governance Polish: `G10` (`ai_exchange` Audit Trail UI tab) + `G1` (One-Click Signed JSON/DB Audit Snapshot Download) | `SlainteDash` (`Patient-Dashboard-htmx-python-fhir`), `SlainteEngine` (`slainte-engine/frontend`) | **3 files** (`app.py`, `templates/settings_security.html`, `tests/test_phase6_security.py`) | **~140 LOC** | **Very Low (<5%)** — Purely additive admin read/export routes |
| **Phase 11** | Modernized Navigation + **"Sign in as..."** Role-Based Multi-Vertical Dashboards (`ED`, `GP`, `Dentist`, `Pharmacy`, `EMS`, `Elite Sports`, `Astronaut`) | `SlainteDash` (`Patient-Dashboard-htmx-python-fhir`), `SlainteEngine` (`slainte-engine/frontend`) | **8 files** (`verticals.py`, `app.py`, `templates/login.html`, `templates/header.html`, `templates/sidebar.html`, `templates/dashboard.html`, `static/styles.css`, `tests/test_verticals.py`) | **~550 LOC** | **Low (~10%)** — Uses session-scoped `active_vertical` profile over existing FHIR R4 data |
| **Phase 12** | **SlaintePages** Public Company & Product Website (Next.js App Router, Netlify + Docker, SEO + GEO `llms.txt`) | `SlaintePages` (`/home/adman-voids/Desktop/Code/SlaintePages`), `slainte-engine/docker-compose.yml` | **~22 files** (`netlify.toml`, `Dockerfile`, `public/llms.txt`, layout/theme tokens, 13 route pages, interactive architecture cards) | **~1,800 LOC** | **Zero Risk to Core App (0%)** — Isolated repository & container |

---

## 3. Complete Feature Inventory Mapped to Vertical Dashboards & Public Pages

Every capability below is **already implemented and verified** in `slainte-engine`, `OCR2FHIR` (`SlainteScan`), and `Patient-Dashboard-htmx-python-fhir` (`SlainteDash`):

### Core Platform Capabilities (Shared Across All Verticals)
1. **Autonomous Multimodal Ingestion (`SlainteEngine` + `SlainteScan`):** CSV batch dropzone, PDF clinical extraction, handwritten note OCR, and manual bedside intake (`POST /fhir/intake`, `POST /fhir/upload`).
2. **Deterministic Terminology & Identifier Binding (`SlainteScan` FastMCP):**
   - Official Irish GMS Identifier OID (`urn:oid:1.3.6.1.4.1.54392.5.2690.42.80`) with automatic GMS patient deduplication (`find_patient_id_by_gms`).
   - Deterministic SNOMED-CT condition mapping, LOINC observation coding (`8867-4` HR, `9279-1` RR, `8310-5` Temp, `59408-5` SpO2, `8480-6`/`8462-4` BP), and strict UCUM unit validation (`degC`, `/min`, `mm[Hg]`, `%`).
3. **Zero-Hallucination Clinical Safety Engines (`SlainteScan` FastMCP):**
   - **Manchester Triage System (MTS):** Deterministic Cat 1 (Immediate, 0m) to Cat 5 (Non-Urgent, 240m) rules engine (`calculate_mts_category`).
   - **RCP NEWS2 Early Warning Score:** Deterministic 0–20 physiological deterioration scoring (`calculate_news2_score`) + 24-hour SVG vital trajectory sparklines.
   - **Drug-Allergy Cross-Reactivity Gate:** Deterministic interception of Beta-Lactam/Penicillin, NSAID, and Sulfonamide contraindications (`check_drug_allergy_contraindications` + `/fhir/validate-safety`).
4. **Cryptographic Clinical Accountability & Audit (`SlainteFHIR` + `SlainteDash`):**
   - **Electronic Clinician Sign-Off:** Generates immutable HL7 FHIR `Provenance` resources with practitioner IMC/GMC registration and SHA-256 bundle state hashes.
   - **Append-Only SQLite Triggers:** Immutable `audit_log` and `ai_exchange` tables enforced by database triggers, progressive 5-attempt / 15-minute account lockout, cross-worker `SqliteStorage` rate limiting, CSP headers, and SRI `sha384-` hashes.
5. **Pluggable Sovereign & Cloud AI (`Phase 8`):**
   - Live switcher (`/settings/ai`) between 100% air-gapped Local Ollama models (`k9/lime:latest`, `k9/lime-lite:latest`, `k9/Doggo:3b`, `k9/chihuahua:latest`, `recordstore:latest`, `gemma3:1b`) and Cloud Frontier models (`openai/gpt-6.1-luna`, `openai/gpt-4o`, `openai/gpt-4o-mini` via `.env`), plus one-click **Bedside AI Briefing** (`POST /ai/summarise/<patient_id>`).
6. **Continuous Autonomous Red-Team Verification (`SlainteShield` / `Slainte-Auditor`):**
   - 4-stage pipeline: RFC 1918 private-subnet execution guardrail, `CompartmentDefinition/Patient` search-space pruning, deterministic terminology/UCUM audit, Dual-Phase Reflection BOLA probing with `SharedAuditMemory` ($\mathcal{M}$), Live LLM Agent Synthesis, and OASIS SARIF v2.1.0 export.

---

### How Existing Features Map to Each "Sign in as..." Vertical Dashboard

| Sign-In Vertical Role | Product Name | Primary Dashboard Modules & How Core Tech Maps to It |
| :--- | :--- | :--- |
| **1. Emergency Department** | **SlainteED** | **Flagship Acute Cockpit:** Collapsible MTS Cat 1–5 Live Triage Queue, RCP NEWS2 24h deterioration sparklines, acute CSV/PDF intake dropzone, Bedside AI Handover Briefing, and Electronic `Provenance` Sign-Off. |
| **2. General Practice (GP)** | **SlainteGP** | **Primary Care & Chronic Disease Cockpit:** Patient roster filtered for longitudinal care, SOAP consultation notes, HSE Chronic Disease Management (Diabetes/COPD/Hypertension) vital trend charts, repeat prescribing with live Drug-Allergy safety gate, and GMS OID verification. |
| **3. Dental Surgery** | **SlainteDent** | **Dental & Periodontal Cockpit:** Pre-procedure medical history & allergy/anticoagulant safety gate (`AllergyIntolerance` + `MedicationRequest`), interactive 32-tooth FDI Odontogram & 6-sextant BPE summary card, dental note/radiograph PDF ingestion via `SlainteScan`, and practitioner `Provenance` sign-off. |
| **4. Community & Hospital Pharmacy** | **SlaintePharm** | **Clinical Dispensing & Safety Cockpit:** Active `MedicationRequest` dispensing queue, deterministic FastMCP Drug-Allergy cross-reactivity interceptor (Penicillin/Cephalosporin/NSAID alerts), Irish GMS reimbursement identifier validation, and pharmacist `Provenance` verification. |
| **5. Pre-Hospital Ambulance / EMS** | **SlainteEMS** | **Paramedic ePCR & Rapid Handoff Cockpit:** High-contrast field intake form, instant deterministic MTS Cat 1–5 + NEWS2 acuity calculation from ambulance vitals, voice/handwritten field note OCR ingestion, and zero-latency push into the hospital's `SlainteFHIR` `:8082` queue. |
| **6. Elite Sports Club** | **SlainteSport** | **Athlete Readiness & Sports Medicine Cockpit:** Squad availability & physiological load telemetry (HR, SpO2, BP, Temp trajectories via `Observation`), concussion & return-to-play clearance sign-off (`Provenance`), TUE/medication safety screening, and compartment-isolated athlete records (`SlainteShield`). |
| **7. Astronaut Health Monitoring** | **SlainteAstro** | **Deep-Space & Off-World Bio-Telemetry Cockpit:** 100% air-gapped sovereign operation (Local 3B Ollama models + embedded `SlainteFHIR` with zero Earth-cloud dependency), continuous crew vital anomaly & radiation/hypoxia NEWS2 drift tracking, deterministic autonomous medical decision support via `SlainteScan` MCP, and cryptographic telemetry provenance. |

---

## 4. Information Architecture (IA) & Complete Sitemap (`SlaintePages`)

Every route below is designed for **Next.js App Router** (Static/SSG + Edge SSR on Netlify) with a strict one-line purpose:

| Route Path | Page Title | One-Line Content Summary |
| :--- | :--- | :--- |
| `/` | **SlainteTech AI Security Labs (Home)** | Category-defining startup lander showcasing the unified 4-layer sovereign clinical AI stack, live metrics, and links to all 7 vertical cockpits. |
| `/platform/slainte-engine` | **SlainteEngine & SlainteFHIR** | Explains the autonomous OpenHands ingestion loop and the port `8082` HL7 FHIR R4 micro-EHR with zero-restart backend switching and SHA-256 `Provenance`. |
| `/platform/slainte-scan-mcp` | **SlainteScan (Deterministic FastMCP)** | Technical breakdown of "Intelligence Out of the Loop": how LLMs call deterministic Python MCP tools for MTS triage, NEWS2 scoring, and drug-allergy gates with zero mathematical hallucinations. |
| `/platform/slainte-shield` | **SlainteShield (Autonomous FHIR Red-Team)** | Showcases the 4-stage `Slainte-Auditor` security engine: RFC 1918 guardrails, `CompartmentDefinition/Patient` pruning, Dual-Phase Reflection BOLA probing ($\mathcal{M}$), and OASIS SARIF v2.1.0 reporting. |
| `/verticals` | **One Engine, Seven Clinical Verticals** | Interactive matrix showing how a single "Sign in as..." role selector transforms `SlainteDash` across 7 specialized healthcare and aerospace domains. |
| `/verticals/emergency-department` | **SlainteED — Acute & Emergency Triage** | Product page for hospital EDs featuring collapsible MTS Cat 1–5 queues, 24h NEWS2 trajectory sparklines, and sub-second bedside intake. |
| `/verticals/general-practice` | **SlainteGP — Primary Care & CDM** | Product page for GP clinics highlighting GMS OID deduplication, longitudinal vital trends, SOAP intake, and deterministic prescribing safety gates. |
| `/verticals/dentistry` | **SlainteDent — Dental & Periodontal Suite** | Product page for dental practices featuring pre-op allergy/medication safety checks, FDI odontogram charting, and automated referral/note ingestion. |
| `/verticals/pharmacy` | **SlaintePharm — Clinical Dispensing Gate** | Product page for pharmacies focused on deterministic Beta-Lactam/NSAID cross-reactivity interception, GMS validation, and cryptographic pharmacist sign-off. |
| `/verticals/ambulance-ems` | **SlainteEMS — Pre-Hospital Paramedic ePCR** | Product page for ambulance trusts demonstrating rapid field vital capture, instant MTS/NEWS2 pre-alerts, and direct FHIR R4 hospital handoff. |
| `/verticals/elite-sports` | **SlainteSport — High-Performance Athlete Medicine** | Product page for pro sports clubs covering squad physiological telemetry, return-to-play `Provenance` sign-off, and BOLA-verified athlete privacy. |
| `/verticals/astronaut-health` | **SlainteAstro — Autonomous Deep-Space Bio-Telemetry** | Flagship showcase of 100% air-gapped sovereign clinical AI: running 3B local models and deterministic MCP diagnostics in zero-connectivity environments. |
| `/security-compliance` | **Security, Governance & EU MDR Posture** | Plain-English engineering transparency page covering append-only SQLite audit triggers, PHI gates (`AI_ALLOW_REAL_PHI`), OWASP API1:2023 BOLA defense, and SARIF verification. |

---

## 5. Concise, Zero-Waffle Copy Deck

### 5.1 Homepage (`/`)
- **Hero Badge:** `SLAINTETECH AI SECURITY LABS • HL7 FHIR R4 • FASTMCP • OASIS SARIF v2.1.0`
- **Hero Headline:** **Clinical AI That Cannot Hallucinate. Healthcare APIs That Cannot Leak.**
- **Hero Subheadline:** SlainteTech builds the sovereign clinical operating system. We combine autonomous document ingestion (`SlainteEngine`), deterministic Model Context Protocol clinical calculators (`SlainteScan`), an air-gapped FHIR R4 core (`SlainteFHIR`), and continuous red-team BOLA verification (`SlainteShield`)—powering seven specialized clinical cockpits from a single codebase.
- **Primary CTAs:** `[Launch Live Clinical Cockpit]` · `[Explore the 4-Layer Architecture]`
- **Proof Bar (Real Verified Metrics):**
  - `0` Unconstrained LLM Calculations (100% Deterministic FastMCP Scoring)
  - `4-Stage` Autonomous Red-Team FHIR R4 Audit Pipeline (OWASP API1:2023 & CWE-863)
  - `7` Role-Based Vertical Cockpits on 1 Unified HL7 FHIR R4 Engine
  - `100%` On-Premise Sovereign Mode (Runs on 3B Local Models or Enterprise Cloud)

### 5.2 The Three Core Technology Pillars (Homepage Sections)
1. **Pillar 1 — `SlainteScan` FastMCP ("Intelligence Out of the Loop"):**
   > LLMs should never calculate a triage category or guess a drug interaction in their weights. `SlainteScan` exposes Manchester Triage (Cat 1–5), Royal College of Physicians NEWS2 (0–20), Drug-Allergy cross-reactivity matrices, and SNOMED-CT/LOINC/UCUM bindings as deterministic FastMCP tools. The AI orchestrates; verified Python math decides.
2. **Pillar 2 — `SlainteEngine` & `SlainteFHIR` (Messy Notes In, Verified FHIR R4 Out):**
   > Drop a messy CSV, clinical PDF, or handwritten triage note into the intake bay. `SlainteEngine` extracts structured entities, validates Irish GMS OIDs (`urn:oid:1.3.6.1.4.1.54392.5.2690.42.80`), deduplicates patient records automatically, and commits immutable `Provenance` SHA-256 hashes to `SlainteFHIR`.
3. **Pillar 3 — `SlainteShield` (Continuous Adversarial FHIR R4 Verification):**
   > Healthcare APIs fail at object-level authorization. `SlainteShield` (`Slainte-Auditor`) runs inside an RFC 1918 sandbox, prunes the search space via `CompartmentDefinition/Patient`, fires live cross-patient Victim/Attacker BOLA probes using Dual-Phase Reflection ($\mathcal{M}$), and exports OASIS SARIF v2.1.0 reports directly to your dashboard.

---

## 6. 2026 Netlify + Next.js (SEO & GEO) + Docker Blueprint

### 6.1 Why Next.js (App Router) + Netlify in 2026
1. **Zero-Config Netlify OpenNext Adapter (`@netlify/plugin-nextjs` v5+):**
   - Static marketing pages (`/`, `/platform/*`, `/verticals/*`) pre-render at build time as ultra-fast global CDN assets.
   - Dynamic routes or live telemetry previews run on Netlify Edge Functions automatically.
2. **Built-In SEO + GEO (Generative Engine Optimization for AI Search Engines):**
   - **`app/sitemap.ts` & `app/robots.ts`:** Auto-generated XML sitemap and crawler rules.
   - **`public/llms.txt` & `public/llms-full.txt`:** Dedicated Markdown index at `https://slaintetech.ai/llms.txt` so Perplexity, ChatGPT Search, Google AI Overviews, and Claude cite SlainteTech's exact architecture, FastMCP tools, and SARIF security specs without hallucinating.
   - **JSON-LD Structured Data (`schema.org`):** Embedded `MedicalOrganization`, `SoftwareApplication`, and `FAQPage` schemas on every vertical page.
3. **Shared Visual DNA with `SlainteDash`:**
   - Reuses the exact clinical dark/light slate surfaces (`#0f172a` navbar/sidebar, `#0ea5e9` clinical cyan, `#10b981` verified emerald, `#ef4444` Cat-1 crimson), tabular monospace numerals (`JetBrains Mono`), and high-contrast status pills from `SlainteDash`.
4. **Dual Deployment (Netlify in Production + Docker Locally):**
   - **`netlify.toml`:** One-click Git-connected deploy to Netlify (`npm run build`).
   - **`Dockerfile` (`output: 'standalone'` in `next.config.mjs`):** Runs locally on port `3001` inside Docker (`slainte-pages`) alongside `slainte-dashboard:8000` and `slainte-fhir:8082`.
