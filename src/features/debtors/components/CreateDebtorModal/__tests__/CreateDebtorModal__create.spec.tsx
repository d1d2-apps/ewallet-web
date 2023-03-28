import { cleanup } from '@/test/test-utils';

import { setupCreateDebtorModalTestUtils } from './helpers/setup';

const defaultSelectedColor = '#6b7280';
const mockCreateDebtorMutation = jest.fn();

jest.mock('../../../api/createDebtor', () => ({
  useCreateDebtor: () => ({
    mutateAsync: mockCreateDebtorMutation
  })
}));

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should not be able to submit if name is not provided', async () => {
  const { clickSubmit, findByText } = await setupCreateDebtorModalTestUtils();

  await clickSubmit();

  const validationErrorMessage = await findByText('Nome é obrigatório');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should not be able to submit if provided name has not the minimun length', async () => {
  const { clickSubmit, changeInput, findByText } = await setupCreateDebtorModalTestUtils();

  await changeInput('name', 'Te');
  await clickSubmit();

  const validationErrorMessage = await findByText('Mínimo de 5 caracteres');
  expect(validationErrorMessage).toBeInTheDocument();
});

test('should initialize with first color selected', async () => {
  const { clickSubmit, getByLabelText } = await setupCreateDebtorModalTestUtils();

  await clickSubmit();

  expect(getByLabelText(defaultSelectedColor)).toBeChecked();
});

test('should be able to submit if form values are valid', async () => {
  const onSuccess = jest.fn();

  const { clickSubmit, changeInput } = await setupCreateDebtorModalTestUtils({ onSuccess });

  await changeInput('name', 'John Doe');
  await clickSubmit();

  expect(mockCreateDebtorMutation).toHaveBeenCalledWith({
    data: { name: 'John Doe', color: defaultSelectedColor }
  });

  expect(onSuccess).toHaveBeenCalledTimes(1);
});
