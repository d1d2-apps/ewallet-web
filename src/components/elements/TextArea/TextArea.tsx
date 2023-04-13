import { TextareaHTMLAttributes } from 'react';

import * as S from './TextArea.styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
  isDisabled?: boolean;
}

export function TextArea({ hasError, isDisabled, ...rest }: TextAreaProps) {
  return <S.Container $hasError={hasError} $isDisabled={isDisabled} {...rest} />;
}
