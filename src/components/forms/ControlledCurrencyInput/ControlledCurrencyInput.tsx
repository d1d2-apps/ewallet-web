import { ComponentType } from 'react';
import { CurrencyInputProps } from 'react-currency-input-field';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

import { CurrencyInput, TextInput } from '@/components/elements';

import * as S from '../ControlledTextInput/ControlledTextInput.styles';

interface Props extends CurrencyInputProps {
  label?: string;
  icon?: ComponentType<IconBaseProps>;
  isDisabled?: boolean;
}

type ControlledCurrencyInputProps<T extends FieldValues> = Props & UseControllerProps<T>;

export function ControlledCurrencyInput<T extends FieldValues>({
  label,
  icon: Icon,
  isDisabled = false,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...rest
}: ControlledCurrencyInputProps<T>) {
  const {
    field: { ref, onChange, ...inputProps },
    fieldState: { error },
    formState: { isSubmitting }
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <S.Container>
      {!!label && <span>{label}</span>}

      <TextInput.Base hasError={!!error?.message} isDisabled={isDisabled || isSubmitting}>
        {!!Icon && (
          <TextInput.Icon>
            <Icon />
          </TextInput.Icon>
        )}

        <CurrencyInput
          disabled={isDisabled || isSubmitting}
          onValueChange={value => onChange(value)}
          {...rest}
          {...inputProps}
        />
      </TextInput.Base>

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
