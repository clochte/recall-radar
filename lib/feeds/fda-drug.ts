import { cacheLife } from 'next/cache';
import type { Recall, RecallSeverity } from '../types';
import { generateSlug } from '../slug';

const OPENFDA_URL =
  'https://api.fda.gov/drug/enforcement.json?limit=50&sort=recall_initiation_date:desc';

interface OpenFDAResult {
  recalling_firm?: string;
  product_description?: string;
  reason_for_recall?: string;
  recall_initiation_date?: string; // "20240115"
  status?: string;
  classification?: string; // "Class I", "Class II", "Class III"
  recall_number?: string;
  voluntary_mandated?: string;
}

interface OpenFDAResponse {
  results?: OpenFDAResult[];
}

export async function getMedicationRecalls(): Promise<Recall[]> {
  'use cache';
  cacheLife('hours');

  try {
    const res = await fetch(OPENFDA_URL);
    if (!res.ok) return [];
    const data: OpenFDAResponse = await res.json();

    return (data.results ?? []).map((item) => {
      const title = item.product_description ?? 'Unknown Drug Recall';
      const date = parseFDADate(item.recall_initiation_date ?? '');
      const slug = generateSlug(title, date);

      return {
        id: item.recall_number ?? slug,
        slug,
        category: 'medications',
        title: title.slice(0, 120),
        brand: item.recalling_firm,
        reason: item.reason_for_recall ?? '',
        date,
        severity: fdaClassToSeverity(item.classification, item.status),
        sourceUrl: `https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts`,
        rawDescription: item.reason_for_recall ?? '',
      };
    });
  } catch {
    return [];
  }
}

function parseFDADate(raw: string): string {
  // FDA format: "20240115"
  if (raw.length === 8) {
    const y = raw.slice(0, 4);
    const m = raw.slice(4, 6);
    const d = raw.slice(6, 8);
    return new Date(`${y}-${m}-${d}`).toISOString();
  }
  return new Date().toISOString();
}

function fdaClassToSeverity(
  classification?: string,
  status?: string
): RecallSeverity {
  if (classification === 'Class I') return 'urgent';
  if (classification === 'Class III') return 'voluntary';
  if (status === 'Completed' || status === 'Terminated') return 'voluntary';
  return 'unknown';
}
