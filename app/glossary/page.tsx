import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recall Glossary — Terms & Definitions | Recall Radar',
  description:
    'Plain-language definitions of recall terminology — Class I/II/III recalls, VIN, lot numbers, market withdrawals, undeclared allergens, and government agency roles explained.',
};

interface Term {
  term: string;
  agency: string;
  definition: string;
}

const TERMS: Term[] = [
  {
    term: 'Class I Recall',
    agency: 'FDA · USDA',
    definition:
      'The most serious recall classification — issued when there is a reasonable probability that a product will cause serious adverse health consequences or death. Examples include foods contaminated with Listeria monocytogenes, Salmonella, or E. coli O157:H7, drugs with dangerous contamination, and products containing undeclared allergens that could trigger anaphylaxis.',
  },
  {
    term: 'Class II Recall',
    agency: 'FDA · USDA',
    definition:
      'A recall for products that may cause temporary or medically reversible adverse health consequences, or where the probability of serious harm is remote. Mislabeled medications with incorrect dosage instructions and minor contamination issues often fall here.',
  },
  {
    term: 'Class III Recall',
    agency: 'FDA · USDA',
    definition:
      'The least urgent recall tier — for products not likely to cause any adverse health consequences. Often involves minor labeling defects, quality issues, or technical violations that do not pose a safety risk to consumers.',
  },
  {
    term: 'CPSC (Consumer Product Safety Commission)',
    agency: 'CPSC',
    definition:
      'An independent federal agency that protects the public from unreasonable risks of injury or death associated with consumer products. CPSC oversees recalls for thousands of product types including toys, furniture, electronics, baby gear, and appliances. Consumers can report unsafe products directly to CPSC at SaferProducts.gov.',
  },
  {
    term: 'FDA (Food and Drug Administration)',
    agency: 'FDA',
    definition:
      'The U.S. federal agency responsible for protecting public health by regulating food (excluding meat, poultry, and some egg products), prescription and over-the-counter drugs, medical devices, cosmetics, and tobacco products. The FDA oversees food safety recalls through CFSAN and drug recalls through CDER.',
  },
  {
    term: 'Lot Number',
    agency: 'FDA · USDA',
    definition:
      'A code printed on food and medication packaging that identifies the specific production batch. When a recall is issued, it lists the exact lot numbers affected — items from other batches may be safe. Always check the lot number on your product against the recall notice before discarding or returning it.',
  },
  {
    term: 'Market Withdrawal',
    agency: 'FDA',
    definition:
      'When a company removes a product from distribution or corrects a minor problem that does not constitute a legal violation requiring a formal recall. Market withdrawals involve no significant hazard to health — for example, minor contamination that would not require regulatory action, or product removed due to tampering with no confirmed health risk.',
  },
  {
    term: 'NHTSA (National Highway Traffic Safety Administration)',
    agency: 'NHTSA',
    definition:
      'The federal agency within the Department of Transportation responsible for vehicle and road safety. NHTSA issues vehicle safety recall campaigns, sets federal motor vehicle safety standards, investigates vehicle defects, and maintains the national recall database. All NHTSA recall repairs are performed free of charge at any authorized dealership, regardless of the vehicle\'s age or mileage.',
  },
  {
    term: 'NHTSA Campaign Number',
    agency: 'NHTSA',
    definition:
      'The unique identifier assigned to each vehicle recall campaign by NHTSA, formatted as YYVNNNNN (e.g., 23V045000 — year 2023, vehicle recall, sequence 045000). You can search by campaign number on NHTSA.gov to find full recall details and determine if your specific vehicle is included.',
  },
  {
    term: 'Recalling Firm',
    agency: 'All agencies',
    definition:
      'The company responsible for conducting the recall — typically the manufacturer, importer, or distributor of the affected product. The recalling firm is obligated to notify consumers, retailers, and distributors, and to provide the remedy (refund, repair, or replacement).',
  },
  {
    term: 'Remedy',
    agency: 'All agencies',
    definition:
      'The corrective action offered to consumers who own a recalled product. Common remedies include a full refund (most common for food, medications, and consumer products), free repair (standard for vehicle recalls), a replacement product, or a rebate toward a new purchase. For vehicle recalls, dealers are legally required to perform the repair at no charge. For food and consumer products, most retailers will accept returns without a receipt.',
  },
  {
    term: 'Safety Alert',
    agency: 'FDA · CPSC · NHTSA',
    definition:
      'A public notification about a product that may pose a hazard, issued before or instead of a formal recall. Safety alerts may advise consumers to stop using a product while an investigation is underway, or provide precautionary guidance when the full scope of a hazard has not yet been determined.',
  },
  {
    term: 'Technical Service Bulletin (TSB)',
    agency: 'NHTSA',
    definition:
      'A notice issued by a vehicle manufacturer to dealerships describing a known issue and the recommended repair procedure. TSBs are NOT safety recalls — they do not require manufacturers to notify owners or perform repairs for free. However, a TSB may later be escalated to a recall if NHTSA determines the issue poses a safety risk.',
  },
  {
    term: 'Undeclared Allergen',
    agency: 'FDA · USDA',
    definition:
      'A food allergen present in a product that is not disclosed on the label. The nine major allergens regulated in the U.S. are milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, and sesame. Undeclared allergen recalls are nearly always Class I (most serious) because they can trigger potentially fatal anaphylactic reactions in sensitive individuals.',
  },
  {
    term: 'UPC (Universal Product Code)',
    agency: 'FDA · USDA · CPSC',
    definition:
      'The barcode printed on retail product packaging. Recall notices often list UPC codes to help consumers identify affected products. The 12-digit number under the barcode can be compared directly to UPCs listed in a recall notice — or scanned with a phone app — to determine if your product is included.',
  },
  {
    term: 'USDA FSIS (Food Safety and Inspection Service)',
    agency: 'USDA',
    definition:
      'The public health agency within the U.S. Department of Agriculture responsible for ensuring that meat, poultry, siluriformes (catfish), and egg products are safe, wholesome, and accurately labeled. FSIS oversees food safety recalls for these specific product types separately from the FDA, which covers other food categories.',
  },
  {
    term: 'VIN (Vehicle Identification Number)',
    agency: 'NHTSA',
    definition:
      'A unique 17-character alphanumeric code assigned to every motor vehicle at manufacture. The VIN encodes the country of manufacture, manufacturer, vehicle type, model year, assembly plant, and a sequential serial number. NHTSA uses VINs to identify which specific vehicles are covered by a recall campaign. Your VIN appears on the driver\'s door jamb sticker, the dashboard (visible through the windshield on the driver\'s side), and your vehicle registration and insurance documents.',
  },
  {
    term: 'Voluntary Recall',
    agency: 'All agencies',
    definition:
      'A recall initiated by a company without being ordered to do so by a regulatory agency. Despite the name, voluntary recalls carry the same obligations for consumer remedy as mandatory recalls. Companies typically initiate voluntary recalls after discovering a defect internally, receiving consumer complaints, or being contacted by a regulator about a potential issue.',
  },
];

