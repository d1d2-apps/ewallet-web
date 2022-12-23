import * as Tooltip from '@radix-ui/react-tooltip';
import { opacify } from 'polished';
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

export const Content = styled(Tooltip.Content)`
  padding: 0.5rem 0.75rem;
  border-radius: ${({ theme }) => theme.rounded.xs};
  background-color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
  backdrop-filter: blur(8px);

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.background};
  line-height: 1;

  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }

  &[data-state='delayed-open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }

  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }

  &[data-state='delayed-open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`;

export const Arrow = styled(Tooltip.Arrow)`
  fill: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
`;
