import { TextareaHTMLAttributes } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { TextArea } from '@/components/elements';

import * as S from './ControlledTextArea.styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isDisabled?: boolean;
}

type ControlledTextAreaProps<T extends FieldValues> = Props & UseControllerProps<T>;

export function ControlledTextArea<T extends FieldValues>({
  label,
  isDisabled = false,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: ControlledTextAreaProps<T>) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
    formState: { isSubmitting }
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <S.Container>
      {!!label && <span>{label}</span>}

      <TextArea hasError={!!error?.message} isDisabled={isDisabled || isSubmitting} {...rest} {...inputProps} />

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
