import { CTASection } from '@/components/CTASection';
import { MarkdownBlock } from '@/components/MarkdownBlock';
import { Section } from '@/components/Section';
import { about, business, seo } from '@/content/siteContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: seo.about.title,
    description: seo.about.description,
    keywords: seo.about.keywords,
};

export default function AboutPage() {
    return (
        <>
            <Section
                eyebrow="About"
                title="A calm, caring pet haven in Melville"
                lead={`${business.name} is built for pets who deserve gentle handling and pet parents who value trustworthy guidance.`}
                tone="card"
            >
                <MarkdownBlock content={about.missionMd} className="about-text" />
            </Section>

            <Section title="Our story" tone="muted">
                <MarkdownBlock content={about.storyMd} className="about-text" />
            </Section>

            <Section title="Why it matters" lead="Rooted in Melville, supporting Johannesburg's pet community.">
                <MarkdownBlock content={about.communityMd} className="about-text" />
                <div className="pill-row">
                    <span className="pill">Local hiring</span>
                    <span className="pill">Rescue partnerships</span>
                    <span className="pill">Monthly adoption spotlight</span>
                    <span className="pill">Donations to community shelters</span>
                </div>
            </Section>

            <CTASection
                headlineMd="## Meet the team at Ziggy's"
                bodyMd="Schedule a meet-and-greet or pop in for nutrition advice—no appointment needed for shopping."
                primaryCta={{ label: "Plan your visit", href: '/contact' }}
                secondaryCta={{ label: "Browse services", href: '/services' }}
            />
        </>
    );
}
