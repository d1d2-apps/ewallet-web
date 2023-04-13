import { Combobox } from '@headlessui/react';
import { opacify } from 'polished';
import styled from 'styled-components';

export const AutocompleteWrapper = styled.div`
  position: relative;
`;

export const ComboboxButton = styled(Combobox.Button)`
  background: transparent;
  border: none;
  padding: 0 1rem;

  font-size: 1rem;
  color: var(--icon-color);
  transition: all 0.2s;

  display: flex;
  align-items: center;
`;

export const ComboboxOptions = styled(Combobox.Options)`
  width: 100%;
  max-height: 15rem;
  margin-top: 0.25rem;
  padding: 0.25rem;
  background: ${({ theme }) => theme.colors.backgroundOffset};
  border-radius: ${({ theme }) => theme.rounded.md};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  overflow: auto;
  z-index: 1;

  position: absolute;

  & > li {
    height: 1.5rem;
    padding: 1rem 2rem 1rem 1.5rem;
    border-radius: ${({ theme }) => theme.rounded.xs};

    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;

    position: relative;

    &:hover {
      background-color: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const ComboboxOptionIndicator = styled.span`
  width: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};

  position: absolute;
  left: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
