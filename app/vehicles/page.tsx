import type { Metadata } from 'next';
import { getVehicleRecalls } from '@/lib/feeds/nhtsa';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Vehicle Recalls',
  description: 'Latest vehicle safety recalls from NHTSA. Updated every few hours.',
};

export default async function VehiclesPage() {
  const recalls = await getVehicleRecalls();

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
        <div className="py-6 border-b border-border mb-6">
          <p className="text-sm text-muted mb-1">Source: NHTSA Vehicle Safety Recalls</p>
          <h1 className="text-2xl font-bold text-navy">Vehicle Recalls</h1>
          <p className="text-gray-600 mt-1 text-sm">
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — sourced from the National Highway Traffic Safety Administration.
          </p>
          <p className="text-gray-600 mt-2 text-sm max-w-2xl">
            Browse the latest NHTSA vehicle safety recalls covering defective parts, brake failures, airbag issues, and other hazards. All recalls are sourced from the National Highway Traffic Safety Administration.
          </p>
        </div>
        <RecallGrid recalls={recalls} />
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-[72px]">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
