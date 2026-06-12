import type { Metadata } from 'next';
import Link from 'next/link';
import { getMedicationRecalls } from '@/lib/feeds/fda-drug';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Class I Medication Recalls — FDA Urgent Drug Alerts',
  description:
    'All active Class I FDA drug recalls — the most serious classification, issued when there is a reasonable probability that using the medication will cause serious harm or death.',
};

export default async function ClassIRecallsPage() {
  const all = await getMedicationRecalls();
  const recalls = all
    .filter((r) => r.severity === 'urgent')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <nav className="text-sm text-muted mb-2 flex items-center gap-1.5">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/medications" className="hover:text-navy">Medication Recalls</Link>
            <span>/</span>
            <span className="text-foreground">Class I</span>
          </nav>
          <p className="text-sm text-muted mb-1">Source: FDA Drug Enforcement (openFDA API)</p>
          <h1 className="text-2xl font-bold text-navy">Class I Medication Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} urgent recall{recalls.length !== 1 ? 's' : ''} — updated every few hours from FDA CDER.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">What a Class I Drug Recall Means</h2>
          <p>
            Class I is the FDA's most serious recall classification for medications. It is issued when
            the agency has determined that using or being exposed to the product will likely cause serious
            adverse health consequences or death. This classification is not precautionary — it reflects the
            FDA's assessment that a specific, identified defect creates a real probability of serious harm.
          </p>
          <p>
            Common reasons for Class I drug recalls include microbial contamination of injectable medications,
            which can cause sepsis or meningitis if administered; nitrosamine contamination (particularly in
            blood pressure medications and certain antibiotics), which are probable human carcinogens;
            sub-potent medications where the active ingredient is missing or severely reduced, leaving
            patients without treatment; and superpotent medications where the active ingredient is present
            at a dangerous excess level, creating overdose risk.
          </p>
          <p>
            Sterile injectable drugs — IV bags, insulin vials, ophthalmic solutions — receive particularly
            close scrutiny because the consequences of contamination are direct and severe. A non-sterile
            injectable bypasses the body's normal barriers against infection. Even a small microbial load
            in an IV drug can cause a life-threatening bloodstream infection.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800">
            <strong>Important:</strong> Do not stop taking a recalled prescription medication without first
            consulting your doctor or pharmacist. For many drugs, abrupt discontinuation carries its own
            serious risks. Your pharmacist can check whether your specific dispensed lot is affected and
            arrange a replacement at no additional cost.
          </div>
          <div className="flex gap-3 pt-1">
            <Link href="/medications" className="text-xs text-navy-light hover:underline">← All medication recalls</Link>
            <Link href="/articles/medication-recall-lot-numbers" className="text-xs text-navy-light hover:underline">How to check your lot number →</Link>
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
