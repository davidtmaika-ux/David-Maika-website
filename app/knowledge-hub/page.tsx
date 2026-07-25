import type { Metadata } from "next";
import Link from "next/link";
import { volumes } from "@/lib/knowledge-hub";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Hub | David Maika",
  description: "A five-volume, curriculum-style library covering Customer Success end to end.",
};

export default function KnowledgeHubPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
      <div className="mb-3 font-mono text-xs font-semibold text-gold">KNOWLEDGE HUB</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        Customer Success Knowledge Hub
      </h1>
      <p className="mb-14 max-w-xl text-lg text-text-dim">
        A five-volume, curriculum-style library covering the discipline end to end -- from first principles to modern operations and AI.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {volumes.map((v) => (
          <Link
            key={v.slug}
            href={`/knowledge-hub/${v.slug}`}
            className="group flex flex-col rounded-xl border border-line bg-white/[0.02] p-7 transition-all hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wide text-gold">
              <span>{v.number}</span>
              <span className="text-text-dim">{v.readTime}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold">{v.title}</h3>
            <p className="mb-4 text-sm text-text-dim">{v.tagline}</p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
              Start reading <ArrowRight size={12} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
