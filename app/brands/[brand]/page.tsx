import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRecallsByBrand, getAllBrands } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory, Recall } from '@/lib/types';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

interface Props {
  params: Promise<{ brand: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand } = await params;
  const recalls = await getRecallsByBrand(brand);
  if (!recalls.length) return { title: 'Brand Not Found' };
  const brandName = recalls[0].brand ?? brand;
  return {
    title: `${brandName} Recalls`,
    description: `All active safety recalls for ${brandName} — ${recalls.length} notice${recalls.length !== 1 ? 's' : ''} from the FDA, NHTSA, USDA, and CPSC. Check lot numbers and model numbers to see if your product is affected.`,
  };
}

export async function generateStaticParams() {
  const brands = await getAllBrands();
  return brands.slice(0, 100).map((b) => ({ brand: b.slug }));
}

function detectHazards(recalls: Recall[]): string[] {
  const text = recalls.map((r) => `${r.title} ${r.rawDescription} ${r.reason}`).join(' ').toLowerCase();
  const found: string[] = [];
  if (text.includes('listeria')) found.push('Listeria contamination');
  if (text.includes('salmonella')) found.push('Salmonella contamination');
  if (text.includes('e. coli') || text.includes('e coli')) found.push('E. coli contamination');
  if (text.includes('hepatitis')) found.push('Hepatitis A contamination');
  if (['undeclared', 'allergen', 'peanut', 'tree nut', 'wheat', 'soy', 'shellfish', 'sesame'].some((k) => text.includes(k))) found.push('undeclared allergens');
  if (text.includes('foreign material') || text.includes('metal fragment') || text.includes('foreign object')) found.push('foreign material contamination');
  if (text.includes('mislabel') || text.includes('misbranded')) found.push('mislabeling');
  if (text.includes('mold') || text.includes('fungal')) found.push('mold or fungal contamination');
  if (text.includes('fire') || text.includes('overheat') || text.includes('combust') || text.includes('ignit')) found.push('fire or overheating hazards');
  if (text.includes('chok')) found.push('choking hazards');
  if (text.includes('strangulat') || text.includes('entanglement')) found.push('strangulation hazards');
  if (text.includes('lead') && (text.includes('paint') || text.includes('child'))) found.push('lead exposure hazards');
  if (text.includes('airbag') || text.includes('inflator')) found.push('airbag defects');
  if (text.includes('brake') && recalls.some((r) => r.category === 'vehicles')) found.push('brake system defects');
  if (text.includes('potency') || text.includes('sub-potent') || text.includes('superpotent')) found.push('medication potency issues');
  if (text.includes('sterility') || (text.includes('contamination') && recalls.some((r) => r.category === 'medications'))) found.push('sterility concerns');
  if (text.includes('ndma') || text.includes('nitrosamine')) found.push('nitrosamine contamination');
  return found;
}

function buildContextBody(brandName: string, recalls: Recall[], urgentCount: number): string {
  const hazards = detectHazards(recalls);

  let hazardClause = '';
  if (hazards.length === 1) {
    hazardClause = ` The current recall${recalls.length !== 1 ? 's' : ''} involve${recalls.length === 1 ? 's' : ''} ${hazards[0]}.`;
  } else if (hazards.length >= 2) {
    const last = hazards[hazards.length - 1];
    hazardClause = ` The current recalls involve ${hazards.slice(0, -1).join(', ')} and ${last}.`;
  }

  const urgencyClause = urgentCount > 0
    ? ` ${urgentCount} of these recall${urgentCount !== 1 ? 's are' : ' is'} classified as urgent, meaning the issuing agency has determined a reasonable probability of serious harm.`
    : ` None of the current recalls are classified as urgent.`;

  return `The recalls listed below are active notices associated with ${brandName} in the FDA, NHTSA, USDA, and CPSC databases.${urgencyClause}${hazardClause} Check the specific lot numbers, model numbers, or production date codes in each notice carefully — a recall typically covers specific production runs, not everything a manufacturer sells.`;
}

export default async function BrandPage({ params }: Props) {
  const { brand } = await params;
  const recalls = await getRecallsByBrand(brand);
  if (!recalls.length) notFound();

  const brandName = recalls[0].brand ?? brand;

  const categories: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];
  const byCat = categories
    .map((cat) => ({ cat, count: recalls.filter((r) => r.category === cat).length }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count);

  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;
  const dates = recalls.map((r) => r.date).sort();
  const earliest = dates[0];
  const latest = dates[dates.length - 1];

  const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const contextBody = buildContextBody(brandName, recalls, urgentCount);

  const dominantCat = byCat[0]?.cat;
  const categoryLinks: Record<RecallCategory, { label: string; href: string }> = {
    food: { label: 'Browse all food recalls', href: '/food' },
    vehicles: { label: 'Browse all vehicle recalls', href: '/vehicles' },
    medications: { label: 'Browse all medication recalls', href: '/medications' },
    products: { label: 'Browse all product recalls', href: '/products' },
  };

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <nav className="text-sm text-muted mb-2 flex items-center gap-1.5">
            <Link href="/brands" className="hover:text-navy">Brands</Link>
            <span>/</span>
            <span className="text-foreground">{brandName}</span>
          </nav>
          <h1 className="text-2xl font-bold text-navy">{brandName} Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} found for {brandName}
            {earliest && earliest !== latest
              ? ` — spanning ${fmtDate(earliest)} through ${fmtDate(latest)}`
              : earliest
              ? ` — ${fmtDate(earliest)}`
              : ''}.
          </p>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-3 mb-6">
          {byCat.map(({ cat, count }) => (
            <span
              key={cat}
              className="px-3 py-1.5 bg-card border border-border rounded-full text-xs font-medium text-navy"
            >
              {CATEGORY_LABELS[cat]}: {count}
            </span>
          ))}
          {urgentCount > 0 && (
            <span className="px-3 py-1.5 bg-red-50 border border-red-200 rounded-full text-xs font-medium text-red-700">
              {urgentCount} urgent
            </span>
          )}
        </div>

        {/* Unique generated context per brand */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6 text-sm text-gray-600 leading-relaxed">
          <p>{contextBody}</p>
          <p className="mt-2">
            A manufacturer appearing in the recall database does not indicate an ongoing safety failure.
            High-volume companies with large product lines naturally appear more frequently. What matters
            is whether your specific product — identified by lot number, model number, or date code — is
            included in a recall notice.
          </p>
          {dominantCat && (
            <Link
              href={categoryLinks[dominantCat].href}
              className="inline-block mt-2 text-xs text-navy-light hover:underline"
            >
              {categoryLinks[dominantCat].label} →
            </Link>
          )}
        </div>

        <RecallGrid recalls={recalls} />
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-20">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
