import type { Metadata } from 'next';
import { getAllRecalls } from '@/lib/recalls';
import RecallCard from '@/components/RecallCard';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'New This Week',
  description: 'The most recent safety recalls — food, vehicles, medications, and consumer products from FDA, NHTSA, and CPSC.',
};

export default async function WeeklyPage() {
  const recalls = await getAllRecalls();
  // Show the 60 most recent recalls — feeds update frequently so these will be current
  const recent = recalls.slice(0, 60);

  // Group by date label for display
  const formatted = new Date(recent[0]?.date ?? '').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <h1 className="text-2xl font-bold text-navy">New This Week</h1>
        <p className="text-gray-600 mt-1 text-sm">
          The {recent.length} most recent recalls across all categories — updated every few hours.
          {recent[0] && <span className="ml-1">Latest: {formatted}.</span>}
        </p>
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
