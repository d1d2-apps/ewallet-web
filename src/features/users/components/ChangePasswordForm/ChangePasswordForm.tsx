import { useForm } from 'react-hook-form';
import { FiKey, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Heading } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';
import { useAlertDialog } from '@/hooks';

import { ChangePasswordDTO, useChangePassword } from '../../api/changePassword';
import * as S from './ChangePasswordForm.styles';

type FormData = ChangePasswordDTO['data'];

const validationSchema = yup
  .object({
    oldPassword: yup.string().required('Senha antiga é obrigatória'),
    password: yup.string().when('oldPassword', {
      is: (val: string) => !!val.length,
      then: yup.string().min(6, 'Mínimo de 6 caracteres'),
      otherwise: yup.string()
    }),
    passwordConfirmation: yup
      .string()
      .when('oldPassword', {
        is: (val: string) => !!val.length,
        then: yup.string().required('Confirmação de senha é obrigatória'),
        otherwise: yup.string()
      })
      .oneOf([yup.ref('password'), undefined], 'Confirmação incorreta')
  })
  .required();

export function ChangePasswordForm() {
  const alertDialog = useAlertDialog();
  const changePasswordMutation = useChangePassword();

  const {
    handleSubmit,
    control,
    reset: resetForm,
    formState: { isSubmitting, isDirty }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      oldPassword: '',
      password: '',
      passwordConfirmation: ''
    }
  });

  const handleSaveProfile = async (formData: FormData) => {
    try {
      await changePasswordMutation.mutateAsync({ data: formData });
      resetForm();
      toast.success('Sua senha foi alterada com sucesso.');
    } catch (err) {
      console.log(err);

      alertDialog.show({
        type: 'error',
        title: 'Não foi possível alterar a sua senha',
        description: 'Ocorreu uma intermitência em nossos serviços. Por favor, tente novamente mais tarde.',
        okButtonLabel: 'Fechar'
      });
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSaveProfile)}>
      <Heading variant="h3" asChild>
        <h3>Altere sua senha</h3>
      </Heading>

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
          name="password"
          control={control}
          type="password"
          label="Sua nova senha"
          icon={FiKey}
          placeholder="********"
        />

        <ControlledTextInput
          name="passwordConfirmation"
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
