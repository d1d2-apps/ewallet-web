import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Spinner } from '../Spinner/Spinner';
import * as S from './Button.styles';

export type ButtonColorScheme = 'primary' | 'neutral' | 'white' | 'info' | 'error' | 'success' | 'warning';
export type ButtonSize = 'xs' | 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  leftIcon?: React.ComponentType<IconBaseProps>;
  rightIcon?: React.ComponentType<IconBaseProps>;
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
      rightIcon: RightIcon,
      isRounded = false,
      isLoading = false,
      loadingText = '',
      disabled,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    if (asChild) {
      return (
        <S.Slot ref={ref} $isRounded={isRounded} $colorScheme={colorScheme} $size={size} {...rest}>
          {children}
        </S.Slot>
      );
    }

    return (
      <S.Container
        {...rest}
        type={type}
        ref={ref}
        disabled={disabled || isLoading}
        $isRounded={isRounded}
        $colorScheme={colorScheme}
        $size={size}
      >
        {isLoading && <Spinner size="lg" />}

        {!isLoading && !isRounded && LeftIcon && <LeftIcon />}

        {isLoading ? loadingText : children}

        {!isLoading && !isRounded && RightIcon && <RightIcon />}
      </S.Container>
    );
  }
);
