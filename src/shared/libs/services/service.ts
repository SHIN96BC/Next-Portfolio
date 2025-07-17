import { BatchBinding, SERVICE_NAME } from '@Src/shared/libs/services/index';
import {
  BINDING_SCOPE,
  SERVICE_BASE_NAME,
} from '@Src/shared/libs/services/index';
import { SiteServiceImpl } from '@Src/entities/site/api';
import { ServiceContainer } from '@Src/shared/libs/services/index';
import { ServiceContainerImpl } from '@Src/shared/libs/services/index';
import { CommonServiceBaseImpl } from '@Src/shared/libs/services/index';
import { FileServiceBaseImpl } from '@Src/shared/libs/services/index';
import { CommonServiceBase } from '@Src/shared/libs/services/index';
import { FileServiceBase } from '@Src/shared/libs/services/index';

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
