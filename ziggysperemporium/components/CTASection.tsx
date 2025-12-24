'use client';

import { MarkdownBlock } from '@/components/MarkdownBlock';
import { motion } from 'framer-motion';
import Link from 'next/link';

import type { Route } from 'next';

type CTAHref = Route | `mailto:${string}` | `tel:${string}` | `http${string}` | `https${string}`;

type Props = {
    headlineMd: string;
    bodyMd: string;
    primaryCta: { label: string; href: CTAHref };
    secondaryCta?: { label: string; href: CTAHref };
};

export function CTASection({ headlineMd, bodyMd, primaryCta, secondaryCta }: Props) {
    const renderAction = (cta: { label: string; href: CTAHref }, variant: 'primary' | 'ghost') => {
        const isExternal =
            typeof cta.href === 'string' &&
            (cta.href.startsWith('http') || cta.href.startsWith('tel:') || cta.href.startsWith('mailto:'));

        const className = variant === 'primary' ? 'primary-btn' : 'ghost-btn';

        if (isExternal) {
            return (
                <a className={className} href={cta.href}>
                    {cta.label}
                </a>
            );
        }

        return (
            <Link className={className} href={cta.href as Route}>
                {cta.label}
            </Link>
        );
    };

    return (
        <motion.div
            className="cta"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
        >
            <MarkdownBlock content={headlineMd} className="cta-title" />
            <MarkdownBlock content={bodyMd} className="cta-body" />
            <div className="cta-actions">
                {renderAction(primaryCta, 'primary')}
                {secondaryCta && renderAction(secondaryCta, 'ghost')}
            </div>
        </motion.div>
    );
}
