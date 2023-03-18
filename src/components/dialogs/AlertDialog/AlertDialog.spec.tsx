import { ThemeProvider } from 'styled-components';

import { themes } from '@/config/styles/themes';
import { cleanup, rtlRender } from '@/test/test-utils';

import { AlertDialog } from './AlertDialog';

afterEach(() => cleanup());

test('shows properly', async () => {
  const { getByRole } = rtlRender(
    <AlertDialog open title="Warning!" description="This action was executed successfully." okButtonLabel="Close" />,
    {
      wrapper: ({ children }) => <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
    }
  );

  expect(getByRole('alertdialog')).toBeInTheDocument();
});
