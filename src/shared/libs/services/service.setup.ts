import { SiteServiceImpl } from '@Src/entities/site/api';
import {
  BatchBinding,
  BINDING_SCOPE,
  CommonServiceBase,
  CommonServiceBaseImpl,
  FileServiceBase,
  FileServiceBaseImpl,
  SERVICE_BASE_NAME,
  SERVICE_NAME,
  ServiceContainer,
  ServiceContainerImpl,
} from '@Src/shared/libs/services';

const serviceBatchList: BatchBinding[] = [
  {
    name: SERVICE_NAME.SITE,
    target: SiteServiceImpl,
    baseName: SERVICE_BASE_NAME.COMMON_BASE,
    scope: BINDING_SCOPE.SINGLETON,
  },
];

/**
 * Service Container Instance
 * @type {ServiceContainer}
 */
const serviceContainer: ServiceContainer = new ServiceContainerImpl();

/// ///////////////////////////////////////////////////////////////////////////////////////////////
// region - Dependency Injection
/// ///////////////////////////////////////////////////////////////////////////////////////////////

// * Bind Service Base
serviceContainer
  .baseBind<CommonServiceBase>(SERVICE_BASE_NAME.COMMON_BASE)
  .to(CommonServiceBaseImpl)
  .inSingletonScope()
  .build();

serviceContainer
  .baseBind<FileServiceBase>(SERVICE_BASE_NAME.FILE_BASE)
  .to(FileServiceBaseImpl)
  .inSingletonScope()
  .build();

// * Bind Service
// service 하나씩 수동 등록
// serviceContainer
//   .bind<TestService>(SERVICE_NAME.TEST)
//   .to(TestServiceImpl)
//   .base(SERVICE_BASE_NAME.COMMON_BASE)
//   .inSingletonScope()
//   .build();

// service 한번에 batch 등록
serviceContainer.batchBind(serviceBatchList ?? []);

/// ///////////////////////////////////////////////////////////////////////////////////////////////
// endregion - Dependency Injection
/// ///////////////////////////////////////////////////////////////////////////////////////////////

export { serviceContainer };

export default undefined;
