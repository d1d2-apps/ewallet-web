import { opacify } from 'polished';
import styled, { css } from 'styled-components';

import { AlertDialogType } from './AlertDialog';

interface ContainerProps {
  $type: AlertDialogType;
}

export const Container = styled.main<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      flex-direction: row;
      align-items: flex-start;
    `)}

  & > i {
    width: fit-content;
    height: fit-content;
    background-color: ${({ theme, $type }) => opacify(-0.8, theme.colors[$type])};
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.rounded.full};

    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme, $type }) => theme.colors[$type]};

    display: flex;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
