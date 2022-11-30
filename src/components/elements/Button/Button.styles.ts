import styled, { css } from 'styled-components';
import { Slot as RadixSlot } from '@radix-ui/react-slot';

import { ButtonColorScheme } from './Button';

interface ContainerProps {
  colorScheme: ButtonColorScheme;
  isRounded: boolean;
}

interface ButtonColorSchemeConfig {
  backgroundColor: string;
  textColor: string;
  hover: Omit<ButtonColorSchemeConfig, 'hover'>;
}

const BUTTON_COLOR_SCHEMES_CONFIGS: Record<ButtonColorScheme, ButtonColorSchemeConfig> = {
  primary: {
    backgroundColor: 'var(--primary-500)',
    textColor: 'white',
    hover: {
      backgroundColor: 'var(--primary-600)',
      textColor: 'white'
    }
  },
  gray: {
    backgroundColor: 'var(--gray-100)',
    textColor: 'var(--secondary-500)',
    hover: {
      backgroundColor: 'var(--gray-200)',
      textColor: 'var(--secondary-600)'
    }
  },
  white: {
    backgroundColor: 'white',
    textColor: 'var(--secondary-500)',
    hover: {
      backgroundColor: 'var(--gray-50)',
      textColor: 'var(--secondary-600)'
    }
  }
};

const buttonStyle = css`
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  border: 0;
  border-radius: var(--rounded-sm);
  background-color: var(--primary-500);
  font-weight: 500;
  color: white;
  overflow: hidden;

  box-shadow: var(--shadow-sm);
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    font-size: var(--font-size-lg);
  }

  &:hover {
    background-color: var(--primary-600);
    box-shadow: var(--shadow-md);

    i {
      background-color: var(--primary-500);
    }
  }

  &:active {
    background-color: var(--primary-700);
    transform: scale(0.975);
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
    box-shadow: none;
  }
`;

export const Slot = styled(RadixSlot)`
  ${buttonStyle}
`;

export const Container = styled.button<ContainerProps>`
  ${buttonStyle}

  ${({ colorScheme }) => {
    const config = BUTTON_COLOR_SCHEMES_CONFIGS[colorScheme];

    return css`
      background-color: ${config.backgroundColor};
      color: ${config.textColor};

      &:hover {
        background-color: ${config.hover.backgroundColor};
        color: ${config.hover.textColor};
      }
    `;
  }}

  ${({ isRounded }) =>
    isRounded &&
    css`
      width: 3rem;
      height: 3rem;
      padding: 0;
      border-radius: var(--rounded-full);

      span {
        padding: 0;
      }
    `}
`;
