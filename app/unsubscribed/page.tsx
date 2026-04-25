import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "You've Been Unsubscribed | Recall Radar",
  description: 'You have been removed from Recall Radar recall alert emails. You can still browse all recalls for free on the site.',
};

interface Props {
  searchParams: Promise<{ email?: string }>;
}

async function UnsubscribedContent({ searchParams }: Props) {
  const { email } = await searchParams;

  return (
    <div className="max-w-lg mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-navy mb-2">You&apos;ve been unsubscribed</h1>
        {email && (
          <p className="text-muted text-sm">{decodeURIComponent(email)}</p>
        )}
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          You&apos;ve been removed from Recall Radar alerts and will no longer receive digest emails.
          All recall data remains free to browse on the site at any time.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-5 mb-6 text-sm text-gray-600">
        <p className="font-semibold text-navy mb-2">You can still stay informed</p>
        <p className="leading-relaxed">
          Even without email alerts, you can check for new recalls any time by visiting Recall Radar.
          The site is updated every few hours with the latest data from the FDA, NHTSA, USDA, and CPSC.
          You can also bookmark the{' '}
          <Link href="/weekly" className="text-navy-light hover:underline">New This Week</Link>{' '}
          page for a quick view of the most recent recalls.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-5 py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors text-sm"
        >
          Browse current recalls →
        </Link>
        <Link
          href="/subscribe"
          className="flex items-center justify-center gap-2 px-5 py-3 bg-card border border-border text-navy font-semibold rounded-md hover:border-navy transition-colors text-sm"
        >
          Re-subscribe
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">Browse by category</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: '/food', label: 'Food' },
            { href: '/vehicles', label: 'Vehicles' },
            { href: '/medications', label: 'Medications' },
            { href: '/products', label: 'Products' },
            { href: '/safety-guide', label: 'Safety Guide' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 bg-card border border-border rounded-full text-sm text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function UnsubscribedPage({ searchParams }: Props) {
  return (
    <Suspense fallback={
      <div className="max-w-lg mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold text-navy mb-2">You&apos;ve been unsubscribed</h1>
        <p className="text-gray-600 mb-6">You have been removed from Recall Radar alerts.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors text-sm">
          Back to Recall Radar →
        </Link>
      </div>
    }>
      <UnsubscribedContent searchParams={searchParams} />
    </Suspense>
  );
}
