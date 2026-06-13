import type { Metadata } from 'next';
import Link from 'next/link';
import { getVehicleRecalls } from '@/lib/feeds/nhtsa';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Airbag Recalls — NHTSA Safety Campaigns',
  description:
    'Active NHTSA airbag and inflator recalls. Covers Takata inflator replacements and new airbag defects across all makes and models. Free dealer repair required by federal law.',
};

const AIRBAG_KEYWORDS = ['airbag', 'air bag', 'inflator', 'takata', 'inflatable restraint'];

export default async function AirbagRecallsPage() {
  const all = await getVehicleRecalls();
  const recalls = all
    .filter((r) => {
      const text = `${r.title} ${r.rawDescription} ${r.reason}`.toLowerCase();
      return AIRBAG_KEYWORDS.some((k) => text.includes(k));
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <nav className="text-sm text-muted mb-2 flex items-center gap-1.5">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/vehicles" className="hover:text-navy">Vehicle Recalls</Link>
            <span>/</span>
            <span className="text-foreground">Airbag Recalls</span>
          </nav>
          <p className="text-sm text-muted mb-1">Source: NHTSA Vehicle Safety Recalls</p>
          <h1 className="text-2xl font-bold text-navy">Airbag Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} airbag recall{recalls.length !== 1 ? 's' : ''} — updated every few hours from NHTSA.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">About Airbag Recalls</h2>
          <p>
            Airbag recalls are among the most serious vehicle safety campaigns NHTSA administers. A
            defective airbag inflator can rupture during deployment, sending metal fragments into the
            vehicle cabin at high velocity — turning a device designed to save lives into one that
            causes lethal injury. This is not a theoretical risk: Takata inflator failures have been
            linked to more than 30 deaths and over 400 injuries in the United States alone, making the
            Takata recall the largest vehicle safety recall in history.
          </p>
          <p>
            Airbag inflators are particularly susceptible to degradation over time, especially when
            exposed to heat and humidity. A vehicle in Florida, Texas, or Hawaii faces higher risk than
            the same vehicle in a dry climate — the combination of high temperatures and high humidity
            accelerates the deterioration of the ammonium nitrate propellant used in affected Takata
            inflators. NHTSA has prioritized high-humidity regions in its recall completion efforts.
          </p>
          <p>
            New airbag recalls — unrelated to Takata — continue to be issued for various manufacturers.
            These may involve deployment timing issues, incorrect deployment thresholds, structural
            defects in the inflator or housing, or software errors that affect when or how the airbag
            deploys. All airbag recalls require a free dealer repair under federal law.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800">
            <strong>Check your vehicle now:</strong> Enter your 17-character VIN at{' '}
            <a href="https://www.nhtsa.gov/recalls" target="_blank" rel="noopener noreferrer" className="underline">
              nhtsa.gov/recalls
            </a>{' '}
            to see if your specific vehicle has an open airbag recall. The repair is free at any
            authorized dealer regardless of the vehicle&apos;s age or where you bought it.
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/vehicles" className="text-xs text-navy-light hover:underline">← All vehicle recalls</Link>
            <Link href="/vin-lookup" className="text-xs text-navy-light hover:underline">VIN lookup tool →</Link>
            <Link href="/articles/takata-airbag-recall-history" className="text-xs text-navy-light hover:underline">Takata airbag history →</Link>
            <Link href="/articles/vehicle-recall-repairs-how-they-work" className="text-xs text-navy-light hover:underline">How vehicle repairs work →</Link>
          </div>
        </div>

        <RecallGrid recalls={recalls} />
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-[72px]">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
