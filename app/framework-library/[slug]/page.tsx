import { frameworks, getFramework } from "@/lib/frameworks";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

export function generateStaticParams() {
  return frameworks.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = getFramework(slug);
  return { title: f ? `${f.title} | David Maika` : "Framework" };
}

export default async function FrameworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = getFramework(slug);
  if (!f) return notFound();

  const idx = frameworks.findIndex((x) => x.slug === f.slug);
  const next = frameworks[(idx + 1) % frameworks.length];

  return (
    <div>
      <div className="border-b border-line bg-[linear-gradient(160deg,#0B1E33,#0B0F14)] px-6 py-16 md:px-8">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/framework-library"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-text-dim hover:text-gold"
          >
            <ArrowLeft size={13} /> Framework Library
          </Link>
          <div className="mb-4 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wide text-gold">
            <span>{f.category}</span>
            <span>&middot;</span>
            <span>{f.readTime}</span>
            {f.flagship && (
              <>
                <span>&middot;</span>
                <span>Flagship</span>
              </>
            )}
          </div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">{f.title}</h1>
          <p className="mb-6 max-w-xl text-text-dim">{f.tagline}</p>
          <a
            href={`/downloads/${f.slug}.pdf`}
            download
            className="inline-flex items-center gap-2 rounded-md border border-gold/40 px-4 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10"
          >
            <Download size={15} /> Download PDF
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16 md:px-8">
        {f.sections.map((s) => (
          <div key={s.heading} className="mb-10">
            <h2 className="mb-3 text-xl font-bold text-gold">{s.heading}</h2>
            {s.body && <p className="text-text-dim">{s.body}</p>}
            {s.items && (
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-text-dim">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-line px-6 py-10 md:px-8">
        <Link
          href={`/framework-library/${next.slug}`}
          className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border border-line bg-white/[0.02] p-6 transition-colors hover:border-gold/40"
        >
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">Next framework</div>
            <div className="font-bold">{next.title}</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
