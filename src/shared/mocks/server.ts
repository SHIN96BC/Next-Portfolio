// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import handlers from '@Src/shared/mocks/handlers';

export const mockServer = setupServer(...handlers);

export default undefined;
