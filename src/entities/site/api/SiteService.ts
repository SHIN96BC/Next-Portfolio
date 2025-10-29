import { GnbGetRes } from '@Src/entities/site/model/server';
import { CommonRes } from '@Src/shared/libs/services';

export default interface SiteService {
  getGnb(): Promise<CommonRes<GnbGetRes[]>>;
}
