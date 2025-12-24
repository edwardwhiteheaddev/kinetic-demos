import { ContactDetails } from "@/components/sections/ContactDetails";
import { getContactContent } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const page = await getContactContent();
    return {
        title: page.title,
        description: page.metaDescription,
        keywords: page.keywords
    };
}

export default async function ContactPage() {
    const content = await getContactContent();

    return (
        <div className="pb-14">
            <div className="mx-auto max-w-5xl px-4 pt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Contact</p>
                <h1 className="text-3xl font-semibold text-teal-900">Visit Mediterranean Barber</h1>
                <p className="text-base text-teal-900/80">Norwood Mall, Hamlin St, Sandton. Open 09:00 - 17:30 daily.</p>
            </div>
            <ContactDetails
                address={content.address}
                phone={content.phone}
                hours={content.hours}
                mapEmbed={content.mapEmbed}
                cta={content.cta}
                bodyHtml={content.bodyHtml}
            />
        </div>
    );
}
