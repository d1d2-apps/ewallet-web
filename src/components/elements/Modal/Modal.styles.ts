import * as DialogPrimitive from '@radix-ui/react-dialog';
import { opacify } from 'polished';
import styled, { keyframes } from 'styled-components';

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled(DialogPrimitive.Overlay)`
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);

  position: fixed;
  inset: 0;

  animation: ${overlayShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
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

export const Content = styled(DialogPrimitive.Content)`
  width: 90vw;
  max-width: 40rem;
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

  footer {
    background-color: ${({ theme }) => opacify(-0.975, theme.colors.neutral)};
    padding: 0.75rem 1.5rem;
    border-radius: 0 0 ${({ theme }) => theme.rounded.lg} ${({ theme }) => theme.rounded.lg};

    display: flex;
    gap: 0.75rem;

    button {
      width: fit-content;
    }
  }
`;

export const Header = styled.header`
  padding: 1rem 1.5rem;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => opacify(-0.95, theme.colors.neutral)};

  & > button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
`;

export const Body = styled.main`
  padding: 1.5rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Footer = styled.footer`
  justify-content: flex-end;
`;

export const Title = styled(DialogPrimitive.Title)`
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;
