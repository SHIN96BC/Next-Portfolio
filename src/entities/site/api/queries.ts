import { CommonRes, serviceContainer } from '@Src/shared/libs/services';
import { SiteService } from '@Src/entities/site/api';
import { SERVICE_NAME } from '@Src/shared/libs/services';
import { SiteGnb } from '@Src/entities/site/model/client/gnb';
import mapServerGnbToClient from '@Src/entities/site/model/mapper/mapServerGnbToClient';

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
    queryFn: async (): Promise<CommonRes<SiteGnb[]>> => {
      const service = serviceContainer.get<SiteService>(SERVICE_NAME.SITE);
      const response = await service.getGnb(); // CommonRes<GnbGetRes[]>

      return {
        ...response,
        result: response.result
          ? mapServerGnbToClient(response.result)
          : undefined,
      };
    },
  }),
};

export default queryOptions;
