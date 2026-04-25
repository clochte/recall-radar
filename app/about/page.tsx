import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Recall Radar — How It Works',
  description:
    'Recall Radar aggregates official U.S. government recall data from the FDA, NHTSA, USDA, and CPSC into one searchable, easy-to-use safety resource. Learn how it works and where the data comes from.',
};

const sources = [
  {
    name: 'FDA Food Safety Recalls',
    description: 'Food and beverage recalls including contamination, undeclared allergens, and mislabeling.',
    url: 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts',
    category: 'Food',
  },
  {
    name: 'USDA FSIS Recalls',
    description: 'Meat, poultry, and egg product recalls from the Food Safety and Inspection Service.',
    url: 'https://www.fsis.usda.gov/recalls',
    category: 'Food',
  },
  {
    name: 'FDA Drug Enforcement (openFDA)',
    description: 'Prescription and OTC drug recalls for contamination, potency issues, and labeling errors.',
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
    description: 'Consumer product recalls for fire, injury, choking, and other safety hazards.',
    url: 'https://www.cpsc.gov/recalls',
    category: 'Products',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">About Recall Radar</h1>
      <p className="text-gray-600 mb-8">
        Recall Radar is a free public safety resource that brings official U.S. government recall data
        together in one place — so you can find what you need without navigating multiple government websites.
      </p>

      <h2 className="text-lg font-semibold text-navy mb-3">Why Recall Radar exists</h2>
      <div className="space-y-3 text-sm text-gray-600 mb-8 leading-relaxed">
        <p>
          In the United States, product recalls are issued by multiple separate government agencies —
          the FDA for food and drugs, NHTSA for vehicles, USDA for meat and poultry, and CPSC for
          consumer products. Each agency maintains its own database, its own search interface, and its
          own alert system. Keeping track of all of them is difficult for most people.
        </p>
        <p>
          Recall Radar solves this by pulling all of those sources into a single, searchable feed.
          Whether you want to know if a food product in your pantry has been recalled, whether your
          car has a safety defect, or whether a toy you bought for your child poses a risk — you can
          find it here without knowing which government agency to look at first.
        </p>
        <p>
          The site is designed to be fast, readable, and useful without requiring you to wade through
          government acronyms and regulatory language. Every recall links back to the official source
          so you can always verify the information and get the most current remediation instructions.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-navy mb-3">How it works</h2>
      <div className="space-y-3 text-sm text-gray-600 mb-8 leading-relaxed">
        <p>
          Every few hours, Recall Radar fetches the latest recall data from government RSS feeds and
          public APIs. The data is cached and displayed with minimal transformation — we do not rewrite,
          editorialize, or modify any recall information. Recall details, lot numbers, affected products,
          and remediation instructions come directly from the issuing agency.
        </p>
        <p>
          Each recall page links prominently to the official government source so you can read the full
          notice, confirm lot numbers or model numbers, and find the manufacturer&apos;s contact information
          for remedies like refunds or free repairs.
        </p>
        <p>
          Recalls are categorized by severity — <strong>Urgent</strong> for recalls involving a high risk of
          serious injury or death (Class I), and standard notices for Class II and Class III actions.
          The urgency classification is based on keywords in the recall description and should be used
          as a general indicator, not a substitute for reading the official notice.
        </p>
        <p className="font-medium text-gray-700">
          Recall Radar is not affiliated with the FDA, NHTSA, USDA, or CPSC. For official recall
          information, always refer to the source links provided on each recall page.
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

      <h2 className="text-lg font-semibold text-navy mb-3">What this site does not do</h2>
      <ul className="text-sm text-gray-600 space-y-2 mb-8 list-disc pl-5 leading-relaxed">
        <li>We do not issue recalls or have any authority to order a product recall.</li>
        <li>We do not provide legal or medical advice. For medical decisions, always consult a licensed professional.</li>
        <li>We do not guarantee that our data is complete or up to the minute — always verify with the official source for safety-critical decisions.</li>
        <li>We do not store personal information beyond what is necessary to deliver email digests to subscribers.</li>
      </ul>

      <div className="bg-card border border-border rounded-lg p-4 text-sm text-gray-600">
        <p className="font-semibold text-navy mb-1">Stay informed automatically</p>
        <p>
          <Link href="/subscribe" className="text-navy-light hover:underline font-medium">
            Subscribe to recall alerts
          </Link>{' '}
          to receive a free daily or weekly digest of the recall categories you care about, delivered
          to your inbox.
        </p>
      </div>
    </div>
  );
}
