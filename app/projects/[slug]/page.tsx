import { projects, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p ? `${p.title} | David Maika` : "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return notFound();

  return (
    <div>
      <div className="border-b border-line bg-[linear-gradient(160deg,#0B1E33,#0B0F14)] px-6 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/projects" className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-text-dim hover:text-gold">
            <ArrowLeft size={13} /> All projects
          </Link>
          <div className="mb-4 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wide text-gold">
            <span>{p.discipline}</span><span>&middot;</span><span>{p.role}</span>
          </div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">{p.title}</h1>
          <p className="text-sm text-text-dim">{p.program}</p>
        </div>
      </div>

      <div className="border-b border-line bg-bg-panel px-6 py-8 md:px-8">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
          {p.stats.map((s) => (
            <div key={s.label}>
              <div className="text-lg font-bold text-gold">{s.value}</div>
              <div className="text-xs text-text-dim">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8">
        <Section title="Overview" body={p.overview} />
        <Section title="The Problem" body={p.problem} />

        <h2 className="mb-4 mt-10 text-xl font-bold text-gold">Key Features</h2>
        <ul className="mb-10 space-y-2.5">
          {p.keyFeatures.map((f) => (
            <li key={f} className="flex gap-2.5 text-text-dim">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <h2 className="mb-4 text-xl font-bold text-gold">Target Personas</h2>
        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          {p.personas.map((persona) => (
            <div key={persona.name} className="rounded-lg border border-line bg-white/[0.02] p-4">
              <div className="mb-1 text-sm font-bold">{persona.name}</div>
              <p className="text-xs text-text-dim">{persona.needs}</p>
            </div>
          ))}
        </div>

        <Section title="Competitive Positioning" body={p.competitiveEdge} />

        <h2 className="mb-4 mt-10 text-xl font-bold text-gold">Success Metrics</h2>
        <ul className="mb-10 space-y-2.5">
          {p.successMetrics.map((m) => (
            <li key={m} className="flex gap-2.5 text-text-dim">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span>{m}</span>
            </li>
          ))}
        </ul>

        <Section title="Reflection" body={p.reflection} />
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
