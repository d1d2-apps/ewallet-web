import { createGlobalStyle, css } from 'styled-components';
import { theme as themeConfig } from './theme';

const generateColorsCssVariables = (colors: typeof themeConfig.colors) => {
  const colorsKeys = Object.keys(colors) as Array<keyof typeof themeConfig.colors>;

  let cssVariables = '';

  colorsKeys.forEach(color => {
    Object.entries(colors[color]).forEach(([prop, value]) => {
      cssVariables += `--${color}-${prop}: ${value};`;
    });
  });

  return cssVariables;
};

const generateCssVariablesFor = (config: keyof typeof themeConfig) => {
  let cssVariables = '';

  Object.entries(themeConfig[config]).forEach(([prop, value]) => {
    cssVariables += `--${config}-${prop}: ${value};`;
  });

  return cssVariables;
};

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
    background: var(--gray-50);
    color: var(--secondary-500);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem var(--font-family-inter);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    ${({ theme }) => generateColorsCssVariables(theme.colors)}
    ${generateCssVariablesFor('font-size')}
    ${generateCssVariablesFor('font-family')}
    ${generateCssVariablesFor('shadow')}
    ${generateCssVariablesFor('ring')}
    ${generateCssVariablesFor('rounded')}
  }
`;
