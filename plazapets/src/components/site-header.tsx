"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur shadow-[0_10px_60px_-40px_rgba(0,0,0,0.5)]">
            <div className="page-shell flex items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-soft">
                        PP
                    </span>
                    <div className="leading-tight">
                        Plaza Pets
                        <p className="text-xs font-medium text-slate-600">Fordsburg • Johannesburg</p>
                    </div>
                </Link>
                <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 sm:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "transition hover:text-orange-600",
                                pathname === link.href && "text-orange-600"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <a
                        className="hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-soft transition hover:from-orange-400 hover:to-orange-500 sm:inline-flex"
                        href="tel:+27832902042"
                    >
                        Book grooming
                    </a>
                    <Link
                        href="/contact"
                        className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 hover:border-orange-200 hover:text-orange-600"
                    >
                        Visit us
                    </Link>
                </div>
            </div>
        </header>
    );
}
