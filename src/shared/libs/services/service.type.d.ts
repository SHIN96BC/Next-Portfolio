import { BindingScopeType } from '@Src/shared/libs/services';

export type Constructor<T = any> = new (...args: any[]) => T;

export type BatchBinding = {
  name: symbol;
  target: Constructor;
  baseName: symbol;
  scope: BindingScopeType;
};
