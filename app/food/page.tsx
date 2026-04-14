import type { Metadata } from 'next';
import { getFoodRecalls } from '@/lib/feeds/fda-food';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Food Recalls',
  description: 'Latest food safety recalls from the FDA. Updated every few hours.',
};

export default async function FoodPage() {
  const recalls = await getFoodRecalls();

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <p className="text-sm text-muted mb-1">Source: FDA Food Safety Recalls</p>
          <h1 className="text-2xl font-bold text-navy">Food Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — sourced from the FDA&apos;s official food safety recall RSS feed.
          </p>
          <p className="text-gray-600 mt-2 text-sm max-w-2xl">
            Browse the latest FDA food safety recalls including contamination alerts, undeclared allergens, and mislabeling notices. Data is sourced directly from the FDA&apos;s official recall RSS feed and updated every few hours.
          </p>
        </div>
        <RecallGrid recalls={recalls} />
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-[72px]">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
