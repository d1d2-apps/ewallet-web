import { FiLogOut } from 'react-icons/fi';

import { format } from 'date-fns';

import { Button, Heading } from '@/components/elements';
import { Head } from '@/components/head';
import { useAuth } from '@/features/auth';

import { ChangePasswordForm } from '../../components/ChangePasswordForm/ChangePasswordForm';
import { ChangeProfilePictureForm } from '../../components/ChangeProfilePictureForm/ChangeProfilePictureForm';
import { UpdateProfileForm } from '../../components/UpdateProfileForm/UpdateProfileForm';
import * as S from './ProfilePage.styles';

export function ProfilePage() {
  const { user, signOut } = useAuth();

  const formattedCreatedAt = format(user?.createdAt ? new Date(user.createdAt) : new Date(), "dd/MM/yyyy 'às' HH:mm");
  const formattedUpdatedAt = format(user?.updatedAt ? new Date(user.updatedAt) : new Date(), "dd/MM/yyyy 'às' HH:mm");

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <Head title="Meu perfil" />

      <S.Container>
        <main>
          <S.ProfilePictureSection>
            <div>
              <ChangeProfilePictureForm />

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
            </div>
          </S.ProfilePictureSection>

          <S.ProfileDataSection>
            <header>
              <Heading>Meu perfil</Heading>
            </header>

            <S.ProfileInfoWrapper>
              <section>
                <UpdateProfileForm />
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
