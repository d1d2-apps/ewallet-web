import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { opacify } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const Overlay = styled(AlertDialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);

  position: fixed;
  inset: 0;

  animation: ${overlayShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(AlertDialogPrimitive.Content)`
  width: 90vw;
  max-width: 30rem;
  max-height: 85vh;
  background-color: ${({ theme }) => theme.colors.backgroundOffset};
  border-radius: ${({ theme }) => theme.rounded.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  transform: translate(-50%, -50%);

  position: fixed;
  top: 50%;
  left: 50%;
  animation: ${contentShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  display: flex;
  flex-direction: column;
`;

export const Body = styled.main`
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => opacify(-0.975, theme.colors.neutral)};
  padding: 0.75rem 1.5rem;
  border-radius: 0 0 ${({ theme }) => theme.rounded.lg} ${({ theme }) => theme.rounded.lg};

  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;

  button {
    width: fit-content;
  }
`;

export const Title = styled(AlertDialogPrimitive.Title)`
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

export const Description = styled(AlertDialogPrimitive.Description)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => opacify(-0.25, theme.colors.neutral)};
  line-height: 1.5;
`;
