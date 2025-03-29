// app/api/auth/refresh/route.ts

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyRefreshToken, createAccessToken } from '@/lib/\bauth/token';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;

    if (!refreshToken) {
      return new NextResponse(JSON.stringify({ message: '리프레시 토큰이 없습니다.' }), { status: 401 });
    }

    const payload = verifyRefreshToken(refreshToken);
    const newAccessToken = createAccessToken(payload.userId);

    return NextResponse.json({ accessToken: newAccessToken });
  } catch (error) {
    console.error('[REFRESH_TOKEN_ERROR]', error);
    return new NextResponse(JSON.stringify({ message: '토큰이 유효하지 않거나 만료되었습니다.' }), { status: 403 });
  }
}
