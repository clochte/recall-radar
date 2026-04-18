import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllStateCounts } from '@/lib/recalls';

export const metadata: Metadata = {
  title: 'Recalls by State',
  description: 'Browse safety recalls by US state — food, vehicles, medications, and products from FDA, NHTSA, and CPSC.',
};

export default async function StatesPage() {
  const states = await getAllStateCounts();
  const withRecalls = states.filter((s) => s.count > 0);
  const withoutRecalls = states.filter((s) => s.count === 0);

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="py-4 border-b border-border mb-6">
        <h1 className="text-2xl font-bold text-navy">Recalls by State</h1>
        <p className="text-gray-600 mt-1 text-sm">
          Browse safety recalls mentioning each US state, sourced from FDA, NHTSA, and CPSC.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {withRecalls.map((state) => (
          <Link
            key={state.slug}
            href={`/recalls/state/${state.slug}`}
            className="flex items-center justify-between px-3 py-2.5 bg-card border border-border rounded-lg hover:border-navy hover:bg-navy/5 transition-colors"
          >
            <span className="text-sm font-medium text-navy truncate">{state.name}</span>
            <span className="ml-2 text-xs font-bold text-muted bg-border px-1.5 py-0.5 rounded-full shrink-0">
              {state.count}
            </span>
          </Link>
        ))}
        {withoutRecalls.map((state) => (
          <Link
            key={state.slug}
            href={`/recalls/state/${state.slug}`}
            className="flex items-center justify-between px-3 py-2.5 bg-card border border-border rounded-lg hover:border-navy hover:bg-navy/5 transition-colors opacity-50"
          >
            <span className="text-sm font-medium text-navy truncate">{state.name}</span>
            <span className="ml-2 text-xs text-muted shrink-0">0</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
