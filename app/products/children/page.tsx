import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductRecalls } from '@/lib/feeds/cpsc';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: "Children's Product Recalls — CPSC Safety Alerts for Parents",
  description:
    "Active CPSC recalls for children's products — toys, cribs, car seats, strollers, clothing, baby gear, and infant sleep products. Covers choking hazards, strangulation risks, lead exposure, and structural failures.",
};

const CHILD_KEYWORDS = [
  'child', 'children', 'infant', 'baby', 'toddler', 'toy', 'toys',
  'crib', 'stroller', 'car seat', 'booster', 'playpen', 'bassinet',
  'high chair', 'pacifier', 'teether', 'swing', 'bouncer', 'walker',
  'clothing', 'pajama', 'sleepwear', 'chok', 'strangulat', 'lead',
  'nursery', 'juvenile', 'kids', 'youth',
];

export default async function ChildrenProductsPage() {
  const all = await getProductRecalls();
  const recalls = all.filter((r) => {
    const text = `${r.title} ${r.rawDescription} ${r.reason}`.toLowerCase();
    return CHILD_KEYWORDS.some((k) => text.includes(k));
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <nav className="text-sm text-muted mb-2 flex items-center gap-1.5">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-navy">Product Recalls</Link>
            <span>/</span>
            <span className="text-foreground">Children&apos;s Products</span>
          </nav>
          <p className="text-sm text-muted mb-1">Source: CPSC Consumer Product Safety Commission</p>
          <h1 className="text-2xl font-bold text-navy">Children&apos;s Product Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} involving children&apos;s products — updated every few hours.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">Why Children&apos;s Product Recalls Require Immediate Action</h2>
          <p>
            Children&apos;s products are subject to some of the strictest safety standards in the consumer product
            market because the consequences of failure are severe and children cannot protect themselves. The
            CPSC enforces specific federal standards for toys (ASTM F963), cribs (16 CFR Part 1219), car seats,
            strollers, and dozens of other juvenile product categories. When a product fails to meet these
            standards or causes an injury, the CPSC works with manufacturers on a recall.
          </p>
          <p>
            The most common hazards in children&apos;s product recalls are choking hazards — small parts that can
            detach from toys, clothing accessories, or baby products; strangulation and entanglement hazards
            from cords, drawstrings, and loose straps on cribs, windows, and clothing; structural failures in
            cribs, high chairs, and strollers; and lead or other toxic material exposure from paint, jewelry,
            and art supplies. Infant sleep products receive particular scrutiny because improper sleep surfaces
            are a leading cause of infant death from positional asphyxia.
          </p>
          <p>
            If a children&apos;s product in your home is recalled, remove it from use immediately — do not wait
            until you have processed the refund or replacement. The hazard exists as long as the product is
            accessible to a child. For cribs and infant sleep products, do not donate or pass the recalled item
            to another family: the same risks apply regardless of who uses it.
          </p>
          {urgentCount > 0 && (
            <p className="font-medium text-urgent">
              {urgentCount} of the current recalls {urgentCount !== 1 ? 'are' : 'is'} classified as urgent. Check those first.
            </p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
            {[
              { label: 'Choking hazards', desc: 'Small parts, detachable components' },
              { label: 'Strangulation', desc: 'Cords, drawstrings, straps' },
              { label: 'Structural failure', desc: 'Cribs, strollers, high chairs' },
              { label: 'Toxic materials', desc: 'Lead paint, chemical exposure' },
            ].map((h) => (
              <div key={h.label} className="bg-white border border-border rounded p-2">
                <p className="font-semibold text-navy">{h.label}</p>
                <p className="text-gray-500 mt-0.5">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/products" className="text-xs text-navy-light hover:underline">← All product recalls</Link>
            <Link href="/products/fire-hazards" className="text-xs text-navy-light hover:underline">Fire hazard recalls →</Link>
            <Link href="/articles/childrens-products-recalls-parents-guide" className="text-xs text-navy-light hover:underline">Parents&apos; guide to recalls →</Link>
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
