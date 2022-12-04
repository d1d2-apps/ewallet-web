import * as S from './Table.styles';

interface TableRootProps {
  children: React.ReactNode;
}

function TableRoot({ children }: TableRootProps) {
  return <S.TableContainer>{children}</S.TableContainer>;
}

TableRoot.displayName = 'Table.Root';

interface TableHeadProps {
  children: React.ReactNode;
}

function TableHead({ children }: TableHeadProps) {
  return <S.TableHeadContainer>{children}</S.TableHeadContainer>;
}

TableHead.displayName = 'Table.Head';

interface TableBodyProps {
  children: React.ReactNode;
}

function TableBody({ children }: TableBodyProps) {
  return <S.TableBodyContainer>{children}</S.TableBodyContainer>;
}

TableBody.displayName = 'Table.Body';

export const Table = {
  Root: TableRoot,
  Head: TableHead,
  Body: TableBody
};
