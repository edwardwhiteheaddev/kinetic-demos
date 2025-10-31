import type { Metadata } from 'next';
import { ColorSchemeScript } from '@mantine/core';
import { UIProvider } from '@ceo/ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'CEO Dashboard – Strategic Growth Platform',
  description: 'Align leadership on growth, monitor KPIs, and plan with confidence.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
