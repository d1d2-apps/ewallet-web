import { formatISO } from 'date-fns';

import { Debtor } from '@/features/debtors';
import { cleanup } from '@/test/test-utils';

import { setupCreateDebtorModalTestUtils } from './helpers/setup';

const mockUpdateDebtorMutation = jest.fn();

jest.mock('../../../api/updateDebtor', () => ({
  useUpdateDebtor: () => ({
    mutateAsync: mockUpdateDebtorMutation
  })
}));

const debtor: Debtor = {
  id: 'debtor-id',
  name: 'John Doe',
  color: '#eab308',
  createdAt: formatISO(new Date()),
  updatedAt: formatISO(new Date())
};

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should load form with values from the provided credit card', async () => {
  const { getByLabelText } = await setupCreateDebtorModalTestUtils({ debtor });

  const nameInput = getByLabelText('Nome');
  expect(nameInput).toHaveValue(debtor.name);

  expect(getByLabelText(debtor.color)).toBeChecked();
});

test('should be able to submit if form values are valid', async () => {
  const onSuccess = jest.fn();

  const { clickSubmit, changeInput } = await setupCreateDebtorModalTestUtils({ onSuccess, debtor });

  await changeInput('name', 'Editted John Doe', { initialSelectionStart: 0, initialSelectionEnd: debtor.name.length });
  await clickSubmit();

  expect(mockUpdateDebtorMutation).toHaveBeenCalledWith({
    data: { name: 'Editted John Doe', color: debtor.color },
    debtorId: debtor.id
  });

  expect(onSuccess).toHaveBeenCalledTimes(1);
});
