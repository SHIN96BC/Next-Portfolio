import { setupWorker } from 'msw/browser';
import handlers from '@Src/shared/libs/mocks/handlers';

export const mockWorker = setupWorker(...handlers);

export default undefined;
