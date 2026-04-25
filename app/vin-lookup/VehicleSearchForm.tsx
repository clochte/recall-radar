'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MAKES = [
  'ACURA', 'ALFA ROMEO', 'ASTON MARTIN', 'AUDI', 'BENTLEY', 'BMW', 'BUICK',
  'CADILLAC', 'CHEVROLET', 'CHRYSLER', 'DODGE', 'FERRARI', 'FIAT', 'FORD',
  'GENESIS', 'GMC', 'HONDA', 'HYUNDAI', 'INFINITI', 'JAGUAR', 'JEEP', 'KIA',
  'LAMBORGHINI', 'LAND ROVER', 'LEXUS', 'LINCOLN', 'MASERATI', 'MAZDA',
  'MERCEDES-BENZ', 'MINI', 'MITSUBISHI', 'NISSAN', 'PORSCHE', 'RAM',
  'RIVIAN', 'ROLLS-ROYCE', 'SUBARU', 'TESLA', 'TOYOTA', 'VOLKSWAGEN', 'VOLVO',
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1979 }, (_, i) => currentYear - i);

interface Props {
  initialMake: string;
  initialModel: string;
  initialYear: string;
}

export default function VehicleSearchForm({ initialMake, initialModel, initialYear }: Props) {
  const [make, setMake] = useState(initialMake);
  const [model, setModel] = useState(initialModel);
  const [year, setYear] = useState(initialYear);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const m = make.trim().toUpperCase();
    const mo = model.trim().toUpperCase();
    if (!m || !mo || !year) return;
    router.push(
      `/vin-lookup?tab=vehicle&make=${encodeURIComponent(m)}&model=${encodeURIComponent(mo)}&year=${encodeURIComponent(year)}`
    );
  };

  const isValid = make.trim() && model.trim() && year;

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1">
            Make
          </label>
          <input
            list="vehicle-makes"
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="e.g. FORD"
            autoComplete="off"
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light uppercase"
          />
          <datalist id="vehicle-makes">
            {MAKES.map((m) => <option key={m} value={m} />)}
          </datalist>
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1">
            Model
          </label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="e.g. F-150"
            autoComplete="off"
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light uppercase"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wide mb-1">
            Year
          </label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full px-3 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light bg-white"
          >
            <option value="">Select year…</option>
            {YEARS.map((y) => (
              <option key={y} value={String(y)}>{y}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="px-6 py-2.5 bg-navy text-white font-semibold rounded-md text-sm hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Search Recalls &amp; Complaints
      </button>
    </form>
  );
}
