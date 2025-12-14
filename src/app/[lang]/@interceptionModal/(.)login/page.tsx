import { LoginForm } from '@FsdFeatures/login/ui';
import { InterceptionModal } from '@FsdShared/modal/ui';

export default function AuthModalLoginPage() {
  return (
    <InterceptionModal maxWidth={500} maxHeight={500}>
      <LoginForm isInterceptionPage />
    </InterceptionModal>
  );
}