export default function GlossaryPage() {
  const sorted = [...TERMS].sort((a, b) => a.term.localeCompare(b.term));
  const letters = [...new Set(sorted.map((t) => t.term[0].toUpperCase()))];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Recall Glossary</h1>
      <p className="text-gray-600 mb-8 text-sm leading-relaxed max-w-xl">
        Plain-language definitions of terms used in recall notices, safety alerts, and government
        communications. Understanding these terms helps you quickly assess whether a recall
        affects you and what action to take.
      </p>

      {/* Alphabet jump nav */}
      <div className="flex flex-wrap gap-1.5 mb-8 pb-6 border-b border-border">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="px-2.5 py-1 bg-card border border-border rounded text-xs font-semibold text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      <div>
        {(() => {
          const groups: { letter: string; terms: Term[] }[] = [];
          for (const term of sorted) {
            const l = term.term[0].toUpperCase();
            const last = groups[groups.length - 1];
            if (last && last.letter === l) {
              last.terms.push(term);
            } else {
              groups.push({ letter: l, terms: [term] });
            }
          }
          return groups.map(({ letter, terms }) => (
            <div key={letter} id={`letter-${letter}`} className="mb-8">
              <h2 className="text-xs font-bold text-muted uppercase tracking-widest mb-3">
                {letter}
              </h2>
              <div className="space-y-3">
                {terms.map((item) => (
                  <div key={item.term} className="bg-card border border-border rounded-lg p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-navy">{item.term}</h3>
                      <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full shrink-0">
                        {item.agency}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ));
        })()}
      </div>

      <div className="mt-6 bg-card border border-border rounded-lg p-5">
        <p className="text-sm font-semibold text-navy mb-3">Related resources</p>
        <div className="flex flex-wrap gap-2">
          {[
            { href: '/safety-guide', label: 'Consumer Safety Guide' },
            { href: '/faq', label: 'Recall FAQ' },
            { href: '/vin-lookup', label: 'VIN Lookup' },
            { href: '/subscribe', label: 'Get Recall Alerts' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 bg-white border border-border rounded-full text-sm text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
