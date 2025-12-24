import { SectionCard } from "@/components/SectionCard";
import site from "@/content/structure.json";
import { loadMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = site.seo.about;

export default async function AboutPage() {
    const mission = await loadMarkdown(site.contentPaths.about.mission);
    const story = await loadMarkdown(site.contentPaths.about.story);
    const community = await loadMarkdown(site.contentPaths.about.community);

    return (
        <section>
            <div className="hero-card" style={{ marginBottom: 24 }}>
                <p className="badge">About us</p>
                <h1>Paws and Claws Ormonde</h1>
                <p className="section-title">Neighbourly pet people</p>
                <p>We are a family-built pet store that treats every visit like a friendly catch-up.</p>
            </div>
            <div className="grid">
                <SectionCard title={(mission.data.title as string) ?? "Mission"} html={mission.html} />
                <SectionCard title={(story.data.title as string) ?? "Story"} html={story.html} />
                <SectionCard title={(community.data.title as string) ?? "Community"} html={community.html} />
            </div>
        </section>
    );
}
