import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { getAllRecalls } from '@/lib/recalls';
import RecallsExplorer from '@/components/RecallsExplorer';
import RecallCard from '@/components/RecallCard';

export const metadata: Metadata = {
  title: 'Recall Radar — Safety Recalls & Alerts',
  description:
    'Track the latest U.S. product recalls in one place. Food, vehicle, medication, and consumer product recalls from the FDA, NHTSA, USDA, and CPSC — updated every few hours.',
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

      {/* Educational section */}
      <div className="mt-14 pt-10 border-t border-border">
        <h2 className="text-lg font-bold text-navy mb-6">Understanding Product Recalls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600 leading-relaxed">
          <div>
            <h3 className="font-semibold text-navy mb-2">What is a recall?</h3>
            <p>
              A product recall is an action taken to remove an unsafe product from the market and, where
              possible, to fix or replace it. Recalls can be initiated voluntarily by a company, or ordered
              by a government agency after identifying a safety risk. In the U.S., recalls are overseen by
              the FDA (food and drugs), NHTSA (vehicles), USDA (meat and poultry), and CPSC (consumer products).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-2">What should I do if I have a recalled product?</h3>
            <p>
              Stop using the product immediately. Check the recall notice for the specific lot numbers,
              model numbers, or date codes that are affected — not every unit of a brand is always included.
              Then follow the remediation instructions: this could mean returning it for a refund, contacting
              the manufacturer for a free repair, or disposing of it safely. Never donate or sell a recalled product.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-2">How serious is a Class I recall?</h3>
            <p>
              Class I is the most serious recall classification, used when a product has a reasonable
              probability of causing serious adverse health consequences or death. Examples include food
              contaminated with Listeria or E. coli, medications with incorrect dosages, or vehicles with
              defects that can cause loss of control. Class II and Class III recalls involve lower risk levels.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-2">Are recall repairs free?</h3>
            <p>
              For vehicle recalls, yes — federal law requires manufacturers to fix safety defects at no
              cost to the owner, regardless of the vehicle&apos;s age or warranty status. For consumer products,
              the remedy (refund, replacement, or repair) is also typically free but varies by recall.
              For food and medication recalls, retailers and pharmacies generally accept returns for a
              full refund, often without a receipt.
            </p>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted">
          Data sourced from the FDA, NHTSA, USDA, and CPSC. Recall Radar is not affiliated with any
          government agency.{' '}
          <Link href="/about" className="text-navy-light hover:underline">Learn more →</Link>
        </p>
      </div>
    </div>
  );
}
