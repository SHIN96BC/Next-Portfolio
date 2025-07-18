import GuestGuard from '@Src/app/guard/GuestGuard';
import { ReactNode } from 'react';

export default function AuthModalLayout({ children }: { children: ReactNode }) {
  return <GuestGuard>{children}</GuestGuard>;
}
