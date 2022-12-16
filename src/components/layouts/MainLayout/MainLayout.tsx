import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FiChevronLeft, FiChevronRight, FiCreditCard, FiDollarSign, FiUsers } from 'react-icons/fi';

import { useAuth } from '@/stores/auth';

import { Avatar } from '@/components/elements';

import logoImg from '@/assets/images/logo.png';

import * as S from './MainLayout.styles';

interface NavigationItem {
  name: string;
  to: string;
  icon: IconType;
}

interface NavItemProps extends NavigationItem {
  isActive?: boolean;
  isCollapsed: boolean;
}

const NAVIGATION: NavigationItem[] = [
  { name: 'Devedores', to: './debtors', icon: FiUsers },
  { name: 'Cartões', to: './cards', icon: FiCreditCard },
  { name: 'Faturas', to: './bills', icon: FiDollarSign }
];

function NavItem({ name, to, icon: Icon, isActive = false, isCollapsed }: NavItemProps) {
  return (
    <S.NavItem $active={isActive} $collapsed={isCollapsed} title={name}>
      <Link to={to}>
        <i>
          <Icon />
        </i>
        <span>{name}</span>
      </Link>
    </S.NavItem>
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { user } = useAuth();

  const location = useLocation();

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  const handleToggleSideMenu = () => {
    setIsMenuCollapsed(prevState => !prevState);
  };

  return (
    <S.Container>
      <S.SideMenu $collapsed={isMenuCollapsed}>
        <header>
          <div>
            <img src={logoImg} alt="eWallet Logo" />
            <h1>eWallet Finanças</h1>
          </div>

          <S.CollapseButton onClick={handleToggleSideMenu}>
            {isMenuCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </S.CollapseButton>
        </header>

        <ul>
          {NAVIGATION.map(navItem => (
            <NavItem
              key={navItem.to}
              {...navItem}
              isActive={location.pathname.includes(navItem.to.replace('.', ''))}
              isCollapsed={isMenuCollapsed}
            />
          ))}
        </ul>

        <S.LoggedUser $collapsed={isMenuCollapsed} $active={location.pathname.includes('profile')}>
          <Link to="./profile" title="Ver perfil">
            <Avatar size="sm" source={user?.picture} />
            <strong>Diego Ferreira</strong>
          </Link>
        </S.LoggedUser>
      </S.SideMenu>

      <S.ContentContainer>
        <div>{children}</div>
      </S.ContentContainer>
    </S.Container>
  );
}
