import type { Metadata } from "next";
import AtmosphereBg from "@/components/AtmosphereBg";
import PhotoSlot from "@/components/PhotoSlot";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About | David Maika",
  description: "Professional background and Customer Success philosophy.",
};

const storyChapters = [
  {
    heading: "Where It Started",
    body: "As a child, I spent time helping my mother run her business center. Every customer interaction taught me something no classroom ever could. I watched her treat every customer with respect, solve problems with patience, and create experiences that made people come back again and again. That was my first lesson in customer retention -- long before I had a word for it.",
  },
  {
    heading: "The Bookstore",
    body: "When I entered university, frequent academic strikes pushed me to find work instead of sitting idle. I joined a bookstore as a sales representative, where I learned that selling wasn't about convincing people -- it was about understanding what they actually needed. One experience still stands out: our drawing books barely sold. Rather than accepting it as \"just the way things were,\" I proposed a different approach -- visiting schools across Warri and Effurun, meeting directly with Fine Art teachers, building a partnership model that benefited both the schools and our business, and introducing incentives that encouraged adoption. A product that once gathered dust became one of our most demanded items.",
    quote: "Problems are opportunities waiting for someone willing to take ownership.",
  },
  {
    heading: "Ships, Classrooms & Inventory",
    body: "My Industrial Training introduced me to marine electronics, working with ship crews and engineers on radio surveys and navigation equipment -- beyond the technical work, I learned how trust, communication, and reliability determine whether clients return. During my National Youth Service, I taught secondary school students preparing for their WAEC examinations, where success was measured by the outcomes my students achieved, not lessons delivered. Later, as a supermarket manager, I began paying attention to something many people overlooked: every conversation became data, every complaint became an opportunity to improve inventory decisions, and every returning customer became proof that excellent service builds loyalty.",
  },
  {
    heading: "\"David Will Handle It\"",
    body: "I also served as an Executive Assistant, where I earned something more valuable than a job title -- trust. My employer became confident enough to tell people \"David will handle it,\" even before I arrived. One memorable day, an entire team had spent hours trying to assemble a drum kit without success. When I arrived, I assessed the situation, understood how the system worked, and resolved it. That wasn't about musical equipment. It was about approaching unfamiliar problems calmly, thinking critically, and taking ownership until the outcome was achieved.",
  },
  {
    heading: "Entrepreneurship, Real Estate & Hospitality",
    body: "Running my own grill business taught me that great products alone are never enough -- customers return because of the experience, the consistency, and the relationships you build long after the first purchase. Real estate strengthened my negotiation skills and taught me how to build trust with people making important decisions. Hospitality transformed everything: managing hotel operations showed me what world-class customer experience truly looks like, where every guest arrived with different expectations, and it became my responsibility to anticipate needs, solve issues quickly, and create experiences worth returning for. It was during this period that I implemented CRM-driven operational improvements that reduced check-in times, improved efficiency, and lowered guest complaints.",
  },
  {
    heading: "Discovering Customer Success",
    body: "Eventually, I discovered something that perfectly described everything I had been doing all along. Customer Success. For me, Customer Success isn't a career change -- it's the name for the work I've been doing my entire life.",
    quote: "Customer Success isn't a career change. It's the name for the work I've been doing my entire life.",
  },
  {
    heading: "Continuous Learning & Product Management",
    body: "As my career evolved, I became increasingly curious about why some businesses consistently built loyal customers while others struggled to retain them. That curiosity led me into continuous learning -- courses in Customer Service, Customer Experience, Customer Success, IT Support, Project Management, and Product Management. At the time, I didn't fully understand why I was drawn to some of these subjects, especially Product Management. Looking back, it all makes sense: exceptional products alone don't guarantee customer success. Without meaningful customer feedback, continuous discovery, and strong collaboration between customers and product teams, it's difficult to know whether a product is truly solving the problems it was designed to address. That realization fundamentally changed how I think about Customer Success -- as the bridge between customer goals and business outcomes, built by listening deeply, translating customer insight into action, and partnering across teams so customers realize measurable value throughout their journey.",
  },
];

