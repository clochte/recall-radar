import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { getAllRecalls } from '@/lib/recalls';
import RecallsExplorer from '@/components/RecallsExplorer';
import RecallCard from '@/components/RecallCard';

export const metadata: Metadata = {
  title: 'Recall Radar — Safety Recalls & Alerts',
};

export default async function HomePage() {
  const recalls = await getAllRecalls();
  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;
  const urgentRecent = recalls.filter((r) => r.severity === 'urgent').slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <div className="py-8 border-b border-border mb-6">
        <h1 className="text-3xl font-bold text-navy mb-2">
          Safety Recalls &amp; Alerts
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Aggregated recall data from the FDA, NHTSA, and CPSC — updated every few hours.
          {urgentCount > 0 && (
            <span className="ml-2 text-urgent font-semibold">
              {urgentCount} active recall{urgentCount !== 1 ? 's' : ''} right now.
            </span>
          )}
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            { href: '/food', label: '🥩 Food', count: recalls.filter((r) => r.category === 'food').length },
            { href: '/vehicles', label: '🚗 Vehicles', count: recalls.filter((r) => r.category === 'vehicles').length },
            { href: '/medications', label: '💊 Medications', count: recalls.filter((r) => r.category === 'medications').length },
            { href: '/products', label: '📦 Products', count: recalls.filter((r) => r.category === 'products').length },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors"
            >
              {cat.label}
              <span className="bg-navy/10 text-navy px-1.5 rounded-full text-xs font-bold">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {urgentRecent.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-urgent animate-pulse inline-block" />
            <h2 className="text-lg font-bold text-navy">Urgent This Week</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {urgentRecent.map((recall) => (
              <RecallCard key={recall.id} recall={recall} />
            ))}
          </div>
        </div>
      )}

      <Suspense fallback={<div className="py-8 text-muted text-sm">Loading recalls…</div>}>
        <RecallsExplorer recalls={recalls} />
      </Suspense>
    </div>
  );
}
