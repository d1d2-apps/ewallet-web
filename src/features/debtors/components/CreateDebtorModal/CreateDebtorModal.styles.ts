import * as Dialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

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
  z-index: 2;

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

export const Content = styled(Dialog.Content)`
  width: 90vw;
  max-width: 40rem;
  max-height: 85vh;
  background-color: white;
  border-radius: var(--rounded-lg);
  box-shadow: var(--shadow-lg);
  transform: translate(-50%, -50%);
  z-index: 3;

  position: fixed;
  top: 50%;
  left: 50%;
  animation: ${contentShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  header {
    padding: 1rem 1.5rem;
    position: relative;
    border-bottom: 1px solid var(--gray-100);

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

  footer {
    background-color: var(--gray-50);
    padding: 0.75rem 1.5rem;
    border-radius: 0 0 var(--rounded-lg) var(--rounded-lg);

    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;

    button {
      width: fit-content;
    }
  }
`;

export const Title = styled(Dialog.Title)`
  max-width: calc(100% - 2rem);
  margin: 0 auto;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-lg);
  font-weight: bold;
  text-align: center;
  color: var(--secondary-500);
`;