const coreValues = [
  { title: "Service Before Self", body: "Every interaction should create value. Customer Success begins with a genuine desire to help others succeed." },
  { title: "Curiosity", body: "The best solutions begin with better questions. I constantly seek to understand customers before proposing solutions." },
  { title: "Ownership", body: "Customer Success requires accountability. When challenges arise, I focus on solutions rather than assigning blame." },
  { title: "Continuous Learning", body: "Technology evolves. Businesses evolve. Customers evolve. To remain valuable, I must evolve as well." },
  { title: "Integrity", body: "Trust is earned through consistency, transparency, and honesty. Long-term partnerships are built on credibility." },
];

const areasOfFocus = [
  { title: "Customer Success", body: "Building the operating model that turns customers into long-term partners." },
  { title: "Customer Growth", body: "Structured motions that convert healthy usage into revenue growth." },
  { title: "Product Adoption", body: "Move accounts from first login to habitual, value-driving behaviors." },
  { title: "Executive Business Reviews", body: "Turn QBRs into strategic conversations executives protect on their calendars." },
  { title: "Customer Health", body: "Signals, scoring, and playbooks that catch risk before it becomes churn." },
  { title: "Expansion Strategy", body: "Identify, qualify, and execute upsell and cross-sell in a customer-first way." },
  { title: "Customer Experience", body: "Design end-to-end journeys where every touchpoint reinforces trust." },
  { title: "CS Operations", body: "Systems, tooling, and data models that make CS teams scale predictably." },
  { title: "AI in Customer Success", body: "Use AI to augment CSMs -- not replace the human judgment customers rely on." },
];

const valueProposition = [
  { title: "Engineering", body: "Helps me think analytically and solve complex problems." },
  { title: "Customer Service", body: "Has taught me empathy, communication, and relationship building." },
  { title: "Cybersecurity", body: "Gives me an appreciation for risk, trust, and technology." },
  { title: "Project Management", body: "Enables me to coordinate initiatives and drive execution." },
  { title: "Product Thinking", body: "Helps me connect features to customer outcomes." },
  { title: "Storytelling", body: "Allows me to communicate value in ways that resonate with executives and users alike." },
];

const timeline = [
  {
    role: "Co-Founder & Customer Success Lead -- REDA's Conglomerate",
    date: "2024 -- Present",
    desc: "Managing 40+ active client accounts across cooking, cleaning, and baking services, maintaining 90%+ customer retention through proactive engagement and relationship management.",
    achievements: [
      "Maintained 90%+ customer retention across 40+ active accounts through proactive engagement rather than reactive support",
      "Drove recurring revenue growth through onboarding, upselling, and repeat-business strategies across hospitality and lifestyle clients",
      "Owned escalations and service optimization initiatives end to end, working cross-functionally with operations, logistics, and vendor teams",
    ],
  },
  {
    role: "Manager -- An6ix Apartments & Hotel",
    date: "Oct 2023 -- May 2024",
    desc: "Rebuilt a paper-based, error-prone check-in process into a digital, self-serve system after a spike in guest complaints started threatening satisfaction scores and revenue.",
    achievements: [
      "Diagnosed the real root cause behind rising complaints -- not guest expectations, but a manual, paper-based check-in process generating errors and delays",
      "Introduced Zoho CRM with automated booking confirmations, pre-arrival reminders, and self-check-in, then personally trained the front-desk team through the transition",
      "Guest complaints about check-in dropped 40% and satisfaction scores rose 30% within a month; contributed to 15% revenue growth overall",
    ],
  },
  {
    role: "Real Estate Agent -- Lucinda David Realtors",
    date: "Feb 2022 -- Oct 2023",
    desc: "Managed 15+ concurrent client portfolios, shifting from a transactional sales approach to a relationship-first advisory one.",
    achievements: [
      "Repositioned from salesperson to trusted advisor -- leading with market insight and data-driven valuation justifications instead of pushing quick decisions",
      "Achieved a 25% increase in property purchases alongside a measurable rise in client retention and repeat business",
      "Converted one-time buyers into recurring clients through referrals and long-term portfolio management relationships",
    ],
  },
];

const competencies = [
  "Customer Success", "Customer Retention", "Account Management", "Customer Onboarding",
  "Churn Reduction", "ARR Growth", "Service Adoption", "Stakeholder Management",
  "Client Success Strategy", "Process Optimization", "Conflict Resolution", "Project Coordination",
];

const tools = ["Zoho CRM", "HubSpot", "Salesforce", "Jira", "Confluence", "Notion", "Slack", "Microsoft 365", "Trello", "ClickUp", "Figma", "Monday.com", "Asana", "Zapier", "Zendesk", "Google Workspace", "Loom", "Zoom"];

