import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import VinForm from './VinForm';

export const metadata: Metadata = {
  title: 'VIN Lookup — Check Your Vehicle for Open Recalls | Recall Radar',
  description:
    'Enter your 17-character Vehicle Identification Number to instantly check for open NHTSA safety recalls. Free, no registration required.',
};

interface Props {
  searchParams: Promise<{ vin?: string }>;
}

interface NHTSARecall {
  NHTSACampaignNumber: string;
  Manufacturer: string;
  overallDescription: string;
  conequenceDefect: string;
  correctiveAction: string;
  Component: string;
  ModelYear: string;
  Make: string;
  Model: string;
  ReportReceivedDate: string;
  parkIt: boolean;
  parkOutSide: boolean;
}

function parseNHTSADate(dateStr: string): string {
  const match = dateStr.match(/\/Date\((\d+)\)\//);
  if (match) {
    return new Date(parseInt(match[1])).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }
  return dateStr;
}

async function VinResults({ vin }: { vin: string }) {
  const cleanVin = vin.trim().toUpperCase();

  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(cleanVin)) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
        <p className="font-semibold mb-1">Invalid VIN format</p>
        <p>
          A VIN must be exactly 17 characters and may only contain letters (except I, O, and Q) and
          numbers. Check the VIN on your driver&apos;s door jamb or dashboard.
        </p>
      </div>
    );
  }

  try {
    const decodeRes = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${cleanVin}?format=json`,
      { next: { revalidate: 3600 } }
    );
    const decodeData = await decodeRes.json();
    const results: { Variable: string; Value: string }[] = decodeData.Results ?? [];

    const get = (name: string) => {
      const found = results.find((r) => r.Variable === name);
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
          <p>
            This VIN did not return valid vehicle data from NHTSA. Verify the 17-character VIN from
            your driver&apos;s door jamb or dashboard, then try again.
          </p>
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
          <p className="text-xl font-bold text-navy">
            {modelYear} {make} {model}
          </p>
          {(bodyClass || vehicleType) && (
            <p className="text-sm text-gray-600 mt-0.5">{bodyClass ?? vehicleType}</p>
          )}
          <p className="text-xs text-muted mt-1 font-mono tracking-widest">{cleanVin}</p>
        </div>

        {hasParkWarning && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-sm text-red-800 font-medium">
            NHTSA advises parking this vehicle outside and away from structures, or not driving it,
            until the recall repair is completed.
          </div>
        )}

        {recalls.length === 0 ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
            <p className="text-green-800 font-semibold text-base mb-1">No open recalls found</p>
            <p className="text-sm text-green-700 leading-relaxed">
              NHTSA has no open safety recalls on record for the {modelYear} {make} {model}. New
              recalls can be issued at any time — check back periodically or{' '}
              <Link href="/subscribe" className="underline">
                subscribe to vehicle recall alerts
              </Link>
              .
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm font-semibold text-navy mb-4">
              {recalls.length} open recall{recalls.length !== 1 ? 's' : ''} found for {modelYear}{' '}
              {make} {model}
            </p>
            <div className="space-y-4">
              {recalls.map((recall) => (
                <div
                  key={recall.NHTSACampaignNumber}
                  className="bg-card border border-border rounded-lg p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100 px-2 py-0.5 rounded-full">
                        Campaign #{recall.NHTSACampaignNumber}
                      </span>
                      {(recall.parkIt || recall.parkOutSide) && (
                        <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                          Do Not Drive
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted">{parseNHTSADate(recall.ReportReceivedDate)}</span>
                  </div>

                  <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">Component</p>
                  <p className="text-sm font-medium text-navy mb-3">{recall.Component}</p>

                  {recall.overallDescription && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Description</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{recall.overallDescription}</p>
                    </div>
                  )}

                  {recall.conequenceDefect && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Consequence</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{recall.conequenceDefect}</p>
                    </div>
                  )}

                  {recall.correctiveAction && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Remedy</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{recall.correctiveAction}</p>
                    </div>
                  )}

                  <a
                    href={`https://www.nhtsa.gov/vehicle-safety/recalls#recalls-by-vin`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-navy-light hover:underline mt-1"
                  >
                    View on NHTSA.gov →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } catch {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
        The NHTSA lookup service is temporarily unavailable. Please try again in a moment.
      </div>
    );
  }
}

async function VinLookupContent({ searchParams }: Props) {
  const { vin } = await searchParams;
  return (
    <>
      <VinForm initialVin={vin ?? ''} />
      {vin && (
        <div className="mt-6">
          <Suspense
            fallback={
              <div className="bg-card border border-border rounded-lg p-6 text-center text-sm text-muted">
                Looking up {vin.toUpperCase()}…
              </div>
            }
          >
            <VinResults vin={vin} />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default function VinLookupPage({ searchParams }: Props) {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Vehicle Recall Lookup by VIN</h1>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        Enter your 17-character Vehicle Identification Number to check for open NHTSA safety recalls.
        Your VIN can be found on the driver&apos;s door jamb, dashboard (visible through the windshield),
        or your vehicle registration and insurance documents. Recall repairs at authorized dealerships
        are always <strong>free of charge</strong>.
      </p>

      <Suspense fallback={<VinForm initialVin="" />}>
        <VinLookupContent searchParams={searchParams} />
      </Suspense>

      <div className="mt-10 bg-card border border-border rounded-lg p-5">
        <p className="text-sm font-semibold text-navy mb-3">Where to find your VIN</p>
        <ul className="space-y-2 text-sm text-gray-600">
          {[
            ["Driver's door jamb", "A sticker on the inside edge of the driver's door frame — the most reliable location."],
            ['Dashboard', "Visible through the windshield on the lower driver's side corner."],
            ['Vehicle title and registration', 'Printed on all official ownership and registration documents.'],
            ['Insurance card', 'Most insurance ID cards list the VIN.'],
            ['Engine compartment', 'Often stamped on the firewall or engine block.'],
          ].map(([place, desc]) => (
            <li key={place} className="flex items-start gap-2">
              <span className="text-navy-light font-bold shrink-0 mt-0.5">→</span>
              <span><strong>{place}</strong> — {desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 bg-card border border-border rounded-lg p-5">
        <p className="text-sm font-semibold text-navy mb-2">About this lookup</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          This tool queries NHTSA&apos;s vehicle safety recall database. Your VIN is decoded to
          identify the make, model, and year, and then matched against all open safety recalls for
          that vehicle. NHTSA maintains records of all U.S. safety recalls going back decades. A
          recall can be issued at any time — even for vehicles that are many years old — so periodic
          checks are recommended. This lookup does not cover manufacturer technical service
          bulletins (TSBs) or customer satisfaction programs, which are distinct from safety recalls.
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex flex-wrap gap-3">
        <Link href="/vehicles" className="text-sm text-navy-light hover:underline">
          ← Browse all vehicle recalls
        </Link>
        <Link href="/safety-guide" className="text-sm text-navy-light hover:underline">
          Vehicle safety guide →
        </Link>
      </div>
    </div>
  );
}
