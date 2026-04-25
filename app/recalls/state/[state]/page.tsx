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
  return {
    title: `${state.name} Safety Recalls`,
    description: `Safety recalls mentioning ${state.name} — food, vehicles, medications, and consumer products from FDA, NHTSA, USDA, and CPSC. Updated every few hours.`,
  };
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params;
  const state = US_STATES.find((s) => s.slug === stateSlug);
  if (!state) notFound();

  const recalls = await getRecallsByState(stateSlug);

  const categories: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];
  const byCat = categories
    .map((cat) => ({ cat, count: recalls.filter((r) => r.category === cat).length }))
    .filter((x) => x.count > 0);

  const urgentCount = recalls.filter((r) => r.severity === 'urgent').length;

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
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} currently mention {state.name} — updated every few hours.
          </p>
        </div>

        {recalls.length > 0 && (
          <>
            {/* Category strip */}
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
                These recalls mention <strong>{state.name}</strong> in their official notice — typically
                because the affected product was distributed there, manufactured at a facility in the
                state, or sold through retailers with locations in {state.name}. This list may not include
                every recall relevant to {state.name} residents; browse the full category pages for a
                complete picture of active recalls.
              </p>
              {urgentCount > 0 && (
                <p className="mt-2 text-red-700 font-medium">
                  {urgentCount} of these recall{urgentCount !== 1 ? 's are' : ' is'} classified as urgent
                  — meaning there is a reasonable probability of serious harm. Review those notices first.
                </p>
              )}
            </div>
          </>
        )}

        {recalls.length > 0 ? (
          <RecallGrid recalls={recalls} />
        ) : (
          <div className="py-12 text-center text-muted">
            <p>No active recalls currently mention {state.name}.</p>
            <p className="text-sm mt-2">
              This does not mean there are no recalls relevant to {state.name} residents —
              many recalls are national in scope and do not reference individual states.{' '}
              <Link href="/" className="text-navy-light hover:underline">
                Browse all active recalls →
              </Link>
            </p>
          </div>
        )}
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-[72px]">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
