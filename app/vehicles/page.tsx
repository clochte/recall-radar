import type { Metadata } from 'next';
import { getVehicleRecalls } from '@/lib/feeds/nhtsa';
import RecallGrid from '@/components/RecallGrid';

export const metadata: Metadata = {
  title: 'Vehicle Recalls',
  description: 'Latest vehicle safety recalls from NHTSA. Updated every few hours.',
};

export default async function VehiclesPage() {
  const recalls = await getVehicleRecalls();

  return (
    <div>
      <div className="py-6 border-b border-border mb-6">
        <p className="text-sm text-muted mb-1">Source: NHTSA Vehicle Safety Recalls</p>
        <h1 className="text-2xl font-bold text-navy">Vehicle Recalls</h1>
        <p className="text-gray-600 mt-1 text-sm">
          {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — sourced from the National Highway Traffic Safety Administration.
        </p>
      </div>
      <RecallGrid recalls={recalls} />
    </div>
  );
}
