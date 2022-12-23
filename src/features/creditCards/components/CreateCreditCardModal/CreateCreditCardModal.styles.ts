import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { opacify } from 'polished';

export const Overlay = styled(Dialog.Overlay)`
  ${({ theme }) => theme.mixins.dialogs.getOverlayStyles()}
`;

export const Content = styled(Dialog.Content)`
  ${({ theme }) => theme.mixins.dialogs.getContentBaseStyles()}

  max-width: 40rem;

  header {
    padding: 1rem 1.5rem;
    position: relative;
    border-bottom: 1px solid ${({ theme }) => opacify(-0.95, theme.colors.neutral)};

    & > button {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
    }
  }

  main {
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Title = styled(Dialog.Title)`
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
