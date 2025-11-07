import { authMiddleHandler, loggerMiddleHandler, MiddlewareContainerImpl } from '../../../libs/middleware-container';

export const middlewareContainer = new MiddlewareContainerImpl()
  .use('auth', authMiddleHandler)
  .use('logger', loggerMiddleHandler)
  .compose('/admin', ['auth', 'logger'])
  .compose('/dashboard', ['auth'])
  .compose('/', ['logger']);

export default undefined;
