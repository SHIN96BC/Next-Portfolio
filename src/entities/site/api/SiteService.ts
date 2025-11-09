import { CommonRes } from '@Libs/service-container';
import { GnbGetRes } from '@Src/entities/site/model/server';

export default interface SiteService {
  getGnb(): Promise<CommonRes<GnbGetRes[]>>;
}
