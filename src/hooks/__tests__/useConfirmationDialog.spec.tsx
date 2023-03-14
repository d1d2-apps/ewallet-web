import { AppProvider } from '@/providers/app';
import { act, renderHook, screen, userEvent } from '@/test/test-utils';

import { useConfirmationDialog } from '../useConfirmationDialog';

const onConfirm = jest.fn();

describe('useConfirmationDialog Hook', () => {
  it('should render without crashing', async () => {
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
});
