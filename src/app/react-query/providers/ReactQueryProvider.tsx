'use client';

import { PropsWithChildren, ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@Src/shared/libs/react-query/query-client';

/**
 * React Query Provider
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | Promise<AwaitedReactNode> | bigint | undefined | null} children
 * @returns {React.ReactNode}
 * @constructor
 */
export default function ReactQueryProvider({
  children,
}: PropsWithChildren): ReactNode {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
