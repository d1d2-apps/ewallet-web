import { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import * as S from './TextInput.styles';

export interface TextInputRootProps {
  hasError?: boolean;
  isDisabled?: boolean;
}

function TextInputRoot({ children, hasError = false, isDisabled = false }: PropsWithChildren<TextInputRootProps>) {
  return (
    <S.RootContainer $hasError={hasError} $isDisabled={isDisabled}>
      {children}
    </S.RootContainer>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

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
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
