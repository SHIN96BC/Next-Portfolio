import { HomeBtn, LoginBtn, LogoutBtn } from '@Src/entities/site/ui';
import { useSession } from 'next-auth/react';

export default function Header() {
  const session = useSession();

  return (
    <header className="sticky top-0 p-4 bg-primary text-white">
      <div className="w-full flex items-center justify-between">
        <div>
          <HomeBtn />
        </div>
        <div>{session && session.data ? <LogoutBtn /> : <LoginBtn />}</div>
      </div>
    </header>
  );
}
