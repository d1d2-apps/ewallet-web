import { ComponentType, InputHTMLAttributes } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

import { TextInput } from '@/components/elements';

import * as S from './ControlledTextInput.styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ComponentType<IconBaseProps>;
  isDisabled?: boolean;
}

type ControlledTextInputProps<T extends FieldValues> = Props & UseControllerProps<T>;

export function ControlledTextInput<T extends FieldValues>({
  label,
  icon: Icon,
  isDisabled = false,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: ControlledTextInputProps<T>) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error }
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <S.Container>
      {!!label && <span>{label}</span>}

      <TextInput.Base hasError={!!error?.message} isDisabled={isDisabled}>
        {!!Icon && (
          <TextInput.Icon>
            <Icon />
          </TextInput.Icon>
        )}

        <TextInput.Input disabled={isDisabled} {...rest} {...inputProps} />
      </TextInput.Base>

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
