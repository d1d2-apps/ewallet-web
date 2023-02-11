import React from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import * as S from './Popover.styles';

const PopoverContent = React.forwardRef<any, PopoverPrimitive.PopoverContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
      <S.Content sideOffset={5} {...props} ref={forwardedRef}>
        {children}
        <S.Arrow />
      </S.Content>
    </PopoverPrimitive.Portal>
  )
);

export const Popover = {
  Root: PopoverPrimitive.Root,
  Trigger: PopoverPrimitive.Trigger,
  Content: PopoverContent,
  Close: PopoverPrimitive.Close
};
