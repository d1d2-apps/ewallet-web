import React, { PropsWithChildren } from 'react';
import { FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';

import * as SelectPrimitive from '@radix-ui/react-select';

import * as S from './Select.styles';

type SelectItemProps = PropsWithChildren<SelectPrimitive.SelectItemProps>;

const SelectItem = React.forwardRef<any, SelectItemProps>(({ children, ...props }, forwardedRef) => {
  return (
    <S.SelectItem {...props} ref={forwardedRef}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <S.SelectItemIndicator>
        <FiCheck />
      </S.SelectItemIndicator>
    </S.SelectItem>
  );
});

interface SelectRootProps extends SelectPrimitive.SelectProps {
  placeholder?: string;
  hasError?: boolean;
  isDisabled?: boolean;
}

function SelectRoot({ placeholder, hasError = false, isDisabled = false, children, ...rest }: SelectRootProps) {
  return (
    <SelectPrimitive.Root disabled={isDisabled} {...rest}>
      <S.SelectTrigger $hasError={hasError} $isDisabled={isDisabled}>
        <SelectPrimitive.Value placeholder={placeholder || 'Selecione...'} />

        <S.SelectIcon>
          <FiChevronDown />
        </S.SelectIcon>
      </S.SelectTrigger>

      <SelectPrimitive.Portal>
        <S.SelectContent>
          <S.SelectScrollUpButton>
            <FiChevronUp />
          </S.SelectScrollUpButton>

          <S.SelectViewport>{children}</S.SelectViewport>

          <S.SelectScrollDownButton>
            <FiChevronDown />
          </S.SelectScrollDownButton>
        </S.SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

export const Select = {
  Root: SelectRoot,
  Item: SelectItem,
  Group: SelectPrimitive.Group,
  GroupLabel: S.SelectLabel,
  Separator: S.SelectSeparator
};
