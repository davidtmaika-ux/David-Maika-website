import Link from "next/link";
import { ArrowRight, Search, Sparkles, Rocket, Target, ShieldCheck, TrendingUp, Heart } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { frameworks } from "@/lib/frameworks";
import { volumes } from "@/lib/knowledge-hub";
import { resources } from "@/lib/resources";
import { projects } from "@/lib/projects";
import CaseStudyCard from "@/components/CaseStudyCard";
import AtmosphereBg from "@/components/AtmosphereBg";
import PhotoSlot from "@/components/PhotoSlot";

const lifecycle = [
  { label: "Discovery", num: "01", icon: Search },
  { label: "Onboarding", num: "02", icon: Sparkles },
  { label: "Adoption", num: "03", icon: Rocket },
  { label: "Value", num: "04", icon: Target },
  { label: "Retention", num: "05", icon: ShieldCheck },
  { label: "Expansion", num: "06", icon: TrendingUp },
  { label: "Advocacy", num: "07", icon: Heart },
];

export default function Home() {
  const featured = caseStudies.slice(0, 3);
  const flagship = frameworks.find((f) => f.flagship);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-grid bg-[linear-gradient(160deg,#0B1E33_0%,#0B0F14_55%,#0B0F14_100%)]">
        <AtmosphereBg />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-6 bg-gold" /> Customer Success Manager &middot; Knowledge Hub
            </div>
            <h1 className="mb-6 text-[clamp(2.2rem,5.6vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight">
              Turning Customer Success Into Business Growth
            </h1>
            <p className="mb-4 max-w-lg text-base text-text-dim md:text-lg">
              Customer Success is more than retaining customers. It is about helping
              businesses realize measurable value through product adoption, trusted
              partnerships, and continuous improvement -- turning every customer outcome
              into sustainable growth.
            </p>
            <p className="mb-9 max-w-lg text-sm italic text-gold/90">
              &ldquo;Products don&rsquo;t create success. People using products successfully create success.&rdquo;
            </p>
            <div className="mb-14 flex flex-wrap gap-4">
              <Link href="/portfolio" className="rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-[#14110A] transition-transform hover:-translate-y-0.5">
                View Portfolio
              </Link>
              <Link href="/framework-library" className="rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-gold hover:bg-gold/5">
                Explore Frameworks
              </Link>
              <a href="/downloads/david-maika-resume.pdf" download className="rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-gold hover:bg-gold/5">
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs font-semibold uppercase tracking-wide text-text-dim">
              <span>Customer Success</span><span className="text-gold">&middot;</span>
              <span>AI</span><span className="text-gold">&middot;</span>
              <span>Strategy</span><span className="text-gold">&middot;</span>
              <span>SaaS</span>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white/[0.03] p-5 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-text-dim">Customer Lifecycle</span>
              <span className="rounded-full border border-line px-2.5 py-1 text-[10px] text-text-dim">End-to-end</span>
            </div>
            <div className="space-y-2.5">
              {lifecycle.map((s) => (
                <div key={s.num} className="flex items-center justify-between rounded-lg border border-line bg-white/[0.02] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <s.icon size={15} className="text-gold" />
                    <span className="text-sm font-semibold">{s.label}</span>
                  </div>
                  <span className="font-mono text-xs text-text-dim">{s.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="border-t border-line py-24">
        <div className="mx-auto grid max-w-5xl gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <PhotoSlot src="/office-desk.jpg" label="David -- office portrait" className="aspect-[4/5] w-full object-cover" />
          <div className="flex flex-col justify-center">
            <div className="mb-3 font-mono text-xs font-semibold text-gold">01 -- ABOUT</div>
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight">
              Before Customer Success had a name, I was already practicing it.
            </h2>
            <p className="mb-4 text-text-dim">
              My path runs through my mother&rsquo;s business center, a university bookstore,
              marine electronics, a classroom of WAEC students, managing a supermarket, an
              executive&rsquo;s office, a grill business, real estate, and managing a hotel --
              before I ever heard the words &ldquo;Customer Success.&rdquo; Every stop taught the
              same lesson from a different angle: retention is never a one-time win, it&rsquo;s a
              system you build and re-earn.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              Read the full story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="border-y border-line bg-bg-panel py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 font-mono text-xs font-semibold text-gold">02 -- SELECTED WORK</div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight">Case Studies</h2>
              <p className="max-w-md text-text-dim">
                Five engagements that show how I approach a real customer problem -- structure first, outcome second.
              </p>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              View all 5 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((cs, i) => (
              <CaseStudyCard key={cs.slug} cs={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="border-b border-line py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 font-mono text-xs font-semibold text-gold">03 -- ADDITIONAL PROJECTS</div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight">Beyond Customer Success</h2>
              <p className="max-w-md text-text-dim">Product Management work that shapes how I think about customers, products, and outcomes.</p>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group flex flex-col rounded-xl border border-line bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-gold/40">
                <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wide text-gold">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.discipline}</span>
                </div>
                <h3 className="mb-2 font-bold">{p.title}</h3>
                <p className="text-sm text-text-dim">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK LIBRARY PREVIEW */}
      <section className="border-b border-line py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 font-mono text-xs font-semibold text-gold">04 -- FRAMEWORK LIBRARY</div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight">Frameworks that guide the work</h2>
              <p className="max-w-md text-text-dim">12 original models for reasoning about Customer Success, starting with the flagship Operating System.</p>
            </div>
            <Link href="/framework-library" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              View all 12 <ArrowRight size={14} />
            </Link>
          </div>
          {flagship && (
            <Link href={`/framework-library/${flagship.slug}`} className="flex flex-col justify-between gap-4 rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-6 hover:border-gold/60 md:flex-row md:items-center">
              <div>
                <div className="mb-1 font-mono text-[11px] uppercase tracking-wide text-gold">Flagship</div>
                <h3 className="font-bold">{flagship.title}</h3>
              </div>
              <ArrowRight size={16} className="shrink-0 text-gold" />
            </Link>
          )}
        </div>
      </section>

      {/* KNOWLEDGE HUB PREVIEW */}
      <section className="border-b border-line bg-bg-panel py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 font-mono text-xs font-semibold text-gold">05 -- KNOWLEDGE HUB</div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight">A five-volume CS curriculum</h2>
              <p className="max-w-md text-text-dim">From first principles to modern operations and AI, written to actually be read.</p>
            </div>
            <Link href="/knowledge-hub" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              Browse all 5 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {volumes.map((v) => (
              <Link key={v.slug} href={`/knowledge-hub/${v.slug}`} className="rounded-lg border border-line bg-white/[0.02] p-4 hover:border-gold/40">
                <div className="mb-2 font-mono text-[10px] text-gold">{v.number}</div>
                <div className="text-sm font-bold">{v.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES PREVIEW */}
      <section className="border-b border-line py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 font-mono text-xs font-semibold text-gold">06 -- RESOURCES</div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight">Templates you can use tomorrow</h2>
              <p className="max-w-md text-text-dim">23 downloadable templates, checklists, and reference guides -- grounded in the frameworks above.</p>
            </div>
            <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              Browse all 23 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {resources.slice(0, 4).map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="rounded-lg border border-line bg-white/[0.02] p-4 text-sm font-semibold hover:border-gold/40">
                {r.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="border-b border-line bg-bg-panel py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 font-mono text-xs font-semibold text-gold">07 -- DASHBOARD</div>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight">An executive operating view</h2>
              <p className="max-w-md text-text-dim">20 KPIs with definitions, benchmarks, and worked examples -- the way I think about book-of-business health.</p>
            </div>
            <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline">
              Open dashboard <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[linear-gradient(160deg,#0B1E33,#0B0F14)] py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Let&rsquo;s build customer success together.
          </h2>
          <p className="mb-8 text-text-dim">
            Open to Customer Success and Operations roles -- happy to walk through any of these engagements in more detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:david.t.maika@gmail.com" className="rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-[#14110A] transition-transform hover:-translate-y-0.5">
              Email Me
            </a>
            <Link href="/resume" className="rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold hover:border-gold hover:bg-gold/5">
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
