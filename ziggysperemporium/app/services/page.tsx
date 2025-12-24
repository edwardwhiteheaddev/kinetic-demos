import { CTASection } from '@/components/CTASection';
import { MarkdownBlock } from '@/components/MarkdownBlock';
import { Section } from '@/components/Section';
import { ServiceGrid } from '@/components/ServiceGrid';
import { seo, services } from '@/content/siteContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: seo.services.title,
    description: seo.services.description,
    keywords: seo.services.keywords,
};

export default function ServicesPage() {
    return (
        <>
            <Section
                eyebrow="Services"
                title="Gentle grooming, smart nutrition, joyful play"
                lead="Pick the support your pet needs today. Add delivery or click & collect for an easy visit."
                tone="card"
            >
                <MarkdownBlock
                    content={
                        "- Calming, hypoallergenic grooming rituals\n- Nutrition consultations tailored to age and lifestyle\n- Enrichment that keeps anxious pets relaxed\n- Same-day pickup on popular items"
                    }
                    className="list-grid"
                />
            </Section>

            <Section id="services-list" title="What we offer">
                <ServiceGrid services={services} showLinks={false} />
            </Section>

            <Section
                eyebrow="Add-ons"
                title="Make the visit effortless"
                lead="Combine grooming with a nutrition pickup or schedule delivery for heavy bags."
                tone="muted"
            >
                <div className="pill-row">
                    <span className="pill">Text updates during grooming</span>
                    <span className="pill">Curbside pickup ready in 30 mins</span>
                    <span className="pill">Delivery windows that fit your evening</span>
                    <span className="pill">Starter kits for new puppies and kittens</span>
                </div>
            </Section>

            <CTASection
                headlineMd="## Tell us what your pet needs"
                bodyMd="Share your pet's age, coat, and sensitivities—we'll prep the right care plan before you arrive."
                primaryCta={{ label: "Book grooming", href: '/contact' }}
                secondaryCta={{ label: "Call +27 76 909 3857", href: 'tel:+27769093857' }}
            />
        </>
    );
}
