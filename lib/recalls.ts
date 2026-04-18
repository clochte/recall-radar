import { getFoodRecalls } from './feeds/fda-food';
import { getMedicationRecalls } from './feeds/fda-drug';
import { getVehicleRecalls } from './feeds/nhtsa';
import { getProductRecalls } from './feeds/cpsc';
import { getUsdaFoodRecalls } from './feeds/usda';
import type { Recall, RecallCategory } from './types';

export const US_STATES = [
  { name: 'Alabama', slug: 'alabama' },
  { name: 'Alaska', slug: 'alaska' },
  { name: 'Arizona', slug: 'arizona' },
  { name: 'Arkansas', slug: 'arkansas' },
  { name: 'California', slug: 'california' },
  { name: 'Colorado', slug: 'colorado' },
  { name: 'Connecticut', slug: 'connecticut' },
  { name: 'Delaware', slug: 'delaware' },
  { name: 'Florida', slug: 'florida' },
  { name: 'Georgia', slug: 'georgia' },
  { name: 'Hawaii', slug: 'hawaii' },
  { name: 'Idaho', slug: 'idaho' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Indiana', slug: 'indiana' },
  { name: 'Iowa', slug: 'iowa' },
  { name: 'Kansas', slug: 'kansas' },
  { name: 'Kentucky', slug: 'kentucky' },
  { name: 'Louisiana', slug: 'louisiana' },
  { name: 'Maine', slug: 'maine' },
  { name: 'Maryland', slug: 'maryland' },
  { name: 'Massachusetts', slug: 'massachusetts' },
  { name: 'Michigan', slug: 'michigan' },
  { name: 'Minnesota', slug: 'minnesota' },
  { name: 'Mississippi', slug: 'mississippi' },
  { name: 'Missouri', slug: 'missouri' },
  { name: 'Montana', slug: 'montana' },
  { name: 'Nebraska', slug: 'nebraska' },
  { name: 'Nevada', slug: 'nevada' },
  { name: 'New Hampshire', slug: 'new-hampshire' },
  { name: 'New Jersey', slug: 'new-jersey' },
  { name: 'New Mexico', slug: 'new-mexico' },
  { name: 'New York', slug: 'new-york' },
  { name: 'North Carolina', slug: 'north-carolina' },
  { name: 'North Dakota', slug: 'north-dakota' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Oklahoma', slug: 'oklahoma' },
  { name: 'Oregon', slug: 'oregon' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Rhode Island', slug: 'rhode-island' },
  { name: 'South Carolina', slug: 'south-carolina' },
  { name: 'South Dakota', slug: 'south-dakota' },
  { name: 'Tennessee', slug: 'tennessee' },
  { name: 'Texas', slug: 'texas' },
  { name: 'Utah', slug: 'utah' },
  { name: 'Vermont', slug: 'vermont' },
  { name: 'Virginia', slug: 'virginia' },
  { name: 'Washington', slug: 'washington' },
  { name: 'West Virginia', slug: 'west-virginia' },
  { name: 'Wisconsin', slug: 'wisconsin' },
  { name: 'Wyoming', slug: 'wyoming' },
];

export async function getAllRecalls(): Promise<Recall[]> {
  const [food, medications, vehicles, products, usdaFood] = await Promise.allSettled([
    getFoodRecalls(),
    getMedicationRecalls(),
    getVehicleRecalls(),
    getProductRecalls(),
    getUsdaFoodRecalls(),
  ]);

  const all = [
    ...(food.status === 'fulfilled' ? food.value : []),
    ...(medications.status === 'fulfilled' ? medications.value : []),
    ...(vehicles.status === 'fulfilled' ? vehicles.value : []),
    ...(products.status === 'fulfilled' ? products.value : []),
    ...(usdaFood.status === 'fulfilled' ? usdaFood.value : []),
  ];

  return all.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getRecallsByCategory(
  category: RecallCategory
): Promise<Recall[]> {
  switch (category) {
    case 'food': {
      const [fda, usda] = await Promise.allSettled([getFoodRecalls(), getUsdaFoodRecalls()]);
      const combined = [
        ...(fda.status === 'fulfilled' ? fda.value : []),
        ...(usda.status === 'fulfilled' ? usda.value : []),
      ];
      return combined.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    case 'medications':
      return getMedicationRecalls();
    case 'vehicles':
      return getVehicleRecalls();
    case 'products':
      return getProductRecalls();
  }
}

export async function getRecallBySlug(
  category: RecallCategory,
  slug: string
): Promise<Recall | null> {
  const recalls = await getRecallsByCategory(category);
  return recalls.find((r) => r.slug === slug) ?? null;
}

export async function getAllBrands(): Promise<{ slug: string; name: string; count: number }[]> {
  const recalls = await getAllRecalls();
  const map = new Map<string, { name: string; count: number }>();
  for (const r of recalls) {
    if (!r.brand) continue;
    const slug = r.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (!slug) continue;
    const existing = map.get(slug);
    if (existing) {
      existing.count++;
    } else {
      map.set(slug, { name: r.brand, count: 1 });
    }
  }
  return Array.from(map.entries())
    .map(([slug, { name, count }]) => ({ slug, name, count }))
    .filter(b => b.count >= 1)
    .sort((a, b) => b.count - a.count);
}

export async function getRecallsByBrand(brandSlug: string): Promise<Recall[]> {
  const recalls = await getAllRecalls();
  return recalls.filter((r) => {
    if (!r.brand) return false;
    const slug = r.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return slug === brandSlug;
  });
}

export async function getRecallsByState(stateSlug: string): Promise<Recall[]> {
  const state = US_STATES.find((s) => s.slug === stateSlug);
  if (!state) return [];
  const recalls = await getAllRecalls();
  const name = state.name.toLowerCase();
  return recalls.filter(
    (r) =>
      r.title.toLowerCase().includes(name) ||
      r.reason.toLowerCase().includes(name) ||
      r.rawDescription.toLowerCase().includes(name)
  );
}

export async function getAllStateCounts(): Promise<{ slug: string; name: string; count: number }[]> {
  const recalls = await getAllRecalls();
  return US_STATES.map((state) => {
    const name = state.name.toLowerCase();
    const count = recalls.filter(
      (r) =>
        r.title.toLowerCase().includes(name) ||
        r.reason.toLowerCase().includes(name) ||
        r.rawDescription.toLowerCase().includes(name)
    ).length;
    return { slug: state.slug, name: state.name, count };
  }).sort((a, b) => b.count - a.count);
}
