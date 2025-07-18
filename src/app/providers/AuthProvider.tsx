'use client';

import { ReactNode, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { serviceContainer } from '@Src/shared/libs/services';

/**
 * Auth Provider
 * @param {React.ReactNode} children
 * @returns {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | Promise<AwaitedReactNode> | bigint | undefined | null | boolean}
 * @constructor
 */
export default function AuthProvider({ children }: { children: ReactNode }) {
  const session = useSession();

  useEffect(() => {
    console.log('useSession session = ', session);
    if (session && session.data && session.data.accessToken) {
      console.log('AuthProvider Effect');
      serviceContainer.setToken(session.data.accessToken);
    } else {
      serviceContainer.clearToken();
    }
  }, [session]);

  return children;
}
