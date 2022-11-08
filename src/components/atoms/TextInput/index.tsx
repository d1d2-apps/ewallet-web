import { InputHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

export interface TextInputBaseProps {
  children: ReactNode;
}

function TextInputBase({ children }: TextInputBaseProps) {
  return <S.BaseContainer>{children}</S.BaseContainer>;
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
  return <S.InputContainer {...props} />;
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputBase,
  Input: TextInputInput,
  Icon: TextInputIcon
};
