import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Additional Projects | David Maika",
  description: "Product Management and other project work beyond the core Customer Success portfolio.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
      <div className="mb-3 font-mono text-xs font-semibold text-gold">ADDITIONAL PROJECTS</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        Beyond Customer Success
      </h1>
      <p className="mb-14 max-w-xl text-lg text-text-dim">
        Product Management and other project work that shapes how I think about customers,
        products, and outcomes -- alongside the core Customer Success portfolio.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group flex flex-col rounded-xl border border-line bg-white/[0.02] p-7 transition-all hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-wide text-gold">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>{p.discipline}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
            <p className="mb-5 text-sm text-text-dim">{p.summary}</p>
            <div className="mt-auto grid grid-cols-3 gap-2 border-t border-line pt-4">
              {p.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-sm font-bold text-gold">{s.value}</div>
                  <div className="text-[10px] leading-tight text-text-dim">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
              View project <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
