import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import * as S from './ControlledColorInput.styles';

interface Props {
  label: string;
  isDisabled?: boolean;
}

type ControlledColorInputProps<T extends FieldValues> = Props & UseControllerProps<T>;

const COLORS = ['#6b7280', '#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899'];

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

        <S.ColorButtonsWrapper>
          {COLORS.map(color => {
            return (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label key={color}>
                <span hidden>{color}</span>
                <input type="radio" hidden {...inputProps} checked={inputProps.value === color} />
                <S.ColorButton
                  disabled={color === inputProps.value || isSubmitting || isDisabled}
                  $color={color}
                  $isSelected={color === inputProps.value}
                  onClick={() => inputProps.onChange(color)}
                />
              </label>
            );
          })}
        </S.ColorButtonsWrapper>
      </S.SelectedColor>

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
