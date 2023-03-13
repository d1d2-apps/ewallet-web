import { render, userEvent } from '@/test/test-utils';

import { SignInForm } from './SignInForm';

const mockSignIn = jest.fn();

jest.mock('@/features/auth', () => ({
  ...jest.requireActual('@/features/auth'),
  useAuth: () => ({
    ...jest.requireActual('@/features/auth').useAuth,
    signIn: mockSignIn
  })
}));

describe('SignInForm Component', () => {
  it('should render without crashing', async () => {
    const { getByText, getByPlaceholderText } = await render(<SignInForm onSuccess={jest.fn()} />);

    const emailInput = getByPlaceholderText('fulano@email.com.br');
    const passwordInput = getByPlaceholderText('********');
    const submitButton = getByText('Entrar');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should not be able to submit if email input is empty', async () => {
    const { getByText, findByText } = await render(<SignInForm onSuccess={jest.fn()} />);

    const submitButton = getByText('Entrar');
    await userEvent.click(submitButton);

    const emailInputErrorMessage = await findByText('E-mail é obrigatório');
    expect(emailInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if email input is invalid', async () => {
    const { getByText, getByPlaceholderText, findByText } = await render(<SignInForm onSuccess={jest.fn()} />);

    const emailInput = getByPlaceholderText('fulano@email.com.br');
    const submitButton = getByText('Entrar');

    await userEvent.type(emailInput, 'invalid-email-format');
    await userEvent.click(submitButton);

    const emailInputErrorMessage = await findByText('Formato de e-mail inválido');
    expect(emailInputErrorMessage).toBeInTheDocument();
  });

  it('should not be able to submit if password input is empty', async () => {
    const { getByText, findByText } = await render(<SignInForm onSuccess={jest.fn()} />);

    const submitButton = getByText('Entrar');
    await userEvent.click(submitButton);

    const passwordInputErrorMessage = await findByText('Senha é orbigatória');
    expect(passwordInputErrorMessage).toBeInTheDocument();
  });

  it('should be able to submit if form values are valid', async () => {
    const { getByText, getByPlaceholderText } = await render(<SignInForm onSuccess={jest.fn()} />);

    const emailInput = getByPlaceholderText('fulano@email.com.br');
    const passwordInput = getByPlaceholderText('********');
    const submitButton = getByText('Entrar');

    await userEvent.type(emailInput, 'test@email.com');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(submitButton);

    expect(mockSignIn).toHaveBeenCalledWith({ data: { email: 'test@email.com', password: '123456' } });
  });
});
