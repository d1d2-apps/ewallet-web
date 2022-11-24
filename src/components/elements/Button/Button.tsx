import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Spinner } from '../Spinner/Spinner';

import * as S from './Button.styles';

export type ButtonColorScheme = 'primary' | 'gray' | 'white';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  colorScheme?: ButtonColorScheme;
  leftIcon?: React.ComponentType<IconBaseProps>;
  isRounded?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

export function Button({
  asChild = false,
  children,
  colorScheme = 'primary',
  leftIcon: LeftIcon,
  isRounded = false,
  isLoading = false,
  loadingText = '',
  disabled,
  ...rest
}: ButtonProps) {
  if (asChild) {
    return <S.Slot {...rest}>{children}</S.Slot>;
  }

  return (
    <S.Container {...rest} disabled={disabled || isLoading} isRounded={isRounded} colorScheme={colorScheme}>
      {isLoading && <Spinner size="lg" />}

      {!isLoading && !isRounded && LeftIcon && <LeftIcon />}

      {isLoading ? loadingText : children}
    </S.Container>
  );
}
