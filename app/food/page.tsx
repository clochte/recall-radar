import type { Metadata } from 'next';
import { getFoodRecalls } from '@/lib/feeds/fda-food';
import { getUsdaFoodRecalls } from '@/lib/feeds/usda';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Food Recalls — FDA & USDA Safety Alerts',
  description:
    'Browse the latest food safety recalls from the FDA and USDA. Covers contamination, undeclared allergens, mislabeling, and other hazards. Updated every few hours.',
};

export default async function FoodPage() {
  const [fdaRecalls, usdaRecalls] = await Promise.all([getFoodRecalls(), getUsdaFoodRecalls()]);
  const recalls = [...fdaRecalls, ...usdaRecalls].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <p className="text-sm text-muted mb-1">Sources: FDA Food Safety &amp; USDA FSIS</p>
          <h1 className="text-2xl font-bold text-navy">Food Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — updated every few hours from official government sources.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">About Food Safety Recalls</h2>
          <p>
            Food recalls are issued when a product on the market is found to pose a health risk to consumers.
            In the United States, recalls are overseen by two agencies depending on the type of food: the Food
            and Drug Administration (FDA) handles most packaged foods, produce, seafood, and dietary supplements,
            while the USDA&apos;s Food Safety and Inspection Service (FSIS) covers meat, poultry, and egg products.
          </p>
          <p>
            The most common reasons for a food recall include bacterial contamination — particularly
            Salmonella, Listeria monocytogenes, and E. coli O157:H7 — as well as undeclared allergens
            such as peanuts, tree nuts, milk, wheat, soy, fish, shellfish, and eggs. Other triggers include
            foreign object contamination (metal fragments, plastic pieces, bone chips), incorrect labeling,
            and products that were manufactured or stored under unsanitary conditions.
          </p>
          <p>
            Food recalls are categorized by the severity of the health risk. A <strong>Class I recall</strong> is
            the most serious, meaning the product has a reasonable probability of causing serious adverse health
            consequences or death. A <strong>Class II recall</strong> involves a product that may cause temporary
            adverse health consequences, with a remote probability of serious harm. A <strong>Class III recall</strong> covers
            products that are unlikely to cause any adverse health consequences but violate FDA or USDA regulations.
          </p>
          <p>
            If you find a recalled food product at home, stop using it immediately regardless of whether you or
            anyone in your household has experienced symptoms. Do not donate the product or give it to others.
            Check the official recall notice for lot numbers, UPC codes, and use-by dates — not every unit of
            a brand is always affected. Most grocery stores will issue a refund for recalled items even without
            a receipt. When in doubt, throw it out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {[
              { label: 'Class I', desc: 'Serious health risk or death', color: 'text-red-600' },
              { label: 'Class II', desc: 'Temporary adverse health effects', color: 'text-orange-500' },
              { label: 'Class III', desc: 'Regulatory violation, low risk', color: 'text-yellow-600' },
            ].map((cls) => (
              <div key={cls.label} className="bg-white border border-border rounded p-3">
                <p className={`font-semibold text-sm ${cls.color}`}>{cls.label}</p>
                <p className="text-xs text-gray-600 mt-0.5">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <RecallGrid recalls={recalls} />
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-[72px]">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
