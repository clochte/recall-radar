import { getFoodRecalls } from './feeds/fda-food';
import { getMedicationRecalls } from './feeds/fda-drug';
import { getVehicleRecalls } from './feeds/nhtsa';
import { getProductRecalls } from './feeds/cpsc';
import type { Recall, RecallCategory } from './types';

export async function getAllRecalls(): Promise<Recall[]> {
  const [food, medications, vehicles, products] = await Promise.allSettled([
    getFoodRecalls(),
    getMedicationRecalls(),
    getVehicleRecalls(),
    getProductRecalls(),
  ]);

  const all = [
    ...(food.status === 'fulfilled' ? food.value : []),
    ...(medications.status === 'fulfilled' ? medications.value : []),
    ...(vehicles.status === 'fulfilled' ? vehicles.value : []),
    ...(products.status === 'fulfilled' ? products.value : []),
  ];

  return all.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getRecallsByCategory(
  category: RecallCategory
): Promise<Recall[]> {
  switch (category) {
    case 'food':
      return getFoodRecalls();
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
