import { SiteService } from '@Src/entities/site/api';
import { SiteGnb } from '@Src/entities/site/model/client/gnb';
import mapServerGnbToClient from '@Src/entities/site/model/mapper/map-server-gnb-to-client';
import { SERVICE_NAME, serviceContainer } from '@Src/shared/libs/service-container';

export default async function fetchGnbSSR(): Promise<SiteGnb[]> {
  const service = serviceContainer.get<SiteService>(SERVICE_NAME.SITE);
  const response = await service.getGnb();

  return response.result ? mapServerGnbToClient(response.result) : [];
}
