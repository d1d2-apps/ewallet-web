import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

import * as S from './Button.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild = false, ...rest }: ButtonProps) {
  const component = asChild ? Slot : 'button';

  return (
    <S.Container as={component} {...rest}>
      {children}
    </S.Container>
  );
}
