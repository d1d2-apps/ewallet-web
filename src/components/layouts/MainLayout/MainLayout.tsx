import * as S from './MainLayout.styles';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return <S.Container>{children}</S.Container>;
}
