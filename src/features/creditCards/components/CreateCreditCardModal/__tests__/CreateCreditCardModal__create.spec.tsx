import { cleanup } from '@/test/test-utils';

import { setupCreateCardModalTestUtils } from './helpers/setup';

const mockCreateCreditCardMutation = jest.fn();

jest.mock('../../../api/createCreditCard', () => ({
  useCreateCreditCard: () => ({
    mutateAsync: mockCreateCreditCardMutation
  })
}));

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should not be able to submit if name is not provided', async () => {
  const { clickSubmit, findByText } = setupCreateCardModalTestUtils();

  await clickSubmit();

  const validationErrorMessage = await findByText('Nome é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should not be able to submit if provided name has not the minimun length', async () => {
  const { clickSubmit, changeInput, findByText } = setupCreateCardModalTestUtils();

  await changeInput('name', 'Te');
  await clickSubmit();

  const validationErrorMessage = await findByText('Mínimo de 3 caracteres');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should be able to submit if form values are valid', async () => {
  const onSuccess = jest.fn();

  const { clickSubmit, changeInput } = setupCreateCardModalTestUtils({ onSuccess });

  await changeInput('name', 'Credit Card');
  await clickSubmit();

  expect(mockCreateCreditCardMutation).toHaveBeenCalledWith({
    data: { name: 'Credit Card' }
  });

  expect(onSuccess).toHaveBeenCalledTimes(1);
});
