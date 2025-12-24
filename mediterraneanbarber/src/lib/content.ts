import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { markdownToHtml } from "./markdown";
import type { AboutContent, ContactContent, HomeContent, ServicesContent } from "./types";

const contentDir = path.join(process.cwd(), "content");

type ContentSlug = "home" | "services" | "about" | "contact";

function readMarkdown(slug: ContentSlug) {
    const filePath = path.join(contentDir, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf8");
    return matter(raw);
}

export async function getHomeContent(): Promise<HomeContent> {
    const { data, content } = readMarkdown("home");
    const bodyHtml = await markdownToHtml(content);
    return {
        title: data.title,
        metaDescription: data.metaDescription,
        keywords: data.keywords ?? [],
        hero: data.hero,
        valueProps: data.valueProps ?? [],
        servicesPreview: data.servicesPreview,
        experience: data.experience,
        cta: data.cta,
        bodyHtml
    } satisfies HomeContent;
}

export async function getServicesContent(): Promise<ServicesContent> {
    const { data, content } = readMarkdown("services");
    const bodyHtml = await markdownToHtml(content);
    return {
        title: data.title,
        metaDescription: data.metaDescription,
        keywords: data.keywords ?? [],
        sections: data.sections ?? [],
        benefits: data.benefits ?? [],
        bodyHtml
    } satisfies ServicesContent;
}

export async function getAboutContent(): Promise<AboutContent> {
    const { data, content } = readMarkdown("about");
    const bodyHtml = await markdownToHtml(content);
    return {
        title: data.title,
        metaDescription: data.metaDescription,
        keywords: data.keywords ?? [],
        mission: data.mission,
        story: data.story,
        community: data.community,
        reasons: data.reasons ?? [],
        bodyHtml
    } satisfies AboutContent;
}

export async function getContactContent(): Promise<ContactContent> {
    const { data, content } = readMarkdown("contact");
    const bodyHtml = await markdownToHtml(content);
    return {
        title: data.title,
        metaDescription: data.metaDescription,
        keywords: data.keywords ?? [],
        address: data.address,
        phone: data.phone,
        hours: data.hours,
        mapEmbed: data.mapEmbed,
        cta: data.cta,
        bodyHtml
    } satisfies ContactContent;
}

export type PageContent =
    | { slug: "home"; data: HomeContent }
    | { slug: "services"; data: ServicesContent }
    | { slug: "about"; data: AboutContent }
    | { slug: "contact"; data: ContactContent };

export async function getPageMetadata(slug: ContentSlug) {
    const loaders = {
        home: getHomeContent,
        services: getServicesContent,
        about: getAboutContent,
        contact: getContactContent
    } as const;

    const page = await loaders[slug]();
    return {
        title: page.title,
        description: page.metaDescription,
        keywords: page.keywords
    };
}
