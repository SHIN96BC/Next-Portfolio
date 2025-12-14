import { GnbGetRes } from '@FsdEntities/site/model/server';
import { CommonRes } from '@Libs/service-container';

export default interface SiteService {
  getGnb(): Promise<CommonRes<GnbGetRes[]>>;
}
