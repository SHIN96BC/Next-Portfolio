import { setupServer } from 'msw/node';
import handlers from '@Src/shared/libs/mocks/handlers';

export const mockServerSetup = setupServer(...handlers);

if (
  typeof window === 'undefined' &&
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
) {
  console.log('[MOCK] SSR mockServerSetup.listen()');
  mockServerSetup.listen({
    onUnhandledRequest: 'warn', // 또는 'warn'
  });
}

export default undefined;
