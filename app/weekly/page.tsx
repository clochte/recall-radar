import type { Metadata } from 'next';
import { getAllRecalls } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory, Recall } from '@/lib/types';
import RecallCard from '@/components/RecallCard';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'New This Week — Latest Safety Recalls',
  description: 'The most recent safety recalls across food, vehicles, medications, and consumer products from FDA, NHTSA, USDA, and CPSC. Updated every few hours.',
};

function buildEditorialSummary(recent: Recall[], byCat: { cat: RecallCategory; count: number }[], urgentCount: number): string {
  const now = Date.now();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  const thisWeekCount = recent.filter((r) => now - new Date(r.date).getTime() < sevenDays).length;

  const top = [...byCat].sort((a, b) => b.count - a.count)[0];
  const dominated = top && top.count > recent.length * 0.4;

  const text = recent.map((r) => `${r.title} ${r.reason}`).join(' ').toLowerCase();
  const hazards: string[] = [];
  if (text.includes('listeria')) hazards.push('Listeria contamination');
  if (text.includes('salmonella')) hazards.push('Salmonella contamination');
  if (text.includes('e. coli') || text.includes('e coli')) hazards.push('E. coli contamination');
  if (['undeclared', 'allergen', 'peanut', 'tree nut', 'wheat', 'shellfish'].some((k) => text.includes(k))) hazards.push('undeclared allergens');
  if (text.includes('fire') || text.includes('overheat')) hazards.push('fire or overheating hazards');
  if (text.includes('airbag') || text.includes('inflator')) hazards.push('airbag defects');

  let weekNote = '';
  if (thisWeekCount > 0) {
    weekNote = `${thisWeekCount} of these recall${thisWeekCount !== 1 ? 's were' : ' was'} issued in the last seven days. `;
  }

  let catNote = '';
  if (dominated) {
    catNote = `${CATEGORY_LABELS[top.cat]} is the dominant category this period, accounting for ${top.count} of the ${recent.length} most recent notices. `;
  } else if (byCat.filter((x) => x.count > 0).length >= 3) {
    catNote = 'Recalls are spread across multiple categories this period. ';
  }

  let hazardNote = '';
  if (hazards.length === 1) {
    hazardNote = `${hazards[0]} appears in multiple current notices. `;
  } else if (hazards.length >= 2) {
    hazardNote = `${hazards[0]} and ${hazards[1]} appear in multiple current notices. `;
  }

  let urgentNote = '';
  if (urgentCount > 0) {
    urgentNote = `${urgentCount} recall${urgentCount !== 1 ? 's are' : ' is'} classified as urgent — meaning the issuing agency has determined a reasonable probability of serious harm or death. Review those before the rest.`;
  } else {
    urgentNote = 'None of the current recalls are classified as urgent, though notices should still be checked against your specific products.';
  }

  return `${weekNote}${catNote}${hazardNote}${urgentNote}`;
}

export default async function WeeklyPage() {
  const recalls = await getAllRecalls();
  const recent = recalls.slice(0, 60);

  const latestDate = recent[0]?.date ?? '';
  const formattedLatest = latestDate
    ? new Date(latestDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    : '';

  const categories: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];
  const byCat = categories
    .map((cat) => ({ cat, count: recent.filter((r) => r.category === cat).length }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count);

  const urgentCount = recent.filter((r) => r.severity === 'urgent').length;
  const editorial = buildEditorialSummary(recent, byCat, urgentCount);

  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <h1 className="text-2xl font-bold text-navy">New This Week</h1>
        <p className="text-gray-600 mt-1 text-sm">
          The {recent.length} most recent recalls across all categories.
          {formattedLatest && <span className="ml-1">Latest: {formattedLatest}.</span>}
        </p>
      </div>

      {/* Editorial summary — generated from live data, unique each load */}
      <div className="bg-card border border-border rounded-lg p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide">Current period summary</p>
          <p className="text-xs text-muted">Reviewed by Chris L.</p>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{editorial}</p>

        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border">
          {byCat.map(({ cat, count }) => (
            <div key={cat} className="text-sm">
              <span className="font-semibold text-navy">{count}</span>
              <span className="text-gray-600 ml-1">{CATEGORY_LABELS[cat]}</span>
            </div>
          ))}
          {urgentCount > 0 && (
            <div className="text-sm">
              <span className="font-semibold text-urgent">{urgentCount}</span>
              <span className="text-gray-600 ml-1">urgent</span>
            </div>
          )}
        </div>
      </div>

      {recent.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {recent.map((r) => (
            <RecallCard key={r.id} recall={r} isNew />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-muted">No recalls found.</p>
      )}

      <div className="mt-10">
        <AdPlaceholder slot="recall-bottom" />
      </div>
    </div>
  );
}
