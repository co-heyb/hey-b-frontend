// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessToken } from '@/lib/\bauth/token';
import { authType } from '@/types';

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1]; // Bearer 토큰 추출

    if (!token) {
      return new NextResponse(JSON.stringify({ message: 'accessToken 없음' }), { status: 401 });
    }

    const payload = verifyAccessToken(authHeader); // { userId }

    // TODO: 실제 DB 조회 또는 mock
    const user: authType.User = {
      id: payload.userId,
      email: 'heyb@heyb.kr',
      name: '김지연',
      nickname: '볼빵이',
      profileUrl: '/images/ttotto.png',
      agreedTerms: {
        service: true,
        privacy: true,
        location: false,
        thirdParty: false,
      },
    };

    return NextResponse.json(user);
  } catch (error) {
    console.error('[ME_ERROR]', error);
    return new NextResponse(JSON.stringify({ message: '인증 실패' }), {
      status: 401,
    });
  }
}
