import { ComponentType, PropsWithChildren } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

import { Select } from '@/components/elements';

import * as S from './ControlledSelect.styles';

interface Props {
  label?: string;
  placeholder?: string;
  icon?: ComponentType<IconBaseProps>;
  isDisabled?: boolean;
}

type ControlledSelectProps<T extends FieldValues> = PropsWithChildren<Props> & UseControllerProps<T>;

export function ControlledSelect<T extends FieldValues>({
  label,
  placeholder,
  icon,
  isDisabled = false,
  children,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister
}: ControlledSelectProps<T>) {
  const {
    field,
    fieldState: { error },
    formState: { isSubmitting }
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <S.Container>
      {!!label && <span>{label}</span>}

      <Select.Root
        name={field.name}
        value={field.value || undefined}
        onValueChange={field.onChange}
        placeholder={placeholder}
        icon={icon}
        hasError={!!error?.message}
        isDisabled={isDisabled || isSubmitting}
      >
        {children}
      </Select.Root>

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
