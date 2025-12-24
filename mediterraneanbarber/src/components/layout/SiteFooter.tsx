import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t border-teal-900/5 bg-white/80">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-teal-900/70 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="font-semibold text-teal-900">Mediterranean Barber</p>
                    <p>Shop No. 51B, Norwood Mall, Hamlin St, Sandton, Johannesburg, 2192</p>
                    <p>Phone: +27 84 945 4506</p>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/services" className="hover:text-teal-900">
                        Services
                    </Link>
                    <Link href="/about" className="hover:text-teal-900">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-teal-900">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
