import { MarkdownBlock } from "@/components/markdown-block";
import { SectionCard } from "@/components/section-card";
import { getPageContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageContent("services");
    return {
        title: page.meta.title,
        description: page.meta.description,
        keywords: page.meta.keywords,
    } satisfies Metadata;
}

export default async function ServicesPage() {
    const page = await getPageContent("services");
    const intro = page.sections.find((section) => section.id === "intro");
    const rest = page.sections.filter((section) => section.id !== "intro");

    return (
        <main className="page-shell space-y-7">
            {intro ? (
                <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_24px_80px_-42px_rgba(0,0,0,0.5)] backdrop-blur">
                    <div className="hero-blob" />
                    <div className="relative z-10 flex flex-col gap-3">
                        <p className="shape-pill inline-flex bg-orange-100 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                            Services
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            {intro.heading}
                        </h1>
                        {intro.subheading ? (
                            <p className="text-lg text-slate-700">{intro.subheading}</p>
                        ) : null}
                        <MarkdownBlock className="text-base text-slate-700">{intro.body}</MarkdownBlock>
                    </div>
                </section>
            ) : null}

            <div className="section-grid">
                {rest.map((section) => (
                    <SectionCard
                        key={section.id}
                        section={section}
                        tone={section.id === "grooming" ? "accent" : undefined}
                    />
                ))}
            </div>
        </main>
    );
}
