import { BrowserCookieJar, makeNextServerCookieJar, ProxyCookieJar } from '@Libs/cookie';
import { NextResponse } from 'next/server';

/** 브라우저용 */
export const customBrowserCookie = new BrowserCookieJar(process.env.NEXT_PUBLIC_COOKIE_SECRET_KEY ?? '');

/** 뷰 설정용 public 한 서버용 */
export const createCustomPublicNextServerCookie = () =>
  makeNextServerCookieJar(process.env.NEXT_PUBLIC_COOKIE_SECRET_KEY ?? '');

export const createCustomPublicProxyCookie = (res: NextResponse) =>
  new ProxyCookieJar(res, process.env.NEXT_PUBLIC_COOKIE_SECRET_KEY ?? '');
