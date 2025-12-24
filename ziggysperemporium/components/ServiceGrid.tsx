'use client';

import { MarkdownBlock } from '@/components/MarkdownBlock';
import type { Service } from '@/content/siteContent';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
    services: Service[];
    showLinks?: boolean;
};

export function ServiceGrid({ services, showLinks = true }: Props) {
    return (
        <div className="grid">
            {services.map((service, index) => (
                <motion.article
                    key={service.slug}
                    className="card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                    {service.badge && <span className="badge">{service.badge}</span>}
                    <h3 className="card-title">{service.title}</h3>
                    <MarkdownBlock content={service.descriptionMd} className="card-body" />
                    <MarkdownBlock content={service.benefitsMd} className="card-list" />
                    {showLinks && (
                        <Link className="ghost-btn" href={`/services#${service.slug}`}>
                            Learn more
                        </Link>
                    )}
                </motion.article>
            ))}
        </div>
    );
}
