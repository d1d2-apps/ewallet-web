import { CreditCard } from '@/features/creditCards/types';
import { Debtor } from '@/features/debtors';
import { BaseEntity } from '@/types';

export type BillCategory =
  | 'HOUSE'
  | 'EDUCATION'
  | 'ELECTRONICS'
  | 'LEISURE'
  | 'OTHERS'
  | 'RESTAURANT'
  | 'HEALTH'
  | 'SERVICES'
  | 'SUPERMARKET'
  | 'TRANSPORT'
  | 'CLOTHING'
  | 'TRAVEL';

export type Bill = {
  creditCardId: string;
  month: number;
  year: number;
  date: string;
  totalAmount: number;
  installment: number;
  totalOfInstallments: number;
  description: string;
  paid: boolean;
  category: BillCategory;
  creditCard?: CreditCard;
  billDebtors?: BillDebtor[];
} & BaseEntity;

export type BillDebtor = {
  id: string;
  billId: string;
  debtorId?: string;
  amount: number;
  description: string;
  paid: boolean;
  bill?: Bill;
  debtor?: Debtor;
};
