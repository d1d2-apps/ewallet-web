import { css, FlattenSimpleInterpolation } from 'styled-components';

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
  }
};
