import { AppProvider } from '@/providers/app';
import { act, cleanup, renderHook, screen, userEvent } from '@/test/test-utils';

import { useAlertDialog } from '../useAlertDialog';

afterEach(() => cleanup());

test('calls show and close the dialog properly', async () => {
  const { result } = renderHook(() => useAlertDialog(), { wrapper: AppProvider });

  act(() => {
    result.current.show({
      title: 'Warning!',
      description: 'This action was executed successfully.',
      okButtonLabel: 'Close'
    });
  });

  expect(screen.getByRole('alertdialog')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Close'));

  expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
});
