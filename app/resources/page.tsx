import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/lib/resources";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | David Maika",
  description: "Practical Customer Success templates and checklists you can adopt directly.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
      <div className="mb-3 flex items-center gap-3">
        <img src="/navy-avatar.jpg" alt="" className="h-9 w-9 rounded-full border border-line object-cover" />
        <span className="font-mono text-xs font-semibold text-gold">RESOURCE LIBRARY</span>
      </div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        Free Customer Success resources
      </h1>
      <p className="mb-14 max-w-xl text-lg text-text-dim">
        Practical templates and checklists you can adopt tomorrow -- grounded in the frameworks and Knowledge Hub above.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <Link
            key={r.slug}
            href={`/resources/${r.slug}`}
            className="group flex flex-col rounded-xl border border-line bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide text-gold">
              <span>{r.category}</span>
              <span className="text-text-dim">{r.readTime}</span>
            </div>
            <h3 className="mb-2 font-bold">{r.title}</h3>
            <p className="mb-4 text-sm text-text-dim">{r.description}</p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
              View resource <ArrowRight size={12} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
