import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { ServiceCollections } from "@/components/sections/ServiceCollections";
import { getServicesContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getServicesContent();
    return {
        title: page.title,
        description: page.metaDescription,
        keywords: page.keywords
    };
}

export default async function ServicesPage() {
    const content = await getServicesContent();

    return (
        <div className="space-y-6 pb-14">
            <div className="mx-auto max-w-5xl px-4 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Services</p>
                <h1 className="text-3xl font-semibold text-teal-900">Cuts, shaves, and beard rituals made for Sandton</h1>
                <p className="text-base text-teal-900/80">Tailored grooming with Mediterranean ease at Norwood Mall.</p>
            </div>
            <ServiceCollections sections={content.sections} />
            <BenefitGrid title="Why Sandton chooses us" items={content.benefits} />
            <div className="mx-auto max-w-5xl px-4 pb-10">
                <div className="prose prose-lg prose-teal max-w-none text-teal-900/85" dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
            </div>
        </div>
    );
}
