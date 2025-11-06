import { GnbGetRes } from '@Src/entities/site/model/server';
import { CommonRes } from '@Src/shared/libs/service-container';

export default interface SiteService {
  getGnb(): Promise<CommonRes<GnbGetRes[]>>;
}
