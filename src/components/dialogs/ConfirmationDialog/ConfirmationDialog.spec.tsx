import { ThemeProvider } from 'styled-components';

import { themes } from '@/config/styles/themes';
import { cleanup, rtlRender } from '@/test/test-utils';

import { ConfirmationDialog } from './ConfirmationDialog';

afterEach(() => cleanup());

test('shows properly', async () => {
  const { getByRole } = rtlRender(
    <ConfirmationDialog
      open
      title="Warning!"
      description="This action was executed successfully."
      okButtonLabel="Close"
      onConfirm={jest.fn()}
    />,
    {
      wrapper: ({ children }) => <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
    }
  );

  expect(getByRole('alertdialog')).toBeInTheDocument();
});
