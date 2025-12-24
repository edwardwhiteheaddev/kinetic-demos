import { AboutStory } from "@/components/sections/AboutStory";
import { getAboutContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getAboutContent();
    return {
        title: page.title,
        description: page.metaDescription,
        keywords: page.keywords
    };
}

export default async function AboutPage() {
    const content = await getAboutContent();

    return (
        <div className="space-y-6 pb-14">
            <div className="mx-auto max-w-5xl px-4 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">About</p>
                <h1 className="text-3xl font-semibold text-teal-900">Mediterranean roots in Sandton</h1>
                <p className="text-base text-teal-900/80">Hospitality-first barbering for Johannesburg professionals, students, and families.</p>
            </div>
            <AboutStory mission={content.mission} story={content.story} community={content.community} reasons={content.reasons} bodyHtml={content.bodyHtml} />
        </div>
    );
}
