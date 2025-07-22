import GuestGuard from '@Src/app/guards/GuestGuard';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GuestGuard>{children}</GuestGuard>;
}
