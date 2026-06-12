import type { Metadata } from 'next';
import Link from 'next/link';
import { getUsdaFoodRecalls } from '@/lib/feeds/usda';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Meat & Poultry Recalls — USDA FSIS Safety Notices',
  description:
    'All active meat, poultry, and processed egg product recalls from the USDA Food Safety and Inspection Service. Covers contamination, mislabeling, and undeclared allergens in beef, pork, chicken, turkey, and deli products.',
};

export default async function MeatRecallsPage() {
  const recalls = await getUsdaFoodRecalls();
  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <nav className="text-sm text-muted mb-2 flex items-center gap-1.5">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/food" className="hover:text-navy">Food Recalls</Link>
            <span>/</span>
            <span className="text-foreground">Meat &amp; Poultry</span>
          </nav>
          <p className="text-sm text-muted mb-1">Source: USDA Food Safety and Inspection Service (FSIS)</p>
          <h1 className="text-2xl font-bold text-navy">Meat &amp; Poultry Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — updated every few hours from USDA FSIS.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">About USDA Meat &amp; Poultry Recalls</h2>
          <p>
            Meat, poultry, and processed egg products — including beef, pork, lamb, chicken, turkey, hot dogs,
            deli meats, and dried sausages — fall under the jurisdiction of the USDA's Food Safety and Inspection
            Service (FSIS), not the FDA. This distinction matters: if you see a recall for ground beef or chicken
            tenders, it will come from FSIS, not from the FDA's food recall database.
          </p>
          <p>
            The most common reasons for USDA meat recalls are bacterial contamination — particularly <em>Listeria
            monocytogenes</em>, <em>Salmonella</em>, and <em>E. coli</em> O157:H7 — as well as undeclared allergens
            in processed products, foreign material contamination, and products produced under insanitary conditions.
            FSIS inspectors are present in meat and poultry processing plants every day the facility operates,
            which is why contamination events still occur: the bacteria can persist in plant environments even with
            daily oversight.
          </p>
          <p>
            Ready-to-eat (RTE) products — deli meats, cooked sausages, hot dogs — carry the highest
            Listeria risk because they are not cooked again before eating. Listeria thrives at refrigerator
            temperatures and can contaminate products long after they leave the facility if the plant's equipment
            harbors a persistent colony. When a Listeria recall is issued for an RTE product, it is classified
            as Class I regardless of whether any illnesses have been confirmed.
          </p>
          {urgentCount > 0 && (
            <p className="text-red-700 font-medium">
              {urgentCount} of the current recalls {urgentCount !== 1 ? 'are' : 'is'} classified as urgent.
              Check those notices first.
            </p>
          )}
          <div className="flex gap-3 pt-1">
            <Link href="/food" className="text-xs text-navy-light hover:underline">← All food recalls</Link>
            <Link href="/food/allergens" className="text-xs text-navy-light hover:underline">Allergen recalls →</Link>
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
