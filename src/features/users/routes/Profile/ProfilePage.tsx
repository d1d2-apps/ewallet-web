import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/stores/auth';

export function ProfilePage() {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/');
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
