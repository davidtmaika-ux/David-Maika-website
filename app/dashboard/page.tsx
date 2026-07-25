import type { Metadata } from "next";
import { kpis } from "@/lib/kpis";
import KpiCard from "@/components/KpiCard";

export const metadata: Metadata = {
  title: "Dashboard | David Maika",
  description: "Executive Customer Success dashboard -- KPI reference and illustrative example.",
};

const categories = Array.from(new Set(kpis.map((k) => k.category)));

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
      <div className="mb-3 font-mono text-xs font-semibold text-gold">DASHBOARD</div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        Executive Customer Success Dashboard
      </h1>
      <p className="mb-3 max-w-2xl text-lg text-text-dim">
        A working reference for the 20 KPIs that matter most in Customer
        Success -- click any card for the definition, formula, benchmarks,
        and a worked example.
      </p>
      <p className="mb-14 max-w-2xl rounded-lg border border-dashed border-line bg-white/[0.02] px-4 py-3 text-xs text-text-dim">
        The numbers on these cards are illustrative sample data, meant to
        show how the dashboard works -- not figures from a real account.
      </p>

      {categories.map((cat) => (
        <div key={cat} className="mb-14">
          <h2 className="mb-5 text-xs font-semibold uppercase tracking-wide text-text-dim">
            {cat}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis
              .filter((k) => k.category === cat)
              .map((k) => (
                <KpiCard key={k.id} kpi={k} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
