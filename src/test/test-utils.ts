import { FunctionComponent } from 'react';

import { render as rtlRender, RenderOptions } from '@testing-library/react';

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
