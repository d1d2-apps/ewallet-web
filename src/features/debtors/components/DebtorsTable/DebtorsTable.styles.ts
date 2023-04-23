import { opacify } from 'polished';
import styled from 'styled-components';

interface NameTableCellProps {
  $color: string;
}

export const NameTableCell = styled.td<NameTableCellProps>`
  & > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    & > div {
      padding: 0.25rem;
      border: 1px solid ${({ theme }) => opacify(-0.7, theme.colors.neutral)};
      border-radius: ${({ theme }) => theme.rounded.full};

      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        width: 1rem;
        height: 1rem;
        background-color: ${({ $color }) => $color};
        border-radius: ${({ theme }) => theme.rounded.full};
      }
    }
  }
`;

export const NeutralTableCell = styled.td`
  color: ${({ theme }) => opacify(-0.5, theme.colors.neutral)};
  text-align: center;
`;

export const ActionsTableCell = styled.td`
  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;
