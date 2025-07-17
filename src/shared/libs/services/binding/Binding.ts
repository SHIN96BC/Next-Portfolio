import { BindingScopeType } from '@Src/shared/libs/services';
import { Constructor } from '@Src/shared/libs/services';

export default interface Binding<T> {
  id: number;
  readonly name: symbol;
  baseName?: symbol;
  scope: BindingScopeType;
  getInstance(base?: any): T;
  inTransientScope(): this;
  inSingletonScope(): this;
  inRequestScope(): this;
  to(target: Constructor<T>): this;
  base(name: symbol): this;
  build(): void;
}
