import type { Metadata } from "next";
import Link from "next/link";
import { frameworks } from "@/lib/frameworks";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Framework Library | David Maika",
  description: "Original Customer Success frameworks -- practical models for onboarding, adoption, retention, and expansion.",
};

export default function FrameworkLibraryPage() {
  const flagship = frameworks.find((f) => f.flagship);
  const rest = frameworks.filter((f) => !f.flagship);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
      <div className="mb-3 flex items-center gap-3">
        <img src="/navy-avatar.jpg" alt="" className="h-9 w-9 rounded-full border border-line object-cover" />
        <span className="font-mono text-xs font-semibold text-gold">FRAMEWORK LIBRARY</span>
      </div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        Frameworks that guide the work
      </h1>
      <p className="mb-14 max-w-xl text-lg text-text-dim">
        Original models for reasoning about Customer Success -- designed to be understood in minutes and adapted to your own accounts.
      </p>

      {flagship && (
        <Link
          href={`/framework-library/${flagship.slug}`}
          className="group mb-12 flex flex-col justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-8 transition-colors hover:border-gold/60 md:flex-row md:items-center"
        >
          <div>
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wide text-gold">Flagship Framework</div>
            <h2 className="mb-2 text-2xl font-bold">{flagship.title}</h2>
            <p className="max-w-lg text-sm text-text-dim">{flagship.tagline}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2 font-semibold text-gold">
            Read framework <ArrowRight size={16} />
          </div>
        </Link>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((f) => (
          <Link
            key={f.slug}
            href={`/framework-library/${f.slug}`}
            className="group flex flex-col rounded-xl border border-line bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-gold/40"
          >
            <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wide text-gold">
              <span>{f.category}</span>
              <span className="text-text-dim">{f.readTime}</span>
            </div>
            <h3 className="mb-2 font-bold">{f.title}</h3>
            <p className="mb-4 text-sm text-text-dim">{f.summary}</p>
            <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
              Read framework <ArrowRight size={12} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
