import { formatISO } from 'date-fns';

import { cleanup, render, waitFor } from '@/test/test-utils';

import { Debtor } from '../../types';
import { DebtorsList } from './DebtorsList';

beforeEach(() => jest.resetModules());

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should show LoadingFeedback when there is no data to list', async () => {
  jest.doMock('../../api/getDebtors', () => ({
    useDebtors: jest.fn().mockReturnValue({ isLoading: true })
  }));

  const { getByText } = await render(<DebtorsList />);

  expect(getByText('Carregando devedores...')).toBeInTheDocument();
});

test('should show EmptyFeedback when there is no data to list', async () => {
  jest.doMock('../../api/getDebtors', () => ({
    useDebtors: jest.fn().mockReturnValue({ data: [] })
  }));

  const { getByText } = await render(<DebtorsList />);

  waitFor(() => expect(getByText('Ooops! Está vazio')).toBeInTheDocument());
});

test('should list all fetched credit cards', async () => {
  const debtors: Debtor[] = [
    {
      id: 'debtor-id-1',
      name: 'Credit Card Test 1',
      color: 'red',
      createdAt: formatISO(new Date()),
      updatedAt: formatISO(new Date())
    },
    {
      id: 'debtor-id-2',
      name: 'Credit Card Test 2',
      color: 'blue',
      createdAt: formatISO(new Date()),
      updatedAt: formatISO(new Date())
    },
    {
      id: 'debtor-id-3',
      name: 'Credit Card Test 3',
      color: 'green',
      createdAt: formatISO(new Date()),
      updatedAt: formatISO(new Date())
    }
  ];

  jest.doMock('../../api/getDebtors', () => ({
    useDebtors: jest.fn().mockReturnValue({ data: debtors })
  }));

  const { getByText } = await render(<DebtorsList />);

  waitFor(() => expect(getByText(debtors[0].name)).toBeInTheDocument());
  waitFor(() => expect(getByText(debtors[1].name)).toBeInTheDocument());
  waitFor(() => expect(getByText(debtors[2].name)).toBeInTheDocument());
});
