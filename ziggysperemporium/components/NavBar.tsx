'use client';

import clsx from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links: Array<{ href: Route; label: string }> = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="nav">
            <Link href="/" className="nav-brand" aria-label="Ziggy&apos;s Pet Pamporium home">
                <span className="brand-mark">Ziggy&apos;s</span>
                <span className="brand-sub">Pet Pamporium</span>
            </Link>
            <nav className="nav-links" aria-label="Primary">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={clsx('nav-link', pathname === link.href && 'is-active')}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div className="nav-actions">
                <Link className="ghost-btn" href="/services">
                    Services
                </Link>
                <Link className="primary-btn" href="/contact">
                    Book now
                </Link>
            </div>
            <button
                className="nav-toggle"
                aria-expanded={open}
                aria-label="Toggle menu"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span />
                <span />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="nav-drawer"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={clsx('nav-drawer-link', pathname === link.href && 'is-active')}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="primary-btn nav-drawer-cta" onClick={() => setOpen(false)}>
                            Book now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
