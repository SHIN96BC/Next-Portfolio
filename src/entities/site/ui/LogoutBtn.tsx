'use client';

import { useCallback } from 'react';
import { signOut } from 'next-auth/react';

export default function LogoutBtn() {
  const handleLogout = useCallback(() => {
    signOut({ redirect: true, callbackUrl: '/' });
  }, []);

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}
