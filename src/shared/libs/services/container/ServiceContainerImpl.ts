import { BatchBinding, BINDING_SCOPE, Binding, BindingImpl, ServiceContainer } from '@Src/shared/libs/services';

/**
 * API Service IoC Container
 */
class ServiceContainerImpl implements ServiceContainer {
  /**
   * Service Base Instance Map
   * 서비스 베이스 저장소
   * @type {Map<symbol, Binding<any>>}
   * @private
   */
  private readonly servicesBaseBind: Map<symbol, Binding<any>> = new Map<symbol, Binding<any>>();

  /**
   * Service Instance Map
   * 서비스 저장소
   * @type {Map<symbol, Binding<any>>}
   * @private
   */
  private readonly servicesBind: Map<symbol, Binding<any>> = new Map<symbol, Binding<any>>();

  /**
   * Authorization Token
   * 토큰
   * @type {string | null}
   * @private
   */
  private token: string | null = null;

  /**
   * Bind Service
   * 서비스 등록
   * @param {symbol} name
   * @returns {Binding<T>}
   */
  public bind<T>(name: symbol): Binding<T> {
    if (!this.isBound(name)) {
      // const instance = new target();
      const binding = new BindingImpl<T>(name);
      this.servicesBind.set(name, binding);

      return binding;
    }

    throw new Error(`Service ${name.toString()} already bound`);
  }

  /**
   * Bind Service Base
   * 서비스 베이스 등록
   * @param {symbol} name
   * @returns {Binding<T>}
   */
  public baseBind<T>(name: symbol): Binding<T> {
    if (!this.isBaseBound(name)) {
      const binding = new BindingImpl<T>(name);
      this.servicesBaseBind.set(name, binding);

      return binding;
    }

    throw new Error(`Service Base ${name.toString()} already bound`);
  }

  /**
   * Batch Bind Services
   * 서비스 리스트 등록
   * @param {BatchBinding[]} list
   */
  public batchBind(list: BatchBinding[]) {
    list.forEach((batch) => {
      if (!this.isBound(batch.name)) {
        const binding = new BindingImpl(batch.name);
        this.servicesBind.set(batch.name, binding);

        binding.to(batch.target);

        if (batch.baseName) {
          binding.base(batch.baseName);
        }

        switch (batch.scope) {
          case BINDING_SCOPE.SINGLETON:
            binding.inSingletonScope();
            break;
          case BINDING_SCOPE.REQUEST:
            binding.inRequestScope();
            break;
          default:
            binding.inTransientScope();
        }

        binding.build();
      }
    });
  }

  /**
   * Unbind Service
   * 서비스 제거
   * @param {symbol} name
   */
  public unbind(name: symbol): void {
    if (this.isBound(name)) {
      this.servicesBind.delete(name);
      return;
    }

    throw new Error(`Service ${name.toString()} not exists`);
  }

  /**
   * Unbind Service Base
   * 서비스 베이스 제거
   * @param {symbol} name
   */
  public baseUnbind(name: symbol): void {
    if (this.isBaseBound(name)) {
      this.servicesBaseBind.delete(name);
      return;
    }

    throw new Error(`Service Base ${name.toString()} not exists`);
  }

  /**
   * Get Service Instance
   * 서비스 구현체 가져오기
   * @param {symbol} name
   * @returns {T}
   */
  public get<T>(name: symbol): T {
    const binding: Binding<T> | undefined = this.servicesBind.get(name);

    if (!binding) {
      throw new Error(`Service ${name.toString()} not found`);
    }

    let service: T | undefined;

    if (binding.baseName) {
      console.log('binding.baseName = ', binding.baseName.toString());
      const baseBinding = this.servicesBaseBind.get(binding.baseName);

      console.log('baseBinding = ', baseBinding);

      if (baseBinding) {
        service = binding.getInstance(baseBinding.getInstance());
      } else {
        throw new Error(`Service Base ${binding.baseName.toString()} not found`);
      }
    } else {
      service = binding.getInstance();
    }

    if (!service) {
      throw new Error(`Service ${name.toString()} Binding instance not built`);
    }

    if (binding.scope === BINDING_SCOPE.REQUEST) {
      this.unbind(name);
    }

    return service;
  }

  /**
   * Check Service is Bound
   * 서비스 등록 여부 체크
   * @param {symbol} name
   * @returns {boolean}
   */
  public isBound(name: symbol): boolean {
    try {
      const binding = this.servicesBind.get(name);
      return !!binding;
    } catch (e) {
      console.log('isBound error = ', e);
      return false;
    }
  }

  /**
   * Check Service Base is Bound
   * 서비스 베이스 등록 여부 체크
   * @param {symbol} name
   * @returns {boolean}
   * @private
   */
  private isBaseBound(name: symbol): boolean {
    try {
      const binding = this.servicesBaseBind.get(name);
      return !!binding;
    } catch (e) {
      console.log('isBaseBound error = ', e);
      return false;
    }
  }

  /**
   * Set Token Method
   * 토큰 등록
   * @param {string} token
   * @returns {Promise<void>}
   */
  public async setToken(token: string): Promise<void> {
    this.token = token;
    // if (typeof window !== 'undefined') {
    //   CustomLocalStorage.set(AUTH_TOKEN_STORAGE_KEY, token);
    // }
    await this.updateServicesToken(token);
  }

  /**
   * Clear Token Method
   * 토큰 제거
   * @returns {Promise<void>}
   */
  public async clearToken(): Promise<void> {
    this.token = null;
    // if (typeof window !== 'undefined') {
    //   CustomLocalStorage.remove(AUTH_TOKEN_STORAGE_KEY);
    // }
    await this.updateServicesToken(null);
  }

  /**
   * Update Token Method(Service Base Instance)
   * 서비스 베이스들에 토큰 등록
   * (싱글톤으로 설정한 베이스에 토큰을 등록하면 해당 베이스를 생성자 주입받아서 가지고있는 모든 서비스에서 토큰 사용가능)
   * (모든 서비스에 토큰을 등록하는거 보다 시간이 단축됨)
   * @param {string | null} token
   * @returns {Promise<void>}
   * @private
   */
  // token update를 비동기로 병렬처리해서 성능을 향상시킨다.
  private async updateServicesToken(token: string | null): Promise<void> {
    const updates = Array.from(this.servicesBaseBind.values()).map(async (service) => {
      const instance = service.getInstance();
      try {
        if ('setToken' in instance && typeof instance.setToken === 'function') {
          await instance.setToken(token);
        }
      } catch (error) {
        console.error(`Error updating token for service: ${instance}`, error);
      }
    });
    await Promise.all(updates);
  }
}

export default ServiceContainerImpl;
