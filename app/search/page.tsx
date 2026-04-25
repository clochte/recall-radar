import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllRecalls } from '@/lib/recalls';
import RecallGrid from '@/components/RecallGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Search Recalls — Find Specific Products, Brands & Hazards',
  description: 'Search across all FDA, NHTSA, USDA, and CPSC recalls by product name, brand, hazard type, or keyword.',
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

async function SearchResults({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = q?.trim() ?? '';

  const recalls = await getAllRecalls();
  const results = query
    ? recalls.filter((r) =>
        `${r.title} ${r.reason} ${r.brand ?? ''}`.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <form method="GET" action="/search" className="flex gap-2 max-w-xl mb-6">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search by product, brand, or reason…"
          className="flex-1 px-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light"
          autoFocus
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors text-sm"
        >
          Search
        </button>
      </form>

      {query ? (
        <>
          <p className="text-sm text-muted mb-4">
            {results.length} result{results.length !== 1 ? 's' : ''} for &quot;<strong>{query}</strong>&quot;
          </p>
          <RecallGrid recalls={results} />
        </>
      ) : (
        <div>
          <p className="text-sm text-gray-600 mb-6">
            Search across all active recalls from the FDA, NHTSA, USDA, and CPSC by product name,
            brand, hazard type, or keyword. Results include food, vehicle, medication, and consumer product recalls.
          </p>
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">Common searches</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { term: 'listeria', desc: 'Listeria monocytogenes contamination in food products' },
                { term: 'salmonella', desc: 'Salmonella contamination recalls across food categories' },
                { term: 'allergen', desc: 'Undeclared allergens including peanuts, milk, and wheat' },
                { term: 'fire risk', desc: 'Products recalled for fire, burn, or overheating hazards' },
                { term: 'e. coli', desc: 'E. coli contamination in produce, meat, and packaged foods' },
                { term: 'airbag', desc: 'Vehicle airbag defects and inflator recalls' },
                { term: 'brake', desc: 'Brake system defects and failure recalls' },
                { term: 'choking', desc: 'Products recalled for choking hazard risk' },
                { term: 'contamination', desc: 'Foreign material or chemical contamination recalls' },
                { term: 'mislabeled', desc: 'Recalls due to incorrect or missing label information' },
              ].map(({ term, desc }) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="flex items-start gap-3 px-4 py-3 bg-card border border-border rounded-lg hover:border-navy hover:bg-navy/5 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-navy">{term}</p>
                    <p className="text-xs text-muted mt-0.5">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function SearchPage({ searchParams }: Props) {
  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <h1 className="text-2xl font-bold text-navy">Search Recalls</h1>
      </div>
      <Suspense fallback={<div className="py-8 text-muted text-sm">Searching…</div>}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
