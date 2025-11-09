import { Middleware, NextHandler } from '@Libs/middleware-container';
import { NextRequest } from 'next/server';

/**
 * loggerMiddleware
 *
 * 요청 URL, 메서드, 시간 등을 콘솔에 출력하는 기본 로깅 미들웨어
 */
const loggerMiddleHandler: Middleware = async (req: NextRequest, next: NextHandler) => {
  // biome-ignore lint/suspicious/noConsole: 로깅 시스템
  console.log(`[Logger] ${req.method} ${req.nextUrl.pathname} @ ${new Date().toISOString()}`);
  return next(req);
};

export default loggerMiddleHandler;
