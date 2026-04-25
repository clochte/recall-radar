import type { Metadata } from 'next';
import { getMedicationRecalls } from '@/lib/feeds/fda-drug';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Medication Recalls — FDA Drug Enforcement Alerts',
  description:
    'Browse the latest FDA drug recalls for prescription and over-the-counter medications. Covers contamination, potency issues, labeling errors, and Class I–III enforcement actions.',
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
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — updated every few hours from the FDA&apos;s drug enforcement database.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">About Medication Recalls</h2>
          <p>
            Medication recalls are issued when a prescription or over-the-counter drug is found to be
            defective, contaminated, or otherwise unsafe. The FDA&apos;s Center for Drug Evaluation and Research
            (CDER) oversees drug recalls in the United States and maintains the enforcement action database
            that powers this page.
          </p>
          <p>
            Common causes of drug recalls include microbial or chemical contamination during manufacturing,
            incorrect potency (meaning a dose contains more or less of the active ingredient than labeled),
            labeling errors that could lead to medication errors, the presence of foreign particles or
            sub-potent ingredients, and products that fail sterility testing. In some cases, recalls occur
            because a facility failed to meet Good Manufacturing Practice (GMP) standards, even if no
            specific product defect has been identified yet.
          </p>
          <p>
            Drug recalls are classified the same way as food recalls. A <strong>Class I recall</strong> means
            there is a reasonable probability that using the product will cause or lead to serious adverse
            health consequences or death — for example, a blood pressure medication with no active ingredient,
            or an injectable drug contaminated with bacteria. A <strong>Class II recall</strong> covers
            products that may cause temporary, reversible health effects. A <strong>Class III recall</strong> involves
            products that are unlikely to cause harm but violate FDA regulations.
          </p>
          <p>
            If you take a recalled medication, do not stop taking a prescription without speaking to your
            doctor or pharmacist first — abruptly discontinuing some medications can be dangerous. Bring the
            recalled product to your pharmacy; they can check lot numbers and arrange a replacement.
            Never flush medication down the toilet unless the recall notice specifically instructs you to.
            Use the FDA&apos;s drug take-back program or an approved disposal method.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800">
            <strong>Important:</strong> Always consult your doctor or pharmacist before stopping or switching any
            prescription medication, even if it has been recalled. Your health provider can advise on
            the safest course of action.
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
