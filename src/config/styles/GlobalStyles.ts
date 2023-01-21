import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
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
`;
