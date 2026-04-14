import type { Metadata } from 'next';
import SubscribeForm from '@/components/SubscribeForm';

export const metadata: Metadata = {
  title: 'Get Recall Alerts',
  description: 'Subscribe to receive daily or weekly recall digest emails for the categories you care about.',
};

export default function SubscribePage() {
  return (
    <div className="max-w-lg mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Get Recall Alerts</h1>
      <p className="text-gray-600 mb-6 text-sm">
        Subscribe to a free daily or weekly digest of safety recalls in the categories you choose.
        No spam — only official recall data from FDA, NHTSA, and CPSC.
      </p>
      <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
        <SubscribeForm />
      </div>
      <p className="text-xs text-muted mt-4 text-center">
        We never share your email. Unsubscribe any time by replying to any digest email.
      </p>
    </div>
  );
}
