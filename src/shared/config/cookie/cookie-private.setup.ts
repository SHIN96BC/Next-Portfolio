import { MiddlewareCookieJar, makeNextServerCookieJar } from '@Libs/cookie';
import { NextResponse } from 'next/server';

/** 서버용 (public 과 다른 secret key 사용) */
export const createCustomNextServerCookie = () => makeNextServerCookieJar(process.env.PRIVATE_COOKIE_SECRET_KEY ?? '');

/** 미들웨어용 (public 과 다른 secret key 사용) */
export const createCustomMiddlewareCookie = (res: NextResponse) =>
  new MiddlewareCookieJar(res, process.env.PRIVATE_COOKIE_SECRET_KEY ?? '');
