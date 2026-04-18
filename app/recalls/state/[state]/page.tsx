import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRecallsByState, US_STATES } from '@/lib/recalls';
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
    title: `${state.name} Recalls`,
    description: `Safety recalls affecting ${state.name} — food, vehicles, medications, and consumer products from FDA, NHTSA, and CPSC.`,
  };
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params;
  const state = US_STATES.find((s) => s.slug === stateSlug);
  if (!state) notFound();

  const recalls = await getRecallsByState(stateSlug);

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
          <h1 className="text-2xl font-bold text-navy">{state.name} Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} mentioning {state.name} — sourced from FDA, NHTSA, and CPSC.
          </p>
          <p className="text-gray-600 mt-2 text-sm max-w-2xl">
            Browse safety recalls affecting {state.name} across food, vehicles, medications, and consumer products. Data is sourced directly from official government feeds and updated every few hours.
          </p>
        </div>
        {recalls.length > 0 ? (
          <RecallGrid recalls={recalls} />
        ) : (
          <p className="py-12 text-center text-muted">No recalls currently mention {state.name}.</p>
        )}
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-[72px]">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
