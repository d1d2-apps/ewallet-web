import { formatISO } from 'date-fns';

import { cleanup, render, waitFor } from '@/test/test-utils';

import { CreditCard } from '../../types';
import { CreditCardsList } from './CreditCardsList';

beforeEach(() => jest.resetModules());

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should show LoadingFeedback when there is no data to list', async () => {
  jest.doMock('../../api/getCreditCards', () => ({
    useCreditCards: jest.fn().mockReturnValue({ isLoading: true })
  }));

  const { getByText } = await render(<CreditCardsList />);

  expect(getByText('Carregando cartões de crédito...')).toBeInTheDocument();
});

test('should show EmptyFeedback when there is no data to list', async () => {
  jest.doMock('../../api/getCreditCards', () => ({
    useCreditCards: jest.fn().mockReturnValue({ data: [] })
  }));

  const { getByText } = await render(<CreditCardsList />);

  waitFor(() => expect(getByText('Ooops! Está vazio')).toBeInTheDocument());
});

test('should list all fetched credit cards', async () => {
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

  jest.doMock('../../api/getCreditCards', () => ({
    useCreditCards: jest.fn().mockReturnValue({ data: creditCards })
  }));

  const { getByText } = await render(<CreditCardsList />);

  waitFor(() => expect(getByText(creditCards[0].name)).toBeInTheDocument());
  waitFor(() => expect(getByText(creditCards[1].name)).toBeInTheDocument());
  waitFor(() => expect(getByText(creditCards[2].name)).toBeInTheDocument());
});
