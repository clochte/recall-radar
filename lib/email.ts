import { Resend } from 'resend';
import type { Recall } from './types';
import type { Subscriber } from './kv';
import { CATEGORY_LABELS } from './types';

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendDigest(
  subscriber: Subscriber,
  recalls: Recall[]
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const filtered = recalls.filter(
    (r) =>
      subscriber.categories.length === 0 ||
      subscriber.categories.includes(r.category)
  );

  if (!filtered.length) return;

  const html = buildDigestHtml(filtered, subscriber.frequency);

  await resend.emails.send({
    from: 'Recall Radar <alerts@recallradar.com>',
    to: subscriber.email,
    subject: `Your ${subscriber.frequency === 'daily' ? 'Daily' : 'Weekly'} Recall Digest — ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`,
    html,
  });
}

function buildDigestHtml(recalls: Recall[], frequency: string): string {
  const rows = recalls
    .slice(0, 20)
    .map(
      (r) => `
    <tr>
      <td style="padding:12px;border-bottom:1px solid #e5e7eb;">
        <span style="display:inline-block;background:${r.severity === 'urgent' ? '#fef2f2' : '#eff6ff'};color:${r.severity === 'urgent' ? '#dc2626' : '#2563eb'};font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;margin-bottom:6px;">
          ${r.severity === 'urgent' ? '⚠ URGENT' : 'NOTICE'} &nbsp;·&nbsp; ${CATEGORY_LABELS[r.category]}
        </span><br/>
        <strong style="color:#1e3a5f;font-size:15px;">${r.title}</strong><br/>
        <span style="color:#6b7280;font-size:13px;">${new Date(r.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span><br/>
        <span style="color:#374151;font-size:14px;margin-top:4px;display:block;">${r.reason.slice(0, 180)}${r.reason.length > 180 ? '…' : ''}</span><br/>
        <a href="${r.sourceUrl}" style="color:#2d5282;font-size:13px;">View official recall →</a>
      </td>
    </tr>`
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="background:#1e3a5f;padding:20px 24px;">
      <h1 style="color:white;margin:0;font-size:22px;">📡 Recall Radar</h1>
      <p style="color:#93c5fd;margin:4px 0 0;font-size:13px;">Your ${frequency} safety recall digest — ${recalls.length} recall${recalls.length !== 1 ? 's' : ''} found</p>
    </td></tr>
    <tr><td style="padding:24px;">
      <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
      <p style="color:#9ca3af;font-size:12px;margin-top:24px;">
        You're receiving this because you subscribed at Recall Radar. Data sourced from FDA, NHTSA, and CPSC.
        <br/>This is not medical or legal advice. Always check official sources.
      </p>
    </td></tr>
  </table>
</body>
</html>`;
}
