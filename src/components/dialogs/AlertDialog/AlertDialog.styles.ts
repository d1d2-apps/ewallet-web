import styled, { css } from 'styled-components';
import { opacify, tint } from 'polished';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { AlertDialogType } from './AlertDialog';

interface ContentProps {
  $type: AlertDialogType;
}

export const Overlay = styled(AlertDialog.Overlay)`
  ${({ theme }) => theme.mixins.dialogs.getOverlayStyles()}
`;

export const Content = styled(AlertDialog.Content)<ContentProps>`
  ${({ theme }) => theme.mixins.dialogs.getContentBaseStyles()}

  main {
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    ${({ theme }) =>
      theme.mixins.screen.md(css`
        flex-direction: row;
        align-items: flex-start;
      `)}

    i {
      width: fit-content;
      height: fit-content;
      background-color: ${({ theme, $type }) => tint(0.1, theme.colors[$type])};
      padding: 0.5rem;
      border-radius: ${({ theme }) => theme.rounded.full};

      font-size: ${({ theme }) => theme.fontSize.xl};
      color: ${({ theme, $type }) => theme.colors[$type]};

      display: flex;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const Title = styled(AlertDialog.Title)`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      text-align: left;
    `)}
`;

export const Description = styled(AlertDialog.Description)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => opacify(-0.25, theme.colors.neutral)};
  line-height: 1.5;
`;
