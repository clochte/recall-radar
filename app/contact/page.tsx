import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — Recall Radar',
  description:
    'Contact Recall Radar with questions, corrections, or feedback about our recall data or safety information.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-sm leading-relaxed">
        We want Recall Radar to be accurate and useful. If you find an error, have a
        question, or want to share feedback, we would like to hear from you.
      </p>

      <div className="space-y-5">
        <section className="bg-card border border-border rounded-xl p-5">
          <h2 className="font-semibold text-navy mb-2">Email</h2>
          <p className="text-sm text-gray-600 mb-3">
            The best way to reach us. We respond to all messages within a few business days.
          </p>
          <a
            href="mailto:hello@recallradar.company"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-navy font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
          >
            hello@recallradar.company
          </a>
        </section>

        <section className="bg-card border border-border rounded-xl p-5">
          <h2 className="font-semibold text-navy mb-2">Report a Data Error</h2>
          <p className="text-sm text-gray-600">
            Recall Radar pulls data directly from official government APIs, and occasionally
            errors in the source data carry through to our pages. If you notice a recall that
            is showing incorrect information — wrong category, outdated status, or a title
            that does not match the official notice — please let us know the recall name and
            the correction.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            When we receive a correction report, we check the information on our page against
            the official government source within 48 hours. If we find an error in how we have
            presented the information — a misclassified category, a severity label that does
            not match the source, or editorial content that no longer reflects current agency
            guidance — we correct it. We cannot modify recall notices themselves, which come
            directly from the issuing agency, but we can correct any error in our own content
            and classifications.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-5">
          <h2 className="font-semibold text-navy mb-2">Missing Recalls</h2>
          <p className="text-sm text-gray-600">
            Our data comes from four government feeds: the FDA, NHTSA, USDA FSIS, and CPSC.
            If a recall you are looking for is not showing up, it may be from a state agency,
            a voluntary notice that was not submitted to a federal database, or a very recent
            notice that has not yet propagated through the API. For older recalls, NHTSA and
            FDA maintain searchable historical databases at their own websites.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-5">
          <h2 className="font-semibold text-navy mb-2">Email Subscription Issues</h2>
          <p className="text-sm text-gray-600">
            If you are having trouble with your recall alert subscription — not receiving
            emails, receiving duplicate emails, or trouble unsubscribing — use the{' '}
            <Link href="/manage-subscription" className="text-navy-light hover:underline">
              manage subscription page
            </Link>{' '}
            or email us directly.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-5">
          <h2 className="font-semibold text-navy mb-2">What We Cannot Help With</h2>
          <p className="text-sm text-gray-600">
            Recall Radar provides information about recalls — we are not a government agency and
            cannot issue, modify, or cancel recall notices, compel manufacturers to honor remedies,
            or provide legal or medical advice. If you need to file a product safety complaint,
            contact the relevant agency directly:{' '}
            <a
              href="https://www.saferproducts.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-light hover:underline"
            >
              CPSC SaferProducts.gov
            </a>
            ,{' '}
            <a
              href="https://www.nhtsa.gov/report-a-safety-problem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-light hover:underline"
            >
              NHTSA complaint form
            </a>
            , or{' '}
            <a
              href="https://www.fda.gov/safety/medwatch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-light hover:underline"
            >
              FDA MedWatch
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
