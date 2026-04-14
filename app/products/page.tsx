import type { Metadata } from 'next';
import { getProductRecalls } from '@/lib/feeds/cpsc';
import RecallGrid from '@/components/RecallGrid';

export const metadata: Metadata = {
  title: 'Product Recalls',
  description: 'Latest consumer product recalls from the CPSC. Updated every few hours.',
};

export default async function ProductsPage() {
  const recalls = await getProductRecalls();

  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <p className="text-sm text-muted mb-1">Source: CPSC Consumer Product Recalls</p>
        <h1 className="text-2xl font-bold text-navy">Product Recalls</h1>
        <p className="text-gray-600 mt-1 text-sm">
          {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — sourced from the U.S. Consumer Product Safety Commission.
        </p>
      </div>
      <RecallGrid recalls={recalls} />
    </div>
  );
}
