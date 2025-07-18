import { setupServer } from 'msw/node';
import handlers from '@Src/shared/libs/mocks/handlers';

export const mockServer = setupServer(...handlers);

export default undefined;
