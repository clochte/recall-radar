import { NextRequest, NextResponse } from 'next/server';
import { removeSubscriber } from '@/lib/kv';

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email || !email.includes('@')) {
    return new NextResponse('Invalid email', { status: 400 });
  }

  await removeSubscriber(decodeURIComponent(email));

  return new NextResponse(
    `<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;max-width:480px;margin:80px auto;text-align:center;">
      <h2 style="color:#1e3a5f;">Unsubscribed</h2>
      <p style="color:#6b7280;">You've been removed from Recall Radar alerts.</p>
      <a href="${process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.com'}" style="color:#2d5282;">Back to Recall Radar →</a>
    </body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
