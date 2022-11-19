import { useForm } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useAuth } from '@/stores/auth';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';

import * as S from './SignInForm.styles';

interface FormData {
  email: string;
  password: string;
}

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

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleSignIn = async (formData: FormData) => {
    try {
      await signIn(formData);
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error('Ocorreu um erro ao tentar entrar na sua conta. Verifique as credenciais e tente novamente.');
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

      <Button type="submit">Entrar</Button>
    </S.Container>
  );
}
