import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recall FAQ — Common Questions About Product Recalls',
  description: 'Answers to common questions about product recalls — what they mean, how they work, what to do if you have a recalled product, and how to register items and report safety issues.',
};

const faqs = [
  {
    q: 'What is a product recall?',
    a: 'A product recall is an action taken by a company or government agency to remove an unsafe product from the market and notify consumers. Recalls can be voluntary — initiated by the company — or mandatory, ordered by a government agency after an investigation. The goal is to prevent harm by getting the product out of use and, where possible, providing a remedy like a refund, replacement, or free repair.',
  },
  {
    q: 'What is a Class I recall?',
    a: 'A Class I recall is the most serious classification, issued when there is a reasonable probability that using or being exposed to the product will cause serious adverse health consequences or death. Examples include food contaminated with deadly bacteria like Listeria or E. coli, medications with dangerous dosage errors, and vehicles with defects that can cause loss of control. If you have a Class I recalled product, stop using it immediately.',
  },
  {
    q: 'What is a Class II recall?',
    a: 'A Class II recall covers products that may cause temporary or medically reversible adverse health consequences, or where the probability of serious harm is remote. These are still serious recalls that should be acted on, but the immediate risk is lower than a Class I.',
  },
  {
    q: 'What is a Class III recall?',
    a: 'A Class III recall is for products that are unlikely to cause adverse health consequences but violate FDA or USDA regulations. Examples include minor labeling errors, incorrect net weight, or packaging defects that do not affect the safety of the product itself.',
  },
  {
    q: 'What is the difference between a recall and a market withdrawal?',
    a: 'A recall involves a product that violates a law or regulation enforced by the FDA, USDA, NHTSA, or CPSC. A market withdrawal is a company\'s removal of a product for reasons that do not constitute a violation — for example, a minor quality issue that does not pose a safety risk. Market withdrawals are generally less serious and are not tracked the same way as formal recalls.',
  },
  {
    q: 'What should I do if I have a recalled product?',
    a: 'Stop using the product immediately. Check the recall notice for lot numbers, model numbers, or production date codes — not every unit of a brand is always affected. Then follow the specific remediation instructions: return it for a refund, contact the manufacturer for a free repair or replacement, or dispose of it safely. Never donate, sell, or give away a recalled product, as this exposes others to the same risk.',
  },
  {
    q: 'How do I know if my car has a recall?',
    a: 'Look up your Vehicle Identification Number (VIN) on NHTSA\'s free recall database at nhtsa.gov/recalls. Your VIN is on the driver\'s side dashboard (visible through the windshield), the driver\'s door frame sticker, and your registration documents. If an open recall appears, contact any authorized dealer for your vehicle\'s make — recall repairs are always free, regardless of warranty status.',
  },
  {
    q: 'Are vehicle recall repairs really free?',
    a: 'Yes. Federal law requires manufacturers to fix safety defects at no cost to the vehicle owner, with no mileage or age limit. This applies even if you bought the car used, even if it\'s out of warranty, and even if you didn\'t buy it from the dealer performing the repair. If a dealer tries to charge you for a safety recall repair, you can report it to NHTSA.',
  },
  {
    q: 'Do recalls apply to used or secondhand products?',
    a: 'Yes. A recall applies to all affected units of a product regardless of how they were purchased or how old they are. If you buy a used car, appliance, or piece of baby equipment and it has an open recall, you are entitled to the same remedy as the original purchaser. Always check for open recalls when buying secondhand goods, especially children\'s products and vehicles.',
  },
  {
    q: 'Can I still sell or donate a recalled product?',
    a: 'Generally, no. Selling or donating a recalled product exposes others to a known hazard and may create legal liability. Some states have laws specifically prohibiting the resale of recalled children\'s products. The safest course is to follow the recall instructions — return it for a refund or dispose of it properly — rather than passing the risk on to someone else.',
  },
  {
    q: 'What if the manufacturer is out of business?',
    a: 'If the manufacturer is no longer operating, you may still be able to get a remedy through the retailer that sold the product, the importer, or a successor company that acquired the brand. Contact the relevant agency (CPSC, FDA, or NHTSA) for guidance. In some cases, the agency may have a fund or program to help consumers when no responsible party is available.',
  },
  {
    q: 'How do I know if my medication is in a recalled lot?',
    a: 'Check the lot number printed on your medication packaging against the lot numbers listed in the recall notice. The lot number is usually on the bottom or side of the bottle or blister pack. Your pharmacy can also look this up for you. If your lot is affected, do not stop taking a prescription medication without consulting your doctor or pharmacist first — a safe alternative can be arranged.',
  },
  {
    q: 'How do I register my products to receive recall notices?',
    a: 'For most consumer products, visit the manufacturer\'s website and look for a product registration page. Many products also include a registration card in the box. For children\'s products, you can also register at SaferProducts.gov. For vehicles, NHTSA uses the address on your vehicle registration — keep that updated when you move so recall notices reach you.',
  },
  {
    q: 'How do I report an unsafe product?',
    a: 'For consumer products, file a report at SaferProducts.gov. For food safety issues, use FDA MedWatch at fda.gov/safety/medwatch or call 1-800-FDA-1088. For meat and poultry, contact the USDA at 1-888-674-6854. For vehicle defects, report to NHTSA at nhtsa.gov/report-a-safety-problem. Your report may trigger an investigation that leads to a recall.',
  },
  {
    q: 'How often is Recall Radar updated?',
    a: 'Recall Radar fetches the latest data from the FDA, NHTSA, USDA, and CPSC every few hours. New recalls typically appear within a few hours of being published by the issuing agency.',
  },
  {
    q: 'Where does Recall Radar get its data?',
    a: 'All data comes directly from official U.S. government feeds: the FDA (food and medications), NHTSA (vehicles), USDA FSIS (meat and poultry), and CPSC (consumer products). Recall Radar does not create, modify, or editorialize any recall information.',
  },
  {
    q: 'Is Recall Radar affiliated with the government?',
    a: 'No. Recall Radar is an independent service that aggregates publicly available government data into one place. For official recall information, always refer to the source links on each recall page.',
  },
  {
    q: 'I already ate the recalled food — what should I do now?',
    a: 'First, check whether your specific package is actually included in the recall by comparing the lot number, best-by date, and UPC against the recall notice. If you no longer have the packaging, check your purchase date against the recall\'s distribution window. If you believe you consumed recalled food: for healthy adults, monitor for symptoms and seek care if they appear. Listeria symptoms can appear 1–70 days after exposure (most often 1–4 weeks); Salmonella symptoms appear within 6 hours to 6 days; E. coli symptoms typically appear 3–4 days after exposure. If you are pregnant, over 65, or immunocompromised, contact your healthcare provider proactively — even without symptoms — after a potential Listeria exposure. For allergen recalls, watch for allergic reaction symptoms if you have a known allergy to the undeclared ingredient.',
  },
  {
    q: 'I already took a recalled medication for weeks — is it too late to do anything?',
    a: 'Contact your doctor or pharmacist and tell them about the recalled medication and how long you were taking it. For most recalls — potency issues, nitrosamine contamination, minor labeling errors — extended past exposure does not change the immediate treatment approach, but your doctor should know. For more serious contamination issues (sterility failures in injectables, superpotent dosing), past exposure warrants a clinical evaluation. Do not stop a prescription medication abruptly; your pharmacist can switch you to an unaffected lot or alternative. Report any adverse effects to FDA MedWatch at fda.gov/safety/medwatch.',
  },
  {
    q: 'I\'ve been driving my recalled car for months — is it too late to get the free repair?',
    a: 'No. Vehicle recall repairs have no expiration date. You can get the free repair at any point — years or even decades after the recall was issued. Manufacturers are legally obligated to perform the repair at no cost to the current owner for as long as the recall remains open, which is typically indefinitely. Contact any authorized franchised dealer for your vehicle\'s make, bring your VIN, and schedule the repair. The only practical constraint is parts availability for older recalls — you may need to get on a waiting list.',
  },
  {
    q: 'I don\'t have the packaging anymore — can I still get a refund?',
    a: 'You can try. Without the packaging and lot number, you cannot confirm your specific product was affected, but some manufacturers and retailers will still process a refund based on a dated purchase receipt or store loyalty card purchase history. Contact the manufacturer directly using the recall hotline listed in the official notice — explain that you disposed of the packaging before seeing the recall. Many will work with you, especially for Class I recalls. Your grocery store may also be able to pull your purchase history if you have a loyalty card account.',
  },
  {
    q: 'Is a product safe if it\'s the same brand but a different lot number?',
    a: 'Almost always yes, for that specific recall. Recalls identify specific production runs using lot numbers, date codes, UPCs, or model numbers. A different lot number means a different batch — made at a different time, possibly in a different facility — and is not part of that recall. The only exception would be a recall explicitly stating that all products from a specific brand are affected, which is very rare. Always verify your specific lot number against the recall notice rather than assuming a brand-wide problem.',
  },
  {
    q: 'Do I need a receipt to return recalled food?',
    a: 'Usually no. Most major grocery chains accept returns of recalled food without a receipt for Class I recalls. Bring the product with its packaging (or at least the UPC and lot number) to the customer service desk and explain it is a recalled item. If a store refuses, contact the manufacturer using the hotline in the official recall notice — many have direct consumer refund programs. In some cases, contacting the FDA or USDA and noting the retailer\'s non-compliance can prompt action.',
  },
  {
    q: 'My car dealer says recall parts aren\'t available yet — what should I do?',
    a: 'Ask to be placed on the dealer\'s waiting list for the specific recall part. Get written confirmation of your place in the queue along with the NHTSA campaign number for the recall. Contact the manufacturer\'s customer service line directly — automakers sometimes have expedite programs for high-severity recalls. For recalls with a park-it warning, ask whether the manufacturer will provide a loaner vehicle or rental car reimbursement while you wait. File a complaint with NHTSA at nhtsa.gov if you believe the parts situation is being mismanaged.',
  },
  {
    q: 'My doctor said to keep taking my recalled medication — is that safe?',
    a: 'Follow your doctor\'s guidance. For many medications, the risk of stopping abruptly — uncontrolled blood pressure, withdrawal effects, loss of seizure control — is greater than the risk posed by the specific recall reason. Your doctor is weighing the severity of the recall\'s risk against your medical needs. Ask your pharmacist to check whether your specific dispensed lot is affected and to arrange a switch to an unaffected lot or alternative medication as soon as possible.',
  },
  {
    q: 'Why does a recall say "no illnesses reported" but still be Class I?',
    a: 'Class I reflects the probability and potential severity of harm based on the type of contamination or defect — not whether illness has already occurred. The FDA classifies Listeria contamination in ready-to-eat food as Class I even when no cases are confirmed, because Listeria\'s known mortality rate in vulnerable populations makes serious harm a reasonable statistical probability given continued exposure. "No illnesses reported" means no illnesses have been confirmed as linked to this specific product yet. It does not mean the product is safe or the recall is precautionary.',
  },
  {
    q: 'Can a recall be closed or reversed?',
    a: 'Yes. The FDA and USDA can formally terminate a recall once they are satisfied all affected product has been removed from commerce. This is called recall termination. It means the remediation process is complete — not that the product was found safe. NHTSA vehicle recalls technically remain open until all affected vehicles receive the repair, which can take years or remain permanently open for older vehicles. A terminated or closed recall still happened; the product was still recalled; you should not seek refund or remedy after closure, but the historical record stands.',
  },
  {
    q: 'What does "urgent" vs. "voluntary" mean on Recall Radar specifically?',
    a: '"Urgent" on Recall Radar means the recall description contains keywords associated with serious hazards — Listeria, Salmonella, fire, brake failure, airbag defects, choking hazards, etc. "Voluntary" means the notice explicitly describes the recall as voluntary or the description suggests lower severity. This is automated text analysis, not an official government designation. "Urgent" on Recall Radar generally corresponds to Class I; "Voluntary" to Class III. When in doubt, read the official notice to see the actual classification.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-2xl font-bold text-navy mb-2">Recall FAQ</h1>
      <p className="text-gray-600 mb-2 text-sm">
        Common questions about product recalls and how Recall Radar works.
      </p>
      <p className="text-xs text-muted mb-8">
        Last reviewed: June 2026 · <Link href="/about#who-we-are" className="hover:underline">Chris L., Recall Radar</Link>
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
