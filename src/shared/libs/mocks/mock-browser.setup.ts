import handlers from '@Src/shared/libs/mocks/handlers';
import { setupWorker } from 'msw/browser';

export const mockWorker = setupWorker(...handlers);

export default undefined;
