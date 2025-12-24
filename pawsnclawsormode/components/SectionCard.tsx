import { MarkdownBlock } from "./MarkdownBlock";

export type SectionCardProps = {
    title: string;
    html: string;
    eyebrow?: string;
};

export function SectionCard({ title, html, eyebrow }: SectionCardProps) {
    return (
        <div className="card">
            {eyebrow && <p className="section-title">{eyebrow}</p>}
            <h3>{title}</h3>
            <MarkdownBlock html={html} />
        </div>
    );
}
