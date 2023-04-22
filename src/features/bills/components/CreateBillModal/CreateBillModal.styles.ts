import * as Dialog from '@radix-ui/react-dialog';
import { opacify } from 'polished';
import styled, { css } from 'styled-components';

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
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .row {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      ${({ theme }) =>
        theme.mixins.screen.md(css`
          flex-direction: row;
        `)}

      label {
        flex: 1;
      }
    }
  }

  footer {
    justify-content: space-between;

    & > div {
      display: flex;
      gap: 0.75rem;
    }
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

export const CreditCardField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;
  }
`;
