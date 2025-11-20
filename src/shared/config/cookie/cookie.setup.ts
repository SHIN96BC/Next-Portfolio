import { BrowserCookieJar, MiddlewareCookieJar, makeNextServerCookieJar } from '@Libs/cookie';
import { NextResponse } from 'next/server';

export const customBrowserCookie = new BrowserCookieJar(process.env.NEXT_PUBLIC_COOKIE_SECRET_KEY ?? '');

export const createCustomNextServerCookie = (secretKey: string) => makeNextServerCookieJar(secretKey);

export const createCustomMiddlewareCookie = (res: NextResponse, secretKey: string) =>
  new MiddlewareCookieJar(res, secretKey);
