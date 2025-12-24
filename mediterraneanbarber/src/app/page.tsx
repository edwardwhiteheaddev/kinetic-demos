import { CtaBlock } from "@/components/sections/CtaBlock";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ValueProps } from "@/components/sections/ValueProps";
import { getHomeContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getHomeContent();
    return {
        title: page.title,
        description: page.metaDescription,
        keywords: page.keywords
    };
}

export default async function HomePage() {
    const content = await getHomeContent();

    return (
        <div className="space-y-6 pb-12">
            <Hero hero={content.hero} />
            <ValueProps items={content.valueProps} />
            <ServicesPreview title={content.servicesPreview.title} tagline={content.servicesPreview.tagline} items={content.servicesPreview.items} />
            <ExperienceList title={content.experience.title} bullets={content.experience.bullets} />
            <div className="mx-auto max-w-5xl px-4 pb-10">
                <div className="prose prose-lg prose-teal max-w-none text-teal-900/85" dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
            </div>
            <CtaBlock title={content.cta.title} body={content.cta.body} primary={content.cta.primary} secondary={content.cta.secondary} />
        </div>
    );
}
