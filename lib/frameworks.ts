export type FrameworkSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type Framework = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  readTime: string;
  flagship?: boolean;
  summary: string;
  sections: FrameworkSection[];
};

export const frameworks: Framework[] = [
  {
    slug: "customer-success-operating-system",
    title: "The Customer Success Operating System",
    tagline: "Turning Customer Outcomes into Sustainable Business Growth",
    category: "Flagship",
    readTime: "14 min read",
    flagship: true,
    summary:
      "The operating philosophy behind everything else in this library -- Customer Success as one connected system, not a series of isolated activities.",
    sections: [
      {
        heading: "The Core Belief",
        body: "Products don't create success. People using products successfully create success. Software alone has never transformed a business -- people transform businesses, and products simply make that transformation possible. The role of Customer Success is to bridge the gap between product capability and customer achievement, and that gap is where almost every retention, expansion, and advocacy outcome is actually won or lost. A CSM who thinks of their job as 'making sure the product works' is solving the wrong problem. The job is making sure the business outcome the customer bought the product for actually happens.",
      },
      {
        heading: "Step 1 -- Understand the Business",
        body: "Before discussing features, understand the customer. Why did they buy? What problem are they solving? What does success look like now, and how is it measured? Who are the key stakeholders, and what risks could prevent success? Without understanding the business, every recommendation is just a guess dressed up as advice. This step is deliberately placed first because it's the one most CSMs skip under time pressure -- and skipping it is exactly what produces a plan that technically works but never lands with the customer, because it was never actually built around what they need.",
      },
      {
        heading: "Step 2 -- Connect the Product to Business Outcomes",
        body: "Customers don't buy features. They buy outcomes. Instead of saying \"our platform has automated reporting,\" say \"this automation can reduce manual reporting time by several hours each week, giving your team more time for strategic work.\" The feature stays the same -- the value changes. This translation work is the CSM's real craft: taking something technical and specific and restating it in terms of what changes for the customer's business. Done well, it means every conversation, however small, reinforces why the customer made the right decision.",
      },
      {
        heading: "Step 3 -- Drive Customer Adoption",
        body: "Adoption isn't measured by logins. It's measured by meaningful usage: are customers using the right features, consistently, and achieving measurable results? Adoption should always be tied back to the customer's actual goals, not activity for its own sake. A customer who logs in daily but never touches the capability that solves their real problem is not adopted -- they're active and at risk, which is a more dangerous combination than simply inactive, because it looks healthy on a usage dashboard while quietly heading toward churn.",
      },
      {
        heading: "Step 4 -- Measure Value Realization",
        body: "One of the biggest mistakes in Customer Success is assuming value has been delivered. Never assume -- measure it: time saved, revenue influenced, efficiency improvements, cost reductions, satisfaction, goal achievement. If value can't be demonstrated, it will be difficult to justify renewals or expansions, no matter how good the relationship feels day to day. A CSM who can't point to a number, a before-and-after, or a specific outcome when asked \"what has this been worth to you\" has a relationship, not evidence -- and relationships alone rarely survive a budget review.",
      },
      {
        heading: "Step 5 -- Build Strategic Partnerships",
        body: "A Customer Success Manager should eventually become someone the customer trusts for strategic guidance -- moving beyond reactive support to become advisor, consultant, business partner, and advocate. When customers view you this way, conversations naturally shift from product questions to business discussions. This shift doesn't happen by declaring yourself a strategic partner -- it happens by consistently showing up with insight the customer didn't already have, until asking for your perspective becomes their default instinct.",
      },
      {
        heading: "Step 6 -- Expand Through Value",
        body: "Expansion should never feel like selling. It should feel like solving the next problem. When customers consistently achieve outcomes, new opportunities emerge naturally -- expansion becomes the result of trust, not pressure. If an expansion conversation feels like a pitch, that's usually a sign it was raised too early, before the underlying value was actually proven -- not a sign the CSM needs a better script.",
      },
      {
        heading: "The Guiding Principle",
        body: "Customer Success is often measured by churn, renewals, NRR, and ARR. Those metrics matter, but they are outcomes, not starting points. The starting point is always the customer. If customers consistently achieve success, the business metrics will follow -- which is why every strategy, framework, and conversation should begin with one question: \"What does success look like for you right now?\" Every other framework in this library is really just a more detailed way of answering that one question, for a specific moment in the relationship.",
      },
    ],
  },
  {
    slug: "customer-outcome-pyramid",
    title: "The Customer Outcome Pyramid",
    tagline: "Five levels between a signed contract and a strategic partnership",
    category: "Foundations",
    readTime: "7 min read",
    summary:
      "Many companies celebrate reaching Level 2. Exceptional Customer Success teams focus on reaching Level 5.",
    sections: [
      {
        heading: "Level 1 -- Product Access",
        body: "Have they adopted the product fully into their operations, or does it just sit unused after setup? At this level, the customer has purchased the product and completed technical setup -- accounts are created, integrations are configured, credentials work. That's it. This is the level most implementations stop at when a CSM measures success by whether the kickoff call happened, rather than whether anything changed for the customer afterward. Access is a precondition for value, not evidence of it.",
      },
      {
        heading: "Level 2 -- Product Adoption",
        body: "Are the right people actually using the right features, regularly enough for it to matter? The customer is actively using the product's key features -- not every feature, and not necessarily often, but the ones that connect to the outcome they bought it for. This is where most vendor-side success metrics stop, and it's a mistake: a customer can be a model of Level 2 adoption and still churn, because usage alone has never paid a renewal invoice.",
      },
      {
        heading: "Level 3 -- Value Realization",
        body: "Are they starting to see the specific benefit they expected -- time saved, cost reduced, a process that used to be slow now moving faster? The customer begins to experience measurable benefits, even if modest ones. This is the level where the relationship starts to become defensible, because there's now a real answer to \"what has this actually done for us,\" rather than a description of what the product does.",
      },
      {
        heading: "Level 4 -- Business Outcomes",
        body: "Are they achieving the results they originally set out to use the product to achieve -- the actual goal that justified the purchase in the first place? The customer's original goals are being achieved, not just approached. This is the level a renewal conversation should be built on, because it answers the only question that actually matters to a budget-holder: did this work?",
      },
      {
        heading: "Level 5 -- Strategic Partnership",
        body: "Do they see you as someone worth calling before a decision is made, not just someone to contact when something breaks? The customer views the vendor as a trusted business partner and actively explores new opportunities for growth together. Very few accounts reach this level, and it's rarely won on product strength alone -- it's earned through a track record of the CSM consistently helping the customer think, not just helping them use software.",
      },
    ],
  },
  {
    slug: "success-conversation-framework",
    title: "The Success Conversation Framework",
    tagline: "One of the strongest habits a CSM can develop is asking better questions",
    category: "Foundations",
    readTime: "6 min read",
    summary: "A six-step conversation arc that moves a customer relationship from task-level to strategic.",
    sections: [
      { heading: "Discover -- \"What are you trying to achieve?\"", body: "Every strong success conversation starts here, and it's deliberately open rather than product-shaped. The instinct under time pressure is to jump straight to a feature or a fix, but starting with the customer's actual goal is what prevents the rest of the conversation from solving the wrong problem well." },
      { heading: "Clarify -- \"Why is this important to your business?\"", body: "A stated goal without a reason behind it is easy to misjudge in priority and urgency. This question surfaces what's really at stake -- a KPI someone is accountable for, a deadline, a board commitment -- so the recommendation that follows is sized correctly." },
      { heading: "Align -- \"How can our product help achieve that outcome?\"", body: "Only now does the product enter the conversation, and specifically in service of the goal already established -- not as a general tour of capabilities. This ordering is what keeps the conversation feeling like problem-solving rather than a sales pitch." },
      { heading: "Execute -- \"What actions do we need to take together?\"", body: "Alignment without named next steps evaporates within a week. This step turns agreement into a short list of specific actions with owners, so the conversation produces movement, not just a good feeling." },
      { heading: "Measure -- \"How will we know we've succeeded?\"", body: "Defining the success signal before the work starts -- not after -- is what makes the eventual result legible. Without this step, even a genuinely successful outcome can be hard to point to later, because nobody agreed in advance what success would look like." },
      { heading: "Expand -- \"Now that we've achieved this outcome, what's the next opportunity?\"", body: "The final step is what turns a single success into a relationship pattern. Asked consistently, at the close of every resolved goal, this question is what naturally surfaces expansion opportunities without ever needing to feel like a pitch." },
    ],
  },
  {
    slug: "trust-to-retention-model",
    title: "The Trust-to-Retention Model",
    tagline: "Retention is not the result of contracts. It is the result of trust built over time.",
    category: "Retention",
    readTime: "6 min read",
    summary: "Trust is the foundation of long-term customer relationships, and it grows through six consistent behaviors -- each one a small, repeatable habit rather than a single grand gesture.",
    sections: [
      { heading: "Listen Deeply", body: "Not just hearing a request, but understanding the concern underneath it. A customer who feels genuinely heard tolerates far more friction elsewhere in the relationship than one who feels processed." },
      { heading: "Respond Promptly", body: "Speed signals priority. A fast, honest \"I don't have the answer yet, but here's when I will\" builds more trust than a slow, complete answer -- silence is what erodes confidence fastest, not incomplete information." },
      { heading: "Follow Through on Commitments", body: "Every promise kept is a small deposit in the trust account; every one missed is a much larger withdrawal. Trust is asymmetric -- it takes many kept promises to offset a single broken one." },
      { heading: "Demonstrate Measurable Value", body: "Trust that isn't reinforced with evidence quietly decays, even in a relationship that feels warm. Regularly showing the customer what's actually working keeps trust grounded in something more durable than rapport alone." },
      { heading: "Communicate Proactively", body: "Surfacing a problem before the customer finds it themselves is one of the fastest ways to build credibility. It signals that the vendor is watching the account as carefully as the customer is." },
      { heading: "Earn Executive Confidence", body: "Day-to-day trust with a champion is necessary but not sufficient -- renewal and expansion decisions are usually made or approved above that level. Executive confidence has to be earned separately and deliberately, not assumed to follow automatically from a good working relationship lower down." },
    ],
  },
  {
    slug: "value-realization-loop",
    title: "The Value Realization Loop",
    tagline: "Customer Success doesn't end when onboarding is complete",
    category: "Adoption",
    readTime: "8 min read",
    summary: "A six-stage loop that reinforces value continuously throughout the customer lifecycle, then repeats -- deliberately circular, because value realization is not a milestone you reach once.",
    sections: [
      { heading: "Understand", body: "Understand the customer's business -- goals, KPIs, challenges, stakeholders, success metrics. This stage is a deliberate echo of Step 1 in the Operating System, because every loop through this cycle should start by re-confirming the goal is still the right one, not assuming it hasn't changed." },
      { heading: "Align", body: "Match product capabilities to business objectives. Every feature should answer: \"how does this help the customer achieve their goal?\" If a feature can't answer that question for a specific customer, it doesn't belong in this loop's plan for them, regardless of how impressive it is in the abstract." },
      { heading: "Adopt", body: "Drive meaningful product adoption -- not feature usage, meaningful usage. Customers should adopt the features that create the greatest business impact, which is not always the flashiest or newest capability available." },
      { heading: "Measure", body: "Track outcomes: time saved, revenue generated, cost reduction, efficiency gained, productivity improvement, satisfaction. This is where the loop produces evidence, not just activity -- and evidence is what the next two stages depend on." },
      { heading: "Celebrate", body: "People remember progress. Celebrate wins, highlight milestones, share success stories internally and externally where appropriate. This stage is easy to skip under time pressure, and skipping it is a mistake -- an unacknowledged win doesn't build the same confidence as a named one." },
      { heading: "Expand", body: "Once value is established, ask: \"what is the next business challenge we can solve together?\" Then the cycle begins again -- Understand, for the new goal, with all the accumulated context from the last time through the loop." },
    ],
  },
  {
    slug: "customer-conversation-pyramid",
    title: "The Customer Conversation Pyramid",
    tagline: "Every customer conversation should move upward",
    category: "Adoption",
    readTime: "6 min read",
    summary: "Five levels a conversation can occupy -- the goal is helping every conversation evolve toward strategic partnership, not staying comfortably at the bottom.",
    sections: [
      { heading: "Level 1 -- Support", body: "\"How do I fix this?\" -- transactional, reactive, and necessary, but it's the floor of the relationship, not a place to live. A CSM who only ever operates at this level is functioning as support with a nicer title." },
      { heading: "Level 2 -- Guidance", body: "\"How should we use this feature?\" -- still tactical, but forward-looking rather than reactive. This is where most onboarding-era conversations sit, and where many relationships plateau if nobody deliberately pushes them further." },
      { heading: "Level 3 -- Optimization", body: "\"How can we improve our workflow?\" -- the conversation starts to be about the customer's process, not just the product's mechanics. Reaching this level consistently is a strong signal the relationship has moved past onboarding." },
      { heading: "Level 4 -- Business Strategy", body: "\"How can this platform help us achieve our quarterly goals?\" -- the customer is now bringing business objectives into the room, not just operational questions. Very few vendor relationships are trusted enough to be included at this level." },
      { heading: "Level 5 -- Executive Partnership", body: "\"Let's discuss our long-term growth strategy together.\" -- the top of the pyramid, where the CSM is a standing part of how the customer thinks about their own future, not someone brought in when something is needed." },
    ],
  },
  {
    slug: "expansion-opportunity-matrix",
    title: "The Expansion Opportunity Matrix",
    tagline: "Expansion should never be based on quota pressure",
    category: "Expansion",
    readTime: "7 min read",
    summary: "Four dimensions to evaluate before an expansion conversation begins -- keeping recommendations aligned with customer value rather than sales targets. All four should be strong before the conversation is likely to land.",
    sections: [
      { heading: "Product Usage", body: "Is adoption deep and consistent, or is the customer still finding their footing with what they've already bought? Raising expansion with an account that hasn't yet mastered its current tier reads as tone-deaf, however well-intentioned the offer is." },
      { heading: "Customer Outcomes", body: "Has the customer achieved measurable success with what they have today? Usage without a demonstrated outcome is not a strong enough foundation for a bigger ask -- it's evidence of activity, not proof of value." },
      { heading: "Executive Trust", body: "Do decision-makers see you as a trusted advisor, or as a vendor they tolerate? Expansion recommendations land very differently depending on which one is true, regardless of how good the underlying business case is." },
      { heading: "Business Need", body: "Has the customer's business evolved in ways that create a new, genuine reason for more -- growth, a new use case, a new team needing access? An expansion pitch built on the vendor's need for more revenue rather than the customer's actual situation rarely survives contact with a real budget conversation." },
    ],
  },
  {
    slug: "renewal-readiness-score",
    title: "The Renewal Readiness Score",
    tagline: "Renewals are earned long before the renewal conversation",
    category: "Retention",
    readTime: "7 min read",
    summary: "Six questions to evaluate readiness well ahead of the renewal date. A \"no\" on any of them isn't a reason to panic -- it's a specific, fixable gap, as long as it's found early enough to act on.",
    sections: [
      { heading: "Has the customer achieved their desired outcomes?", body: "The single most important question. If the honest answer is no, everything else on this list is secondary -- the renewal conversation should really be a recovery plan in disguise." },
      { heading: "Are key stakeholders engaged?", body: "A renewal can look healthy at the champion level and still be at serious risk if the executive sponsor has gone quiet. Engagement has to be checked at every level that influences the decision, not just the level that answers emails fastest." },
      { heading: "Is product adoption healthy?", body: "Not just present, but healthy against the specific goals set at the start of the relationship -- a low bar met is not the same as a meaningful one." },
      { heading: "Has measurable value been demonstrated?", body: "The same discipline as the Operating System's Step 4 applies here: a felt sense that things are going well is not the same as a number the customer can repeat back to their own leadership." },
      { heading: "Are outstanding risks being managed?", body: "An open risk that's actively being worked is very different from one that's been quietly ignored. The Risk Register exists precisely so this question has a documented answer rather than a guess." },
      { heading: "Does the customer have confidence in the partnership?", body: "The most holistic question on the list, and often the hardest to score honestly, because it requires being willing to notice a relationship that feels fine on the surface but has lost real confidence underneath." },
    ],
  },
  {
    slug: "voice-of-customer-bridge",
    title: "The Voice of the Customer Bridge",
    tagline: "Customer Success occupies a unique position -- it connects two worlds",
    category: "Retention",
    readTime: "6 min read",
    summary: "A structured translation chain from raw customer pain to real product improvement, ensuring customers influence product direction in meaningful ways rather than having feedback disappear into a backlog.",
    sections: [
      { heading: "Customer Pain", body: "The starting point -- something genuinely frustrating a customer in their day-to-day use of the product, expressed in their own words, in their own moment of frustration." },
      { heading: "Customer Feedback", body: "That pain, captured deliberately rather than left as an offhand comment on a call -- the difference between feedback that gets acted on and feedback that gets forgotten is usually whether anyone wrote it down." },
      { heading: "Insights", body: "Feedback from one customer is an anecdote. Feedback patterns across many customers are an insight -- the step where a CSM's individual observations become something a product team can actually act on." },
      { heading: "Recommendations", body: "An insight translated into a specific, scoped recommendation -- not \"customers want this to be easier,\" but a concrete description of what \"easier\" would actually look like." },
      { heading: "Product Improvements", body: "The recommendation, built. This is the step CS has the least control over, which is exactly why the steps before it -- turning noise into a real, well-formed recommendation -- matter so much." },
      { heading: "Better Customer Outcomes", body: "The loop closes here, and closing it publicly -- telling the customer whose pain started the chain that it led to a real change -- is what makes customers keep giving feedback instead of giving up on being heard." },
    ],
  },
  {
    slug: "executive-business-review-framework",
    title: "The Executive Business Review Framework",
    tagline: "Keep EBRs focused on business outcomes, not feature demonstrations",
    category: "Retention",
    readTime: "6 min read",
    summary: "Five questions every Executive Business Review should answer, in order -- a structure repeatable enough that leadership always knows what to expect walking in.",
    sections: [
      { heading: "What were we trying to achieve?", body: "Opens the review by re-grounding everyone in the original goal -- easy to assume everyone remembers, and often untrue, especially on the customer's side where priorities shift quickly." },
      { heading: "What results have we achieved?", body: "The evidence section -- specific, numeric wherever possible, and honest about partial progress rather than only showing the wins." },
      { heading: "What challenges remain?", body: "Naming this deliberately, rather than letting the customer bring it up first, is what makes an EBR feel like a genuine partnership conversation instead of a vendor highlight reel." },
      { heading: "What opportunities exist?", body: "The natural, evidence-backed place for an expansion conversation to surface -- because it follows directly from demonstrated results, not from a sales calendar." },
      { heading: "What should we do next?", body: "Closes the review with specific, owned next steps -- an EBR without this ending is a nice conversation that produces no forward motion." },
    ],
  },
  {
    slug: "customer-health-compass",
    title: "The Customer Health Compass",
    tagline: "Customer health as five dimensions, not one number",
    category: "Retention",
    readTime: "8 min read",
    summary: "A more complete picture of account health that helps prioritize proactive engagement, rather than reacting to a single blended score that can hide exactly where the real problem is.",
    sections: [
      {
        heading: "Product Adoption",
        body: "Have they adopted the product fully into their operations, or is usage still shallow and occasional? This dimension asks whether the product has actually become part of how the customer works day to day -- not whether they logged in this week, but whether the team would genuinely notice if it disappeared tomorrow. Low adoption is often the earliest visible signal of risk, because everything else on this compass tends to follow from it.",
      },
      {
        heading: "Business Outcomes",
        body: "Are they achieving the results they originally intended to use the product to achieve? This is the dimension that matters most to whoever signs the renewal, and it's the one most easily missed by a CSM who's close to the day-to-day relationship but hasn't recently checked back against the original goal. A customer can score well here even with modest usage, if that usage is precisely targeted at the outcome that matters.",
      },
      {
        heading: "Relationship Strength",
        body: "Do the right people -- not just a single friendly contact -- know, trust, and engage with the account team? A relationship that depends on one champion is fragile by definition, however warm it feels. This dimension asks about coverage and depth across the stakeholder map, not just the quality of the best relationship in the account.",
      },
      {
        heading: "Customer Sentiment",
        body: "What does the customer actually say, unprompted, about the experience -- not what a survey score implies, but what comes up in real conversations, support tickets, and QBRs? Sentiment can diverge sharply from usage data: an account can be heavily used and quietly resentful, which is one of the most dangerous combinations on this compass because it rarely shows up in a dashboard until it's already a churn risk.",
      },
      {
        heading: "Growth Potential",
        body: "Is there a natural next problem this account is positioned for the vendor to help solve? This dimension isn't about whether the vendor needs the revenue -- it's about whether the account's own trajectory is creating a genuine opportunity. A healthy score here is a signal to watch for the right moment, not a reason to start a pitch early.",
      },
      {
        heading: "Using the Compass, Not Just a Score",
        body: "The value of scoring five dimensions separately, rather than blending them into one number, is that it tells a CSM exactly where to focus. An account with strong Adoption and Outcomes but weak Relationship Strength needs a very different intervention than one with the opposite pattern -- and a single blended health score would show both accounts as roughly the same shade of amber, hiding the very different actions each one actually needs.",
      },
    ],
  },
  {
    slug: "rice-prioritization",
    title: "The RICE Prioritization Model",
    tagline: "Stop arguing about gut feeling. Start ranking priorities you can defend.",
    category: "Operations",
    readTime: "6 min read",
    summary:
      "A decision-making tool for ranking competing priorities against four measurable factors, so a team can agree on what comes first and defend that call to anyone who asks.",
    sections: [
      { heading: "R -- Reach", body: "How many people or accounts are directly affected by this initiative? Is this something that touches one client, or many? A fix that helps a single account, however loudly they're asking for it, scores differently than one that touches a whole segment -- Reach forces that distinction into the open instead of letting the loudest voice win by default." },
      { heading: "I -- Impact", body: "How much difference will it make -- to revenue, trust, or retention -- if this works? Impact is deliberately separated from Reach because a narrow-reach initiative can still be high-impact (a fix that saves one enterprise account worth millions), and a wide-reach one can be low-impact (a cosmetic change everyone sees but nobody cares about)." },
      { heading: "C -- Confidence", body: "How certain are we that this will actually work as planned -- are we relying on solid evidence, or an educated guess dressed up as a plan? Confidence is what keeps Impact honest: it's easy to claim a huge impact for an idea nobody has actually tested." },
      { heading: "E -- Effort", body: "How much time and resource does it take to execute, realistically, including the parts that always take longer than expected? Effort is the denominator that turns a good idea into a good use of a specific week's capacity." },
      {
        heading: "Using It Under Pressure",
        body: "RICE is most valuable exactly when a team disagrees about what to prioritize under time pressure -- a competitive threat, a renewal at risk, a limited-bandwidth technical team split across multiple demands. Scoring each option against all four factors, in order, turns a gut-feeling argument into a rankable, defensible sequence that survives being questioned by someone who wasn't in the room when the decision was made.",
      },
      {
        heading: "What It's Not For",
        body: "RICE is a prioritization tool, not a strategy tool -- it ranks options that are already on the table, it doesn't generate them. Used well, it comes after the harder work of identifying what the real options actually are, not as a substitute for that thinking.",
      },
    ],
  },
];

export function getFramework(slug: string) {
  return frameworks.find((f) => f.slug === slug);
}
