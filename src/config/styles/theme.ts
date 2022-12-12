import { mixins } from './mixins';

export const theme = {
  'font-size': {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    '4xl': '3rem',
    '5xl': '3.5rem'
  },
  'font-family': {
    inter: 'Inter, sans-serif',
    montserrat: 'Montserrat, sans-serif'
  },
  colors: {
    primary: {
      50: '#FDF1EC',
      100: '#FCE4DA',
      200: '#F8C8B4',
      300: '#F5AD8F',
      400: '#F1926A',
      500: '#EF8354',
      600: '#EC6A32',
      700: '#E05215',
      800: '#BB4411',
      900: '#95370E'
    },

    secondary: {
      50: '#9299B5',
      100: '#7981A4',
      200: '#636C92',
      300: '#535A79',
      400: '#424861',
      500: '#2D3142',
      600: '#292D3D',
      700: '#212431',
      800: '#181B25',
      900: '#101219'
    },

    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },

    red: {
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c'
    },

    orange: {
      500: '#f97316'
    },

    yellow: {
      100: '#fef9c3',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207'
    },

    green: {
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d'
    },

    teal: {
      500: '#14b8a6'
    },

    blue: {
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8'
    },

    violet: {
      500: '#8b5cf6'
    },

    pink: {
      500: '#ec4899'
    }
  },
  rounded: {
    xs: '0.375rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    full: '99999px'
  },
  shadow: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
  },
  ring: {
    primary: '0 0 0 1px var(--primary-500)'
  },
  mixins
};
