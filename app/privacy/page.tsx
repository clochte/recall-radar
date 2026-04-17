import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Recall Radar and ClearView Magnifier.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted mb-8">Last updated: April 17, 2026</p>

      <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">1. Overview</h2>
          <p>
            This privacy policy applies to Recall Radar (recallradar.company) and ClearView Magnifier
            (the mobile app). We are committed to protecting your privacy. This policy explains what
            data we collect, how we use it, and your choices.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">2. Recall Radar — Data We Collect</h2>
          <p className="mb-2">
            <strong>Email subscriptions:</strong> If you subscribe to recall alerts, we collect your
            email address and your preferences (categories and frequency). This data is stored securely
            and used only to send you recall digest emails.
          </p>
          <p>
            <strong>Analytics:</strong> We use Google Analytics to collect anonymous usage data
            (pages visited, time on site, general location by country). This data does not identify
            you personally.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">3. Recall Radar — How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To send you recall alert digest emails you subscribed to</li>
            <li>To improve the site based on anonymous usage patterns</li>
            <li>We do not sell or share your email with any third parties</li>
            <li>We do not use your data for advertising targeting</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">4. ClearView Magnifier — Data We Collect</h2>
          <p className="mb-2">
            <strong>Camera:</strong> ClearView uses your device camera solely to display a live
            magnified view on screen. Camera data is never recorded, stored, or transmitted.
          </p>
          <p className="mb-2">
            <strong>Photos:</strong> If you use the save feature, images are saved directly to your
            device photo library. We do not upload or store any images.
          </p>
          <p className="mb-2">
            <strong>Advertising:</strong> The free version of ClearView displays ads served by
            Google AdMob. AdMob may collect anonymous device identifiers for ad personalization.
            See Google's privacy policy for details.
          </p>
          <p>
            <strong>Purchases:</strong> If you purchase "Remove Ads," the transaction is processed
            by Google Play. We store only a local record that the purchase was made — no payment
            information is collected by us.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">5. Children's Privacy</h2>
          <p>
            Neither Recall Radar nor ClearView Magnifier is directed at children under 13. We do
            not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">6. Data Retention</h2>
          <p>
            Email subscription data is retained until you unsubscribe. You can unsubscribe at any
            time via the link in any digest email or at{' '}
            <a href="/manage-subscription" className="text-navy-light hover:underline">
              recallradar.company/manage-subscription
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">7. Third-Party Services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Google Analytics — anonymous site usage tracking</li>
            <li>Google AdSense — display advertising on Recall Radar</li>
            <li>Google AdMob — in-app advertising in ClearView</li>
            <li>Resend — email delivery for recall digests</li>
            <li>Upstash — secure storage of email subscription data</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-navy text-base mb-2">8. Contact</h2>
          <p>
            For privacy questions, contact us at{' '}
            <a href="mailto:privacy@recallradar.company" className="text-navy-light hover:underline">
              privacy@recallradar.company
            </a>.
          </p>
        </section>

      </div>
    </div>
  );
}
