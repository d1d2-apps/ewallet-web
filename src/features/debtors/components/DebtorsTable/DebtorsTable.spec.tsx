import { formatISO } from 'date-fns';

import { cleanup, render, userEvent, waitFor } from '@/test/test-utils';

import { Debtor } from '../../types';
import { DebtorsTable } from './DebtorsTable';

let mockDeleteDebtorMutation = jest.fn();

jest.mock('../../api/deleteDebtor', () => ({
  useDeleteDebtor: () => ({
    mutateAsync: mockDeleteDebtorMutation
  })
}));

const debtors: Debtor[] = [
  {
    id: 'debtor-id-1',
    name: 'Debtor Test 1',
    color: 'red',
    createdAt: formatISO(new Date()),
    updatedAt: formatISO(new Date())
  },
  {
    id: 'debtor-id-2',
    name: 'Debtor Test 2',
    color: 'blue',
    createdAt: formatISO(new Date()),
    updatedAt: formatISO(new Date())
  },
  {
    id: 'debtor-id-3',
    name: 'Debtor Test 3',
    color: 'green',
    createdAt: formatISO(new Date()),
    updatedAt: formatISO(new Date())
  }
];

beforeEach(() => jest.resetModules());

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should list the provided debtors', async () => {
  const { getByText } = await render(<DebtorsTable data={debtors} />);

  expect(getByText(debtors[0].name)).toBeInTheDocument();
  expect(getByText(debtors[1].name)).toBeInTheDocument();
  expect(getByText(debtors[2].name)).toBeInTheDocument();
});

test('should be able to open CreateDebtorModal when edit button is clicked', async () => {
  const { getByTitle, getByRole } = await render(<DebtorsTable data={[debtors[0]]} />);

  const editButton = getByTitle(`Editar devedor ${debtors[0].name}`);
  await userEvent.click(editButton);

  expect(getByRole('dialog')).toBeInTheDocument();
});

test('should call the delete debtor mutation when delete button is clicked', async () => {
  const { getByText, getByTitle, getByRole } = await render(<DebtorsTable data={[debtors[0]]} />);

  const deleteButton = getByTitle(`Excluir devedor ${debtors[0].name}`);
  await userEvent.click(deleteButton);

  expect(getByRole('alertdialog')).toBeInTheDocument();

  await userEvent.click(getByText('Excluir'));

  expect(mockDeleteDebtorMutation).toHaveBeenCalledWith({ debtorId: debtors[0].id });
});

test('should show error alert dialog when delete debtor mutation fails', async () => {
  mockDeleteDebtorMutation = jest.fn().mockRejectedValue(new Error('test'));

  jest.doMock('../../api/deleteDebtor', () => ({
    useDeleteDebtor: () => ({
      mutateAsync: mockDeleteDebtorMutation
    })
  }));

  const { getByText, getByTitle, getByRole } = await render(<DebtorsTable data={[debtors[0]]} />);

  const deleteButton = getByTitle(`Excluir devedor ${debtors[0].name}`);
  await userEvent.click(deleteButton);

  expect(getByRole('alertdialog')).toBeInTheDocument();

  await userEvent.click(getByText('Excluir'));

  expect(mockDeleteDebtorMutation).toHaveBeenCalledWith({ debtorId: debtors[0].id });

  waitFor(() => {
    expect(getByText('Não foi possível excluir o devedor')).toBeInTheDocument();
  });
});
