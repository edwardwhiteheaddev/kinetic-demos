import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
    title: "Mediterranean Barber | Sandton Barber Shop",
    description: "Mediterranean Barber delivers precision fades, shaves, and beard care with Mediterranean hospitality in Norwood Mall, Sandton.",
    keywords: [
        "Mediterranean Barber",
        "Sandton barber",
        "Norwood Mall barber",
        "Johannesburg barber shop",
        "hot towel shave Sandton",
        "beard trim Sandton"
    ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${dmSans.variable} font-body antialiased`}>
                <div className="min-h-screen bg-fixed">
                    <SiteHeader />
                    <main>{children}</main>
                    <SiteFooter />
                </div>
            </body>
        </html>
    );
}
