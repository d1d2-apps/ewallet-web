import { PropsWithChildren } from 'react';

import { Heading } from '@/components/elements';

import * as S from './PageTitle.styles';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle, children }: PropsWithChildren<PageTitleProps>) {
  return (
    <S.Container>
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
