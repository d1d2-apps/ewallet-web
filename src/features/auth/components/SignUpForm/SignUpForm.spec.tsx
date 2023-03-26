import { cleanup, render, userEvent } from '@/test/test-utils';

import { SignUpForm } from './SignUpForm';

const mockSignUp = jest.fn();

jest.mock('@/features/auth', () => ({
  ...jest.requireActual('@/features/auth'),
  useAuth: () => ({
    ...jest.requireActual('@/features/auth').useAuth,
    signUp: mockSignUp
  })
}));

const inputsLabels = {
  name: 'Seu nome completo',
  email: 'Seu e-mail',
  password: 'Sua senha',
  passwordConfirmation: 'Confirme sua senha'
};

const setup = async () => {
  const onSuccess = jest.fn();

  const utils = await render(<SignUpForm onSuccess={onSuccess} />);

  const changeInput = (inputName: keyof typeof inputsLabels, value: string) => {
    return userEvent.type(utils.getByLabelText(inputsLabels[inputName]), value);
  };

  const clickSubmit = () => userEvent.click(utils.getByText('Cadastrar'));

  return {
    ...utils,
    onSuccess,
    changeInput,
    clickSubmit
  };
};

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('shows validation error when submit is clicked and name is not provided', async () => {
  const { clickSubmit, findByText } = await setup();

  await clickSubmit();

  const validationErrorMessage = await findByText('Nome é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and email is not provided', async () => {
  const { clickSubmit, findByText } = await setup();

  await clickSubmit();

  const validationErrorMessage = await findByText('E-mail é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and the email is invalid', async () => {
  const { clickSubmit, changeInput, findByText } = await setup();

  await changeInput('email', 'invalid-email-format');
  await clickSubmit();

  const validationErrorMessage = await findByText('Formato de e-mail inválido');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password length is less then 6', async () => {
  const { clickSubmit, findByText } = await setup();

  await clickSubmit();

  const validationErrorMessage = await findByText('Mínimo de 6 caracteres');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password confirmation is not provided', async () => {
  const { clickSubmit, findByText } = await setup();

  await clickSubmit();

  const validationErrorMessage = await findByText('Confirmação de senha é obrigatória');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('shows validation error when submit is clicked and password confirmation is different from the provided password', async () => {
  const { clickSubmit, changeInput, findByText } = await setup();

  await changeInput('password', 'new-password');
  await changeInput('passwordConfirmation', 'different-password');
  await clickSubmit();

  const validationErrorMessage = await findByText('Confirmação incorreta');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('calls signUp with the provided form values and calls onSuccess once', async () => {
  const { clickSubmit, changeInput, onSuccess } = await setup();

  await changeInput('name', 'John Doe');
  await changeInput('email', 'john.doe@email.com.br');
  await changeInput('password', 'new-password');
  await changeInput('passwordConfirmation', 'new-password');
  await clickSubmit();

  expect(mockSignUp).toHaveBeenCalledWith({
    data: {
      name: 'John Doe',
      email: 'john.doe@email.com.br',
      password: 'new-password',
      passwordConfirmation: 'new-password'
    }
  });

  expect(onSuccess).toHaveBeenCalledTimes(1);
});
