import {
  Airplane,
  Book,
  Car,
  ForkKnife,
  Headphones,
  Heart,
  House,
  Shapes,
  ShoppingCart,
  Television,
  TShirt,
  Wrench
} from '@phosphor-icons/react';

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

// eslint-disable-next-line no-shadow
export const BillCategoryLabel: Record<BillCategory, string> = {
  HOUSE: 'Casa & Eletro',
  EDUCATION: 'Educação',
  ELECTRONICS: 'Eletrônicos',
  LEISURE: 'Lazer',
  RESTAURANT: 'Alimentos e bebidas',
  HEALTH: 'Beleza e Saúde',
  SERVICES: 'Serviços',
  SUPERMARKET: 'Mercado',
  TRANSPORT: 'Transporte',
  CLOTHING: 'Moda e acessórios',
  TRAVEL: 'Viagens',
  OTHERS: 'Outros'
};

export const BillCategoryIcon = {
  HOUSE: House,
  EDUCATION: Book,
  ELECTRONICS: Television,
  LEISURE: Headphones,
  RESTAURANT: ForkKnife,
  HEALTH: Heart,
  SERVICES: Wrench,
  SUPERMARKET: ShoppingCart,
  TRANSPORT: Car,
  CLOTHING: TShirt,
  TRAVEL: Airplane,
  OTHERS: Shapes
};

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
