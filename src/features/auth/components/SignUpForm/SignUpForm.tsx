import { useForm } from 'react-hook-form';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Button } from '@/components/elements';
import { ControlledTextInput } from '@/components/forms';

import * as S from './SignUpForm.styles';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export function SignUpForm() {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const handleSignUp = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSignUp)}>
      <ControlledTextInput name="name" control={control} label="Seu nome" icon={FiUser} placeholder="Fulano de tal" />

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

      <Button type="submit">Cadastrar</Button>
    </S.Container>
  );
}
