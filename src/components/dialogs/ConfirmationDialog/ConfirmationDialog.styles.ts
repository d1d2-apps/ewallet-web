import styled, { css } from 'styled-components';
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
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-lg);
  font-weight: 500;
  text-align: center;
  color: var(--secondary-500);

  ${({ theme }) =>
    theme.mixins.screen.md(css`
      text-align: left;
    `)}
`;

export const Description = styled(AlertDialog.Description)`
  font-size: var(--font-size-sm);
  color: var(--secondary-200);
  line-height: 1.5;
`;
