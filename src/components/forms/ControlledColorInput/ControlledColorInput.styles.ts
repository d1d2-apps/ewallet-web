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
    font-size: var(--font-size-sm);
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
    border-radius: var(--rounded-full);
    box-shadow: var(--shadow-lg);
  }
`;

export const ColorButton = styled.button.attrs({
  type: 'button'
})<ColorButtonProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ $color }) => `var(--${$color}-500)`};
  border: 0.5rem solid transparent;
  border-radius: var(--rounded-full);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s;

  & + button {
    margin-left: 0.75rem;
  }

  &:hover {
    box-shadow: var(--shadow-md);
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
  font-size: var(--font-size-xs);
  color: var(--red-500);
`;
