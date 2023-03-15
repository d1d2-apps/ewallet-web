import { render, userEvent } from '@/test/test-utils';

import { ChangePasswordForm } from './ChangePasswordForm';

const mockChangePasswordMutation = jest.fn();

jest.mock('../../api/changePassword', () => ({
  ...jest.requireActual('../../api/changePassword'),
  useChangePassword: () => ({
    ...jest.requireActual('../../api/changePassword').useChangePassword,
    mutateAsync: mockChangePasswordMutation
  })
}));

describe('ChangePasswordForm Component', () => {
  it('should render without crashing', async () => {
    const { getByText, getByLabelText } = await render(<ChangePasswordForm />);

    const oldPasswordInput = getByLabelText('Sua senha antiga');
    const passwordInput = getByLabelText('Sua nova senha');
    const passwordConfirmationInput = getByLabelText('Confirme sua nova senha');
    const submitButton = getByText('Alterar');

    expect(oldPasswordInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordConfirmationInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should not be able to submit if old password input is empty', async () => {
    const { getByLabelText, getByText, findByText } = await render(<ChangePasswordForm />);

    const passwordInput = getByLabelText('Sua nova senha');
    const submitButton = getByText('Alterar');

    await userEvent.type(passwordInput, 'test');
    await userEvent.click(submitButton);

    const oldPasswordInputErrorMessage = await findByText('Senha antiga é obrigatória');
    expect(oldPasswordInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if new password input has not minimum of characters', async () => {
    const { getByLabelText, getByText, findByText } = await render(<ChangePasswordForm />);

    const oldPasswordInput = getByLabelText('Sua senha antiga');
    const passwordInput = getByLabelText('Sua nova senha');
    const submitButton = getByText('Alterar');

    await userEvent.type(oldPasswordInput, 'old-password');
    await userEvent.type(passwordInput, 'test');
    await userEvent.click(submitButton);

    const passwordInputErrorMessage = await findByText('Mínimo de 6 caracteres');
    expect(passwordInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if new password confirmation input is empty', async () => {
    const { getByLabelText, getByText, findByText } = await render(<ChangePasswordForm />);

    const oldPasswordInput = getByLabelText('Sua senha antiga');
    const passwordInput = getByLabelText('Sua nova senha');
    const submitButton = getByText('Alterar');

    await userEvent.type(oldPasswordInput, 'old-password');
    await userEvent.type(passwordInput, 'new-password');
    await userEvent.click(submitButton);

    const passwordConfirmationInputErrorMessage = await findByText('Confirmação de senha é obrigatória');
    expect(passwordConfirmationInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if new password confirmation input is different from password input', async () => {
    const { getByLabelText, getByText, findByText } = await render(<ChangePasswordForm />);

    const oldPasswordInput = getByLabelText('Sua senha antiga');
    const passwordInput = getByLabelText('Sua nova senha');
    const passwordConfirmationInput = getByLabelText('Confirme sua nova senha');
    const submitButton = getByText('Alterar');

    await userEvent.type(oldPasswordInput, 'old-password');
    await userEvent.type(passwordInput, 'new-password');
    await userEvent.type(passwordConfirmationInput, 'different-password');
    await userEvent.click(submitButton);

    const passwordConfirmationInputErrorMessage = await findByText('Confirmação incorreta');
    expect(passwordConfirmationInputErrorMessage).toBeInTheDocument();
  });

  it('should be able to submit if form values are valid', async () => {
    const { getByLabelText, getByText } = await render(<ChangePasswordForm />);

    const oldPasswordInput = getByLabelText('Sua senha antiga');
    const passwordInput = getByLabelText('Sua nova senha');
    const passwordConfirmationInput = getByLabelText('Confirme sua nova senha');
    const submitButton = getByText('Alterar');

    await userEvent.type(oldPasswordInput, 'old-password');
    await userEvent.type(passwordInput, 'new-password');
    await userEvent.type(passwordConfirmationInput, 'new-password');
    await userEvent.click(submitButton);

    expect(mockChangePasswordMutation).toHaveBeenCalledWith({
      data: {
        oldPassword: 'old-password',
        password: 'new-password',
        passwordConfirmation: 'new-password'
      }
    });
  });
});
