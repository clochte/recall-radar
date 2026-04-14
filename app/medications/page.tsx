import type { Metadata } from 'next';
import { getMedicationRecalls } from '@/lib/feeds/fda-drug';
import RecallGrid from '@/components/RecallGrid';

export const metadata: Metadata = {
  title: 'Medication Recalls',
  description: 'Latest drug and medication recalls from the FDA. Updated every few hours.',
};

export default async function MedicationsPage() {
  const recalls = await getMedicationRecalls();

  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <p className="text-sm text-muted mb-1">Source: FDA Drug Enforcement (openFDA API)</p>
        <h1 className="text-2xl font-bold text-navy">Medication Recalls</h1>
        <p className="text-gray-600 mt-1 text-sm">
          {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — sourced from the FDA&apos;s drug enforcement database.
        </p>
      </div>
      <RecallGrid recalls={recalls} />
    </div>
  );
}
