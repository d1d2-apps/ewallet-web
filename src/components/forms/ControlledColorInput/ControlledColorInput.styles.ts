import styled, { css } from 'styled-components';

interface SelectedColorProps {
  $color: string;
}

interface ColorButtonProps {
  $color: string;
  $isSelected: boolean;
}

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
  }
`;

export const SelectedColor = styled.div<SelectedColorProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  figure {
    width: 3rem;
    height: 3rem;
    background-color: ${({ $color }) => $color};
    border-radius: ${({ theme }) => theme.rounded.full};
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const ColorButton = styled.button.attrs({
  type: 'button'
})<ColorButtonProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ $color }) => $color};
  border: 0.5rem solid transparent;
  border-radius: ${({ theme }) => theme.rounded.full};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition: all 0.2s;

  & + button {
    margin-left: 0.75rem;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &:active {
    transform: scale(0.85);
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
    box-shadow: none;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      transform: scale(0.6);
    `}
`;

export const ErrorMessage = styled.small`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.error};
`;
