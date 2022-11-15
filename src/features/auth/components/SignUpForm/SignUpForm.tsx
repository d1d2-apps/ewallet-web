import { useForm } from 'react-hook-form';
import { FiMail, FiLock, FiUser, FiKey } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuth } from '@/stores/auth';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';

import * as S from './SignUpForm.styles';

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

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
      await signUp(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSignUp)}>
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

      <ControlledTextInput
        name="password"
        control={control}
        type="password"
        label="Sua senha"
        icon={FiLock}
        placeholder="********"
      />

      <ControlledTextInput
        name="passwordConfirmation"
        control={control}
        type="password"
        label="Confirme sua senha"
        icon={FiKey}
        placeholder="********"
      />

      <Button type="submit" isLoading={isSubmitting} loadingText="Cadastrando...">
        Cadastrar
      </Button>
    </S.Container>
  );
}
