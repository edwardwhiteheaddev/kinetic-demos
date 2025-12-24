import { CTASection } from '@/components/CTASection';
import { MarkdownBlock } from '@/components/MarkdownBlock';
import { Section } from '@/components/Section';
import { business, contact, seo } from '@/content/siteContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: seo.contact.title,
    description: seo.contact.description,
    keywords: seo.contact.keywords,
};

export default function ContactPage() {
    return (
        <>
            <Section
                eyebrow="Visit"
                title="Visit Ziggy's Pet Pamporium"
                lead="Drop in, book a grooming slot, or call us to prep your order for pickup."
                tone="card"
            >
                <MarkdownBlock content={contact.introMd} className="about-text" />
            </Section>

            <Section title="Contact details" tone="muted">
                <div className="info-grid">
                    <div className="info-card">
                        <p className="info-label">Address</p>
                        <MarkdownBlock content={contact.addressMd} />
                    </div>
                    <div className="info-card">
                        <p className="info-label">Phone</p>
                        <MarkdownBlock content={`[${contact.phoneMd}](tel:${business.phone})`} />
                    </div>
                    <div className="info-card">
                        <p className="info-label">Hours</p>
                        <MarkdownBlock content={contact.hoursMd} />
                    </div>
                    <div className="info-card">
                        <p className="info-label">Directions</p>
                        <MarkdownBlock content={contact.directionsMd} />
                    </div>
                </div>
            </Section>

            <Section title="Find us on the map">
                <div className="map-embed" aria-label="Map to Ziggy's Pet Pamporium">
                    <iframe
                        src={business.mapEmbedUrl}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ziggy's Pet Pamporium map"
                    />
                </div>
            </Section>

            <CTASection
                headlineMd="## Book grooming or reserve supplies"
                bodyMd="Tell us your pet's name and needs—we'll confirm a time and share prep tips."
                primaryCta={{ label: "Call now", href: 'tel:+27769093857' }}
                secondaryCta={{ label: "Plan a visit", href: '/services' }}
            />
        </>
    );
}
