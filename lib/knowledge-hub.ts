export type KHSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type Volume = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  readTime: string;
  intro: string;
  sections: KHSection[];
};

export const volumes: Volume[] = [
  {
    slug: "customer-lifecycle-excellence",
    number: "Volume I",
    title: "Customer Lifecycle Excellence",
    tagline: "Designing the journey from first login to habitual, value-driving adoption",
    readTime: "4 min read",
    intro:
      "Onboarding is the single highest-leverage period in the customer lifecycle -- it either builds momentum toward value or creates friction that's difficult to reverse. This volume covers the philosophy, stages, and templates behind a lifecycle designed on purpose, rather than left to happen by accident.",
    sections: [
      {
        heading: "Philosophy -- Three Principles of Great Onboarding",
        items: [
          "Speed to value matters more than speed to setup -- getting a customer live is not the same as getting them to their first real result",
          "Enablement beats hand-holding -- the goal is a customer who can succeed independently, not one who depends on the vendor for every step",
          "Every stage should have a defined, measurable exit condition -- not a vague sense that things are 'going fine'",
        ],
      },
      {
        heading: "The Six Stages",
        items: [
          "Discovery -- understand the customer's business, goals, and definition of success before configuring anything",
          "Success Planning -- translate that understanding into a written plan with named milestones and owners",
          "Implementation -- configure the product against the plan, not a generic default setup",
          "Enablement -- train the people who will actually use the product day to day, not just the buyer",
          "Adoption -- track real usage against the milestones, and intervene early where it's lagging",
          "Value Realization -- confirm, explicitly and in writing, that the original goal has been met",
        ],
      },
      {
        heading: "Enterprise Onboarding Strategy",
        body: "For multi-site or multi-stakeholder accounts, a single simultaneous go-live is the highest-risk option. A phased approach -- starting with the most complex or highest-visibility site first -- surfaces problems while the stakes are still contained, and builds a credible reference point for every site that follows.",
      },
      {
        heading: "The 30-60-90 Day Plan",
        items: [
          "First 30 Days: technical setup, core team enablement, first milestone defined and agreed",
          "Days 31-60: expanded rollout, adoption tracking begins, early wins documented and shared back to the customer",
          "Days 61-90: full activation, value realization confirmed, and the relationship formally handed from onboarding into steady-state account management",
        ],
      },
      {
        heading: "Templates in This Volume",
        items: [
          "Customer Success Plan Template -- goals, milestones, stakeholders, and a review cadence in one working document",
          "Customer Journey Map -- the end-to-end path from first contact to advocacy, with the moments that matter most flagged",
          "Onboarding Checklist -- a pragmatic, stage-by-stage list covering setup, enablement, and milestone reviews",
        ],
      },
    ],
  },
  {
    slug: "product-adoption-and-customer-education",
    number: "Volume II",
    title: "Product Adoption & Customer Education",
    tagline: "Moving accounts from first login to habitual, value-driving behavior",
    readTime: "4 min read",
    intro:
      "Adoption is not a login count. It's whether a customer is using the product in the way that actually produces the outcome they bought it for. This volume covers how to design for that kind of adoption deliberately, and how to teach customers well enough that adoption becomes self-sustaining.",
    sections: [
      {
        heading: "The Adoption Philosophy",
        body: "Usage and adoption are not the same thing. A customer can log in daily and still not be adopting the capabilities that drive their result. The right question is never \"are they using it?\" -- it's \"are they using the parts of it that matter, consistently enough to see the outcome?\"",
      },
      {
        heading: "The Five Stages of Adoption",
        items: [
          "Awareness -- the customer knows a capability exists",
          "Trial -- the customer has tried it at least once",
          "Habitual Use -- the customer uses it as part of a regular workflow",
          "Proficiency -- the customer uses it well, not just often",
          "Advocacy -- the customer recommends it to others internally or externally",
        ],
      },
      { heading: "Feature Adoption Campaign Structure", body: "A time-boxed, milestone-driven push to move a specific segment of customers from Awareness to Habitual Use on a specific feature -- most effective when tied to a concrete business reason the feature matters to that segment, not a general announcement." },
      { heading: "Customer Education Academy", body: "A structured self-serve and cohort-based learning library -- reduces the CSM's burden as a repeated one-to-one trainer, and gives customers a resource that scales independently of headcount." },
      { heading: "Executive Adoption Strategy", body: "Executive sponsors rarely use the product hands-on, but their attention drives their team's adoption. An executive-specific adoption strategy focuses on outcome reporting and strategic framing, not feature training." },
      { heading: "Adoption Health Dashboard & KPI Library", body: "A consistent set of adoption metrics -- feature usage depth, login frequency, workflow completion, time-to-first-value, and milestone completion -- tracked the same way across every account so patterns are comparable." },
      { heading: "AI-Assisted Adoption Workflow", body: "Using AI to surface early adoption risk signals (usage plateaus, incomplete workflows, drop-off after a specific step) so a CSM's attention goes to the accounts that need it most, rather than being spread evenly regardless of actual risk." },
      {
        heading: "Templates in This Volume",
        items: [
          "Customer Education Checklist -- what to cover, in what order, for a new user to reach proficiency",
          "Adoption KPI tracker -- the standard metric set applied consistently across accounts",
        ],
      },
    ],
  },
  {
    slug: "customer-health-retention-and-renewal",
    number: "Volume III",
    title: "Customer Health, Retention & Renewal Excellence",
    tagline: "Signal design, risk playbooks, and calmer renewal motions",
    readTime: "4 min read",
    intro:
      "Retention is the byproduct of a relationship that consistently reduces risk and reinforces value -- not a negotiating tactic that starts 60 days before a contract ends. This volume covers how to see risk early, respond to it with a plan instead of a reaction, and walk into every renewal already knowing the answer.",
    sections: [
      { heading: "Philosophy", body: "By the time a customer says they're not renewing, the decision was usually made weeks or months earlier. Health management exists to catch the moment before that decision is made, not to win an argument after it." },
      {
        heading: "The Five Pillars of Customer Health",
        items: [
          "Product Adoption -- are they using it the way that produces value?",
          "Business Outcomes -- have they achieved what they set out to achieve?",
          "Relationship Strength -- do the right stakeholders trust and engage with us?",
          "Customer Sentiment -- what do they actually say, unprompted, about the experience?",
          "Growth Potential -- is there a natural next problem we could help solve?",
        ],
      },
      {
        heading: "Common Risk Indicators",
        items: [
          "A sudden or gradual drop in login or feature-usage frequency",
          "A champion or executive sponsor who stops responding or leaves the company",
          "A rise in support tickets, especially repeat issues on the same topic",
          "Declining sentiment in surveys, QBRs, or informal conversations",
          "A competitor actively courting the account",
        ],
      },
      { heading: "Risk Management Process & Churn Prevention Playbook", body: "A standardized response sequence once risk is flagged: confirm the real cause directly with the customer rather than assuming, build a specific recovery plan with named actions and dates, escalate internally where the fix requires resources outside the CSM's control, and track the account weekly until it's stable again -- not just at the next scheduled check-in." },
      {
        heading: "Six Questions Before Renewal",
        items: [
          "Has the customer achieved their desired outcomes?",
          "Are key stakeholders engaged?",
          "Is product adoption healthy?",
          "Has measurable value been demonstrated?",
          "Are outstanding risks being managed?",
          "Does the customer have confidence in the partnership?",
        ],
      },
      { heading: "Executive Business Review Framework", body: "An EBR should be built around five questions: what were we trying to achieve, what results have we achieved, what challenges remain, what opportunities exist, and what should we do next -- in that order, every time, so leadership always knows what to expect and can engage at the strategic level rather than the feature level." },
      { heading: "Voice of the Customer Program", body: "A structured, recurring mechanism for capturing what customers actually say -- not just what they're asked in a survey -- and routing it back into product and account strategy." },
      {
        heading: "Templates in This Volume",
        items: [
          "Health Scorecard -- the five pillars, scored consistently across every account",
          "Risk Register -- a standing log of active risks, severity, owner, and status",
          "QBR / EBR Checklist -- ensures every review covers the same ground regardless of who's presenting",
        ],
      },
    ],
  },
  {
    slug: "expansion-revenue-growth-and-partnership",
    number: "Volume IV",
    title: "Expansion, Revenue Growth & Strategic Partnership",
    tagline: "Turning healthy usage into disciplined, customer-first revenue growth",
    readTime: "4 min read",
    intro:
      "Expansion done well never feels like a sales pitch to the customer -- it feels like the natural next step in solving their business problem. This volume covers how to build that kind of expansion motion deliberately, grounded in evidence rather than quota pressure.",
    sections: [
      { heading: "Core Principle", body: "Expansion should be earned through demonstrated value, not pursued through pressure. A customer who hasn't yet realized value from what they've already bought is not a good expansion conversation -- they're a retention risk wearing an expansion opportunity's clothing." },
      {
        heading: "Five Drivers of ARR Growth",
        items: [
          "Seat or usage growth within the existing product",
          "Upsell to a higher tier unlocking capabilities the customer has outgrown their current plan for",
          "Cross-sell into an adjacent product solving a related problem",
          "Multi-year or multi-year-equivalent commitment expansion",
          "Referral-driven new logo growth sourced from an existing advocate",
        ],
      },
      { heading: "Expansion Opportunity Assessment", body: "Before raising an expansion conversation, evaluate usage depth, demonstrated outcomes, executive trust, and an emerging business need -- all four should be present, not just one strong usage number, before the conversation is likely to land well." },
      { heading: "Customer Maturity Model", body: "Accounts move through recognizable maturity stages -- from basic usage, to consistent value realization, to strategic reliance, to advocacy. Expansion conversations should be pitched to match the account's actual maturity stage, not a generic script." },
      { heading: "Business Case & Executive Growth Planning", body: "An expansion recommendation lands strongest when it's framed as a business case with a clear ROI calculation, not a feature pitch -- particularly with executive stakeholders, whose primary question is always \"what does this get us,\" not \"what does this do.\"" },
      { heading: "Cross-Functional Collaboration", body: "Expansion is rarely a solo CSM motion. The strongest expansion conversations are coordinated with Sales on timing and positioning, so the customer experiences one coherent conversation rather than two competing ones." },
      {
        heading: "Templates in This Volume",
        items: [
          "Business Case Template -- ROI framing for an expansion or upsell recommendation",
          "Expansion Conversation Guide -- how to raise the topic without it feeling like a pitch",
          "Revenue Growth Dashboard -- expansion pipeline and ARR-growth tracking by driver",
        ],
      },
    ],
  },
  {
    slug: "cs-leadership-operations-and-ai",
    number: "Volume V",
    title: "CS Leadership, Operations & AI",
    tagline: "Scaling teams, systems, and thoughtfully applying AI to Customer Success",
    readTime: "4 min read",
    intro:
      "Individual CSM skill only scales so far. This volume covers the operating structures -- team design, segmentation, reporting, and AI -- that let Customer Success function predictably as a team grows, rather than depending entirely on a few strong individuals.",
    sections: [
      { heading: "Designing a Scalable Operating Model", body: "A CS function that only works because of a few excellent individuals is not yet a scalable function. The operating model -- how accounts are segmented, how work is assigned, how health is tracked, how escalations flow -- has to be explicit enough that a new CSM can step into it and know what to do." },
      { heading: "Team Structure & Segmentation", body: "Segmenting accounts by value, complexity, and growth potential -- rather than treating every account identically -- lets a team allocate its most experienced people to the accounts where judgment matters most, and let a scalable process handle the rest." },
      { heading: "KPI Dashboard & Executive Reporting Framework", body: "Leadership needs a small number of metrics that explain the state of the book at a glance -- health distribution, NRR, renewal rate, expansion pipeline -- backed by the detail underneath for whoever needs to dig in." },
      { heading: "Operations Playbook", body: "The connective tissue between all of the frameworks in this library -- who owns onboarding handoff, who owns risk escalation, who owns the renewal calendar -- written down rather than passed along informally as people join the team." },
      { heading: "AI in Customer Success", body: "AI's most valuable role in Customer Success today is augmentation, not replacement -- surfacing risk signals earlier, drafting first passes of QBR decks and health summaries, and giving CSMs back time for the judgment calls and relationship work that AI can't do. Applied well, it makes an experienced CSM faster. It doesn't replace the CSM who knows how to use it." },
      { heading: "AI Prompt Library", body: "A working set of prompts for common CS tasks -- account summaries, QBR narrative drafts, risk-signal analysis, renewal-readiness checks -- built to be a starting draft a CSM refines, not a replacement for their judgment." },
      { heading: "Leadership Principles", body: "The best CS leaders protect their team's time for the highest-judgment work by building process for everything else, and they measure their team on customer outcomes first, activity metrics second." },
    ],
  },
];

export function getVolume(slug: string) {
  return volumes.find((v) => v.slug === slug);
}
