import { business } from '@/content/siteContent';
import Link from 'next/link';

export function SiteFooter() {
    return (
        <footer className="footer">
            <div>
                <p className="footer-brand">{business.name}</p>
                <p className="footer-text">{business.address.line1}</p>
                <p className="footer-text">{business.address.city}, {business.address.postalCode}</p>
                <p className="footer-text">{business.phone}</p>
            </div>
            <div className="footer-nav">
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div>
                <p className="footer-text">Open {business.hours}</p>
                <p className="footer-text">Melville • Johannesburg</p>
            </div>
        </footer>
    );
}
