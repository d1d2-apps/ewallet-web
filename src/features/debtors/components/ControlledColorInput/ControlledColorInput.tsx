import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import * as S from './ControlledColorInput.styles';

interface Props {
  label: string;
  isDisabled?: boolean;
}

type ControlledColorInputProps<T extends FieldValues> = Props & UseControllerProps<T>;

const COLORS = ['blue', 'green', 'red', 'yellow'];

export function ControlledColorInput<T extends FieldValues>({
  label,
  isDisabled,
  ...controllerProps
}: ControlledColorInputProps<T>) {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
    formState: { isSubmitting }
  } = useController(controllerProps);

  return (
    <S.Container>
      <span>{label}</span>

      <S.SelectedColor $color={inputProps.value}>
        <figure />

        <div>
          {COLORS.map(color => (
            <S.ColorButton
              key={color}
              disabled={color === inputProps.value || isSubmitting || isDisabled}
              $color={color}
              onClick={() => inputProps.onChange(color)}
            />
          ))}
        </div>
      </S.SelectedColor>

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
