import MiddlewareChain from '@Libs/middleware-container/chain/MiddlewareChain';
import { Middleware, MiddlewareChainOption } from '@Libs/middleware-container/middleware.type';

export default interface MiddlewareContainer {
  use(name: string, middleware: Middleware): this;

  compose(name: string, middlewareNames: string[], options?: MiddlewareChainOption): this;

  composeGlobal(middlewareNames: string[]): this;

  resolve(chainName: string): MiddlewareChain | null;

  resolveByPath(path: string): MiddlewareChain | null;
}
