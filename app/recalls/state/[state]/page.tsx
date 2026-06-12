import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRecallsByState, US_STATES } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return US_STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = US_STATES.find((s) => s.slug === stateSlug);
  if (!state) return {};

  const recalls = await getRecallsByState(stateSlug);

  if (!recalls.length) {
    return {
      title: `${state.name} Safety Recalls`,
      description: `No active recalls currently mention ${state.name} by name. Browse all national recalls from FDA, NHTSA, USDA, and CPSC.`,
      robots: { index: false },
    };
  }

  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;
  const urgentClause = urgentCount > 0 ? ` Includes ${urgentCount} urgent notice${urgentCount !== 1 ? 's' : ''}.` : '';

  return {
    title: `${state.name} Safety Recalls`,
    description: `${recalls.length} safety recall${recalls.length !== 1 ? 's' : ''} currently mention ${state.name} — food, vehicles, medications, and consumer products from FDA, NHTSA, USDA, and CPSC.${urgentClause}`,
  };
}

function buildStateContext(
  stateName: string,
  byCat: { cat: RecallCategory; count: number }[],
  total: number,
  urgentCount: number,
): string {
  let catBreakdown = '';
  if (byCat.length === 1) {
    catBreakdown = ` All ${total} are ${CATEGORY_LABELS[byCat[0].cat].toLowerCase()} recall${total !== 1 ? 's' : ''}.`;
  } else if (byCat.length === 2) {
    catBreakdown = ` ${CATEGORY_LABELS[byCat[0].cat]}: ${byCat[0].count}. ${CATEGORY_LABELS[byCat[1].cat]}: ${byCat[1].count}.`;
  } else if (byCat.length >= 3) {
    catBreakdown = ` By category: ${byCat.map((x) => `${CATEGORY_LABELS[x.cat].toLowerCase()} (${x.count})`).join(', ')}.`;
  }

  const urgentNote = urgentCount > 0
    ? ` ${urgentCount} of these recall${urgentCount !== 1 ? 's are' : ' is'} classified as urgent — meaning a reasonable probability of serious harm has been identified. Check those first.`
    : '';

  return `These recalls mention ${stateName} in their official notice — typically because the affected product was distributed there, manufactured at a ${stateName} facility, or sold through retailers with locations in the state.${catBreakdown}${urgentNote} This is not a complete list of all recalls relevant to ${stateName} residents; national recalls issued without state-specific distribution data will not appear here.`;
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params;
  const state = US_STATES.find((s) => s.slug === stateSlug);
  if (!state) notFound();

  const recalls = await getRecallsByState(stateSlug);

  const categories: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];
  const byCat = categories
    .map((cat) => ({ cat, count: recalls.filter((r) => r.category === cat).length }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count);

  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;

  const contextBody = recalls.length > 0
    ? buildStateContext(state.name, byCat, recalls.length, urgentCount)
    : null;

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <nav className="text-sm text-muted mb-3 flex items-center gap-1.5">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link href="/states" className="hover:text-navy">States</Link>
            <span>/</span>
            <span className="text-foreground">{state.name}</span>
          </nav>
          <h1 className="text-2xl font-bold text-navy">{state.name} Safety Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length
              ? `${recalls.length} recall${recalls.length !== 1 ? 's' : ''} currently mention ${state.name} — updated every few hours.`
              : `No active recalls currently mention ${state.name} by name.`}
          </p>
        </div>

        {recalls.length > 0 && (
          <>
            {/* Category breakdown strip */}
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
              <p>{contextBody}</p>
            </div>
          </>
        )}

        {recalls.length > 0 ? (
          <RecallGrid recalls={recalls} />
        ) : (
          <div className="py-12 text-center text-muted">
            <p className="font-medium">No active recalls currently mention {state.name}.</p>
            <p className="text-sm mt-2 max-w-sm mx-auto leading-relaxed">
              Many recalls are distributed nationally without referencing individual states in the notice.
              Browse the full category pages to see all active recalls regardless of state.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
              {(['food', 'vehicles', 'medications', 'products'] as RecallCategory[]).map((cat) => (
                <Link key={cat} href={`/${cat}`} className="text-navy-light hover:underline">
                  {CATEGORY_LABELS[cat]} recalls →
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-[72px]">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
