'use server';

import { createCustomNextPublicServerCookie } from '@Src/shared/config/cookie/cookie-public.setup';
import { COOKIE_DEFAULT_AGE } from '@Src/shared/config/cookie/model';
import { revalidatePath } from 'next/cache';

export default async function setThemeCookie(theme: 'light' | 'dark', path = '/') {
  const customNextServerCookie = await createCustomNextPublicServerCookie();
  customNextServerCookie.set('theme', theme, { path: '/', maxAge: COOKIE_DEFAULT_AGE, sameSite: 'lax' });
  revalidatePath(path);
}
