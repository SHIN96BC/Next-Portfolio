import { BrowserCookieJar, makeNextServerCookieJar } from '@Libs/cookie';

/** 브라우저용 */
export const customBrowserCookie = new BrowserCookieJar(process.env.NEXT_PUBLIC_COOKIE_SECRET_KEY ?? '');

/** 뷰 설정용 public 한 서버용 */
export const createCustomNextPublicServerCookie = () =>
  makeNextServerCookieJar(process.env.NEXT_PUBLIC_COOKIE_SECRET_KEY ?? '');
