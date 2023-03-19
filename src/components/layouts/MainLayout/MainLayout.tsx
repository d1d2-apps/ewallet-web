import { useState } from 'react';
import { IconType } from 'react-icons';
import { FiChevronLeft, FiChevronRight, FiCreditCard, FiDollarSign, FiMoon, FiSun, FiUsers } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import logoImg from '@/assets/images/logo.png';
import { Avatar, Button, Tooltip } from '@/components/elements';
import { useAuth } from '@/features/auth';
import { useColorModeValue } from '@/hooks';
import { useColorModeStore } from '@/stores/colorMode';

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
    <Tooltip content={name} side="right">
      <S.NavItem $isActive={isActive} $isCollapsed={isCollapsed}>
        <Link to={to}>
          <i>
            <Icon />
          </i>
          <span>{name}</span>
        </Link>
      </S.NavItem>
    </Tooltip>
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { user } = useAuth();

  const location = useLocation();

  const { toggleColorMode } = useColorModeStore();

  const colorModeButtonConfig = {
    title: useColorModeValue('Habilitar modo escuro', 'Habilitar modo claro'),
    icon: useColorModeValue(<FiMoon />, <FiSun />)
  };

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  const handleToggleSideMenu = () => {
    setIsMenuCollapsed(prevState => !prevState);
  };

  return (
    <S.Container>
      <S.ContentContainer>
        <div>{children}</div>
      </S.ContentContainer>

      <S.SideMenu $isCollapsed={isMenuCollapsed}>
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

        <S.LoggedUser $isCollapsed={isMenuCollapsed} $isActive={location.pathname.includes('profile')}>
          <Button
            colorScheme="white"
            size="sm"
            isRounded={isMenuCollapsed}
            title={colorModeButtonConfig.title}
            onClick={toggleColorMode}
          >
            {colorModeButtonConfig.icon}
            {!isMenuCollapsed && colorModeButtonConfig.title}
          </Button>

          <Tooltip content="Meu perfil" side="right">
            <Link to="./profile">
              <Avatar size="sm" source={user?.picture} />
              <strong>Diego Ferreira</strong>
            </Link>
          </Tooltip>
        </S.LoggedUser>
      </S.SideMenu>
    </S.Container>
  );
}
