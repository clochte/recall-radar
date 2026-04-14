export type RecallCategory = 'food' | 'vehicles' | 'medications' | 'products';

export type RecallSeverity = 'urgent' | 'voluntary' | 'unknown';

export interface Recall {
  id: string;
  slug: string;
  category: RecallCategory;
  title: string;
  brand?: string;
  reason: string;
  date: string; // ISO date string
  severity: RecallSeverity;
  sourceUrl: string;
  rawDescription: string;
}

export const CATEGORY_LABELS: Record<RecallCategory, string> = {
  food: 'Food',
  vehicles: 'Vehicles',
  medications: 'Medications',
  products: 'Products',
};

export const CATEGORY_COLORS: Record<RecallCategory, string> = {
  food: 'bg-green-100 text-green-800',
  vehicles: 'bg-blue-100 text-blue-800',
  medications: 'bg-purple-100 text-purple-800',
  products: 'bg-orange-100 text-orange-800',
};
