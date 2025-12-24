import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plaza Pets | Fordsburg Pet Store",
  description:
    "Plaza Pets keeps Fordsburg pets happy with grooming, adoption help, curated supplies, and same-day delivery from Oriental Plaza, Bree St.",
  keywords: [
    "Fordsburg pet store",
    "Johannesburg pet grooming",
    "Oriental Plaza pet shop",
    "pet supplies Johannesburg",
    "pet adoption Fordsburg",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-pattern text-slate-900`}
      >
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
