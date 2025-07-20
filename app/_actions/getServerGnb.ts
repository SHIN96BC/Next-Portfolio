import { SERVICE_NAME, serviceContainer } from '@Src/shared/libs/services';
import { SiteGnb } from '@Src/entities/site/model/client/gnb';
import { SiteService } from '@Src/entities/site/api';
import mapServerGnbToClient from '@Src/entities/site/model/mapper/mapServerGnbToClient';

export default async function getServerGnb(): Promise<SiteGnb[]> {
  const service = serviceContainer.get<SiteService>(SERVICE_NAME.SITE);
  const response = await service.getGnb();
  console.log('response = ', response);
  return response.result ? mapServerGnbToClient(response.result) : [];
}
