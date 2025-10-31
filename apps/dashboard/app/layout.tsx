import type { Metadata } from 'next';
import { ColorSchemeScript } from '@mantine/core';
import { UIProvider } from '@ceo/ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'CEO Dashboard – Command Center',
  description: 'Secure dashboard for leadership teams to align on growth and cash flow.',
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
