"use client";

import { useState } from "react";
import Link from "next/link";
import { CaseStudy, Status } from "@/lib/case-studies";
import { ArrowRight, X } from "lucide-react";

const statusColor: Record<Status, string> = {
  good: "text-good",
  warn: "text-warn",
  bad: "text-bad",
  neutral: "text-gold",
};

const statusDot: Record<Status, string> = {
  good: "bg-good",
  warn: "bg-warn",
  bad: "bg-bad",
  neutral: "bg-gold",
};

export default function CaseStudyCard({
  cs,
  index,
}: {
  cs: CaseStudy;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex flex-col rounded-xl border border-line bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-7 text-left transition-all hover:-translate-y-1 hover:border-gold/40"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs text-text-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            {cs.overallHealth && (
              <span className={`h-1.5 w-1.5 rounded-full ${statusDot[cs.overallHealth.status]}`} />
            )}
            <span className="font-mono text-[11px] uppercase tracking-wide text-gold">{cs.industry}</span>
          </div>
        </div>
        <h3 className="mb-2 text-lg font-bold">{cs.client}</h3>
        <p className="mb-5 text-sm text-text-dim">{cs.challenge}</p>

        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-line pt-4">
          {cs.stats.map((s) => (
            <div key={s.label}>
              <div className={`text-sm font-bold ${statusColor[s.status || "neutral"]}`}>{s.value}</div>
              <div className="text-[10px] leading-tight text-text-dim">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
          Read case study <ArrowRight size={14} />
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-bg-panel p-8 shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 text-text-dim hover:text-text"
            >
              <X size={20} />
            </button>

            <div className="mb-3 flex gap-3 font-mono text-xs uppercase tracking-wide text-gold">
              <span>{cs.industry}</span>
              <span>&middot;</span>
              <span>{cs.engagementType}</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold">{cs.client}</h3>

            <div className="mb-5 grid grid-cols-3 gap-3 rounded-lg border border-line bg-white/[0.02] p-4">
              {cs.stats.map((s) => (
                <div key={s.label}>
                  <div className={`text-base font-bold ${statusColor[s.status || "neutral"]}`}>{s.value}</div>
                  <div className="text-[10px] leading-tight text-text-dim">{s.label}</div>
                </div>
              ))}
            </div>

            {cs.overallHealth && (
              <div
                className={`mb-5 flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-semibold ${
                  cs.overallHealth.status === "good"
                    ? "border-good/30 bg-good/10 text-good"
                    : cs.overallHealth.status === "warn"
                    ? "border-warn/30 bg-warn/10 text-warn"
                    : "border-bad/30 bg-bad/10 text-bad"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${statusDot[cs.overallHealth.status]}`} />
                {cs.overallHealth.label}
              </div>
            )}

            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gold">
              The Challenge
            </div>
            <p className="mb-4 text-sm text-text-dim">{cs.challenge}</p>

            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gold">
              My Approach
            </div>
            <p className="mb-6 text-sm text-text-dim">{cs.task}</p>

            <Link
              href={`/portfolio/${cs.slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-bold text-[#14110A]"
            >
              Read full case study <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
