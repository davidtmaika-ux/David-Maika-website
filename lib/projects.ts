export type Project = {
  slug: string;
  title: string;
  discipline: string;
  program: string;
  role: string;
  summary: string;
  tags: string[];
  stats: { value: string; label: string }[];
  overview: string;
  problem: string;
  keyFeatures: string[];
  personas: { name: string; needs: string }[];
  competitiveEdge: string;
  successMetrics: string[];
  reflection: string;
};

export const projects: Project[] = [
  {
    slug: "bookiify-personalization",
    title: "Bookiify -- Enhancing Booking Personalization",
    discipline: "Product Management",
    program: "Product Management Group Project (Group 8)",
    role: "Product Manager (Group)",
    summary:
      "A product requirements document for an AI-driven recommendation engine addressing the #1 driver of hotel booking abandonment: generic, one-size-fits-all search results.",
    tags: ["Product Requirements", "Recommendation Systems", "Hospitality Tech"],
    stats: [
      { value: "81%", label: "of online travel bookings abandoned" },
      { value: "10-30%", label: "Target conversion lift" },
      { value: "4.5/5", label: "Target CSAT" },
    ],
    overview:
      "Bookiify (\"Book Smarter, Not Harder\") is a multi-vendor hotel booking platform. Generic booking systems force every guest through the same undifferentiated search experience regardless of their actual preferences, and the data was stark: 81% of online travel bookings are abandoned, largely due to overwhelming, non-personalized choices.",
    problem:
      "Guests encounter inefficiencies during the booking process due to a lack of personalized recommendations, leading to decreased satisfaction and high abandonment. A frequent business traveler persona, Sarah, illustrated the gap clearly: despite being a loyal repeat user, the platform never recognized her room-type preferences or proximity needs, forcing her to start from scratch on every visit.",
    keyFeatures: [
      "Adaptive Recommendation Engine -- AI-powered suggestions that evolve with each user's search history, past bookings, and real-time context (location, season)",
      "Contextual Search Results -- results that adjust dynamically for local events, seasonal trends, and destination conditions, not just stored preferences",
      "Predictive Filters & Smart Sorting -- anticipates likely filter and sort choices based on prior behavior, reducing manual input",
      "Personalized Engagement Hub -- a dashboard combining bookings, tailored recommendations, and trip-planning tools in one place",
      "Integrated Upsell & Cross-Sell -- relevant room upgrades and add-on services surfaced at the right moment in the booking and post-booking flow",
    ],
    personas: [
      { name: "Frequent Business Traveler", needs: "Efficient booking, convenient locations, business amenities -- frustrated by time wasted re-entering preferences" },
      { name: "Leisure Traveler", needs: "Personalized family-friendly activities and unique experiences, without generic guesswork" },
      { name: "Budget-Conscious Traveler", needs: "Timely alerts on relevant deals rather than missing offers buried in noise" },
    ],
    competitiveEdge:
      "Competitor analysis of Booking.com, Marriott Bonvoy, and Hotels.com found the same gap across all three: strong inventory and brand trust, but shallow personalization and high abandonment from overwhelming choice. Bookiify's differentiation was making personalization the core mechanic -- from room selection to amenities -- rather than a bolt-on filter.",
    successMetrics: [
      "10-30% increase in conversion rate",
      "15% improvement in user retention within 6 months",
      "10-15% increase in average order value via targeted upsells",
      "20% reduction in average time-to-complete-booking",
      "15% reduction in booking abandonment rate",
      "Customer satisfaction score of 4.5 / 5 or higher",
    ],
    reflection:
      "Writing this PRD reinforced something that now sits underneath how I approach Customer Success too: personalization isn't a feature you add at the end, it's a lens you apply to the entire journey, from the very first search. The discipline of defining measurable success criteria before a single feature is built -- rather than after launch -- is exactly the same instinct I bring to a Customer Success Plan.",
  },
  {
    slug: "agriclime-flood-resilience",
    title: "AgriClime -- Flood Resilience for Smallholder Farmers",
    discipline: "Product Management",
    program: "Product Management Group Project",
    role: "Product Manager (Group)",
    summary:
      "A mobile app concept delivering real-time flood alerts, weather forecasts, and sustainable farming education to smallholder farmers across Nigeria's flood-prone regions.",
    tags: ["Climate Tech", "AgTech", "Social Impact"],
    stats: [
      { value: "30%", label: "Potential productivity loss from flooding" },
      { value: "$3B+", label: "Annual flood losses in Nigeria" },
      { value: "15-20%", label: "Projected rise in flood frequency" },
    ],
    overview:
      "Nigeria faces recurring, escalating floods that devastate smallholder farms, driving up food prices and deepening food insecurity. The World Bank estimates flooding and climate change can cut agricultural productivity by up to 30%, with the IFRC putting annual flood losses above $3 billion -- and Nigeria's Meteorological Agency projects flood frequency and intensity will keep rising 15-20% over the next decade.",
    problem:
      "Farmers in flood-prone regions lack timely, reliable information -- weather forecasts, flood alerts, and dam-release notifications -- forcing them to rely on traditional, unreliable sources and react too late to protect their crops. Limited awareness of modern farming techniques, and limited affordability and usability of existing technology, compound the problem.",
    keyFeatures: [
      "Real-time weather forecasts, flood alerts, and dam-release notifications",
      "Educational resources and training on sustainable farming practices",
      "Planned AI/ML integration for predictive analytics and earlier real-time alerts",
      "An in-app e-learning platform with webinars and live sessions with agricultural experts",
      "IoT soil sensors and weather stations feeding real-time local data, paired with telecom partnerships to improve rural connectivity",
    ],
    personas: [
      { name: "Musa Abdullahi", needs: "45, Kano State -- farmland repeatedly submerged by flooding, limited awareness of modern farming technology, needs timely flood and weather information he can act on before damage is done." },
    ],
    competitiveEdge:
      "Benchmarked against Digital Green (digital agricultural advisory across India and Africa) and FarmLogs (US-based weather and crop-health tracking), AgriClime's differentiation is hyper-local: dam-release notifications and flood alerts specific to Nigerian river systems and rainfall patterns, paired with sustainable-farming education built for a persona with limited digital literacy rather than a commercial farming audience.",
    successMetrics: [
      "Informed decision-making -- timely, reliable alerts that let farmers protect crops before flooding hits",
      "Increased productivity through access to modern, sustainable farming techniques",
      "Economic stability -- reduced flood impact helping stabilize food prices and farmer livelihoods",
      "Environmental sustainability through farming methods that reduce soil erosion and preserve biodiversity",
      "Scalability -- a cost-effective, user-friendly design built to reach farmers across diverse regions",
    ],
    reflection:
      "AgriClime forced an honest conversation about what 'success' means for a venture like this before a single user has adopted it -- we flagged our own open questions directly in the deck: realistic adoption rates, long-term impact on yields, and how the app would integrate with existing agricultural support systems. That habit of naming what you don't yet know, rather than projecting false confidence, is the same discipline I bring to a Customer Success Plan's risk and assumptions section.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
