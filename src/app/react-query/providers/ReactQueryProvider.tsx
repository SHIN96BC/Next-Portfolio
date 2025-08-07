'use client';

import { PropsWithChildren, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  getQueryClient,
  queryClient,
} from '@Src/app/react-query/config/react-query';

/**
 * React Query Provider
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | Promise<AwaitedReactNode> | bigint | undefined | null} children
 * @returns {React.ReactNode}
 * @constructor
 */
export default function ReactQueryProvider({
  children,
}: PropsWithChildren): ReactNode {
  // setter를 선언하지 않은 useState로 QueryClient를 관리함으로써 참조 동일성을 유지
  // const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
