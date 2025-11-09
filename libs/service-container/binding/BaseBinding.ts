import { BindingScopeType } from '@Libs/service-container/service-constants';
import { Constructor } from '@Libs/service-container/service-type';

export default interface BaseBinding<T> {
  id: number;
  readonly name: symbol;
  // baseName, base() 없음! 베이스 바인딩엔 허용하지 않음
  scope: BindingScopeType;
  getInstance(): T;
  inSingletonScope(): this;
  inRequestScope(): this;
  inTransientScope(): this;
  to(ctor: Constructor<T>): this;
  build(): void;
}
