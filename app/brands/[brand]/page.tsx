import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRecallsByBrand, getAllBrands } from '@/lib/recalls';
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
    description: `All safety recalls issued for ${brandName}. Sourced from FDA, NHTSA, and CPSC.`,
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
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} found for {brandName}.
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
