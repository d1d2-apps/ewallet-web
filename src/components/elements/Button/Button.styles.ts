import { Slot as RadixSlot } from '@radix-ui/react-slot';

import styled, { css } from 'styled-components';

const buttonStyle = css`
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  font-weight: bold;
  color: white;

  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary[700]};
    transform: scale(0.975);
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
    box-shadow: none;
  }
`;

export const Container = styled.button`
  ${buttonStyle}
`;

export const Slot = styled(RadixSlot)`
  ${buttonStyle}
`;
