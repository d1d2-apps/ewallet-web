import { cleanup, render, userEvent } from '@/test/test-utils';

import { SignInForm } from './SignInForm';

const mockSignIn = jest.fn();

jest.mock('@/features/auth', () => ({
  ...jest.requireActual('@/features/auth'),
  useAuth: () => ({
    ...jest.requireActual('@/features/auth').useAuth,
    signIn: mockSignIn
  })
}));

const setup = async () => {
  const onSuccess = jest.fn();

  const utils = await render(<SignInForm onSuccess={onSuccess} />);

  const changeEmailInput = (value: string) => {
    return userEvent.type(utils.getByLabelText('Seu e-mail'), value);
  };

  const changePasswordInput = (value: string) => {
    return userEvent.type(utils.getByLabelText('Sua senha'), value);
  };

  const clickSubmit = () => userEvent.click(utils.getByText('Entrar'));

  return {
    ...utils,
    onSuccess,
    changeEmailInput,
    changePasswordInput,
    clickSubmit
  };
};

afterEach(() => cleanup());

test('shows validation error when submit is clicked and email is not provided', async () => {
  const { clickSubmit, findByText } = await setup();

  await clickSubmit();

  const validationErrorMessage = await findByText('E-mail é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and the provided email is invalid', async () => {
  const { changeEmailInput, clickSubmit, findByText } = await setup();

  await changeEmailInput('invalid-email-format');
  await clickSubmit();

  const validationErrorMessage = await findByText('Formato de e-mail inválido');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password is not provided', async () => {
  const { clickSubmit, findByText } = await setup();

  await clickSubmit();

  const validationErrorMessage = await findByText('Senha é orbigatória');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('calls signIn with provided form values and onSuccess once', async () => {
  const { changeEmailInput, changePasswordInput, clickSubmit, onSuccess } = await setup();

  await changeEmailInput('test@email.com');
  await changePasswordInput('123456');
  await clickSubmit();

  expect(mockSignIn).toHaveBeenCalledWith({ data: { email: 'test@email.com', password: '123456' } });
  expect(onSuccess).toHaveBeenCalledTimes(1);
});
