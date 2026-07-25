import { resources, getResource } from "@/lib/resources";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResource(slug);
  return { title: r ? `${r.title} | David Maika` : "Resource" };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return notFound();

  const idx = resources.findIndex((x) => x.slug === r.slug);
  const next = resources[(idx + 1) % resources.length];

  return (
    <div>
      <div className="border-b border-line bg-[linear-gradient(160deg,#0B1E33,#0B0F14)] px-6 py-16 md:px-8">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/resources"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-text-dim hover:text-gold"
          >
            <ArrowLeft size={13} /> Resource Library
          </Link>
          <div className="mb-4 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wide text-gold">
            <span>{r.category}</span>
            <span>&middot;</span>
            <span>{r.readTime}</span>
          </div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">{r.title}</h1>
          <p className="max-w-xl text-text-dim">{r.description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16 md:px-8">
        <div className="mb-10">
          <h2 className="mb-3 text-xl font-bold text-gold">What's Inside</h2>
          <ul className="space-y-2.5">
            {r.whatsInside.map((item) => (
              <li key={item} className="flex gap-2.5 text-text-dim">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10 rounded-xl border border-line bg-white/[0.02] p-6">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gold">How To Use It</h2>
          <p className="text-text-dim">{r.howToUse}</p>
        </div>

        <a
          href={`/downloads/${r.slug}.pdf`}
          download
          className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-bold text-[#14110A]"
        >
          <Download size={16} /> Download Full PDF Guide
        </a>
      </div>

      <div className="border-t border-line px-6 py-10 md:px-8">
        <Link
          href={`/resources/${next.slug}`}
          className="mx-auto flex max-w-2xl items-center justify-between rounded-xl border border-line bg-white/[0.02] p-6 transition-colors hover:border-gold/40"
        >
          <div>
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">Next resource</div>
            <div className="font-bold">{next.title}</div>
          </div>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
