import type { Metadata } from 'next';
import Link from 'next/link';
import SubscribeForm from '@/components/SubscribeForm';

export const metadata: Metadata = {
  title: 'Get Free Recall Alerts — Subscribe to Recall Radar',
  description:
    'Subscribe to free daily or weekly recall digest emails. Choose food, vehicles, medications, or consumer product recalls from FDA, NHTSA, USDA, and CPSC. No spam, unsubscribe any time.',
};

const benefits = [
  {
    label: 'Choose your categories',
    desc: 'Get alerts for food, vehicle, medication, and/or consumer product recalls — or all of them.',
  },
  {
    label: 'Daily or weekly digest',
    desc: 'Pick the frequency that works for you. Daily for staying on top of new recalls; weekly for a concise summary.',
  },
  {
    label: 'Official sources only',
    desc: 'All recall data comes directly from the FDA, NHTSA, USDA, and CPSC — no speculation or unofficial reports.',
  },
  {
    label: 'Free and private',
    desc: 'No cost, no ads in the email. Your address is never shared and you can unsubscribe from any digest email.',
  },
];

export default function SubscribePage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Get Free Recall Alerts</h1>
      <p className="text-gray-600 mb-8 text-sm leading-relaxed max-w-lg">
        Recalls are issued every day across food, vehicles, medications, and consumer products.
        Stay informed without having to check manually — subscribe to a free digest delivered
        to your inbox on the schedule you choose.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {benefits.map((b) => (
          <div key={b.label} className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm font-semibold text-navy mb-1">{b.label}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-border rounded-lg p-6 shadow-sm mb-6">
        <SubscribeForm />
      </div>

      <p className="text-xs text-muted text-center">
        We never share your email address. Unsubscribe at any time by clicking the link in any digest email,
        or visit the{' '}
        <Link href="/manage-subscription" className="text-navy-light hover:underline">
          manage subscription
        </Link>{' '}
        page.
      </p>

      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-sm font-semibold text-navy mb-3">Browse recalls now</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: '/food', label: 'Food Recalls' },
            { href: '/vehicles', label: 'Vehicle Recalls' },
            { href: '/medications', label: 'Medication Recalls' },
            { href: '/products', label: 'Product Recalls' },
            { href: '/weekly', label: 'New This Week' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 bg-card border border-border rounded-full text-sm text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
