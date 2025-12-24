import Link from "next/link";
import { Button } from "../ui/Button";

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-30 border-b border-teal-900/5 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-teal-900">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-white">MB</span>
                    <span>Mediterranean Barber</span>
                </Link>
                <nav className="hidden items-center gap-8 text-sm font-medium text-teal-900/80 sm:flex">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-teal-900">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden sm:block">
                    <Button href="/contact" variant="primary" size="md">
                        Book a visit
                    </Button>
                </div>
            </div>
        </header>
    );
}
