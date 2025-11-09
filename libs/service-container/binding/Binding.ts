import { BindingScopeType } from '@Libs/service-container/service-constants';
import { Constructor } from '@Libs/service-container/service-type';

export default interface Binding<T> {
  id: number;
  readonly name: symbol;
  baseName?: symbol;
  scope: BindingScopeType;
  getInstance(base?: unknown): T;
  inTransientScope(): this;
  inSingletonScope(): this;
  inRequestScope(): this;
  to(target: Constructor<T>): this;
  base(name: symbol): this;
  build(): void;
}
