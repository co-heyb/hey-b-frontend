import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = cookies();
  (await cookieStore).set('refreshToken', '', {
    path: '/',
    httpOnly: true,
    maxAge: 0, // 쿠키 즉시 삭제
  });

  return NextResponse.json({ success: true });
}
