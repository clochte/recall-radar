import type { Metadata } from 'next';
import { getProductRecalls } from '@/lib/feeds/cpsc';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Product Recalls',
  description: 'Latest consumer product recalls from the CPSC. Updated every few hours.',
};

export default async function ProductsPage() {
  const recalls = await getProductRecalls();

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <p className="text-sm text-muted mb-1">Source: CPSC Consumer Product Recalls</p>
          <h1 className="text-2xl font-bold text-navy">Product Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — sourced from the U.S. Consumer Product Safety Commission.
          </p>
          <p className="text-gray-600 mt-2 text-sm max-w-2xl">
            Browse the latest CPSC consumer product recalls covering fire hazards, injury risks, and safety defects. Sourced from the U.S. Consumer Product Safety Commission.
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
