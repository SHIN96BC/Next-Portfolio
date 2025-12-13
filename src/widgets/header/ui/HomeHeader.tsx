import { SiteGnb } from '@Src/entities/site/model/client/gnb';
import { HomeBtn, LoginBtn, LogoutBtn } from '@Src/entities/site/ui';
import { ThemeType } from '@Src/shared/config/theme/model/type';
import ThemeToggle from '../../../features/theme/ui/ThemeToggle';

interface Props {
  isLogin: boolean;
  gnbList: SiteGnb[];
  themeType: ThemeType;
}

export default function HomeHeader({ isLogin, gnbList, themeType }: Props) {
  return (
    <header className="sticky top-0 p-4 bg-primary text-white">
      <div className="w-full flex items-center justify-between">
        <div>
          <HomeBtn />
        </div>
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <ThemeToggle themeType={themeType} />
          </div>
          <div>{isLogin ? <LogoutBtn /> : <LoginBtn />}</div>
        </div>
      </div>
    </header>
  );
}
