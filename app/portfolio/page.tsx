import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Portfolio | David Maika",
  description: "Real Customer Success case studies.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
      <div className="mb-3 font-mono text-xs font-semibold text-gold">PORTFOLIO</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        Real Customer Success in Action
      </h1>
      <p className="mb-14 max-w-xl text-lg text-text-dim">
        Explore how operational thinking, customer-centric execution, and
        structured success strategies shaped customer outcomes across
        multiple industries.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.slug} cs={cs} index={i} />
        ))}
      </div>
    </div>
  );
}
