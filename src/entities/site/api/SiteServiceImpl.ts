import SiteService from '@Src/entities/site/api/SiteService';
import { CommonRes, CommonServiceBase } from '@Src/shared/libs/services';
import { GnbGetRes } from '@Src/entities/site/model/server';

class SiteServiceImpl implements SiteService {
  /**
   * API Service 객체(DIP 원칙에 따라 구현체가 아닌 Interface(CommonServiceBase)에만 의존
   * @type {CommonServiceBase}
   * @private
   */
  private readonly base: CommonServiceBase;

  /**
   * 생성자 주입 방식 사용
   * @param {CommonServiceBase} base
   */
  constructor(base: CommonServiceBase) {
    this.base = base;
  }

  /**
   * GNB 조회
   * @returns {Promise<CommonRes<GnbGetRes>>}
   */
  getGnb(): Promise<CommonRes<GnbGetRes[]>> {
    return this.base.http.get<CommonRes<GnbGetRes[]>>('/site/gnb');
  }
}

export default SiteServiceImpl;
