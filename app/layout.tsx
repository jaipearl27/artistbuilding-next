import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import ScrollObserver from '@/lib/scroll-observer';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
});
const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-montserrat',
  preload: true,
});
const sherika = localFont({
  src: '/static-fonts/Sherika-Regular.ttf',
  display: 'swap',
  variable: '--font-sherika',
  preload: true,
});
const akira = localFont({
  src: '/static-fonts/AkiraExpanded.otf',
  display: 'swap',
  variable: '--font-akira',
  preload: true,
});
const europa = localFont({
  src: '/static-fonts/EuropaGroNr2SHOP.otf',
  display: 'swap',
  variable: '--font-europa',
  preload: true,
});

export const metadata: Metadata = {
  title: 'The ArtistBuilding',
  description: 'VFX Powerhouse',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${montserrat.variable} ${inter.variable} ${sherika.variable} ${akira.variable} ${europa.variable}`}
      >
        <ScrollObserver>
          {children}
          <SpeedInsights />
          <Analytics />
        </ScrollObserver>
      </body>
    </html>
  );
}
