import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consumer Safety Guide — How to Handle Product Recalls',
  description:
    'A complete guide for consumers on how to find product recalls, register your products, check your vehicle VIN, return recalled items, and report unsafe products to the government.',
};

const sections = [
  {
    id: 'find-recalls',
    title: 'How to find out about recalls',
    content: [
      'The most reliable way to stay informed about product recalls is to set up alerts from multiple sources. No single source covers every category, so using a combination is the safest approach.',
      'For food recalls, the FDA maintains a recall database at fda.gov/safety/recalls-market-withdrawals-safety-alerts and sends email alerts through their subscription service. The USDA FSIS covers meat and poultry at fsis.usda.gov/recalls. For vehicle recalls, NHTSA sends notices by mail to the registered owner and maintains a searchable database at nhtsa.gov/recalls. For consumer products, the CPSC publishes all recalls at cpsc.gov/recalls.',
      'Recall Radar aggregates all of these sources into one feed so you can track all categories in one place. You can subscribe to email digests filtered by category on the subscribe page.',
      'Retailers and manufacturers are also required to notify consumers about recalls in many cases. If you registered a product after purchase, you may receive direct notification by email or mail. This is one of the strongest reasons to register products when you buy them.',
    ],
  },
  {
    id: 'register-products',
    title: 'How to register your products',
    content: [
      'Product registration is one of the most effective ways to receive direct recall notices. When you register a product with the manufacturer, they have your contact information and are required to notify you if a recall is issued.',
      'For major appliances and electronics, look for a registration card in the product packaging or visit the manufacturer\'s website. Most manufacturers have an online registration portal. Keep the product\'s model number and serial number handy — you\'ll need them.',
      'For children\'s products specifically, the CPSC operates a dedicated registration program. Baby products, cribs, strollers, car seats, and similar items often include a registration card by law. You can also register at SaferProducts.gov, where you can track recalls and report hazards.',
      'For vehicles, registration happens automatically through the DMV. NHTSA uses the VIN associated with your registered vehicle to mail recall notices. If you move, updating your vehicle registration address ensures notices reach you.',
      'Even if you don\'t register directly, saving your purchase receipts and noting model and serial numbers in a home inventory makes it much easier to check whether a specific unit is affected when a recall is announced.',
    ],
  },
  {
    id: 'check-vin',
    title: 'How to check your vehicle for open recalls',
    content: [
      'Every vehicle sold in the United States has a 17-character Vehicle Identification Number (VIN). You can use this number to check for any open safety recalls on the NHTSA website at nhtsa.gov/recalls.',
      'Your VIN is printed in several places: on the dashboard visible through the windshield on the driver\'s side, on the driver\'s side door frame sticker, and on your vehicle registration and insurance documents. It is also on the title and on many engine components.',
      'The NHTSA VIN lookup shows all open recalls — meaning recalls where the repair has not yet been completed on your vehicle. If a recall appears, contact your dealer to schedule a free repair. You do not need to go to the original selling dealer; any franchised dealer for your vehicle\'s make is required to perform recall repairs.',
      'When buying a used vehicle, always run a VIN check before purchasing. A vehicle may have an open recall that was never remedied. Sellers are not always required to disclose open recalls, so checking yourself is the safest approach. The NHTSA lookup is free.',
      'If you recently sold or transferred a vehicle, NHTSA allows you to update the owner record so recall notices go to the new owner.',
    ],
  },
  {
    id: 'what-to-do',
    title: 'What to do when you have a recalled product',
    content: [
      'The first step is to stop using the product immediately. Do not use it until you have read the full recall notice and confirmed your specific unit is affected. Recall notices include lot numbers, model numbers, serial number ranges, or production date codes that identify the affected units — not every item of a brand is always included in a recall.',
      'Once you\'ve confirmed your unit is affected, follow the specific remediation instructions in the recall notice. The remedy varies: it may be a full refund (you return or dispose of the product), a free replacement, a free repair, or a software update. For food recalls, most grocery stores will accept the return with or without a receipt.',
      'Do not donate, sell, or give away a recalled product. Doing so could expose someone else to the same hazard. If the recall instructs you to dispose of the item, follow those instructions — some products have specific disposal requirements, particularly medications.',
      'For prescription medications that have been recalled, do not stop taking the medication without first consulting your doctor or pharmacist. Abruptly stopping some medications can be dangerous. Your pharmacist can check the lot number of your specific prescription and arrange a replacement.',
      'Keep a record of the recall notice, your remedy request, and any confirmation numbers. If you have difficulty getting the remedy — for example, a manufacturer refusing to honor the recall — you can file a complaint with the relevant agency (CPSC, FDA, or NHTSA).',
    ],
  },
  {
    id: 'return-refund',
    title: 'Getting a refund or replacement',
    content: [
      'For consumer products recalled by the CPSC, the recall notice will specify the remedy: usually a refund, free repair, or replacement. To claim it, you typically need to contact the manufacturer directly through their recall hotline or website. The CPSC recall page for the product will include the manufacturer\'s contact information.',
      'For food recalls, return the product to the store where you purchased it. Most major grocery chains have a policy of accepting returns on recalled items regardless of receipt. Some manufacturers also accept direct returns by mail and will reimburse shipping costs.',
      'For vehicle recalls, schedule a free repair at any authorized dealer for your vehicle\'s make. You do not need an appointment specifically for a recall repair, but scheduling one ensures the dealer has the necessary parts. Dealers are reimbursed by the manufacturer for recall repairs, so there is no incentive for them to delay.',
      'For medication recalls, your pharmacy is your first point of contact. They can verify whether your specific dispensed lot is affected and arrange a replacement prescription. In most cases, insurance will cover a replacement fill even if it comes before your normal refill date.',
      'If the manufacturer has gone out of business or is unresponsive, contact the relevant agency. CPSC and NHTSA both have consumer hotlines and enforcement authority to compel manufacturers to provide remedies.',
    ],
  },
  {
    id: 'report-unsafe',
    title: 'How to report an unsafe product',
    content: [
      'If you experience or witness a safety problem with a consumer product — even if no recall has been issued — you can report it to the government. Your report may be what triggers an investigation and eventually a recall that protects others.',
      'For consumer products, file a report at SaferProducts.gov. This is the CPSC\'s official public database of product safety incidents. Reports are reviewed by CPSC staff and can lead to investigations and recalls. You can report injuries, near-misses, and property damage.',
      'For food safety concerns — contaminated products, undeclared allergens, foreign objects — report to the FDA via the MedWatch Safety Reporting Portal at fda.gov/safety/medwatch or call 1-800-FDA-1088. For meat and poultry products, contact the USDA at 1-888-MPHotline (1-888-674-6854).',
      'For vehicle safety defects, file a complaint with NHTSA at nhtsa.gov/report-a-safety-problem or call 1-888-327-4236. NHTSA analyzes complaints to identify patterns — enough reports of the same defect on the same vehicle model can trigger a formal investigation.',
      'For medication problems including adverse reactions, incorrect dosing, or quality issues, report through FDA MedWatch. Healthcare providers can also report on behalf of patients.',
    ],
  },
  {
    id: 'vulnerable',
    title: 'Special considerations for vulnerable populations',
    content: [
      'Children under 5 face a higher risk from certain recalled products due to choking hazards, strangulation risks, and the tendency to put objects in their mouths. Pay particular attention to CPSC recalls involving toys, cribs, infant sleep products, car seats, and clothing with drawstrings. The CPSC maintains a dedicated resource for child safety at cpsc.gov/safety-education/safety-guides/kids-and-babies.',
      'Older adults may face elevated risks from recalled medications or medical devices, particularly if they are managing chronic conditions with multiple prescriptions. If you are a caregiver for an elderly person, set up recall alerts for their medications and regularly review any medical devices they use.',
      'People with food allergies face particular risks from food recalls involving undeclared allergens. Even trace contamination can cause severe allergic reactions. Set up FDA food recall alerts and consider subscribing to allergen-specific alert services if managing a serious food allergy.',
      'For parents, registering every baby and child product is especially important. The CPSC has found that registration rates for infant products are low, meaning many families never receive recall notices. Take 5 minutes to register car seats, baby monitors, cribs, and strollers when you bring them home.',
    ],
  },
];

