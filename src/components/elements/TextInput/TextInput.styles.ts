import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface BaseContainerProps {
  $hasError?: boolean;
  $isDisabled?: boolean;
}

export const BaseContainer = styled.div<BaseContainerProps>`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  border: 1px solid ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
  border-radius: ${({ theme }) => theme.rounded.sm};
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  --icon-color: ${({ theme }) => opacify(-0.75, theme.colors.neutral)};

  &:hover {
    background-color: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.backgroundOffset};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.mixins.ring.xs(theme.colors.primary)};

    --icon-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      background-color: ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
      pointer-events: none;
    `}
`;

export const IconContainer = styled.i`
  font-size: 1rem;
  color: var(--icon-color);
  transition: all 0.2s;

  display: flex;
  align-items: center;
`;

export const InputContainer = styled.input`
  flex: 1;
  max-width: 100%;

  height: 100%;
  background-color: transparent;
  padding-right: 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};

  &::placeholder {
    color: ${({ theme }) => opacify(-0.75, theme.colors.neutral)};
  }
`;
