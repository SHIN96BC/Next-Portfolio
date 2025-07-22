import { Header } from '@Src/widgets/header/ui';
import { SiteGnb } from '@Src/entities/site/model/client/gnb';

interface Props {
  isLogin: boolean;
  gnbList: SiteGnb[];
  children: React.ReactNode;
}

export default function HomeLayout({ isLogin, gnbList, children }: Props) {
  return (
    <main>
      <Header isLogin={isLogin} gnbList={gnbList} />
      {children}
    </main>
  );
}
