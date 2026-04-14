import type { Metadata } from 'next';
import { getMedicationRecalls } from '@/lib/feeds/fda-drug';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Medication Recalls',
  description: 'Latest drug and medication recalls from the FDA. Updated every few hours.',
};

export default async function MedicationsPage() {
  const recalls = await getMedicationRecalls();

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <p className="text-sm text-muted mb-1">Source: FDA Drug Enforcement (openFDA API)</p>
          <h1 className="text-2xl font-bold text-navy">Medication Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — sourced from the FDA&apos;s drug enforcement database.
          </p>
          <p className="text-gray-600 mt-2 text-sm max-w-2xl">
            Browse the latest FDA drug enforcement recalls for prescription and over-the-counter medications. Includes Class I, II, and III recalls sourced from the openFDA enforcement database.
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
