import { CookieOptions } from '@Libs/cookie/cookie.types';
import CookieBaseJar from '@Libs/cookie/jar/abstract/CookieBaseJar';
import { NextResponse } from 'next/server';

/** 미들웨어용 쿠키(NextResponse 의 cookies 사용) */
export default class ProxyCookieJar extends CookieBaseJar {
  private readonly res: NextResponse;

  constructor(res: NextResponse, secretKey: string) {
    super(secretKey);
    this.res = res;
  }

  get(name: string): string | undefined {
    const raw = this.res.cookies.get(name)?.value;
    if (!raw) return undefined;
    try {
      return this.decrypt(raw); // 공통 복호화 사용
    } catch (e) {
      console.error(`[ProxyCookieJar.get] decrypt failed: ${name}`, e);
      return undefined;
    }
  }

  set(name: string, value: string, options?: CookieOptions): void {
    try {
      const enc = this.encrypt(value); // 공통 암호화 사용
      this.res.cookies.set({ name, value: enc, ...options });
    } catch (e) {
      console.error(`[ProxyCookieJar.set] encrypt failed: ${name}`, e);
    }
  }

  remove(name: string, options?: CookieOptions): void {
    this.res.cookies.set({
      name,
      value: '',
      ...options,
      maxAge: 0,
      expires: new Date(0),
    });
  }
}
