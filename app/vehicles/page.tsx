import type { Metadata } from 'next';
import { getVehicleRecalls } from '@/lib/feeds/nhtsa';
import RecallGrid from '@/components/RecallGrid';
import AdPlaceholder from '@/components/AdPlaceholder';

export const metadata: Metadata = {
  title: 'Vehicle Recalls — NHTSA Safety Defects',
  description:
    'Browse the latest NHTSA vehicle safety recalls. Covers defective airbags, brake failures, steering issues, fire risks, and other safety defects. Updated every few hours.',
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
            {recalls.length} recall{recalls.length !== 1 ? 's' : ''} — updated every few hours from the National Highway Traffic Safety Administration.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-5 mb-8 space-y-4 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-base font-semibold text-navy">About Vehicle Safety Recalls</h2>
          <p>
            Vehicle safety recalls are issued when a car, truck, SUV, motorcycle, or other motor vehicle —
            or a component like tires, car seats, or equipment — is found to have a safety defect or does not
            comply with federal safety standards. In the U.S., the National Highway Traffic Safety Administration
            (NHTSA) oversees vehicle recalls and maintains the national recall database.
          </p>
          <p>
            Recalls can be initiated voluntarily by a manufacturer who discovers a defect, or they can be
            ordered by NHTSA after an investigation. Common causes include defective airbag inflators (such as
            the widespread Takata airbag recalls), fuel system leaks, brake component failures, steering defects,
            electrical fires, and software errors in safety-critical systems. Even relatively minor issues —
            like a faulty seatbelt latch or an incorrect label on a tire — can trigger a recall if they
            affect safe operation.
          </p>
          <p>
            Unlike many product recalls, <strong>vehicle safety recalls are always free for the owner.</strong> Dealers
            and manufacturers are legally required to repair the defect at no cost to you, regardless of the
            age of the vehicle or whether it is still under warranty. If a dealer charges you for a recall
            repair, you can file a complaint with NHTSA.
          </p>
          <p>
            To find out if your specific vehicle is affected by an open recall, check NHTSA&apos;s VIN lookup
            tool at <span className="font-medium">nhtsa.gov/recalls</span> using your 17-character Vehicle Identification Number,
            which is printed on the driver&apos;s side door frame and on your registration documents. A recall
            notice may also be mailed directly to the registered owner. If you buy a used vehicle, always
            check for open recalls before purchasing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {[
              { label: 'Check Your VIN', desc: 'Visit nhtsa.gov/recalls to see if your vehicle has an open recall.' },
              { label: 'Repairs Are Free', desc: 'Dealers must fix safety defects at no cost, regardless of warranty status.' },
            ].map((tip) => (
              <div key={tip.label} className="bg-white border border-border rounded p-3">
                <p className="font-semibold text-sm text-navy">{tip.label}</p>
                <p className="text-xs text-gray-600 mt-0.5">{tip.desc}</p>
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
