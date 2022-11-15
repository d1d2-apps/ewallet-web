import React, { ButtonHTMLAttributes } from 'react';

import * as S from './Button.styles';
import { Spinner } from '../Spinner/Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

export function Button({
  children,
  asChild = false,
  isLoading = false,
  loadingText = '',
  disabled,
  ...rest
}: ButtonProps) {
  if (asChild) {
    return <S.Slot {...rest}>{children}</S.Slot>;
  }

  return (
    <S.Container {...rest} disabled={disabled || isLoading}>
      <>
        {!!isLoading && <Spinner size="lg" />}
        {isLoading ? loadingText : children}
      </>
    </S.Container>
  );
}
