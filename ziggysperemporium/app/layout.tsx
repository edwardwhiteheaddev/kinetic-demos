import { NavBar } from '@/components/NavBar';
import { SiteFooter } from '@/components/SiteFooter';
import { seo } from '@/content/siteContent';
import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-display',
});

const body = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
});

export const metadata: Metadata = {
    title: seo.home.title,
    description: seo.home.description,
    keywords: seo.home.keywords,
    metadataBase: new URL('https://localhost'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${display.variable} ${body.variable}`}>
            <body>
                <div className="app-frame">
                    <NavBar />
                    <main className="page-content">{children}</main>
                    <SiteFooter />
                </div>
            </body>
        </html>
    );
}
