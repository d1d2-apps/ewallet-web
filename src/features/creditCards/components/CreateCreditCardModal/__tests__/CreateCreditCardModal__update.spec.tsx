import { formatISO } from 'date-fns';

import { CreditCard } from '@/features/creditCards/types';
import { cleanup } from '@/test/test-utils';

import { setupCreateCardModalTestUtils } from './helpers/setup';

const mockUpdateCreditCardMutation = jest.fn();

jest.mock('../../../api/updateCreditCard', () => ({
  useUpdateCreditCard: () => ({
    mutateAsync: mockUpdateCreditCardMutation
  })
}));

const creditCard: CreditCard = {
  id: 'credit-card-id',
  name: 'Credit Card Test',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date())
};

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should load form with values from the provided credit card', async () => {
  const { getByLabelText } = setupCreateCardModalTestUtils({ creditCard });

  const nameInput = getByLabelText('Nome');
  expect(nameInput).toHaveValue(creditCard.name);
});

test('should be able to submit if form values are valid', async () => {
  const onSuccess = jest.fn();

  const { clickSubmit, changeInput } = setupCreateCardModalTestUtils({ onSuccess, creditCard });

  await changeInput('name', 'Credit Card', { initialSelectionStart: 0, initialSelectionEnd: creditCard.name.length });
  await clickSubmit();

  expect(mockUpdateCreditCardMutation).toHaveBeenCalledWith({
    data: { name: 'Credit Card' },
    creditCardId: creditCard.id
  });

  expect(onSuccess).toHaveBeenCalledTimes(1);
});
