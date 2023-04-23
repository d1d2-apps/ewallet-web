import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { CiBurger } from 'react-icons/ci';
import { FiBook, FiGlobe, FiHeadphones, FiHeart, FiHome, FiShoppingBag, FiShoppingCart, FiTv } from 'react-icons/fi';
import { IoCarOutline } from 'react-icons/io5';
import { SlWrench } from 'react-icons/sl';
import { VscSymbolMisc } from 'react-icons/vsc';

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
  OTHERS: 'Outros',
  RESTAURANT: 'Alimentos e bebidas',
  HEALTH: 'Beleza e Saúde',
  SERVICES: 'Serviços',
  SUPERMARKET: 'Mercado',
  TRANSPORT: 'Transporte',
  CLOTHING: 'Moda e acessórios',
  TRAVEL: 'Viagens'
};

export const BillCategoryIcon: Record<BillCategory, ComponentType<IconBaseProps>> = {
  HOUSE: FiHome,
  EDUCATION: FiBook,
  ELECTRONICS: FiTv,
  LEISURE: FiHeadphones,
  OTHERS: VscSymbolMisc,
  RESTAURANT: CiBurger,
  HEALTH: FiHeart,
  SERVICES: SlWrench,
  SUPERMARKET: FiShoppingCart,
  TRANSPORT: IoCarOutline,
  CLOTHING: FiShoppingBag,
  TRAVEL: FiGlobe
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
