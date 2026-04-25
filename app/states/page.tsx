import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllStateCounts } from '@/lib/recalls';

export const metadata: Metadata = {
  title: 'Recalls by State — Find Local Safety Alerts',
  description: 'Browse safety recalls mentioning each US state. Food, vehicle, medication, and consumer product recalls from FDA, NHTSA, USDA, and CPSC filtered by state name.',
};

export default async function StatesPage() {
  const states = await getAllStateCounts();
  const withRecalls = states.filter((s) => s.count > 0);
  const withoutRecalls = states.filter((s) => s.count === 0);

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="py-4 border-b border-border mb-6">
        <h1 className="text-2xl font-bold text-navy">Recalls by State</h1>
        <p className="text-gray-600 mt-1 text-sm max-w-2xl">
          Browse safety recalls mentioning each US state, sourced from FDA, NHTSA, USDA, and CPSC.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 mb-6 text-sm text-gray-600 leading-relaxed max-w-2xl">
        <p>
          Many recalls specifically reference distribution regions, manufacturing facilities, or
          retail locations by state. A food recall may list the states where a contaminated product
          was distributed; a vehicle recall may name states where affected units were sold; a product
          recall may call out retailers in specific markets.
        </p>
        <p className="mt-2">
          The counts below reflect recalls whose official text mentions each state by name. Select a
          state to see those recalls. This is not a complete picture of all recalls that may be
          relevant to residents of that state — always check category pages for the full list of
          active recalls.
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
