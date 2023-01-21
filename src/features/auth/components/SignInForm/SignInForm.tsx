import { useForm } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';
import { useAuth } from '@/features/auth';
import { useAlertDialog } from '@/hooks';

import { SignInCredentialsDTO } from '../../api/signin';
import * as S from './SignInForm.styles';

type FormData = SignInCredentialsDTO['data'];

interface SignInFormProps {
  onSuccess: () => void;
}

const validationSchema = yup
  .object({
    email: yup.string().required('E-mail é obrigatório').email('Formato de e-mail inválido'),
    password: yup.string().required('Senha é orbigatória')
  })
  .required();

export function SignInForm({ onSuccess }: SignInFormProps) {
  const { signIn } = useAuth();

  const alertDialog = useAlertDialog();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleSignIn = async (formData: FormData) => {
    try {
      await signIn({ data: formData });
      onSuccess();
    } catch (err) {
      console.log(err);

      alertDialog.show({
        type: 'error',
        title: 'Não foi possível entrar na sua conta',
        description:
          'O problema pode ter ocorrido devido a alguma intermitência em nossos serviços ou suas credenciais (e-mail e senha) estão incorretos. Por favor, verifique suas credenciais e tente novamente.',
        okButtonLabel: 'Fechar'
      });
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSignIn)}>
      <ControlledTextInput
        name="email"
        control={control}
        type="email"
        label="Seu e-mail"
        icon={FiMail}
        placeholder="fulano@email.com.br"
      />

      <ControlledTextInput
        name="password"
        control={control}
        type="password"
        label="Sua senha"
        icon={FiLock}
        placeholder="********"
      />

      <Button type="submit" isLoading={isSubmitting} loadingText="Entrando...">
        Entrar
      </Button>
    </S.Container>
  );
}
