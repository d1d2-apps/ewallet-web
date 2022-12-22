import { fontFamily } from './fontFamilies';
import { fontSize } from './fontSizes';
import { mixins } from './mixins';
import { rounded } from './rounded';

export const themes = {
  light: {
    fontSize,
    fontFamily,
    rounded,
    mixins,
    colors: {
      primary: '#EF8354',
      secondary: '#2D3142',
      background: '#F9FAFB',
      backgroundOffset: '#FFFFFF',
      neutral: '#000000',
      info: '#3b82f6',
      error: '#ef4444',
      success: '#22c55e',
      warning: '#eab308'
    },
    shadow: {
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
    }
  },
  dark: {
    fontSize,
    fontFamily,
    rounded,
    mixins,
    colors: {
      primary: '#F1926A',
      secondary: '#F3F4F7',
      background: '#171717',
      backgroundOffset: '#262626',
      neutral: '#FFFFFF',
      info: '#60a5fa',
      error: '#f87171',
      success: '#4ade80',
      warning: '#facc15'
    },
    shadow: {
      sm: '0 0 0 1px #404040',
      md: '0 0 0 1px #404040',
      lg: '0 0 0 1px #404040',
      xl: '0 0 0 1px #404040',
      '2xl': '0 0 0 1px #404040',
      inner: '0 0 0 1px #404040'
    }
  }
};
