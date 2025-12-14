'use client';

import setThemeCookie from '@FsdShared/config/theme/server-action/setThemeCookie';
import { startTransition } from 'react';

/** TODO: theme 변경 시 즉시 반영이 안되고 쿠키 세팅때문에 살짝 딜레이가 있어서 redux-persist + localStorage 같은거 써서 반영을 빠르게 해야할 듯 */
export default function ThemeToggle({ themeType = 'light' as 'light' | 'dark', path = '/' }) {
  const next = themeType === 'dark' ? 'light' : 'dark';
  return (
    <button
      className="px-3 py-2 rounded border bg-background text-foreground cursor-pointer"
      onClick={() => startTransition(() => setThemeCookie(next, path))}
    >
      {themeType === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
