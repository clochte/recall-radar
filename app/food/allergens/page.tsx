import type { Metadata } from 'next';
import Link from 'next/link';
import { getFoodRecalls } from '@/lib/feeds/fda-food';
import { getUsdaFoodRecalls } from '@/lib/feeds/usda';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Undeclared Allergen Food Recalls — FDA & USDA',
  description:
    'All active food recalls involving undeclared allergens — peanuts, tree nuts, milk, wheat, soy, fish, shellfish, sesame, and eggs. Sourced from FDA and USDA FSIS.',
};

const ALLERGEN_KEYWORDS = [
  'undeclared', 'allergen', 'peanut', 'tree nut', 'milk', 'wheat',
  'soy', 'shellfish', 'sesame', 'egg', 'fish', 'walnut', 'almond',
  'cashew', 'pecan', 'pistachio', 'hazelnut', 'macadamia',
];

export default async function AllergenRecallsPage() {
  const [fdaRecalls, usdaRecalls] = await Promise.all([getFoodRecalls(), getUsdaFoodRecalls()]);
  const allFood = [...fdaRecalls, ...usdaRecalls];

  const recalls = allFood
    .filter((r) => {
      const text = `${r.title} ${r.rawDescription} ${r.reason}`.toLowerCase();
      return ALLERGEN_KEYWORDS.some((k) => text.includes(k));
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
            <span className="text-foreground">Allergen Recalls</span>
          </nav>
          <p className="text-sm text-muted mb-1">Sources: FDA Food Safety &amp; USDA FSIS</p>
          <h1 className="text-2xl font-bold text-navy">Undeclared Allergen Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} involving undeclared allergens — updated every few hours.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">About Undeclared Allergen Recalls</h2>
          <p>
            Undeclared allergen recalls occur when a food product contains one of the nine major food
            allergens recognized by the FDA — peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish,
            or sesame — without listing it on the label. This almost always happens due to a manufacturing
            error: the wrong product ends up in the wrong packaging, or a facility runs two products on the
            same line without adequate cleaning in between.
          </p>
          <p>
            For most consumers, an undeclared allergen is a labeling compliance issue. For someone with a
            food allergy, it can cause a reaction ranging from hives and swelling to anaphylaxis, a severe
            whole-body response that can be fatal within minutes without treatment with epinephrine. This is
            why undeclared allergen recalls involving the most common allergens — peanuts, tree nuts, milk —
            are almost universally classified as Class I, the most serious recall tier.
          </p>
          <p>
            The FDA estimates that roughly 26 million Americans have food allergies, and reactions to
            undeclared allergens in packaged foods cause thousands of emergency room visits each year.
            The risk is compounded by the fact that consumers with severe allergies often read ingredient
            labels carefully but may trust a familiar product and skip the check — precisely the situation
            a labeling error exploits.
          </p>
          {urgentCount > 0 && (
            <p className="text-red-700 font-medium">
              {urgentCount} of these recalls {urgentCount !== 1 ? 'are' : 'is'} classified as urgent.
            </p>
          )}
          <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800">
            <strong>If you have a food allergy:</strong> Always check the lot numbers and UPC codes in the
            recall notice against your specific package — not all production runs of a product are affected.
            If the codes match and you have a known allergy to the listed ingredient, discard the product
            or return it for a refund. If you carry an epinephrine auto-injector and have recently eaten
            the product, keep it accessible.
          </div>
          <div className="flex gap-3 pt-1">
            <Link href="/food" className="text-xs text-navy-light hover:underline">← All food recalls</Link>
            <Link href="/food/meat" className="text-xs text-navy-light hover:underline">Meat &amp; poultry recalls →</Link>
            <Link href="/articles/undeclared-allergens-recall-risk" className="text-xs text-navy-light hover:underline">Allergen recall guide →</Link>
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
