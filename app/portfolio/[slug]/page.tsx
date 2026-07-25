import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  return { title: cs ? `${cs.client} | David Maika` : "Case Study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return notFound();

  const idx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <div>
      {/* header band */}
      <div className="border-b border-line bg-[linear-gradient(160deg,#0B1E33,#0B0F14)] px-6 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-text-dim hover:text-gold"
          >
            <ArrowLeft size={13} /> All case studies
          </Link>
          <div className="mb-4 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wide text-gold">
            <span>{cs.industry}</span>
            <span>&middot;</span>
            <span>{cs.engagementType}</span>
            <span>&middot;</span>
            <span>{cs.role}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {cs.client}
          </h1>
          {cs.overallHealth && (
            <div
              className={`mt-4 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold ${
                cs.overallHealth.status === "good"
                  ? "border-good/30 bg-good/10 text-good"
                  : cs.overallHealth.status === "warn"
                  ? "border-warn/30 bg-warn/10 text-warn"
                  : "border-bad/30 bg-bad/10 text-bad"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  cs.overallHealth.status === "good" ? "bg-good" : cs.overallHealth.status === "warn" ? "bg-warn" : "bg-bad"
                }`}
              />
              {cs.overallHealth.label}
            </div>
          )}
        </div>
      </div>

      {/* snapshot bar */}
      <div className="border-b border-line bg-bg-panel px-6 py-8 md:px-8">
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold">
              The Challenge
            </div>
            <p className="text-sm text-text-dim">{cs.challenge}</p>
          </div>
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold">
              My Approach
            </div>
            <p className="text-sm text-text-dim">{cs.task}</p>
          </div>
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold">
              The Result
            </div>
            <p className="text-sm italic text-text-dim">{cs.outcome}</p>
          </div>
        </div>
      </div>

      {/* full narrative */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <Section title="Situation" body={cs.situation} />

        {cs.healthAudit && (
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-gold">Customer Health Audit</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {cs.healthAudit.map((h) => (
                <div
                  key={h.label}
                  className={`rounded-lg border p-4 ${
                    h.status === "good" ? "border-good/25 bg-good/5" : h.status === "warn" ? "border-warn/25 bg-warn/5" : "border-bad/25 bg-bad/5"
                  }`}
                >
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-text-dim">{h.label}</div>
                  <div className={`mb-1 text-lg font-bold ${h.status === "good" ? "text-good" : h.status === "warn" ? "text-warn" : "text-bad"}`}>
                    {h.score}
                  </div>
                  <p className="text-xs text-text-dim">{h.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <Section title="Task" body={cs.task} />

        <h2 className="mb-3 mt-12 text-xl font-bold text-gold">Action</h2>
        <ul className="mb-10 space-y-3">
          {cs.actions.map((a) => (
            <li key={a} className="flex gap-3 text-text-dim">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span>{a}</span>
            </li>
          ))}
        </ul>

        {cs.plan && (
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-gold">The Plan, Phase by Phase</h2>
            <div className="space-y-6">
              {cs.plan.map((phase) => (
                <div key={phase.phase} className="rounded-xl border border-line bg-white/[0.02] p-5">
                  <div className="mb-3 flex items-baseline justify-between">
                    <h3 className="font-bold">{phase.phase}</h3>
                    <span className="font-mono text-[11px] text-gold">{phase.days}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-text-dim">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-10 rounded-xl border border-dashed border-line bg-white/[0.02] p-6">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold">
            Result
          </h2>
          <p className="italic text-text-dim">{cs.result}</p>
        </div>

        <Section title="Reflection -- What This Taught Me" body={cs.reflection} />

        <div className="mt-6 flex flex-wrap gap-2">
          {cs.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-line px-3 py-1.5 text-xs text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* next case study */}
      <div className="border-t border-line px-6 py-10 md:px-8">
        <Link
          href={`/portfolio/${next.slug}`}
          className="mx-auto flex max-w-3xl items-center justify-between rounded-xl border border-line bg-white/[0.02] p-6 transition-colors hover:border-gold/40"
        >
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
              Next case study
            </div>
            <div className="font-bold">{next.client}</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-10">
      <h2 className="mb-3 text-xl font-bold text-gold">{title}</h2>
      <p className="text-text-dim">{body}</p>
    </div>
  );
}
