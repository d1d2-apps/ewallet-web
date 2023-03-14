import { FunctionComponent } from 'react';

import { render as rtlRender, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppProvider } from '@/providers/app';

export const render = async (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  renderOptions: RenderOptions = {}
) => {
  const returnValue = rtlRender(ui, {
    wrapper: AppProvider as FunctionComponent<unknown>,
    ...renderOptions
  });

  return returnValue;
};

export * from '@testing-library/react';
export { rtlRender, userEvent };
