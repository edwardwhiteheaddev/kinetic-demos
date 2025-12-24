import Link from "next/link";
import { MarkdownBlock } from "./MarkdownBlock";

export type HeroContent = {
    heading: string;
    tagline?: string;
    bodyHtml: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
};

export function Hero({ heading, tagline, bodyHtml, primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref }: HeroContent) {
    return (
        <section className="hero">
            <div className="hero-card floaty">
                <div className="badge">Ormonde • Pet store</div>
                <h1>{heading}</h1>
                {tagline && <p>{tagline}</p>}
                <MarkdownBlock html={bodyHtml} />
                <div className="ctas">
                    <Link className="btn" href={primaryCtaHref}>
                        {primaryCtaLabel}
                    </Link>
                    {secondaryCtaHref && secondaryCtaLabel && (
                        <Link className="btn secondary" href={secondaryCtaHref}>
                            {secondaryCtaLabel}
                        </Link>
                    )}
                </div>
            </div>
            <div className="card" style={{ minHeight: 260 }}>
                <h2>Neighbourly pet pros</h2>
                <p className="section-title">Ormonde • South of Johannesburg</p>
                <p>
                    Calm grooming, joyful toys, and nutrition guidance inside a playful, modern shop. Every product is hand-tested by our own pets before it hits the shelf.
                </p>
                <p className="section-title">Serving</p>
                <p>Ormonde, Mondeor, Ridgeway, Robertsham, and nearby suburbs.</p>
            </div>
        </section>
    );
}
