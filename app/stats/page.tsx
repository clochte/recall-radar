import type { Metadata } from 'next';
import { getAllRecalls, getAllBrands } from '@/lib/recalls';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Recall Statistics — By the Numbers',
  description:
    'Live recall statistics derived from FDA, NHTSA, USDA, and CPSC data. Recall counts by category, most active brands, urgency breakdown, and recent trends.',
};

function getMonthLabel(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default async function StatsPage() {
  const [recalls, brands] = await Promise.all([getAllRecalls(), getAllBrands()]);

  const now = new Date();
  const thisMonth = now.toISOString().slice(0, 7);
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const lastMonth = lastMonthDate.toISOString().slice(0, 7);

  const byCategory = {
    food:        recalls.filter((r) => r.category === 'food').length,
    vehicles:    recalls.filter((r) => r.category === 'vehicles').length,
    medications: recalls.filter((r) => r.category === 'medications').length,
    products:    recalls.filter((r) => r.category === 'products').length,
  };

  const urgentCount   = recalls.filter((r) => r.severity === 'urgent').length;
  const voluntaryCount = recalls.filter((r) => r.severity === 'voluntary').length;
  const unknownCount  = recalls.filter((r) => r.severity === 'unknown').length;
  const urgentPct     = recalls.length ? Math.round((urgentCount / recalls.length) * 100) : 0;

  const thisMonthCount = recalls.filter((r) => r.date.startsWith(thisMonth)).length;
  const lastMonthCount = recalls.filter((r) => r.date.startsWith(lastMonth)).length;
  const monthDelta     = thisMonthCount - lastMonthCount;

  const topBrands = brands.slice(0, 10);

  const categoryLinks: Record<string, string> = {
    food: '/food', vehicles: '/vehicles', medications: '/medications', products: '/products',
  };
  const categoryColors: Record<string, string> = {
    food: 'bg-green-500', vehicles: 'bg-blue-500', medications: 'bg-purple-500', products: 'bg-orange-500',
  };
  const categoryLabels: Record<string, string> = {
    food: 'Food', vehicles: 'Vehicles', medications: 'Medications', products: 'Products',
  };

  const mostRecalled = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy mb-2">Recall Statistics</h1>
        <p className="text-gray-600 text-sm">
          Live numbers derived from FDA, NHTSA, USDA, and CPSC data — updated every few hours.
        </p>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total recalls tracked', value: recalls.length.toLocaleString() },
          { label: 'Urgent / Class I', value: urgentCount.toLocaleString(), sub: `${urgentPct}% of all recalls` },
          { label: getMonthLabel(now), value: thisMonthCount.toLocaleString(), sub: monthDelta >= 0 ? `+${monthDelta} vs last month` : `${monthDelta} vs last month` },
          { label: getMonthLabel(lastMonthDate), value: lastMonthCount.toLocaleString(), sub: 'previous month' },
        ].map((stat) => (
          <div key={stat.label} className="bg-card border border-border rounded-lg p-4">
            <p className="text-2xl font-bold text-navy">{stat.value}</p>
            <p className="text-xs text-muted mt-1 leading-tight">{stat.label}</p>
            {stat.sub && <p className="text-xs text-gray-500 mt-0.5">{stat.sub}</p>}
          </div>
        ))}
      </div>

      {/* By category */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-navy mb-4">Recalls by Category</h2>
        <div className="space-y-3">
          {mostRecalled.map(([cat, count]) => {
            const pct = recalls.length ? Math.round((count / recalls.length) * 100) : 0;
            return (
              <Link
                key={cat}
                href={categoryLinks[cat]}
                className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
              >
                <span className="text-sm font-medium text-navy w-28 shrink-0">
                  {categoryLabels[cat]}
                </span>
                <div className="flex-1 bg-border rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${categoryColors[cat]}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-navy w-10 text-right">{count}</span>
                <span className="text-xs text-muted w-8">{pct}%</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Severity breakdown */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-navy mb-4">Severity Breakdown</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              label: 'Urgent / Class I',
              count: urgentCount,
              desc: 'Reasonable probability of serious harm or death',
              color: 'border-red-200 bg-red-50',
              text: 'text-red-700',
            },
            {
              label: 'Voluntary',
              count: voluntaryCount,
              desc: 'Company-initiated voluntary recalls',
              color: 'border-yellow-200 bg-yellow-50',
              text: 'text-yellow-700',
            },
            {
              label: 'Other / Unclassified',
              count: unknownCount,
              desc: 'Class II, Class III, or not yet classified',
              color: 'border-gray-200 bg-gray-50',
              text: 'text-gray-700',
            },
          ].map((s) => (
            <div key={s.label} className={`border rounded-lg p-4 ${s.color}`}>
              <p className={`text-2xl font-bold ${s.text}`}>{s.count.toLocaleString()}</p>
              <p className={`text-sm font-medium mt-1 ${s.text}`}>{s.label}</p>
              <p className="text-xs text-gray-600 mt-0.5 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">
          Urgency classification is based on keywords in the recall description. Not all sources
          publish formal classification levels — unclassified recalls may include Class I events.
        </p>
      </section>

      {/* Top brands */}
      {topBrands.length > 0 && (
        <section className="mb-10">
          <h2 className="text-base font-bold text-navy mb-1">Most Recalled Brands</h2>
          <p className="text-xs text-muted mb-4">
            Brands with the most active recalls across all categories. A high count does not
            necessarily indicate a safety pattern — larger companies with more products naturally
            appear more often.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topBrands.map((brand, i) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-navy transition-colors"
              >
                <span className="text-xs font-bold text-muted w-5 text-right">{i + 1}</span>
                <span className="flex-1 text-sm font-medium text-navy truncate">{brand.name}</span>
                <span className="text-xs font-bold text-muted bg-border px-2 py-0.5 rounded-full">
                  {brand.count} recall{brand.count !== 1 ? 's' : ''}
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-3">
            <Link href="/brands" className="text-xs text-navy-light hover:underline">
              View all brands →
            </Link>
          </p>
        </section>
      )}

      <div className="bg-card border border-border rounded-lg p-4 text-sm text-gray-600">
        <p className="font-semibold text-navy mb-1">Data sources</p>
        <p>
          Statistics are computed from live recall data fetched from the FDA (food &amp; medications),
          NHTSA (vehicles), USDA FSIS (meat &amp; poultry), and CPSC (consumer products). Counts
          reflect recalls currently available in those feeds and may not represent all-time totals.{' '}
          <Link href="/about" className="text-navy-light hover:underline">Learn more →</Link>
        </p>
      </div>
    </div>
  );
}
