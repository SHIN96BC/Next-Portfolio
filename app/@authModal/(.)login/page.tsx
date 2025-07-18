import InterceptionModal from '@Src/shared/modal/ui/InterceptionModal';
import LoginForm from '@Src/features/login/ui/LoginForm';

export default function AuthModalLoginPage() {
  return (
    <InterceptionModal maxWidth={500} maxHeight={500}>
      <LoginForm isInterceptionPage />
    </InterceptionModal>
  );
}
