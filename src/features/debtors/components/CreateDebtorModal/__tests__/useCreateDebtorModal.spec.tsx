import { AppProvider } from '@/providers/app';
import { act, cleanup, renderHook, screen, userEvent } from '@/test/test-utils';

import { useCreateDebtorModal } from '../CreateDebtorModal';

afterEach(() => cleanup());

test('calls show and close the CreateDebtorModal properly', async () => {
  const { result } = renderHook(() => useCreateDebtorModal(), { wrapper: AppProvider });

  act(() => {
    result.current.show();
  });

  expect(screen.getByText('Cadastrar devedor')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Fechar'));

  expect(screen.queryByText('Cadastrar devedor')).not.toBeInTheDocument();
});
