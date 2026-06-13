import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corrections — Recall Radar',
  description:
    'Recall Radar\'s public corrections log. We are committed to accuracy and publish all significant corrections to our editorial content.',
};

interface Correction {
  date: string;
  page: string;
  pageHref: string;
  summary: string;
}

const CORRECTIONS: Correction[] = [
  // Corrections are added here as they occur.
];

export default function CorrectionsPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy mb-3">Corrections</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Recall Radar is committed to publishing accurate information. When we make a significant
          factual error in our editorial content — an article, a classification, or a guide — we
          correct it and note the correction here. This log is public so readers can hold us accountable.
        </p>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-navy mb-3">Our corrections policy</h2>
        <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>
            When we receive a report of an error, we check the relevant content against the official
            government source within 48 hours. If we confirm an error in our editorial content, we
            correct the page and add an entry to this log with the date, the affected page, and what changed.
          </p>
          <p>
            We distinguish between two types of errors:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Editorial errors</strong> — mistakes in our articles, guides, or classification logic
              that we wrote and control. These are correctable and logged here.
            </li>
            <li>
              <strong>Source data errors</strong> — incorrect information in the underlying government feed
              (for example, a recall notice with a wrong date published by the FDA). We cannot modify source
              data, but we will note discrepancies on the affected page and report them to the issuing agency.
            </li>
          </ul>
          <p>
            We do not silently edit content to remove errors without logging them. Routine updates to reflect
            new government guidance, minor copy edits, and style changes do not appear in this log — only
            substantive factual corrections do.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-navy mb-3">Corrections log</h2>
        {CORRECTIONS.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-5 text-sm text-gray-600">
            <p>No corrections have been logged since this page was created on June 12, 2026.</p>
            <p className="mt-2 text-xs text-muted">
              This does not mean errors have never occurred — only that no significant factual corrections
              to editorial content have been recorded since this log was established.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {CORRECTIONS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 text-sm">
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-xs text-muted font-mono">{c.date}</span>
                  <Link href={c.pageHref} className="text-xs text-navy font-medium hover:underline">
                    {c.page}
                  </Link>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed">{c.summary}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="border-t border-border pt-6 text-sm text-gray-600">
        <p>
          To report an error,{' '}
          <a
            href="mailto:hello@recallradar.company?subject=Error report"
            className="text-navy-light hover:underline"
          >
            email us
          </a>
          {' '}or use the{' '}
          <Link href="/contact" className="text-navy-light hover:underline">
            contact page
          </Link>
          . We review all reports and respond within 48 hours.
        </p>
      </div>
    </div>
  );
}
