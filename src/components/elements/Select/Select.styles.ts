import * as SelectPrimitive from '@radix-ui/react-select';
import { opacify } from 'polished';
import styled, { css } from 'styled-components';

interface SelectTriggerProps {
  $hasError: boolean;
  $isDisabled?: boolean;
}

export const SelectTrigger = styled(SelectPrimitive.SelectTrigger)<SelectTriggerProps>`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
  border-radius: ${({ theme }) => theme.rounded.sm};
  transition: all 0.2s;

  color: ${({ theme }) => theme.colors.secondary};

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  &:hover {
    background-color: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.backgroundOffset};
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.mixins.ring.xs(theme.colors.primary)};
  }

  &[data-placeholder] {
    color: ${({ theme }) => opacify(-0.75, theme.colors.neutral)};
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

export const SelectIcon = styled(SelectPrimitive.Icon)`
  color: ${({ theme }) => opacify(-0.25, theme.colors.neutral)};
`;

export const SelectContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundOffset};
  border-radius: ${({ theme }) => theme.rounded.md};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

export const SelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 0.25rem;
`;

export const SelectItem = styled(SelectPrimitive.Item)`
  height: 1.5rem;
  padding: 1rem 2rem 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.rounded.xs};
  user-select: none;

  position: relative;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;

  &[data-disabled] {
    color: ${({ theme }) => opacify(-0.65, theme.colors.secondary)};
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SelectLabel = styled(SelectPrimitive.Label)`
  padding: 0.25rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
`;

export const SelectSeparator = styled(SelectPrimitive.Separator)`
  height: 1px;
  background-color: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
  margin: 0.25rem;
`;

export const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  width: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};

  position: absolute;
  left: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const selectScrollButtonStyles = css`
  height: 1.5rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: default;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  ${selectScrollButtonStyles}
`;

export const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  ${selectScrollButtonStyles}
`;
