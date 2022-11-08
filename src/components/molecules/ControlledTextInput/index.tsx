import { ComponentType, InputHTMLAttributes } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

import { TextInput } from '../../atoms/TextInput';

import * as S from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ComponentType<IconBaseProps>;
}

type ControlledTextInputProps<T extends FieldValues> = Props & UseControllerProps<T>;

export function ControlledTextInput<T extends FieldValues>({
  label,
  icon: Icon,
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

      <TextInput.Base hasError={!!error?.message}>
        {!!Icon && (
          <TextInput.Icon>
            <Icon />
          </TextInput.Icon>
        )}

        <TextInput.Input {...rest} {...inputProps} />
      </TextInput.Base>

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
