import nextAuthOptions from '@FsdApp/auth/config/next-auth';
import HomeLayout from '@FsdApp/layouts/HomeLayout';
import getThemeCookie from '@FsdShared/config/theme/server-action/getThemeCookie';
import fetchGnbSSR from '@NextApp/_actions/fetchGnbSSR';
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
