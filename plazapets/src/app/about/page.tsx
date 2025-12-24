import { MarkdownBlock } from "@/components/markdown-block";
import { SectionCard } from "@/components/section-card";
import { getPageContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageContent("about");
    return {
        title: page.meta.title,
        description: page.meta.description,
        keywords: page.meta.keywords,
    } satisfies Metadata;
}

export default async function AboutPage() {
    const page = await getPageContent("about");
    const mission = page.sections.find((section) => section.id === "mission");
    const rest = page.sections.filter((section) => section.id !== "mission");

    return (
        <main className="page-shell space-y-7">
            {mission ? (
                <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-7 shadow-[0_24px_80px_-42px_rgba(0,0,0,0.45)] backdrop-blur">
                    <div className="hero-blob" />
                    <div className="relative z-10">
                        <p className="shape-pill inline-flex bg-slate-900 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                            About Plaza Pets
                        </p>
                        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            {mission.heading}
                        </h1>
                        <div className="mt-3 text-base text-slate-700">
                            <MarkdownBlock>{mission.body}</MarkdownBlock>
                        </div>
                    </div>
                </section>
            ) : null}

            <div className="section-grid">
                {rest.map((section) => (
                    <SectionCard key={section.id} section={section} tone="accent" />
                ))}
            </div>
        </main>
    );
}
