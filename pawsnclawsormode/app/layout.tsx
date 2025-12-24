import { NavBar } from "@/components/NavBar";
import site from "@/content/structure.json";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: site.seo.home.title,
    description: site.seo.home.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <NavBar nav={site.navigation} />
                <main>{children}</main>
                <footer className="footer">
                    <p>{site.business.name} — {site.business.address}</p>
                    <p>Phone: {site.business.phone} • Hours: {site.business.hours}</p>
                </footer>
            </body>
        </html>
    );
}
