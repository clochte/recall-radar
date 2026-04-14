import { NextRequest, NextResponse } from 'next/server';
import { removeSubscriber } from '@/lib/kv';

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email || !email.includes('@')) {
    return new NextResponse('Invalid email', { status: 400 });
  }

  await removeSubscriber(decodeURIComponent(email));

  const redirectUrl = new URL('/unsubscribed', request.nextUrl.origin);
  redirectUrl.searchParams.set('email', email);
  return NextResponse.redirect(redirectUrl.toString());
}
