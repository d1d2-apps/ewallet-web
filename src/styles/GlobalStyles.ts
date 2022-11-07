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
    background: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.secondary[500]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem ${({ theme }) => theme.fontFamilies.inter};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
