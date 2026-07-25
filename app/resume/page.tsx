import type { Metadata } from "next";
import { Download, Printer, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | David Maika",
};

const experience = [
  {
    title: "Co-Founder & Customer Success Lead",
    company: "REDA's Conglomerate -- Lagos, Nigeria",
    date: "2024 -- Present",
    bullets: [
      "Managed 40+ active client accounts across cooking, cleaning, and baking services, maintaining 90%+ customer retention and low churn through proactive engagement and relationship management",
      "Supported recurring revenue growth through onboarding, upselling, repeat business, and customer adoption strategies across hospitality and lifestyle clients",
      "Collaborated cross-functionally with operations, logistics, vendors, and service teams to improve delivery efficiency and customer experience",
      "Handled escalations, client feedback, and service optimization initiatives that improved satisfaction, retention, and long-term account growth",
    ],
  },
  {
    title: "Manager",
    company: "An6ix Apartments & Hotel -- Lagos, Nigeria",
    date: "Oct 2023 -- May 2024",
    bullets: [
      "Improved guest satisfaction scores by 30% and contributed to 15% revenue growth through customer-centric service improvements and onboarding initiatives",
      "Managed 40+ guest interactions daily while coordinating cross-functional teams to ensure seamless service delivery",
      "Implemented Zoho CRM workflows that improved operational efficiency and communication across departments",
    ],
  },
  {
    title: "Real Estate Agent",
    company: "Lucinda David Realtors -- Lagos, Nigeria",
    date: "Feb 2022 -- Oct 2023",
    bullets: [
      "Managed 15+ concurrent client portfolios, delivering tailored solutions that improved client retention and transaction volume by 25%",
      "Built strong stakeholder relationships through proactive communication, negotiation, and personalized client engagement strategies",
    ],
  },
];

const skills = [
  "Customer Success", "Customer Retention", "Account Management", "Customer Onboarding",
  "Churn Reduction", "ARR Growth", "Service Adoption", "CRM (Zoho, HubSpot)",
  "Cross-Functional Collaboration", "Stakeholder Management", "Client Success Strategy",
  "Process Optimization", "Conflict Resolution", "Project Coordination", "Hospitality Operations",
];

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:px-8">
      <div className="mb-3 font-mono text-xs font-semibold text-gold">RESUME</div>
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight">David T. Maika</h1>

      <div className="mb-12 flex flex-wrap gap-3">
        <a
          href="/downloads/david-maika-resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-bold text-[#14110A]"
        >
          <Download size={16} /> Download PDF
        </a>
        <a
          href="mailto:david.t.maika@gmail.com"
          className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold hover:border-gold hover:bg-gold/5"
        >
          <Mail size={16} /> Email David
        </a>
      </div>

      <div className="mb-10">
        <h2 className="mb-3 text-lg font-bold text-gold">Professional Summary</h2>
        <p className="text-text-dim">
          Customer Success professional with 7+ years of experience driving customer
          retention, revenue growth, onboarding, and customer satisfaction across
          hospitality, real estate, and service industries. Proven ability to manage
          high-value client relationships, reduce churn, improve product/service adoption,
          and collaborate cross-functionally to deliver exceptional customer experiences.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-3 text-lg font-bold text-gold">Core Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded border border-line bg-white/[0.02] px-3 py-1.5 text-xs text-text-dim">{s}</span>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="mb-5 text-lg font-bold text-gold">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((e) => (
            <div key={e.title}>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">{e.title}</h3>
                <span className="font-mono text-xs text-gold">{e.date}</span>
              </div>
              <div className="mb-2 text-sm text-text-dim">{e.company}</div>
              <ul className="space-y-1.5">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-text-dim">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-bold text-gold">Education &amp; Certifications</h2>
        <p className="mb-2 text-text-dim">B.Eng, Electrical/Electronics Engineering -- Niger Delta University</p>
        <p className="mb-3 text-sm text-text-dim">
          McKinsey Forward Program (2025) &middot; Certified Customer Success Specialist (CCSS) &middot;
          Customer Success Manager Course &middot; Agile &amp; Project Management &middot; Product Management
        </p>
        <a
          href="https://www.credly.com/users/david-maika"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
        >
          View all certifications on Credly <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}
