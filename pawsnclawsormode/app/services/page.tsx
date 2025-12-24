import { SectionCard } from "@/components/SectionCard";
import site from "@/content/structure.json";
import { loadMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = site.seo.services;

export default async function ServicesPage() {
    const services = await Promise.all(
        site.contentPaths.services.map(async (svc) => ({
            id: svc.id,
            markdown: await loadMarkdown(svc.markdown),
        }))
    );

    return (
        <section>
            <div className="hero-card" style={{ marginBottom: 24 }}>
                <p className="badge">Services</p>
                <h1>Services for Ormonde pets</h1>
                <p className="section-title">What we do</p>
                <p>
                    Grooming, nutrition, play, and adoption support tailored to local pet parents. Each service includes friendly guidance and clear next steps.
                </p>
            </div>
            <div className="grid">
                {services.map(({ id, markdown }) => (
                    <SectionCard
                        key={id}
                        title={(markdown.data.title as string) ?? id}
                        eyebrow={(markdown.data.tagline as string) ?? ""}
                        html={markdown.html}
                    />
                ))}
            </div>
        </section>
    );
}
