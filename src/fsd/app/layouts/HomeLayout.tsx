import { SiteGnb } from '@FsdEntities/site/model/client/gnb';
import { ThemeType } from '@FsdShared/config/theme/model/type';
import { HomeHeader } from '@FsdWidgets/header/ui';

interface Props {
  isLogin: boolean;
  gnbList: SiteGnb[];
  themeType: ThemeType;
  children: React.ReactNode;
}

export default function HomeLayout({ isLogin, gnbList, themeType, children }: Props) {
  return (
    <main>
      <HomeHeader isLogin={isLogin} gnbList={gnbList} themeType={themeType} />
      {children}
    </main>
  );
}
