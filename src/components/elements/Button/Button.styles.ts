import { Slot as RadixSlot } from '@radix-ui/react-slot';
import { opacify, shade, tint } from 'polished';
import styled, { css } from 'styled-components';

import { ButtonColorScheme, ButtonSize } from './Button';

interface ContainerProps {
  $colorScheme: ButtonColorScheme;
  $size: ButtonSize;
  $isRounded: boolean;
}

const BUTTON_COLOR_SCHEMES_CONFIGS = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    &:hover {
      background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
      color: white;
    }

    &:active {
      background-color: ${({ theme }) => shade(0.2, theme.colors.primary)};
      color: white;
    }
  `,
  neutral: css`
    background-color: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      background-color: ${({ theme }) => opacify(-0.85, theme.colors.neutral)};
      color: ${({ theme }) => shade(0.1, theme.colors.secondary)};
    }

    &:active {
      background-color: ${({ theme }) => opacify(-0.75, theme.colors.neutral)};
      color: ${({ theme }) => shade(0.2, theme.colors.secondary)};
    }
  `,
  white: css`
    background-color: ${({ theme }) => theme.colors.backgroundOffset};
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      background-color: ${({ theme }) => shade(0.1, theme.colors.backgroundOffset)};
      color: ${({ theme }) => shade(0.1, theme.colors.secondary)};
    }

    &:active {
      background-color: ${({ theme }) => shade(0.2, theme.colors.backgroundOffset)};
      color: ${({ theme }) => shade(0.2, theme.colors.secondary)};
    }
  `,
  info: css`
    background-color: ${({ theme }) => theme.colors.info};
    color: white;

    &:hover {
      background-color: ${({ theme }) => shade(0.1, theme.colors.info)};
      color: white;
    }

    &:active {
      background-color: ${({ theme }) => shade(0.2, theme.colors.info)};
      color: white;
    }
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: white;

    &:hover {
      background-color: ${({ theme }) => shade(0.1, theme.colors.error)};
      color: white;
    }

    &:active {
      background-color: ${({ theme }) => shade(0.2, theme.colors.error)};
      color: white;
    }
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success};
    color: white;

    &:hover {
      background-color: ${({ theme }) => shade(0.1, theme.colors.success)};
      color: white;
    }

    &:active {
      background-color: ${({ theme }) => shade(0.2, theme.colors.success)};
      color: white;
    }
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning};
    color: white;

    &:hover {
      background-color: ${({ theme }) => shade(0.1, theme.colors.warning)};
      color: white;
    }

    &:active {
      background-color: ${({ theme }) => shade(0.2, theme.colors.warning)};
      color: white;
    }
  `
};

interface ButtonSizeConfig {
  height: string;
  rounded: string;
  iconSize: string;
}

const BUTTON_SIZES: Record<ButtonSize, ButtonSizeConfig> = {
  xs: { height: '2rem', rounded: 'xs', iconSize: 'sm' },
  sm: { height: '2.5rem', rounded: 'xs', iconSize: 'md' },
  md: { height: '3rem', rounded: 'sm', iconSize: 'lg' }
};

const buttonStyle = ({ $colorScheme, $size, $isRounded }: ContainerProps) => css`
  padding: 0 1.5rem;
  border: 0;
  font-weight: 500;
  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:active {
    transform: scale(0.975);
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
    box-shadow: none;
  }

  ${({ theme }) => {
    const colorConfig = BUTTON_COLOR_SCHEMES_CONFIGS[$colorScheme];
    const sizeConfig = BUTTON_SIZES[$size];

    return css`
      ${colorConfig}

      height: ${sizeConfig.height};
      border-radius: ${theme.rounded[sizeConfig.rounded as keyof typeof theme.rounded]};

      svg {
        font-size: ${theme.fontSize[sizeConfig.iconSize as keyof typeof theme.fontSize]};
      }
    `;
  }}

  ${() =>
    $isRounded &&
    css`
      padding: 0;
      aspect-ratio: 1 / 1;
      border-radius: ${({ theme }) => theme.rounded.full};

      span {
        padding: 0;
      }
    `}
`;

export const Slot = styled(RadixSlot)<ContainerProps>`
  ${({ $colorScheme, $size, $isRounded }) => buttonStyle({ $colorScheme, $size, $isRounded })}
`;

export const Container = styled.button<ContainerProps>`
  ${({ $colorScheme, $size, $isRounded }) => buttonStyle({ $colorScheme, $size, $isRounded })}
`;
