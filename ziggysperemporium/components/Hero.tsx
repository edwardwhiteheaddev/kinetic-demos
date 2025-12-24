'use client';

import { MarkdownBlock } from '@/components/MarkdownBlock';
import type { HeroContent } from '@/content/siteContent';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
    data: HeroContent;
};

export function Hero({ data }: Props) {
    return (
        <div className="hero">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="hero-copy"
            >
                <p className="hero-pill">Pet-friendly • Melville</p>
                <MarkdownBlock content={`# ${data.headlineMd}`} className="hero-title" />
                <MarkdownBlock content={data.valueMd} className="hero-sub" />
                <MarkdownBlock content={data.heroBodyMd} className="hero-body" />
                <div className="hero-actions">
                    <Link className="primary-btn" href="/contact">
                        {data.primaryCta}
                    </Link>
                    <Link className="ghost-btn" href="/services">
                        {data.secondaryCta}
                    </Link>
                </div>
                <MarkdownBlock content={data.socialProofMd} className="hero-proof" />
            </motion.div>
            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
                <div className="hero-card">
                    <p className="hero-card-title">Calm-care grooming</p>
                    <p className="hero-card-body">Snout-to-tail pampering with hypoallergenic formulas and slow pacing.</p>
                </div>
                <div className="hero-bubbles">
                    <span className="bubble" />
                    <span className="bubble" />
                    <span className="bubble" />
                </div>
            </motion.div>
        </div>
    );
}
