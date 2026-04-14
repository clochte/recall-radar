import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBrands } from '@/lib/recalls';

export const metadata: Metadata = {
  title: 'Recalls by Brand',
  description: 'Browse safety recalls by manufacturer or brand. Find all recalls for specific companies across food, vehicles, medications, and consumer products.',
};

export default async function BrandsPage() {
  const brands = await getAllBrands();

  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <h1 className="text-2xl font-bold text-navy">Recalls by Brand</h1>
        <p className="text-gray-600 mt-1 text-sm max-w-2xl">
          Browse safety recalls organized by manufacturer or brand. Find all recalls issued for specific companies across food, vehicles, medications, and consumer products.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            className="flex items-center justify-between px-4 py-3 bg-card border border-border rounded-lg hover:bg-navy hover:text-white hover:border-navy transition-colors group"
          >
            <span className="text-sm font-medium truncate">{brand.name}</span>
            <span className="ml-2 text-xs bg-navy/10 text-navy px-1.5 rounded-full font-bold shrink-0 group-hover:bg-white/20 group-hover:text-white">
              {brand.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
