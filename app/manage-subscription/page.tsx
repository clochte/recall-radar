import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import ManageForm from './ManageForm';

export const metadata: Metadata = {
  title: 'Manage Your Recall Alert Subscription | Recall Radar',
  description:
    'Update your recall alert preferences — choose which categories to receive, switch between daily and weekly digests, or unsubscribe at any time.',
};

interface Props {
  searchParams: Promise<{ email?: string }>;
}

async function ManageFormWrapper({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const { email } = await searchParams;
  return <ManageForm initialEmail={email ?? ''} />;
}

const CATEGORIES = [
  {
    label: 'Food Recalls',
    desc: 'FDA and USDA food safety recalls, including allergen alerts and contamination notices from processors, distributors, and retailers.',
    href: '/food',
  },
  {
    label: 'Vehicle Recalls',
    desc: 'NHTSA safety campaigns covering cars, trucks, motorcycles, and child car seats. All repairs are free regardless of warranty status.',
    href: '/vehicles',
  },
  {
    label: 'Medication Recalls',
    desc: 'FDA drug recalls for contamination, sub-potency, superpotency, sterility failures, and labeling errors.',
    href: '/medications',
  },
  {
    label: 'Consumer Products',
    desc: 'CPSC recalls for household items, toys, electronics, furniture, and appliances with fire, choking, or laceration hazards.',
    href: '/products',
  },
];

export default function ManageSubscriptionPage({ searchParams }: Props) {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Manage Your Subscription</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-lg">
        Update your recall alert preferences — choose which categories to receive, switch between
        daily and weekly digests, or unsubscribe at any time. Changes take effect immediately.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {CATEGORIES.map((cat) => (
          <div key={cat.label} className="bg-card border border-border rounded-lg p-3">
            <p className="text-sm font-semibold text-navy mb-1">{cat.label}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{cat.desc}</p>
            <Link href={cat.href} className="text-xs text-navy-light hover:underline mt-1.5 inline-block">
              Browse recent →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white border border-border rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-base font-semibold text-navy mb-4">Your Preferences</h2>
        <Suspense fallback={<div className="py-8 text-muted text-sm">Loading…</div>}>
          <ManageFormWrapper searchParams={searchParams} />
        </Suspense>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 mb-4 text-sm text-gray-600">
        <p className="font-semibold text-navy mb-1">How digest emails work</p>
        <p className="leading-relaxed">
          Recall Radar digest emails are sent on the schedule you choose — daily (covering the prior
          24 hours) or weekly (a summary of the past 7 days). Each email lists new recalls by
          category with a direct link to the official government notice. There are no ads in the
          emails, and your address is never shared with third parties.
        </p>
        <p className="mt-2 leading-relaxed">
          If you have opted into alerts for a category but haven&apos;t received an email, it may
          mean no new recalls were issued in that category during that period — this is normal.
          You can check the site directly at any time to see the latest recalls.
        </p>
      </div>

      <p className="text-xs text-muted text-center mt-6">
        Questions about your subscription? Visit our{' '}
        <Link href="/faq" className="text-navy-light hover:underline">FAQ</Link>
        {' '}or{' '}
        <Link href="/privacy" className="text-navy-light hover:underline">Privacy Policy</Link>.
      </p>
    </div>
  );
}
