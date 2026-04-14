import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Unsubscribed | Recall Radar',
};

interface Props {
  searchParams: Promise<{ email?: string }>;
}

async function UnsubscribedContent({ searchParams }: Props) {
  const { email } = await searchParams;

  return (
    <div className="max-w-lg mx-auto py-20 text-center px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy mb-2">You&apos;ve been unsubscribed</h1>
        {email && (
          <p className="text-muted text-sm">{decodeURIComponent(email)}</p>
        )}
      </div>
      <p className="text-gray-600 mb-8 leading-relaxed">
        You&apos;ve been removed from Recall Radar alerts. You will no longer receive recall digest emails.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors text-sm"
      >
        Back to Recall Radar →
      </Link>
    </div>
  );
}

export default function UnsubscribedPage({ searchParams }: Props) {
  return (
    <Suspense fallback={
      <div className="max-w-lg mx-auto py-20 text-center px-4">
        <h1 className="text-2xl font-bold text-navy mb-2">You&apos;ve been unsubscribed</h1>
        <p className="text-gray-600 mb-8">You have been removed from Recall Radar alerts.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors text-sm"
        >
          Back to Recall Radar →
        </Link>
      </div>
    }>
      <UnsubscribedContent searchParams={searchParams} />
    </Suspense>
  );
}
