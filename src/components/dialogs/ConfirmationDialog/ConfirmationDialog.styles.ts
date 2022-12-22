import styled, { css } from 'styled-components';
import { opacify } from 'polished';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const Overlay = styled(AlertDialog.Overlay)`
  ${({ theme }) => theme.mixins.dialogs.getOverlayStyles()}
`;

export const Content = styled(AlertDialog.Content)`
  ${({ theme }) => theme.mixins.dialogs.getContentBaseStyles()}

  main {
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
