import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recall FAQ',
  description: 'Answers to common questions about product recalls — what they mean, how they work, and what to do if you are affected.',
};

const faqs = [
  {
    q: 'What is a product recall?',
    a: 'A product recall is an action taken by a company or government agency to remove a product from the market because it poses a safety risk. Recalls can be voluntary (initiated by the company) or mandatory (ordered by a government agency).',
  },
  {
    q: 'What is a Class I recall?',
    a: 'A Class I recall is the most serious type, issued when a product has a reasonable probability of causing serious health problems or death. Examples include contaminated food with deadly bacteria like Listeria or E. coli, or medications with dangerous dosage errors.',
  },
  {
    q: 'What is a Class II recall?',
    a: 'A Class II recall covers products that may cause temporary or medically reversible health problems, or where the probability of serious harm is remote.',
  },
  {
    q: 'What is a Class III recall?',
    a: 'A Class III recall is for products that are unlikely to cause any health problems but violate FDA regulations — such as minor labeling errors or packaging defects.',
  },
  {
    q: 'What should I do if I have a recalled product?',
    a: 'Stop using the product immediately. Check the official recall notice for specific instructions — these usually include returning the product for a refund, disposing of it, or contacting the manufacturer. Never donate or give away a recalled product.',
  },
  {
    q: 'How do I know if my car has a recall?',
    a: 'You can check your vehicle by VIN (Vehicle Identification Number) on the NHTSA website at nhtsa.gov/recalls. Dealerships are required to fix safety recalls for free.',
  },
  {
    q: 'Are recalls covered under warranty?',
    a: 'Safety recalls are generally free regardless of warranty status. Manufacturers are legally required to fix safety defects at no cost to the consumer.',
  },
  {
    q: 'How often is Recall Radar updated?',
    a: 'Recall Radar fetches the latest data from FDA, NHTSA, USDA, and CPSC every few hours. New recalls typically appear within a few hours of being published by the government agency.',
  },
  {
    q: 'Where does Recall Radar get its data?',
    a: 'All data is sourced directly from official U.S. government feeds: the FDA (food and medications), NHTSA (vehicles), USDA FSIS (meat and poultry), and CPSC (consumer products). Recall Radar does not create or modify any recall information.',
  },
  {
    q: 'Is Recall Radar affiliated with the government?',
    a: 'No. Recall Radar is an independent service that aggregates publicly available government data. For official recall information, always refer to the source links provided on each recall page.',
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Recall FAQ</h1>
      <p className="text-gray-600 mb-8 text-sm">
        Common questions about product recalls and how Recall Radar works.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border pb-6 last:border-0">
            <h2 className="font-semibold text-navy mb-2">{faq.q}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-card border border-border rounded-lg p-5 text-sm">
        <p className="font-semibold text-navy mb-1">Stay informed automatically</p>
        <p className="text-gray-600">
          <Link href="/subscribe" className="text-navy-light hover:underline font-medium">
            Subscribe to recall alerts
          </Link>{' '}
          to get a free daily or weekly digest of the recalls that matter to you.
        </p>
      </div>
    </div>
  );
}
