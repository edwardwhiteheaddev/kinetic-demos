import { MarkdownBlock } from '@/components/MarkdownBlock';
import clsx from 'classnames';
import React from 'react';

export type SectionProps = {
    id?: string;
    title?: string;
    eyebrow?: string;
    lead?: string;
    children: React.ReactNode;
    padded?: boolean;
    tone?: 'default' | 'muted' | 'card';
};

export function Section({
    id,
    title,
    eyebrow,
    lead,
    children,
    padded = true,
    tone = 'default',
}: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                'section-shell',
                padded && 'section-shell--padded',
                tone === 'muted' && 'section-shell--muted',
                tone === 'card' && 'section-shell--card'
            )}
        >
            {(eyebrow || title || lead) && (
                <div className="section-header">
                    {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
                    {title && <h2 className="section-title">{title}</h2>}
                    {lead && <MarkdownBlock content={lead} className="section-lead" />}
                </div>
            )}
            {children}
        </section>
    );
}
