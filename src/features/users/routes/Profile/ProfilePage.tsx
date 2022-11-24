import { format } from 'date-fns';
import { FiCamera, FiLogOut } from 'react-icons/fi';

import { useAuth } from '@/stores/auth';

import { Head } from '@/components/head';
import { Button } from '@/components/elements';

import personPlaceholderImg from '@/assets/images/person-placeholder.png';

import { EditProfileForm } from '../../components/EditProfileForm/EditProfileForm';
import { ChangePasswordForm } from '../../components/ChangePasswordForm/ChangePasswordForm';

import * as S from './ProfilePage.styles';

export function ProfilePage() {
  const { user, signOut } = useAuth();

  const formattedCreatedAt = format(user?.createdAt ? new Date(user.createdAt) : new Date(), "dd/MM/yyyy 'às' HH:mm");
  const formattedUpdatedAt = format(user?.updatedAt ? new Date(user.updatedAt) : new Date(), "dd/MM/yyyy 'às' HH:mm");

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <Head title="Meu perfil" />

      <S.Container>
        <main>
          <S.ProfilePictureSection>
            <S.ProfilePicture>
              <img src={user?.picture || personPlaceholderImg} alt={`${user?.name || 'User'}'s profile`} />

              <Button colorScheme="white" isRounded>
                <FiCamera />
              </Button>
            </S.ProfilePicture>

            <Button leftIcon={FiLogOut} colorScheme="white" onClick={handleSignOut}>
              Sair
            </Button>

            <section>
              <div>
                <span>Data de criação</span>
                <strong>{formattedCreatedAt}</strong>
              </div>

              <div>
                <span>Última atualização</span>
                <strong>{formattedUpdatedAt}</strong>
              </div>
            </section>
          </S.ProfilePictureSection>

          <S.ProfileDataSection>
            <header>
              <h2>Meu perfil</h2>
            </header>

            <S.ProfileInfoWrapper>
              <section>
                <EditProfileForm />
              </section>

              <section>
                <ChangePasswordForm />
              </section>
            </S.ProfileInfoWrapper>
          </S.ProfileDataSection>
        </main>
      </S.Container>
    </>
  );
}
