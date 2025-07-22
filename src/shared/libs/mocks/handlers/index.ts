import fileMockHandler from './file/fileMockHandler';
import siteMockHandler from './site/siteMockHandler';

export const addDelay = async (response: any, delay = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, delay)); // delay 밀리초 대기
  return response;
};

export default [...fileMockHandler, ...siteMockHandler];
