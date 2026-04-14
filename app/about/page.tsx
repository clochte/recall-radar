import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Recall Radar',
  description: 'Learn about Recall Radar, where the data comes from, and how it works.',
};

const sources = [
  {
    name: 'FDA Food Safety Recalls',
    description: 'Food recalls including contamination, mislabeling, and allergen issues.',
    url: 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts',
    category: 'Food',
  },
  {
    name: 'FDA Drug Enforcement (openFDA)',
    description: 'Prescription and OTC drug recalls for safety and quality issues.',
    url: 'https://open.fda.gov/apis/drug/enforcement/',
    category: 'Medications',
  },
  {
    name: 'NHTSA Safety Recalls',
    description: 'Vehicle recalls for safety defects issued by the National Highway Traffic Safety Administration.',
    url: 'https://www.nhtsa.gov/vehicle-safety/recalls',
    category: 'Vehicles',
  },
  {
    name: 'CPSC Recall Notices',
    description: 'Consumer product recalls for fire, injury, and safety hazards.',
    url: 'https://www.cpsc.gov/recalls',
    category: 'Products',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">About Recall Radar</h1>
      <p className="text-gray-600 mb-8">
        Recall Radar is a free public service that aggregates official recall and safety alert data
        from U.S. government agencies into one easy-to-search place.
      </p>

      <h2 className="text-lg font-semibold text-navy mb-4">How it works</h2>
      <div className="prose prose-sm text-gray-600 mb-8 space-y-3">
        <p>
          Every few hours, Recall Radar fetches the latest recall data from government RSS feeds and
          public APIs. All data is sourced directly from official government sources — we do not
          create or modify any recall information.
        </p>
        <p>
          Each recall links back to the official source where you can find complete details,
          lot numbers, and instructions for consumers.
        </p>
        <p className="font-medium text-gray-700">
          This site is not affiliated with the FDA, NHTSA, or CPSC. For official recall information,
          always refer to the source links provided.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-navy mb-4">Data sources</h2>
      <div className="space-y-3 mb-8">
        {sources.map((source) => (
          <div key={source.name} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-navy text-sm">{source.name}</p>
                <p className="text-xs text-gray-600 mt-0.5">{source.description}</p>
              </div>
              <span className="text-xs bg-gray-100 text-muted px-2 py-0.5 rounded whitespace-nowrap">
                {source.category}
              </span>
            </div>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-navy-light hover:underline mt-1 inline-block"
            >
              {source.url} →
            </a>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-4 text-sm text-gray-600">
        <p className="font-semibold text-navy mb-1">Stay informed</p>
        <p>
          <Link href="/subscribe" className="text-navy-light hover:underline font-medium">
            Subscribe to recall alerts
          </Link>{' '}
          to receive a daily or weekly digest of the categories you care about — free.
        </p>
      </div>
    </div>
  );
}
