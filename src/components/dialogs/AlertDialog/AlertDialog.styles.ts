import styled, { css, keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

interface ColorProps {
  color: string;
}

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled(Dialog.Overlay)`
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

export const Content = styled(Dialog.Content)<ColorProps>`
  width: 90vw;
  max-width: 30rem;
  max-height: 85vh;
  background-color: white;
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow-lg);
  transform: translate(-50%, -50%);

  position: fixed;
  top: 50%;
  left: 50%;
  animation: ${contentShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  display: flex;
  flex-direction: column;

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
      background-color: ${({ color }) => `var(--${color}-100)`};
      padding: 0.5rem;
      border-radius: var(--rounded-full);

      font-size: var(--font-size-xl);
      color: ${({ color }) => `var(--${color}-500)`};

      display: flex;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  footer {
    background-color: var(--gray-50);
    padding: 0.75rem 1.5rem;
    border-radius: 0 0 var(--rounded-lg) var(--rounded-lg);

    display: flex;
    justify-content: flex-end;

    button {
      width: fit-content;
    }
  }
`;

export const Title = styled(Dialog.Title)`
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

export const Description = styled(Dialog.Description)`
  font-size: var(--font-size-sm);
  color: var(--secondary-200);
  line-height: 1.5;
`;
