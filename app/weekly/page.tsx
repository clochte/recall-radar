import type { Metadata } from 'next';
import { getAllRecalls } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';
import RecallCard from '@/components/RecallCard';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'New This Week — Latest Safety Recalls',
  description: 'The most recent safety recalls across food, vehicles, medications, and consumer products from FDA, NHTSA, USDA, and CPSC. Updated every few hours.',
};

export default async function WeeklyPage() {
  const recalls = await getAllRecalls();
  const recent = recalls.slice(0, 60);

  const latestDate = recent[0]?.date ?? '';
  const formattedLatest = latestDate
    ? new Date(latestDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    : '';

  const categories: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];
  const byCat = categories.map((cat) => ({
    cat,
    count: recent.filter((r) => r.category === cat).length,
  }));
  const urgentCount = recent.filter((r) => r.severity === 'urgent').length;
  const topCat = [...byCat].sort((a, b) => b.count - a.count)[0];

  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <h1 className="text-2xl font-bold text-navy">New This Week</h1>
        <p className="text-gray-600 mt-1 text-sm">
          The {recent.length} most recent recalls across all categories.
          {formattedLatest && <span className="ml-1">Latest: {formattedLatest}.</span>}
        </p>
      </div>

      {/* Summary bar */}
      <div className="bg-card border border-border rounded-lg p-4 mb-8">
        <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">In these {recent.length} recalls</p>
        <div className="flex flex-wrap gap-4">
          {byCat.filter((x) => x.count > 0).map(({ cat, count }) => (
            <div key={cat} className="text-sm">
              <span className="font-semibold text-navy">{count}</span>
              <span className="text-gray-600 ml-1">{CATEGORY_LABELS[cat]}</span>
            </div>
          ))}
          {urgentCount > 0 && (
            <div className="text-sm">
              <span className="font-semibold text-red-600">{urgentCount}</span>
              <span className="text-gray-600 ml-1">urgent</span>
            </div>
          )}
        </div>
        {topCat && topCat.count > 0 && (
          <p className="text-xs text-muted mt-3 leading-relaxed">
            <strong>{CATEGORY_LABELS[topCat.cat]}</strong> is the most active category this period
            with {topCat.count} recall{topCat.count !== 1 ? 's' : ''}.
            {urgentCount > 0
              ? ` ${urgentCount} recall${urgentCount !== 1 ? 's are' : ' is'} classified as urgent — review those first.`
              : ' No urgent (Class I) recalls in the current set.'}
          </p>
        )}
      </div>

      {recent.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {recent.map((r) => (
            <RecallCard key={r.id} recall={r} isNew />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-muted">No recalls found.</p>
      )}

      <div className="mt-10">
        <AdPlaceholder slot="recall-bottom" />
      </div>
    </div>
  );
}
