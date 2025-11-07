import nextAuthOptions from '@Src/app/auth/config/next-auth';
import SocialLayout from '@Src/app/layouts/SocialLayout';
import { getServerSession } from 'next-auth';

interface Props {
  children: React.ReactNode;
}

export default async function SocialPageLayout({ children }: Props) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <SocialLayout isLogin={!!session?.accessToken} gnbList={[]}>
      {children}
    </SocialLayout>
  );
}
