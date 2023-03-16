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

const setup = async () => {
  const utils = await render(<ChangePasswordForm />);

  const changeOldPasswordInput = (value: string) => {
    return userEvent.type(utils.getByLabelText('Sua senha antiga'), value);
  };

  const changePasswordInput = (value: string) => {
    return userEvent.type(utils.getByLabelText('Sua nova senha'), value);
  };

  const changePasswordConfirmationInput = (value: string) => {
    return userEvent.type(utils.getByLabelText('Confirme sua nova senha'), value);
  };

  const clickSubmit = () => userEvent.click(utils.getByText('Alterar'));

  return {
    ...utils,
    changeOldPasswordInput,
    changePasswordInput,
    changePasswordConfirmationInput,
    clickSubmit,
    mockChangePasswordMutation
  };
};

afterEach(() => cleanup());

test('shows validation error when submit is clicked and old password is not provided', async () => {
  const { changePasswordInput, clickSubmit, findByText } = await setup();

  await changePasswordInput('new-password');
  await clickSubmit();

  const validationErrorMessage = await findByText('Senha antiga é obrigatória');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and new password has not the minimum of characters', async () => {
  const { changeOldPasswordInput, changePasswordInput, clickSubmit, findByText } = await setup();

  await changeOldPasswordInput('old-password');
  await changePasswordInput('12345');
  await clickSubmit();

  const validationErrorMessage = await findByText('Mínimo de 6 caracteres');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password confirmation is not provided', async () => {
  const { changeOldPasswordInput, changePasswordInput, clickSubmit, findByText } = await setup();

  await changeOldPasswordInput('old-password');
  await changePasswordInput('new-password');
  await clickSubmit();

  const validationErrorMessage = await findByText('Confirmação de senha é obrigatória');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password confirmation is different from new passowrd', async () => {
  const { changeOldPasswordInput, changePasswordInput, changePasswordConfirmationInput, clickSubmit, findByText } =
    await setup();

  await changeOldPasswordInput('old-password');
  await changePasswordInput('new-password');
  await changePasswordConfirmationInput('different-password');
  await clickSubmit();

  const validationErrorMessage = await findByText('Confirmação incorreta');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('calls change password mutation with form values', async () => {
  const { changeOldPasswordInput, changePasswordInput, changePasswordConfirmationInput, clickSubmit } = await setup();

  await changeOldPasswordInput('old-password');
  await changePasswordInput('new-password');
  await changePasswordConfirmationInput('new-password');
  await clickSubmit();

  expect(mockChangePasswordMutation).toHaveBeenCalledWith({
    data: {
      oldPassword: 'old-password',
      password: 'new-password',
      passwordConfirmation: 'new-password'
    }
  });
});
