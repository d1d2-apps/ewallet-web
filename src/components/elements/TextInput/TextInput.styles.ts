import styled, { css } from 'styled-components';

interface BaseContainerProps {
  hasError?: boolean;
  isDisabled?: boolean;
}

export const BaseContainer = styled.div<BaseContainerProps>`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  border: 1px solid var(--gray-300);
  border-radius: var(--rounded-sm);
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  --icon-color: var(--gray-300);

  &:hover {
    background-color: var(--gray-50);
  }

  &:focus-within {
    background-color: white;
    border-color: var(--primary-500);
    box-shadow: var(--ring-primary);

    --icon-color: var(--primary-500);
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: var(--red-500);
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: var(--gray-100);
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

  height: 100%;
  background-color: transparent;
  padding-right: 1rem;
  border: none;
  color: var(--secondary-500);

  &::placeholder {
    color: var(--gray-300);
  }
`;
