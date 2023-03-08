import { useForm } from 'react-hook-form';
import { FiMail, FiLock, FiUser, FiKey } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';
import { useAuth } from '@/features/auth';
import { useAlertDialog } from '@/hooks';

import { SignUpCredentialsDTO } from '../../api/signup';
import * as S from './SignUpForm.styles';

type FormData = SignUpCredentialsDTO['data'];

interface SignUpFormProps {
  onSuccess: () => void;
}

const validationSchema = yup
  .object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('E-mail é obrigatório').email('Formato de e-mail inválido'),
    password: yup.string().min(6, 'Mínimo de 6 caracteres'),
    passwordConfirmation: yup
      .string()
      .required('Confirmação de senha é obrigatória')
      .oneOf([yup.ref('password'), undefined], 'Confirmação incorreta')
  })
  .required();

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const { signUp } = useAuth();

  const alertDialog = useAlertDialog();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  });

  const handleSignUp = async (formData: FormData) => {
    try {
      await signUp({ data: formData });
      onSuccess();
    } catch (err) {
      console.log(err);

      alertDialog.show({
        type: 'error',
        title: 'Não foi possível criar a sua conta',
        description: 'Ocorreu uma intermitência em nossos serviços. Por favor, tente novamente mais tarde.',
        okButtonLabel: 'Fechar'
      });
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSignUp)} noValidate>
      <ControlledTextInput
        name="name"
        control={control}
        label="Seu nome completo"
        icon={FiUser}
        placeholder="Fulano de tal"
        isDisabled={isSubmitting}
      />

      <ControlledTextInput
        name="email"
        control={control}
        type="email"
        label="Seu e-mail"
        icon={FiMail}
        placeholder="fulano@email.com.br"
        isDisabled={isSubmitting}
      />

      <ControlledTextInput
        name="password"
        control={control}
        type="password"
        label="Sua senha"
        icon={FiLock}
        placeholder="********"
        isDisabled={isSubmitting}
      />

      <ControlledTextInput
        name="passwordConfirmation"
        control={control}
        type="password"
        label="Confirme sua senha"
        icon={FiKey}
        placeholder="********"
        isDisabled={isSubmitting}
      />

      <Button type="submit" isLoading={isSubmitting} loadingText="Cadastrando...">
        Cadastrar
      </Button>
    </S.Container>
  );
}
