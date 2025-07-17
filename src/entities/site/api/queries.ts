import { serviceContainer } from '@Src/shared/libs/services';
import { SiteService } from '@Src/entities/site/api';
import { SERVICE_NAME } from '@Src/shared/libs/services';

/**
 * React Query Keys Object
 * @type {{findGnb: readonly [string]}}
 */
const queryKeys = {
  findGnb: ['findGnb'] as const,
};

const queryOptions = {
  findGnb: () => ({
    queryKey: queryKeys.findGnb,
    queryFn: () => {
      return serviceContainer.get<SiteService>(SERVICE_NAME.SITE).getGnb();
    },
  }),
};

export default queryOptions;
