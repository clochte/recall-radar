import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import VinForm from './VinForm';
import VehicleSearchForm from './VehicleSearchForm';

export const metadata: Metadata = {
  title: 'Vehicle Recall & Complaint Lookup | Recall Radar',
  description:
    'Check any vehicle for open NHTSA safety recalls and owner-filed complaints. Search by VIN for a precise match, or by make, model, and year. Free, no registration required.',
};

interface Props {
  searchParams: Promise<{ vin?: string; tab?: string; make?: string; model?: string; year?: string }>;
}

interface NHTSARecall {
  NHTSACampaignNumber: string;
  overallDescription: string;
  conequenceDefect: string;
  correctiveAction: string;
  Component: string;
  ReportReceivedDate: string;
  parkIt: boolean;
  parkOutSide: boolean;
}

interface NHTSAComplaint {
  odiNumber: number;
  crash: boolean;
  fire: boolean;
  numberOfInjuries: number;
  numberOfDeaths: number;
  dateOfIncident: string;
  components: string;
  summary: string;
}

function parseNHTSADate(dateStr: string): string {
  const match = dateStr.match(/\/Date\((\d+)\)\//);
  if (match) {
    return new Date(parseInt(match[1])).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
    });
  }
  return dateStr;
}

function formatIncidentDate(dateStr: string): string {
  if (!dateStr || dateStr.length < 8) return dateStr;
  try {
    return new Date(
      parseInt(dateStr.slice(0, 4)),
      parseInt(dateStr.slice(4, 6)) - 1,
      parseInt(dateStr.slice(6, 8))
    ).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

function RecallCards({ recalls, label }: { recalls: NHTSARecall[]; label: string }) {
  if (recalls.length === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
        No open safety recalls found for this {label}.
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {recalls.map((recall) => (
        <div key={recall.NHTSACampaignNumber} className="bg-card border border-border rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100 px-2 py-0.5 rounded-full">
              #{recall.NHTSACampaignNumber}
            </span>
            {(recall.parkIt || recall.parkOutSide) && (
              <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                Do Not Drive
              </span>
            )}
            <span className="text-xs text-muted ml-auto">{parseNHTSADate(recall.ReportReceivedDate)}</span>
          </div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">Component</p>
          <p className="text-sm font-medium text-navy mb-2">{recall.Component}</p>
          {recall.overallDescription && (
            <p className="text-sm text-gray-700 leading-relaxed mb-2">{recall.overallDescription}</p>
          )}
          {recall.correctiveAction && (
            <>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">Remedy</p>
              <p className="text-sm text-gray-600 leading-relaxed">{recall.correctiveAction}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function ComplaintCards({ complaints, make, model, year }: {
  complaints: NHTSAComplaint[];
  make: string;
  model: string;
  year: string;
}) {
  if (complaints.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 text-sm text-gray-600">
        No complaints on record for this vehicle.
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {complaints.slice(0, 10).map((complaint) => (
        <div key={complaint.odiNumber} className="bg-card border border-border rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <span className="text-xs text-muted">ODI #{complaint.odiNumber}</span>
            {complaint.crash && (
              <span className="text-xs bg-red-50 text-red-700 border border-red-100 px-1.5 py-0.5 rounded">Crash</span>
            )}
            {complaint.fire && (
              <span className="text-xs bg-orange-50 text-orange-700 border border-orange-100 px-1.5 py-0.5 rounded">Fire</span>
            )}
            {complaint.numberOfInjuries > 0 && (
              <span className="text-xs bg-amber-50 text-amber-700 border border-amber-100 px-1.5 py-0.5 rounded">
                {complaint.numberOfInjuries} {complaint.numberOfInjuries === 1 ? 'injury' : 'injuries'}
              </span>
            )}
            {complaint.numberOfDeaths > 0 && (
              <span className="text-xs bg-red-100 text-red-800 border border-red-200 px-1.5 py-0.5 rounded font-semibold">
                {complaint.numberOfDeaths} {complaint.numberOfDeaths === 1 ? 'fatality' : 'fatalities'}
              </span>
            )}
            <span className="text-xs text-muted ml-auto">{formatIncidentDate(complaint.dateOfIncident)}</span>
          </div>
          {complaint.components && (
            <p className="text-xs font-medium text-navy mb-1">{complaint.components}</p>
          )}
          <p className="text-sm text-gray-700 leading-relaxed">{complaint.summary}</p>
        </div>
      ))}
      {complaints.length > 10 && (
        <p className="text-xs text-center text-muted pt-1">
          Showing 10 of {complaints.length} complaints.{' '}
          <a
            href={`https://www.nhtsa.gov/vehicle/complaints#${year}/${encodeURIComponent(make)}/${encodeURIComponent(model)}/VIN/complaints`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-light hover:underline"
          >
            View all on NHTSA.gov →
          </a>
        </p>
      )}
    </div>
  );
}

// --- VIN Results ---
async function VinResults({ vin }: { vin: string }) {
  const cleanVin = vin.trim().toUpperCase();

  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(cleanVin)) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
        <p className="font-semibold mb-1">Invalid VIN format</p>
        <p>A VIN must be exactly 17 characters containing only letters (except I, O, Q) and numbers.</p>
      </div>
    );
  }

  try {
    const decodeRes = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${cleanVin}?format=json`,
      { next: { revalidate: 3600 } }
    );
    const decodeData = await decodeRes.json();
    const vars: { Variable: string; Value: string }[] = decodeData.Results ?? [];
    const get = (name: string) => {
      const found = vars.find((r) => r.Variable === name);
      return found?.Value && found.Value !== 'null' && found.Value !== '' ? found.Value : null;
    };

    const make = get('Make');
    const model = get('Model');
    const modelYear = get('Model Year');
    const bodyClass = get('Body Class');
    const vehicleType = get('Vehicle Type');

    if (!make || !model || !modelYear) {
      return (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
          <p className="font-semibold mb-1">VIN could not be decoded</p>
          <p>Verify the 17-character VIN from your driver&apos;s door jamb or dashboard and try again.</p>
        </div>
      );
    }

    const recallsRes = await fetch(
      `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&modelYear=${encodeURIComponent(modelYear)}`,
      { next: { revalidate: 3600 } }
    );
    const recallsData = await recallsRes.json();
    const recalls: NHTSARecall[] = recallsData.results ?? [];
    const hasParkWarning = recalls.some((r) => r.parkIt || r.parkOutSide);

    return (
      <div>
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Vehicle Identified</p>
          <p className="text-xl font-bold text-navy">{modelYear} {make} {model}</p>
          {(bodyClass || vehicleType) && (
            <p className="text-sm text-gray-600 mt-0.5">{bodyClass ?? vehicleType}</p>
          )}
          <p className="text-xs text-muted mt-1 font-mono tracking-widest">{cleanVin}</p>
        </div>

        {hasParkWarning && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-sm text-red-800 font-medium">
            NHTSA advises parking this vehicle outside and away from structures until the recall repair is completed.
          </div>
        )}

        <h2 className="text-base font-semibold text-navy mb-3">
          Safety Recalls ({recalls.length})
        </h2>
        <RecallCards recalls={recalls} label={`${modelYear} ${make} ${model}`} />

        <p className="text-xs text-muted mt-4">
          Use the <Link href="/vin-lookup?tab=vehicle" className="text-navy-light hover:underline">Make / Model / Year tab</Link> to also view owner complaints for this vehicle.
        </p>
      </div>
    );
  } catch {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
        The NHTSA lookup service is temporarily unavailable. Please try again.
      </div>
    );
  }
}

// --- Vehicle Results (Make / Model / Year) ---
async function VehicleResults({ make, model, year }: { make: string; model: string; year: string }) {
  try {
    const [recallsRes, complaintsRes] = await Promise.all([
      fetch(
        `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&modelYear=${encodeURIComponent(year)}`,
        { next: { revalidate: 3600 } }
      ),
      fetch(
        `https://api.nhtsa.gov/complaints/complaintsByVehicle?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&modelYear=${encodeURIComponent(year)}`,
        { next: { revalidate: 3600 } }
      ),
    ]);

    const recallsData = await recallsRes.json();
    const complaintsData = await complaintsRes.json();
    const recalls: NHTSARecall[] = recallsData.results ?? [];
    const complaints: NHTSAComplaint[] = complaintsData.results ?? [];

    const totalInjuries = complaints.reduce((sum, c) => sum + (c.numberOfInjuries || 0), 0);
    const totalDeaths = complaints.reduce((sum, c) => sum + (c.numberOfDeaths || 0), 0);
    const crashCount = complaints.filter((c) => c.crash).length;
    const hasParkWarning = recalls.some((r) => r.parkIt || r.parkOutSide);

    return (
      <div>
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Vehicle</p>
          <p className="text-xl font-bold text-navy">{year} {make} {model}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Open Recalls', value: recalls.length, color: recalls.length > 0 ? 'text-red-600' : 'text-green-600' },
            { label: 'Total Complaints', value: complaints.length, color: complaints.length > 50 ? 'text-amber-700' : 'text-navy' },
            { label: 'Injuries Reported', value: totalInjuries, color: totalInjuries > 0 ? 'text-amber-700' : 'text-navy' },
            { label: 'Crashes in Reports', value: crashCount, color: crashCount > 0 ? 'text-amber-700' : 'text-navy' },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-3 text-center">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted mt-0.5 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {hasParkWarning && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-sm text-red-800 font-medium">
            NHTSA advises not driving or parking inside a structure until the recall repair is completed.
          </div>
        )}

        {totalDeaths > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-sm text-red-800">
            Owner complaint reports for this vehicle include {totalDeaths} reported {totalDeaths === 1 ? 'fatality' : 'fatalities'}.
          </div>
        )}

        <section className="mb-8">
          <h2 className="text-base font-semibold text-navy mb-3">Safety Recalls ({recalls.length})</h2>
          <RecallCards recalls={recalls} label={`${year} ${make} ${model}`} />
        </section>

        <section>
          <h2 className="text-base font-semibold text-navy mb-1">
            Owner Complaints ({complaints.length})
          </h2>
          <p className="text-xs text-muted mb-3">
            Complaints filed directly with NHTSA by owners. A rising complaint count can signal an
            emerging defect before a formal recall is issued — NHTSA uses complaint volumes to decide
            whether to open an investigation.
          </p>
          <ComplaintCards complaints={complaints} make={make} model={model} year={year} />
        </section>
      </div>
    );
  } catch {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
        The NHTSA service is temporarily unavailable. Please try again.
      </div>
    );
  }
}

