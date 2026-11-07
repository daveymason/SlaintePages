# SlaintePages — SlainteTech AI Security Labs (Master Public Site & Go-To-Market Blueprint)

**Repository:** `/home/adman-voids/Desktop/Code/SlaintePages` (mirrored in `slainte-engine/public-site/`)  
**Company Identity:** **SlainteTech AI Security Labs**  
**Tagline:** *Autonomous Clinical, Compliance & Cybersecurity Agents Bound by Deterministic FastMCP Guardrails on HL7 FHIR R4.*

---

## 1. Cohesive Company & Product Narrative (Investors & Clinical Decision-Makers)

**SlainteTech AI Security Labs** builds the **Deterministic Safety & Security Control Plane for Clinical AI**.

Generic LLM wrappers fail hospital procurement because language models hallucinate clinical scores, bypass Broken Object Level Authorization (BOLA) boundaries, and leak EU GDPR Art. 9 special-category health data. SlainteTech solves this by separating **Agentic Reasoning** from **Deterministic Execution**:

1. **The Sovereign Substrate (`SlainteFHIR :8082` + `SlainteScan FastMCP :8081`):**
   - `SlainteFHIR` stores HL7 FHIR R4 patient compartments with SMART-on-FHIR v2 OAuth/OIDC launch, HL7v2 (`ADT`/`ORU`/`RDE`) translation, and cryptographic SHA-256 `Provenance` sign-off.
   - `SlainteScan` exposes zero-hallucination Python clinical tools via FastMCP: Manchester Triage (Cat 1–5), RCP NEWS2 (0–20), **3-Tier `SlainteRx-Guard`** (Allergy Cross-Reactivity + ISMP High-Alert DDI + Lab `eGFR`/Potassium Renal Dosing), and SNOMED-CT/LOINC/ICD-10-AM bindings.
2. **The 11-Agent Enterprise Fleet (`/agents` Command Center + Embedded Bedside Copilots):**
   - **Security & Red-Team Squad (`SlainteShield` — Agents 01–03):** `BOLA Red-Team Agent`, `FHIR R4 Conformance Agent`, and `Supply-Chain & CVE Vulnerability Agent`.
   - **Governance & Privacy Squad (`SlainteGov` — Agents 04–05):** `GDPR Art. 9 & Break-the-Glass Privacy Agent` and `Immutable Clinical & AI Audit Ledger Agent` (with HMAC-SHA256 SIEM webhooks + printable `NIS2 / EU AI Act / HIQA / ISO 27001` Compliance Attestation Certificates).
   - **Clinical, Scribe & Revenue Squad (`SlainteClinical` — Agents 06–11):** `Multimodal & HL7v2 Ingestion Agent`, `Cited Patient Summariser Agent`, `3-Tier Medication Safety Agent`, `Acuity Triage & NEWS2 Agent`, **`Ambient Voice Scribe & Order Drafter (Agent 10)`**, and **`Autonomous HIPE / ICD-10-AM Coding & DRG Revenue Auditor (Agent 11)`**.
3. **8 Industry Vertical Solutions ("For..." Decision-Maker Pages):**
   - Purpose-built workflows for **Emergency Departments (`SlainteED`)**, **General Practitioners (`SlainteGP`)**, **Psychiatrists & Mental Health (`SlaintePsych`)**, **Dental Surgeons & DSOs (`SlainteDent`)**, **Clinical & Community Pharmacies (`SlaintePharm`)**, **Ambulance & Paramedic Services (`SlainteEMS`)**, **Elite Sports Clubs & Federations (`SlainteSport`)**, and **Astronaut & Aerospace Medicine (`SlainteAstro`)**.

---

## 2. Semantic HTML Public Website (`public-site/`) — Folder Structure & 23 Files

All **21 semantic HTML5 pages**, shared minimalist stylesheet (`assets/site.css`), and GEO manifest (`llms.txt`) live inside `public-site/` with clean route-based folders (`/<route>/index.html`) ready for zero-build static hosting (Netlify, Cloudflare Pages, Nginx, or `python3 -m http.server`):

```text
public-site/
├── index.html                                    # Startup Home + "For..." 8-Vertical Hub + Investor/Buyer Proof
├── llms.txt                                      # Generative Engine Optimization (GEO) 11-Agent & 8-Vertical Manifest
├── assets/
│   └── site.css                                  # Minimalist accessible clinical & enterprise stylesheet (WCAG AA)
├── platform/
│   └── index.html                                # Architecture: FastMCP :8081, SlainteFHIR :8082, SMART v2, HL7v2, RLS
├── agents/
│   ├── index.html                                # Complete 11-Agent Enterprise Fleet Overview
│   ├── slainteshield-security/index.html         # Agents 01–03: BOLA Red-Team, FHIR SARIF & CVE/CSP Supply-Chain
│   ├── slaintegov-compliance/index.html          # Agents 04–05: GDPR Art. 9, Break-the-Glass, SIEM & Attestation
│   └── slainteclinical-copilots/index.html       # Agents 06–11: HL7v2 Ingest, 3-Tier Rx-Guard, Ambient Scribe, HIPE DRG
├── verticals/
│   ├── index.html                                # Industry Verticals Directory & Buyer ROI Matrix
│   ├── emergency-departments/index.html          # For Emergency Departments (SlainteED)
│   ├── general-practice/index.html               # For General Practitioners & Primary Care (SlainteGP)
│   ├── psychiatry/index.html                     # For Psychiatrists & Mental Health Services (SlaintePsych)
│   ├── dentistry/index.html                      # For Dental Surgeons, Oral Surgery & DSOs (SlainteDent)
│   ├── pharmacy/index.html                       # For Clinical & Community Pharmacies (SlaintePharm)
│   ├── ambulance-ems/index.html                  # For Ambulance & Paramedic Services (SlainteEMS)
│   ├── sports-medicine/index.html                # For Elite Sports Clubs & Federations (SlainteSport)
│   └── astronaut-health/index.html               # For Astronaut & Aerospace Medicine (SlainteAstro)
├── security-compliance/
│   └── index.html                                # NIS2, EU AI Act, GDPR Art. 9, HIQA, DCB0129 & ISO 27001 Posture
├── pricing/
│   └── index.html                                # Land-and-Expand Commercial Tiers (Shield -> Clinical -> Sovereign)
├── investors/
│   └── index.html                                # Investor Thesis, Defensibility Moat, GTM Wedge & Unit Economics
├── docs/
│   └── index.html                                # Developer, SMART-on-FHIR v2, HL7v2 & FastMCP Integration Docs
├── about/
│   └── index.html                                # Mission, Clinical Safety Philosophy & Sovereign Engineering Principles
└── contact/
    └── index.html                                # Book Hospital Pilot / Request Investor Data Room
```

### Quick Local Preview
```bash
python3 -m http.server 8090 --directory public-site
# Open http://localhost:8090
```
