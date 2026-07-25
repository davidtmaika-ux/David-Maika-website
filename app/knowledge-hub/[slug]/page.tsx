import { volumes, getVolume } from "@/lib/knowledge-hub";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return volumes.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVolume(slug);
  return { title: v ? `${v.number}: ${v.title} | David Maika` : "Knowledge Hub" };
}

export default async function VolumePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVolume(slug);
  if (!v) return notFound();

  const idx = volumes.findIndex((x) => x.slug === v.slug);
  const next = volumes[(idx + 1) % volumes.length];

  return (
    <div>
      <div className="border-b border-line bg-[linear-gradient(160deg,#0B1E33,#0B0F14)] px-6 py-16 md:px-8">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/knowledge-hub"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-text-dim hover:text-gold"
          >
            <ArrowLeft size={13} /> Knowledge Hub
          </Link>
          <div className="mb-4 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wide text-gold">
            <span>{v.number}</span>
            <span>&middot;</span>
            <span>{v.readTime}</span>
          </div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">{v.title}</h1>
          <p className="max-w-xl text-text-dim">{v.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16 md:px-8">
        <p className="mb-12 text-lg text-text-dim">{v.intro}</p>

        {/* table of contents */}
        <div className="mb-12 rounded-xl border border-line bg-white/[0.02] p-6">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gold">In This Volume</div>
          <ol className="space-y-1.5">
            {v.sections.map((s, i) => (
              <li key={s.heading} className="text-sm text-text-dim">
                <a href={`#s${i}`} className="hover:text-gold">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {v.sections.map((s, i) => (
          <div key={s.heading} id={`s${i}`} className="mb-10 scroll-mt-24">
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
          href={`/knowledge-hub/${next.slug}`}
          className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border border-line bg-white/[0.02] p-6 transition-colors hover:border-gold/40"
        >
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">Next volume</div>
            <div className="font-bold">{next.number}: {next.title}</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
