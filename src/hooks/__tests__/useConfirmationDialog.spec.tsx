import { AppProvider } from '@/providers/app';
import { act, cleanup, renderHook, screen, userEvent } from '@/test/test-utils';

import { useConfirmationDialog } from '../useConfirmationDialog';

const onConfirm = jest.fn();

afterEach(() => cleanup());

test('calls onConfirm once and close the dialog properly', async () => {
  const { result } = renderHook(() => useConfirmationDialog(), { wrapper: AppProvider });

  act(() => {
    result.current.show({
      title: 'Warning!',
      description: 'This action was executed successfully.',
      okButtonLabel: 'Close',
      onConfirm
    });
  });

  expect(screen.getByRole('alertdialog')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Close'));

  expect(onConfirm).toHaveBeenCalledTimes(1);

  expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
});
