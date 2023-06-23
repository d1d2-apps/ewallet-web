import { opacify } from 'polished';
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    accent-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) =>
    theme.mixins.screen.maxWidth(
      '1080px',
      css`
        html {
          font-size: 93.75%;
        }
      `
    )}

  ${({ theme }) =>
    theme.mixins.screen.maxWidth(
      '720px',
      css`
        html {
          font-size: 87.5%;
        }
      `
    )}

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem ${({ theme }) => theme.fontFamily.inter};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
      width: 0.5rem;
    }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => opacify(-0.95, theme.colors.neutral)};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => opacify(-0.9, theme.colors.neutral)};
    border-radius: ${({ theme }) => theme.rounded.full};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => opacify(-0.8, theme.colors.neutral)};
  }
`;
