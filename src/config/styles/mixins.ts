import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components';

const MIN_SCREEN_SIZES = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px'
};

export const mixins = {
  screen: {
    sm: (content: FlattenSimpleInterpolation) => css`
      @media screen and (min-width: ${MIN_SCREEN_SIZES.SM}) {
        ${content}
      }
    `,
    md: (content: FlattenSimpleInterpolation) => css`
      @media screen and (min-width: ${MIN_SCREEN_SIZES.MD}) {
        ${content}
      }
    `,
    lg: (content: FlattenSimpleInterpolation) => css`
      @media screen and (min-width: ${MIN_SCREEN_SIZES.LG}) {
        ${content}
      }
    `,
    xl: (content: FlattenSimpleInterpolation) => css`
      @media screen and (min-width: ${MIN_SCREEN_SIZES.XL}) {
        ${content}
      }
    `,
    '2xl': (content: FlattenSimpleInterpolation) => css`
      @media screen and (min-width: ${MIN_SCREEN_SIZES['2XL']}) {
        ${content}
      }
    `,
    minWidth: (screenSize: string, content: FlattenSimpleInterpolation) => css`
      @media screen and (min-width: ${screenSize}) {
        ${content}
      }
    `,
    maxWidth: (screenSize: string, content: FlattenSimpleInterpolation) => css`
      @media screen and (max-width: ${screenSize}) {
        ${content}
      }
    `
  },
  dialogs: {
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
    }
  }
};
