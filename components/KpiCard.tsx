"use client";

import { useState } from "react";
import { Kpi } from "@/lib/kpis";
import { X, TrendingUp, TrendingDown, Minus } from "lucide-react";

const trendIcon = {
  up: <TrendingUp size={14} className="text-emerald-400" />,
  down: <TrendingDown size={14} className="text-red-400" />,
  flat: <Minus size={14} className="text-text-dim" />,
};

export default function KpiCard({ kpi }: { kpi: Kpi }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col items-start rounded-xl border border-line bg-white/[0.02] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-gold/40"
      >
        <div className="mb-3 flex w-full items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-text-dim">
            {kpi.category}
          </span>
          {trendIcon[kpi.trend]}
        </div>
        <div className="mb-1 text-2xl font-extrabold text-gold">{kpi.sample}</div>
        <div className="text-xs text-text-dim">{kpi.label}</div>
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

            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">
              {kpi.category}
            </div>
            <h3 className="mb-5 text-xl font-bold">{kpi.label}</h3>

            <Field label="Definition" value={kpi.definition} />
            <Field label="Formula" value={kpi.formula} mono />
            <Field label="Why It Matters" value={kpi.whyItMatters} />
            <Field label="How To Improve It" value={kpi.howToImprove} />

            <div className="my-5 grid grid-cols-3 gap-2 rounded-lg border border-line p-3 text-center">
              <div>
                <div className="mb-1 text-[10px] font-semibold uppercase text-emerald-400">Healthy</div>
                <div className="text-xs text-text-dim">{kpi.healthy}</div>
              </div>
              <div className="border-x border-line px-2">
                <div className="mb-1 text-[10px] font-semibold uppercase text-amber-400">Warning</div>
                <div className="text-xs text-text-dim">{kpi.warning}</div>
              </div>
              <div>
                <div className="mb-1 text-[10px] font-semibold uppercase text-red-400">Red</div>
                <div className="text-xs text-text-dim">{kpi.red}</div>
              </div>
            </div>

            <Field label="Example Calculation" value={kpi.example} mono />
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="mb-4">
      <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gold">{label}</div>
      <p className={`text-sm text-text-dim ${mono ? "font-mono text-xs" : ""}`}>{value}</p>
    </div>
  );
}
