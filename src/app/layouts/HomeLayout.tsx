import { SiteGnb } from '@Src/entities/site/model/client/gnb';
import { ThemeType } from '@Src/shared/config/theme/model/type';
import { HomeHeader } from '@Src/widgets/header/ui';

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
