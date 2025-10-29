import { SiteGnb } from '@Src/entities/site/model/client/gnb';
import { HomeBtn, LoginBtn, LogoutBtn } from '@Src/entities/site/ui';

interface Props {
  isLogin: boolean;
  gnbList: SiteGnb[];
}

export default function Header({ isLogin, gnbList }: Props) {
  return (
    <header className="sticky top-0 p-4 bg-primary text-white">
      <div className="w-full flex items-center justify-between">
        <div>
          <HomeBtn />
        </div>
        <div>{isLogin ? <LogoutBtn /> : <LoginBtn />}</div>
      </div>
    </header>
  );
}
