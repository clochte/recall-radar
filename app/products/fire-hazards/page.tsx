import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductRecalls } from '@/lib/feeds/cpsc';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Fire & Electrical Hazard Product Recalls — CPSC Alerts',
  description:
    'Active CPSC recalls for consumer products with fire, burn, overheating, or electrical shock hazards. Covers lithium-ion battery failures, faulty chargers, power strips, space heaters, and other electrical products.',
};

const FIRE_KEYWORDS = [
  'fire', 'burn', 'overheat', 'overheating', 'ignit', 'combust', 'flame',
  'smoke', 'thermal', 'battery', 'lithium', 'charger', 'electrical', 'shock',
  'electrocution', 'arc', 'short circuit', 'wiring', 'spark', 'explosion',
];

export default async function FireHazardRecallsPage() {
  const all = await getProductRecalls();
  const recalls = all.filter((r) => {
    const text = `${r.title} ${r.rawDescription} ${r.reason}`.toLowerCase();
    return FIRE_KEYWORDS.some((k) => text.includes(k));
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
            <span className="text-foreground">Fire &amp; Electrical Hazards</span>
          </nav>
          <p className="text-sm text-muted mb-1">Source: CPSC Consumer Product Safety Commission</p>
          <h1 className="text-2xl font-bold text-navy">Fire &amp; Electrical Hazard Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} involving fire or electrical hazards — updated every few hours.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">Fire and Electrical Hazards in Consumer Products</h2>
          <p>
            Fire and electrical hazards are among the most urgent recall categories because the risk can
            materialize rapidly and without warning. The CPSC estimates that roughly 50,000 home fires
            annually involve electrical failures in consumer products, including appliances, power strips,
            chargers, and lighting. Products recalled for fire hazards are almost always classified as
            urgent because a fire can cause property damage, injury, or death within minutes of ignition.
          </p>
          <p>
            Lithium-ion battery failures are the most common fire hazard in modern product recalls. These
            batteries — found in e-bikes, scooters, power banks, laptops, earbuds, and hundreds of other
            devices — can undergo thermal runaway, a chain reaction in which the battery generates more
            heat than it can dissipate. Thermal runaway can cause the battery to smoke, catch fire, or
            explode. It can occur during charging, during use, or while the device is idle. The primary
            triggers are manufacturing defects, physical damage, overcharging, exposure to heat, and
            counterfeit or substandard cells.
          </p>
          <p>
            Electrical shock hazards arise from faulty wiring, inadequate insulation, improper grounding,
            or design defects that allow live conductors to be accessible. Products recalled for shock risk
            include power strips, extension cords, small appliances, outdoor power equipment, and
            lighting products.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-800">
            <strong>If you have a recalled fire or battery hazard product:</strong> Disconnect it from
            power immediately. Do not charge it. Keep it away from flammable materials in a cool,
            ventilated space until you can return or dispose of it. Do not leave any battery-powered
            product recalled for overheating plugged in and unattended.
          </div>
          {urgentCount > 0 && (
            <p className="font-medium text-urgent">
              {urgentCount} of the current recalls {urgentCount !== 1 ? 'are' : 'is'} classified as urgent.
            </p>
          )}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/products" className="text-xs text-navy-light hover:underline">← All product recalls</Link>
            <Link href="/products/children" className="text-xs text-navy-light hover:underline">Children&apos;s product recalls →</Link>
            <Link href="/articles/electronics-fire-hazard-recalls" className="text-xs text-navy-light hover:underline">Electronics fire hazard guide →</Link>
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
