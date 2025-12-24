import { SectionCard } from "@/components/section-card";
import { getPageContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getPageContent("contact");
    return {
        title: page.meta.title,
        description: page.meta.description,
        keywords: page.meta.keywords,
    } satisfies Metadata;
}

export default async function ContactPage() {
    const page = await getPageContent("contact");

    return (
        <main className="page-shell space-y-6">
            <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-7 shadow-[0_24px_80px_-42px_rgba(0,0,0,0.45)] backdrop-blur">
                <div className="hero-blob" />
                <div className="relative z-10 flex flex-col gap-2">
                    <p className="shape-pill inline-flex bg-orange-100 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                        Contact & Visit
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        {page.meta.title}
                    </h1>
                    <p className="text-base text-slate-700">{page.meta.description}</p>
                </div>
            </section>

            <div className="section-grid">
                {page.sections.map((section) => (
                    <SectionCard key={section.id} section={section} tone="default" />
                ))}
            </div>
        </main>
    );
}
