import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Spinner } from '../Spinner/Spinner';

import * as S from './Button.styles';

export type ButtonColorScheme = 'primary' | 'gray' | 'white' | 'blue' | 'red' | 'green' | 'yellow';
export type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  leftIcon?: React.ComponentType<IconBaseProps>;
  isRounded?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

export const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      asChild = false,
      children,
      colorScheme = 'primary',
      size = 'md',
      leftIcon: LeftIcon,
      isRounded = false,
      isLoading = false,
      loadingText = '',
      disabled,
      ...rest
    },
    ref
  ) => {
    if (asChild) {
      return (
        <S.Slot ref={ref} {...rest}>
          {children}
        </S.Slot>
      );
    }

    return (
      <S.Container
        {...rest}
        ref={ref}
        disabled={disabled || isLoading}
        isRounded={isRounded}
        colorScheme={colorScheme}
        size={size}
      >
        {isLoading && <Spinner size="lg" />}

        {!isLoading && !isRounded && LeftIcon && <LeftIcon />}

        {isLoading ? loadingText : children}
      </S.Container>
    );
  }
);
