import { authType } from '@/types';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createAccessToken, createRefreshToken } from '@/lib/\bauth/token';

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as authType.LoginPayload;
    const { email, password, autoLogin } = body;

    // mock login
    if (email === 'heyb@heyb.kr' && password === 'heyb1234!') {
      const user: authType.User = {
        id: 'heyb',
        email,
        name: '김지연',
        nickname: '볼빵이',
        profileUrl: null,
        agreedTerms: null,
      };

      // 토큰 발급
      const accessToken = createAccessToken(user.id);
      const refreshToken = createRefreshToken(user.id);

      (await cookies()).set('refreshToken', refreshToken, {
        httpOnly: true,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: autoLogin ? 60 * 60 * 24 * 7 : 60 * 60 * 1, // 7일 vs 1시간
      });

      return NextResponse.json({
        user,
        accessToken,
      });
    }

    return new NextResponse(JSON.stringify({ message: '이메일 또는 비밀번호가 틀렸습니다.' }), {
      status: 401,
    });
  } catch (error) {
    console.error('[LOGIN_ERROR]', error);
    return new NextResponse(JSON.stringify({ message: '서버 오류가 발생했습니다.' }), {
      status: 500,
    });
  }
}
