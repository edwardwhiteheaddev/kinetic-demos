import { CTAGroup } from "@/components/cta-group";
import { MarkdownBlock } from "@/components/markdown-block";
import { SectionCard } from "@/components/section-card";
import type { SectionContent } from "@/lib/content";
import { getPageContent } from "@/lib/content";
import type { Metadata } from "next";

function SpotlightHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 p-10 text-white shadow-[0_28px_90px_-40px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.14),transparent_30%)]" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-4">
          <p className="shape-pill inline-flex bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Fordsburg • Johannesburg
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Plaza Pets: Grooming, supplies, and adoption help under one playful roof.
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Local, family-run, and ready with same-day delivery from Oriental Plaza on Bree St. Book a gentle groom or restock essentials today.
          </p>
          <CTAGroup
            primary={{ label: "Book grooming", href: "tel:+27832902042" }}
            secondary={{ label: "See services", href: "/services" }}
          />
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-white/90">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden /> Same-day delivery
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden /> Low-stress grooming
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden /> Adoption guidance
            </span>
          </div>
        </div>
        <div className="glass-card relative rounded-2xl border border-white/30 bg-white/15 p-6 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">What to expect</p>
          <ul className="mt-3 space-y-2 text-sm text-white/90">
            <li>• Warm welcomes for anxious pets with longer, calmer sessions.</li>
            <li>• Tailored coat care for the Highveld climate.</li>
            <li>• Nutrition and toy picks tested by our own pets.</li>
            <li>• Delivery across Fordsburg and nearby CBD when you order before 2pm.</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/80">
            <span className="rounded-full bg-white/15 px-3 py-2">Open Mon–Sat 9–5</span>
            <span className="rounded-full bg-white/15 px-3 py-2">Oriental Plaza • Bree St</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageContent("home");
  return {
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
  } satisfies Metadata;
}

function Hero({ section, note }: { section: SectionContent; note?: string }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.5)] backdrop-blur">
      <div className="hero-blob" />
      <div className="hero-blob secondary" />
      {section.eyebrow ? (
        <div className="shape-pill inline-flex bg-slate-900/90 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white shadow-soft">
          {section.eyebrow}
        </div>
      ) : null}
      <div className="hero-grid items-center">
        <div className="relative z-10">
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            {section.heading}
          </h1>
          {section.subheading ? (
            <p className="mt-4 max-w-2xl text-lg text-slate-700">
              {section.subheading}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CTAGroup primary={section.cta} secondary={section.secondaryCta} />
            {section.badge ? (
              <span className="rounded-full bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 shadow-inner">
                {section.badge}
              </span>
            ) : null}
          </div>
          <div className="mt-5 text-sm text-slate-600">
            <MarkdownBlock>{section.body}</MarkdownBlock>
          </div>
        </div>
        {note ? (
          <div className="relative z-10 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Fordsburg focus</p>
            <p className="mt-1 text-sm text-slate-700">{note}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default async function HomePage() {
  const page = await getPageContent("home");
  const hero = page.sections.find((section) => section.id === "hero");
  const rest = page.sections.filter((section) => section.id !== "hero");

  const toneById: Record<string, "default" | "accent" | "muted"> = {
    value: "accent",
    "services-teaser": "default",
    cta: "accent",
    "social-proof": "muted",
  };

  return (
    <main className="page-shell space-y-8">
      <SpotlightHero />
      {hero ? <Hero section={hero} note={page.meta.description} /> : null}
      <div className="section-grid">
        {rest.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            tone={toneById[section.id] ?? "default"}
          />
        ))}
      </div>
    </main>
  );
}
