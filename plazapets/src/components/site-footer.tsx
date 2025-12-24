import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/60 bg-white/85 py-10 backdrop-blur">
            <div className="page-shell grid gap-6 sm:grid-cols-3">
                <div>
                    <p className="text-sm font-semibold text-slate-900">Plaza Pets</p>
                    <p className="text-sm text-slate-700">Oriental Plaza, Bree St, Fordsburg, Johannesburg</p>
                    <p className="mt-1 text-sm text-slate-700">Phone/WhatsApp: +27 83 290 2042</p>
                    <p className="mt-1 text-sm text-slate-700">Hours: Mon–Sat 9am–5pm</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">Explore</p>
                    <Link href="/services" className="hover:text-orange-600">Services</Link>
                    <Link href="/about" className="hover:text-orange-600">About</Link>
                    <Link href="/contact" className="hover:text-orange-600">Contact</Link>
                </div>
                <div className="flex flex-col gap-2 text-sm text-slate-700">
                    <p className="font-semibold text-slate-900">Book or visit</p>
                    <a className="text-orange-600 hover:underline" href="tel:+27832902042">Call +27 83 290 2042</a>
                    <Link
                        href="https://maps.google.com/?q=Oriental%20Plaza%2C%20Bree%20St%2C%20Fordsburg%2C%20Johannesburg"
                        className="hover:text-orange-600"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open in Maps
                    </Link>
                    <p className="text-xs text-slate-500">Local, family-run, pet-happy.</p>
                </div>
            </div>
        </footer>
    );
}