const certGroups = [
  {
    group: "Professional Development",
    items: [
      { name: "Professional Foundations", provider: "ALX", date: "Dec 2024", file: "/certificates/alx-professional-foundations.png" },
    ],
  },
  {
    group: "Customer Success",
    items: [
      { name: "Certified Customer Success Specialist (CCSS)", provider: "CustomerSuccessU", date: "Jul 2024", file: "/certificates/ccss-certification.pdf" },
      { name: "The Complete Customer Success Manager Course", provider: "Udemy", file: "/certificates/complete-csm-course.jpg" },
    ],
  },
  {
    group: "Project Management",
    items: [
      { name: "CAPM Certification Course", provider: "-", date: "Jan 2025", file: "/certificates/capm-certification.pdf" },
      { name: "Introduction to PMI-ACP", provider: "-", date: "Jan 2025", file: "/certificates/pmi-acp-introduction.pdf" },
      { name: "Professional Diploma in Project Management", provider: "-", file: "/certificates/pm-diploma.jpg" },
      { name: "Professional Diploma in Agile & Project Management", provider: "-", file: "/certificates/agile-pm-diploma.jpg" },
    ],
  },
  {
    group: "CRM & Sales",
    items: [
      { name: "Professional Diploma in CRM", provider: "-", file: "/certificates/crm-diploma.jpg" },
    ],
  },
  {
    group: "AI & Cybersecurity",
    items: [
      { name: "Career Essentials in Generative AI", provider: "Microsoft & LinkedIn", file: "/certificates/generative-ai-essentials.pdf" },
      { name: "Build Your Generative AI Productivity Skills", provider: "Microsoft & LinkedIn", file: "/certificates/generative-ai-productivity.pdf" },
      { name: "Career Essentials in Cybersecurity", provider: "Microsoft & LinkedIn", file: "/certificates/cybersecurity-essentials.pdf" },
      { name: "Cybersecurity Foundations", provider: "LinkedIn Learning", date: "Jun 2024", file: "/certificates/cybersecurity-foundations.pdf" },
    ],
  },
  {
    group: "Professional Foundations",
    items: [
      { name: "McKinsey Forward Program", provider: "McKinsey & Company", date: "2025", file: "/certificates/professional-foundations.png" },
      { name: "Teamwork Foundations", provider: "LinkedIn Learning", file: "/certificates/teamwork-foundations.pdf" },
      { name: "Professional Soft Skills Learning Pathway", provider: "-", file: "/certificates/professional-soft-skills.pdf" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line py-20">
        <AtmosphereBg />
        <div className="relative z-10 mx-auto grid max-w-4xl gap-10 px-6 md:grid-cols-[1fr_1.4fr] md:px-8">
          <PhotoSlot src="/meet-david.jpg" label="Meet David -- portrait" className="aspect-[4/5] w-full object-cover" />
          <div className="flex flex-col justify-center">
            <div className="mb-3 font-mono text-xs font-semibold text-gold">ABOUT</div>
            <h1 className="mb-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              Meet David
            </h1>
            <p className="mb-4 text-text-dim">
              Customer Success and account management professional experienced in customer
              retention, onboarding, relationship management, and revenue growth across
              hospitality, real estate, and service-driven businesses. I combine 7+ years of
              hands-on operational experience with a systems-first approach to Customer
              Success -- building the stakeholder maps, health scores, and escalation paths
              that make good outcomes repeatable, not accidental.
            </p>
            <p className="text-text-dim">
              My path into Customer Success wasn&rsquo;t linear -- it ran through hospitality
              and real estate first. Both taught me the same lesson from different angles: that
              retention is never a one-time win, it&rsquo;s a system you build and re-earn.
            </p>
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-2xl px-6 md:px-8">
          <div className="mb-3 font-mono text-xs font-semibold text-gold">MY STORY</div>
          <h2 className="mb-8 text-2xl font-extrabold italic tracking-tight text-text md:text-3xl">
            &ldquo;Before I knew Customer Success had a name, I had already spent years practicing it.&rdquo;
          </h2>
          {storyChapters.map((c) => (
            <div key={c.heading} className="mb-9">
              <h3 className="mb-2 text-base font-bold text-gold">{c.heading}</h3>
              <p className="text-text-dim">{c.body}</p>
              {c.quote && (
                <blockquote className="my-5 border-l-2 border-gold pl-5 text-lg italic text-text">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
              )}
            </div>
          ))}
          <p className="mt-10 text-lg font-medium text-text">
            Customer Success isn&rsquo;t just about retaining customers -- it&rsquo;s about
            helping them achieve meaningful outcomes while enabling the business to grow
            alongside them.
          </p>
        </div>
      </section>

      {/* BRAND */}
      <section className="border-b border-line bg-bg-panel py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-3 font-mono text-xs font-semibold text-gold">THE BRAND</div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight">
            David Maika &middot; Customer Success Strategist
          </h2>
          <p className="mb-14 max-w-xl text-lg text-text-dim">
            Helping SaaS companies turn customer outcomes into sustainable business growth.
          </p>

          <div className="mb-14 grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold">Brand Promise</div>
              <p className="text-sm text-text-dim">Every interaction should move a customer closer to achieving measurable business outcomes.</p>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold">Mission</div>
              <p className="text-sm text-text-dim">To help SaaS companies build customer-centric organizations where Customer Success becomes the engine for retention, expansion, and long-term business growth.</p>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gold">Vision</div>
              <p className="text-sm text-text-dim">To become one of the most trusted voices in Customer Success by creating practical frameworks, educational resources, and strategic thinking that help businesses deliver better customer outcomes.</p>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-gold">Core Values</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((v) => (
                <div key={v.title} className="rounded-lg border border-line bg-white/[0.02] p-5">
                  <h3 className="mb-1.5 text-sm font-bold text-gold">{v.title}</h3>
                  <p className="text-sm text-text-dim">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-3 font-mono text-xs font-semibold text-gold">AREAS OF FOCUS</div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight">Where I spend my time and thinking.</h2>
          <p className="mb-10 max-w-xl text-text-dim">
            No logos or borrowed credibility -- just the disciplines I actively practice, write about, and continue to sharpen.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {areasOfFocus.map((a) => (
              <div key={a.title} className="rounded-xl border border-line bg-white/[0.02] p-5">
                <h3 className="mb-1.5 text-sm font-bold">{a.title}</h3>
                <p className="text-sm text-text-dim">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-line bg-[linear-gradient(160deg,#0B1E33,#0B0F14)] py-20 text-center">
        <div className="mx-auto max-w-2xl px-6 md:px-8">
          <div className="mb-4 font-mono text-xs font-semibold text-gold">MY PHILOSOPHY</div>
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight md:text-3xl">
            &ldquo;Products don&rsquo;t create success. People using products successfully create success.&rdquo;
          </h2>
          <p className="text-text-dim">
            Customer Success begins with understanding what success actually looks like for
            each customer -- their goals, their constraints, their definition of value -- and
            then aligning product capabilities and human guidance to those outcomes with
            discipline.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-2xl px-6 md:px-8">
          <div className="mb-3 font-mono text-xs font-semibold text-gold">MY CUSTOMER SUCCESS PHILOSOPHY</div>
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight md:text-3xl">
            It was never about making customers happy.
          </h2>
          <div className="space-y-4 text-text-dim">
            <p>Most people believe Customer Success is about making customers happy. I disagree.</p>
            <p>Happy customers can still leave. Satisfied customers can still churn. Even loyal customers may abandon a product if it no longer helps them achieve meaningful business outcomes.</p>
            <p>True Customer Success begins by understanding what success means to the customer -- not what success means to the vendor, and not what success means to the Customer Success Manager. But what success means to the customer.</p>
            <p>That understanding becomes the foundation for every onboarding plan, adoption strategy, Executive Business Review, expansion conversation, and renewal discussion.</p>
            <p>One question has become central to my approach:</p>
            <blockquote className="my-6 border-l-2 border-gold pl-5 text-xl italic text-text">
              &ldquo;What does success look like for you right now?&rdquo;
            </blockquote>
            <p>I favor &ldquo;right now&rdquo; because success is dynamic. Organizational priorities shift with new leadership, changing markets, product launches, and evolving business goals. By continually revisiting that question, a Customer Success Manager stays aligned with the customer&rsquo;s current reality -- not yesterday&rsquo;s assumptions.</p>
            <p>When customers consistently achieve meaningful outcomes, the results follow naturally:</p>
            <ul className="space-y-1.5 pl-1">
              {["Product adoption increases.", "Renewals become easier.", "Expansion opportunities emerge.", "Advocacy grows.", "Revenue becomes more predictable."].map((li) => (
                <li key={li} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 text-lg font-medium text-text">
              Customer Success isn&rsquo;t about managing accounts. It&rsquo;s about helping businesses succeed.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="border-b border-line bg-bg-panel py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-3 font-mono text-xs font-semibold text-gold">MY VALUE PROPOSITION</div>
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight md:text-3xl">
            Several disciplines, one approach to Customer Success.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {valueProposition.map((v) => (
              <div key={v.title} className="rounded-lg border border-line bg-white/[0.02] p-5">
                <h3 className="mb-1.5 text-sm font-bold text-gold">{v.title}</h3>
                <p className="text-sm text-text-dim">{v.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-text-dim">This combination allows me to bridge the gap between customers, products, and business strategy.</p>
        </div>
      </section>

      {/* BRAND MANIFESTO */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
          <div className="mb-3 font-mono text-xs font-semibold text-gold">MY BRAND MANIFESTO</div>
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight md:text-3xl">
            When customers succeed, companies grow.
          </h2>
          <div className="space-y-3 text-text-dim">
            <p>I believe products are built by people to solve problems for people. Technology alone doesn&rsquo;t create transformation. People do.</p>
            <p>Every feature should solve a real challenge. Every onboarding session should move a customer closer to success. Every business review should reinforce value. Every renewal should be earned through measurable outcomes. Every conversation should deepen trust.</p>
            <p>I don&rsquo;t aspire to simply manage customer accounts. I aspire to become a strategic partner who helps organizations grow through stronger customer outcomes.</p>
            <p className="pt-2 text-lg font-medium text-text">Because when customers succeed, companies grow. And when companies grow, everyone wins.</p>
          </div>
        </div>
      </section>

      {/* CAREER JOURNEY */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-10 text-2xl font-bold">Career Journey</h2>
          <div className="relative pl-9">
            <div className="absolute left-[7px] top-1.5 bottom-1.5 w-px bg-line" />
            {timeline.map((t) => (
              <div key={t.role} className="relative pb-12 last:pb-0">
                <div className="absolute -left-9 top-1 h-3.5 w-3.5 rounded-full border-2 border-gold bg-bg" />
                <h3 className="text-lg font-bold">{t.role}</h3>
                <div className="mb-2 font-mono text-xs font-semibold text-gold">{t.date}</div>
                <p className="mb-3 max-w-lg text-sm text-text-dim">{t.desc}</p>
                <ul className="space-y-1.5">
                  {t.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-text-dim/90">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETENCIES + TOOLS */}
      <section className="border-b border-line py-20">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gold">Core Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {competencies.map((c) => (
                <span key={c} className="rounded border border-line bg-white/[0.02] px-3 py-1.5 text-xs text-text-dim">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gold">Tools &amp; Platforms</h2>
            <div className="mb-3 flex flex-wrap gap-2">
              {tools.map((c) => (
                <span key={c} className="rounded border border-line bg-white/[0.02] px-3 py-1.5 text-xs text-text-dim">{c}</span>
              ))}
            </div>
            <p className="text-xs italic text-text-dim">Whatever tool a team runs on, I pick it up quickly -- these are the ones I've used most, not the limit of what I can work in.</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gold">Education</h2>
          <p className="text-text-dim">B.Eng, Electrical/Electronics Engineering -- Niger Delta University</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-gold">Certifications</h2>
            <a
              href="https://www.credly.com/users/david-maika"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline"
            >
              View all badges on Credly <ExternalLink size={12} />
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {certGroups.map((g) => (
              <div key={g.group} className="rounded-xl border border-line bg-white/[0.02] p-5">
                <h3 className="mb-3 text-sm font-bold text-gold">{g.group}</h3>
                <ul className="space-y-2.5">
                  {g.items.map((c) => (
                    <li key={c.name}>
                      <a href={c.file} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-gold">
                        {c.name}
                      </a>
                      <div className="text-xs text-text-dim">
                        {c.provider !== "-" ? c.provider : null}
                        {c.provider !== "-" && c.date ? " · " : null}
                        {c.date}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
