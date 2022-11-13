import { useForm } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';

import * as S from './SignInForm.styles';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignInForm() {
  const { handleSubmit, control } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleSignIn = (formData: SignInFormData) => {
    console.log(formData);
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
