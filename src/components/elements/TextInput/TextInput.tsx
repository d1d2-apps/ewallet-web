import { InputHTMLAttributes, ReactNode } from 'react';

import * as S from './TextInput.styles';

export interface TextInputBaseProps {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
}

function TextInputBase({ children, hasError = false, isDisabled = false }: TextInputBaseProps) {
  return (
    <S.BaseContainer $hasError={hasError} $isDisabled={isDisabled}>
      {children}
    </S.BaseContainer>
  );
}

TextInputBase.displayName = 'TextInput.Base';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <S.IconContainer>{children}</S.IconContainer>;
}

TextInputIcon.displayName = 'TextInput.Icon';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput(props: TextInputInputProps) {
  return <input {...props} />;
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Base: TextInputBase,
  Input: TextInputInput,
  Icon: TextInputIcon
};
