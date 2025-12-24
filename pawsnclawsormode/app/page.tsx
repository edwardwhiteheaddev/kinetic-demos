import { Hero } from "@/components/Hero";
import { SectionCard } from "@/components/SectionCard";
import site from "@/content/structure.json";
import { loadMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = site.seo.home;

export default async function Page() {
    const heroMd = await loadMarkdown(site.contentPaths.home.hero);
    const valueMd = await loadMarkdown(site.contentPaths.home.value);
    const socialMd = await loadMarkdown(site.contentPaths.home.social);

    const heroTitle = (heroMd.data.title as string) ?? "Ormonde pet care";
    const heroTagline = (heroMd.data.tagline as string) ?? undefined;

    return (
        <>
            <Hero
                heading={heroTitle}
                tagline={heroTagline}
                bodyHtml={heroMd.html}
                primaryCtaLabel={site.hero.primaryCtaLabel}
                primaryCtaHref={site.hero.primaryCtaHref}
                secondaryCtaLabel={site.hero.secondaryCtaLabel}
                secondaryCtaHref={site.hero.secondaryCtaHref}
            />

            <section style={{ marginTop: 48 }}>
                <p className="section-title">Value for Ormonde families</p>
                <div className="grid">
                    <SectionCard title={(valueMd.data.title as string) ?? "Why us"} html={valueMd.html} />
                    <SectionCard title={(socialMd.data.title as string) ?? "Loved locally"} html={socialMd.html} />
                </div>
            </section>
        </>
    );
}
