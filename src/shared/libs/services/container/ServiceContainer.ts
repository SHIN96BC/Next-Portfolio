import { BatchBinding } from '@Src/shared/libs/services';
import { Binding } from '@Src/shared/libs/services';

export default interface ServiceContainer {
  bind<T>(name: symbol): Binding<T>;
  baseBind<T>(name: symbol): Binding<T>;
  batchBind(list: BatchBinding[]): void;
  unbind(name: symbol): void;
  baseUnbind(name: symbol): void;
  get<T>(name: symbol): T;
  isBound(name: symbol): boolean;
  setToken(token: string): Promise<void>;
  clearToken(): Promise<void>;
}
