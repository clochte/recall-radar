import type { RecallSeverity } from '@/lib/types';

export default function UrgencyBadge({ severity }: { severity: RecallSeverity }) {
  if (severity === 'urgent') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-urgent-bg text-urgent">
        ⚠ Active Recall
      </span>
    );
  }
  if (severity === 'voluntary') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-voluntary-bg text-voluntary">
        Voluntary Recall
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded bg-gray-100 text-muted">
      Notice
    </span>
  );
}
