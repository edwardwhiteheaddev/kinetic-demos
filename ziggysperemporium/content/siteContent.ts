export type BusinessInfo = {
    name: string;
    category: string;
    address: {
        line1: string;
        city: string;
        postalCode: string;
        region: string;
        country: string;
    };
    phone: string;
    hours: string;
    mapEmbedUrl: string;
};

export type HeroContent = {
    headlineMd: string;
    valueMd: string;
    heroBodyMd: string;
    primaryCta: string;
    secondaryCta: string;
    socialProofMd: string;
};

export type Service = {
    slug: string;
    title: string;
    descriptionMd: string;
    benefitsMd: string;
    badge?: string;
};

export type AboutContent = {
    missionMd: string;
    storyMd: string;
    communityMd: string;
};

export type ContactContent = {
    introMd: string;
    addressMd: string;
    phoneMd: string;
    hoursMd: string;
    directionsMd: string;
};

export type SeoEntry = {
    title: string;
    description: string;
    keywords: string[];
};

export const business: BusinessInfo = {
    name: "Ziggy's Pet Pamporium",
    category: "Pet Store",
    address: {
        line1: "11D 7th St",
        city: "Melville, Johannesburg",
        postalCode: "2109",
        region: "Gauteng",
        country: "South Africa",
    },
    phone: "+27769093857",
    hours: "9:00 - 18:30",
    mapEmbedUrl:
        "https://www.google.com/maps?q=11D%207th%20St%2C%20Melville%2C%20Johannesburg%2C%20South%20Africa&output=embed",
};

export const hero: HeroContent = {
    headlineMd: "Melville's gentlest pet pampering",
    valueMd:
        "Neighbourhood grooming, nutrition, and enrichment **for happy, healthy pets**—all under one sunny roof in Melville, Johannesburg.",
    heroBodyMd:
        "Certified stylists. Vet-vetted nutrition. Joy-sparking toys. Plus friendly advice tailored to your pet's routine.",
    primaryCta: "Book a pamper visit",
    secondaryCta: "Browse services",
    socialProofMd: "Trusted by Melville pet parents since day one."
};

export const services: Service[] = [
    {
        slug: "grooming",
        title: "Gentle Grooming & Spa",
        descriptionMd:
            "Low-stress baths, tidy trims, deshedding, and pawdicures that keep coats shiny and skin calm.",
        benefitsMd:
            "- Skin-safe, hypoallergenic products\n- Calming scents and slow pacing\n- Styled for comfort and breed standards\n- De-shed + sanitary tidy options",
        badge: "Calm-care certified",
    },
    {
        slug: "nutrition",
        title: "Smart Nutrition Bar",
        descriptionMd:
            "Curated kibble, wet food, raw toppers, and supplements your vet will love—sized for every breed and budget.",
        benefitsMd:
            "- Vet-reviewed brands\n- Transparent ingredients\n- Portion and transition guidance\n- Local delivery within Melville",
        badge: "Vet-vetted picks",
    },
    {
        slug: "enrichment",
        title: "Play & Enrichment",
        descriptionMd:
            "Tough chews, puzzle feeders, flirt poles, and training treats that keep minds busy and tails wagging.",
        benefitsMd:
            "- Durable, pet-safe materials\n- Matches energy levels\n- Trainer-approved boredom busters\n- Seasonal drops and bundles",
        badge: "Joy guaranteed",
    },
    {
        slug: "delivery",
        title: "Click & Collect + Local Delivery",
        descriptionMd:
            "Reserve online, pick up curbside, or get doorstep delivery across Melville and nearby suburbs.",
        benefitsMd:
            "- Same-day pickup on in-stock items\n- Delivery windows that suit your day\n- Easy reorder for staples\n- Friendly updates via WhatsApp",
        badge: "Neighbour-fast",
    },
];

export const about: AboutContent = {
    missionMd:
        "To keep Melville's pets relaxed, radiant, and well-nourished with kindness-first care and curated essentials.",
    storyMd:
        "Ziggy's started as a cozy grooming room for anxious pups. We grew into a full pet pampering spot—still calm, still local—now stocking nutrition, enrichment, and expert advice for every pet parent who walks in.",
    communityMd:
        "We hire locally, partner with nearby vets, and host monthly adoption spotlights. Every purchase helps us donate supplies to community rescues in Johannesburg.",
};

export const contact: ContactContent = {
    introMd:
        "Pop in, call ahead, or book a pamper slot. We're easy to find on 7th St with safe parking nearby.",
    addressMd: `${business.address.line1}, ${business.address.city}, ${business.address.postalCode}`,
    phoneMd: business.phone,
    hoursMd: business.hours,
    directionsMd:
        "Landmark: a few doors from the Melville strip, minutes from Parkview. Look for the teal awning and playful paw-print signage.",
};

export const seo: Record<string, SeoEntry> = {
    home: {
        title: "Ziggy's Pet Pamporium | Pet grooming, nutrition & toys in Melville",
        description:
            "Gentle pet grooming, curated nutrition, enrichment toys, and local delivery from Ziggy's Pet Pamporium in Melville, Johannesburg.",
        keywords: [
            "pet grooming Melville",
            "pet store Johannesburg",
            "pet toys Melville",
            "pet nutrition Johannesburg",
            "Ziggy's Pet Pamporium",
        ],
    },
    services: {
        title: "Services | Grooming, nutrition, enrichment | Ziggy's Pet Pamporium",
        description:
            "Explore Ziggy's Pet Pamporium services: grooming, nutrition bar, enrichment toys, and local delivery in Melville.",
        keywords: [
            "dog grooming Johannesburg",
            "cat grooming Melville",
            "pet delivery Melville",
            "pet enrichment Johannesburg",
        ],
    },
    about: {
        title: "About Ziggy's Pet Pamporium | Melville pet care",
        description:
            "Learn how Ziggy's Pet Pamporium supports Melville's pet community with calm-care grooming and curated essentials.",
        keywords: ["Melville pet community", "Johannesburg pet shop", "Ziggy's story"],
    },
    contact: {
        title: "Visit Ziggy's Pet Pamporium | Melville, Johannesburg",
        description:
            "Find Ziggy's Pet Pamporium at 11D 7th St, Melville, Johannesburg. Call +27 76 909 3857. Open 9:00 - 18:30.",
        keywords: ["pet store directions", "Melville pet grooming", "Ziggy's contact"],
    },
};

export const homepageSections = {
    highlightsMd:
        "- Certified low-stress groomers\n- Vet-reviewed nutrition and supplements\n- Enrichment toys that actually last\n- Local delivery and easy click & collect",
    taglineMd: "Pet pampering that feels like a neighborhood hug.",
};
