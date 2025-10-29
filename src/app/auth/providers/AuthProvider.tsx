'use client';

import { clearGraphqlToken, setGraphqlToken } from '@Src/shared/libs/graphql/graphql-client';
import { serviceContainer } from '@Src/shared/libs/services';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';

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
      setGraphqlToken(session.data.accessToken);
    } else {
      serviceContainer.clearToken();
      clearGraphqlToken();
    }
  }, [session]);

  return children;
}
