import { getFoodRecalls } from './feeds/fda-food';
import { getMedicationRecalls } from './feeds/fda-drug';
import { getVehicleRecalls } from './feeds/nhtsa';
import { getProductRecalls } from './feeds/cpsc';
import { getUsdaFoodRecalls } from './feeds/usda';
import type { Recall, RecallCategory } from './types';

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