export default function SafetyGuidePage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <p className="text-sm text-muted mb-1">Consumer Resource</p>
        <h1 className="text-2xl font-bold text-navy mb-2">Consumer Safety Guide</h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          Everything you need to know about finding, responding to, and reporting product recalls —
          from checking your vehicle VIN to getting a refund on a recalled food product.
        </p>
      </div>

      {/* Table of contents */}
      <nav className="bg-card border border-border rounded-lg p-4 mb-10">
        <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">Contents</p>
        <ol className="list-decimal list-inside space-y-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-sm text-navy-light hover:underline">
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((s) => (
          <section key={s.id} id={s.id}>
            <h2 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-border">
              {s.title}
            </h2>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              {s.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 bg-card border border-border rounded-lg p-5 text-sm">
        <p className="font-semibold text-navy mb-2">Stay ahead of recalls automatically</p>
        <p className="text-gray-600">
          <Link href="/subscribe" className="text-navy-light hover:underline font-medium">
            Subscribe to recall alerts
          </Link>{' '}
          to receive a free daily or weekly digest for the categories you care about.
          Or browse active recalls now by{' '}
          <Link href="/food" className="text-navy-light hover:underline">food</Link>,{' '}
          <Link href="/vehicles" className="text-navy-light hover:underline">vehicles</Link>,{' '}
          <Link href="/medications" className="text-navy-light hover:underline">medications</Link>, and{' '}
          <Link href="/products" className="text-navy-light hover:underline">consumer products</Link>.
        </p>
      </div>
    </div>
  );
}
