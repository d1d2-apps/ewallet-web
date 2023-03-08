import userEvent from '@testing-library/user-event';

import { render } from '@/test/test-utils';

import { SignUpForm } from './SignUpForm';

const mockSignUp = jest.fn();

jest.mock('@/features/auth', () => ({
  ...jest.requireActual('@/features/auth'),
  useAuth: () => ({
    ...jest.requireActual('@/features/auth').useAuth,
    signUp: mockSignUp
  })
}));

describe('SignUpForm Component', () => {
  it('should render without crashing', async () => {
    const { getByText, getByPlaceholderText, getByLabelText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const nameInput = getByPlaceholderText('Fulano de tal');
    const emailInput = getByPlaceholderText('fulano@email.com.br');
    const passwordInput = getByLabelText('Sua senha');
    const passwordConfirmationInput = getByLabelText('Confirme sua senha');
    const submitButton = getByText('Cadastrar');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordConfirmationInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should not be able to submit if name input is empty', async () => {
    const { getByText, findByText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const submitButton = getByText('Cadastrar');
    await userEvent.click(submitButton);

    const nameInputErrorMessage = await findByText('Nome é obrigatório');
    expect(nameInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if email input is empty', async () => {
    const { getByText, findByText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const submitButton = getByText('Cadastrar');
    await userEvent.click(submitButton);

    const emailInputErrorMessage = await findByText('E-mail é obrigatório');
    expect(emailInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if email input is invalid', async () => {
    const { getByText, getByPlaceholderText, findByText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const emailInput = getByPlaceholderText('fulano@email.com.br');
    const submitButton = getByText('Cadastrar');

    await userEvent.type(emailInput, 'invalid-email-format');
    await userEvent.click(submitButton);

    const emailInputErrorMessage = await findByText('Formato de e-mail inválido');
    expect(emailInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if password length is less then 6', async () => {
    const { getByText, findByText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const submitButton = getByText('Cadastrar');
    await userEvent.click(submitButton);

    const passwordInputErrorMessage = await findByText('Mínimo de 6 caracteres');
    expect(passwordInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if password confirmation input is empty', async () => {
    const { getByText, findByText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const submitButton = getByText('Cadastrar');
    await userEvent.click(submitButton);

    const passwordConfirmationInputErrorMessage = await findByText('Confirmação de senha é obrigatória');
    expect(passwordConfirmationInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if password confirmation is different from password input', async () => {
    const { getByText, getByLabelText, findByText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const passwordInput = getByLabelText('Sua senha');
    const passwordConfirmationInput = getByLabelText('Confirme sua senha');
    const submitButton = getByText('Cadastrar');

    await userEvent.type(passwordInput, '123456');
    await userEvent.type(passwordConfirmationInput, '654321');
    await userEvent.click(submitButton);

    const passwordConfirmationInputErrorMessage = await findByText('Confirmação incorreta');
    expect(passwordConfirmationInputErrorMessage).toBeInTheDocument();
  });

  it('should be able to submit if form values are valid', async () => {
    const { getByText, getByLabelText, getByPlaceholderText } = await render(<SignUpForm onSuccess={jest.fn()} />);

    const nameInput = getByPlaceholderText('Fulano de tal');
    const emailInput = getByPlaceholderText('fulano@email.com.br');
    const passwordInput = getByLabelText('Sua senha');
    const passwordConfirmationInput = getByLabelText('Confirme sua senha');
    const submitButton = getByText('Cadastrar');

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john.doe@email.com.br');
    await userEvent.type(passwordInput, '123456');
    await userEvent.type(passwordConfirmationInput, '123456');
    await userEvent.click(submitButton);

    expect(mockSignUp).toHaveBeenCalledWith({
      data: {
        name: 'John Doe',
        email: 'john.doe@email.com.br',
        password: '123456',
        passwordConfirmation: '123456'
      }
    });
  });
});
