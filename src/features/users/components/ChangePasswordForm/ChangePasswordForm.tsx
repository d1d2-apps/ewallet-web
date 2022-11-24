import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiKey, FiLock } from 'react-icons/fi';

import { useAuth } from '@/stores/auth';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';

import * as S from './ChangePasswordForm.styles';

interface FormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

const validationSchema = yup
  .object({
    oldPassword: yup.string(),
    newPassword: yup.string().when('oldPassword', {
      is: (val: string) => !!val.length,
      then: yup.string().min(6, 'Mínimo de 6 caracteres'),
      otherwise: yup.string()
    }),
    newPasswordConfirmation: yup
      .string()
      .when('oldPassword', {
        is: (val: string) => !!val.length,
        then: yup.string().min(6, 'Mínimo de 6 caracteres'),
        otherwise: yup.string()
      })
      .oneOf([yup.ref('newPassword'), undefined], 'Confirmação incorreta')
  })
  .required();

export function ChangePasswordForm() {
  const { user } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isDirty }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirmation: ''
    }
  });

  const handleSaveProfile = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSaveProfile)}>
      <h3>Altere sua senha</h3>

      <div>
        <ControlledTextInput
          name="oldPassword"
          control={control}
          type="password"
          label="Sua senha antiga"
          icon={FiLock}
          placeholder="********"
        />

        <ControlledTextInput
          name="newPassword"
          control={control}
          type="password"
          label="Sua nova senha"
          icon={FiKey}
          placeholder="********"
        />

        <ControlledTextInput
          name="newPasswordConfirmation"
          control={control}
          type="password"
          label="Confirme sua nova senha"
          icon={FiKey}
          placeholder="********"
        />
      </div>

      <Button type="submit" isLoading={isSubmitting} loadingText="Alterando..." disabled={!isDirty}>
        Alterar
      </Button>
    </S.Container>
  );
}
