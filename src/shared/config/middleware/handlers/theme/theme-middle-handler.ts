import { Middleware, NextHandler } from '@Libs/middleware-container';
import { NextRequest } from 'next/server';

/**
 * 테마 설정을 위한 핸들러
 */
const themeMiddleHandler: Middleware = async (req: NextRequest, next: NextHandler) => {
  // 체인을 계속 실행
  return next(req);
};

export default themeMiddleHandler;
