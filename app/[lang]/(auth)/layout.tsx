import GuestGuard from '@Src/app/auth/guards/GuestGuard';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <GuestGuard>{children}</GuestGuard>;
}
