import styled, { css } from 'styled-components';
import { Slot as RadixSlot } from '@radix-ui/react-slot';

import { ButtonColorScheme, ButtonSize } from './Button';

interface ContainerProps {
  colorScheme: ButtonColorScheme;
  size: ButtonSize;
  isRounded: boolean;
}

interface ButtonColorSchemeConfig {
  backgroundColor: string;
  textColor: string;
  hover: Omit<ButtonColorSchemeConfig, 'hover' | 'active'>;
  active: Omit<ButtonColorSchemeConfig, 'hover' | 'active'>;
}

const BUTTON_COLOR_SCHEMES_CONFIGS: Record<ButtonColorScheme, ButtonColorSchemeConfig> = {
  primary: {
    backgroundColor: 'var(--primary-500)',
    textColor: 'white',
    hover: {
      backgroundColor: 'var(--primary-600)',
      textColor: 'white'
    },
    active: {
      backgroundColor: 'var(--primary-700)',
      textColor: 'white'
    }
  },
  gray: {
    backgroundColor: 'var(--gray-100)',
    textColor: 'var(--secondary-500)',
    hover: {
      backgroundColor: 'var(--gray-200)',
      textColor: 'var(--secondary-600)'
    },
    active: {
      backgroundColor: 'var(--gray-300)',
      textColor: 'var(--secondary-700)'
    }
  },
  white: {
    backgroundColor: 'white',
    textColor: 'var(--secondary-500)',
    hover: {
      backgroundColor: 'var(--gray-50)',
      textColor: 'var(--secondary-600)'
    },
    active: {
      backgroundColor: 'var(--gray-100)',
      textColor: 'var(--secondary-700)'
    }
  },
  blue: {
    backgroundColor: 'var(--blue-500)',
    textColor: 'white',
    hover: {
      backgroundColor: 'var(--blue-600)',
      textColor: 'white'
    },
    active: {
      backgroundColor: 'var(--blue-700)',
      textColor: 'white'
    }
  },
  red: {
    backgroundColor: 'var(--red-500)',
    textColor: 'white',
    hover: {
      backgroundColor: 'var(--red-600)',
      textColor: 'white'
    },
    active: {
      backgroundColor: 'var(--red-700)',
      textColor: 'white'
    }
  },
  green: {
    backgroundColor: 'var(--green-500)',
    textColor: 'white',
    hover: {
      backgroundColor: 'var(--green-600)',
      textColor: 'white'
    },
    active: {
      backgroundColor: 'var(--green-700)',
      textColor: 'white'
    }
  },
  yellow: {
    backgroundColor: 'var(--yellow-500)',
    textColor: 'white',
    hover: {
      backgroundColor: 'var(--yellow-600)',
      textColor: 'white'
    },
    active: {
      backgroundColor: 'var(--yellow-700)',
      textColor: 'white'
    }
  }
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

const buttonStyle = ({ colorScheme, size, isRounded }: ContainerProps) => css`
  padding: 0 1.5rem;
  border: 0;
  font-weight: 500;
  overflow: hidden;

  box-shadow: var(--shadow-sm);
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

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
    opacity: 0.8;
    pointer-events: none;
    box-shadow: none;
  }

  ${() => {
    const colorConfig = BUTTON_COLOR_SCHEMES_CONFIGS[colorScheme];
    const sizeConfig = BUTTON_SIZES[size];

    return css`
      height: ${sizeConfig.height};
      border-radius: ${`var(--rounded-${sizeConfig.rounded})`};
      background-color: ${colorConfig.backgroundColor};
      color: ${colorConfig.textColor};

      &:hover {
        background-color: ${colorConfig.hover.backgroundColor};
        color: ${colorConfig.hover.textColor};
      }

      &:active {
        background-color: ${colorConfig.active.backgroundColor};
        color: ${colorConfig.active.textColor};
      }

      svg {
        font-size: ${`var(--font-size-${sizeConfig.iconSize})`};
      }
    `;
  }}

  ${() =>
    isRounded &&
    css`
      padding: 0;
      aspect-ratio: 1 / 1;
      border-radius: var(--rounded-full);

      span {
        padding: 0;
      }
    `}
`;

export const Slot = styled(RadixSlot)<ContainerProps>`
  ${({ colorScheme, size, isRounded }) => buttonStyle({ colorScheme, size, isRounded })}
`;

export const Container = styled.button<ContainerProps>`
  ${({ colorScheme, size, isRounded }) => buttonStyle({ colorScheme, size, isRounded })}
`;
