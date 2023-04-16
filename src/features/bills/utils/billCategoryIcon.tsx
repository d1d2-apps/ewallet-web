import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { CiBurger } from 'react-icons/ci';
import { FiBook, FiGlobe, FiHeadphones, FiHeart, FiHome, FiShoppingBag, FiShoppingCart, FiTv } from 'react-icons/fi';
import { IoCarOutline } from 'react-icons/io5';
import { SlWrench } from 'react-icons/sl';
import { VscSymbolMisc } from 'react-icons/vsc';

import { BillCategory } from '../types';

export const billCategoryIcon: Record<BillCategory, ComponentType<IconBaseProps>> = {
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
