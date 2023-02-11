import * as PopoverPrimitive from '@radix-ui/react-popover';
import styled, { keyframes } from 'styled-components';

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled(PopoverPrimitive.Content)`
  width: 16rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundOffset};
  border-radius: ${({ theme }) => theme.rounded.sm};
  box-shadow: ${({ theme }) => theme.shadow.lg};

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &:focus {
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }

  &[data-state='open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }

  &[data-state='open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }

  &[data-state='open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }

  &[data-state='open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`;

export const Arrow = styled(PopoverPrimitive.Arrow)`
  fill: ${({ theme }) => theme.colors.backgroundOffset};
`;
