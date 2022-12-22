import { opacify } from 'polished';
import { css, keyframes } from 'styled-components';

export const dialogs = {
  getOverlayStyles: () => {
    const overlayShow = keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `;

    return css`
      background-color: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(8px);

      position: fixed;
      inset: 0;

      animation: ${overlayShow} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    `;
  },
  getContentBaseStyles: () => {
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

    return css`
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

      footer {
        background-color: ${({ theme }) => opacify(-0.975, theme.colors.neutral)};
        padding: 0.75rem 1.5rem;
        border-radius: 0 0 ${({ theme }) => theme.rounded.lg} ${({ theme }) => theme.rounded.lg};

        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;

        button {
          width: fit-content;
        }
      }
    `;
  }
};
