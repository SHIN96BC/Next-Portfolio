import fetchGnbSSR from '@NextApp/_actions/fetchGnbSSR';
import nextAuthOptions from '@Src/app/auth/config/next-auth';
import HomeLayout from '@Src/app/layouts/HomeLayout';
import getThemeCookie from '@Src/shared/config/theme/server-action/getThemeCookie';
import { getServerSession } from 'next-auth';

interface Props {
  children: React.ReactNode;
}

export default async function HomePageLayout({ children }: Props) {
  const session = await getServerSession(nextAuthOptions);
  const gnbList = await fetchGnbSSR();
  const theme = await getThemeCookie();

  return (
    <HomeLayout isLogin={!!session?.accessToken} gnbList={gnbList} themeType={theme}>
      {children}
    </HomeLayout>
  );
}
