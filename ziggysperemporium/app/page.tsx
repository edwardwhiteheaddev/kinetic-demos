import { CTASection } from '@/components/CTASection';
import { Hero } from '@/components/Hero';
import { MarkdownBlock } from '@/components/MarkdownBlock';
import { Section } from '@/components/Section';
import { ServiceGrid } from '@/components/ServiceGrid';
import { hero, homepageSections, services } from '@/content/siteContent';

export default function HomePage() {
    return (
        <>
            <Hero data={hero} />

            <Section
                id="value"
                eyebrow="Why Melville chooses Ziggy's"
                title="Neighborhood pet pampering with expert hands"
                lead="One cozy space for grooming, nutrition, play, and friendly guidance."
                tone="card"
            >
                <MarkdownBlock content={homepageSections.highlightsMd} className="list-grid" />
            </Section>

            <Section
                id="services"
                eyebrow="Services"
                title="Everything your pet needs in one calm visit"
                lead="Book grooming, pick up nutrition, and grab enrichment toys—without leaving the neighborhood."
            >
                <ServiceGrid services={services} />
            </Section>

            <Section
                id="promise"
                eyebrow="Social proof"
                title="Trusted by Melville pet parents"
                lead={homepageSections.taglineMd}
                tone="muted"
            >
                <div className="pill-row">
                    <span className="pill">Fear-free inspired handling</span>
                    <span className="pill">Vet-reviewed nutrition shelf</span>
                    <span className="pill">Local delivery windows</span>
                    <span className="pill">Text updates for appointments</span>
                </div>
            </Section>

            <CTASection
                headlineMd="## Ready to pamper your pet?"
                bodyMd="Secure a grooming slot or reserve your nutrition bundle for pickup today."
                primaryCta={{ label: "Book a visit", href: '/contact' }}
                secondaryCta={{ label: "See services", href: '/services' }}
            />
        </>
    );
}
