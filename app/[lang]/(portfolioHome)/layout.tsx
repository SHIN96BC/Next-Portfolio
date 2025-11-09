import fetchGnbSSR from '@NextApp/_actions/fetchGnbSSR';
import nextAuthOptions from '@Src/app/auth/config/next-auth';
import HomeLayout from '@Src/app/layouts/HomeLayout';
import { getServerSession } from 'next-auth';

interface Props {
  children: React.ReactNode;
}

export default async function HomePageLayout({ children }: Props) {
  const session = await getServerSession(nextAuthOptions);
  const gnbList = await fetchGnbSSR();

  return (
    <HomeLayout isLogin={!!session?.accessToken} gnbList={gnbList}>
      {children}
    </HomeLayout>
  );
}
