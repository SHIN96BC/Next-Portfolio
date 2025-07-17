// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw/browser';
import handlers from '@Src/shared/mocks/handlers';

export const mockWorker = setupWorker(...handlers);

export default undefined;
