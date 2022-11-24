import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiMail, FiUser } from 'react-icons/fi';

import { useAuth } from '@/stores/auth';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';

import * as S from './EditProfileForm.styles';

interface FormData {
  name: string;
  email: string;
}

const validationSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('E-mail é obrigatório').email('Formato de e-mail inválido')
  })
  .required();

export function EditProfileForm() {
  const { user } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || ''
    }
  });

  const handleSaveProfile = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSaveProfile)}>
      <h3>Suas informações</h3>

      <div>
        <ControlledTextInput
          name="name"
          control={control}
          label="Seu nome completo"
          icon={FiUser}
          placeholder="Fulano de tal"
        />

        <ControlledTextInput
          name="email"
          control={control}
          type="email"
          label="Seu e-mail"
          icon={FiMail}
          placeholder="fulano@email.com.br"
        />
      </div>

      <Button type="submit" isLoading={isSubmitting} loadingText="Salvando..." disabled={!isDirty}>
        Salvar
      </Button>
    </S.Container>
  );
}
