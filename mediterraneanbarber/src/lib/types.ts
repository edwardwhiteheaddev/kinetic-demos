export type PageMeta = {
    title: string;
    metaDescription: string;
    keywords: string[];
};

export type HeroBlock = {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    socialProof?: string;
};

export type ValueProp = {
    title: string;
    body?: string;
    detail?: string;
};

export type ServiceItem = {
    name: string;
    description: string;
    duration?: string;
    price?: string;
};

export type SectionCollection = {
    heading: string;
    copy: string;
    services: ServiceItem[];
};

export type HomeContent = PageMeta & {
    hero: HeroBlock;
    valueProps: ValueProp[];
    servicesPreview: {
        title: string;
        tagline: string;
        items: ServiceItem[];
    };
    experience: {
        title: string;
        bullets: string[];
    };
    cta: {
        title: string;
        body: string;
        primary: string;
        secondary: string;
    };
    bodyHtml: string;
};

export type ServicesContent = PageMeta & {
    sections: SectionCollection[];
    benefits: ValueProp[];
    bodyHtml: string;
};

export type AboutContent = PageMeta & {
    mission: string;
    story: string;
    community: string;
    reasons: string[];
    bodyHtml: string;
};

export type ContactContent = PageMeta & {
    address: {
        line1: string;
        city: string;
        region: string;
        postal: string;
        country: string;
    };
    phone: string;
    hours: string;
    mapEmbed: string;
    cta: string;
    bodyHtml: string;
};
