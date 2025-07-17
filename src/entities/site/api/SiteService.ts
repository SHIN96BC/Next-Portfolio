import { CommonRes } from '@Src/shared/libs/services';
import { GnbGetRes } from '@Src/entities/site/model/server';

export default interface SiteService {
  getGnb(): Promise<CommonRes<GnbGetRes>>;
}
