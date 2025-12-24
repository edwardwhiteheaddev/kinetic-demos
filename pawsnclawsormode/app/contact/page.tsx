import { SectionCard } from "@/components/SectionCard";
import site from "@/content/structure.json";
import { loadMarkdown } from "@/lib/markdown";
import type { Metadata } from "next";

export const metadata: Metadata = site.seo.contact;

export default async function ContactPage() {
    const info = await loadMarkdown(site.contentPaths.contact.info);
    const hours = await loadMarkdown(site.contentPaths.contact.hours);

    return (
        <section>
            <div className="hero-card" style={{ marginBottom: 24 }}>
                <p className="badge">Visit us</p>
                <h1>Find Paws and Claws Ormonde</h1>
                <p className="section-title">Call or pop in</p>
                <p>Shop 5E Ormonde Shopping Centre, Ormonde, 2091, South Africa • Phone: {site.business.phone}</p>
            </div>
            <div className="grid">
                <SectionCard title={(info.data.title as string) ?? "Contact"} html={info.html} />
                <SectionCard title={(hours.data.title as string) ?? "Hours"} html={hours.html} />
                <div className="card">
                    <p className="section-title">Map</p>
                    <h3>See our location</h3>
                    <p>Embed this Google Map in an iframe:</p>
                    <code style={{ display: "block", padding: 12, background: "#f7f3ee", borderRadius: 12, overflowX: "auto" }}>
                        {`<iframe src="${site.business.mapEmbed}" width="100%" height="280" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
                    </code>
                    <p className="section-title">Call</p>
                    <a className="btn" href={`tel:${site.business.phone}`}>
                        Call {site.business.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}
