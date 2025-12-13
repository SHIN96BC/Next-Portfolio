'use server';

import { createCustomNextPublicServerCookie } from '@Src/shared/config/cookie/cookie-public.setup';
import { ThemeType } from '@Src/shared/config/theme/model/type';

export default async function getThemeCookie() {
  const customNextServerCookie = await createCustomNextPublicServerCookie();
  return (customNextServerCookie.get('theme') ?? 'light') as ThemeType;
}
