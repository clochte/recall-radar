import type { Metadata } from 'next';
import { getProductRecalls } from '@/lib/feeds/cpsc';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Consumer Product Recalls — CPSC Safety Alerts',
  description:
    'Browse the latest CPSC consumer product recalls. Covers fire hazards, choking risks, electrical defects, injury risks, and other safety issues with household and consumer products.',
};

export default async function ProductsPage() {
  const recalls = await getProductRecalls();

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <p className="text-sm text-muted mb-1">Source: CPSC Consumer Product Safety Commission</p>
          <h1 className="text-2xl font-bold text-navy">Consumer Product Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — updated every few hours from the U.S. Consumer Product Safety Commission.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">About Consumer Product Recalls</h2>
          <p>
            Consumer product recalls are issued when a product sold to the public presents an unreasonable
            risk of injury or death. The U.S. Consumer Product Safety Commission (CPSC) is the federal agency
            responsible for overseeing the safety of thousands of consumer products — from household appliances
            and furniture to children&apos;s toys, clothing, power tools, and recreational equipment.
          </p>
          <p>
            Recalls can be initiated voluntarily by the manufacturer or retailer, or they can result from
            a CPSC investigation following reports of consumer injuries or incidents. Common hazards that
            trigger product recalls include fire and burn risks (particularly from overheating lithium-ion
            batteries, faulty wiring, or flammable materials), laceration and puncture hazards from structural
            failures, choking and strangulation risks in children&apos;s products, toxic chemical exposures,
            fall hazards from unstable furniture, and tip-over risks from appliances or large items.
          </p>
          <p>
            Recalled consumer products often come with a remedy — usually a free repair, a replacement,
            or a refund. To claim your remedy, you typically need to register the recall on the
            manufacturer&apos;s website or call their recall hotline. The CPSC recall notice will list the
            exact steps. In some cases — particularly for hazardous items like certain baby products or
            items with high injury risk — the CPSC may advise you to stop using the product immediately
            and dispose of it rather than return it.
          </p>
          <p>
            If you have children, pay particular attention to recalls involving toys, cribs, car seats,
            strollers, and infant sleep products. The CPSC maintains a separate registration system for
            these items at SaferProducts.gov, where you can report unsafe products and track recalls
            that affect products you own.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {[
              { label: 'Fire & Burn', desc: 'Overheating batteries, electrical faults, flammable materials' },
              { label: 'Injury Risk', desc: 'Structural failures, sharp edges, fall and tip-over hazards' },
              { label: 'Child Safety', desc: 'Choking hazards, strangulation risks, toxic materials in toys' },
            ].map((cat) => (
              <div key={cat.label} className="bg-white border border-border rounded p-3">
                <p className="font-semibold text-sm text-navy">{cat.label}</p>
                <p className="text-xs text-gray-600 mt-0.5">{cat.desc}</p>
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