// --- Content (reads searchParams — must be inside Suspense) ---
async function VinLookupContent({ searchParams }: Props) {
  const params = await searchParams;
  const tab = params.tab === 'vehicle' ? 'vehicle' : 'vin';

  const tabClass = (active: boolean) =>
    `px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
      active ? 'border-navy text-navy' : 'border-transparent text-muted hover:text-navy'
    }`;

  return (
    <div>
      <div className="flex border-b border-border mb-6">
        <Link href="/vin-lookup" className={tabClass(tab === 'vin')}>
          Search by VIN
        </Link>
        <Link href="/vin-lookup?tab=vehicle" className={tabClass(tab === 'vehicle')}>
          By Make / Model / Year
        </Link>
      </div>

      {tab === 'vehicle' ? (
        <>
          <VehicleSearchForm
            initialMake={params.make ?? ''}
            initialModel={params.model ?? ''}
            initialYear={params.year ?? ''}
          />
          {params.make && params.model && params.year && (
            <div className="mt-6">
              <Suspense
                fallback={
                  <div className="bg-card border border-border rounded-lg p-6 text-center text-sm text-muted">
                    Looking up {params.year} {params.make.toUpperCase()} {params.model.toUpperCase()}…
                  </div>
                }
              >
                <VehicleResults make={params.make} model={params.model} year={params.year} />
              </Suspense>
            </div>
          )}
        </>
      ) : (
        <>
          <VinForm initialVin={params.vin ?? ''} />
          {params.vin && (
            <div className="mt-6">
              <Suspense
                fallback={
                  <div className="bg-card border border-border rounded-lg p-6 text-center text-sm text-muted">
                    Looking up {params.vin.toUpperCase()}…
                  </div>
                }
              >
                <VinResults vin={params.vin} />
              </Suspense>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// --- Page shell (sync) ---
export default function VinLookupPage({ searchParams }: Props) {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Vehicle Recall &amp; Complaint Lookup</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        Check any vehicle for open NHTSA safety recalls and owner-filed complaints. Search by VIN
        for a precise vehicle match, or by make, model, and year to research any vehicle — including
        ones you&apos;re considering buying. Recall repairs at dealerships are always{' '}
        <strong>free of charge</strong>.
      </p>

      <Suspense
        fallback={
          <div>
            <div className="flex border-b border-border mb-6">
              <span className="px-4 py-2.5 text-sm font-medium border-b-2 border-navy text-navy -mb-px">Search by VIN</span>
              <span className="px-4 py-2.5 text-sm font-medium border-b-2 border-transparent text-muted">By Make / Model / Year</span>
            </div>
            <VinForm initialVin="" />
          </div>
        }
      >
        <VinLookupContent searchParams={searchParams} />
      </Suspense>

      <div className="mt-10 bg-card border border-border rounded-lg p-5">
        <p className="text-sm font-semibold text-navy mb-3">Where to find your VIN</p>
        <ul className="space-y-2 text-sm text-gray-600">
          {[
            ["Driver's door jamb", "A sticker on the inside edge of the driver's door frame — the most reliable location."],
            ['Dashboard', "Visible through the windshield on the lower driver's side corner."],
            ['Vehicle title / registration', 'Printed on all official ownership documents.'],
            ['Insurance card', 'Most insurance ID cards include the VIN.'],
          ].map(([place, desc]) => (
            <li key={place} className="flex items-start gap-2">
              <span className="text-navy-light font-bold shrink-0 mt-0.5">→</span>
              <span><strong>{place}</strong> — {desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 bg-card border border-border rounded-lg p-5">
        <p className="text-sm font-semibold text-navy mb-2">Recalls vs. complaints</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          <strong>Recalls</strong> are official NHTSA safety campaigns — confirmed defects that
          manufacturers are required to repair for free. <strong>Complaints</strong> are unverified
          reports filed by individual owners. Complaints are not proof of a defect, but NHTSA
          analysts monitor complaint volumes to decide whether to open a formal investigation that
          may eventually result in a recall.
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-3">
        <Link href="/vehicles" className="text-sm text-navy-light hover:underline">← Browse all vehicle recalls</Link>
        <Link href="/safety-guide" className="text-sm text-navy-light hover:underline">Vehicle safety guide →</Link>
      </div>
    </div>
  );
}
