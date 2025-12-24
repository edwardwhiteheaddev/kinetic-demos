import Link from "next/link";

export type NavItem = { label: string; href: string };

export function NavBar({ nav }: { nav: NavItem[] }) {
    return (
        <header className="navbar">
            <Link href="/" className="badge">
                Paws and Claws Ormonde
            </Link>
            <nav className="nav-links" aria-label="Main">
                {nav.map((item) => (
                    <Link key={item.href} className="nav-link" href={item.href}>
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
