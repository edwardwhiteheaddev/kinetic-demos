import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export type CTA = {
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "ghost";
};

export type SectionContent = {
    id: string;
    eyebrow?: string;
    heading?: string;
    subheading?: string;
    badge?: string;
    pills?: string[];
    body?: string;
    cta?: CTA;
    secondaryCta?: CTA;
};

export type PageContent = {
    slug: string;
    meta: {
        title: string;
        description: string;
        keywords?: string[];
    };
    sections: SectionContent[];
};

function contentPath(slug: string) {
    return path.join(process.cwd(), "content", `${slug}.md`);
}

function normalizeSection(section: Record<string, unknown>): SectionContent {
    return {
        id: String(section.id ?? ""),
        eyebrow: typeof section.eyebrow === "string" ? section.eyebrow : undefined,
        heading: typeof section.heading === "string" ? section.heading : undefined,
        subheading:
            typeof section.subheading === "string" ? section.subheading : undefined,
        badge: typeof section.badge === "string" ? section.badge : undefined,
        pills: Array.isArray(section.pills)
            ? section.pills.map((pill) => String(pill))
            : undefined,
        body: typeof section.body === "string" ? section.body : undefined,
        cta: section.cta && typeof section.cta === "object"
            ? {
                label: String((section.cta as CTA).label),
                href: String((section.cta as CTA).href),
                variant: (section.cta as CTA).variant,
            }
            : undefined,
        secondaryCta: section.secondaryCta && typeof section.secondaryCta === "object"
            ? {
                label: String((section.secondaryCta as CTA).label),
                href: String((section.secondaryCta as CTA).href),
                variant: (section.secondaryCta as CTA).variant,
            }
            : undefined,
    } satisfies SectionContent;
}

export async function getPageContent(slug: string): Promise<PageContent> {
    const filePath = contentPath(slug);
    const raw = await fs.readFile(filePath, "utf8");
    const { data } = matter(raw);

    const sections = Array.isArray((data as Record<string, unknown>).sections)
        ? ((data as Record<string, unknown>).sections as Record<string, unknown>[])
            .filter((section) => section && typeof section === "object")
            .map((section) => normalizeSection(section))
            .filter((section) => section.id)
        : [];

    return {
        slug,
        meta: {
            title: String((data as Record<string, unknown>).title ?? "Plaza Pets"),
            description: String(
                (data as Record<string, unknown>).description ??
                "Plaza Pets in Fordsburg, Johannesburg — pet store, grooming, adoption help, and supplies."
            ),
            keywords: Array.isArray((data as Record<string, unknown>).keywords)
                ? ((data as Record<string, unknown>).keywords as unknown[]).map((kw) =>
                    String(kw)
                )
                : undefined,
        },
        sections,
    } satisfies PageContent;
}

export async function getSectionsConfig() {
    const filePath = path.join(process.cwd(), "content", "sections.json");
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw) as Record<string, { id: string; source: string; description?: string }[]>;
}
