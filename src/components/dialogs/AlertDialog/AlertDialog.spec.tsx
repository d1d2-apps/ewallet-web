import { ThemeProvider } from 'styled-components';

import { themes } from '@/config/styles/themes';
import { rtlRender } from '@/test/test-utils';

import { AlertDialog } from './AlertDialog';

describe('AlertDialog Component', () => {
  it('should render without crashing', async () => {
    const { getByRole } = rtlRender(
      <AlertDialog open title="Warning!" description="This action was executed successfully." okButtonLabel="Close" />,
      {
        wrapper: ({ children }) => <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
      }
    );

    expect(getByRole('alertdialog')).toBeInTheDocument();
  });
});
