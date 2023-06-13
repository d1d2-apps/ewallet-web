import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { ArrowLeft } from '@phosphor-icons/react';

import { Button, Heading } from '@/components/elements';

import * as S from './PageTitle.styles';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  showGoBackButton?: boolean;
}

export function PageTitle({ title, subtitle, showGoBackButton = false, children }: PropsWithChildren<PageTitleProps>) {
  return (
    <S.Container>
      {showGoBackButton && (
        <Button colorScheme="white" isRounded style={{ alignSelf: 'center' }} asChild>
          <Link to="..">
            <ArrowLeft />
          </Link>
        </Button>
      )}

      <main>
        <Heading>{title}</Heading>

        {!!subtitle && (
          <Heading variant="h4" asChild>
            <h4>{subtitle}</h4>
          </Heading>
        )}
      </main>

      {children}
    </S.Container>
  );
}
