import { cleanup, render, userEvent } from '@/test/test-utils';

import { ChangePasswordForm } from './ChangePasswordForm';

const mockChangePasswordMutation = jest.fn();

jest.mock('../../api/changePassword', () => ({
  ...jest.requireActual('../../api/changePassword'),
  useChangePassword: () => ({
    ...jest.requireActual('../../api/changePassword').useChangePassword,
    mutateAsync: mockChangePasswordMutation
  })
}));

const inputsLabels = {
  oldPassword: 'Sua senha antiga',
  password: 'Sua nova senha',
  passwordConfirmation: 'Confirme sua nova senha'
};

const setup = async () => {
  const utils = await render(<ChangePasswordForm />);

  const changeInput = (inputName: keyof typeof inputsLabels, value: string) => {
    return userEvent.type(utils.getByLabelText(inputsLabels[inputName]), value);
  };

  const clickSubmit = () => userEvent.click(utils.getByText('Alterar'));

  return {
    ...utils,
    changeInput,
    clickSubmit,
    mockChangePasswordMutation
  };
};

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('shows validation error when submit is clicked and old password is not provided', async () => {
  const { changeInput, clickSubmit, findByText } = await setup();

  await changeInput('password', 'new-password');
  await clickSubmit();

  const validationErrorMessage = await findByText('Senha antiga é obrigatória');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and new password has not the minimum of characters', async () => {
  const { changeInput, clickSubmit, findByText } = await setup();

  await changeInput('oldPassword', 'old-password');
  await changeInput('password', '12345');
  await clickSubmit();

  const validationErrorMessage = await findByText('Mínimo de 6 caracteres');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password confirmation is not provided', async () => {
  const { changeInput, clickSubmit, findByText } = await setup();

  await changeInput('oldPassword', 'old-password');
  await changeInput('password', 'new-password');
  await clickSubmit();

  const validationErrorMessage = await findByText('Confirmação de senha é obrigatória');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password confirmation is different from new passowrd', async () => {
  const { changeInput, clickSubmit, findByText } = await setup();

  await changeInput('oldPassword', 'old-password');
  await changeInput('password', 'new-password');
  await changeInput('passwordConfirmation', 'different-password');
  await clickSubmit();

  const validationErrorMessage = await findByText('Confirmação incorreta');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('calls change password mutation with form values', async () => {
  const { changeInput, clickSubmit } = await setup();

  await changeInput('oldPassword', 'old-password');
  await changeInput('password', 'new-password');
  await changeInput('passwordConfirmation', 'new-password');
  await clickSubmit();

  expect(mockChangePasswordMutation).toHaveBeenCalledWith({
    data: {
      oldPassword: 'old-password',
      password: 'new-password',
      passwordConfirmation: 'new-password'
    }
  });
});
