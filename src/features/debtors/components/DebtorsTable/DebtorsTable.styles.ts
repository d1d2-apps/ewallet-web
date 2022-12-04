import styled from 'styled-components';

interface NameTableCellProps {
  color: string;
}

export const NameTableCell = styled.td<NameTableCellProps>`
  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    & > div {
      padding: 0.25rem;
      border: 1px solid var(--gray-200);
      border-radius: var(--rounded-full);

      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        width: 1rem;
        height: 1rem;
        background-color: ${({ color }) => color};
        border-radius: var(--rounded-full);
      }
    }
  }
`;

export const ActionsTableCell = styled.td.attrs({
  align: 'right'
})`
  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;
