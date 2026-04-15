import type { Metadata } from 'next';
import { Suspense } from 'react';
import ManageForm from './ManageForm';

export const metadata: Metadata = {
  title: 'Manage Subscription',
};

interface Props {
  searchParams: Promise<{ email?: string }>;
}

function ManageContent({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  return <ManageFormWrapper searchParams={searchParams} />;
}

async function ManageFormWrapper({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const { email } = await searchParams;
  return <ManageForm initialEmail={email ?? ''} />;
}

export default function ManageSubscriptionPage({ searchParams }: Props) {
  return (
    <div className="max-w-lg mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Manage Your Subscription</h1>
      <p className="text-gray-600 mb-6 text-sm">
        Update your recall alert preferences or unsubscribe.
      </p>
      <Suspense fallback={<div className="py-8 text-muted text-sm">Loading…</div>}>
        <ManageContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
