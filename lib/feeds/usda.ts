import { cacheLife } from 'next/cache';
import type { Recall, RecallSeverity } from '../types';
import { generateSlug } from '../slug';

const USDA_FSIS_API = 'https://www.fsis.usda.gov/fsis/api/recall/v/1';

interface UsdaRecallItem {
  establishment?: string;
  recall_number?: string;
  recall_reason_description?: string;
  recall_classification?: string;
  recall_type?: string;
  press_release_date?: string;
  recall_date?: string;
  product_items?: Array<{ product_name?: string }>;
  closed_date?: string | null;
}

function toISODate(dateStr: string | undefined): string {
  if (!dateStr) return new Date().toISOString();
  try {
    return new Date(dateStr).toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function classificationToSeverity(classification: string | undefined): RecallSeverity {
  if (!classification) return 'unknown';
  const c = classification.toLowerCase();
  if (c.includes('class i') && !c.includes('class ii')) return 'urgent';
  if (c.includes('class iii')) return 'voluntary';
  return 'unknown';
}

export async function getUsdaFoodRecalls(): Promise<Recall[]> {
  'use cache';
  cacheLife('hours');

  try {
    const res = await fetch(USDA_FSIS_API);
    if (!res.ok) return [];

    const data: UsdaRecallItem[] = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((item) => {
      const productName = item.product_items?.[0]?.product_name;
      const title = productName ?? `${item.establishment ?? 'Unknown'} Recall`;
      const dateStr = item.press_release_date ?? item.recall_date;
      const isoDate = toISODate(dateStr);
      const slug = generateSlug(title, isoDate);

      return {
        id: item.recall_number ?? slug,
        slug,
        category: 'food',
        title,
        brand: item.establishment,
        reason: item.recall_reason_description ?? '',
        date: isoDate,
        severity: classificationToSeverity(item.recall_classification),
        sourceUrl: 'https://www.fsis.usda.gov/recalls',
        rawDescription: item.recall_reason_description ?? '',
      };
    });
  } catch {
    return [];
  }
}
