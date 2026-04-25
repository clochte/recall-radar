import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRecallsByBrand, getAllBrands } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';
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
    description: `All active safety recalls issued for ${brandName} across food, vehicles, medications, and consumer products. Sourced from FDA, NHTSA, USDA, and CPSC.`,
  };
}

export async function generateStaticParams() {
  const brands = await getAllBrands();
  return brands.slice(0, 100).map((b) => ({ brand: b.slug }));
}

export default async function BrandPage({ params }: Props) {
  const { brand } = await params;
  const recalls = await getRecallsByBrand(brand);
  if (!recalls.length) notFound();

  const brandName = recalls[0].brand ?? brand;

  const categories: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];
  const byCat = categories
    .map((cat) => ({ cat, count: recalls.filter((r) => r.category === cat).length }))
    .filter((x) => x.count > 0);

  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;
  const dates = recalls.map((r) => r.date).sort();
  const earliest = dates[0];
  const latest = dates[dates.length - 1];

  const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

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

        <div className="bg-card border border-border rounded-lg p-4 mb-6 text-sm text-gray-600 leading-relaxed">
          <p>
            The recalls listed below are all active notices associated with <strong>{brandName}</strong> in
            the FDA, NHTSA, USDA, and CPSC databases. A recall notice may cover specific lot numbers,
            model numbers, or production date ranges — check each notice carefully to determine whether
            your specific product is affected.
          </p>
          <p className="mt-2">
            If you own a recalled product, stop using it and follow the instructions in the official
            notice for a refund, replacement, or free repair. Vehicle recall repairs are always free
            regardless of warranty status. For food and consumer products, most retailers will accept
            returns even without a receipt.
          </p>
        </div>

        <RecallGrid recalls={recalls} />
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-20">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
