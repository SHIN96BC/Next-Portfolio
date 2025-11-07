import { LoginForm } from '@Src/features/login/ui';
import { InterceptionModal } from '@Src/shared/modal/ui';

export default function AuthModalLoginPage() {
  return (
    <InterceptionModal maxWidth={500} maxHeight={500}>
      <LoginForm isInterceptionPage />
    </InterceptionModal>
  );
}
