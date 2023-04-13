import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  $hasError?: boolean;
  $isDisabled?: boolean;
}

export const Container = styled.textarea<ContainerProps>`
  width: 100%;
  min-height: 4rem;
  height: 4rem;
  max-height: 6rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
  border-radius: ${({ theme }) => theme.rounded.sm};
  transition: all 0.2s;
  resize: vertical;

  color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  position: relative;

  &::placeholder {
    color: ${({ theme }) => opacify(-0.75, theme.colors.neutral)};
  }

  &:hover {
    background-color: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.backgroundOffset};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.mixins.ring.xs(theme.colors.primary)};
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
