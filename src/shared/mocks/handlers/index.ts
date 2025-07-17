import fileMockHandler from './file/fileMockHandler';
import siteHandler from '@Src/shared/mocks/handlers/site/siteHandler';

export const addDelay = async (response: any, delay = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, delay)); // delay 밀리초 대기
  return response;
};

export default [...fileMockHandler, ...siteHandler];
