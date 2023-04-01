import { formatISO } from 'date-fns';

import { cleanup, render, userEvent, waitFor } from '@/test/test-utils';

import { UpdateProfileForm } from './UpdateProfileForm';

jest.mock('@/features/auth', () => ({
  ...jest.requireActual('@/features/auth'),
  useAuth: jest.fn().mockReturnValue({
    ...jest.requireActual('@/features/auth').useAuth,
    user: {
      id: 'user-id',
      name: 'John Doe',
      email: 'john@doe.com',
      picture: 'user-picture',
      createdAt: formatISO(new Date()),
      updatedAt: formatISO(new Date())
    }
  })
}));

const inputsLabels = {
  name: 'Seu nome completo',
  email: 'Seu e-mail'
};

const setup = async () => {
  const utils = await render(<UpdateProfileForm />);

  const changeInput = (inputName: keyof typeof inputsLabels, value: string) => {
    return userEvent.type(utils.getByLabelText(inputsLabels[inputName]), value);
  };

  const clearInput = (inputName: keyof typeof inputsLabels) => {
    return userEvent.clear(utils.getByLabelText(inputsLabels[inputName]));
  };

  const clickSubmit = () => userEvent.click(utils.getByText('Salvar'));

  return { ...utils, changeInput, clearInput, clickSubmit };
};

beforeEach(() => jest.resetModules());

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should show validation error when submit is clicked and no name is provided', async () => {
  const { clearInput, clickSubmit, findByText } = await setup();

  await clearInput('name');
  await clickSubmit();

  const validationErrorMessage = await findByText('Nome é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should show validation error when submit is clicked and no email is provided', async () => {
  const { clearInput, clickSubmit, findByText } = await setup();

  await clearInput('email');
  await clickSubmit();

  const validationErrorMessage = await findByText('E-mail é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should show validation error when submit is clicked and provided email is invalid', async () => {
  const { changeInput, clearInput, clickSubmit, findByText } = await setup();

  await clearInput('email');
  await changeInput('email', 'invalid-email-format');
  await clickSubmit();

  const validationErrorMessage = await findByText('Formato de e-mail inválido');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should be able to submit when form values are valid', async () => {
  const mockUpdateProfileMutation = jest.fn();

  jest.doMock('../../api/updateProfile', () => ({
    useUpdateProfile: jest.fn().mockReturnValue({ mutateAsync: mockUpdateProfileMutation })
  }));

  const { changeInput, clearInput, clickSubmit } = await setup();

  await clearInput('name');
  await clearInput('email');

  await changeInput('name', 'Editted User');
  await changeInput('email', 'editted@user.com');
  await clickSubmit();

  waitFor(() =>
    expect(mockUpdateProfileMutation).toHaveBeenCalledWith({
      data: {
        name: 'Editted User',
        email: 'editted@user.com'
      }
    })
  );
});
