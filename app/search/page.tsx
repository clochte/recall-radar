import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllRecalls } from '@/lib/recalls';
import RecallGrid from '@/components/RecallGrid';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Search Recalls',
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
        <div className="py-12 text-center text-muted">
          <p className="text-lg">Enter a keyword to search all recalls.</p>
          <p className="text-sm mt-1">
            Try searching for a product name, brand, or hazard like &quot;listeria&quot; or &quot;fire risk&quot;.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['listeria', 'fire risk', 'allergen', 'brake', 'salmonella'].map((term) => (
              <Link
                key={term}
                href={`/search?q=${encodeURIComponent(term)}`}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:bg-navy hover:text-white hover:border-navy transition-colors"
              >
                {term}
              </Link>
            ))}
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
