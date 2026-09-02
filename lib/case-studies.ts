// Edit the content below directly -- this file feeds both the Portfolio
// index cards and each individual case study page.
// Anything in [brackets] is a placeholder: replace it with your real,
// confirmed figures before this goes out to anyone. Leave it as a bracket
// rather than guessing if you don't have the real number yet.

export type Status = "good" | "warn" | "bad" | "neutral";
export type Stat = { value: string; label: string; status?: Status };
export type HealthMetric = { label: string; score: string; status: Status; note: string };
export type PlanPhase = { phase: string; days: string; items: string[] };

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  engagementType: string;
  role: string;
  challenge: string;
  outcome: string;
  tags: string[];
  stats: Stat[];
  overallHealth?: { status: Status; label: string; note: string };
  healthAudit?: HealthMetric[];
  plan?: PlanPhase[];
  situation: string;
  task: string;
  actions: string[];
  result: string;
  reflection: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northbridge-logistics",
    client: "Northbridge Logistics",
    industry: "Logistics",
    engagementType: "Enterprise Onboarding",
    role: "Junior CSM",
    challenge:
      "Bring a 14-depot road-freight operator live on a \u20a685 million contract within a 90-day deadline, while cutting a uniform 40% delivery exception rate -- against constrained IT resources and an Operations Director still burned by a failed ERP rollout.",
    outcome:
      "Exception rate cut from 40.01% to 28.09% by Month 6 -- an 11.92-point reduction, meeting the Operations Director's 30% target. All 14 depots live within the 90-day window.",
    tags: ["Onboarding", "Stakeholder Management", "Change Management"],
    stats: [
      { value: "14", label: "Depots in Scope", status: "neutral" },
      { value: "90d", label: "Go-Live Window", status: "neutral" },
      { value: "28.09%", label: "Exceptions at M6 (from 40%)", status: "good" },
    ],
    situation:
      "Northbridge Logistics -- founded 2018, 1,200 staff, 14 depots across Northern Nigeria and Cameroon -- signed a \u20a685 million contract with a 90-day go-live deadline. Every depot was running on a disconnected tracking system, producing a uniform ~40% delivery exception rate across all locations (15,069 dispatches, Jan-Mar 2026) -- a uniformity that pointed to a systemic tooling problem, not a people or geography one. The Operations Director's mandate was blunt: all 14 depots live in 90 days, no exceptions, and a 30% reduction in that exception rate within 6 months. He was also still carrying the scars of a failed 2024 ERP rollout that had gone live everywhere at once and caused a two-week total operational shutdown.",
    task:
      "As the Junior CSM on the account, the mandate was to hit both the 90-day go-live and the Operations Director's binding 30%-reduction KPI -- with an IT Manager who had only 4 hours a week of bandwidth, and a client who had every reason to distrust a repeat of the last rollout.",
    actions: [
      "Mapped 6 distinct stakeholder groups (CEO, Operations Director, IT Manager, Depot Supervisors, HQ Finance, Platform Users) by influence and interest, and built a week-by-week communication cadence tailored to each",
      "Diagnosed the prior program's real failure mode -- automation was introduced too late (Day 61-90) and never tracked as an activation milestone -- and rebuilt the plan to introduce automation by Day 31-60 with activation tracked as a core success metric, not just satisfaction scores",
      "Replaced the all-at-once rollout model with a 3-phase sequence: Phase 1 (Days 1-30) started with the two most complex depots, Abuja and Garoua; Phase 2 (Days 31-60) added 6 more; Phase 3 (Days 61-90) completed the rest",
      "Solved the IT Manager's 4-hour/week ceiling by allocating it precisely: 1 hour system monitoring, 1.5 hours critical issues, 0.5 hours user setup, 1 hour integrations",
      "Built localized, peer-driven training for low-literacy depot staff, including Hausa voice-note training once standard text materials proved inaccessible to field teams",
      "When two depot supervisors pushed back and the Operations Director considered pausing rollout, resolved it with hands-on demonstration and Hausa-language voice training rather than slowing the timeline",
    ],
    result:
      "The exception rate dropped from a 40.01% baseline to 28.09% by Month 6 -- an 11.92 percentage-point reduction, meeting the Operations Director's 30% target and validating the \u20a685 million investment ahead of the next renewal. All 14 depots went live within the 90-day window.",
    reflection:
      "The uniform ~40% exception rate across every single depot was the biggest clue in this engagement -- it meant the problem was systemic, not situational, which is exactly why a phased, tooling-first rollout worked where the previous all-at-once ERP attempt had failed. I now treat identical bad numbers across every site as a specific diagnostic signal, not just bad luck.",
  },
  {
    slug: "hubspot-ashford-cole",
    client: "HubSpot \u00d7 Ashford & Cole",
    industry: "SaaS / Consulting",
    engagementType: "Account Health & Expansion Strategy",
    role: "CSM",
    challenge:
      "Diagnose why a highly-engaged HubSpot account had been left commercially unmanaged for 18 months -- no QBRs, multiple CSM changes, and a renewal in 6 weeks with zero outreach -- while a competitor was already circling.",
    outcome:
      "Recommendation delivered and adopted: immediate renewal protection, upgrade path to Professional (+\u20a61.12M expansion opportunity identified), dedicated strategic CSM assigned, 90-day Mutual Success Plan launched.",
    tags: ["Account Health", "HubSpot", "Expansion Strategy"],
    stats: [
      { value: "91%", label: "Platform Utilization", status: "good" },
      { value: "+\u20a61.12M", label: "Expansion Opportunity", status: "good" },
      { value: "0", label: "QBRs in 18 Months", status: "bad" },
    ],
    overallHealth: {
      status: "warn",
      label: "AMBER -- Strong Usage, Zero Governance",
      note: "Usage signals are excellent, but 18 months without a QBR or a named CSM left the account commercially unmanaged at its highest-risk moment.",
    },
    plan: [
      {
        phase: "Get the House in Order",
        days: "Weeks 1 -- 4",
        items: [
          "Week 1: Success plan signed with the Managing Director, attached in HubSpot, all Professional features and 25 seats switched on",
          "Week 2: Data cleaned -- duplicate contacts removed, 47 ownerless deals assigned, lifecycle stages corrected",
          "Weeks 2-3: Governance properties added and the deal pipeline rebuilt so every stage means something specific",
          "Week 3: All 11 new consultants onboarded one by one, each confirming they know how to use the platform",
          "Week 4: MD's dashboard shipped, written 30-day report sent, first executive check-in held",
        ],
      },
      {
        phase: "Let the System Do the Work",
        days: "Weeks 5 -- 8",
        items: [
          "Week 5: Utilization alerts built -- Operations pinged at 80%, MD at 90%",
          "Weeks 5-6: Renewal tasks automated to fire 90, 60, 45, and 30 days before any subscription ends",
          "Weeks 6-7: Upsell triggers turned on, 3 branded client-facing report templates shipped",
          "Week 7: HubSpot connected to Gmail, Calendar, and the invoicing tool -- eliminating double data entry",
          "Week 8: First proper QBR run with the MD and VP of Client Success -- adoption, pipeline lift, and ROI, signed off",
        ],
      },
      {
        phase: "Prove It Was Worth the Money",
        days: "Weeks 9 -- 13",
        items: [
          "Weeks 9-10: A naira figure put on the upgrade -- hours saved, pipeline added, a \u20a64.8M admin hire avoided",
          "Weeks 10-11: MD's monthly board pack automated so Operations stops rebuilding it by hand",
          "Week 11: Ashford & Cole locked in as a reference customer for a 5% loyalty credit and co-marketing",
          "Weeks 11-12: Account scored against Enterprise-tier requirements, target upgrade date set",
          "Week 13: Open risks closed in writing, 90-day review run, health score upgraded to 'Stable Strategic'",
        ],
      },
    ],
    situation:
      "Ashford & Cole Consulting, a 38-person firm in Enugu, had been on HubSpot's Starter Plan (\u20a6480,000/year) for 18 months, fully self-managed. The usage signals were strong -- 100% user adoption (8/8 active), 1,240+ contacts (up from a 500 benchmark), a 38.6% email open rate (up from 25%), and 91% feature usage -- but the account had never had a single QBR, had cycled through multiple CSMs, and had a renewal due in 6 weeks with no outreach planned.",
    task:
      "Diagnose why a clearly engaged, high-usage account had been left commercially unmanaged, and build a plan that protected the renewal while capturing the expansion the usage data already pointed to.",
    actions: [
      "Quantified the expansion opportunity directly from usage data: 91% platform utilization plus 9 additional user requests and 14 feature requests meant the account had structurally outgrown its Starter plan -- sizing the opportunity at +\u20a61.12M (\u20a6480K current to \u20a61.6M on Professional)",
      "Traced the specific process failure that had let a competitor in: a Managing Partner's upgrade request had been logged as a standard support ticket instead of being escalated to a CSM, leaving the account unmanaged at its highest-intent moment -- and a competitor entered the conversation through the client's IT Manager as a direct result",
      "Built the upgrade business case as an ROI decision rather than a cost increase, quantifying an estimated \u20a6540K productivity impact per hour tied to workflow automation, custom pipelines, and additional seats",
      "Designed a 90-day Mutual Success Plan: Day 30 (all users onboarded, dashboards live, data cleaned), Day 60 (workflows automated, \u20a615M pipeline visible, 90%+ adoption via Executive Business Review), Day 90 (ROI quantified, board reporting automated, enterprise-readiness positioning)",
      "Built a permanent account governance model to prevent the same gap recurring -- assigned CSM ownership, automated QBR reminders, renewal monitoring, and a structured handover process (stakeholder mapping, renewal review, risk assessment, competitive intelligence) for any future CSM transitions",
      "Launched a targeted renewal and expansion email sequence to the primary contact, nurturing the upgrade decision across the full 6-week renewal window",
    ],
    result:
      "The recommendation -- immediate renewal protection, upgrade to Professional, a dedicated strategic CSM, and a 90-day Mutual Success Plan -- was delivered and adopted as the account's new operating model.",
    reflection:
      "Ashford & Cole didn't outgrow HubSpot -- they outgrew their own product usage, and nobody was watching closely enough to notice. The failure here wasn't a lack of usage, it was a lack of process to act on data that was already sitting in plain sight. I now treat \"zero QBRs in 18 months\" as its own red flag, independent of how healthy the usage numbers look.",
  },
  {
    slug: "creditsphere-highgate",
    client: "CreditSphere \u00d7 Highgate Microfinance Bank",
    industry: "Banking / Fintech Compliance",
    engagementType: "Compliance Escalation & Adoption Recovery",
    role: "Technical Account Manager",
    challenge:
      "Contain a CBN regulatory compliance incident within hours, while a 31%-adoption branch region put an \u20a618M expansion decision at risk -- all in Month 8 of a 24-month, \u20a642M/year contract.",
    outcome:
      "Regulatory exposure contained within 8 hours, misconfiguration fixed and signed off within 6 days, and a standing compliance process (the CRQG) put in place so it can't recur -- with a 90-day roadmap now underway to earn back expansion readiness.",
    tags: ["Compliance & Risk", "Crisis Communication", "Banking", "Adoption Recovery"],
    stats: [
      { value: "\u20a642M/yr", label: "Contract Value", status: "neutral" },
      { value: "31%", label: "Ogun Branch Adoption", status: "bad" },
      { value: "\u20a618M", label: "Expansion Gated on Recovery", status: "warn" },
    ],
    overallHealth: {
      status: "warn",
      label: "AMBER -- Expansion Not Yet Ready",
      note: "3 of 5 go-gate conditions unmet as of the Month 8 scorecard; a 90-day roadmap is underway to reach Month 12 EBR readiness.",
    },
    healthAudit: [
      { label: "Ogun Adoption", score: "31%", status: "bad", note: "vs. 60% go-gate threshold -- the single condition gating the \u20a618M expansion" },
      { label: "Bank-Wide Adoption", score: "61%", status: "warn", note: "vs. 75% target -- Oyo (89%) is carrying the average" },
      { label: "API Integrations", score: "0 of 2", status: "bad", note: "Core banking sync and repayment sync both pending" },
      { label: "CBN Compliance", score: "Resolved", status: "good", note: "Contained and fixed within the 6-day incident window" },
    ],
    plan: [
      {
        phase: "Contain",
        days: "Hour 0 -- 8",
        items: [
          "Hour 0: Compliance Officer Amara Nnaji flags the CBN NPL report misconfiguration -- immediate freeze requested on all report exports",
          "Hour 1: Freeze confirmed in writing; error scope isolated to the NPL ratio output, core loan data unaffected",
          "Hour 2: Amara briefed directly -- no blame, clear commitment to a fix timeline by Hour 8",
          "Hour 6: Managing Director Folasade Adeyemi briefed with a board-ready, jargon-free paragraph she could forward as-is",
          "Hour 8: Dedicated engineering resource assigned, separate from the core-banking workstream already consuming it",
        ],
      },
      {
        phase: "Fix & Institutionalize",
        days: "Day 1 -- 6",
        items: [
          "Days 1-2: Root cause analysis and fix built in staging",
          "Day 3: Internal QA against every NPL report scenario",
          "Day 4: Production deployment, corrected sample report generated",
          "Days 5-6: Amara reviews and signs off in writing; export freeze lifted, incident formally closed",
          "New standing process (CRQG) put in place: every future CBN report gets a 10-day review window and written sign-off before submission, permanently",
        ],
      },
      {
        phase: "Adoption Recovery",
        days: "Days 1 -- 90",
        items: [
          "Days 1-30: Targeted training for Ogun's lowest-adoption departments, aiming for 45%; dedicated technical owner assigned to unblock both pending API integrations",
          "Days 31-60: Gamified push toward 55% Ogun adoption while the integration sprint continues",
          "Days 61-90: Reassess against all 5 go-gate conditions ahead of the Month 12 expansion conversation with Folasade",
        ],
      },
    ],
    situation:
      "Highgate Microfinance Bank (Highgate Microfinance Bank) -- 14 branches across Oyo, Ogun, and Osun States, \u20a642M/year, Month 8 of a 24-month CreditSphere Enterprise contract. Adoption was strong in Oyo (89%) but critical in Ogun (31%) -- the single gating condition on an \u20a618M expansion decision from Managing Director Folasade Adeyemi. Then Compliance Officer Amara Nnaji flagged a misconfiguration in the CBN (Central Bank of Nigeria) non-performing loan reporting module: a regulated financial institution's regulatory submission was at risk of going out with inaccurate figures.",
    task:
      "Contain the regulatory incident within hours -- before any inaccurate report reached the CBN -- while keeping the much larger adoption and expansion story on track, in an account already stretched by a 4-week core-banking integration delay eating the client IT contact's available time.",
    actions: [
      "Ran a 24-hour containment response: froze all CBN report exports within the first hour, isolated the error to the NPL ratio output alone (confirming core loan data and any already-submitted reports were unaffected), and briefed both the Compliance Officer and Managing Director with calm, specific, written communication rather than a generic incident notice",
      "Assigned a dedicated engineering resource separate from the core-banking upgrade already consuming the client's IT contact's limited hours, so the compliance fix would not queue behind unrelated work",
      "Built and delivered the fix in 6 days -- root cause analysis, staging fix, full QA, production deployment, and a formal written sign-off from the Compliance Officer before the freeze was lifted",
      "Turned the incident into a permanent safeguard: a named, repeatable CBN Reporting Quality Gate -- every future submission gets a 10-business-day review window and mandatory written compliance sign-off before it goes out",
      "Diagnosed the Ogun adoption gap as a leadership and change-management problem, not a technology one -- the same platform was thriving in Oyo -- and built a phased, region-specific recovery plan rather than a generic retraining push",
      "Sequenced the API integration fixes (core-banking sync and the downstream repayment sync) as their own tracked risk, since stale repayment data was quietly feeding inaccurate figures into the very NPL calculation at the center of the compliance incident",
    ],
    result:
      "The compliance incident was contained before any inaccurate report reached the CBN, fixed and signed off within 6 days, and converted into a standing quality-gate process. The larger adoption and expansion picture is an honest work-in-progress: a 90-day roadmap is underway to move Ogun from 31% toward the 60% threshold and close both pending API integrations ahead of the Month 12 expansion conversation.",
    reflection:
      "The compliance incident and the adoption gap looked like two separate problems, but they were connected -- stale, manually-reconciled data from the slow regions was quietly compounding the exact regulatory risk that nearly became a crisis. I now look for that kind of hidden linkage by default: in a regulated account, an adoption problem in one region is rarely just a training issue somewhere else.",
  },
  {
    slug: "sahel-harvest-agro-allied",
    client: "Sovereign Trust Bank \u00d7 Sahel Harvest Agro-Allied",
    industry: "Banking / Agribusiness",
    engagementType: "Competitive Retention Strategy",
    role: "Relationship Manager",
    challenge:
      "A 5-year, \u20a628M/year banking relationship put at risk in a single sentence -- Sahel Harvest's CEO mentioned Access Bank and Stanbic IBTC were already in the room for the \u20a6180M expansion loan he needed within the quarter.",
    outcome:
      "A retention strategy built on relationship depth rather than rate-matching -- a 5-business-day term sheet commitment, a loan structured around Sahel Harvest's actual export cash flow, and a value case Access Bank and Stanbic IBTC couldn't replicate from a standing start.",
    tags: ["Competitive Retention", "Relationship Strategy", "Banking"],
    stats: [
      { value: "\u20a6180M", label: "Loan at Stake", status: "warn" },
      { value: "\u20a628M/yr", label: "Existing Relationship Revenue", status: "warn" },
      { value: "5 days", label: "Term Sheet Commitment", status: "good" },
    ],
    overallHealth: {
      status: "warn",
      label: "AMBER -- Competitive Threat, Window Still Open",
      note: "The CEO didn't have to mention competitors at all -- the fact that he did was read as a loyalty signal, not a goodbye.",
    },
    healthAudit: [
      { label: "Relationship Tenure", score: "5 yrs", status: "good", note: "Deep operational history the competitors can't replicate from a pitch deck" },
      { label: "Recent Service Reliability", score: "3 incidents", status: "bad", note: "3 payroll delays in 4 months affecting 220 staff -- the real vulnerability" },
      { label: "Competitive Exposure", score: "2 banks", status: "bad", note: "Access Bank and Stanbic IBTC already engaged with preliminary proposals" },
      { label: "Switching Friction", score: "3 products", status: "good", note: "Term loan, FX trade finance, and payroll all embedded in daily operations" },
    ],
    situation:
      "Sahel Harvest Agro-Allied -- a sesame and cashew export business banking with Wema for 5 years, with an active \u20a6350M term loan, FX trade finance on every export receipt from China and UAE buyers, and payroll processing for 220 staff. CEO Biodun mentioned, almost in passing, that Access Bank and Stanbic IBTC were already in conversation about the \u20a6180M expansion loan he needed for a Kano facility within the quarter. That casual framing was deliberate: a CEO doesn't waste words while discussing a nine-figure financing need. It was a test of response speed and a signal that Wema was no longer the default choice.",
    task:
      "Read the competitor mention correctly -- not as noise, but as the final warning before the relationship shifted -- and build a retention strategy that could compete against two larger banks without starting a rate war Wema couldn't win on scale alone.",
    actions: [
      "Diagnosed the real vulnerability first: three payroll delays in four months had put a personal, felt failure directly in front of 220 of Biodun's own staff -- a far bigger threat to the relationship than anything a competitor could offer on price",
      "Reframed the competitive response around what five years of relationship data actually enabled: Sahel Harvest's financials, credit history, and collateral were already on file, making a 5-business-day term sheet possible when a new bank would need weeks just for due diligence",
      "Structured the proposed \u20a6180M loan around Sahel Harvest's confirmed export receipt windows instead of generic fixed monthly instalments -- a structural advantage no competitor starting from zero could offer on Day 1",
      "Connected the new loan directly to Wema's existing FX trade finance relationship, framing the Kano expansion and currency-risk protection as one coherent growth story rather than two separate products",
      "Made the account's genuine switching friction visible without threatening the client with it -- payroll migration for 220 staff, disrupted FX flow mid-export-cycle, and fragmented banking relationships are real costs of leaving, not a scare tactic",
      "Built the retention case on three pillars: contextual intelligence competitors can't replicate, an integrated growth partnership spanning lending and FX, and switching cost as a source of stability rather than lock-in",
    ],
    result:
      "A retention strategy delivered to leadership built entirely on relationship depth rather than price competition -- an explicit 5-day term sheet commitment, a cash-flow-aligned loan structure, and a value proposition Access Bank and Stanbic IBTC couldn't match without years of the same operational history.",
    reflection:
      "The instinct when a competitor enters the picture is to compete on the thing they're offering -- rate, speed, terms. The stronger move was recognizing that a CEO who mentions competitors 'in passing' is still choosing to give you a chance. The real job wasn't winning a bidding war; it was making the five-year relationship's value legible before he had to weigh it against a stranger's brochure.",
  },
  {
    slug: "beacon-health-clinics",
    client: "Beacon Health Clinics",
    industry: "Healthcare",
    engagementType: "At-Risk Account Recovery",
    role: "CSM",
    challenge:
      "Recover an account 17 points behind its no-show-reduction target, with 3 of 8 clinics still at zero adoption, NPS down 37 points, and senior management openly questioning ROI -- 9 months into a 12-month contract.",
    outcome:
      "90-day recovery plan built and underway: reminder bug fixed, all 8 clinics on a path to full activation, NPS trajectory recovering, and an Executive Business Review delivered with senior management in the room.",
    tags: ["Account Recovery", "Health Scoring", "Executive Business Reviews"],
    stats: [
      { value: "8%", label: "No-Show Improvement (of 25% goal)", status: "bad" },
      { value: "5 of 8", label: "Clinics Active", status: "warn" },
      { value: "+14", label: "NPS (was +51)", status: "bad" },
    ],
    overallHealth: {
      status: "warn",
      label: "AMBER -- At Risk",
      note: "Ada Femi (the main contact) is still engaged and 5 of 8 clinics are active -- 60 more days of inaction would tip this to Red.",
    },
    healthAudit: [
      { label: "Product Usage", score: "2/5", status: "bad", note: "62.5% adoption (5 of 8 clinics); logins flat" },
      { label: "Engagement", score: "3/5", status: "warn", note: "Main contact Ada Femi still responsive and engaged" },
      { label: "Customer Sentiment", score: "2/5", status: "bad", note: "NPS dropped from +51 to +14" },
      { label: "Support Activity", score: "2/5", status: "bad", note: "3 patient-facing complaints this month, wrong-timing reminder bug" },
    ],
    plan: [
      {
        phase: "Stabilize",
        days: "Days 1 -- 30",
        items: [
          "Day 1: Escalated the text-reminder timing bug to Product and Support",
          "Day 1: Called Ada Femi directly to align on her ROI concerns and senior management's timeline",
          "Day 7: Sent Ada a written (not verbal) update on the fix, and began outreach to all 3 inactive clinic managers to identify their specific blockers",
          "Day 14: Shared a one-page ROI summary Ada could forward to senior management herself",
        ],
      },
      {
        phase: "Re-engage",
        days: "Days 31 -- 60",
        items: [
          "Adoption training run for Clinics 6, 7, and 8 -- all three live by Day 55",
          "Day 35: Reminder fix confirmed live via a two-week zero-complaint test, first monthly no-show report sent to Ada",
          "Day 40: All 3 patient complaints formally closed with written confirmation; internal sales sync to align the renewal conversation around ROI, not features",
          "Day 55: Per-clinic dashboard shared directly with Ada and every clinic manager",
        ],
      },
      {
        phase: "Demonstrate Value",
        days: "Days 61 -- 90",
        items: [
          "Day 65: Full clinic-by-clinic ROI report compiled",
          "Day 70: Ada pre-briefed to co-present the Executive Business Review rather than simply attend it; EBR scheduled with senior management confirmed in the room",
          "Day 85: EBR delivered, next 90-day targets agreed in writing -- positioning the account for renewal rather than promising an unrealistic full recovery",
        ],
      },
    ],
    situation:
      "Beacon Health Clinics -- a network of 8 private clinics, 9 months into a 12-month contract, with a renewal decision 6 months out. Their two goals at signing were a 25% reduction in patient no-shows and full staff adoption (32 staff) across all 8 clinics within 120 days. At the point of intervention, only 8% of the no-show reduction had been achieved, 3 clinics had zero active staff, NPS had fallen from +51 to +14, and the main contact, Ada Femi (Head of Operations), had twice flagged that senior management was questioning the platform's ROI.",
    task:
      "Stabilize a relationship that was Amber, not yet Red, before it tipped further -- fix the technical issue actively damaging trust, re-engage the three dormant clinics, and rebuild a credible, honest trajectory toward the original targets ahead of the renewal conversation.",
    actions: [
      "Diagnosed the real driver behind the stalled no-show numbers first: a patient-facing text reminder bug sending reminders at the wrong time, generating complaints and quietly suppressing the exact metric senior management was watching",
      "Escalated the bug and called Ada Femi on Day 1 -- before she had to come back to us a third time -- to align directly on what senior management was actually asking and on a realistic timeline",
      "Made a deliberate choice not to overpromise: committed to a credible trajectory toward 20%+ no-show reduction by Day 90, not a full recovery to 25%, since overpromising against a 17-point gap would have cost more trust than it bought",
      "Contacted all 3 inactive clinic managers directly rather than routing everything through an already-stretched Ada, and ran targeted adoption training to bring Clinics 6, 7, and 8 live by Day 55",
      "Restructured the Executive Business Review so Ada co-presented alongside us instead of us defending the account to her leadership on her behalf -- far more credible to senior management than a vendor speaking for itself",
    ],
    result:
      "By Day 90: all 8 clinics active with all 32 staff trained, no-show reduction on a credible trajectory above 20%, the reminder bug fully resolved with zero complaints for 60+ days, NPS recovering from +14 toward +40, and an Executive Business Review delivered with senior management in the room -- with the renewal conversation now proceeding from a position of demonstrated recovery rather than unresolved risk.",
    reflection:
      "The instinct under pressure is to promise the full recovery the customer originally wanted. The harder, more honest move was promising a credible trajectory instead, backed by named, dated actions -- and it's exactly what rebuilt Ada's confidence enough for her to advocate for us internally rather than just relay our updates.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
