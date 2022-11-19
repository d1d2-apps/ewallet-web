import { useAuth } from '@/stores/auth';

export function ProfilePage() {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <h2>Profile Page</h2>

      <button type="button" onClick={handleSignOut}>
        Sair
      </button>
    </div>
  );
}
