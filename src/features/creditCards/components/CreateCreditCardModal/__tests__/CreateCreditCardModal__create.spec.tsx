import { AppProvider } from '@/providers/app';
import { cleanup, rtlRender, userEvent } from '@/test/test-utils';

import { CreateCreditCardModal, CreateCreditCardModalProps } from '../CreateCreditCardModal';

const mockCreateCreditCardMutation = jest.fn();

jest.mock('../../../api/createCreditCard', () => ({
  useCreateCreditCard: () => ({
    mutateAsync: mockCreateCreditCardMutation
  })
}));

const inputsLabels = {
  name: 'Nome'
};

const setup = (modifiers?: CreateCreditCardModalProps) => {
  const utils = rtlRender(<CreateCreditCardModal open {...modifiers} />, {
    wrapper: AppProvider
  });

  const changeInput = (inputName: keyof typeof inputsLabels, value: string) => {
    return userEvent.type(utils.getByLabelText(inputsLabels[inputName]), value);
  };

  const clickSubmit = () => userEvent.click(utils.getByText('Salvar'));

  return {
    ...utils,
    changeInput,
    clickSubmit
  };
};

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should not be able to submit if name is not provided', async () => {
  const { clickSubmit, findByText } = setup();

  await clickSubmit();

  const validationErrorMessage = await findByText('Nome é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should not be able to submit if provided name has not the minimun length', async () => {
  const { clickSubmit, changeInput, findByText } = setup();

  await changeInput('name', 'Te');
  await clickSubmit();

  const validationErrorMessage = await findByText('Mínimo de 3 caracteres');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should be able to submit if form values are valid', async () => {
  const onSuccess = jest.fn();

  const { clickSubmit, changeInput } = setup({ onSuccess });

  await changeInput('name', 'Credit Card');
  await clickSubmit();

  expect(mockCreateCreditCardMutation).toHaveBeenCalledWith({
    data: { name: 'Credit Card' }
  });

  expect(onSuccess).toHaveBeenCalledTimes(1);
});
