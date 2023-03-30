import { AppProvider } from '@/providers/app';
import { act, cleanup, renderHook, screen, userEvent } from '@/test/test-utils';

import { useCreateCreditCardModal } from '../useCreateCreditCardModal';

afterEach(() => cleanup());

test('calls show and close the CreateCreditCardModal properly', async () => {
  const { result } = renderHook(() => useCreateCreditCardModal(), { wrapper: AppProvider });

  act(() => {
    result.current.show();
  });

  expect(screen.getByText('Cadastrar cartão de crédito')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Fechar'));

  expect(screen.queryByText('Cadastrar cartão de crédito')).not.toBeInTheDocument();
});
