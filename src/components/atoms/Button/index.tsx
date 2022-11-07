import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function Button({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <S.Container type={type} {...rest}>
      {children}
    </S.Container>
  );
}
