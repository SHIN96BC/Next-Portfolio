import { SiteGnb } from '@Src/entities/site/model/client/gnb';
import { HomeHeader } from '@Src/widgets/header/ui';

interface Props {
  isLogin: boolean;
  gnbList: SiteGnb[];
  children: React.ReactNode;
}

export default function HomeLayout({ isLogin, gnbList, children }: Props) {
  return (
    <main>
      <HomeHeader isLogin={isLogin} gnbList={gnbList} />
      {children}
    </main>
  );
}
