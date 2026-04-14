import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company'),
  title: {
    default: 'Recall Radar — Safety Recalls & Alerts',
    template: '%s | Recall Radar',
  },
  description:
    'Real-time safety recalls and alerts for food, vehicles, medications, and consumer products. Sourced from FDA, NHTSA, and CPSC.',
  openGraph: {
    siteName: 'Recall Radar',
    type: 'website',
  },
  verification: {
    google: 'hWhfZGkPjcGrzs-byHhr6RV9SvxoaTXlzNIE6yqWeDY',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZJ7R8BN6MV"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZJ7R8BN6MV');
          `}
        </Script>
        {adsenseId && adsenseId !== 'ca-pub-PLACEHOLDER' && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3">
          <AdPlaceholder slot="header-below" />
        </div>
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
