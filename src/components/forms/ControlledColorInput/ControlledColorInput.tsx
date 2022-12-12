import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { useTheme } from 'styled-components';

import * as S from './ControlledColorInput.styles';

interface Props {
  label: string;
  isDisabled?: boolean;
}

type ControlledColorInputProps<T extends FieldValues> = Props & UseControllerProps<T>;

const COLORS = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'violet', 'pink'] as const;

export function ControlledColorInput<T extends FieldValues>({
  label,
  isDisabled,
  ...controllerProps
}: ControlledColorInputProps<T>) {
  const theme = useTheme();

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
          {COLORS.map(colorName => {
            const colorHex = theme.colors[colorName as typeof COLORS[number]][500];

            return (
              <S.ColorButton
                key={colorName}
                disabled={colorHex === inputProps.value || isSubmitting || isDisabled}
                $color={colorName}
                $isSelected={colorHex === inputProps.value}
                onClick={() => inputProps.onChange(colorHex)}
              />
            );
          })}
        </div>
      </S.SelectedColor>

      {!!error?.message && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Container>
  );
}
