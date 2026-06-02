import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use — Recall Radar',
  description: 'Terms of use for Recall Radar, a free public safety resource for product recall information.',
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Terms of Use</h1>
      <p className="text-muted text-sm mb-8">Last updated: May 2025</p>

      <div className="space-y-7 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="font-semibold text-navy mb-2">Use of This Site</h2>
          <p>
            Recall Radar is a free, publicly accessible resource. You may use this site to find
            information about product recalls, subscribe to recall alerts, and read our safety
            guides and articles. You may not reproduce, distribute, or resell our content
            without permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy mb-2">Data Sources and Accuracy</h2>
          <p>
            Recall information on this site is sourced from official U.S. government APIs and
            feeds, including the FDA, NHTSA, USDA FSIS, and CPSC. We present this data with
            minimal transformation to help users find recalls more easily. We do not create,
            modify, or verify the accuracy of individual recall notices — all recall information
            originates with the issuing government agency.
          </p>
          <p className="mt-2">
            Recall data may be delayed, incomplete, or contain errors from the source. For
            safety-critical decisions, always verify recall information at the official
            government source linked on each recall page.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy mb-2">No Government Affiliation</h2>
          <p>
            Recall Radar is not affiliated with, endorsed by, or operated by the FDA, NHTSA,
            USDA, CPSC, or any other government agency. We are an independent service that
            aggregates publicly available government recall data.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy mb-2">No Medical or Legal Advice</h2>
          <p>
            Nothing on this site constitutes medical, legal, or professional advice. Information
            about recalled products, medications, or vehicles is provided for general informational
            purposes. For medical decisions related to recalled medications, consult your
            healthcare provider.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy mb-2">Email Subscriptions</h2>
          <p>
            By subscribing to recall alerts, you agree to receive periodic email notifications
            about new recalls in your selected categories. You may unsubscribe at any time.
            We do not share your email address with third parties. See our{' '}
            <Link href="/privacy" className="text-navy-light hover:underline">
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy mb-2">Limitation of Liability</h2>
          <p>
            Recall Radar is provided "as is" without any warranty. We are not liable for any
            damages arising from your use of this site, reliance on recall information provided
            here, or delays in recall data availability. Use of this site is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy mb-2">Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after changes
            are posted constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy mb-2">Contact</h2>
          <p>
            Questions about these terms? Email us at{' '}
            <a
              href="mailto:hello@recallradar.company"
              className="text-navy-light hover:underline"
            >
              hello@recallradar.company
            </a>.
          </p>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/privacy" className="text-navy-light hover:underline">Privacy Policy</Link>
        <Link href="/about" className="text-navy-light hover:underline">About</Link>
        <Link href="/contact" className="text-navy-light hover:underline">Contact</Link>
      </div>
    </div>
  );
}
