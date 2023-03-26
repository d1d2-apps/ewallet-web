import { formatISO } from 'date-fns';

import { cleanup, render, userEvent, waitFor } from '@/test/test-utils';

import { CreditCard } from '../../types';
import { CreditCardsTable } from './CreditCardsTable';

let mockDeleteCreditCardMutation = jest.fn();

jest.mock('../../api/deleteCreditCard', () => {
  return {
    __esModule: true,
    useDeleteCreditCard: () => ({
      mutateAsync: mockDeleteCreditCardMutation
    })
  };
});

const creditCards: CreditCard[] = [
  {
    id: 'credit-card-id-1',
    name: 'Credit Card Test 1',
    createdAt: formatISO(new Date()),
    updatedAt: formatISO(new Date())
  },
  {
    id: 'credit-card-id-2',
    name: 'Credit Card Test 2',
    createdAt: formatISO(new Date()),
    updatedAt: formatISO(new Date())
  },
  {
    id: 'credit-card-id-3',
    name: 'Credit Card Test 3',
    createdAt: formatISO(new Date()),
    updatedAt: formatISO(new Date())
  }
];

beforeEach(() => jest.resetModules());

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should list the provided credit cards', async () => {
  const { getByText } = await render(<CreditCardsTable data={creditCards} />);

  expect(getByText(creditCards[0].name)).toBeInTheDocument();
  expect(getByText(creditCards[1].name)).toBeInTheDocument();
  expect(getByText(creditCards[2].name)).toBeInTheDocument();
});

test('should be able to open CreateCreditCardModal when edit button is clicked', async () => {
  const { getByTitle, getByRole } = await render(<CreditCardsTable data={[creditCards[0]]} />);

  const editButton = getByTitle(`Editar cartão ${creditCards[0].name}`);
  await userEvent.click(editButton);

  expect(getByRole('dialog')).toBeInTheDocument();
});

test('should call the delete credit card mutation when delete button is clicked', async () => {
  const { getByText, getByTitle, getByRole } = await render(<CreditCardsTable data={[creditCards[0]]} />);

  const deleteButton = getByTitle(`Excluir cartão ${creditCards[0].name}`);
  await userEvent.click(deleteButton);

  expect(getByRole('alertdialog')).toBeInTheDocument();

  await userEvent.click(getByText('Excluir'));

  expect(mockDeleteCreditCardMutation).toHaveBeenCalledWith({ creditCardId: creditCards[0].id });
});

test('should show error alert dialog when delete credit card mutation fails', async () => {
  mockDeleteCreditCardMutation = jest.fn().mockRejectedValue(new Error('test'));

  jest.doMock('../../api/deleteCreditCard', () => ({
    useDeleteCreditCard: () => ({
      mutateAsync: mockDeleteCreditCardMutation
    })
  }));

  const { getByText, getByTitle, getByRole } = await render(<CreditCardsTable data={[creditCards[0]]} />);

  const deleteButton = getByTitle(`Excluir cartão ${creditCards[0].name}`);
  await userEvent.click(deleteButton);

  expect(getByRole('alertdialog')).toBeInTheDocument();

  await userEvent.click(getByText('Excluir'));

  expect(mockDeleteCreditCardMutation).toHaveBeenCalledWith({ creditCardId: creditCards[0].id });

  waitFor(() => {
    expect(getByText('Não foi possível excluir o cartão de crédito')).toBeInTheDocument();
  });
});
