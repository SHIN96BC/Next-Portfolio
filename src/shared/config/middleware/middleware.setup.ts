import { MiddlewareContainerImpl } from '@Libs/middleware-container';
import { authMiddleHandler, localeMiddleHandler, loggerMiddleHandler, themeMiddleHandler } from './handlers';

export const middlewareContainer = new MiddlewareContainerImpl()
  .use('auth', authMiddleHandler)
  .use('logger', loggerMiddleHandler)
  .use('locales', localeMiddleHandler)
  .use('theme', themeMiddleHandler)
  .compose('/my-page', ['auth'], { matchType: 'startsWith' })
  .composeGlobal(['locales', 'theme', 'logger']);

export default undefined;
